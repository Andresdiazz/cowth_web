import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

type PageHeaderProps = {
  lang: Locale;
  backHomeLabel: string;
  languageLabel: string;
  /** Ruta de esta página después del idioma, ej. "/lab", para el selector de idioma. */
  basePath: string;
};

/**
 * Header liviano para páginas independientes de la home (/lab, /kit-90-dias).
 * El Navbar de la home usa anclas (#lab, #growth…) que no existen aquí, así
 * que en vez de forzarlo se reutiliza solo el logo y el selector de idioma.
 */
export function PageHeader({ lang, backHomeLabel, languageLabel, basePath }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <a href={`/${lang}`} aria-label={backHomeLabel} className="shrink-0">
          <Logo height={24} />
        </a>
        <LanguageSwitcher lang={lang} label={languageLabel} basePath={basePath} />
      </div>
    </header>
  );
}
