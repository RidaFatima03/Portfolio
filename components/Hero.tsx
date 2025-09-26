// components/Hero.tsx
"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">

        <h1 className="mt-3 text-5xl font-extrabold leading-tight sm:text-6xl">
          Hey, I’m <span className="text-primary">Rida!</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Computer Engineering undergraduate specializing in AI and Software
          Engineering. I build clean, user-centric products and data-driven
          tools—from OBE analytics and D3 dashboards to modern web apps with
          Next.js and TypeScript.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/Rida_Fatima_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-accent"
          >
            download CV ↗
          </a>
        </div>

      </div>
    </section>
  );
}
