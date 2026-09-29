import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

/** El enemigo: la agencia que cobra por actividad. Sin label, como un pull-quote. */
export function LabProblem({ problem }: { problem: Dictionary["labPage"]["problem"] }) {
  return (
    <section className="border-t hairline py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="display-tight text-title">{problem.title}</h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {problem.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function LabDifferentiators({
  differentiators,
}: {
  differentiators: Dictionary["labPage"]["differentiators"];
}) {
  return (
    <section className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel index="01">{differentiators.label}</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border hairline bg-cream/[0.06] sm:grid-cols-3">
          {differentiators.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="bg-ink/85">
              <div className="h-full px-6 py-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-medium text-cream">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
