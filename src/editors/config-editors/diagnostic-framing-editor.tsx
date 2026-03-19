"use client";

interface DiagnosticFramingConfig {
  action_taken?: string;
  what_it_says?: string;
  what_comes_next?: string;
}

export function DiagnosticFramingEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as DiagnosticFramingConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Action Taken</label>
        <input value={c.action_taken ?? ""} onChange={(e) => onChange({ ...config, action_taken: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="What the visitor just did..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">What It Says About You</label>
        <textarea value={c.what_it_says ?? ""} onChange={(e) => onChange({ ...config, what_it_says: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">What Comes Next</label>
        <textarea value={c.what_comes_next ?? ""} onChange={(e) => onChange({ ...config, what_comes_next: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
    </div>
  );
}
