interface DataStatisticConfig {
  metric?: string;
  metric_label?: string;
  source?: string;
  context_text?: string;
  style?: "dark-card" | "inline" | "large";
}

export function LandingDataStatistic({ config }: { config: Record<string, unknown> }) {
  const c = config as DataStatisticConfig;
  if (!c.metric) return null;

  const style = c.style || "large";

  if (style === "dark-card") {
    return (
      <section className="px-4 py-16" aria-label="Statistic">
        <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-10 text-center dark:bg-surface-raised">
          <p className="text-5xl font-bold text-white">{c.metric}</p>
          {c.metric_label && <p className="mt-3 text-lg leading-relaxed text-zinc-300">{c.metric_label}</p>}
          {c.context_text && <p className="mt-4 text-base text-zinc-400 italic">{c.context_text}</p>}
          {c.source && <p className="mt-3 text-xs text-zinc-500">Source: {c.source}</p>}
        </div>
      </section>
    );
  }

  if (style === "inline") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-10" aria-label="Statistic">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="text-3xl font-bold text-brand-600 dark:text-brand-400">{c.metric}</span>
          {c.metric_label && <span className="text-base text-zinc-600 dark:text-zinc-400">{c.metric_label}</span>}
          {c.source && <span className="text-xs text-zinc-400">({c.source})</span>}
        </div>
        {c.context_text && <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{c.context_text}</p>}
      </section>
    );
  }

  // large (default)
  return (
    <section className="px-4 py-16 text-center" aria-label="Statistic">
      <div className="mx-auto max-w-4xl">
        <p className="text-5xl font-bold text-brand-600 sm:text-6xl dark:text-brand-400">{c.metric}</p>
        {c.metric_label && <p className="mt-3 text-xl text-zinc-700 dark:text-zinc-300">{c.metric_label}</p>}
        {c.context_text && <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">{c.context_text}</p>}
        {c.source && <p className="mt-2 text-xs text-zinc-400">Source: {c.source}</p>}
      </div>
    </section>
  );
}
