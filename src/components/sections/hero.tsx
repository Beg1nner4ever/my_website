"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  const [showCanvas, setShowCanvas] = useState(false);

  // Delay 3D scene load to prioritize text content; skip it entirely on
  // small screens and for reduced-motion users — it's decorative only
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (!prefersReducedMotion && !isSmallScreen) {
      const timer = setTimeout(() => setShowCanvas(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <section className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      {/* 3D neural mesh scene */}
      {showCanvas && (
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <HeroCanvas />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/20 text-primary bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for freelance
            </span>
          </motion.div>

          {/* Main headline — editorial serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground"
          >
            I take AI from
            <br />
            proof of concept
            <br />
            to <span className="text-gradient italic">production</span>.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Applied AI Engineer & Data Scientist in Paris. I help enterprise
            teams turn AI ambitions into shipped, measurable products —
            pipelines, agents, and full-stack applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300 group"
            >
              Let&apos;s work together
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-foreground rounded-full border border-border hover:border-foreground/20 transition-all duration-300"
            >
              See my work
            </Link>
          </motion.div>
        </div>

{/* Scroll indicator removed — content is visible above fold */}
      </div>
    </section>
  );
}
