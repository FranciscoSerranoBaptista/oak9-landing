interface ExperienceItem {
  title: string;
  description: string;
}

interface WhatYoullExperienceConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  experience_items?: ExperienceItem[];
  layout?: "grid-2col" | "grid-3col" | "stacked-cards" | "numbered-list";
}

export function LandingWhatYoullExperience({ config }: { config: Record<string, unknown> }) {
  const c = config as WhatYoullExperienceConfig;
  const items = c.experience_items ?? [];
  const layout = c.layout || "grid-3col";

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "What you'll experience"}>
      {c.section_label && (
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {c.section_label}
        </p>
      )}
      {c.headline && (
        <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.introduction && (
        <p className="mx-auto mb-10 max-w-4xl text-center text-base text-zinc-600 dark:text-zinc-400">{c.introduction}</p>
      )}

      {layout === "numbered-list" ? (
        <ol className="mx-auto max-w-4xl space-y-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : layout === "stacked-cards" ? (
        <div className="mx-auto max-w-4xl space-y-4">
          {items.map((item, i) => (
            <article key={i} className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className={`grid gap-6 ${layout === "grid-2col" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((item, i) => (
            <article key={i} className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
