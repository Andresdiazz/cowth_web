import { NextResponse } from "next/server";
import { createOrTagContact } from "@/lib/systeme";
import { validateEmail, validateName, type LeadSource, type LeadTracking } from "@/lib/leads";

const KNOWN_SOURCES: LeadSource[] = [
  "academy-ebook",
  "community-waitlist",
  "lab-contact",
  "kit-waitlist",
];

function isKnownSource(value: unknown): value is LeadSource {
  return typeof value === "string" && (KNOWN_SOURCES as string[]).includes(value);
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function asTracking(value: unknown): LeadTracking | undefined {
  if (!value || typeof value !== "object") return undefined;

  const entries = Object.entries(value as Record<string, unknown>).filter(
    (entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].length > 0,
  );

  return entries.length > 0 ? Object.fromEntries(entries) : undefined;
}

/** Único punto de entrada de leads del sitio: reenvía a Systeme.io server-side. */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const payload = (body ?? {}) as Record<string, unknown>;
  const email = asOptionalString(payload.email);
  const name = asOptionalString(payload.name);
  const phone = asOptionalString(payload.phone);
  const message = asOptionalString(payload.message);
  const source = payload.source;
  const tracking = asTracking(payload.tracking);

  if (!email || !validateEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  if (name !== undefined && !validateName(name)) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }

  if (!isKnownSource(source)) {
    return NextResponse.json({ ok: false, error: "invalid_source" }, { status: 400 });
  }

  const result = await createOrTagContact({ email, name, phone, message, source, tracking });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true, demo: result.demo === true });
}
