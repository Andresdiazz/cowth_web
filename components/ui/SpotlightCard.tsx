"use client";

import { useRef, type ElementType, type PointerEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Props extra del elemento resultante (href, target, etc.). */
  [key: string]: unknown;
};

/**
 * Tarjeta de cristal con un foco de luz que sigue al cursor.
 * Las coordenadas se escriben como variables CSS sobre el nodo: no hay
 * re-render de React en cada movimiento del puntero.
 */
export function SpotlightCard({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const node = ref.current;
    if (!node || event.pointerType !== "mouse") return;

    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`glass glass-hover spotlight relative overflow-hidden ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
