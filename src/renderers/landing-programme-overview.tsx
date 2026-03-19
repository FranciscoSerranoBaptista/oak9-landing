interface KeyDetail {
  label: string;
  value: string;
}

interface CtaButton {
  label: string;
  url: string;
  variant?: string;
}

interface ProgrammeOverviewConfig {
  section_label?: string;
  headline?: string;
  subtitle?: string;
  body_text?: string;
  key_details?: KeyDetail[];
  cta_button?: CtaButton;
}

export function LandingProgrammeOverview({ config }: { config: Record<string, unknown> }) {
  const c = config as ProgrammeOverviewConfig;
  const details = c.key_details ?? [];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Programme overview"}>
      {c.section_label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {c.section_label}
        </p>
      )}
      {c.headline && (
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.subtitle && (
        <p className="mb-4 text-xl text-zinc-600 dark:text-zinc-400">{c.subtitle}</p>
      )}
      {c.body_text && (
        <div className="mb-8 max-w-4xl space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {c.body_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
      {details.length > 0 && (
        <dl className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((detail, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 p-4 dark:border-surface-border dark:bg-surface-raised">
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{detail.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {c.cta_button?.label && c.cta_button?.url && (
        <a
          href={c.cta_button.url}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
        >
          {c.cta_button.label}
        </a>
      )}
    </section>
  );
}
