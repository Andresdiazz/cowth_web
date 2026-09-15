import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  // El sitio solo usa Sora en extrabold (.display-tight): cargar más pesos
  // sería descargar archivos que nunca se pintan.
  weight: ["800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${site.name}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_ES",
      url: `${site.url}/${lang}`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang as Locale);

  return (
    <html
      lang={lang}
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que hay JS antes del primer pintado: sin esto las animaciones
            de scroll dejarían el contenido invisible para bots o JS desactivado. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","true")`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:text-ink"
        >
          {dict.nav.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
