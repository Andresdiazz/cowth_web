"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitLead, type LeadTracking } from "@/lib/leads";
import { trackingToQueryString } from "@/lib/tracking";
import { ArrowIcon, Button } from "@/components/ui/Button";
import type { Dictionary, Locale } from "@/lib/i18n";

type FormStrings = Dictionary["form"];

type EbookLeadFormProps = {
  lang: Locale;
  strings: FormStrings;
  submitLabel: string;
  microcopy?: string;
  tracking?: LeadTracking;
};

const inputClass =
  "w-full rounded-xl border border-cream/12 bg-ink/60 px-4 py-3.5 text-[15px] text-cream placeholder:text-faint transition-colors duration-200 focus:border-accent/60 focus:outline-none";

type Status = "idle" | "loading" | "error";

/**
 * A diferencia de LeadForm (éxito inline), este formulario navega a
 * /libro/gracias al enviar — es la página que entrega el PDF (TAREA 3).
 */
export function EbookLeadForm({ lang, strings, submitLabel, microcopy, tracking }: EbookLeadFormProps) {
  const router = useRouter();
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

    const result = await submitLead({ name, email, source: "academy-ebook", tracking }, strings);

    if (result.ok) {
      router.push(`/${lang}/libro/gracias${trackingToQueryString(tracking)}`);
      return;
    }

    setStatus("error");
    setError(result.error);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
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

      {microcopy && <p className="pt-1 text-xs leading-relaxed text-faint">{microcopy}</p>}
    </form>
  );
}
