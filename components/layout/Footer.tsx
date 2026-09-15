import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t hairline">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height={28} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {site.descriptor}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {site.mission}
            </p>
          </div>

          <nav aria-label="Secciones" className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-faint">Ecosistema</h2>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
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
            <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-faint">Contacto</h2>
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
            © {new Date().getFullYear()} Cowth. Hecho en Latinoamérica.
          </p>
          <p className="text-xs text-faint">co + growth · crecemos contigo</p>
        </div>
      </div>
    </footer>
  );
}
