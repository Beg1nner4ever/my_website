"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

function DefaultFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
  );
}

export function CanvasWrapper({
  children,
  className = "",
  fallback,
}: CanvasWrapperProps) {
  return (
    <div className={className}>
      <Suspense fallback={fallback ?? <DefaultFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: "transparent" }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
