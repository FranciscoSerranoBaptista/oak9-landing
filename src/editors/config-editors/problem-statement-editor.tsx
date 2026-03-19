"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface ProblemStatementConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  contrast_items?: Array<{ surface_reality?: string; underneath?: string }>;
  transition_line?: string;
}

export function ProblemStatementEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ProblemStatementConfig;
  const items = c.contrast_items ?? [];

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Contrast Items</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Contrast {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, contrast_items: items.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <input placeholder="Surface reality" value={item.surface_reality ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], surface_reality: e.target.value }; onChange({ ...config, contrast_items: u }); }} className="mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Underneath" value={item.underneath ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], underneath: e.target.value }; onChange({ ...config, contrast_items: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, contrast_items: [...items, { surface_reality: "", underneath: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Contrast</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Transition Line</label>
        <textarea value={c.transition_line ?? ""} onChange={(e) => onChange({ ...config, transition_line: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
    </div>
  );
}
