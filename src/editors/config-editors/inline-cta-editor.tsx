"use client";

interface InlineCtaConfig {
  headline?: string;
  body_text?: string;
  cta_button?: { label?: string; url?: string; variant?: string };
  secondary_cta?: { label?: string; url?: string; variant?: string };
  background_style?: string;
  alignment?: string;
}

export function InlineCtaEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as InlineCtaConfig;
  const cta = c.cta_button ?? {};
  const secondary = c.secondary_cta ?? {};

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">CTA Button</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          <input placeholder="Label" value={cta.label ?? ""} onChange={(e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="URL" value={cta.url ?? ""} onChange={(e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
        <select value={cta.variant ?? "primary"} onChange={(e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } })} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="text-link">Text Link</option>
        </select>
      </fieldset>
      <fieldset className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <legend className="px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Secondary CTA</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          <input placeholder="Label" value={secondary.label ?? ""} onChange={(e) => onChange({ ...config, secondary_cta: { ...secondary, label: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
          <input placeholder="URL" value={secondary.url ?? ""} onChange={(e) => onChange({ ...config, secondary_cta: { ...secondary, url: e.target.value } })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
        <select value={secondary.variant ?? "secondary"} onChange={(e) => onChange({ ...config, secondary_cta: { ...secondary, variant: e.target.value } })} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="text-link">Text Link</option>
        </select>
      </fieldset>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Background Style</label>
          <select value={c.background_style ?? "light"} onChange={(e) => onChange({ ...config, background_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cream">Cream</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Alignment</label>
          <select value={c.alignment ?? "centered"} onChange={(e) => onChange({ ...config, alignment: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
            <option value="centered">Centered</option>
            <option value="left">Left</option>
          </select>
        </div>
      </div>
    </div>
  );
}
