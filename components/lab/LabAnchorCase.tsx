"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Dictionary } from "@/lib/i18n";

type AnchorCaseDict = Dictionary["labPage"]["anchorCase"];
type Case = AnchorCaseDict["cases"][number];

/**
 * Prueba física: casos reales de producto entregado. La tarjeta muestra solo
 * el logo (nombre y plataformas como contexto mínimo); el clic abre una
 * galería con la descripción completa y las capturas, sin salir de /lab.
 */
export function LabAnchorCase({ anchorCase }: { anchorCase: AnchorCaseDict }) {
  const [openCase, setOpenCase] = useState<Case | null>(null);

  useEffect(() => {
    if (!openCase) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenCase(null);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openCase]);

  return (
    <section className="border-t hairline py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="03">{anchorCase.label}</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {anchorCase.cases.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <CaseLogoCard
                item={item}
                viewGalleryLabel={anchorCase.viewGallery}
                onOpen={() => setOpenCase(item)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {openCase && (
        <CaseGalleryModal item={openCase} closeLabel={anchorCase.close} onClose={() => setOpenCase(null)} />
      )}
    </section>
  );
}

function LogoChip({ item, size = 112 }: { item: Case; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl bg-cream p-3"
      style={{ height: size, width: size }}
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function CaseLogoCard({
  item,
  viewGalleryLabel,
  onOpen,
}: {
  item: Case;
  viewGalleryLabel: string;
  onOpen: () => void;
}) {
  if (item.images.length === 0) {
    return (
      <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-dashed border-cream/15 bg-ink/60 p-7 text-center sm:p-9">
        <LogoChip item={item} />
        <div>
          <h3 className="display-tight text-lg text-cream">{item.name}</h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {item.platforms}
          </p>
        </div>
      </div>
    );
  }

  return (
    <SpotlightCard
      as="button"
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="flex h-full w-full flex-col items-center gap-4 rounded-2xl p-7 text-center sm:p-9"
    >
      <LogoChip item={item} />
      <div>
        <h3 className="display-tight text-lg text-cream">{item.name}</h3>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {item.platforms}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted">{item.body}</p>
      <span className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        {viewGalleryLabel}
      </span>
    </SpotlightCard>
  );
}

function CaseGalleryModal({
  item,
  closeLabel,
  onClose,
}: {
  item: Case;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <div className="flex items-center gap-4 pr-12">
          <LogoChip item={item} size={56} />
          <div>
            <h3 className="display-tight text-xl text-cream">{item.name}</h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {item.platforms}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted">{item.body}</p>

        <div className="mt-6 space-y-3">
          {item.images.map((image) => (
            <div
              key={image.src}
              className="relative overflow-hidden rounded-lg border border-cream/10"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <Image
                src={image.src}
                alt={item.name}
                fill
                sizes="(min-width: 640px) 640px, 90vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
