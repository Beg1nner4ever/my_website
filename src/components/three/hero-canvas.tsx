"use client";

import { CanvasWrapper } from "./canvas-wrapper";
import { HeroScene } from "./hero-scene";

export function HeroCanvas() {
  return (
    <CanvasWrapper className="w-full h-full">
      <HeroScene />
    </CanvasWrapper>
  );
}
