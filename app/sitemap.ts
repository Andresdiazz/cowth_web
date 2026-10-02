import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    es: `${site.url}/es`,
    en: `${site.url}/en`,
  };

  const lab = {
    es: `${site.url}/es/lab`,
    en: `${site.url}/en/lab`,
  };

  const libro = {
    es: `${site.url}/es/libro`,
    en: `${site.url}/en/libro`,
  };

  return locales.flatMap((lang) => [
    {
      url: `${site.url}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages: home },
    },
    {
      url: `${site.url}/${lang}/lab`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: lab },
    },
    {
      url: `${site.url}/${lang}/libro`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: libro },
    },
  ]);
}
