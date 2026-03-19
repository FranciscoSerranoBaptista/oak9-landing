"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface CurriculumBreakdownConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  modules?: Array<{ module_number?: number; module_title?: string; module_description?: string; module_outcomes?: string; duration?: string }>;
  layout?: string;
  show_duration?: boolean;
}

export function CurriculumBreakdownEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as CurriculumBreakdownConfig;
  const modules = c.modules ?? [];

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Modules</label>
        <div className="space-y-2">
          {modules.map((mod, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Module {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, modules: modules.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input type="number" placeholder="Module #" value={mod.module_number ?? i + 1} onChange={(e) => { const u = [...modules]; u[i] = { ...u[i], module_number: parseInt(e.target.value) || 0 }; onChange({ ...config, modules: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Title" value={mod.module_title ?? ""} onChange={(e) => { const u = [...modules]; u[i] = { ...u[i], module_title: e.target.value }; onChange({ ...config, modules: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              </div>
              <textarea placeholder="Description" value={mod.module_description ?? ""} onChange={(e) => { const u = [...modules]; u[i] = { ...u[i], module_description: e.target.value }; onChange({ ...config, modules: u }); }} rows={2} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Outcomes (comma-separated)" value={mod.module_outcomes ?? ""} onChange={(e) => { const u = [...modules]; u[i] = { ...u[i], module_outcomes: e.target.value }; onChange({ ...config, modules: u }); }} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Duration (e.g. 2 weeks)" value={mod.duration ?? ""} onChange={(e) => { const u = [...modules]; u[i] = { ...u[i], duration: e.target.value }; onChange({ ...config, modules: u }); }} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, modules: [...modules, { module_number: modules.length + 1, module_title: "", module_description: "", module_outcomes: "", duration: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Module</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "accordion"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="accordion">Accordion</option>
          <option value="cards">Cards</option>
          <option value="timeline">Timeline</option>
          <option value="stacked">Stacked</option>
        </select>
      </div>
      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input type="checkbox" checked={c.show_duration ?? false} onChange={(e) => onChange({ ...config, show_duration: e.target.checked })} className="rounded border-zinc-300 dark:border-zinc-600" />
        Show Duration
      </label>
    </div>
  );
}
