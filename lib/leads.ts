export type LeadSource = "academy-ebook" | "community-waitlist";

export type Lead = {
  name?: string;
  email: string;
  source: LeadSource;
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
 * Para conectar Formspree o Systeme.io basta con definir el endpoint público
 * en `.env.local`:
 *
 *   NEXT_PUBLIC_LEAD_ENDPOINT="https://formspree.io/f/xxxxxxx"
 *
 * Mientras no exista endpoint, el formulario valida y responde en modo demo
 * para que la UI sea revisable sin backend.
 *
 * SECURITY-REVIEW: maneja PII (nombre + email). Solo se envía a un endpoint
 * configurado por variable de entorno sobre HTTPS; no se persiste ni se
 * registra en logs del cliente.
 */
export async function submitLead(lead: Lead, errors: LeadErrors): Promise<LeadResult> {
  if (!validateEmail(lead.email)) {
    return { ok: false, error: errors.errorEmail };
  }

  if (lead.name !== undefined && !validateName(lead.name)) {
    return { ok: false, error: errors.errorName };
  }

  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: lead.name?.trim(),
        email: lead.email.trim().toLowerCase(),
        source: lead.source,
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
