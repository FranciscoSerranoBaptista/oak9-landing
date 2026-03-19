"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface PostPurchaseWelcomeConfig {
  headline?: string;
  welcome_text?: string;
  next_steps?: Array<{ step_number?: number; step_title?: string; step_description?: string }>;
  community_link?: string;
  personal_note?: string;
  cta_button?: { label?: string; url?: string; variant?: string };
}

export function PostPurchaseWelcomeEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as PostPurchaseWelcomeConfig;
  const steps = c.next_steps ?? [];
  const cta = c.cta_button ?? {};

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Welcome Text</label>
        <textarea value={c.welcome_text ?? ""} onChange={(e) => onChange({ ...config, welcome_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Next Steps</label>
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Step {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, next_steps: steps.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input type="number" placeholder="#" value={step.step_number ?? i + 1} onChange={(e) => { const u = [...steps]; u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 }; onChange({ ...config, next_steps: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Title" value={step.step_title ?? ""} onChange={(e) => { const u = [...steps]; u[i] = { ...u[i], step_title: e.target.value }; onChange({ ...config, next_steps: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              </div>
              <input placeholder="Description" value={step.step_description ?? ""} onChange={(e) => { const u = [...steps]; u[i] = { ...u[i], step_description: e.target.value }; onChange({ ...config, next_steps: u }); }} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, next_steps: [...steps, { step_number: steps.length + 1, step_title: "", step_description: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Step</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Community Link</label>
        <input value={c.community_link ?? ""} onChange={(e) => onChange({ ...config, community_link: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="https://..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Personal Note</label>
        <textarea value={c.personal_note ?? ""} onChange={(e) => onChange({ ...config, personal_note: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">CTA Button</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          <input placeholder="Label" value={cta.label ?? ""} onChange={(e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="URL" value={cta.url ?? ""} onChange={(e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
        <select value={cta.variant ?? "primary"} onChange={(e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } })} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="text-link">Text Link</option>
        </select>
      </fieldset>
    </div>
  );
}
