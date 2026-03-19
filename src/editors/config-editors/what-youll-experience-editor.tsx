"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface WhatYoullExperienceConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  experience_items?: Array<{ title?: string; description?: string }>;
  layout?: string;
  columns?: number;
}

export function WhatYoullExperienceEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as WhatYoullExperienceConfig;
  const items = c.experience_items ?? [];

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Introduction</label>
        <textarea value={c.introduction ?? ""} onChange={(e) => onChange({ ...config, introduction: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Experience Items</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Item {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, experience_items: items.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <input placeholder="Title" value={item.title ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], title: e.target.value }; onChange({ ...config, experience_items: u }); }} className="mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Description" value={item.description ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], description: e.target.value }; onChange({ ...config, experience_items: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, experience_items: [...items, { title: "", description: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
          <select value={c.layout ?? "grid-2col"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="grid-2col">Grid 2 Col</option>
            <option value="grid-3col">Grid 3 Col</option>
            <option value="stacked-cards">Stacked Cards</option>
            <option value="numbered-list">Numbered List</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Columns (2-4)</label>
          <input type="number" min={2} max={4} value={c.columns ?? 2} onChange={(e) => onChange({ ...config, columns: parseInt(e.target.value) || 2 })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
      </div>
    </div>
  );
}
