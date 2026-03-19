"use client";

interface DataStatisticConfig {
  metric?: string;
  metric_label?: string;
  source?: string;
  context_text?: string;
  style?: string;
}

export function DataStatisticEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as DataStatisticConfig;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Metric</label>
          <input value={c.metric ?? ""} onChange={(e) => onChange({ ...config, metric: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="87%" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Metric Label</label>
          <input value={c.metric_label ?? ""} onChange={(e) => onChange({ ...config, metric_label: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="completion rate" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Source</label>
        <input value={c.source ?? ""} onChange={(e) => onChange({ ...config, source: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Source attribution" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Context Text</label>
        <textarea value={c.context_text ?? ""} onChange={(e) => onChange({ ...config, context_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Style</label>
        <select value={c.style ?? "dark-card"} onChange={(e) => onChange({ ...config, style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="dark-card">Dark Card</option>
          <option value="inline">Inline</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
}
