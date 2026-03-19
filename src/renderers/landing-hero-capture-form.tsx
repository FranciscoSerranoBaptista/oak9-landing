"use client";

import { useState } from "react";

interface FormFieldDef {
  field_name: string;
  field_type: string;
  field_label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface HeroCaptureFormConfig {
  headline?: string;
  subtitle?: string;
  body_text?: string;
  form_fields?: FormFieldDef[];
  submit_button_label?: string;
  form_position?: string;
  social_proof_line?: string;
  layout?: "centered" | "split";
  privacy_text?: string;
}

export function LandingHeroCaptureForm({
  config,
  networkId,
  sectionId,
  onSubmitForm,
}: {
  config: Record<string, unknown>;
  networkId: string;
  sectionId: string;
  onSubmitForm?: (data: { networkId: string; sectionId: string; fields: Record<string, string> }) => Promise<void>;
}) {
  const c = config as HeroCaptureFormConfig;
  const layout = c.layout || "centered";
  const fields = c.form_fields ?? [
    { field_name: "email", field_type: "email", field_label: "Email", required: true },
  ];
  const submitLabel = c.submit_button_label || "Join the waiting list";
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!onSubmitForm) return;
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    for (const [key, val] of formData.entries()) {
      data[key] = val as string;
    }
    setIsPending(true);
    setError(false);
    try {
      await onSubmitForm({ networkId, sectionId, fields: data });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsPending(false);
    }
  }

  const isSplit = layout === "split";

  return (
    <header className="relative overflow-hidden" role="banner">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand-700, #7c3aed) 0%, var(--color-brand-900, #4c1d95) 100%)",
        }}
        aria-hidden="true"
      />
      <div className={`relative mx-auto max-w-5xl px-4 py-20 ${isSplit ? "flex flex-col gap-12 md:flex-row md:items-center" : ""}`}>
        <div className={isSplit ? "md:w-1/2" : "mb-10 text-center"}>
          {c.headline && (
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {c.headline}
            </h1>
          )}
          {c.subtitle && (
            <p className="mt-4 max-w-xl text-lg text-white/80">{c.subtitle}</p>
          )}
          {c.body_text && (
            <p className="mt-3 max-w-xl text-base text-white/70">{c.body_text}</p>
          )}
          {c.social_proof_line && (
            <p className="mt-4 text-sm text-white/60">{c.social_proof_line}</p>
          )}
        </div>
        <div className={isSplit ? "md:w-1/2" : "mx-auto max-w-md"}>
          {submitted ? (
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">Thank you!</p>
              <p className="mt-2 text-sm text-white/70">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.field_name}>
                    <label htmlFor={field.field_name} className="mb-1 block text-sm font-medium text-white/90">
                      {field.field_label}
                    </label>
                    {field.field_type === "textarea" ? (
                      <textarea
                        id={field.field_name}
                        name={field.field_name}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={3}
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                      />
                    ) : field.field_type === "select" ? (
                      <select
                        id={field.field_name}
                        name={field.field_name}
                        required={field.required}
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                      >
                        <option value="">{field.placeholder || "Select..."}</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.field_name}
                        name={field.field_name}
                        type={field.field_type || "text"}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="mt-4 w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-60"
              >
                {isPending ? "Submitting..." : submitLabel}
              </button>
              {error && (
                <p className="mt-2 text-center text-sm text-red-300">Something went wrong. Please try again.</p>
              )}
              {c.privacy_text && (
                <p className="mt-3 text-center text-xs text-white/50">{c.privacy_text}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
