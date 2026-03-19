"use client";

import { ImageUrlField } from "./image-url-field";

interface CtaBannerConfig {
  heading?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundStyle?: "brand" | "dark";
  imageUrl?: string;
}

export function CtaBannerEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as CtaBannerConfig;

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
          placeholder="Ready to get started?"
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
        hint="overrides the color background"
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
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Background (used when no image is set)
        </label>
        <select
          value={c.backgroundStyle ?? "brand"}
          onChange={(e) =>
            onChange({ ...config, backgroundStyle: e.target.value })
          }
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        >
          <option value="brand">Brand Color</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}
