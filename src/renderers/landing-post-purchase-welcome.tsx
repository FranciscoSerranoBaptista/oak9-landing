interface NextStep {
  step_number: number;
  step_title: string;
  step_description: string;
}

interface PostPurchaseWelcomeConfig {
  headline?: string;
  welcome_text?: string;
  next_steps?: NextStep[];
  community_link?: string;
  personal_note?: string;
  cta_button?: { label: string; url: string; variant?: string; size?: string; open_in_new_tab?: boolean };
}

export function LandingPostPurchaseWelcome({ config }: { config: Record<string, unknown> }) {
  const c = config as PostPurchaseWelcomeConfig;
  const steps = c.next_steps ?? [];

  return (
    <section className="mx-auto max-w-3xl px-4 py-16" aria-label={c.headline || "Welcome"}>
      {c.headline && (
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.welcome_text && (
        <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{c.welcome_text}</p>
      )}
      {steps.length > 0 && (
        <div className="mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Your next steps</h3>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step.step_number} className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  {step.step_number}
                </span>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white">{step.step_title}</p>
                  <p className="text-base text-zinc-700 dark:text-zinc-300">{step.step_description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      {c.community_link && (
        <a
          href={c.community_link}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/30"
        >
          Join the Community
        </a>
      )}
      {c.personal_note && (
        <blockquote className="mb-8 border-l-4 border-brand-500 pl-4 text-base italic text-zinc-600 dark:text-zinc-400">
          {c.personal_note}
        </blockquote>
      )}
      {c.cta_button && (
        <div>
          <a
            href={c.cta_button.url}
            {...(c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
          >
            {c.cta_button.label}
          </a>
        </div>
      )}
    </section>
  );
}
