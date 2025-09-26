// components/Projects.tsx
"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="container scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="text-muted mt-2">
        A selection of mini-projects. Click to open in a new tab.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.href} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-md">
            {/* Thumbnail */}
            {p.thumbnail && (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.thumbnail}
                  alt={p.alt ?? p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            )}

            {/* Body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-tight">{p.title}</h3>
                <span className="text-sm opacity-70 transition group-hover:opacity-100">↗</span>
              </div>

              {p.description && (
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              )}

              {p.tags && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              >
                Visit project <span aria-hidden>↗</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
