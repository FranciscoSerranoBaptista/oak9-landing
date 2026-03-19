interface HeroVideoConfig {
  headline?: string;
  subtitle?: string;
  video_url?: string;
  video_thumbnail?: { url: string; alt_text?: string; caption?: string };
  video_autoplay?: boolean;
  video_caption?: string;
  cta_button?: { label: string; url: string; variant?: string; size?: string; open_in_new_tab?: boolean };
  layout?: "centered" | "split";
}

function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

export function LandingHeroVideo({ config }: { config: Record<string, unknown> }) {
  const c = config as HeroVideoConfig;
  const layout = c.layout || "centered";
  const embedUrl = c.video_url ? getEmbedUrl(c.video_url) : null;
  const isSplit = layout === "split";

  return (
    <header className="relative overflow-hidden bg-zinc-900 dark:bg-surface-base" role="banner">
      <div className={`mx-auto max-w-5xl px-4 py-20 ${isSplit ? "flex flex-col gap-10 md:flex-row md:items-center" : ""}`}>
        <div className={isSplit ? "md:w-1/2" : "mb-10 text-center"}>
          {c.headline && (
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {c.headline}
            </h1>
          )}
          {c.subtitle && (
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              {c.subtitle}
            </p>
          )}
          {c.cta_button && (
            <nav className="mt-8" aria-label="Primary action">
              <a
                href={c.cta_button.url}
                {...(c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
              >
                {c.cta_button.label}
              </a>
            </nav>
          )}
        </div>
        {embedUrl && (
          <div className={isSplit ? "md:w-1/2" : "mx-auto max-w-3xl"}>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src={embedUrl}
                title={c.headline || "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
            {c.video_caption && (
              <p className="mt-2 text-center text-sm text-zinc-400">{c.video_caption}</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
