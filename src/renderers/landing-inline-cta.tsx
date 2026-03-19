interface CtaButton {
  label: string;
  url: string;
  variant?: string;
  size?: string;
  open_in_new_tab?: boolean;
}

interface InlineCtaConfig {
  headline?: string;
  body_text?: string;
  cta_button?: CtaButton;
  secondary_cta?: CtaButton;
  background_style?: "light" | "dark" | "cream" | "transparent";
  alignment?: "centered" | "left";
}

export function LandingInlineCta({ config }: { config: Record<string, unknown> }) {
  const c = config as InlineCtaConfig;
  const alignment = c.alignment || "centered";

  if (!c.headline && !c.cta_button) return null;

  return (
    <section className="px-4 py-12" aria-label="Call to action">
      <div className={`mx-auto flex max-w-4xl flex-col items-center gap-6 ${alignment === "centered" ? "text-center" : "text-left"} sm:flex-row sm:text-left`}>
        <div className="flex-1">
          {c.headline && (
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {c.headline}
            </h2>
          )}
          {c.body_text && (
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {c.body_text}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {c.cta_button && (
            <a
              href={c.cta_button.url}
              {...(c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              {c.cta_button.label}
            </a>
          )}
          {c.secondary_cta && (
            <a
              href={c.secondary_cta.url}
              {...(c.secondary_cta.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover"
            >
              {c.secondary_cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
