// components/Contact.tsx
export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:ridaafatima03@gmail.com"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          ridaafatima03@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/rida-fatima03/"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/RidaFatima03"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
