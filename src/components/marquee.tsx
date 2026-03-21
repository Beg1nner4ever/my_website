"use client";

import { FadeIn } from "./motion";

const topRow = [
  "Python", "TypeScript", "React", "Next.js", "Node.js", "FastAPI",
  "PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy",
];

const bottomRow = [
  "PostgreSQL", "SQLite", "Docker", "Azure", "Cloudflare", "MLX",
  "LangChain", "Claude API", "MCP", "Tailwind CSS", "Git",
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <FadeIn>
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Technologies
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Tools of the{" "}
            <span className="text-gradient">trade</span>
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="space-y-4">
        <MarqueeRow items={topRow} speed={35} />
        <MarqueeRow items={bottomRow} reverse speed={40} />
      </FadeIn>
    </section>
  );
}
