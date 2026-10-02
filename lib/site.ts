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
    // Número provisional (3502860084, Colombia). TODO: reemplazar por el de
    // WhatsApp Business cuando exista, en formato internacional sin "+" ni
    // espacios (ej. "573001234567").
    number: "573502860084",
    message: "Hola, quiero información sobre Cowth Lab.",
  },
} as const;

/** Enlace de WhatsApp con el mensaje precargado. */
export function whatsappHref(message: string = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// TODO: coloca el PDF definitivo en public/ebook/ (ver public/ebook/README.md)
// y ajusta esta ruta si usas otro nombre de archivo o un enlace externo.
export const EBOOK_PDF_URL = "/ebook/crecer-acompanado.pdf";
