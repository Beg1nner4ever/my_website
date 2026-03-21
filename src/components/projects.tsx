"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion";
import { SpotlightCard } from "./spotlight-card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "OpenClaw",
    description:
      "Personal AI assistant that orchestrates Claude Code sub-agents with MCP tools. An always-on assistant connected to tools, information, and daily workflows.",
    tags: ["TypeScript", "Claude API", "MCP", "AI Agents"],
    github: "https://github.com/Beg1nner4ever",
    featured: true,
  },
  {
    title: "MLX Speech Converter",
    description:
      "Converting NVIDIA's speech-to-speech model from CUDA to Apple MLX format. Enabling local voice interaction on Apple Silicon Macs.",
    tags: ["Python", "MLX", "CUDA", "Speech AI"],
    github: "https://github.com/Beg1nner4ever",
    featured: true,
  },
  {
    title: "Youtuber Agent",
    description:
      "Automated creative content pipeline using AI. Goal: revenue-generating automated content creation extensible to multiple platforms.",
    tags: ["Python", "AI Content", "Automation", "Video"],
    github: "https://github.com/Beg1nner4ever",
  },
  {
    title: "Reachy Mini",
    description:
      "Working with Pollen Robotics' Reachy Mini robot — future physical interface for the personal assistant vision. Robotics meets AI.",
    tags: ["Python", "Robotics", "Computer Vision", "IoT"],
    github: "https://github.com/Beg1nner4ever",
  },
  {
    title: "CopilotKit Demos",
    description:
      "Published demo applications showcasing CopilotKit's AI copilot integration capabilities. Smart todos and consulting dashboards.",
    tags: ["React", "TypeScript", "CopilotKit", "AI UX"],
    github: "https://github.com/Beg1nner4ever",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Things I&apos;ve{" "}
            <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            A selection of personal projects and experiments. I build to learn,
            and I learn to build better.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <SpotlightCard className="h-full">
                <div className="group relative p-6 h-full flex flex-col">
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                        Featured
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors ml-auto"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
