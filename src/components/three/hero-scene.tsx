"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const CONNECTION_DISTANCE = 1.8;
const MOUSE_INFLUENCE = 2.0;

function NeuralMesh() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Generate random particle positions
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions: pos, velocities: vel };
  }, []);

  // Line geometry for connections
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    // Pre-allocate for max possible connections
    const maxLines = PARTICLE_COUNT * 10;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  // Track mouse
  const handlePointerMove = useMemo(
    () => (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  // Add/remove mouse listener
  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [handlePointerMove]);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const positionAttr = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = positionAttr.array as Float32Array;

    const mouseX = mouseRef.current.x * viewport.width * 0.5;
    const mouseY = mouseRef.current.y * viewport.height * 0.5;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;

      // Apply velocity
      arr[ix] += velocities[ix];
      arr[ix + 1] += velocities[ix + 1];
      arr[ix + 2] += velocities[ix + 2];

      // Mouse influence — gentle attraction
      const dx = mouseX - arr[ix];
      const dy = mouseY - arr[ix + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_INFLUENCE) {
        const force = (1 - dist / MOUSE_INFLUENCE) * 0.002;
        arr[ix] += dx * force;
        arr[ix + 1] += dy * force;
      }

      // Boundary wrapping
      if (arr[ix] > 5) arr[ix] = -5;
      if (arr[ix] < -5) arr[ix] = 5;
      if (arr[ix + 1] > 4) arr[ix + 1] = -4;
      if (arr[ix + 1] < -4) arr[ix + 1] = 4;
    }
    positionAttr.needsUpdate = true;

    // Update connections
    const linePos = lineGeometry.attributes.position
      .array as Float32Array;
    const lineCol = lineGeometry.attributes.color.array as Float32Array;
    let lineIndex = 0;

    // Coral color in linear RGB (approximate oklch(0.63 0.22 25))
    const r1 = 0.85;
    const g1 = 0.35;
    const b1 = 0.28;
    // Blue accent
    const r2 = 0.2;
    const g2 = 0.35;
    const b2 = 0.85;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const ix = i * 3;
        const jx = j * 3;
        const dx = arr[ix] - arr[jx];
        const dy = arr[ix + 1] - arr[jx + 1];
        const dz = arr[ix + 2] - arr[jx + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const li = lineIndex * 6;

          linePos[li] = arr[ix];
          linePos[li + 1] = arr[ix + 1];
          linePos[li + 2] = arr[ix + 2];
          linePos[li + 3] = arr[jx];
          linePos[li + 4] = arr[jx + 1];
          linePos[li + 5] = arr[jx + 2];

          // Gradient from coral to blue based on position
          const t = (arr[ix] + 5) / 10; // 0 to 1 across screen
          const r = r1 * (1 - t) + r2 * t;
          const g = g1 * (1 - t) + g2 * t;
          const b = b1 * (1 - t) + b2 * t;

          lineCol[li] = r * alpha;
          lineCol[li + 1] = g * alpha;
          lineCol[li + 2] = b * alpha;
          lineCol[li + 3] = r * alpha;
          lineCol[li + 4] = g * alpha;
          lineCol[li + 5] = b * alpha;

          lineIndex++;
          if (lineIndex >= PARTICLE_COUNT * 10) break;
        }
      }
      if (lineIndex >= PARTICLE_COUNT * 10) break;
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    (
      lineGeometry.attributes.position as THREE.BufferAttribute
    ).needsUpdate = true;
    (lineGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#d4654a"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.25} />
      </lineSegments>
    </>
  );
}

export function HeroScene() {
  return <NeuralMesh />;
}
