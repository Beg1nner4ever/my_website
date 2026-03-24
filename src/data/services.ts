import {
  Brain,
  Code2,
  Bot,
  Database,
  Zap,
  Presentation,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export const services: Service[] = [
  {
    icon: Brain,
    title: "AI/ML Engineering",
    slug: "ai-ml-engineering",
    description:
      "End-to-end machine learning pipelines — from data exploration and model training to production deployment and monitoring.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    slug: "full-stack-development",
    description:
      "Modern web applications built with React, Next.js, TypeScript, and Python. Clean architecture, great UX.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    slug: "ai-agents-automation",
    description:
      "Intelligent agents and automated workflows that connect your tools, data, and processes. LLM orchestration and MCP integration.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    slug: "data-science-analytics",
    description:
      "Data analysis, visualization, and insights that drive decisions. Experience in banking, finance, and retail analytics.",
  },
  {
    icon: Zap,
    title: "AI Implementation",
    slug: "ai-implementation",
    description:
      "Strategic AI adoption for your organization. From proof of concept to production-grade systems with measurable ROI.",
  },
  {
    icon: Presentation,
    title: "Crash Courses & Talks",
    slug: "crash-courses-talks",
    description:
      "Hands-on workshops and conference talks on AI, ML, and modern development practices. Make your team AI-fluent.",
  },
];
