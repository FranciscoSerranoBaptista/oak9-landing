"use client";

import { Plus, Trash } from "@phosphor-icons/react";
import { ImageUrlField } from "./image-url-field";

interface FeaturesConfig {
  heading?: string;
  imageUrl?: string;
  items?: Array<{ title: string; description: string }>;
}

export function FeaturesEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as FeaturesConfig;
  const items = c.items ?? [];

  const updateItem = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {
    const updated = [...items];
    updated[index] = { ...updated[index]!, [field]: value };
    onChange({ ...config, items: updated });
  };

  const addItem = () => {
    onChange({
      ...config,
      items: [...items, { title: "", description: "" }],
    });
  };

  const removeItem = (index: number) => {
    onChange({
      ...config,
      items: items.filter((_, i) => i !== index),
    });
  };

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
          placeholder="Why Join?"
        />
      </div>

      <ImageUrlField
        label="Section Image"
        hint="banner displayed above the features grid"
        value={c.imageUrl ?? ""}
        onChange={(url) => onChange({ ...config, imageUrl: url })}
      />

      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">
              Feature {i + 1}
            </span>
            <button
              onClick={() => removeItem(i)}
              className="text-zinc-400 hover:text-red-500"
            >
              <Trash className="size-3.5" />
            </button>
          </div>
          <input
            value={item.title}
            onChange={(e) => updateItem(i, "title", e.target.value)}
            placeholder="Feature title"
            className="mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          />
          <input
            value={item.description}
            onChange={(e) => updateItem(i, "description", e.target.value)}
            placeholder="Feature description"
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          />
        </div>
      ))}

      <button
        onClick={addItem}
        className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
      >
        <Plus className="size-3.5" />
        Add Feature
      </button>
    </div>
  );
}
