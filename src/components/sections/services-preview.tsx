"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const stages = [
  {
    label: "Frame",
    title: "Find the product inside the brief.",
    copy: "Clarify the user, the operational constraint, and what proof of value should look like before choosing a stack.",
  },
  {
    label: "Build",
    title: "Make the risky part real first.",
    copy: "Prototype the hard interaction, data path, or model behavior early, then turn the winning direction into a coherent product.",
  },
  {
    label: "Ship",
    title: "Own the last twenty percent.",
    copy: "Responsive QA, accessibility, monitoring, deployment, documentation, and a handoff people can actually operate.",
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="bg-white py-24 text-[#0b0f17] md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/45">
              How I work
            </p>
            <h2 className="mt-4 max-w-xl font-sans text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl">
              One owner from ambiguity to launch.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/58">
              The useful part of hiring independently is continuity: the person
              who questions the brief is also the person who designs the system,
              writes the code, and sees the release through.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
            >
              See capabilities
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="border-t border-black/20">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: index * 0.08 }}
                className="grid gap-4 border-b border-black/20 py-8 md:grid-cols-[100px_1fr_1fr] md:gap-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#3157ff]">
                  {stage.label}
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.025em] md:text-2xl">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/55">{stage.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
