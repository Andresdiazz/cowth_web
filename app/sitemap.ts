import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    es: `${site.url}/es`,
    en: `${site.url}/en`,
  };

  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
