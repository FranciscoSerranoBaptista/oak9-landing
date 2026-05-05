"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface FormField {
  field_name?: string;
  field_type?: string;
  field_label?: string;
  placeholder?: string;
  required?: boolean;
}

interface CaptureFormConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  form_fields?: FormField[];
  submit_button_label?: string;
  opt_in_key?: string;
  opt_in_tags?: string[];
  privacy_text?: string;
  layout?: string;
}

export function CaptureFormEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as CaptureFormConfig;
  const fields = c.form_fields ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Section Label</label>
        <input value={c.section_label ?? ""} onChange={(e) => onChange({ ...config, section_label: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Form Fields</label>
        <div className="space-y-2">
          {fields.map((f, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Field {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input placeholder="Field name (key)" value={f.field_name ?? ""} onChange={(e) => { const u = [...fields]; u[i] = { ...u[i], field_name: e.target.value }; onChange({ ...config, form_fields: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Label" value={f.field_label ?? ""} onChange={(e) => { const u = [...fields]; u[i] = { ...u[i], field_label: e.target.value }; onChange({ ...config, form_fields: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <select value={f.field_type ?? "text"} onChange={(e) => { const u = [...fields]; u[i] = { ...u[i], field_type: e.target.value }; onChange({ ...config, form_fields: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="tel">Phone</option>
                  <option value="textarea">Textarea</option>
                  <option value="select">Select</option>
                </select>
                <input placeholder="Placeholder" value={f.placeholder ?? ""} onChange={(e) => { const u = [...fields]; u[i] = { ...u[i], placeholder: e.target.value }; onChange({ ...config, form_fields: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              </div>
              <label className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <input type="checkbox" checked={f.required ?? false} onChange={(e) => { const u = [...fields]; u[i] = { ...u[i], required: e.target.checked }; onChange({ ...config, form_fields: u }); }} className="rounded border-zinc-300 dark:border-zinc-600" />
                Required
              </label>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Field</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Submit Button Label</label>
        <input value={c.submit_button_label ?? ""} onChange={(e) => onChange({ ...config, submit_button_label: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Submit" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Opt-in key</label>
        <input value={c.opt_in_key ?? ""} onChange={(e) => onChange({ ...config, opt_in_key: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="control-trap-waitlist" />
        <p className="mt-1 text-xs text-zinc-400">Lowercase letters, digits, hyphens, underscores. Identifies this opt-in to Bulbul.</p>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Tags to apply on confirmation (optional)</label>
        <input value={(c.opt_in_tags ?? []).join(", ")} onChange={(e) => onChange({ ...config, opt_in_tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="interest:control-trap, vip" />
        <p className="mt-1 text-xs text-zinc-400">Comma-separated. Bulbul applies these tags after the subscriber confirms.</p>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Privacy Text</label>
        <textarea value={c.privacy_text ?? ""} onChange={(e) => onChange({ ...config, privacy_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "centered"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="centered">Centered</option>
          <option value="card">Card</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
    </div>
  );
}
