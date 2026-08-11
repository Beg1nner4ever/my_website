import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const socials = [
  ["GitHub", "https://github.com/Beg1nner4ever"],
  ["LinkedIn", "https://www.linkedin.com/in/pwidenfels/"],
  ["Email", "mailto:support@beg1nner4ever.com"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f17] py-12 text-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div>
            <Link href="/" className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
              PW / Product engineer
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/48">
              Applied AI, product design, and full-stack engineering from Paris.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-white/60 transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            {socials.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-8 text-sm text-white/60 transition-colors hover:text-white"
              >
                {label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/32">
          <span>© {new Date().getFullYear()} Philipp Widenfels</span>
          <span>Paris / CET</span>
        </div>
      </div>
    </footer>
  );
}
