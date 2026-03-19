interface CaseStudyConfig {
  section_label?: string;
  headline?: string;
  pattern_name?: string;
  before_state?: string;
  turning_point?: string;
  after_state?: string;
  client_words?: string;
  layout?: "narrative" | "before-after" | "card";
}

export function LandingCaseStudy({ config }: { config: Record<string, unknown> }) {
  const c = config as CaseStudyConfig;
  const layout = c.layout || "narrative";

  if (layout === "before-after") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Case study"}>
        {c.section_label && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{c.section_label}</p>
        )}
        {c.headline && (
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
        )}
        {c.pattern_name && (
          <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.pattern_name}</p>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {c.before_state && (
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-surface-border dark:bg-surface-raised">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Before</p>
              <div className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
                {c.before_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}
          {c.after_state && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-900/10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">After</p>
              <div className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
                {c.after_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}
        </div>
        {c.turning_point && (
          <p className="mt-6 text-base italic text-zinc-600 dark:text-zinc-400">{c.turning_point}</p>
        )}
        {c.client_words && (
          <blockquote className="mt-6 border-l-4 border-brand-500 pl-4 text-lg italic text-zinc-700 dark:text-zinc-300">
            &ldquo;{c.client_words}&rdquo;
          </blockquote>
        )}
      </section>
    );
  }

  if (layout === "card") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Case study"}>
        <article className="rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised">
          {c.section_label && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{c.section_label}</p>
          )}
          {c.pattern_name && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.pattern_name}</p>
          )}
          {c.headline && (
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
          )}
          {c.before_state && <div className="mb-3 space-y-3 text-base text-zinc-600 dark:text-zinc-400">{c.before_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>}
          {c.turning_point && <div className="mb-3 space-y-3 font-medium text-zinc-800 dark:text-zinc-200">{c.turning_point.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>}
          {c.after_state && <div className="mb-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400">{c.after_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>}
          {c.client_words && (
            <blockquote className="border-t border-zinc-100 pt-4 text-base italic text-zinc-700 dark:border-surface-border dark:text-zinc-300">
              &ldquo;{c.client_words}&rdquo;
            </blockquote>
          )}
        </article>
      </section>
    );
  }

  // narrative (default)
  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Case study"}>
      {c.section_label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{c.section_label}</p>
      )}
      {c.pattern_name && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.pattern_name}</p>
      )}
      {c.headline && (
        <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.before_state && (
        <div className="mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {c.before_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
      {c.turning_point && (
        <div className="mb-4 space-y-3 text-base font-medium text-zinc-800 dark:text-zinc-200">
          {c.turning_point.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
      {c.after_state && (
        <div className="mb-6 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {c.after_state.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
      {c.client_words && (
        <blockquote className="border-l-4 border-brand-500 pl-4 text-lg italic text-zinc-700 dark:text-zinc-300">
          &ldquo;{c.client_words}&rdquo;
        </blockquote>
      )}
    </section>
  );
}
