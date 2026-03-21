"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion";
import { SpotlightCard } from "./spotlight-card";
import {
  Brain,
  Code2,
  Zap,
  Presentation,
  Bot,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI/ML Engineering",
    description:
      "End-to-end machine learning pipelines — from data exploration and model training to production deployment and monitoring.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Modern web applications built with React, Next.js, TypeScript, and Python. Clean architecture, great UX.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Intelligent agents and automated workflows that connect your tools, data, and processes. LLM orchestration and MCP integration.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Data analysis, visualization, and insights that drive decisions. Experience in banking, finance, and retail analytics.",
  },
  {
    icon: Zap,
    title: "AI Implementation",
    description:
      "Strategic AI adoption for your organization. From proof of concept to production-grade systems with measurable ROI.",
  },
  {
    icon: Presentation,
    title: "Crash Courses & Talks",
    description:
      "Hands-on workshops and conference talks on AI, ML, and modern development practices. Make your team AI-fluent.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            What I{" "}
            <span className="text-gradient">do</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            From strategy to implementation — I help businesses leverage AI
            and modern technology to solve real problems.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <SpotlightCard className="h-full">
                <div className="group p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon
                      size={22}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
