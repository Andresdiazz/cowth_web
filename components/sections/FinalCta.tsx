import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contacto" className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="06">Contacto</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display-tight text-title">
              Cuéntanos dónde está tu negocio hoy.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Una conversación de 30 minutos, sin compromiso. Salimos con un diagnóstico claro
              de qué construir primero y qué puede esperar. Si no somos lo que necesitas, te lo
              decimos.
            </p>
          </Reveal>

          <Reveal delay={140} className="md:col-span-5">
            <div className="flex flex-col gap-4">
              <ButtonLink href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                Agenda una llamada
                <ArrowIcon />
              </ButtonLink>
              <a
                href={`mailto:${site.email}`}
                className="group block rounded-2xl border hairline bg-ink/50 p-6 transition-colors duration-300 hover:border-accent/30"
              >
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-faint">
                  Escríbenos
                </span>
                <span className="mt-2 block text-lg text-cream transition-colors duration-300 group-hover:text-accent">
                  {site.email}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
