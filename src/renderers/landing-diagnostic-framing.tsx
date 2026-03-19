interface DiagnosticFramingConfig {
  headline?: string;
  actionTaken?: string;
  whatItSays?: string;
  whatComesNext?: string;
}

export function LandingDiagnosticFraming({ config }: { config: Record<string, unknown> }) {
  const c = config as DiagnosticFramingConfig;

  if (!c.actionTaken && !c.whatItSays && !c.whatComesNext) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" aria-label={c.headline || "Diagnostic"}>
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      <div className="grid gap-6 md:grid-cols-3">
        {c.actionTaken && (
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Action taken</p>
            <p className="text-base text-zinc-700 dark:text-zinc-300">{c.actionTaken}</p>
          </article>
        )}
        {c.whatItSays && (
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">What it says</p>
            <p className="text-base text-zinc-700 dark:text-zinc-300">{c.whatItSays}</p>
          </article>
        )}
        {c.whatComesNext && (
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">What comes next</p>
            <p className="text-base text-zinc-700 dark:text-zinc-300">{c.whatComesNext}</p>
          </article>
        )}
      </div>
    </section>
  );
}
