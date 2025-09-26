// components/About.tsx
export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>

      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
        I like building things that are clear, useful, and a little unexpected.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Perspective */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Perspective
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Grew up between Pakistan, Malaysia, and Türkiye — learned that the same story can mean very different things depending on where you stand.</li>
            <li>These shifts taught me resilience, adaptability, and curiosity for how people see the world.</li>
          </ul>
        </div>

        {/* Grit */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Grit
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Wrote a 170k-word novel just to see if I could finish it.</li>
            <li>Published a Marvel fanfic that unexpectedly reached 20k readers — learned the value of consistency and sharing ideas.</li>
          </ul>
        </div>

        {/* Courage & growth */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Courage & growth
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Presented a half-finished project solo when my team froze — realized progress matters more than perfection.</li>
            <li>Learned that leadership isn’t control but trust and delegation.</li>
          </ul>
        </div>

        {/* Quirks */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Quirks
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Staged Barbie musicals as a kid — accidentally taught myself English in the process.</li>
            <li>Built a PowerPoint pitch deck at age 10 to convince my mom to let me have a pet rabbit (she still said no).</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
