import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/marketing/PageHeader";
import { PageFooter } from "@/components/marketing/PageFooter";
import { LeadForm } from "@/components/forms/LeadForm";
import { Enter } from "@/components/ui/Enter";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    title: dict.kitWaitlist.meta.title,
    description: dict.kitWaitlist.meta.description,
    alternates: {
      canonical: `/${lang}/kit-90-dias`,
      languages: {
        es: "/es/kit-90-dias",
        en: "/en/kit-90-dias",
        "x-default": "/es/kit-90-dias",
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${lang}/kit-90-dias`,
      siteName: site.name,
      title: dict.kitWaitlist.meta.title,
      description: dict.kitWaitlist.meta.description,
    },
    robots: { index: false, follow: true },
  };
}

/**
 * El e-book de Academy enlaza a /kit-90-dias, que hoy no existe (404). El Kit
 * todavía no está construido, así que esto es solo lista de espera: sin
 * checkout, capturando el correo en Systeme.io (ver TAREA 6).
 */
export default async function KitWaitlistPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const { kitWaitlist } = dict;

  return (
    <>
      <PageHeader
        lang={lang}
        backHomeLabel={kitWaitlist.header.backHome}
        languageLabel={dict.nav.languageLabel}
        basePath="/kit-90-dias"
      />
      <main>
        <section className="grain relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="tech-grid absolute inset-0" />
            <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/12 aurora" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Enter>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {kitWaitlist.badge}
              </span>
            </Enter>

            <Enter delay={80}>
              <h1 className="display-tight mt-6 text-title">{kitWaitlist.title}</h1>
            </Enter>

            <Enter delay={150}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {kitWaitlist.body}
              </p>
            </Enter>

            <Enter delay={220}>
              <SpotlightCard className="mx-auto mt-10 max-w-md rounded-2xl p-7 text-left sm:p-9">
                <h2 className="display-tight text-xl text-cream">{kitWaitlist.card.title}</h2>
                <p className="mt-2.5 mb-7 text-sm leading-relaxed text-muted">
                  {kitWaitlist.card.body}
                </p>
                <LeadForm
                  source="kit-waitlist"
                  strings={dict.form}
                  submitLabel={kitWaitlist.card.submitLabel}
                  successTitle={kitWaitlist.card.successTitle}
                  successBody={kitWaitlist.card.successBody}
                  note={kitWaitlist.card.note}
                />
              </SpotlightCard>
            </Enter>
          </div>
        </section>
      </main>
      <PageFooter backHomeLabel={kitWaitlist.footer.backHome} lang={lang} brand={dict.brand} />
    </>
  );
}
