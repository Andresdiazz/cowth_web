import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const beliefs = [
  "Las personas van antes que el dinero. El dinero llega después, y llega mejor.",
  "La ejecución le gana a la teoría. Siempre.",
  "Nadie construye algo que dure estando solo.",
];

export function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="grain relative overflow-hidden border-t hairline py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/7 blur-[150px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="05">Manifiesto</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <blockquote className="display-tight mt-10 text-title">
            Nadie crece solo
            <span className="text-accent">.</span> Ni el negocio más grande, ni el que apenas
            empieza.
          </blockquote>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mx-auto mt-12 max-w-xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {beliefs.map((belief) => (
              <li key={belief}>{belief}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-12 text-sm text-faint">
            Por eso existimos: para que crecer deje de ser un acto solitario.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
