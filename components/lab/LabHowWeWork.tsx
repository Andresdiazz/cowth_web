import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

export function LabHowWeWork({ howWeWork }: { howWeWork: Dictionary["labPage"]["howWeWork"] }) {
  return (
    <section className="border-t hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel index="04">{howWeWork.label}</SectionLabel>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="display-tight mt-6 max-w-2xl text-title">{howWeWork.title}</h2>
        </Reveal>

        <Reveal delay={140}>
          <SpotlightCard className="mt-10 flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-start sm:gap-8 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              {howWeWork.stepLabel}
            </span>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{howWeWork.stepBody}</p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
