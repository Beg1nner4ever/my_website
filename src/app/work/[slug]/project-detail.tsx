"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectDetail({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="bg-[#eef1f5] pb-24 pt-28 text-[#0b0f17] md:pb-36 md:pt-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black/48 hover:text-black"
        >
          <ArrowLeft size={13} />
          Project index
        </Link>

        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
          className="mt-10 grid gap-10 border-b border-black/20 pb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <div className="flex gap-5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">
              <span>{project.status}</span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-5 font-sans text-6xl font-semibold leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-9xl">
              {project.title}
            </h1>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-black/65">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3157ff] px-5 py-3 text-sm font-semibold text-white"
                >
                  Open live product
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black/25 px-5 py-3 text-sm font-semibold"
                >
                  View source
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </motion.header>

        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.12, ease }}
            className="mt-12 border border-black/10 bg-white p-2 shadow-[0_28px_90px_rgba(20,30,50,0.12)]"
          >
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} product interface`}
              width={1600}
              height={1000}
              sizes="100vw"
              priority
              className="aspect-[16/9] w-full object-cover object-top"
            />
          </motion.div>
        )}

        <section className="mt-16 grid gap-12 border-t border-black/20 pt-8 md:mt-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">My role</p>
            <p className="mt-3 text-lg font-semibold">{project.role}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">Evidence</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              {project.outcome}
            </h2>
            <ul className="mt-10 border-t border-black/20">
              {project.proof.map((item) => (
                <li key={item} className="flex items-center justify-between gap-8 border-b border-black/20 py-5 text-base">
                  <span>{item}</span>
                  <span className="h-2 w-2 shrink-0 bg-[#9cff57] ring-1 ring-black/20" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.secondaryImage && (
          <div className="mt-16 border border-black/10 bg-[#0b0f17] p-2 md:mt-24">
            <Image
              src={project.secondaryImage}
              alt={`${project.title} detailed interface view`}
              width={1600}
              height={1000}
              sizes="100vw"
              className="w-full object-cover"
            />
          </div>
        )}

        {!project.image && (
          <section className="mt-16 border-t border-black/20 pt-8 md:mt-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">Current state</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              Active research, documented without pretending it is a finished product.
            </h2>
          </section>
        )}
      </div>
    </article>
  );
}
