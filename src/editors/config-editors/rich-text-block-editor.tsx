"use client";

interface RichTextBlockConfig {
  section_label?: string;
  body_text?: string;
  max_width?: string;
  background_style?: string;
  text_alignment?: string;
}

export function RichTextBlockEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as RichTextBlockConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Section Label</label>
        <input value={c.section_label ?? ""} onChange={(e) => onChange({ ...config, section_label: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={8} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Max Width</label>
          <select value={c.max_width ?? "medium"} onChange={(e) => onChange({ ...config, max_width: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="narrow">Narrow</option>
            <option value="medium">Medium</option>
            <option value="full">Full</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Background</label>
          <select value={c.background_style ?? "transparent"} onChange={(e) => onChange({ ...config, background_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cream">Cream</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Alignment</label>
          <select value={c.text_alignment ?? "left"} onChange={(e) => onChange({ ...config, text_alignment: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="left">Left</option>
            <option value="centered">Centered</option>
          </select>
        </div>
      </div>
    </div>
  );
}
