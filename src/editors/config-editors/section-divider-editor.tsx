"use client";

interface SectionDividerConfig {
  divider_style?: string;
  spacing?: string;
}

export function SectionDividerEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as SectionDividerConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Divider Style</label>
        <select value={c.divider_style ?? "line"} onChange={(e) => onChange({ ...config, divider_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="line">Line</option>
          <option value="dots">Dots</option>
          <option value="space-only">Space Only</option>
          <option value="bird-icon">Bird Icon</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Spacing</label>
        <select value={c.spacing ?? "medium"} onChange={(e) => onChange({ ...config, spacing: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
}
