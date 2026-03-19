interface ObjectionBlockConfig {
  objection?: string;
  response?: string;
  reframe?: string;
  visual_style?: "pullquote" | "card" | "inline";
}

export function LandingObjectionBlock({ config }: { config: Record<string, unknown> }) {
  const c = config as ObjectionBlockConfig;
  const style = c.visual_style || "card";

  if (!c.objection) return null;

  if (style === "pullquote") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Addressing concerns">
        <blockquote className="mb-6 border-l-4 border-zinc-300 pl-4 text-xl italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
          &ldquo;{c.objection}&rdquo;
        </blockquote>
        {c.response && (
          <p className="mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{c.response}</p>
        )}
        {c.reframe && (
          <p className="text-lg font-semibold text-brand-600 dark:text-brand-400">{c.reframe}</p>
        )}
      </section>
    );
  }

  if (style === "inline") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Addressing concerns">
        <p className="mb-3 text-lg font-medium text-zinc-900 dark:text-white">
          &ldquo;{c.objection}&rdquo;
        </p>
        {c.response && (
          <p className="mb-3 text-base text-zinc-600 dark:text-zinc-400">{c.response}</p>
        )}
        {c.reframe && (
          <p className="text-base font-medium text-brand-600 dark:text-brand-400">{c.reframe}</p>
        )}
      </section>
    );
  }

  // card (default)
  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label="Addressing concerns">
      <article className="rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Common concern</p>
        <blockquote className="mb-4 text-xl font-medium text-zinc-900 dark:text-white">
          &ldquo;{c.objection}&rdquo;
        </blockquote>
        {c.response && (
          <p className="mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{c.response}</p>
        )}
        {c.reframe && (
          <>
            <div className="mb-4 h-px bg-zinc-100 dark:bg-surface-border" aria-hidden="true" />
            <p className="text-base font-semibold text-brand-600 dark:text-brand-400">{c.reframe}</p>
          </>
        )}
      </article>
    </section>
  );
}
