import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;

  return (
    <section id="que-es" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="01">{about.label}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display-tight text-title">
              {about.titleStrong}
              <span className="text-faint">{about.titleMuted}</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="text-cream">{about.closing}</p>
            </div>
          </Reveal>

          <div className="md:col-span-5">
            <ul className="space-y-3">
              {about.pillars.map((pillar, index) => (
                <Reveal key={pillar.name} as="li" delay={140 + index * 90}>
                  {/* El enlace es la tarjeta completa: área de toque cómoda en móvil. */}
                  <SpotlightCard
                    as="a"
                    href={pillar.href}
                    className="group flex items-start justify-between gap-4 rounded-2xl p-6"
                  >
                    <span>
                      <span className="display-tight block text-xl text-cream transition-colors duration-300 group-hover:text-accent">
                        {pillar.name}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">
                        {pillar.text}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 font-mono text-sm text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </SpotlightCard>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
