"use client";

import { useState } from "react";

interface Module {
  number?: number;
  title: string;
  description?: string;
  outcomes?: string[];
  duration?: string;
}

interface CurriculumBreakdownConfig {
  headline?: string;
  modules?: Module[];
  layout?: "accordion" | "cards" | "timeline" | "stacked";
}

export function LandingCurriculumBreakdown({ config }: { config: Record<string, unknown> }) {
  const c = config as CurriculumBreakdownConfig;
  const modules = c.modules ?? [];
  const layout = c.layout || "accordion";

  if (modules.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" aria-label={c.headline || "Curriculum"}>
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}

      {layout === "accordion" && (
        <div className="mx-auto max-w-3xl space-y-3">
          {modules.map((mod, i) => (
            <AccordionModule key={i} module={mod} index={i} />
          ))}
        </div>
      )}

      {layout === "cards" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <ModuleCard key={i} module={mod} index={i} />
          ))}
        </div>
      )}

      {layout === "timeline" && (
        <div className="relative mx-auto max-w-3xl space-y-8 pl-8">
          <div className="absolute bottom-0 left-3.5 top-0 w-px bg-zinc-200 dark:bg-surface-border" aria-hidden="true" />
          {modules.map((mod, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex size-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {mod.number ?? i + 1}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{mod.title}</h3>
              {mod.duration && <p className="mt-0.5 text-xs text-zinc-400">{mod.duration}</p>}
              {mod.description && <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{mod.description}</p>}
              {mod.outcomes && mod.outcomes.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {mod.outcomes.map((o, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {layout === "stacked" && (
        <div className="mx-auto max-w-3xl space-y-6">
          {modules.map((mod, i) => (
            <ModuleCard key={i} module={mod} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

function AccordionModule({ module: mod, index }: { module: Module; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-surface-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
            {mod.number ?? index + 1}
          </span>
          <span className="font-semibold text-zinc-900 dark:text-white">{mod.title}</span>
        </span>
        <span className="ml-2 shrink-0 text-zinc-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-surface-border">
          {mod.duration && <p className="mb-2 text-xs font-medium text-zinc-400">{mod.duration}</p>}
          {mod.description && <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{mod.description}</p>}
          {mod.outcomes && mod.outcomes.length > 0 && (
            <ul className="space-y-1">
              {mod.outcomes.map((o, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function ModuleCard({ module: mod, index }: { module: Module; index: number }) {
  return (
    <article className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
          {mod.number ?? index + 1}
        </span>
        {mod.duration && <span className="text-xs text-zinc-400">{mod.duration}</span>}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{mod.title}</h3>
      {mod.description && <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{mod.description}</p>}
      {mod.outcomes && mod.outcomes.length > 0 && (
        <ul className="space-y-1">
          {mod.outcomes.map((o, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
