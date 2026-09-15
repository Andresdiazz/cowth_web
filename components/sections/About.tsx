import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    name: "Cowth Lab",
    href: "#lab",
    text: "Tecnología y producto digital. Tu web, tu tienda o tu app, construidas para vender.",
  },
  {
    name: "Cowth Academy",
    href: "#academy",
    text: "Formación aplicada. Lo que necesitas saber para decidir mejor, sin humo.",
  },
  {
    name: "Cowth Community",
    href: "#community",
    text: "La red que sostiene. Acompañamiento continuo con quienes están en lo mismo.",
  },
];

export function About() {
  return (
    <section id="que-es" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="01">Qué es Cowth</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display-tight text-title">
              8 de cada 10 negocios cierran.
              <span className="text-faint"> Casi nunca por falta de ganas.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Cierran por hacerlo todo en soledad: sin estructura, sin herramientas que
                funcionen y sin nadie que ya haya pasado por ahí. La estadística no se rompe
                con motivación, se rompe con compañía y ejecución.
              </p>
              <p>
                Por eso Cowth no vende fórmulas para hacerte rico. Construimos contigo lo que
                tu negocio necesita hoy, te damos el criterio para sostenerlo y la red para no
                dudar solo en la próxima decisión difícil.
              </p>
              <p className="text-cream">
                Co + growth. Crecer juntos. Esa es toda la tesis.
              </p>
            </div>
          </Reveal>

          <div className="md:col-span-5">
            <ul className="space-y-3">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.name} as="li" delay={140 + index * 90}>
                  {/* El enlace es la tarjeta completa: área de toque cómoda en móvil. */}
                  <SpotlightCard
                    as="a"
                    href={pillar.href}
                    className="group flex items-start justify-between gap-4 rounded-2xl p-6"
                  >
                    <span>
                      <span className="display-tight block text-xl text-cream transition-colors duration-300 group-hover:text-accent">
                        {pillar.name}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">
                        {pillar.text}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 font-mono text-sm text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </SpotlightCard>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
