"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function WorkPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-foreground mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A collection of projects spanning AI engineering, data science, and
            full-stack development.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group block h-full"
              >
                <div className="h-full p-8 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/9] rounded-lg bg-gradient-to-br from-primary/8 via-accent/5 to-secondary mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-3xl text-primary/15">
                        {project.title[0]}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={14} className="text-foreground" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Client work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground mb-12">
            Who I&apos;ve Worked With
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <AnimatedSection key={client.name} delay={i * 0.06}>
              <div className="p-6 rounded-lg border border-border bg-card group hover:border-primary/20 transition-all duration-500">
                <div className="h-12 flex items-center mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-6 w-auto object-contain opacity-50 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {client.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
                <span className="mt-2 inline-block text-[10px] font-medium uppercase tracking-widest text-primary/60">
                  {client.industry}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
