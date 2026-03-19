interface ComparisonTableConfig {
  headline?: string;
  columns?: string[];
  rows?: Array<{ label: string; values: string[] }>;
  highlightColumn?: number;
}

export function LandingComparisonTable({ config }: { config: Record<string, unknown> }) {
  const c = config as ComparisonTableConfig;
  const columns = c.columns ?? [];
  const rows = c.rows ?? [];

  if (columns.length === 0 || rows.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16" aria-label={c.headline || "Comparison"}>
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b border-zinc-200 pb-3 pr-4 text-sm font-semibold text-zinc-500 dark:border-surface-border dark:text-zinc-400">
                &nbsp;
              </th>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`border-b border-zinc-200 pb-3 px-4 text-sm font-semibold dark:border-surface-border ${
                    c.highlightColumn === i
                      ? "text-brand-600 dark:text-brand-400"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-zinc-100 dark:border-surface-border">
                <td className="py-3 pr-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {row.label}
                </td>
                {row.values.map((val, vi) => (
                  <td
                    key={vi}
                    className={`px-4 py-3 text-sm ${
                      c.highlightColumn === vi
                        ? "font-semibold text-brand-600 dark:text-brand-400"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
