"use client";

import { ImageUrlField } from "./image-url-field";

interface HeroConfig {
  headline?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl?: string;
}

export function HeroEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as HeroConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Headline (leave empty for network name)
        </label>
        <input
          value={c.headline ?? ""}
          onChange={(e) => onChange({ ...config, headline: e.target.value })}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Subtitle
        </label>
        <input
          value={c.subtitle ?? ""}
          onChange={(e) => onChange({ ...config, subtitle: e.target.value })}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
      <ImageUrlField
        label="Background Image"
        hint="overrides the network cover image for this section"
        value={c.imageUrl ?? ""}
        onChange={(url) => onChange({ ...config, imageUrl: url })}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            CTA Button Text
          </label>
          <input
            value={c.ctaText ?? ""}
            onChange={(e) => onChange({ ...config, ctaText: e.target.value })}
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            placeholder="Get Started"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            CTA URL
          </label>
          <input
            value={c.ctaUrl ?? ""}
            onChange={(e) => onChange({ ...config, ctaUrl: e.target.value })}
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            placeholder="#plans"
          />
        </div>
      </div>
    </div>
  );
}
