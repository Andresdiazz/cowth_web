"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta en el navbar la sección que ocupa la franja central de la pantalla.
  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector(item.href))
      .filter((node): node is Element => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b hairline bg-ink/70 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <div className="flex min-w-0 items-center gap-4">
          <a href="#top" aria-label="Cowth, ir al inicio" className="shrink-0">
            <Logo height={24} />
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-cream/12 lg:block" />
          <p className="hidden truncate text-xs text-faint lg:block">{site.tagline}</p>
        </div>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              aria-current={active === item.href ? "true" : undefined}
              className="link-underline text-sm text-muted transition-colors duration-300 hover:text-cream data-[active=true]:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#contacto" className="px-5 py-2.5">
            Hablemos
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-cream transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-cream transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t hairline bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Principal móvil" className="flex flex-col">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b hairline py-4 text-lg text-cream"
            >
              {item.label}
              <span aria-hidden className="font-mono text-xs text-accent">
                →
              </span>
            </a>
          ))}
        </nav>
        <p className="mt-6 text-xs text-faint">{site.tagline}</p>
        <ButtonLink href="#contacto" onClick={() => setOpen(false)} className="mt-4 w-full">
          Hablemos
        </ButtonLink>
      </div>

      <ScrollProgress />
    </header>
  );
}
