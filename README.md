# Next.js Portfolio (Sharlee‑style, original)

A polished **Next.js 14 + Tailwind** portfolio starter with smooth motion (GSAP + ScrollTrigger), Lenis smooth scrolling, command palette (⌘K / Ctrl+K), custom cursor ring, and gooey gradient blobs. Designed to be evaluable (clear sections, project JSON), and deployable on **Vercel** or **Netlify**.

## Quick start
```bash
pnpm i   # or npm install / yarn
pnpm dev # http://localhost:3000
```
Edit hero text in `components/Hero.tsx`. Projects live in `content/projects.json`.

### Deploy
- **Vercel**: one‑click, zero config.
- **Netlify**: included `@netlify/plugin-nextjs` and `netlify.toml`. Build command: `npm run build`.

## Customize
- Colors/typography via CSS variables in `styles/globals.css` and Tailwind tokens in `tailwind.config.ts`.
- Add sections/components under `components/` and drop them into `app/page.tsx`.
- Toggle theme persists in `localStorage` and flips the `light` class on `<html>`.

MIT License.
