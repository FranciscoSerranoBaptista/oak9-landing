interface ImageBlockConfig {
  imageUrl?: string;
  alt?: string;
  caption?: string;
  layout?: "full-width" | "contained" | "small-centered";
}

export function LandingImageBlock({ config }: { config: Record<string, unknown> }) {
  const c = config as ImageBlockConfig;
  if (!c.imageUrl) return null;

  const layout = c.layout || "contained";

  const containerClass =
    layout === "full-width"
      ? "px-0"
      : layout === "small-centered"
        ? "mx-auto max-w-xl px-4"
        : "mx-auto max-w-5xl px-4";

  return (
    <section className={`py-12 ${containerClass}`} aria-label={c.alt || "Image"}>
      <figure>
        <img
          src={c.imageUrl}
          alt={c.alt || ""}
          className={`w-full object-cover ${
            layout === "full-width"
              ? "max-h-[60vh]"
              : "rounded-2xl shadow-md"
          }`}
        />
        {c.caption && (
          <figcaption className="mx-auto mt-3 max-w-3xl px-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            {c.caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
