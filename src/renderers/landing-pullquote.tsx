interface PullquoteConfig {
  quote_text?: string;
  attribution?: string;
  style?: "large-text" | "bordered-left" | "dark-card";
  background_style?: "light" | "dark" | "cream";
}

export function LandingPullquote({ config }: { config: Record<string, unknown> }) {
  const c = config as PullquoteConfig;
  const text = c.quote_text;
  if (!text) return null;

  const style = c.style || "large-text";

  if (style === "dark-card") {
    return (
      <section className="px-4 py-16" aria-label="Quote">
        <figure className="mx-auto max-w-4xl rounded-2xl bg-zinc-900 p-8 dark:bg-surface-raised">
          <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
            &ldquo;{text}&rdquo;
          </blockquote>
          {c.attribution && (
            <figcaption className="mt-4 text-sm text-zinc-400">
              &mdash; {c.attribution}
            </figcaption>
          )}
        </figure>
      </section>
    );
  }

  if (style === "bordered-left") {
    return (
      <section className="px-4 py-16" aria-label="Quote">
        <figure className="mx-auto max-w-4xl border-l-4 border-brand-500 pl-6">
          <blockquote className="text-xl font-medium text-zinc-900 dark:text-white">
            &ldquo;{text}&rdquo;
          </blockquote>
          {c.attribution && (
            <figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              &mdash; {c.attribution}
            </figcaption>
          )}
        </figure>
      </section>
    );
  }

  // large-text (default)
  return (
    <section className="px-4 py-16" aria-label="Quote">
      <figure className="mx-auto max-w-4xl text-center">
        <blockquote className="text-2xl font-medium leading-relaxed text-zinc-900 sm:text-3xl dark:text-white">
          &ldquo;{text}&rdquo;
        </blockquote>
        {c.attribution && (
          <figcaption className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            &mdash; {c.attribution}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
