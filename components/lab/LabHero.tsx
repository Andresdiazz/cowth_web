import { ButtonLink } from "@/components/ui/Button";
import { Enter } from "@/components/ui/Enter";
import { whatsappHref } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

type LabHeroProps = {
  hero: Dictionary["labPage"]["hero"];
  /** Modo pauta (TAREA 3): un solo CTA, sin el enlace de salida a WhatsApp. */
  adsMode: boolean;
};

export function LabHero({ hero, adsMode }: LabHeroProps) {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/14 aurora" />
        <div className="absolute right-[-14rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-accent-deep/14 aurora-slow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent animate-sweep" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Enter>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:gap-3 sm:text-xs sm:tracking-[0.24em]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>{hero.eyebrow}</span>
          </p>
        </Enter>

        <Enter delay={90}>
          <h1 className="display-tight mt-8 max-w-4xl text-display">{hero.title}</h1>
        </Enter>

        <Enter delay={170}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {hero.subtitle}
          </p>
        </Enter>

        <Enter delay={250}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#precios">{hero.ctaPrimary}</ButtonLink>
            {!adsMode && (
              <ButtonLink
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {hero.ctaWhatsapp}
              </ButtonLink>
            )}
          </div>
        </Enter>
      </div>
    </section>
  );
}
