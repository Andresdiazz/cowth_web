import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/marketing/PageHeader";
import { PageFooter } from "@/components/marketing/PageFooter";
import { Enter } from "@/components/ui/Enter";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site, EBOOK_PDF_URL } from "@/lib/site";
import { readTracking, trackingToQueryString } from "@/lib/tracking";

type PageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    title: dict.libroGracias.meta.title,
    description: dict.libroGracias.meta.description,
    alternates: {
      canonical: `/${lang}/libro/gracias`,
      languages: {
        es: "/es/libro/gracias",
        en: "/en/libro/gracias",
        "x-default": "/es/libro/gracias",
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${lang}/libro/gracias`,
      siteName: site.name,
      title: dict.libroGracias.meta.title,
      description: dict.libroGracias.meta.description,
    },
    robots: { index: false, follow: true },
  };
}

/**
 * A donde llega el formulario de /libro al enviarse (TAREA 3). El PDF
 * también debería salir por la automatización de Systeme.io: ver TODO en
 * lib/systeme.ts para conectar ese envío por correo.
 */
export default async function LibroGraciasPage({ params, searchParams }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const query = await searchParams;
  const kitHref = `/${lang}/kit-90-dias${trackingToQueryString(readTracking(query))}`;

  const { libroGracias } = dict;

  return (
    <>
      <PageHeader
        lang={lang}
        backHomeLabel={libroGracias.header.backHome}
        languageLabel={dict.nav.languageLabel}
        basePath="/libro/gracias"
      />
      <main>
        <section className="grain relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="tech-grid absolute inset-0" />
            <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/12 aurora" />
          </div>

          <div className="relative mx-auto max-w-2xl px-6 text-center">
            <Enter>
              <h1 className="display-tight text-title">{libroGracias.title}</h1>
            </Enter>

            <Enter delay={90}>
              <div className="mt-9">
                <ButtonLink href={EBOOK_PDF_URL} target="_blank" rel="noopener noreferrer">
                  {libroGracias.downloadCta}
                  <ArrowIcon />
                </ButtonLink>
              </div>
            </Enter>

            <Enter delay={180}>
              <SpotlightCard className="mx-auto mt-14 max-w-md rounded-2xl p-7 text-left sm:p-9">
                <h2 className="display-tight text-lg text-cream">{libroGracias.kit.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{libroGracias.kit.body}</p>
                <div className="mt-6">
                  <ButtonLink href={kitHref} variant="secondary">
                    {libroGracias.kit.cta}
                    <ArrowIcon />
                  </ButtonLink>
                </div>
              </SpotlightCard>
            </Enter>
          </div>
        </section>
      </main>
      <PageFooter backHomeLabel={libroGracias.footer.backHome} lang={lang} brand={dict.brand} />
    </>
  );
}
