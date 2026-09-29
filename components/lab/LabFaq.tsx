import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

/** Acordeón nativo (<details>): sin JS, accesible por defecto con el teclado. */
export function LabFaq({ faq }: { faq: Dictionary["labPage"]["faq"] }) {
  return (
    <section className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionLabel index="07">{faq.label}</SectionLabel>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="display-tight mt-6 text-title">{faq.title}</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-cream/8 border-y hairline">
          {faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-cream marker:content-none">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-lg text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
