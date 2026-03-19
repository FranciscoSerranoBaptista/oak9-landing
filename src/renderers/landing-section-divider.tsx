interface SectionDividerConfig {
  style?: "line" | "dots" | "space-only" | "bird-icon";
  spacing?: "small" | "medium" | "large";
}

export function LandingSectionDivider({ config }: { config: Record<string, unknown> }) {
  const c = config as SectionDividerConfig;
  const style = c.style || "line";
  const spacing = c.spacing || "medium";

  const paddingClass =
    spacing === "small"
      ? "py-4"
      : spacing === "large"
        ? "py-16"
        : "py-8";

  if (style === "space-only") {
    return <div className={paddingClass} role="separator" aria-hidden="true" />;
  }

  return (
    <div className={`flex items-center justify-center ${paddingClass}`} role="separator" aria-hidden="true">
      {style === "line" && (
        <div className="mx-auto h-px w-full max-w-5xl bg-zinc-200 dark:bg-surface-border" />
      )}
      {style === "dots" && (
        <div className="flex gap-2">
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <span className="size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        </div>
      )}
      {style === "bird-icon" && (
        <span className="text-2xl text-zinc-300 dark:text-zinc-600">&#x1F426;</span>
      )}
    </div>
  );
}
