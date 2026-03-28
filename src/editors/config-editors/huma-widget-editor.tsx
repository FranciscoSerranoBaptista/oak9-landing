"use client";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

interface HumaWidgetConfig {
  section_label?: string;
  headline?: string;
  widget_id?: string;
}

export function HumaWidgetEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as HumaWidgetConfig;
  const widgetId = c.widget_id ?? "";
  const isValidUuid = widgetId === "" || UUID_RE.test(widgetId);

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Widget ID <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={widgetId}
          onChange={(e) => onChange({ ...config, widget_id: e.target.value })}
          placeholder="e.g. e40542b8-d50c-46f3-a03f-bd7f7f382b21"
          className={`w-full rounded-md border bg-white px-3 py-2 font-mono text-sm dark:bg-surface-base dark:text-white ${
            isValidUuid
              ? "border-zinc-300 dark:border-zinc-600"
              : "border-red-400 dark:border-red-500"
          }`}
        />
        {!isValidUuid ? (
          <p className="mt-1 text-xs text-red-500">Must be a valid UUID</p>
        ) : (
          <p className="mt-1 text-xs text-zinc-400">
            Paste the widget UUID from your Huma dashboard
          </p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input
          type="text"
          value={c.headline ?? ""}
          onChange={(e) => onChange({ ...config, headline: e.target.value || undefined })}
          placeholder="e.g. What Our Graduates Say"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Section Label</label>
        <input
          type="text"
          value={c.section_label ?? ""}
          onChange={(e) => onChange({ ...config, section_label: e.target.value || undefined })}
          placeholder="e.g. TESTIMONIALS"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        />
      </div>
    </div>
  );
}
