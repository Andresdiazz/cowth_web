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
 *
 * Si el elemento ya está en el viewport al cargar (hero corto, recarga con
 * scroll restaurado por el navegador, viewport grande), el observer le pone
 * `data-visible="true"` antes o durante la hidratación de React, que entonces
 * ve un atributo que no esperaba. `suppressHydrationWarning` es exactamente
 * para esto: le dice a React que no lo compare y conserve lo que ya hay en
 * el DOM, en vez de tratarlo como un error irrecuperable.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  return (
    <Tag
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      className={`reveal ${className}`}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
