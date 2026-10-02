import type { LeadSource, LeadTracking } from "@/lib/leads";

/**
 * Este módulo solo debe importarse desde Route Handlers (app/api/**),
 * que ya corren exclusivamente en el servidor: nunca se referencia desde
 * un componente cliente, así que SYSTEME_API_KEY nunca llega al navegador.
 */

/**
 * Integración server-side con la API pública de Systeme.io.
 * Docs: https://developer.systeme.io (Contact: POST /api/contacts,
 * POST /api/contacts/{id}/tags — auth por header X-API-Key).
 *
 * TODO(Systeme.io): crea un tag por cada origen en tu cuenta (Academy,
 * Community, Lab, Kit-waitlist) y define su ID numérico en las variables
 * de entorno de abajo. Sin `SYSTEME_API_KEY`, todo corre en modo demo.
 */
const TAG_ID_BY_SOURCE: Record<LeadSource, string | undefined> = {
  "academy-ebook": process.env.SYSTEME_TAG_ID_ACADEMY,
  "community-waitlist": process.env.SYSTEME_TAG_ID_COMMUNITY,
  "lab-contact": process.env.SYSTEME_TAG_ID_LAB,
  "kit-waitlist": process.env.SYSTEME_TAG_ID_KIT,
};

// TODO(Systeme.io): además de la descarga directa en /libro/gracias, el
// e-book debe llegar por correo. En Systeme.io: Automations → nueva regla
// "cuando se agrega el tag Academy" → enviar el email con el PDF adjunto
// (o un enlace de descarga). Ese envío vive del lado de Systeme, no aquí.

// El tag "Growth Partner" ya existe en Systeme.io (SYSTEME_TAG_ID_GROWTH en
// .env.example) pero todavía no hay un formulario/LeadSource que lo use.
// Cuando se construya esa sección, se agrega "growth-partner" a LeadSource
// (lib/leads.ts) y su entrada aquí.

const API_BASE = "https://api.systeme.io/api";

type SystemeContactInput = {
  email: string;
  name?: string;
  phone?: string;
  message?: string;
  source: LeadSource;
  tracking?: LeadTracking;
};

export type SystemeResult = { ok: true; demo?: boolean } | { ok: false; error: string };

function headers(apiKey: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-API-Key": apiKey,
  };
}

/**
 * Campos por defecto que existen en cualquier cuenta de Systeme.io.
 * `first_name` y `phone_number` son slugs documentados; el resto de datos
 * (mensaje, UTMs) va como campos personalizados y solo se envía si la
 * cuenta ya los tiene creados (Contacts → Custom fields), porque un slug
 * inexistente hace que Systeme rechace la creación del contacto entero.
 */
function buildDefaultFields(input: SystemeContactInput) {
  const fields: Array<{ slug: string; value: string }> = [];
  if (input.name) fields.push({ slug: "first_name", value: input.name });
  if (input.phone) fields.push({ slug: "phone_number", value: input.phone });
  return fields;
}

function buildCustomFields(input: SystemeContactInput) {
  const fields: Array<{ slug: string; value: string }> = [];
  // TODO(Systeme.io): crea estos custom fields (Contacts → Custom fields)
  // con exactamente estos slugs si quieres ver el mensaje y los UTM en la
  // ficha del contacto. Si no existen, se omiten sin romper la captura.
  if (input.message) fields.push({ slug: "message", value: input.message });
  for (const [key, value] of Object.entries(input.tracking ?? {})) {
    if (value) fields.push({ slug: key, value });
  }
  return fields;
}

async function createContact(
  apiKey: string,
  email: string,
  fields: Array<{ slug: string; value: string }>,
): Promise<{ status: number; id?: number }> {
  const response = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers: headers(apiKey),
    body: JSON.stringify(fields.length > 0 ? { email, fields } : { email }),
  });

  if (response.status === 201) {
    const created = (await response.json()) as { id: number };
    return { status: response.status, id: created.id };
  }

  return { status: response.status };
}

async function findContactIdByEmail(apiKey: string, email: string): Promise<number | undefined> {
  const response = await fetch(`${API_BASE}/contacts?email=${encodeURIComponent(email)}`, {
    headers: headers(apiKey),
  });

  if (!response.ok) return undefined;

  const found = (await response.json()) as { items?: Array<{ id: number }> };
  return found.items?.[0]?.id;
}

/**
 * Crea (o reutiliza, si el correo ya existe) un contacto en Systeme.io y le
 * asigna el tag correspondiente al origen del lead.
 */
export async function createOrTagContact(input: SystemeContactInput): Promise<SystemeResult> {
  const apiKey = process.env.SYSTEME_API_KEY;

  if (!apiKey) {
    // Modo demo: sin API key no hay dónde guardar el lead todavía.
    return { ok: true, demo: true };
  }

  try {
    const defaultFields = buildDefaultFields(input);
    const customFields = buildCustomFields(input);

    let created = await createContact(apiKey, input.email, [...defaultFields, ...customFields]);

    // Si los custom fields no existen en la cuenta, Systeme devuelve 422.
    // Reintentamos solo con los campos por defecto para no perder el lead.
    if (created.status === 422 && customFields.length > 0) {
      created = await createContact(apiKey, input.email, defaultFields);
    }

    let contactId = created.id;

    if (created.status === 422 && !contactId) {
      // El contacto ya existía: lo buscamos por correo para poder etiquetarlo.
      contactId = await findContactIdByEmail(apiKey, input.email);
    }

    if (!contactId) {
      return { ok: false, error: `systeme_create_failed_${created.status}` };
    }

    const tagId = TAG_ID_BY_SOURCE[input.source];
    if (!tagId) {
      // Contacto creado, pero sin tag configurado para este origen.
      return { ok: true };
    }

    const tagResponse = await fetch(`${API_BASE}/contacts/${contactId}/tags`, {
      method: "POST",
      headers: headers(apiKey),
      body: JSON.stringify({ tagId: Number(tagId) }),
    });

    if (!tagResponse.ok && tagResponse.status !== 204) {
      return { ok: false, error: `systeme_tag_failed_${tagResponse.status}` };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "systeme_network_error" };
  }
}
