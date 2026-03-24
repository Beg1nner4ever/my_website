"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, GraduationCap, Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { techStack } from "@/data/tech-stack";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

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

export function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero area */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Photo placeholder */}
          <motion.div {...fadeUp} className="md:col-span-4">
            <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary flex items-center justify-center">
              <span className="font-heading text-7xl text-primary/20">PW</span>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-8">
            <motion.div {...fadeUp}>
              <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
                About me
              </p>
              <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-foreground mb-8">
                Philipp Widenfels
              </h1>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I&apos;m an Applied AI Engineer and Data Scientist based in
                  Europe, working at the intersection of machine learning,
                  software engineering, and business strategy.
                </p>
                <p>
                  Currently at Mantu as AI Engineer & AI Board Associate, I help
                  enterprise clients navigate the AI landscape — from strategy
                  and proof-of-concept to production-grade systems that deliver
                  measurable impact.
                </p>
                <p>
                  My freelance practice focuses on building intelligent systems:
                  ML pipelines, AI agents, full-stack applications, and
                  data-driven products. I work with organizations that want to
                  move fast and ship things that matter.
                </p>
              </div>
            </AnimatedSection>

            {/* Quick facts */}
            <AnimatedSection delay={0.2} className="mt-10">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  Paris, France
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  CET (UTC+1)
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap size={16} className="text-primary" />
                  Business & Data Science — Albert School
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase size={16} className="text-primary" />
                  Available for freelance
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Background
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground mb-12">
            Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-border">
                <div className="md:col-span-3">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary mt-0.5">{exp.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Tools & Technologies
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground mb-12">
            Tech Stack
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
