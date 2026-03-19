"use client";

import { Plus, Trash } from "@phosphor-icons/react";
import { ImageUrlField } from "./image-url-field";

interface HeroStatementConfig {
  headline?: string;
  subtitle?: string;
  body_text?: string;
  cta_button?: { label?: string; url?: string; variant?: string };
  background_image?: { url?: string; alt_text?: string; caption?: string };
  layout?: string;
  height?: string;
}

export function HeroStatementEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as HeroStatementConfig;
  const cta = c.cta_button ?? {};
  const bg = c.background_image ?? {};

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Subtitle</label>
        <input value={c.subtitle ?? ""} onChange={(e) => onChange({ ...config, subtitle: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
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
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Background Image</legend>
        <div className="space-y-2">
          <input placeholder="Image URL" value={bg.url ?? ""} onChange={(e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="Alt text" value={bg.alt_text ?? ""} onChange={(e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
      </fieldset>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
          <select value={c.layout ?? "centered"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="centered">Centered</option>
            <option value="left-aligned">Left Aligned</option>
            <option value="split">Split</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Height</label>
          <select value={c.height ?? "large"} onChange={(e) => onChange({ ...config, height: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="viewport">Viewport</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
          </select>
        </div>
      </div>
    </div>
  );
}
