import type { CSSProperties, ElementType, ReactNode } from "react";

type EnterProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/**
 * Entrada escalonada para el contenido visible al cargar (hero).
 * A diferencia de `Reveal`, no usa JS: la animación empieza en el primer
 * pintado, así el titular no espera a la hidratación y el LCP no se retrasa.
 */
export function Enter({ children, as: Tag = "div", delay = 0, className = "" }: EnterProps) {
  return (
    <Tag
      style={{ "--enter-delay": `${delay}ms` } as CSSProperties}
      className={`enter ${className}`}
    >
      {children}
    </Tag>
  );
}
