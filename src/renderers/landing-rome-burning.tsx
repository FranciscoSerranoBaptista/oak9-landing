interface TimeMarker {
  timeframe: string;
  consequence: string;
}

interface RomeBurningConfig {
  headline?: string;
  body_text?: string;
  time_markers?: TimeMarker[];
  closing_line?: string;
}

export function LandingRomeBurning({ config }: { config: Record<string, unknown> }) {
  const c = config as RomeBurningConfig;
  const markers = c.time_markers ?? [];

  return (
    <section className="bg-zinc-900 px-4 py-16 dark:bg-surface-base" aria-label={c.headline || "The cost of waiting"}>
      <div className="mx-auto max-w-4xl">
        {c.headline && (
          <h2 className="mb-6 text-3xl font-bold text-white">{c.headline}</h2>
        )}
        {c.body_text && (
          <p className="mb-10 max-w-4xl text-lg leading-relaxed text-zinc-400">{c.body_text}</p>
        )}
        {markers.length > 0 && (
          <div className="mb-10 space-y-4">
            {markers.map((marker, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 dark:border-surface-border dark:bg-surface-raised"
              >
                <span className="shrink-0 rounded-lg bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400">
                  {marker.timeframe}
                </span>
                <p className="text-base text-zinc-300">{marker.consequence}</p>
              </div>
            ))}
          </div>
        )}
        {c.closing_line && (
          <p className="text-lg font-medium text-amber-400">{c.closing_line}</p>
        )}
      </div>
    </section>
  );
}
