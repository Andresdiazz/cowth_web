export type LeadSource =
  | "academy-ebook"
  | "community-waitlist"
  | "lab-contact"
  | "kit-waitlist";

/** Parámetros de tráfico que se preservan del query string hasta el envío. */
export type LeadTracking = Record<string, string>;

export type Lead = {
  name?: string;
  email: string;
  /** WhatsApp opcional; solo lo pide el formulario de Lab. */
  phone?: string;
  /** "Qué necesitas" del formulario de Lab; no aplica a Academy/Community. */
  message?: string;
  source: LeadSource;
  tracking?: LeadTracking;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

/** Los mensajes llegan del diccionario del idioma activo. */
export type LeadErrors = {
  errorEmail: string;
  errorName: string;
  errorGeneric: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function validateEmail(value: string): boolean {
  const email = value.trim();
  return email.length <= 254 && EMAIL_PATTERN.test(email);
}

export function validateName(value: string): boolean {
  const name = value.trim();
  return name.length >= 2 && name.length <= 80;
}

/**
 * Punto único de integración con el proveedor de email marketing.
 *
 * El envío va al endpoint interno `/api/lead` (ver app/api/lead/route.ts),
 * que reenvía a Systeme.io con la API key del servidor: la key nunca llega
 * al cliente. Sin `SYSTEME_API_KEY` configurada, esa ruta responde en modo
 * demo para que la UI sea revisable sin backend.
 *
 * SECURITY-REVIEW: maneja PII (nombre + email + mensaje). Solo viaja a una
 * ruta propia del mismo origen sobre HTTPS; no se persiste ni se registra en
 * logs del cliente.
 */
export async function submitLead(lead: Lead, errors: LeadErrors): Promise<LeadResult> {
  if (!validateEmail(lead.email)) {
    return { ok: false, error: errors.errorEmail };
  }

  if (lead.name !== undefined && !validateName(lead.name)) {
    return { ok: false, error: errors.errorName };
  }

  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: lead.name?.trim(),
        email: lead.email.trim().toLowerCase(),
        phone: lead.phone?.trim(),
        message: lead.message?.trim(),
        source: lead.source,
        tracking: lead.tracking,
      }),
    });

    if (!response.ok) {
      return { ok: false, error: errors.errorGeneric };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: errors.errorGeneric };
  }
}
