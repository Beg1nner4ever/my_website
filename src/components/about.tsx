"use client";

import { FadeIn } from "./motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            A bit about{" "}
            <span className="text-gradient">me</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="aspect-[4/5] rounded-2xl bg-card border border-border overflow-hidden relative glow-card">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-gradient">
                    PW
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.2} className="md:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m an Applied AI Engineer and Data Scientist with a passion for
              turning complex problems into elegant, intelligent solutions. Currently
              serving as{" "}
              <span className="text-foreground font-medium">
                AI Engineer & AI Board Associate at Mantu
              </span>
              , a global consulting firm where I drive AI strategy and implementation
              across enterprise clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans the full stack &mdash; from designing ML pipelines and
              deploying production AI systems to building the interfaces that make
              them accessible. I&apos;ve delivered projects across{" "}
              <span className="text-foreground font-medium">
                banking, finance, retail, and consulting
              </span>
              , always focused on measurable business impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond client work, I build AI-powered tools, contribute to open source,
              and share knowledge through crash courses and conference talks. I believe
              in learning by doing &mdash; hence the name{" "}
              <span className="text-gradient font-medium">beginner forever</span>.
            </p>

            <div className="pt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Europe / Remote
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-primary" />
                AI Engineer @ Mantu
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-primary" />
                BSc Data Science
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
