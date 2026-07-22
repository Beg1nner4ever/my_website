# beg1nner4ever.com

Personal portfolio of Philipp Widenfels — Applied AI Engineer & Data Scientist.

Next.js (App Router) + Tailwind CSS 4 + Framer Motion + React Three Fiber,
deployed on Vercel at [beg1nner4ever.com](https://beg1nner4ever.com).

## Development

```bash
bun install
bun run dev      # dev server on :3000
bun run build    # production build
```

## Structure

- `src/app/` — routes (home, about, work, services, blog, contact)
- `src/components/sections/` — homepage sections; `layout/` — navbar, footer, preloader
- `src/data/` — projects, services, clients, experience, tech stack (edit content here)
- `content/blog/` — MDX blog posts
- `src/fonts/` — self-hosted subsets (Instrument Serif/Sans); regenerate from the
  bundled `.ttf` files with `pyftsubset --flavor=woff2` if glyph coverage changes

See `AGENTS.md` for agent/contributor context and `TODO.md` for open work.
