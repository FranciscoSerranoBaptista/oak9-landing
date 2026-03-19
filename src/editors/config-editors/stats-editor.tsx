"use client";

import { Plus, Trash } from "@phosphor-icons/react";
import { ImageUrlField } from "./image-url-field";

interface StatsConfig {
  heading?: string;
  imageUrl?: string;
  items?: Array<{ value: string; label: string }>;
}

export function StatsEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as StatsConfig;
  const items = c.items ?? [];

  const updateItem = (
    index: number,
    field: "value" | "label",
    value: string
  ) => {
    const updated = [...items];
    updated[index] = { ...updated[index]!, [field]: value };
    onChange({ ...config, items: updated });
  };

  const addItem = () => {
    onChange({
      ...config,
      items: [...items, { value: "", label: "" }],
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
        />
      </div>

      <ImageUrlField
        label="Background Image"
        hint="displayed behind the stats"
        value={c.imageUrl ?? ""}
        onChange={(url) => onChange({ ...config, imageUrl: url })}
      />

      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2"
        >
          <input
            value={item.value}
            onChange={(e) => updateItem(i, "value", e.target.value)}
            placeholder="500+"
            className="w-24 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          />
          <input
            value={item.label}
            onChange={(e) => updateItem(i, "label", e.target.value)}
            placeholder="Students Enrolled"
            className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          />
          <button
            onClick={() => removeItem(i)}
            className="text-zinc-400 hover:text-red-500"
          >
            <Trash className="size-3.5" />
          </button>
        </div>
      ))}

      <button
        onClick={addItem}
        className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
      >
        <Plus className="size-3.5" />
        Add Stat
      </button>
    </div>
  );
}
