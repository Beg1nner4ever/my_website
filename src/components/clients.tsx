"use client";

import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "./motion";
import { SpotlightCard } from "./spotlight-card";

const clients = [
  {
    name: "BNP Paribas",
    description: "Process mining & data quality analysis on a 14.5GB transaction dataset",
    industry: "Banking",
    logo: "/logos/bnp-paribas.png",
  },
  {
    name: "Edmond de Rothschild",
    description: "Competitive intelligence & sales strategy dashboard for asset management",
    industry: "Finance",
    logo: "/logos/edmond-de-rothschild.png",
  },
  {
    name: "L'Oréal",
    description: "Sustainability & marketing analysis",
    industry: "Retail",
    logo: "/logos/loreal.png",
  },
  {
    name: "Louis Vuitton",
    description: "Data-driven strategy to improve online sales performance",
    industry: "Luxury",
    logo: "/logos/louis-vuitton.png",
  },
  {
    name: "Carrefour",
    description: "Systemic analysis of optimal product distribution across store formats in France",
    industry: "Retail",
    logo: "/logos/carrefour.png",
  },
  {
    name: "Generali",
    description: "Data analysis & business intelligence",
    industry: "Insurance",
    logo: "/logos/generali.png",
  },
  {
    name: "MINARM",
    description: "Data-driven optimization of recruitment campaigns across France",
    industry: "Defense",
    logo: "/logos/minarm.png",
  },
  {
    name: "Asmodee",
    description: "Data-driven business analysis",
    industry: "Entertainment",
    logo: "/logos/asmodee.png",
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
              <SpotlightCard className="h-full">
                <div className="group p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-border flex items-center justify-center overflow-hidden">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={28}
                        height={28}
                        className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-primary/60 uppercase tracking-wider">
                      {client.industry}
                    </span>
                  </div>
                  <h3 className="text-base font-bold tracking-tight group-hover:text-gradient transition-all">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {client.description}
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
