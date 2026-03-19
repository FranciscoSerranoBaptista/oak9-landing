"use client";

import { Plus, Trash } from "@phosphor-icons/react";
import type { ReactNode } from "react";

interface ListFieldProps<T> {
  label: string;
  items: T[];
  onChange: (items: T[]) => void;
  renderItem: (
    item: T,
    index: number,
    onChange: (item: T) => void,
  ) => ReactNode;
  createItem: () => T;
  maxItems?: number;
  hint?: string;
}

export function ListField<T>({
  label,
  items,
  onChange,
  renderItem,
  createItem,
  maxItems,
  hint,
}: ListFieldProps<T>) {
  function updateItem(index: number, item: T) {
    const next = [...items];
    next[index] = item;
    onChange(next);
  }

  function removeItem(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function addItem() {
    if (maxItems && items.length >= maxItems) return;
    onChange([...items, createItem()]);
  }

  return (
    <div className="space-y-3">
      <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
        {hint && (
          <span className="ml-1 font-normal text-zinc-400 dark:text-zinc-500">
            — {hint}
          </span>
        )}
      </label>

      {items.map((item, index) => (
        <div
          key={index}
          className="relative rounded-md border border-zinc-200 p-3 dark:border-zinc-700"
        >
          <button
            type="button"
            onClick={() => removeItem(index)}
            className="absolute right-2 top-2 rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-red-500 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-red-400"
          >
            <Trash size={14} />
          </button>
          <div className="pr-8">
            {renderItem(item, index, (updated) => updateItem(index, updated))}
          </div>
        </div>
      ))}

      {(!maxItems || items.length < maxItems) && (
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1.5 rounded-md border border-dashed border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
        >
          <Plus size={14} />
          Add Item
        </button>
      )}
    </div>
  );
}
