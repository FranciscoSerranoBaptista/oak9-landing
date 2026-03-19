"use client";

interface ImageBlockConfig {
  image?: { url?: string; alt_text?: string; caption?: string };
  caption?: string;
  layout?: string;
}

export function ImageBlockEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ImageBlockConfig;
  const img = c.image ?? {};

  return (
    <div className="space-y-3">
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Image</legend>
        <div className="space-y-2">
          <input placeholder="Image URL" value={img.url ?? ""} onChange={(e) => onChange({ ...config, image: { ...img, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="Alt text" value={img.alt_text ?? ""} onChange={(e) => onChange({ ...config, image: { ...img, alt_text: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
      </fieldset>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Caption</label>
        <textarea value={c.caption ?? ""} onChange={(e) => onChange({ ...config, caption: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "contained"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="full-width">Full Width</option>
          <option value="contained">Contained</option>
          <option value="small-centered">Small Centered</option>
        </select>
      </div>
    </div>
  );
}
