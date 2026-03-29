export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "OpenClaw",
    slug: "openclaw",
    description:
      "Personal AI assistant that orchestrates Claude Code sub-agents with MCP tools. An always-on assistant connected to tools, information, and daily workflows.",
    tags: ["TypeScript", "Claude API", "MCP", "AI Agents"],
    github: "https://github.com/Beg1nner4ever/owui-openclaw-integration",
    featured: true,
  },
  {
    title: "MLX Speech Converter",
    slug: "mlx-speech-converter",
    description:
      "Converting NVIDIA's speech-to-speech model from CUDA to Apple MLX format. Enabling local voice interaction on Apple Silicon Macs.",
    tags: ["Python", "MLX", "CUDA", "Speech AI"],
    featured: true,
  },
  {
    title: "Youtuber Agent",
    slug: "youtuber-agent",
    description:
      "Automated creative content pipeline using AI. Goal: revenue-generating automated content creation extensible to multiple platforms.",
    tags: ["Python", "AI Content", "Automation", "Video"],
  },
  {
    title: "Reachy Mini",
    slug: "reachy-mini",
    description:
      "Working with Pollen Robotics' Reachy Mini robot — future physical interface for the personal assistant vision. Robotics meets AI.",
    tags: ["Python", "Robotics", "Computer Vision", "IoT"],
  },
  {
    title: "CopilotKit Demos",
    slug: "copilotkit-demos",
    description:
      "Published demo applications showcasing CopilotKit's AI copilot integration capabilities. Smart todos and consulting dashboards.",
    tags: ["React", "TypeScript", "CopilotKit", "AI UX"],
    github: "https://github.com/Beg1nner4ever/copilotkit-smart-todos",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}
