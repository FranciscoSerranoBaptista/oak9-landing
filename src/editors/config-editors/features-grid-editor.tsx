"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface FeaturesGridConfig {
  section_label?: string;
  headline?: string;
  subtitle?: string;
  features?: Array<{ feature_title?: string; feature_description?: string }>;
  layout?: string;
  cta_button?: { label?: string; url?: string; variant?: string };
}

export function FeaturesGridEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as FeaturesGridConfig;
  const features = c.features ?? [];
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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Subtitle</label>
        <input value={c.subtitle ?? ""} onChange={(e) => onChange({ ...config, subtitle: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Features</label>
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Feature {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, features: features.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <input placeholder="Title" value={f.feature_title ?? ""} onChange={(e) => { const u = [...features]; u[i] = { ...u[i], feature_title: e.target.value }; onChange({ ...config, features: u }); }} className="mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Description" value={f.feature_description ?? ""} onChange={(e) => { const u = [...features]; u[i] = { ...u[i], feature_description: e.target.value }; onChange({ ...config, features: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, features: [...features, { feature_title: "", feature_description: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Feature</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "grid-3col"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="grid-2col">Grid 2 Col</option>
          <option value="grid-3col">Grid 3 Col</option>
          <option value="grid-4col">Grid 4 Col</option>
          <option value="icon-list">Icon List</option>
        </select>
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
