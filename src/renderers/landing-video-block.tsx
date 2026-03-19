interface VideoBlockConfig {
  videoUrl?: string;
  title?: string;
  layout?: "full-width" | "contained";
}

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

export function LandingVideoBlock({ config }: { config: Record<string, unknown> }) {
  const c = config as VideoBlockConfig;
  if (!c.videoUrl) return null;

  const embedUrl = getEmbedUrl(c.videoUrl);
  const layout = c.layout || "contained";

  return (
    <section
      className={`py-12 ${layout === "full-width" ? "px-0" : "mx-auto max-w-5xl px-4"}`}
      aria-label={c.title || "Video"}
    >
      <div className={`relative aspect-video overflow-hidden ${layout === "full-width" ? "" : "rounded-2xl shadow-md"}`}>
        <iframe
          src={embedUrl || undefined}
          title={c.title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    </section>
  );
}
