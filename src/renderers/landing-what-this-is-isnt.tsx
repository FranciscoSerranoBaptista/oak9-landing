interface StatementItem {
  statement: string;
}

interface WhatThisIsIsntConfig {
  headline?: string;
  is_items?: StatementItem[];
  is_not_items?: StatementItem[];
  layout?: "two-columns" | "alternating-rows" | "single-column";
  closing_text?: string;
}

export function LandingWhatThisIsIsnt({ config }: { config: Record<string, unknown> }) {
  const c = config as WhatThisIsIsntConfig;
  const isList = c.is_items ?? [];
  const isntList = c.is_not_items ?? [];
  const layout = c.layout || "two-columns";

  if (isList.length === 0 && isntList.length === 0) return null;

  if (layout === "alternating-rows") {
    const maxLen = Math.max(isList.length, isntList.length);
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "What this is and isn't"}>
        {c.headline && (
          <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
        )}
        <div className="space-y-3">
          {Array.from({ length: maxLen }).map((_, i) => (
            <div key={i} className="grid gap-3 md:grid-cols-2">
              {isList[i] && (
                <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/10">
                  <span className="mt-0.5 text-green-600 dark:text-green-400" aria-hidden="true">&#10003;</span>
                  <p className="text-base text-zinc-700 dark:text-zinc-300">{isList[i].statement}</p>
                </div>
              )}
              {isntList[i] && (
                <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/10">
                  <span className="mt-0.5 text-red-500 dark:text-red-400" aria-hidden="true">&#10007;</span>
                  <p className="text-base text-zinc-700 dark:text-zinc-300">{isntList[i].statement}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {c.closing_text && (
          <p className="mt-8 text-center text-lg font-medium text-zinc-700 dark:text-zinc-300">{c.closing_text}</p>
        )}
      </section>
    );
  }

  // two-columns (default) and single-column
  const gridClass = layout === "single-column" ? "max-w-xl mx-auto space-y-8" : "grid gap-8 md:grid-cols-2";

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "What this is and isn't"}>
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      <div className={gridClass}>
        {isList.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-700 dark:text-green-400">What this is</h3>
            <ul className="space-y-3" role="list">
              {isList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600 dark:text-green-400" aria-hidden="true">&#10003;</span>
                  <span className="text-base text-zinc-700 dark:text-zinc-300">{item.statement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isntList.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-red-600 dark:text-red-400">What this isn&apos;t</h3>
            <ul className="space-y-3" role="list">
              {isntList.map((item, i) => (
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
        <p className="mt-8 text-center text-lg font-medium text-zinc-700 dark:text-zinc-300">{c.closing_text}</p>
      )}
    </section>
  );
}
