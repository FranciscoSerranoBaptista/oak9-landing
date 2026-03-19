"use client";

import { Plus, Trash } from "@phosphor-icons/react";

const INPUT = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
const LABEL = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";

interface TestimonialItem {
  quote: string;
  attribution: string;
  context?: string;
}

interface TestimonialsConfig {
  section_label?: string;
  headline?: string;
  testimonials?: TestimonialItem[];
  use_network_testimonials?: boolean;
  max_items?: number;
  featured_only?: boolean;
  layout?: string;
  style?: string;
}

export function TestimonialsEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as TestimonialsConfig;
  const items = c.testimonials ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className={LABEL}>Section Label</label>
        <input
          value={c.section_label ?? ""}
          onChange={(e) => onChange({ ...config, section_label: e.target.value })}
          className={INPUT}
        />
      </div>
      <div>
        <label className={LABEL}>Headline</label>
        <input
          value={c.headline ?? ""}
          onChange={(e) => onChange({ ...config, headline: e.target.value })}
          className={INPUT}
          placeholder="What People Are Saying"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={LABEL}>Layout</label>
          <select
            value={c.layout ?? "grid"}
            onChange={(e) => onChange({ ...config, layout: e.target.value })}
            className={INPUT}
          >
            <option value="carousel">Carousel</option>
            <option value="grid">Grid</option>
            <option value="single-featured">Single Featured</option>
            <option value="stacked">Stacked</option>
          </select>
        </div>
        <div>
          <label className={LABEL}>Style</label>
          <select
            value={c.style ?? "card"}
            onChange={(e) => onChange({ ...config, style: e.target.value })}
            className={INPUT}
          >
            <option value="card">Card</option>
            <option value="minimal">Minimal</option>
            <option value="pullquote">Pullquote</option>
          </select>
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={c.use_network_testimonials ?? true}
          onChange={(e) => onChange({ ...config, use_network_testimonials: e.target.checked })}
          className="rounded border-zinc-300 dark:border-zinc-600"
        />
        Use network testimonials from database
      </label>

      {c.use_network_testimonials !== false && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={LABEL}>Max Items</label>
            <input
              type="number"
              min={1}
              max={20}
              value={c.max_items ?? 6}
              onChange={(e) => onChange({ ...config, max_items: parseInt(e.target.value) || 6 })}
              className={INPUT}
            />
          </div>
          <label className="flex items-center gap-2 pt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <input
              type="checkbox"
              checked={c.featured_only ?? false}
              onChange={(e) => onChange({ ...config, featured_only: e.target.checked })}
              className="rounded border-zinc-300 dark:border-zinc-600"
            />
            Featured only
          </label>
        </div>
      )}

      {/* Inline testimonials (when not using network testimonials) */}
      {c.use_network_testimonials === false && (
        <div>
          <label className={LABEL}>Testimonials</label>
          {items.map((item, i) => (
            <div key={i} className="mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Testimonial {i + 1}</span>
                <button
                  type="button"
                  onClick={() => onChange({ ...config, testimonials: items.filter((_, j) => j !== i) })}
                  className="text-zinc-400 hover:text-red-500"
                >
                  <Trash className="size-3.5" />
                </button>
              </div>
              <textarea
                value={item.quote}
                onChange={(e) => {
                  const updated = [...items];
                  updated[i] = { ...updated[i]!, quote: e.target.value };
                  onChange({ ...config, testimonials: updated });
                }}
                placeholder="Quote"
                rows={2}
                className={`mb-2 ${INPUT}`}
              />
              <input
                value={item.attribution}
                onChange={(e) => {
                  const updated = [...items];
                  updated[i] = { ...updated[i]!, attribution: e.target.value };
                  onChange({ ...config, testimonials: updated });
                }}
                placeholder="Attribution (e.g. Director, Financial Services)"
                className={`mb-2 ${INPUT}`}
              />
              <input
                value={item.context ?? ""}
                onChange={(e) => {
                  const updated = [...items];
                  updated[i] = { ...updated[i]!, context: e.target.value };
                  onChange({ ...config, testimonials: updated });
                }}
                placeholder="Context (optional)"
                className={INPUT}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              onChange({
                ...config,
                testimonials: [...items, { quote: "", attribution: "" }],
              })
            }
            className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
          >
            <Plus className="size-3.5" /> Add Testimonial
          </button>
        </div>
      )}
    </div>
  );
}
