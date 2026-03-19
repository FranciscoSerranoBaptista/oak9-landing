interface RichTextConfig {
  section_label?: string;
  body_text?: string;
  max_width?: "narrow" | "medium" | "full";
  background_style?: "light" | "dark" | "cream" | "transparent";
  text_alignment?: "left" | "centered";
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-brand-600 hover:underline dark:text-brand-400">$1</a>'
    )
    .replace(/^- (.*)/gm, "<li>$1</li>")
    .replace(
      /(<li>.*<\/li>\n?)+/g,
      '<ul class="list-disc pl-5 space-y-1">$&</ul>'
    )
    .split("\n\n")
    .map((p) => (p.startsWith("<") ? p : `<p>${p}</p>`))
    .join("");
}

function bgClasses(bg?: string) {
  switch (bg) {
    case "dark":
      return "bg-zinc-900 dark:bg-surface-base";
    case "cream":
      return "bg-amber-50 dark:bg-stone-900";
    case "transparent":
      return "";
    default:
      return "bg-white dark:bg-surface-base";
  }
}

export function LandingRichText({ config }: { config: Record<string, unknown> }) {
  const c = config as RichTextConfig;
  if (!c.body_text) return null;

  const isDark = c.background_style === "dark";
  const maxW =
    c.max_width === "narrow"
      ? "max-w-2xl"
      : c.max_width === "full"
        ? "max-w-5xl"
        : "max-w-3xl";
  const align = c.text_alignment === "centered" ? "text-center" : "text-left";

  return (
    <section className={`px-4 py-16 ${bgClasses(c.background_style)}`} aria-label="Content">
      {c.section_label && (
        <p className={`mx-auto mb-4 ${maxW} text-sm font-semibold uppercase tracking-wider ${isDark ? "text-zinc-400" : "text-brand-600 dark:text-brand-400"}`}>
          {c.section_label}
        </p>
      )}
      <div
        className={`prose mx-auto ${maxW} ${align} ${
          isDark
            ? "prose-invert text-zinc-300"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(c.body_text) }}
      />
    </section>
  );
}
