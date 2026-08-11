"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ShapesCanvas = dynamic(
  () =>
    import("@/components/three/shapes-canvas").then((m) => m.ShapesCanvas),
  { ssr: false }
);

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

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation. I learn about your business, your data, and what success looks like for you.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "I build a proof of concept quickly — usually within weeks. You see results early, not months later.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once we validate the approach, I build the production system. Clean architecture, tested, documented.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "Deployment, monitoring, and knowledge transfer. Your team can maintain and extend what I build.",
  },
];

export function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header with floating shapes */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
              Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-foreground mb-6">
              What I can do
              <br />
              <span className="italic text-gradient">for you</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              From strategy to production. I help organizations build AI systems
              that deliver real, measurable impact.
            </p>
          </motion.div>

          {/* 3D floating shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block h-80"
          >
            <ShapesCanvas />
          </motion.div>
        </div>
      </section>

      {/* Services — editorial layout */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="space-y-0">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-border group">
                <div className="md:col-span-1 flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                    <service.icon size={22} className="text-primary" />
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-medium text-foreground">
                    {service.title}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            How I work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground mb-16">
            The Process
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative">
                <span className="text-6xl font-heading text-primary/10">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="rounded-2xl bg-secondary/50 p-12 md:p-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              I&apos;d love to hear about it. Let&apos;s discuss how I can help
              bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300 group"
            >
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
