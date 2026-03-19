interface RecognitionItem {
  statement: string;
}

interface PatternRecognitionConfig {
  section_label?: string;
  headline?: string;
  body_text?: string;
  recognition_items?: RecognitionItem[];
  closing_line?: string;
  background_style?: "light" | "dark" | "cream";
}

export function LandingPatternRecognition({ config }: { config: Record<string, unknown> }) {
  const c = config as PatternRecognitionConfig;
  const items = c.recognition_items ?? [];

  return (
    <section className="px-4 py-16" aria-label={c.headline || "Pattern recognition"}>
      <div className="mx-auto max-w-4xl">
        {c.section_label && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {c.section_label}
          </p>
        )}
        {c.headline && (
          <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
            {c.headline}
          </h2>
        )}
        {c.body_text && (
          <div className="mb-8 space-y-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {c.body_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {items.length > 0 && (
          <ul className="mb-8 space-y-3" role="list">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-zinc-700 dark:text-zinc-300"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item.statement}
              </li>
            ))}
          </ul>
        )}
        {c.closing_line && (
          <p className="text-lg font-medium italic text-zinc-700 dark:text-zinc-300">
            {c.closing_line}
          </p>
        )}
      </div>
    </section>
  );
}
