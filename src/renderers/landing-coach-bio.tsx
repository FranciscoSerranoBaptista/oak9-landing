interface CoachBioConfig {
  section_label?: string;
  headline?: string;
  photo?: { url?: string; alt_text?: string };
  bio_text?: string;
  credentials?: Array<{ credential: string }>;
  personal_line?: string;
  layout?: "split" | "centered" | "card";
}

export function LandingCoachBio({ config }: { config: Record<string, unknown> }) {
  const c = config as CoachBioConfig;
  const layout = c.layout || "split";
  const credentials = c.credentials ?? [];
  const photoUrl = c.photo?.url;
  const photoAlt = c.photo?.alt_text || "Coach";

  if (layout === "centered") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center" aria-label={c.headline || "About the coach"}>
        {c.section_label && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
        )}
        {c.headline && <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>}
        {photoUrl && (
          <img src={photoUrl} alt={photoAlt} className="mx-auto mb-6 size-32 rounded-full object-cover shadow-lg" />
        )}
        {c.bio_text && (
          <div className="mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {c.bio_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {credentials.length > 0 && (
          <ul className="mb-4 flex flex-wrap justify-center gap-2">
            {credentials.map((cred, i) => (
              <li key={i} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/20 dark:text-brand-400">
                {cred.credential}
              </li>
            ))}
          </ul>
        )}
        {c.personal_line && (
          <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{c.personal_line}</p>
        )}
      </section>
    );
  }

  if (layout === "card") {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "About the coach"}>
        {c.section_label && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
        )}
        {c.headline && <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>}
        <article className="rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {photoUrl && (
              <img src={photoUrl} alt={photoAlt} className="size-24 shrink-0 rounded-full object-cover" />
            )}
            <div>
              {c.bio_text && (
                <div className="mb-3 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
                  {c.bio_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}
              {credentials.length > 0 && (
                <ul className="mb-3 flex flex-wrap gap-2">
                  {credentials.map((cred, i) => (
                    <li key={i} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-surface-hover dark:text-zinc-300">
                      {cred.credential}
                    </li>
                  ))}
                </ul>
              )}
              {c.personal_line && (
                <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{c.personal_line}</p>
              )}
            </div>
          </div>
        </article>
      </section>
    );
  }

  // split (default)
  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "About the coach"}>
      {c.section_label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>}
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {photoUrl && (
          <div className="shrink-0">
            <img src={photoUrl} alt={photoAlt} className="size-48 rounded-2xl object-cover shadow-lg md:size-64" />
          </div>
        )}
        <div>
          {c.bio_text && (
            <div className="mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {c.bio_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
          {credentials.length > 0 && (
            <ul className="mb-4 flex flex-wrap gap-2">
              {credentials.map((cred, i) => (
                <li key={i} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/20 dark:text-brand-400">
                  {cred.credential}
                </li>
              ))}
            </ul>
          )}
          {c.personal_line && (
            <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{c.personal_line}</p>
          )}
        </div>
      </div>
    </section>
  );
}
