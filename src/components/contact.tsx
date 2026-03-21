"use client";

import { FadeIn } from "./motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-12 md:p-20">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-2xl">
            <FadeIn>
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                Contact
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Let&apos;s build something{" "}
                <span className="text-gradient">great</span> together.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Whether you need an AI solution, a full-stack application, or
                someone to teach your team &mdash; I&apos;m here to help. Let&apos;s
                talk about what you&apos;re building.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="mailto:hello@beg1nner4ever.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <Mail size={18} />
                  Get in touch
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <a
                  href="https://github.com/Beg1nner4ever"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:hello@beg1nner4ever.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
