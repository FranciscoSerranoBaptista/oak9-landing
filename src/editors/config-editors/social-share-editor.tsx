"use client";

interface SocialShareConfig {
  share_text?: string;
  platforms?: string[];
  share_url?: string;
  layout?: string;
}

const PLATFORM_OPTIONS = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter / X" },
  { value: "email", label: "Email" },
  { value: "copy-link", label: "Copy Link" },
];

export function SocialShareEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as SocialShareConfig;
  const platforms = c.platforms ?? [];

  const togglePlatform = (value: string) => {
    const updated = platforms.includes(value)
      ? platforms.filter((p) => p !== value)
      : [...platforms, value];
    onChange({ ...config, platforms: updated });
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Share Text</label>
        <textarea value={c.share_text ?? ""} onChange={(e) => onChange({ ...config, share_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Platforms</label>
        <div className="space-y-1">
          {PLATFORM_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <input type="checkbox" checked={platforms.includes(opt.value)} onChange={() => togglePlatform(opt.value)} className="rounded border-zinc-300 dark:border-zinc-600" />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Share URL</label>
        <input value={c.share_url ?? ""} onChange={(e) => onChange({ ...config, share_url: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="https://..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "inline"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="inline">Inline</option>
          <option value="card">Card</option>
        </select>
      </div>
    </div>
  );
}
