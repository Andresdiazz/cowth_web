import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function GrowthPartner({ dict }: { dict: Dictionary }) {
  const { growth } = dict;

  return (
    <section id="growth" className="relative border-t hairline py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <SectionLabel index="03">{growth.label}</SectionLabel>
            <span className="rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
              {growth.badge}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal delay={70} className="md:col-span-6">
            <h2 className="display-tight text-3xl sm:text-4xl lg:text-5xl">{growth.title}</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {growth.body}
            </p>

            <ul className="mt-10 divide-y divide-cream/8 border-y hairline">
              {growth.model.map((item) => (
                <li key={item.term} className="flex flex-col gap-1.5 py-5 sm:flex-row sm:gap-6">
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:w-52 sm:pt-0.5">
                    {item.term}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{item.detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm text-cream">{growth.ctaQuestion}</p>
              <div className="mt-4">
                <BookingButton>{growth.cta}</BookingButton>
              </div>
            </div>
          </Reveal>

          {/* La diferencia con la línea E-commerce del Lab, explícita. */}
          <Reveal delay={150} className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
              {growth.comparisonLabel}
            </p>
            <div className="mt-5 space-y-3">
              {growth.comparison.map((item) => (
                <SpotlightCard
                  key={item.scope}
                  className={`rounded-2xl p-6 ${item.highlighted ? "border-accent/25" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-cream">{item.scope}</p>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
                        item.highlighted
                          ? "border-accent/35 text-accent"
                          : "border-cream/12 text-faint"
                      }`}
                    >
                      {item.kind}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </SpotlightCard>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-faint">{growth.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
