interface PerfectForYouConfig {
  section_label?: string;
  headline?: string;
  for_items?: { statement: string }[];
  not_for_items?: { statement: string }[];
  closing_text?: string;
  cta_button?: { label: string; url: string; variant?: string };
  layout?: "two-columns" | "single-column" | "checklist";
}

export function LandingPerfectForYou({ config }: { config: Record<string, unknown> }) {
  const c = config as PerfectForYouConfig;
  const forList = c.for_items ?? [];
  const notList = c.not_for_items ?? [];
  const layout = c.layout || "two-columns";

  if (forList.length === 0 && notList.length === 0) return null;

  if (layout === "checklist") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Is this for you?"}>
        {c.section_label && (
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
        )}
        {c.headline && (
          <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
        )}
        <div className="space-y-3">
          {forList.map((item, i) => (
            <div key={`y-${i}`} className="flex items-start gap-3 rounded-lg p-3">
              <span className="mt-0.5 text-lg text-green-600 dark:text-green-400" aria-hidden="true">&#10003;</span>
              <span className="text-base text-zinc-700 dark:text-zinc-300">{item.statement}</span>
            </div>
          ))}
          {notList.map((item, i) => (
            <div key={`n-${i}`} className="flex items-start gap-3 rounded-lg p-3">
              <span className="mt-0.5 text-lg text-red-500 dark:text-red-400" aria-hidden="true">&#10007;</span>
              <span className="text-base text-zinc-700 dark:text-zinc-300">{item.statement}</span>
            </div>
          ))}
        </div>
        {c.closing_text && (
          <p className="mt-8 text-center text-base text-zinc-600 dark:text-zinc-400">{c.closing_text}</p>
        )}
        {c.cta_button && (
          <div className="mt-8 text-center">
            <a
              href={c.cta_button.url}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500"
            >
              {c.cta_button.label}
            </a>
          </div>
        )}
      </section>
    );
  }

  const isSingle = layout === "single-column";
  const gridClass = isSingle ? "mx-auto max-w-xl space-y-8" : "grid gap-8 md:grid-cols-2";

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Is this for you?"}>
      {c.section_label && (
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      <div className={gridClass}>
        {forList.length > 0 && (
          <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900/30 dark:bg-green-900/10">
            <h3 className="mb-4 text-lg font-semibold text-green-700 dark:text-green-400">This is for you if&hellip;</h3>
            <ul className="space-y-3" role="list">
              {forList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600 dark:text-green-400" aria-hidden="true">&#10003;</span>
                  <span className="text-base text-zinc-700 dark:text-zinc-300">{item.statement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {notList.length > 0 && (
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-900/10">
            <h3 className="mb-4 text-lg font-semibold text-red-600 dark:text-red-400">This is not for you if&hellip;</h3>
            <ul className="space-y-3" role="list">
              {notList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-500 dark:text-red-400" aria-hidden="true">&#10007;</span>
                  <span className="text-base text-zinc-700 dark:text-zinc-300">{item.statement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {c.closing_text && (
        <p className="mt-8 text-center text-base text-zinc-600 dark:text-zinc-400">{c.closing_text}</p>
      )}
      {c.cta_button && (
        <div className="mt-8 text-center">
          <a
            href={c.cta_button.url}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500"
          >
            {c.cta_button.label}
          </a>
        </div>
      )}
    </section>
  );
}
