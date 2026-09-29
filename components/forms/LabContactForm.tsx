"use client";

import { useId, useState, type FormEvent } from "react";
import { submitLead, type LeadTracking } from "@/lib/leads";
import { ArrowIcon, Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n";

type FormStrings = Dictionary["labPage"]["finalCta"]["form"];

type LabContactFormProps = {
  strings: FormStrings;
  /** UTMs y demás parámetros de tráfico leídos de la URL (ver TAREA 3). */
  tracking?: LeadTracking;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-cream/12 bg-ink/60 px-4 py-3.5 text-[15px] text-cream placeholder:text-faint transition-colors duration-200 focus:border-accent/60 focus:outline-none";

/** Formulario de contacto de /lab: nombre, correo, WhatsApp opcional y qué necesita. */
export function LabContactForm({ strings, tracking }: LabContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const whatsappId = useId();
  const needId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [need, setNeed] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (need.trim().length < 4) {
      setStatus("error");
      setError(strings.errorNeed);
      return;
    }

    setStatus("loading");
    setError("");

    const result = await submitLead(
      {
        name,
        email,
        phone: whatsapp.trim() || undefined,
        message: need,
        source: "lab-contact",
        tracking,
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
      <div role="status" className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 sm:p-8">
        <p className="display-tight text-2xl text-cream">{strings.successTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{strings.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div>
        <label htmlFor={nameId} className="sr-only">
          {strings.namePlaceholder}
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

      <div>
        <label htmlFor={emailId} className="sr-only">
          {strings.emailPlaceholder}
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
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={whatsappId} className="sr-only">
          {strings.whatsappPlaceholder}
        </label>
        <input
          id={whatsappId}
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder={strings.whatsappPlaceholder}
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={needId} className="sr-only">
          {strings.needPlaceholder}
        </label>
        <textarea
          id={needId}
          name="need"
          required
          rows={3}
          maxLength={600}
          placeholder={strings.needPlaceholder}
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? `${needId}-error` : undefined}
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? strings.sending : strings.submitLabel}
        {status !== "loading" && <ArrowIcon />}
      </Button>

      {status === "error" && (
        <p id={`${needId}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
