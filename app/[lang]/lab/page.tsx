import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/marketing/PageHeader";
import { PageFooter } from "@/components/marketing/PageFooter";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { LabHero } from "@/components/lab/LabHero";
import { LabProblem, LabDifferentiators } from "@/components/lab/LabProblem";
import { LabPricing } from "@/components/lab/LabPricing";
import { LabAnchorCase } from "@/components/lab/LabAnchorCase";
import { LabHowWeWork } from "@/components/lab/LabHowWeWork";
import { LabTestimonials, LabAbout } from "@/components/lab/LabTestimonialsAbout";
import { LabFaq } from "@/components/lab/LabFaq";
import { LabFinalCta } from "@/components/lab/LabFinalCta";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import type { LeadTracking } from "@/lib/leads";

type PageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/** Parámetros de tráfico que se conservan de la URL hasta el envío del formulario (TAREA 3). */
const TRACKING_KEYS = [
  "src",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

function readTracking(searchParams: Awaited<PageProps["searchParams"]>): LeadTracking | undefined {
  const tracking: LeadTracking = {};

  for (const key of TRACKING_KEYS) {
    const value = searchParams[key];
    const first = Array.isArray(value) ? value[0] : value;
    if (first) tracking[key] = first;
  }

  return Object.keys(tracking).length > 0 ? tracking : undefined;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    title: dict.labPage.meta.title,
    description: dict.labPage.meta.description,
    alternates: {
      canonical: `/${lang}/lab`,
      languages: {
        es: "/es/lab",
        en: "/en/lab",
        "x-default": "/es/lab",
      },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${lang}/lab`,
      siteName: site.name,
      title: dict.labPage.meta.title,
      description: dict.labPage.meta.description,
    },
  };
}

export default async function LabPage({ params, searchParams }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const query = await searchParams;

  // Modo pauta (?src=ads): sin nav, sin links de salida, un solo CTA.
  const adsMode = query.src === "ads";
  const tracking = readTracking(query);

  const { labPage } = dict;

  return (
    <>
      {!adsMode && (
        <PageHeader
          lang={lang}
          backHomeLabel={labPage.header.backHome}
          languageLabel={dict.nav.languageLabel}
          basePath="/lab"
        />
      )}
      <main>
        <LabHero hero={labPage.hero} adsMode={adsMode} />
        <LabProblem problem={labPage.problem} />
        <LabDifferentiators differentiators={labPage.differentiators} />
        <LabPricing pricing={labPage.pricing} />
        <LabAnchorCase anchorCase={labPage.anchorCase} />
        <LabHowWeWork howWeWork={labPage.howWeWork} />
        <LabTestimonials testimonials={labPage.testimonials} />
        <LabAbout about={labPage.about} />
        <LabFaq faq={labPage.faq} />
        <LabFinalCta finalCta={labPage.finalCta} tracking={tracking} adsMode={adsMode} />
      </main>
      {!adsMode && (
        <>
          <PageFooter backHomeLabel={labPage.footer.backHome} lang={lang} brand={dict.brand} />
          <WhatsAppFloat label={labPage.hero.ctaWhatsapp} />
        </>
      )}
    </>
  );
}
