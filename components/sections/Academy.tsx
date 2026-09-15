import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const chapters = [
  "Por qué la mayoría de negocios se estanca antes del año dos",
  "Las cuatro decisiones que definen si creces o sobrevives",
  "Cómo saber qué tecnología necesitas (y cuál no)",
  "Un plan de 90 días con lo que sí mueve la aguja",
];

export function Academy() {
  return (
    <section id="academy" className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">Cowth Academy</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal delay={60} className="md:col-span-6">
            <h2 className="display-tight text-title">
              Formación que se aplica el lunes.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted sm:text-lg">
              El brazo educativo de Cowth. Sin teoría de manual ni promesas de libertad
              financiera: lo que funciona en negocios reales de Latinoamérica, explicado para
              que lo ejecutes tú.
            </p>

            <div className="mt-10 border-t hairline pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-faint">
                E-book gratuito
              </p>
              <p className="display-tight mt-4 text-2xl text-cream">
                Crecer acompañado: la guía para los primeros 90 días.
              </p>
              <ul className="mt-6 space-y-3">
                {chapters.map((chapter) => (
                  <li key={chapter} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {chapter}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <div className="rounded-2xl border hairline bg-surface p-7 sm:p-9">
              <h3 className="display-tight text-xl text-cream">Descárgalo gratis</h3>
              <p className="mt-2.5 mb-7 text-sm leading-relaxed text-muted">
                Déjanos tu nombre y correo. Te lo enviamos al instante.
              </p>
              <LeadForm
                source="academy-ebook"
                withName
                submitLabel="Quiero el e-book"
                successTitle="Listo. Revisa tu correo."
                successBody="Te enviamos el e-book. Si no aparece en unos minutos, mira en spam o promociones."
                note="Nada de spam. Solo contenido útil y puedes darte de baja cuando quieras."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
