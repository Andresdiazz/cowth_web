import { site, whatsappHref } from "@/lib/site";

type WhatsAppFloatProps = {
  label: string;
  message?: string;
};

/** Botón flotante de WhatsApp. Mismo lenguaje visual que BookingButton (accent + sheen). */
export function WhatsAppFloat({ label, message }: WhatsAppFloatProps) {
  return (
    <a
      href={whatsappHref(message ?? site.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="sheen glass fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-[0_10px_40px_-14px_rgba(34,227,138,0.65)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(34,227,138,0.85)] active:scale-95"
    >
      <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.24c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.45.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.94.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
      </svg>
    </a>
  );
}
