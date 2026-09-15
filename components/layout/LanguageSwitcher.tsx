import { locales, otherLocale, localeNames, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
  className?: string;
};

/**
 * Enlaces reales entre /es y /en: cada idioma es una URL propia, así que
 * Google indexa ambos y el visitante puede compartir el enlace en su idioma.
 */
export function LanguageSwitcher({ lang, label, className = "" }: LanguageSwitcherProps) {
  return (
    <div
      aria-label={label}
      className={`flex items-center gap-1 rounded-full border border-cream/10 bg-cream/[0.03] p-0.5 ${className}`}
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            title={localeNames[locale]}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 ${
              active ? "bg-cream/10 text-cream" : "text-faint hover:text-cream"
            }`}
          >
            {locale}
          </a>
        );
      })}
      <span className="sr-only">{localeNames[otherLocale(lang)]}</span>
    </div>
  );
}
