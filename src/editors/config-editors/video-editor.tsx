"use client";

interface VideoConfig {
  heading?: string;
  videoUrl?: string;
  caption?: string;
}

export function VideoEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as VideoConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Heading
        </label>
        <input
          value={c.heading ?? ""}
          onChange={(e) => onChange({ ...config, heading: e.target.value })}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Video URL (YouTube or Vimeo)
        </label>
        <input
          value={c.videoUrl ?? ""}
          onChange={(e) => onChange({ ...config, videoUrl: e.target.value })}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          placeholder="https://youtube.com/watch?v=..."
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Caption
        </label>
        <input
          value={c.caption ?? ""}
          onChange={(e) => onChange({ ...config, caption: e.target.value })}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
    </div>
  );
}
