interface Phase {
  phase_number: number;
  phase_name: string;
  phase_description: string;
  phase_icon?: string;
}

interface ProgrammeArcConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  phases?: Phase[];
  closing_text?: string;
  layout?: "horizontal-timeline" | "vertical-steps" | "cards-grid";
}

export function LandingProgrammeArc({ config }: { config: Record<string, unknown> }) {
  const c = config as ProgrammeArcConfig;
  const phases = c.phases ?? [];
  const layout = c.layout || "vertical-steps";

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Programme journey"}>
      {c.section_label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {c.section_label}
        </p>
      )}
      {c.headline && (
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.introduction && (
        <p className="mb-10 max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{c.introduction}</p>
      )}

      {phases.length > 0 && layout === "horizontal-timeline" && (
        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-max gap-6">
            {phases.map((phase, i) => (
              <div key={i} className="flex w-56 shrink-0 flex-col items-center text-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {phase.phase_number}
                </div>
                {i < phases.length - 1 && (
                  <div className="my-2 h-px w-full bg-brand-200 dark:bg-brand-800" aria-hidden="true" />
                )}
                <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-white">{phase.phase_name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{phase.phase_description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {phases.length > 0 && layout === "vertical-steps" && (
        <div className="relative mb-10 space-y-8 pl-8">
          <div className="absolute bottom-0 left-3.5 top-0 w-px bg-zinc-200 dark:bg-surface-border" aria-hidden="true" />
          {phases.map((phase, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex size-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {phase.phase_number}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{phase.phase_name}</h3>
              <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{phase.phase_description}</p>
            </div>
          ))}
        </div>
      )}

      {phases.length > 0 && layout === "cards-grid" && (
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <article key={i} className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
              <span className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                {phase.phase_number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{phase.phase_name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{phase.phase_description}</p>
            </article>
          ))}
        </div>
      )}

      {c.closing_text && (
        <p className="text-lg font-medium italic text-zinc-700 dark:text-zinc-300">{c.closing_text}</p>
      )}
    </section>
  );
}
