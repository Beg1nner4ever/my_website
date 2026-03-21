"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion";

const experiences = [
  {
    period: "Present",
    role: "AI Engineer & AI Board Associate",
    company: "Mantu",
    description:
      "Leading AI strategy and implementation across enterprise clients in the consulting space. Driving the AI board initiatives and mentoring teams on AI adoption.",
    tags: ["AI Strategy", "MLOps", "Consulting", "Leadership"],
  },
  {
    period: "Previous",
    role: "Data Scientist / AI Engineer",
    company: "Banking & Finance Projects",
    description:
      "Delivered multiple data analysis and AI implementation projects for major financial institutions. Built predictive models, automated reporting, and risk assessment systems.",
    tags: ["Python", "ML Pipelines", "Data Analysis", "Finance"],
  },
  {
    period: "Previous",
    role: "Data & AI Projects",
    company: "Retail Industry",
    description:
      "Implemented AI solutions for retail clients including demand forecasting, customer segmentation, and automated recommendation systems.",
    tags: ["Forecasting", "Segmentation", "Automation", "Retail"],
  },
  {
    period: "Education",
    role: "Bachelor of Science",
    company: "Data Science",
    description:
      "Comprehensive foundation in statistics, machine learning, programming, and data engineering. Built the analytical and technical foundation for applied AI work.",
    tags: ["Statistics", "Machine Learning", "Programming", "Data Engineering"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve{" "}
            <span className="text-gradient">been</span>
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-16 space-y-0">
          {experiences.map((exp, i) => (
            <StaggerItem key={i}>
              <div className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-0">
                {/* Timeline dot */}
                <div className="hidden md:block">
                  <div className="sticky top-32">
                    <span className="text-sm font-mono text-primary">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="md:hidden text-sm font-mono text-primary mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-primary mt-1">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
