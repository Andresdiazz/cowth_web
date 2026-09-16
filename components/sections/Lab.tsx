import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Terminal } from "@/components/ui/Terminal";
import type { Dictionary } from "@/lib/i18n";

export function Lab({ dict }: { dict: Dictionary }) {
  const { lab, brand } = dict;

  return (
    <section
      id="lab"
      className="grain relative isolate overflow-hidden border-t hairline bg-surface py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0 opacity-70" />
        <div className="absolute right-[-12rem] top-4 h-[34rem] w-[34rem] rounded-full bg-accent/10 aurora-slow" />
        <div className="absolute left-[-10rem] bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-accent-deep/10 aurora" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="02">{lab.label}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <Reveal delay={70} className="md:col-span-7">
            <h2 className="display-tight text-title">{lab.title}</h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:pt-3">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{lab.body}</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              {brand.tagline}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {lab.lines.map((line, index) => (
            <Reveal key={line.id} delay={index * 110}>
              <SpotlightCard as="article" className="flex h-full flex-col rounded-2xl p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display-tight text-2xl text-cream">{line.name}</h3>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-faint">
                    {line.index}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{line.promise}</p>

                <div className="mt-8 space-y-5 border-t hairline pt-7">
                  {line.tiers.map((tier, tierIndex) => (
                    <div key={tier.name} className="flex gap-4">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(34,227,138,0.45)]"
                      />
                      <div>
                        <p className="flex items-center gap-2 text-sm font-medium text-cream">
                          {tier.name}
                          {tierIndex === 0 && (
                            <span aria-hidden className="font-mono text-xs text-faint">
                              →
                            </span>
                          )}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{tier.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {line.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-cream/10 bg-cream/[0.03] px-3 py-1.5 text-xs text-faint transition-colors duration-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Línea Producto & Apps: la apuesta principal del Lab. */}
        <Reveal delay={140}>
          <SpotlightCard as="article" className="mt-5 rounded-3xl border-accent/25 p-7 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-accent/10 aurora-static"
            />
            <div className="relative grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {lab.featured.badge}
                </p>
                <h3 className="display-tight mt-5 text-3xl text-cream sm:text-4xl lg:text-5xl">
                  {lab.featured.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  {lab.featured.body}
                </p>

                <ul className="mt-8 space-y-4">
                  {lab.featured.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-cream">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,227,138,0.5)]"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <BookingButton>{lab.featured.cta}</BookingButton>
                </div>
              </div>

              <div className="flex flex-col justify-center md:col-span-5">
                <Terminal
                  title={lab.featured.terminalTitle}
                  lines={[
                    { kind: "command", text: "cowth build --release" },
                    { kind: "output", text: lab.featured.terminalOutput },
                    { kind: "success", text: "✓ iOS      App Store" },
                    { kind: "success", text: "✓ Android  Google Play" },
                    { kind: "success", text: lab.featured.terminalWeb },
                  ]}
                />
                <p className="mt-4 text-xs leading-relaxed text-faint">
                  {lab.featured.terminalNote}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={80}>
          <SpotlightCard className="mt-5 flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="max-w-2xl">
              <h3 className="display-tight text-xl text-cream">{lab.support.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{lab.support.body}</p>
            </div>
            <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              {lab.support.badge}
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
