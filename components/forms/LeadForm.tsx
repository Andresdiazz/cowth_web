"use client";

import { useId, useState, type FormEvent } from "react";
import { submitLead, type LeadSource } from "@/lib/leads";
import { ArrowIcon, Button } from "@/components/ui/Button";

type LeadFormProps = {
  source: LeadSource;
  withName?: boolean;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  note?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm({
  source,
  withName = false,
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

    const result = await submitLead({
      email,
      name: withName ? name : undefined,
      source,
    });

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

  const inputClass =
    "w-full rounded-xl border border-cream/12 bg-ink/60 px-4 py-3.5 text-[15px] text-cream placeholder:text-faint transition-colors duration-200 focus:border-accent/60 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      {withName && (
        <div>
          <label htmlFor={nameId} className="sr-only">
            Nombre
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="given-name"
            required
            maxLength={80}
            placeholder="Tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor={emailId} className="sr-only">
          Correo electrónico
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="tucorreo@empresa.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? `${emailId}-error` : undefined}
          className={inputClass}
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Enviando…" : submitLabel}
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
