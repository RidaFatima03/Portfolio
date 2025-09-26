import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main id="home" className="container">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="my-12 flex items-center justify-between text-muted">
        <small>© {new Date().getFullYear()} Rida. Built with Next.js + Tailwind.</small>
        <a className="text-sm underline underline-offset-4" href="https://github.com" target="_blank" rel="noreferrer">
          source
        </a>
      </footer>
    </main>
  );
}
