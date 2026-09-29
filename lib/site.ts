/**
 * Datos que no dependen del idioma. Todo el copy vive en lib/dictionaries.
 */
export const site = {
  name: "Cowth",
  wordmark: "cowth",
  url: "https://cowth.co",
  email: "andres@cowth.co",
  bookingUrl: "https://calendar.app.google/8r6MisDthzUFogL19",
  // Placeholders: cambiar por los perfiles reales.
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  whatsapp: {
    // TODO: reemplazar por el número real de WhatsApp Business, en formato
    // internacional sin "+" ni espacios (ej. "573001234567").
    number: "573000000000",
    message: "Hola, quiero información sobre Cowth Lab.",
  },
} as const;

/** Enlace de WhatsApp con el mensaje precargado. */
export function whatsappHref(message: string = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
