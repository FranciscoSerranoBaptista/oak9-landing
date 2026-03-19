"use client";

interface PullquoteConfig {
  quote_text?: string;
  attribution?: string;
  style?: string;
  background_style?: string;
}

export function PullquoteEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as PullquoteConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Quote Text</label>
        <textarea value={c.quote_text ?? ""} onChange={(e) => onChange({ ...config, quote_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Attribution</label>
        <input value={c.attribution ?? ""} onChange={(e) => onChange({ ...config, attribution: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Style</label>
          <select value={c.style ?? "large-text"} onChange={(e) => onChange({ ...config, style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="large-text">Large Text</option>
            <option value="bordered-left">Bordered Left</option>
            <option value="dark-card">Dark Card</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Background</label>
          <select value={c.background_style ?? ""} onChange={(e) => onChange({ ...config, background_style: e.target.value || undefined })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cream">Cream</option>
          </select>
        </div>
      </div>
    </div>
  );
}
