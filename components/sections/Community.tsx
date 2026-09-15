import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function Community({ dict }: { dict: Dictionary }) {
  const { community } = dict;

  return (
    <section id="community" className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <SectionLabel index="05">{community.label}</SectionLabel>
            <span className="rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
              {community.badge}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal delay={60} className="md:col-span-6">
            <h2 className="display-tight text-title">{community.title}</h2>
            <p className="mt-7 text-base leading-relaxed text-muted sm:text-lg">
              {community.body}
            </p>

            <dl className="mt-10 divide-y divide-cream/8 border-y hairline">
              {community.perks.map((perk) => (
                <div key={perk.title} className="py-5">
                  <dt className="text-sm font-medium text-cream">{perk.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{perk.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <SpotlightCard className="rounded-2xl p-7 sm:p-9">
              <h3 className="display-tight text-xl text-cream">{community.card.title}</h3>
              <p className="mt-2.5 mb-7 text-sm leading-relaxed text-muted">
                {community.card.body}
              </p>
              <LeadForm
                source="community-waitlist"
                strings={dict.form}
                submitLabel={community.card.submitLabel}
                successTitle={community.card.successTitle}
                successBody={community.card.successBody}
                note={community.card.note}
              />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
