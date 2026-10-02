import { EbookLeadForm } from "@/components/forms/EbookLeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LeadTracking } from "@/lib/leads";

type LibroFinalCtaProps = {
  lang: Locale;
  finalCta: Dictionary["libroPage"]["finalCta"];
  formStrings: Dictionary["form"];
  tracking?: LeadTracking;
};

export function LibroFinalCta({ lang, finalCta, formStrings, tracking }: LibroFinalCtaProps) {
  return (
    <section id="descarga" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="04">{finalCta.label}</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="display-tight mt-6 text-title">{finalCta.title}</h2>
        </Reveal>

        <Reveal delay={140}>
          <SpotlightCard className="mx-auto mt-10 max-w-md rounded-2xl p-7 text-left sm:p-9">
            <EbookLeadForm
              lang={lang}
              strings={formStrings}
              submitLabel={finalCta.submitLabel}
              microcopy={finalCta.microcopy}
              tracking={tracking}
            />
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
