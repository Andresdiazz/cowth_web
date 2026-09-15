"use client";

import { useId, useState, type FormEvent } from "react";
import { submitLead, type LeadSource } from "@/lib/leads";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

/**
 * Mientras no haya destino real (Systeme.io), los formularios NO se envían:
 * capturar correos que no se guardan en ningún lado es perder leads y
 * mentirle al usuario con un falso "listo".
 *
 * Para activarlos: pon FORMS_ENABLED en true y define NEXT_PUBLIC_LEAD_ENDPOINT
 * en el entorno. El flujo completo ya está implementado más abajo.
 */
const FORMS_ENABLED = false;

type FormStrings = Dictionary["form"];

type LeadFormProps = {
  source: LeadSource;
  withName?: boolean;
  strings: FormStrings;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  note?: string;
};

export function LeadForm(props: LeadFormProps) {
  return FORMS_ENABLED ? (
    <ActiveLeadForm {...props} />
  ) : (
    <ComingSoonForm withName={props.withName} strings={props.strings} />
  );
}

const inputClass =
  "w-full rounded-xl border border-cream/12 bg-ink/60 px-4 py-3.5 text-[15px] text-cream placeholder:text-faint transition-colors duration-200 focus:border-accent/60 focus:outline-none";

/** Estado honesto: se ve como el formulario final, pero no promete lo que no hace. */
function ComingSoonForm({
  withName = false,
  strings,
}: {
  withName?: boolean;
  strings: FormStrings;
}) {
  return (
    <div className="space-y-3">
      <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
        {strings.soonBadge}
      </p>

      {withName && (
        <input
          type="text"
          placeholder={strings.namePlaceholder}
          disabled
          aria-hidden
          tabIndex={-1}
          className={`${inputClass} cursor-not-allowed opacity-45`}
        />
      )}
      <input
        type="email"
        placeholder={strings.emailPlaceholder}
        disabled
        aria-hidden
        tabIndex={-1}
        className={`${inputClass} cursor-not-allowed opacity-45`}
      />

      <Button type="button" disabled className="w-full sm:w-auto">
        {strings.soonCta}
      </Button>

      <p className="pt-1 text-xs leading-relaxed text-faint">
        {strings.soonNoteBefore}
        <a
          href={`mailto:${site.email}`}
          className="text-muted underline decoration-cream/25 underline-offset-4 transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        {strings.soonNoteAfter}
      </p>
    </div>
  );
}

type Status = "idle" | "loading" | "success" | "error";

/** Flujo completo, listo para cuando exista el endpoint de Systeme.io. */
function ActiveLeadForm({
  source,
  withName = false,
  strings,
  submitLabel,
  successTitle,
  successBody,
  note,
}: LeadFormProps) {
  const nameId = useId();
  const emailId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const result = await submitLead(
      {
        email,
        name: withName ? name : undefined,
        source,
      },
      strings,
    );

    if (result.ok) {
      setStatus("success");
      return;
    }

    setStatus("error");
    setError(result.error);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 sm:p-8"
      >
        <p className="display-tight text-2xl text-cream">{successTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      {withName && (
        <div>
          <label htmlFor={nameId} className="sr-only">
            {strings.nameLabel}
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="given-name"
            required
            maxLength={80}
            placeholder={strings.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor={emailId} className="sr-only">
          {strings.emailLabel}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder={strings.emailPlaceholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? `${emailId}-error` : undefined}
          className={inputClass}
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? strings.sending : submitLabel}
        {status !== "loading" && <ArrowIcon />}
      </Button>

      {status === "error" && (
        <p id={`${emailId}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      {note && <p className="pt-1 text-xs leading-relaxed text-faint">{note}</p>}
    </form>
  );
}
