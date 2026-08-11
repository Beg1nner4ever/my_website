import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[#3157ff] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            Available for selected freelance work
          </p>
          <h2 className="mt-5 max-w-5xl font-sans text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            Bring the messy brief.
            <br />
            We&apos;ll make it real.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#0b0f17] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Tell me what you&apos;re building
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
