"use client";

interface VideoBlockConfig {
  video_url?: string;
  caption?: string;
  autoplay?: boolean;
  layout?: string;
}

export function VideoBlockEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as VideoBlockConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Video URL</label>
        <input value={c.video_url ?? ""} onChange={(e) => onChange({ ...config, video_url: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="https://youtube.com/..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Caption</label>
        <textarea value={c.caption ?? ""} onChange={(e) => onChange({ ...config, caption: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input type="checkbox" checked={c.autoplay ?? false} onChange={(e) => onChange({ ...config, autoplay: e.target.checked })} className="rounded border-zinc-300 dark:border-zinc-600" />
        Autoplay
      </label>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "contained"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="full-width">Full Width</option>
          <option value="contained">Contained</option>
        </select>
      </div>
    </div>
  );
}
