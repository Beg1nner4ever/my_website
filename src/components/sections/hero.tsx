"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0f17] text-white">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[820px] max-w-[1500px] grid-cols-1 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-24">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
            className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55"
          >
            <span>Philipp Widenfels</span>
            <span className="h-px w-8 bg-white/25" />
            <span>Applied AI + product engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.08, ease }}
            className="max-w-[860px] font-sans text-[clamp(3.5rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
          >
            From hard idea
            <br />
            to <span className="text-[#9cff57]">working product.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.2, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/68 md:text-xl"
          >
            I design and build AI systems, internal tools, and customer products
            for teams that need more than a prototype. Based in Paris, working
            across Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.28, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-[#9cff57] px-5 py-3 text-sm font-semibold text-[#0b0f17] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9cff57]"
            >
              See shipped work
              <ArrowDownRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/55 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/12 py-5">
            {[
              ["06", "cloud providers mapped"],
              ["45", "interactive UI lessons"],
              ["03", "live products below"],
            ].map(([value, label]) => (
              <div key={label} className="pr-3 last:pr-0">
                <p className="font-mono text-xl text-white md:text-2xl">{value}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.18, ease }}
          className="relative mt-16 min-h-[480px] lg:mt-0 lg:min-h-[650px]"
          aria-label="Selected project interface previews"
        >
          <div className="absolute left-[2%] top-[9%] w-[76%] rotate-[-3deg] overflow-hidden border border-white/15 bg-[#151b27] p-2 shadow-2xl shadow-black/50">
            <div className="mb-2 flex items-center gap-1.5 px-1 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="ml-2 font-mono text-[8px] uppercase tracking-wider text-white/35">
                learnthatui.com
              </span>
            </div>
            <Image
              src="/work/learnthatui.jpg"
              alt="LearnThatUI interactive daily lesson"
              width={1440}
              height={900}
              sizes="(max-width: 1024px) 72vw, 42vw"
              priority
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>

          <div className="absolute bottom-[3%] right-[-8%] w-[73%] rotate-[3deg] overflow-hidden border border-white/15 bg-[#151b27] p-2 shadow-2xl shadow-black/60 sm:right-[-2%]">
            <div className="mb-2 flex items-center gap-1.5 px-1 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="ml-2 font-mono text-[8px] uppercase tracking-wider text-white/35">
                infr4map / overview
              </span>
            </div>
            <Image
              src="/work/infr4map-overview.png"
              alt="infr4map multi-cloud infrastructure dashboard"
              width={1600}
              height={1000}
              sizes="(max-width: 1024px) 70vw, 40vw"
              priority
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>

          <div className="absolute right-[3%] top-[3%] border border-[#9cff57]/35 bg-[#0b0f17]/95 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9cff57] backdrop-blur">
            Real interfaces. Live now.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
