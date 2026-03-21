"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion";
import { SpotlightCard } from "./spotlight-card";
import {
  Globe,
  Zap,
  Clock,
  Coffee,
  Cpu,
  Terminal,
} from "lucide-react";

const techStack = [
  "Python", "TypeScript", "React", "Next.js", "Node.js",
  "PyTorch", "scikit-learn", "Pandas", "FastAPI",
  "PostgreSQL", "Docker", "Azure", "MLX",
];

export function BentoGrid() {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            At a glance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Quick{" "}
            <span className="text-gradient">facts</span>
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          {/* Status - wide */}
          <StaggerItem className="col-span-2">
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap size={14} className="text-primary" />
                  Current focus
                </div>
                <div>
                  <p className="text-lg font-semibold">AI Agents & Orchestration</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Building autonomous systems that coordinate multiple AI models
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Location */}
          <StaggerItem>
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <Globe size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="text-lg font-semibold">Europe</p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Timezone */}
          <StaggerItem>
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <Clock size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Timezone</p>
                  <p className="text-lg font-semibold">CET / Remote</p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Tech stack - wide and tall */}
          <StaggerItem className="col-span-2 row-span-2">
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <Terminal size={14} className="text-primary" />
                  Tech stack
                </div>
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Philosophy */}
          <StaggerItem>
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <Coffee size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Philosophy</p>
                  <p className="text-lg font-semibold">Learn by doing</p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Hardware */}
          <StaggerItem>
            <SpotlightCard className="h-full">
              <div className="p-6 h-full flex flex-col justify-between">
                <Cpu size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Hardware</p>
                  <p className="text-lg font-semibold">Apple Silicon</p>
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
