"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  objection_type?: string;
}

interface FaqNewConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  faq_items?: FaqItem[];
  layout?: "accordion" | "stacked" | "two-columns";
  closing_text?: string;
}

export function LandingFaqNew({ config }: { config: Record<string, unknown> }) {
  const c = config as FaqNewConfig;
  const items = c.faq_items ?? [];
  const layout = c.layout || "accordion";

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Frequently Asked Questions"}>
      {c.section_label && (
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && (
        <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.introduction && (
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400">{c.introduction}</p>
      )}

      {layout === "accordion" && (
        <dl className="mx-auto max-w-4xl space-y-3">
          {items.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </dl>
      )}

      {layout === "stacked" && (
        <dl className="mx-auto max-w-4xl space-y-6">
          {items.map((item, i) => (
            <div key={i}>
              <dt className="mb-2 flex items-center gap-2">
                <span className="font-semibold text-zinc-900 dark:text-white">{item.question}</span>
                {item.objection_type && (
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400">
                    {item.objection_type}
                  </span>
                )}
              </dt>
              <dd className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{item.answer}</dd>
            </div>
          ))}
        </dl>
      )}

      {layout === "two-columns" && (
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 p-5 dark:border-surface-border dark:bg-surface-raised">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.question}</h3>
                {item.objection_type && (
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400">
                    {item.objection_type}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.answer}</p>
            </div>
          ))}
        </div>
      )}

      {c.closing_text && (
        <p className="mt-10 text-center text-base text-zinc-600 dark:text-zinc-400">{c.closing_text}</p>
      )}
    </section>
  );
}

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-surface-border">
      <dt>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between p-4 text-left"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 pr-4">
            <span className="font-semibold text-zinc-900 dark:text-white">{item.question}</span>
            {item.objection_type && (
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400">
                {item.objection_type}
              </span>
            )}
          </span>
          <span className="shrink-0 text-zinc-400">{open ? "\u2212" : "+"}</span>
        </button>
      </dt>
      {open && (
        <dd className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-surface-border">
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.answer}
          </p>
        </dd>
      )}
    </div>
  );
}
