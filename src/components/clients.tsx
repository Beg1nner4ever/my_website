"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "./motion";

const clients = [
  {
    name: "BNP Paribas",
    description: "Process mining & data quality analysis on a 14.5GB transaction dataset",
    industry: "Banking",
  },
  {
    name: "Edmond de Rothschild",
    description: "Competitive intelligence & sales strategy dashboard for asset management",
    industry: "Finance",
  },
  {
    name: "L'Oréal",
    description: "Sustainability & marketing analysis",
    industry: "Retail",
  },
  {
    name: "Louis Vuitton",
    description: "Data-driven strategy to improve online sales performance",
    industry: "Luxury",
  },
  {
    name: "Carrefour",
    description: "Systemic analysis of optimal product distribution across store formats in France",
    industry: "Retail",
  },
  {
    name: "Generali",
    description: "Data analysis & business intelligence",
    industry: "Insurance",
  },
  {
    name: "MINARM",
    description: "Data-driven optimization of recruitment campaigns across France",
    industry: "Defense",
  },
  {
    name: "Asmodee",
    description: "Data-driven business analysis",
    industry: "Entertainment",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Companies I&apos;ve worked{" "}
            <span className="text-gradient">with</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Consulting engagements delivering data analysis, AI implementation,
            and strategic insights across industries.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client) => (
            <StaggerItem key={client.name}>
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 h-full">
                {/* Company name as logo-style text */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                    {client.industry}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight group-hover:text-gradient transition-all">
                  {client.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
