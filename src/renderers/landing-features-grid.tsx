interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesGridConfig {
  headline?: string;
  items?: FeatureItem[];
  layout?: "grid-2col" | "grid-3col" | "grid-4col" | "icon-list";
}

export function LandingFeaturesGrid({ config }: { config: Record<string, unknown> }) {
  const c = config as FeaturesGridConfig;
  const items = c.items ?? [];
  const layout = c.layout || "grid-3col";

  if (items.length === 0) return null;

  const gridClass =
    layout === "grid-2col"
      ? "grid gap-6 sm:grid-cols-2"
      : layout === "grid-4col"
        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        : layout === "icon-list"
          ? "mx-auto max-w-3xl space-y-4"
          : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" aria-label={c.headline || "Features"}>
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {layout === "icon-list" ? (
        <div className={gridClass}>
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30" aria-hidden="true">
                <span className="size-2 rounded-full bg-brand-600 dark:bg-brand-400" />
              </span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={gridClass} role="list">
          {items.map((item, i) => (
            <article key={i} className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised" role="listitem">
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
