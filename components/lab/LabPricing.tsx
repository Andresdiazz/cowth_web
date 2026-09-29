import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

type Group = Dictionary["labPage"]["pricing"]["groups"][number];

/**
 * La escalera de precios: el movimiento estratégico de /lab. Siempre visible,
 * nunca detrás de "cotiza con nosotros".
 */
export function LabPricing({ pricing }: { pricing: Dictionary["labPage"]["pricing"] }) {
  const [web, ecommerce, product, support] = pricing.groups;

  return (
    <section id="precios" className="grain relative isolate overflow-hidden border-t hairline py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0 opacity-70" />
        <div className="absolute right-[-12rem] top-4 h-[34rem] w-[34rem] rounded-full bg-accent/10 aurora-slow" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="02">{pricing.label}</SectionLabel>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="display-tight mt-6 text-title">{pricing.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[web, ecommerce].map((group, index) => (
            <Reveal key={group.name} delay={index * 110}>
              <PricingGroupCard group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <SpotlightCard
            as="article"
            className="relative mt-5 overflow-hidden rounded-3xl border-accent/25 p-7 sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-accent/10 aurora-static"
            />
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="display-tight text-2xl text-cream">{product.name}</h3>
              {product.badge && (
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="relative mt-8 grid gap-6 sm:grid-cols-3">
              {product.tiers.map((tier) => (
                <div key={tier.name} className="border-t hairline pt-5">
                  <p className="text-sm font-medium text-cream">{tier.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tier.detail}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                    {tier.timeline}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-accent">{tier.price}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={160}>
          <SpotlightCard className="mt-5 rounded-2xl p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="display-tight text-xl text-cream">{support.name}</h3>
              {support.badge && (
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {support.badge}
                </span>
              )}
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {support.tiers.map((tier) => (
                <div key={tier.name}>
                  <p className="text-sm font-medium text-cream">{tier.name}</p>
                  <p className="mt-1.5 text-sm text-muted">{tier.price}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-faint">{pricing.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingGroupCard({ group }: { group: Group }) {
  return (
    <SpotlightCard as="article" className="flex h-full flex-col rounded-2xl p-7 sm:p-9">
      <div className="flex items-center gap-3">
        <span aria-hidden className="text-2xl">
          {group.icon}
        </span>
        <h3 className="display-tight text-xl text-cream">{group.name}</h3>
      </div>

      <div className="mt-7 space-y-6 border-t hairline pt-6">
        {group.tiers.map((tier) => (
          <div key={tier.name}>
            <p className="flex flex-wrap items-baseline justify-between gap-2 text-sm font-medium text-cream">
              {tier.name}
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {tier.timeline}
              </span>
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{tier.detail}</p>
            <p className="mt-2 text-sm font-medium text-accent">{tier.price}</p>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}
