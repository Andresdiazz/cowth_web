import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const perks = [
  { title: "Mesa de trabajo", text: "Sesiones en vivo para resolver tu caso, no para escuchar teoría." },
  { title: "Red real", text: "Emprendedores que ya pasaron por donde tú estás pasando." },
  { title: "Acompañamiento continuo", text: "Seguimiento a tus decisiones, no una clase que ves una vez." },
];

export function Community() {
  return (
    <section id="community" className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <SectionLabel index="05">Cowth Community</SectionLabel>
            <span className="rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
              Próximamente
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal delay={60} className="md:col-span-6">
            <h2 className="display-tight text-title">
              El lugar donde dejas de decidir solo.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted sm:text-lg">
              Una membresía para emprendedores que están construyendo en serio. Estamos
              armándola con calma, con un grupo pequeño, para que valga la pena entrar.
            </p>

            <dl className="mt-10 divide-y divide-cream/8 border-y hairline">
              {perks.map((perk) => (
                <div key={perk.title} className="py-5">
                  <dt className="text-sm font-medium text-cream">{perk.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{perk.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <SpotlightCard className="rounded-2xl p-7 sm:p-9">
              <h3 className="display-tight text-xl text-cream">Lista de espera</h3>
              <p className="mt-2.5 mb-7 text-sm leading-relaxed text-muted">
                Los primeros en la lista entran antes y con condiciones de fundador. Estamos
                abriéndola.
              </p>
              <LeadForm
                source="community-waitlist"
                submitLabel="Unirme a la lista"
                successTitle="Estás dentro de la lista."
                successBody="Te escribimos en cuanto abramos los primeros cupos. Sin adelantos por otro lado."
                note="Te avisamos solo cuando haya algo real que contarte."
              />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
