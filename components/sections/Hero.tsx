import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const capabilities = [
  { label: "Web & E-commerce", detail: "De landing express a plataforma a medida" },
  { label: "Apps en Flutter", detail: "Un código para iOS, Android y web" },
  { label: "Soporte continuo", detail: "Nos quedamos después del lanzamiento" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Fondo: malla técnica + dos auroras esmeralda muy tenues en movimiento lento. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/14 blur-[150px] animate-aurora" />
        <div className="absolute right-[-14rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-accent-deep/14 blur-[140px] animate-aurora-slow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent animate-sweep" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="inline-flex items-center gap-3 rounded-full border border-cream/10 bg-cream/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-faint backdrop-blur-sm sm:text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>
              Ecosistema de crecimiento ·{" "}
              <span className="sm:hidden">LATAM</span>
              <span className="hidden sm:inline">Latinoamérica</span>
            </span>
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="display-tight mt-8 text-display">
            <span className="block text-cream/95">No somos tu agencia.</span>
            <span className="mt-1 block">
              Somos tu{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-br from-accent via-accent to-accent-deep bg-clip-text text-transparent">
                  socio
                </span>
                <span aria-hidden className="text-accent">
                  .
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent to-transparent"
                />
              </span>
            </span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t hairline pt-10 md:grid-cols-12 md:gap-8">
          <Reveal delay={170} className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {site.descriptor}{" "}
              <span className="text-cream">Tecnología que resuelve</span>, formación que se
              aplica y una red que sostiene cuando el camino se pone difícil. Crecemos contigo.
            </p>
          </Reveal>

          <Reveal delay={250} className="md:col-span-5">
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

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-cream/[0.06] sm:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.label} delay={330 + index * 90} as="li" className="bg-ink/85">
              <div className="h-full px-6 py-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm font-medium text-cream">{capability.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{capability.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
