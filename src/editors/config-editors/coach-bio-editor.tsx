"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface CoachBioConfig {
  section_label?: string;
  headline?: string;
  photo?: { url?: string; alt_text?: string; caption?: string };
  bio_text?: string;
  credentials?: Array<{ credential?: string }>;
  personal_line?: string;
  layout?: string;
}

export function CoachBioEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as CoachBioConfig;
  const photo = c.photo ?? {};
  const creds = c.credentials ?? [];

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
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Photo</legend>
        <div className="space-y-2">
          <input placeholder="Image URL" value={photo.url ?? ""} onChange={(e) => onChange({ ...config, photo: { ...photo, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="Alt text" value={photo.alt_text ?? ""} onChange={(e) => onChange({ ...config, photo: { ...photo, alt_text: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
      </fieldset>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Bio Text</label>
        <textarea value={c.bio_text ?? ""} onChange={(e) => onChange({ ...config, bio_text: e.target.value })} rows={4} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Credentials</label>
        <div className="space-y-2">
          {creds.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.credential ?? ""} onChange={(e) => { const u = [...creds]; u[i] = { credential: e.target.value }; onChange({ ...config, credentials: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Credential..." />
              <button type="button" onClick={() => onChange({ ...config, credentials: creds.filter((_, j) => j !== i) })} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, credentials: [...creds, { credential: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Credential</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Personal Line</label>
        <textarea value={c.personal_line ?? ""} onChange={(e) => onChange({ ...config, personal_line: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "split"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="split">Split</option>
          <option value="centered">Centered</option>
          <option value="card">Card</option>
        </select>
      </div>
    </div>
  );
}
