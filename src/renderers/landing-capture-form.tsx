"use client";

import { useState } from "react";

interface FormFieldDef {
  field_name: string;
  field_type: string;
  field_label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  help_text?: string;
}

interface CaptureFormConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  form_fields?: FormFieldDef[];
  submit_button_label?: string;
  privacy_text?: string;
  layout?: string;
}

export function LandingCaptureForm({
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
  const c = config as CaptureFormConfig;
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
    setIsPending(true);
    setError(false);
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    for (const [key, val] of formData.entries()) {
      data[key] = val as string;
    }
    try {
      await onSubmitForm({ networkId, sectionId, fields: data });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-16" aria-label={c.headline || "Sign up"}>
      {c.headline && (
        <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.body_text && (
        <p className="mb-8 text-center text-base text-zinc-600 dark:text-zinc-400">{c.body_text}</p>
      )}
      {submitted ? (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10">
          <p className="text-lg font-semibold text-zinc-900 dark:text-white">Thank you!</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">We&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-surface-border dark:bg-surface-raised">
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.field_name}>
                <label htmlFor={field.field_name} className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {field.field_label}
                </label>
                {field.help_text && (
                  <p className="mb-1 text-xs text-zinc-400">{field.help_text}</p>
                )}
                {field.field_type === "textarea" ? (
                  <textarea
                    id={field.field_name}
                    name={field.field_name}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={3}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
                  />
                ) : field.field_type === "select" ? (
                  <select
                    id={field.field_name}
                    name={field.field_name}
                    required={field.required}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white"
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
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
                  />
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="mt-4 w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60"
          >
            {isPending ? "Submitting..." : submitLabel}
          </button>
          {error && (
            <p className="mt-2 text-center text-sm text-red-500">Something went wrong. Please try again.</p>
          )}
          {c.privacy_text && (
            <p className="mt-3 text-center text-xs text-zinc-400">{c.privacy_text}</p>
          )}
        </form>
      )}
    </section>
  );
}
