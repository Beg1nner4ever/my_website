"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { clients } from "@/data/clients";

export function ClientsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="border-b border-black/15 bg-[#dfe4eb] py-7 text-[#0b0f17]">
      <div className="mx-auto grid max-w-[1500px] gap-5 px-5 sm:px-8 lg:grid-cols-[220px_1fr] lg:items-center lg:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/45">
          Project experience with
        </p>
        <div className="flex items-center gap-10 overflow-hidden lg:justify-between">
          {clients.slice(0, 7).map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: index * 0.04 }}
              className="shrink-0"
              title={`${client.name}: ${client.description}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.logoClass} max-w-[125px] object-contain grayscale opacity-55 mix-blend-multiply transition-opacity hover:opacity-90`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
