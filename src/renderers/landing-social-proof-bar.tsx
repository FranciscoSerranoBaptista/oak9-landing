interface ProofItem {
  metric: string;
  label: string;
}

interface LogoMedia {
  url: string;
  alt_text?: string;
  caption?: string;
}

interface SocialProofBarConfig {
  proof_items?: ProofItem[];
  logos?: LogoMedia[];
  proof_line?: string;
  layout?: "bar" | "inline";
  background_style?: "light" | "dark" | "transparent";
}

export function LandingSocialProofBar({ config }: { config: Record<string, unknown> }) {
  const c = config as SocialProofBarConfig;
  const proofItems = c.proof_items ?? [];
  const logos = c.logos ?? [];
  const bg = c.background_style || "dark";

  if (proofItems.length === 0 && logos.length === 0 && !c.proof_line) return null;

  const bgClass =
    bg === "dark"
      ? "bg-zinc-900 text-white dark:bg-surface-base"
      : bg === "transparent"
        ? ""
        : "bg-zinc-50 dark:bg-surface-raised/50";

  const isDark = bg === "dark";

  return (
    <section className={`px-4 py-10 ${bgClass}`} aria-label="Social proof">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        {proofItems.length > 0 && (
          <dl className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {proofItems.map((m, i) => (
              <div key={i} className="text-center">
                <dd className={`text-2xl font-bold ${isDark ? "text-white" : "text-brand-600 dark:text-brand-400"}`}>
                  {m.metric}
                </dd>
                <dt className={`mt-1 text-sm ${isDark ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"}`}>
                  {m.label}
                </dt>
              </div>
            ))}
          </dl>
        )}
        {logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.alt_text || ""}
                className={`h-8 object-contain ${isDark ? "opacity-60" : "opacity-50 dark:opacity-40"}`}
              />
            ))}
          </div>
        )}
        {c.proof_line && (
          <p className={`text-center text-sm ${isDark ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"}`}>
            {c.proof_line}
          </p>
        )}
      </div>
    </section>
  );
}
