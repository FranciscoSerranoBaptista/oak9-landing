interface HeroStatementConfig {
  headline?: string;
  subtitle?: string;
  body_text?: string;
  cta_button?: { label: string; url: string; variant?: string; size?: string; open_in_new_tab?: boolean };
  background_image?: { url: string; alt_text?: string; caption?: string };
  background_overlay?: { color?: string; opacity?: number };
  layout?: "centered" | "left-aligned" | "split";
  height?: "viewport" | "large" | "medium";
}

export function LandingHeroStatement({ config }: { config: Record<string, unknown> }) {
  const c = config as HeroStatementConfig;
  const layout = c.layout || "centered";
  const height = c.height || "large";
  const overlayOpacity = c.background_overlay?.opacity ?? 0.6;

  const heightClass =
    height === "viewport"
      ? "min-h-screen"
      : height === "large"
        ? "min-h-[70vh]"
        : "min-h-[50vh]";

  const alignClass =
    layout === "left-aligned"
      ? "text-left items-start"
      : layout === "split"
        ? "text-left items-start md:w-1/2"
        : "text-center items-center";

  return (
    <header className={`relative flex overflow-hidden ${heightClass}`} role="banner">
      {c.background_image && (
        <>
          <img
            src={c.background_image.url}
            alt={c.background_image.alt_text || ""}
            className="absolute inset-0 size-full object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true"
          />
        </>
      )}
      {!c.background_image && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand-700, #7c3aed) 0%, var(--color-brand-900, #4c1d95) 100%)",
          }}
          aria-hidden="true"
        />
      )}
      <div className={`relative mx-auto flex w-full max-w-5xl flex-col justify-center px-4 py-20 ${alignClass}`}>
        {c.headline && (
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {c.headline}
          </h1>
        )}
        {c.subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
            {c.subtitle}
          </p>
        )}
        {c.body_text && (
          <p className="mt-4 max-w-2xl text-base text-white/70">
            {c.body_text}
          </p>
        )}
        {c.cta_button && (
          <nav className="mt-8" aria-label="Primary action">
            <a
              href={c.cta_button.url}
              {...(c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              {c.cta_button.label}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
