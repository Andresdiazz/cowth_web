import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function Academy({ dict }: { dict: Dictionary }) {
  const { academy } = dict;

  return (
    <section id="academy" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="04">{academy.label}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal delay={60} className="md:col-span-6">
            <h2 className="display-tight text-title">{academy.title}</h2>
            <p className="mt-7 text-base leading-relaxed text-muted sm:text-lg">{academy.body}</p>

            <div className="mt-10 border-t hairline pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-faint">
                {academy.ebookLabel}
              </p>
              <p className="display-tight mt-4 text-2xl text-cream">{academy.ebookTitle}</p>
              <ul className="mt-6 space-y-3">
                {academy.chapters.map((chapter) => (
                  <li key={chapter} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {chapter}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <SpotlightCard className="rounded-2xl p-7 sm:p-9">
              <h3 className="display-tight text-xl text-cream">{academy.card.title}</h3>
              <p className="mt-2.5 mb-7 text-sm leading-relaxed text-muted">{academy.card.body}</p>
              <LeadForm
                source="academy-ebook"
                withName
                strings={dict.form}
                submitLabel={academy.card.submitLabel}
                successTitle={academy.card.successTitle}
                successBody={academy.card.successBody}
                note={academy.card.note}
              />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
