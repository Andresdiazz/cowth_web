import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

type PageFooterProps = {
  backHomeLabel: string;
  lang: string;
  brand: Dictionary["brand"];
};

/** Footer liviano para páginas independientes de la home (/lab, /kit-90-dias). */
export function PageFooter({ backHomeLabel, lang, brand }: PageFooterProps) {
  return (
    <footer className="grain relative overflow-hidden border-t hairline">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo height={24} />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{brand.tagline}</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-cream transition-colors duration-200 hover:text-accent"
          >
            {site.email}
          </a>
          <a
            href={`/${lang}`}
            className="link-underline text-sm text-muted transition-colors duration-200 hover:text-cream"
          >
            {backHomeLabel}
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} Cowth. {brand.mission}
        </p>
      </div>
    </footer>
  );
}
