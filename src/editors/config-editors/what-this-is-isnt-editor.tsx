"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface WhatThisIsIsntConfig {
  headline?: string;
  is_items?: Array<{ statement?: string }>;
  is_not_items?: Array<{ statement?: string }>;
  layout?: string;
  closing_text?: string;
}

export function WhatThisIsIsntEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as WhatThisIsIsntConfig;
  const isItems = c.is_items ?? [];
  const isNotItems = c.is_not_items ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">This IS...</label>
        <div className="space-y-2">
          {isItems.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.statement ?? ""} onChange={(e) => { const u = [...isItems]; u[i] = { statement: e.target.value }; onChange({ ...config, is_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="This is..." />
              <button type="button" onClick={() => onChange({ ...config, is_items: isItems.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, is_items: [...isItems, { statement: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">This is NOT...</label>
        <div className="space-y-2">
          {isNotItems.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.statement ?? ""} onChange={(e) => { const u = [...isNotItems]; u[i] = { statement: e.target.value }; onChange({ ...config, is_not_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="This is not..." />
              <button type="button" onClick={() => onChange({ ...config, is_not_items: isNotItems.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, is_not_items: [...isNotItems, { statement: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "two-columns"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="two-columns">Two Columns</option>
          <option value="alternating-rows">Alternating Rows</option>
          <option value="single-column">Single Column</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Closing Text</label>
        <textarea value={c.closing_text ?? ""} onChange={(e) => onChange({ ...config, closing_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
    </div>
  );
}
