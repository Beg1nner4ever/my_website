"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary-foreground">
              Ready to build something
              <br />
              <span className="italic">intelligent?</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg mx-auto">
              Let&apos;s discuss how AI can transform your organization.
              No commitment, just a conversation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity duration-300 group"
            >
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
