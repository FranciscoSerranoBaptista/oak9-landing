interface ContrastItem {
  surface_reality: string;
  underneath: string;
}

interface ProblemStatementConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  contrast_items?: ContrastItem[];
  transition_line?: string;
}

export function LandingProblemStatement({ config }: { config: Record<string, unknown> }) {
  const c = config as ProblemStatementConfig;
  const items = c.contrast_items ?? [];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" aria-label={c.headline || "The problem"}>
      {c.section_label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && (
        <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
          {c.headline}
        </h2>
      )}
      {c.body_text && (
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {c.body_text}
        </p>
      )}
      {items.length > 0 && (
        <div className="mb-10 space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-surface-border md:grid-cols-2"
            >
              <div className="rounded-xl bg-zinc-100 p-4 dark:bg-surface-raised">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">On the surface</p>
                <p className="text-base text-zinc-700 dark:text-zinc-300">{item.surface_reality}</p>
              </div>
              <div className="rounded-xl bg-brand-50 p-4 dark:bg-brand-900/20">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Underneath</p>
                <p className="text-base text-zinc-700 dark:text-zinc-300">{item.underneath}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {c.transition_line && (
        <p className="text-lg font-medium italic text-zinc-700 dark:text-zinc-300">
          {c.transition_line}
        </p>
      )}
    </section>
  );
}
