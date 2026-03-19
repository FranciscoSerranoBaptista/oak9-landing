"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface AnchorNavigationConfig {
  nav_items?: Array<{ label?: string; anchor_id?: string }>;
  style?: string;
  show_on_mobile?: boolean;
}

export function AnchorNavigationEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as AnchorNavigationConfig;
  const items = c.nav_items ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Nav Items</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input placeholder="Label" value={item.label ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], label: e.target.value }; onChange({ ...config, nav_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Anchor ID" value={item.anchor_id ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], anchor_id: e.target.value }; onChange({ ...config, nav_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <button type="button" onClick={() => onChange({ ...config, nav_items: items.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, nav_items: [...items, { label: "", anchor_id: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Nav Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Style</label>
        <select value={c.style ?? "sticky-top"} onChange={(e) => onChange({ ...config, style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="sticky-top">Sticky Top</option>
          <option value="inline">Inline</option>
          <option value="sidebar">Sidebar</option>
        </select>
      </div>
      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input type="checkbox" checked={c.show_on_mobile ?? false} onChange={(e) => onChange({ ...config, show_on_mobile: e.target.checked })} className="rounded border-zinc-300 dark:border-zinc-600" />
        Show on Mobile
      </label>
    </div>
  );
}
