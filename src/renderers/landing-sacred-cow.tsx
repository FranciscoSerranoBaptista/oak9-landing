interface SacredCowConfig {
  sacred_cow?: string;
  sour_milk?: string;
  reframe?: string;
  transition_text?: string;
  visual_style?: "quote-card" | "inline" | "split";
}

export function LandingSacredCow({ config }: { config: Record<string, unknown> }) {
  const c = config as SacredCowConfig;
  const style = c.visual_style || "quote-card";

  if (!c.sacred_cow) return null;

  if (style === "split") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Challenge the belief">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-900/10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-500">The Belief</p>
            <p className="text-lg font-medium text-zinc-900 dark:text-white">{c.sacred_cow}</p>
          </div>
          {c.sour_milk && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-900/10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">The Consequence</p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">{c.sour_milk}</p>
            </div>
          )}
          {c.reframe && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-900/10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">The Reframe</p>
              <p className="text-lg font-medium text-zinc-900 dark:text-white">{c.reframe}</p>
            </div>
          )}
        </div>
        {c.transition_text && (
          <p className="mt-8 text-center text-lg text-zinc-600 dark:text-zinc-400">{c.transition_text}</p>
        )}
      </section>
    );
  }

  if (style === "inline") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Challenge the belief">
        <blockquote className="mb-4 border-l-4 border-red-400 pl-4 text-xl font-medium italic text-zinc-900 dark:text-white">
          &ldquo;{c.sacred_cow}&rdquo;
        </blockquote>
        {c.sour_milk && (
          <div className="mb-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
            {c.sour_milk.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {c.reframe && (
          <div className="space-y-3 text-lg font-semibold text-brand-600 dark:text-brand-400">
            {c.reframe.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {c.transition_text && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{c.transition_text}</p>
        )}
      </section>
    );
  }

  // quote-card (default)
  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Challenge the belief">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-surface-border dark:bg-surface-raised">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">The common belief</p>
        <blockquote className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
          &ldquo;{c.sacred_cow}&rdquo;
        </blockquote>
        {c.sour_milk && (
          <div className="mb-6 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
            {c.sour_milk.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {c.reframe && (
          <>
            <div className="mx-auto mb-6 h-px w-16 bg-zinc-200 dark:bg-surface-border" aria-hidden="true" />
            <div className="space-y-3 text-lg font-semibold text-brand-600 dark:text-brand-400">
              {c.reframe.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </>
        )}
      </div>
      {c.transition_text && (
        <p className="mt-8 text-center text-lg text-zinc-600 dark:text-zinc-400">{c.transition_text}</p>
      )}
    </section>
  );
}
