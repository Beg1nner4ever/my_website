"use client";

import { CanvasWrapper } from "./canvas-wrapper";
import { FloatingShapes } from "./floating-shapes";

export function ShapesCanvas() {
  return (
    <CanvasWrapper className="w-full h-full">
      <FloatingShapes />
    </CanvasWrapper>
  );
}
