import { es, type Dictionary } from "./dictionaries/es";
import { en } from "./dictionaries/en";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** El otro idioma disponible, para el selector del navbar. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export type { Dictionary };
