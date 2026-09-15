import Image from "next/image";

/**
 * Cuando tengas los archivos definitivos, coloca aquí la ruta dentro de /public/logo
 * (PNG ahora, SVG después) y el componente cambia automáticamente de wordmark
 * tipográfico a imagen. Ej: { src: "/logo/cowth-blanco.svg", width: 420, height: 120 }
 */
const LOGO_ASSET: { src: string; width: number; height: number } | null = null;

type LogoProps = {
  className?: string;
  /** Altura en píxeles del logo renderizado. */
  height?: number;
};

export function Logo({ className = "", height = 28 }: LogoProps) {
  if (LOGO_ASSET) {
    return (
      <Image
        src={LOGO_ASSET.src}
        alt="Cowth"
        width={LOGO_ASSET.width}
        height={LOGO_ASSET.height}
        priority
        style={{ height, width: "auto" }}
        className={className}
      />
    );
  }

  return (
    <span
      className={`display-tight inline-flex items-baseline text-cream ${className}`}
      style={{ fontSize: height }}
    >
      cowth
      <span aria-hidden className="ml-[0.12em] text-accent">
        .
      </span>
    </span>
  );
}
