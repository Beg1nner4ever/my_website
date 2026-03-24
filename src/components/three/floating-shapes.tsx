"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  geometry,
  color,
  position,
  scale = 1,
  rotationSpeed = 0.3,
}: {
  geometry: "torus" | "icosahedron" | "octahedron" | "dodecahedron";
  color: string;
  position: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
    meshRef.current.rotation.y += delta * rotationSpeed;
  });

  const GeometryComponent = {
    torus: <torusGeometry args={[0.7, 0.25, 16, 32]} />,
    icosahedron: <icosahedronGeometry args={[0.65, 0]} />,
    octahedron: <octahedronGeometry args={[0.6, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[0.55, 0]} />,
  }[geometry];

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {GeometryComponent}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          wireframe
          roughness={0.5}
        />
      </mesh>
    </Float>
  );
}

export function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <FloatingShape
        geometry="torus"
        color="#d4654a"
        position={[-2, 0.5, 0]}
        scale={0.9}
        rotationSpeed={0.25}
      />
      <FloatingShape
        geometry="icosahedron"
        color="#4466cc"
        position={[1.5, -0.5, -1]}
        scale={0.8}
        rotationSpeed={0.35}
      />
      <FloatingShape
        geometry="octahedron"
        color="#c99a40"
        position={[0, 1.2, 0.5]}
        scale={0.7}
        rotationSpeed={0.2}
      />
      <FloatingShape
        geometry="dodecahedron"
        color="#d4654a"
        position={[2.5, 0.8, -0.5]}
        scale={0.5}
        rotationSpeed={0.4}
      />
    </>
  );
}
