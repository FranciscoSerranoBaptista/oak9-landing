"use client";

import { Plus, Trash } from "@phosphor-icons/react";

const INPUT = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
const LABEL = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";

const OBJECTION_TYPES = [
  { value: "", label: "None" },
  { value: "time", label: "Time" },
  { value: "money", label: "Money" },
  { value: "fit", label: "Fit" },
  { value: "trust", label: "Trust" },
  { value: "past_failure", label: "Past Failure" },
  { value: "social_risk", label: "Social Risk" },
  { value: "self_sufficiency", label: "Self-Sufficiency" },
];

interface FaqItem {
  question: string;
  answer: string;
  objection_type?: string;
}

interface FaqConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  faq_items?: FaqItem[];
  layout?: string;
  closing_text?: string;
}

export function FaqEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as FaqConfig;
  const items = c.faq_items ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className={LABEL}>Section Label</label>
        <input
          value={c.section_label ?? ""}
          onChange={(e) => onChange({ ...config, section_label: e.target.value })}
          className={INPUT}
          placeholder="e.g. Common Questions"
        />
      </div>
      <div>
        <label className={LABEL}>Headline</label>
        <input
          value={c.headline ?? ""}
          onChange={(e) => onChange({ ...config, headline: e.target.value })}
          className={INPUT}
          placeholder="Frequently Asked Questions"
        />
      </div>
      <div>
        <label className={LABEL}>Introduction</label>
        <textarea
          value={c.introduction ?? ""}
          onChange={(e) => onChange({ ...config, introduction: e.target.value })}
          className={INPUT}
          rows={2}
          placeholder="Frame questions as positive buyer traits..."
        />
      </div>

      {/* FAQ Items */}
      <div>
        <label className={LABEL}>Questions</label>
        {items.map((item, i) => (
          <div key={i} className="mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Q&A {i + 1}</span>
              <button
                type="button"
                onClick={() => {
                  const updated = items.filter((_, j) => j !== i);
                  onChange({ ...config, faq_items: updated });
                }}
                className="text-zinc-400 hover:text-red-500"
              >
                <Trash className="size-3.5" />
              </button>
            </div>
            <input
              value={item.question}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = { ...updated[i]!, question: e.target.value };
                onChange({ ...config, faq_items: updated });
              }}
              placeholder="Question"
              className={`mb-2 ${INPUT}`}
            />
            <textarea
              value={item.answer}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = { ...updated[i]!, answer: e.target.value };
                onChange({ ...config, faq_items: updated });
              }}
              placeholder="Answer"
              rows={2}
              className={`mb-2 ${INPUT}`}
            />
            <select
              value={item.objection_type ?? ""}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = { ...updated[i]!, objection_type: e.target.value || undefined };
                onChange({ ...config, faq_items: updated });
              }}
              className={INPUT}
            >
              {OBJECTION_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            onChange({
              ...config,
              faq_items: [...items, { question: "", answer: "" }],
            })
          }
          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          <Plus className="size-3.5" /> Add Q&A
        </button>
      </div>

      <div>
        <label className={LABEL}>Layout</label>
        <select
          value={c.layout ?? "accordion"}
          onChange={(e) => onChange({ ...config, layout: e.target.value })}
          className={INPUT}
        >
          <option value="accordion">Accordion</option>
          <option value="stacked">Stacked</option>
          <option value="two-columns">Two Columns</option>
        </select>
      </div>

      <div>
        <label className={LABEL}>Closing Text</label>
        <textarea
          value={c.closing_text ?? ""}
          onChange={(e) => onChange({ ...config, closing_text: e.target.value })}
          className={INPUT}
          rows={2}
        />
      </div>
    </div>
  );
}
