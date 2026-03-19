"use client";

import { ImageUrlField } from "./image-url-field";

interface MediaValue {
  url?: string;
  alt_text?: string;
  caption?: string;
}

interface MediaFieldProps {
  label?: string;
  value: MediaValue | undefined;
  onChange: (value: MediaValue | undefined) => void;
  hint?: string;
}

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";

export function MediaField({
  label = "Media",
  value,
  onChange,
  hint,
}: MediaFieldProps) {
  const v = value ?? {};

  function update(patch: Partial<MediaValue>) {
    onChange({ ...v, ...patch });
  }

  return (
    <div className="space-y-3">
      {label && (
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {label}
          {hint && (
            <span className="ml-1 font-normal text-zinc-400 dark:text-zinc-500">
              — {hint}
            </span>
          )}
        </label>
      )}

      <ImageUrlField
        label="Image URL"
        value={v.url ?? ""}
        onChange={(url) => update({ url })}
      />

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Alt Text
        </label>
        <input
          type="text"
          value={v.alt_text ?? ""}
          onChange={(e) => update({ alt_text: e.target.value })}
          placeholder="Describe the image for accessibility"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Caption
        </label>
        <input
          type="text"
          value={v.caption ?? ""}
          onChange={(e) => update({ caption: e.target.value })}
          placeholder="Optional caption"
          className={inputClass}
        />
      </div>
    </div>
  );
}
