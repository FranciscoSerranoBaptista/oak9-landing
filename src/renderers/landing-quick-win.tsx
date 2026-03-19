interface ResourceDef {
  resource_title: string;
  resource_description?: string;
  resource_url: string;
  resource_type?: "pdf" | "video" | "article" | "assessment";
}

interface QuickWinConfig {
  headline?: string;
  body_text?: string;
  resource?: ResourceDef;
  cta_button?: { label: string; url: string; variant?: string; size?: string; open_in_new_tab?: boolean };
}

const TYPE_ICONS: Record<string, string> = {
  pdf: "\u{1F4C4}",
  video: "\u{1F3AC}",
  article: "\u{1F4DD}",
  assessment: "\u{1F4CB}",
};

export function LandingQuickWin({ config }: { config: Record<string, unknown> }) {
  const c = config as QuickWinConfig;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16" aria-label={c.headline || "Quick win"}>
      {c.headline && (
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.body_text && (
        <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{c.body_text}</p>
      )}
      {c.resource && (
        <a
          href={c.resource.resource_url}
          className="mb-8 block rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-brand-300 hover:bg-zinc-50 dark:border-surface-border dark:hover:border-brand-600/30 dark:hover:bg-surface-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl" aria-hidden="true">
              {TYPE_ICONS[c.resource.resource_type || "article"] || "\u{1F4DD}"}
            </span>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{c.resource.resource_title}</h3>
              {c.resource.resource_description && (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{c.resource.resource_description}</p>
              )}
              {c.resource.resource_type && (
                <span className="mt-2 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400">
                  {c.resource.resource_type.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </a>
      )}
      {c.cta_button && (
        <a
          href={c.cta_button.url}
          {...(c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
        >
          {c.cta_button.label}
        </a>
      )}
    </section>
  );
}
