import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

export function Manifesto({ dict }: { dict: Dictionary }) {
  const { manifesto, brand } = dict;

  return (
    <section
      id="manifiesto"
      className="grain relative isolate overflow-hidden border-t hairline py-28 sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/9 aurora" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="06">{manifesto.label}</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display-tight mt-10 text-title">
            {manifesto.titlePrefix}
            <span className="bg-gradient-to-br from-accent via-accent to-accent-deep bg-clip-text text-transparent">
              {manifesto.titleAccent}
            </span>
            {manifesto.titleSuffix}
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <div className="mx-auto mt-9 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {manifesto.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-cream">{manifesto.paragraphStrong}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-cream/[0.06] text-left sm:grid-cols-3">
          {manifesto.beliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={250 + index * 100} className="bg-ink/85">
              <div className="h-full px-6 py-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm font-medium text-cream">{belief.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{belief.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="display-tight mt-16 text-3xl text-cream sm:text-4xl">
            {brand.mission.replace(".", "")}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 text-sm text-faint">{manifesto.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
