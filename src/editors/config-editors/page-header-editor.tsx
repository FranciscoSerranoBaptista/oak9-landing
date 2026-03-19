"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface PageHeaderConfig {
  breadcrumb_items?: Array<{ label?: string; url?: string }>;
  page_title?: string;
}

export function PageHeaderEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as PageHeaderConfig;
  const items = c.breadcrumb_items ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Page Title</label>
        <input value={c.page_title ?? ""} onChange={(e) => onChange({ ...config, page_title: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Breadcrumbs</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input placeholder="Label" value={item.label ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], label: e.target.value }; onChange({ ...config, breadcrumb_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="URL" value={item.url ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], url: e.target.value }; onChange({ ...config, breadcrumb_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <button type="button" onClick={() => onChange({ ...config, breadcrumb_items: items.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, breadcrumb_items: [...items, { label: "", url: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Breadcrumb</button>
      </div>
    </div>
  );
}
