import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function LabTestimonials({
  testimonials,
}: {
  testimonials: Dictionary["labPage"]["testimonials"];
}) {
  return (
    <section className="border-t hairline py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel index="05">{testimonials.label}</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.role} delay={index * 90}>
              <SpotlightCard as="article" className="flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <span aria-hidden className="display-tight text-3xl leading-none text-accent">
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream">{item.quote}</p>
                <p className="mt-5 border-t hairline pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  {item.role}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LabAbout({ about }: { about: Dictionary["labPage"]["about"] }) {
  return (
    <section className="border-t hairline bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="06">{about.label}</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-8 text-lg leading-relaxed text-muted sm:text-xl">{about.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
