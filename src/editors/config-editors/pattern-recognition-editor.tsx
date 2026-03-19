"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface PatternRecognitionConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  recognition_items?: Array<{ statement?: string }>;
  closing_line?: string;
  background_style?: string;
}

export function PatternRecognitionEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as PatternRecognitionConfig;
  const items = c.recognition_items ?? [];

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Recognition Items</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.statement ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], statement: e.target.value }; onChange({ ...config, recognition_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Recognition statement..." />
              <button type="button" onClick={() => onChange({ ...config, recognition_items: items.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, recognition_items: [...items, { statement: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Closing Line</label>
        <textarea value={c.closing_line ?? ""} onChange={(e) => onChange({ ...config, closing_line: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Background Style</label>
        <select value={c.background_style ?? "light"} onChange={(e) => onChange({ ...config, background_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cream">Cream</option>
        </select>
      </div>
    </div>
  );
}
