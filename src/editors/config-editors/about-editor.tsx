"use client";

import { ImageUrlField } from "./image-url-field";

interface AboutConfig {
  heading?: string;
  body?: string;
  imageUrl?: string;
}

export function AboutEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as AboutConfig;

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
          placeholder="About"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Body
        </label>
        <textarea
          value={c.body ?? ""}
          onChange={(e) => onChange({ ...config, body: e.target.value })}
          rows={5}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          placeholder="Tell visitors about your community..."
        />
      </div>
      <ImageUrlField
        label="Image"
        hint="displayed alongside the text"
        value={c.imageUrl ?? ""}
        onChange={(url) => onChange({ ...config, imageUrl: url })}
      />
    </div>
  );
}
