export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  status: "Live" | "Open source" | "Lab";
  proof: string[];
  outcome: string;
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  github?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LearnThatUI",
    slug: "learnthatui",
    description:
      "A daily visual workout that teaches product-design vocabulary through interactive interface specimens instead of a static glossary.",
    tags: ["Product engineering", "AI", "Education"],
    role: "Product, design & engineering",
    year: "2026",
    status: "Live",
    proof: [
      "45 interactive challenges",
      "Daily progression and streaks",
      "GPT-5.6 redesign studio",
    ],
    outcome: "A complete learning product shipped during OpenAI Build Week 2026.",
    image: "/work/learnthatui.jpg",
    imageAlt:
      "LearnThatUI daily challenge with an interactive mobile interface specimen",
    link: "https://learnthatui.com",
    github: "https://github.com/Beg1nner4ever/learnthatui",
    featured: true,
  },
  {
    title: "infr4map",
    slug: "infr4map",
    description:
      "A local-first map that discovers cloud resources and shows how repositories, deployments, domains, and infrastructure connect.",
    tags: ["Cloud", "Data visualisation", "DevOps"],
    role: "Product & full-stack engineering",
    year: "2026",
    status: "Open source",
    proof: [
      "Six cloud providers",
      "Cross-provider relationships",
      "Self-hosted and local-first",
    ],
    outcome: "Turns a scattered multi-cloud estate into one explorable system map.",
    image: "/work/infr4map-overview.png",
    secondaryImage: "/work/infr4map-graph.png",
    imageAlt: "infr4map dashboard showing cloud resources and provider health",
    github: "https://github.com/Beg1nner4ever/inframap",
    featured: true,
  },
  {
    title: "Le Tilleul",
    slug: "le-tilleul",
    description:
      "A digital platform for a family-run restaurant: a production website, an editor the team can use, and a private operational finance widget.",
    tags: ["Client delivery", "Web platform", "Operations"],
    role: "Strategy, design & engineering",
    year: "2026",
    status: "Live",
    proof: [
      "Bilingual production website",
      "Team-managed content",
      "Bank and POS finance widget",
    ],
    outcome: "A public customer experience and an internal owner tool, delivered as one system.",
    image: "/work/le-tilleul.jpg",
    imageAlt: "Le Tilleul restaurant website showing its garden terrace",
    link: "https://restaurant-letilleul.com",
    featured: true,
  },
  {
    title: "n0n0gram",
    slug: "n0n0gram",
    description:
      "A polished browser puzzle with a fresh daily grid, free play, a puzzle library, rankings, and persistent player progress.",
    tags: ["Consumer product", "Game UX", "Next.js"],
    role: "Product, design & engineering",
    year: "2026",
    status: "Live",
    proof: ["Daily puzzle", "Player progression", "Playable in the browser"],
    outcome: "A complete consumer game loop, from onboarding to repeat daily play.",
    image: "/work/n0n0gram.jpg",
    imageAlt: "n0n0gram daily puzzle and player statistics interface",
    link: "https://nonogram-ten-rho.vercel.app",
  },
  {
    title: "OpenClaw",
    slug: "openclaw",
    description:
      "A personal AI assistant that coordinates coding agents, tools, information, and recurring workflows.",
    tags: ["AI agents", "MCP", "TypeScript"],
    role: "AI systems engineering",
    year: "2026",
    status: "Lab",
    proof: ["Multi-agent orchestration", "Tool integrations", "Persistent workflows"],
    outcome: "An ongoing exploration of useful, always-available personal agents.",
  },
  {
    title: "MLX Speech Converter",
    slug: "mlx-speech-converter",
    description:
      "Research and conversion work bringing a CUDA speech-to-speech model to Apple MLX for local use on Apple Silicon.",
    tags: ["Speech AI", "MLX", "Model conversion"],
    role: "Applied ML engineering",
    year: "2026",
    status: "Lab",
    proof: ["CUDA-to-MLX conversion", "Apple Silicon target", "Local inference research"],
    outcome: "A practical path toward local voice interaction without an NVIDIA runtime.",
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs() {
  return projects.map((project) => project.slug);
}
