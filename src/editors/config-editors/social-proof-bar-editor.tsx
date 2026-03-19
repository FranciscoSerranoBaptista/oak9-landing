"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface SocialProofBarConfig {
  proof_items?: Array<{ metric?: string; label?: string }>;
  proof_line?: string;
  layout?: string;
  background_style?: string;
}

export function SocialProofBarEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as SocialProofBarConfig;
  const items = c.proof_items ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Proof Items</label>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input placeholder="Metric (e.g. 500+)" value={item.metric ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], metric: e.target.value }; onChange({ ...config, proof_items: u }); }} className="w-24 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Label" value={item.label ?? ""} onChange={(e) => { const u = [...items]; u[i] = { ...u[i], label: e.target.value }; onChange({ ...config, proof_items: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <button type="button" onClick={() => onChange({ ...config, proof_items: items.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, proof_items: [...items, { metric: "", label: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Item</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Proof Line</label>
        <input value={c.proof_line ?? ""} onChange={(e) => onChange({ ...config, proof_line: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Trusted by 500+ professionals" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
          <select value={c.layout ?? "bar"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="bar">Bar</option>
            <option value="inline">Inline</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Background Style</label>
          <select value={c.background_style ?? "light"} onChange={(e) => onChange({ ...config, background_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>
      </div>
    </div>
  );
}
