import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Halo esmeralda: única fuente de color en el fondo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-faint">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Ecosistema de crecimiento · Latinoamérica
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-tight mt-8 text-display">
            Nadie
            <br />
            crece
            <br />
            <span className="relative inline-block">
              solo
              <span aria-hidden className="text-accent">
                .
              </span>
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-accent/70"
              />
            </span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t hairline pt-10 md:grid-cols-12 md:gap-8">
          <Reveal delay={140} className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Cowth es el ecosistema donde los negocios crecen acompañados:
              <span className="text-cream"> tecnología que resuelve</span>,
              <span className="text-cream"> formación que se aplica</span> y una red que sostiene
              cuando el camino se pone difícil. Crecemos contigo.
            </p>
          </Reveal>

          <Reveal delay={220} className="md:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <ButtonLink href="#lab">
                Agenda una llamada
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#academy" variant="secondary">
                Descarga gratis
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
