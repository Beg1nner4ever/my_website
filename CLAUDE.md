@AGENTS.md

# Portfolio Website — beg1nner4ever.com

## Overview
Personal portfolio for Philipp Widenfels. Hosted on Vercel, domain on Cloudflare.
GitHub: `Beg1nner4ever/my_website` (auto-deploys on push to main).

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui (Radix-based components)
- Framer Motion (animations)
- Lenis (smooth scroll)
- Bun (package manager, never npm/yarn)

## Structure
- `src/components/` — All sections: hero, about, bento-grid, services, marquee, experience, clients, projects, contact, footer, navbar
- `src/components/ui/` — shadcn/ui primitives (button, card, badge, separator, sheet)
- `src/components/motion.tsx` — Reusable animation wrappers (FadeIn, StaggerChildren, StaggerItem)
- `src/components/spotlight-card.tsx` — Mouse-tracking glow card effect
- `src/components/smooth-scroll.tsx` — Lenis provider
- `public/logos/` — Client company logos (need replacement with high-res versions)

## Key Files
- `TODO.md` — Outstanding improvements and next steps. Check before starting work.

## Conventions
- Dark theme by default (blue-violet accent palette)
- Custom CSS classes in `globals.css`: `.glass`, `.glow-card`, `.text-gradient`, `.noise`, `.animate-marquee`
- All animated components are `"use client"`; page.tsx is a Server Component
- Vercel auto-deploys from GitHub on push to main
