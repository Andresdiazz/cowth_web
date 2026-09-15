import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

type Line = {
  id: string;
  name: string;
  promise: string;
  tiers: { name: string; detail: string }[];
  bullets: string[];
};

const lines: Line[] = [
  {
    id: "web",
    name: "Línea Web",
    promise:
      "Tu negocio, explicado bien y disponible 24/7. Una web que convierte visitas en conversaciones.",
    tiers: [
      {
        name: "Web Express",
        detail: "Landing o sitio de una página, en línea en días. Ideal para validar y empezar a vender.",
      },
      {
        name: "Web a Medida",
        detail: "Sitio completo con las secciones, integraciones y contenido que tu operación exige.",
      },
    ],
    bullets: ["Diseño propio, no plantilla", "Optimizada para buscadores", "Métricas y formularios conectados"],
  },
  {
    id: "ecommerce",
    name: "Línea E-commerce",
    promise: "Vender en línea sin fricción: catálogo, pagos y envíos funcionando de verdad.",
    tiers: [
      {
        name: "Tienda Express",
        detail: "Shopify configurado, con tu marca, pasarela de pago y logística lista para operar.",
      },
      {
        name: "E-commerce a Medida",
        detail: "Tienda con reglas propias: inventario, mayoristas, suscripciones o integraciones con tu ERP.",
      },
    ],
    bullets: ["Checkout optimizado", "Pagos locales de LATAM", "Preparada para escalar campañas"],
  },
];

const appsBullets = [
  "Un solo código para iOS, Android y web",
  "Del prototipo a tiendas, con acompañamiento",
  "Producto pensado para tu operación real, no un demo",
];

export function Lab() {
  return (
    <section id="lab" className="grain relative overflow-hidden border-t hairline bg-surface py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-10 h-[30rem] w-[30rem] rounded-full bg-accent/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="02">Cowth Lab · Estudio de tecnología</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="display-tight text-title">
              Crecemos contigo: desde tu primera web hasta tu software a medida.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:pt-3">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              El brazo de producto digital de Cowth. Diseñamos y construimos la tecnología que
              tu negocio necesita en cada etapa, y nos quedamos para que siga funcionando.
              Entregamos producto en operación, no archivos.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {lines.map((line, index) => (
            <Reveal key={line.id} delay={index * 90}>
              <article className="flex h-full flex-col rounded-2xl border hairline bg-ink/50 p-7 transition-colors duration-300 hover:border-accent/30 sm:p-9">
                <h3 className="display-tight text-2xl text-cream">{line.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{line.promise}</p>

                <div className="mt-8 space-y-5 border-t hairline pt-7">
                  {line.tiers.map((tier, tierIndex) => (
                    <div key={tier.name} className="flex gap-4">
                      <span aria-hidden className="mt-1 font-mono text-xs text-accent">
                        0{tierIndex + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-cream">{tier.name}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{tier.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-8 flex flex-wrap gap-2 pt-1">
                  {line.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border hairline px-3 py-1.5 text-xs text-faint"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Línea Producto & Apps: la apuesta principal del Lab. */}
        <Reveal delay={120}>
          <article className="mt-5 grid gap-10 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent p-7 sm:p-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Línea insignia
              </p>
              <h3 className="display-tight mt-4 text-3xl text-cream sm:text-4xl">
                Producto &amp; Apps
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Aplicaciones a medida construidas en Flutter: un solo código que corre en iOS,
                Android y web. Un producto, tres plataformas, una sola inversión y un equipo que
                lo evoluciona contigo.
              </p>
              <div className="mt-8">
                <ButtonLink href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Agenda un diagnóstico
                  <ArrowIcon />
                </ButtonLink>
              </div>
            </div>

            <ul className="space-y-4 md:col-span-5 md:border-l md:border-accent/15 md:pl-10">
              {appsBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-cream">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-5 flex flex-col gap-6 rounded-2xl border hairline bg-ink/50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="max-w-2xl">
              <h3 className="display-tight text-xl text-cream">Soporte &amp; Evolución</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                El lanzamiento es el punto de partida. Plan mensual de mantenimiento, mejoras y
                nuevas funciones para que tu producto siga al ritmo del negocio.
              </p>
            </div>
            <p className="shrink-0 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              Acompañamiento continuo
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
