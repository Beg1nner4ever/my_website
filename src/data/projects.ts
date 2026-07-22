export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  github?: string;
  /** Live product/demo URL */
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LearnThatUI",
    slug: "learnthatui",
    description:
      "A daily visual workout for learning the language of interface design — observe a specimen, name the pattern, build a streak. Built for OpenAI Build Week 2026, Education track.",
    tags: ["TypeScript", "AI", "Education", "Product Design"],
    link: "https://learnthatui.com",
    featured: true,
  },
  {
    title: "infr4map",
    slug: "infr4map",
    description:
      "Multi-cloud infrastructure topology visualization. Auto-discovers resources across GitHub, Vercel, Cloudflare, AWS, Azure, and GCP and renders an interactive graph of how your whole stack connects.",
    tags: ["Python", "Cloud", "DevOps", "Visualization"],
    featured: true,
  },
  {
    title: "Le Tilleul",
    slug: "le-tilleul",
    description:
      "Full digital platform for a Saint-Paul-de-Vence restaurant: public website with a Sanity CMS the team edits themselves, plus an always-on-top desktop widget streaming live bank and point-of-sale figures to the owner.",
    tags: ["Client Work", "Astro", "Sanity", "Tauri"],
    link: "https://restaurant-letilleul.com",
  },
  {
    title: "OpenClaw",
    slug: "openclaw",
    description:
      "Personal AI assistant that orchestrates Claude Code sub-agents with MCP tools. An always-on assistant connected to tools, information, and daily workflows.",
    tags: ["TypeScript", "Claude API", "MCP", "AI Agents"],
  },
  {
    title: "n0n0gram",
    slug: "n0n0gram",
    description:
      "Modern nonogram puzzle game — daily puzzles, a curated library, and an image-to-puzzle creator. Playable in the browser.",
    tags: ["TypeScript", "Next.js", "Games", "UX"],
    link: "https://nonogram-ten-rho.vercel.app",
  },
  {
    title: "MLX Speech Converter",
    slug: "mlx-speech-converter",
    description:
      "Converting NVIDIA's speech-to-speech model from CUDA to Apple MLX format. Enabling local voice interaction on Apple Silicon Macs.",
    tags: ["Python", "MLX", "CUDA", "Speech AI"],
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
