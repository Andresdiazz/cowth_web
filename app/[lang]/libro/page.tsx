import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/marketing/PageHeader";
import { PageFooter } from "@/components/marketing/PageFooter";
import { LibroHero } from "@/components/libro/LibroHero";
import { LibroProblem, LibroLearn, LibroForWhom, LibroCredibility } from "@/components/libro/LibroContent";
import { LibroFinalCta } from "@/components/libro/LibroFinalCta";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { readTracking } from "@/lib/tracking";

type PageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    title: dict.libroPage.meta.title,
    description: dict.libroPage.meta.description,
    alternates: {
      canonical: `/${lang}/libro`,
      languages: {
        es: "/es/libro",
        en: "/en/libro",
        "x-default": "/es/libro",
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${lang}/libro`,
      siteName: site.name,
      title: dict.libroPage.meta.title,
      description: dict.libroPage.meta.description,
    },
  };
}

/**
 * Landing de una sola meta: capturar el correo a cambio del e-book gratis
 * de Cowth Academy. Sin venta, sin precio — el imán del embudo.
 */
export default async function LibroPage({ params, searchParams }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const query = await searchParams;

  // Modo pauta (?src=ads): sin nav, sin links de salida, solo hero + formulario.
  const adsMode = query.src === "ads";
  const tracking = readTracking(query);

  const { libroPage } = dict;

  return (
    <>
      {!adsMode && (
        <PageHeader
          lang={lang}
          backHomeLabel={libroPage.header.backHome}
          languageLabel={dict.nav.languageLabel}
          basePath="/libro"
        />
      )}
      <main>
        <LibroHero lang={lang} hero={libroPage.hero} formStrings={dict.form} tracking={tracking} />
        {!adsMode && (
          <>
            <LibroProblem problem={libroPage.problem} />
            <LibroLearn learn={libroPage.learn} />
            <LibroForWhom forWhom={libroPage.forWhom} />
            <LibroCredibility credibility={libroPage.credibility} />
            <LibroFinalCta
              lang={lang}
              finalCta={libroPage.finalCta}
              formStrings={dict.form}
              tracking={tracking}
            />
          </>
        )}
      </main>
      {!adsMode && (
        <PageFooter backHomeLabel={libroPage.footer.backHome} lang={lang} brand={dict.brand} />
      )}
    </>
  );
}
