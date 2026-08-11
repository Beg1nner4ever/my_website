"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const shipped = projects.filter((project) => project.image);
const labs = projects.filter((project) => !project.image);
const ease = [0.22, 1, 0.36, 1] as const;

export function WorkPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#eef1f5] pb-24 pt-28 text-[#0b0f17] md:pb-36 md:pt-40">
      <header className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/45">
          Project index / live evidence
        </p>
        <div className="mt-5 grid gap-8 border-b border-black/20 pb-14 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h1 className="max-w-5xl font-sans text-6xl font-semibold leading-[0.86] tracking-[-0.065em] sm:text-7xl md:text-9xl">
            Work that left the prototype.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-black/58 lg:justify-self-end">
            Product strategy, interface decisions, applied AI, and production
            engineering shown through the things people can actually open and use.
          </p>
        </div>
      </header>

      <section className="mx-auto mt-16 max-w-[1500px] space-y-16 px-5 sm:px-8 md:mt-24 md:space-y-28 lg:px-12">
        {shipped.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
            className="grid gap-7 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-10"
          >
            <Link
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden border border-black/10 bg-white p-2 shadow-[0_20px_65px_rgba(20,30,50,0.1)]"
            >
              <Image
                src={project.image!}
                alt={project.imageAlt ?? `${project.title} interface`}
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 75vw"
                priority={index === 0}
                className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.012]"
              />
              <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-[#9cff57]">
                <ArrowUpRight size={19} />
              </span>
            </Link>

            <div>
              <div className="flex justify-between border-b border-black/20 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">
                <span>{project.status}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-black/58">{project.description}</p>
              <p className="mt-5 border-l-2 border-[#3157ff] pl-4 text-sm font-medium leading-relaxed">
                {project.outcome}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
              >
                View project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto mt-28 max-w-[1500px] px-5 sm:px-8 md:mt-40 lg:px-12">
        <div className="border-t border-black/20 pt-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/45">
            Active lab work
          </p>
        </div>
        <div className="mt-8 border-t border-black/20">
          {labs.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group grid gap-4 border-b border-black/20 py-7 transition-colors hover:bg-white/60 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:px-3"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">{project.title}</h2>
              <p className="text-sm leading-relaxed text-black/55">{project.outcome}</p>
              <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
