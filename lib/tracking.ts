import type { LeadTracking } from "@/lib/leads";

/** Parámetros de tráfico que se conservan de la URL hasta el envío del formulario. */
export const TRACKING_KEYS = [
  "src",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type SearchParams = { [key: string]: string | string[] | undefined };

export function readTracking(searchParams: SearchParams): LeadTracking | undefined {
  const tracking: LeadTracking = {};

  for (const key of TRACKING_KEYS) {
    const value = searchParams[key];
    const first = Array.isArray(value) ? value[0] : value;
    if (first) tracking[key] = first;
  }

  return Object.keys(tracking).length > 0 ? tracking : undefined;
}

/** Para reenviar los mismos parámetros en un enlace o redirect (ej. a /libro/gracias). */
export function trackingToQueryString(tracking: LeadTracking | undefined): string {
  if (!tracking || Object.keys(tracking).length === 0) return "";
  return `?${new URLSearchParams(tracking).toString()}`;
}
