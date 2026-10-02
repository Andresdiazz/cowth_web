import { Enter } from "@/components/ui/Enter";
import { EbookLeadForm } from "@/components/forms/EbookLeadForm";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LeadTracking } from "@/lib/leads";

type LibroHeroProps = {
  lang: Locale;
  hero: Dictionary["libroPage"]["hero"];
  formStrings: Dictionary["form"];
  tracking?: LeadTracking;
};

export function LibroHero({ lang, hero, formStrings, tracking }: LibroHeroProps) {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/14 aurora" />
        <div className="absolute right-[-14rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-accent-deep/14 aurora-slow" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
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
              <h1 className="display-tight mt-8 text-display">{hero.title}</h1>
            </Enter>

            <Enter delay={170}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {hero.subtitle}
              </p>
            </Enter>

            <Enter delay={250}>
              <div className="mt-10 max-w-sm">
                <EbookLeadForm
                  lang={lang}
                  strings={formStrings}
                  submitLabel={hero.submitLabel}
                  microcopy={hero.microcopy}
                  tracking={tracking}
                />
              </div>
            </Enter>
          </div>

          <Enter delay={200} className="md:col-span-5">
            <div
              aria-hidden
              className="glass mx-auto flex aspect-[3/4] max-w-xs items-center justify-center rounded-2xl border border-dashed border-cream/15 p-8 text-center"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {hero.coverPlaceholder}
              </span>
            </div>
          </Enter>
        </div>
      </div>
    </section>
  );
}
