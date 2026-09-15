"use client";

import { useEffect, useRef } from "react";

/** Barra de progreso del scroll. Solo anima scaleX, sin provocar layout. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      node.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-accent/40 via-accent to-accent/40"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
