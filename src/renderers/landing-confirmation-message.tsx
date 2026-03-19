interface NextStep {
  step_number: number;
  step_description: string;
}

interface ConfirmationMessageConfig {
  headline?: string;
  body_text?: string;
  what_happens_next?: NextStep[];
  icon?: { url: string; alt_text?: string; caption?: string };
}

export function LandingConfirmationMessage({ config }: { config: Record<string, unknown> }) {
  const c = config as ConfirmationMessageConfig;
  const steps = c.what_happens_next ?? [];

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center" aria-label={c.headline || "Confirmation"}>
      {c.icon ? (
        <div className="mb-6">
          <img src={c.icon.url} alt={c.icon.alt_text || ""} className="mx-auto h-16 w-auto" />
        </div>
      ) : (
        <div className="mb-6 text-4xl" aria-hidden="true">&#10003;</div>
      )}
      {c.headline && (
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.body_text && (
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">{c.body_text}</p>
      )}
      {steps.length > 0 && (
        <div className="mx-auto max-w-md text-left">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What happens next
          </h3>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step.step_number} className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  {step.step_number}
                </span>
                <span className="text-base text-zinc-700 dark:text-zinc-300">{step.step_description}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
