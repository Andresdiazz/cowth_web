import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

const beliefs = [
  {
    title: "Personas antes que dinero",
    text: "Primero entendemos a quién tienes enfrente y qué está en juego. El dinero llega después, y llega mejor.",
  },
  {
    title: "Ejecución antes que teoría",
    text: "Ningún framework reemplaza a un producto funcionando. Preferimos entregar algo real esta semana que un plan perfecto en tres meses.",
  },
  {
    title: "Nos quedamos",
    text: "No cobramos el entregable y desaparecemos. Seguimos ahí cuando toca corregir, escalar o empezar de nuevo.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="grain relative isolate overflow-hidden border-t hairline py-28 sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/9 blur-[150px] animate-aurora" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="05">Manifiesto</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display-tight mt-10 text-title">
            No somos una{" "}
            <span className="bg-gradient-to-br from-accent via-accent to-accent-deep bg-clip-text text-transparent">
              f*cking
            </span>{" "}
            agencia.
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <div className="mx-auto mt-9 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Las agencias facturan y desaparecen. Te venden un entregable, lo cobran, cierran
              el proyecto y tu negocio queda exactamente igual de solo que antes.
            </p>
            <p className="text-cream">
              Nosotros nos quedamos hasta que lo logras. Eso es todo lo que nos separa de ellas.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-cream/[0.06] text-left sm:grid-cols-3">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={250 + index * 100} className="bg-ink/85">
              <div className="h-full px-6 py-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm font-medium text-cream">{belief.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{belief.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="display-tight mt-16 text-3xl text-cream sm:text-4xl">
            {site.mission.replace(".", "")}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 text-sm text-faint">
            Por eso existimos: para que crecer deje de ser un acto solitario.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
