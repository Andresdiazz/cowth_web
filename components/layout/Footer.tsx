import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="grain relative overflow-hidden border-t hairline">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height={28} />
            <p className="display-tight mt-5 max-w-xs text-lg text-cream">{dict.brand.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {dict.brand.descriptor}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {dict.brand.mission}
            </p>
          </div>

          <nav aria-label={dict.footer.sectionsLabel} className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-faint">
              {dict.footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {dict.nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-faint">
              {dict.footer.contactTitle}
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block text-sm text-cream transition-colors duration-200 hover:text-accent"
            >
              {site.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Cowth. {dict.footer.copyright}
          </p>
          <p className="text-xs text-faint">{dict.footer.closing}</p>
        </div>
      </div>
    </footer>
  );
}
