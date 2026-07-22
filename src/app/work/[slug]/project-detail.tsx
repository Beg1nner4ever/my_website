"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Visit live site
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                View on GitHub
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary flex items-center justify-center">
            <span className="font-heading text-6xl text-primary/15">
              {project.title[0]}
            </span>
          </div>
        </motion.div>

        {/* Coming soon content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-8 rounded-xl border border-border bg-card text-center"
        >
          <p className="text-muted-foreground">
            Full case study coming soon. In the meantime, feel free to{" "}
            <Link href="/contact" className="text-primary hover:underline">
              get in touch
            </Link>{" "}
            if you&apos;d like to learn more about this project.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
