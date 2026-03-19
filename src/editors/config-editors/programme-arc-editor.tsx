"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface ProgrammeArcConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  phases?: Array<{ phase_number?: number; phase_name?: string; phase_description?: string }>;
  layout?: string;
  closing_text?: string;
}

export function ProgrammeArcEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ProgrammeArcConfig;
  const phases = c.phases ?? [];

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
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Phases</label>
        <div className="space-y-2">
          {phases.map((phase, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Phase {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, phases: phases.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input type="number" placeholder="Phase #" value={phase.phase_number ?? i + 1} onChange={(e) => { const u = [...phases]; u[i] = { ...u[i], phase_number: parseInt(e.target.value) || 0 }; onChange({ ...config, phases: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Phase name" value={phase.phase_name ?? ""} onChange={(e) => { const u = [...phases]; u[i] = { ...u[i], phase_name: e.target.value }; onChange({ ...config, phases: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              </div>
              <textarea placeholder="Phase description" value={phase.phase_description ?? ""} onChange={(e) => { const u = [...phases]; u[i] = { ...u[i], phase_description: e.target.value }; onChange({ ...config, phases: u }); }} rows={2} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, phases: [...phases, { phase_number: phases.length + 1, phase_name: "", phase_description: "" }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Phase</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "horizontal-timeline"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="horizontal-timeline">Horizontal Timeline</option>
          <option value="vertical-steps">Vertical Steps</option>
          <option value="cards-grid">Cards Grid</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Closing Text</label>
        <textarea value={c.closing_text ?? ""} onChange={(e) => onChange({ ...config, closing_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
    </div>
  );
}
