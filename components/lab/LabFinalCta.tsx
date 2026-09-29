import { LabContactForm } from "@/components/forms/LabContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import type { LeadTracking } from "@/lib/leads";

type LabFinalCtaProps = {
  finalCta: Dictionary["labPage"]["finalCta"];
  tracking?: LeadTracking;
  adsMode: boolean;
};

export function LabFinalCta({ finalCta, tracking, adsMode }: LabFinalCtaProps) {
  return (
    <section id="contacto" className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="08">{finalCta.label}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-6">
            <h2 className="display-tight text-title">{finalCta.title}</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {finalCta.subtitle}
            </p>

            {!adsMode && (
              <div className="mt-8">
                <ButtonLink href={whatsappHref()} target="_blank" rel="noopener noreferrer" variant="secondary">
                  {finalCta.whatsapp}
                </ButtonLink>
              </div>
            )}
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <SpotlightCard className="rounded-2xl p-7 sm:p-9">
              <LabContactForm strings={finalCta.form} tracking={tracking} />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
