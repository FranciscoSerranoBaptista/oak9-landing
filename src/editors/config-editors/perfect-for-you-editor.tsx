"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface PerfectForYouConfig {
  section_label?: string;
  headline?: string;
  for_items?: Array<{ statement?: string }>;
  not_for_items?: Array<{ statement?: string }>;
  closing_text?: string;
  cta_button?: { label?: string; url?: string; variant?: string };
  layout?: string;
}

export function PerfectForYouEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as PerfectForYouConfig;
  const forItems = c.for_items ?? [];
  const notForItems = c.not_for_items ?? [];
  const cta = c.cta_button ?? {};

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Perfect For...</label>
        <div className="space-y-2">
          {forItems.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.statement ?? ""} onChange={(e) => { const u = [...forItems]; u[i] = { statement: e.target.value }; onChange({ ...config, for_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="This is for you if..." />
              <button type="button" onClick={() => onChange({ ...config, for_items: forItems.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, for_items: [...forItems, { statement: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">NOT For...</label>
        <div className="space-y-2">
          {notForItems.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.statement ?? ""} onChange={(e) => { const u = [...notForItems]; u[i] = { statement: e.target.value }; onChange({ ...config, not_for_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="This is not for you if..." />
              <button type="button" onClick={() => onChange({ ...config, not_for_items: notForItems.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, not_for_items: [...notForItems, { statement: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Closing Text</label>
        <textarea value={c.closing_text ?? ""} onChange={(e) => onChange({ ...config, closing_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
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
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "two-columns"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="two-columns">Two Columns</option>
          <option value="single-column">Single Column</option>
          <option value="checklist">Checklist</option>
        </select>
      </div>
    </div>
  );
}
