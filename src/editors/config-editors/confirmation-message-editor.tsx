"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface ConfirmationMessageConfig {
  headline?: string;
  body_text?: string;
  what_happens_next?: Array<{ step_number?: number; step_description?: string }>;
}

export function ConfirmationMessageEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ConfirmationMessageConfig;
  const steps = c.what_happens_next ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">What Happens Next</label>
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-2">
              <input type="number" value={step.step_number ?? i + 1} onChange={(e) => { const u = [...steps]; u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 }; onChange({ ...config, what_happens_next: u }); }} className="w-16 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input value={step.step_description ?? ""} onChange={(e) => { const u = [...steps]; u[i] = { ...u[i], step_description: e.target.value }; onChange({ ...config, what_happens_next: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Step description..." />
              <button type="button" onClick={() => onChange({ ...config, what_happens_next: steps.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, what_happens_next: [...steps, { step_number: steps.length + 1, step_description: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Step</button>
      </div>
    </div>
  );
}
