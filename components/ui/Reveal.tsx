import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/**
 * Marca el elemento para la animación de entrada al hacer scroll.
 *
 * No lleva JavaScript: quien observa y revela es el script en línea de
 * `app/[lang]/layout.tsx`, que corre al parsear el HTML. Cuando esta lógica
 * vivía en un componente cliente, el contenido se quedaba invisible hasta
 * que hidrataba React.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  return (
    <Tag
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
