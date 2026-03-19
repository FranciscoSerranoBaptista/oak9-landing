interface GuaranteeConfig {
  headline?: string;
  guarantee_text?: string;
  guarantee_type?: "money-back" | "satisfaction" | "fit-guarantee" | "custom";
  duration?: string;
  icon?: { url: string; alt_text?: string; caption?: string };
}

export function LandingGuarantee({ config }: { config: Record<string, unknown> }) {
  const c = config as GuaranteeConfig;

  if (!c.guarantee_text) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Our guarantee"}>
      <article className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10">
        {c.icon ? (
          <div className="mb-4">
            <img src={c.icon.url} alt={c.icon.alt_text || ""} className="mx-auto h-12 w-auto" />
          </div>
        ) : (
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30" aria-hidden="true">
            &#9989;
          </div>
        )}
        {c.headline && (
          <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
        )}
        <div className="mb-4 space-y-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {c.guarantee_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {c.guarantee_type && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              {c.guarantee_type}
            </span>
          )}
          {c.duration && (
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-surface-hover dark:text-zinc-300">
              {c.duration}
            </span>
          )}
        </div>
      </article>
    </section>
  );
}
