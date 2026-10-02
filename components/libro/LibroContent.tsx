import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

/** El enemigo de Academy: la soledad de emprender. Sin label, como pull-quote. */
export function LibroProblem({ problem }: { problem: Dictionary["libroPage"]["problem"] }) {
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

export function LibroLearn({ learn }: { learn: Dictionary["libroPage"]["learn"] }) {
  return (
    <section className="border-t hairline bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel index="01">{learn.label}</SectionLabel>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {learn.items.map((item, index) => (
            <Reveal key={item} delay={index * 90}>
              <li className="flex h-full gap-3 rounded-2xl border hairline bg-ink/40 p-5 text-sm leading-relaxed text-cream">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(34,227,138,0.45)]"
                />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LibroForWhom({ forWhom }: { forWhom: Dictionary["libroPage"]["forWhom"] }) {
  return (
    <section className="border-t hairline py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel index="02">{forWhom.label}</SectionLabel>
        </Reveal>

        <ul className="mt-10 divide-y divide-cream/8 border-y hairline">
          {forWhom.items.map((item, index) => (
            <Reveal key={item} delay={index * 90}>
              <li className="py-5 text-base leading-relaxed text-cream sm:text-lg">{item}</li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LibroCredibility({
  credibility,
}: {
  credibility: Dictionary["libroPage"]["credibility"];
}) {
  return (
    <section className="border-t hairline bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="03">{credibility.label}</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-8 text-lg leading-relaxed text-muted sm:text-xl">{credibility.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
