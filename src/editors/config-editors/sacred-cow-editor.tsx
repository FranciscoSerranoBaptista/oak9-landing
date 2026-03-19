"use client";

interface SacredCowConfig {
  sacred_cow?: string;
  sour_milk?: string;
  reframe?: string;
  transition_text?: string;
  visual_style?: string;
}

export function SacredCowEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as SacredCowConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Sacred Cow</label>
        <textarea value={c.sacred_cow ?? ""} onChange={(e) => onChange({ ...config, sacred_cow: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="The commonly held belief..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Sour Milk</label>
        <textarea value={c.sour_milk ?? ""} onChange={(e) => onChange({ ...config, sour_milk: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Why it no longer holds..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Reframe</label>
        <textarea value={c.reframe ?? ""} onChange={(e) => onChange({ ...config, reframe: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="The new perspective..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Transition Text</label>
        <textarea value={c.transition_text ?? ""} onChange={(e) => onChange({ ...config, transition_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Visual Style</label>
        <select value={c.visual_style ?? "quote-card"} onChange={(e) => onChange({ ...config, visual_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="quote-card">Quote Card</option>
          <option value="inline">Inline</option>
          <option value="split">Split</option>
        </select>
      </div>
    </div>
  );
}
