"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const projects = getFeaturedProjects();

  return (
    <section ref={ref} id="selected-work" className="bg-[#eef1f5] py-24 text-[#0b0f17] md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 border-t border-black/20 pt-5 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/50">
              Selected evidence / 2026
            </p>
            <h2 className="mt-4 max-w-2xl font-sans text-5xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-7xl">
              Shipped, not staged.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-black/60 md:justify-self-end md:text-lg">
            These are real product surfaces from live or open-source work. Each
            project combines product decisions, interface design, and the
            engineering required to make it hold up outside a demo.
          </p>
        </div>

        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: index * 0.1, ease }}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <Link
                href={`/work/${project.slug}`}
                className={`group relative block overflow-hidden border border-black/10 bg-white p-2 shadow-[0_24px_80px_rgba(20,30,50,0.12)] lg:col-span-8 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                aria-label={`View ${project.title} case study`}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} interface`}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                )}
                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-[#9cff57] text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={19} />
                </span>
              </Link>

              <div className={`lg:col-span-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="mb-5 flex items-center justify-between border-b border-black/15 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-sans text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-black/60">
                  {project.description}
                </p>
                <p className="mt-6 border-l-2 border-[#3157ff] pl-4 text-sm font-medium leading-relaxed text-black/80">
                  {project.outcome}
                </p>
                <ul className="mt-7 space-y-2">
                  {project.proof.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-black/58">
                      <span className="h-1.5 w-1.5 bg-[#3157ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                >
                  Open evidence
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 border-t border-black/20 pt-6 text-right md:mt-36">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-sm font-semibold hover:text-[#3157ff]"
          >
            Browse the full project index
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
