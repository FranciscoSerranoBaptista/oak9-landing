"use client";

interface UrgencyClosingConfig {
  headline?: string;
  body_text?: string;
  urgency_type?: string;
  countdown_target?: string;
  show_countdown?: boolean;
  seats_remaining?: number;
  seats_total?: number;
  cta_button?: { label?: string; url?: string; variant?: string };
}

export function UrgencyClosingEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as UrgencyClosingConfig;
  const cta = c.cta_button ?? {};

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Body Text</label>
        <textarea value={c.body_text ?? ""} onChange={(e) => onChange({ ...config, body_text: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Urgency Type</label>
        <select value={c.urgency_type ?? "seats-limited"} onChange={(e) => onChange({ ...config, urgency_type: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="seats-limited">Seats Limited</option>
          <option value="deadline">Deadline</option>
          <option value="cohort-start">Cohort Start</option>
          <option value="price-increase">Price Increase</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Countdown Target (date/time)</label>
        <input type="datetime-local" value={c.countdown_target ?? ""} onChange={(e) => onChange({ ...config, countdown_target: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input type="checkbox" checked={c.show_countdown ?? false} onChange={(e) => onChange({ ...config, show_countdown: e.target.checked })} className="rounded border-zinc-300 dark:border-zinc-600" />
        Show Countdown
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Seats Remaining</label>
          <input type="number" min={0} value={c.seats_remaining ?? ""} onChange={(e) => onChange({ ...config, seats_remaining: parseInt(e.target.value) || 0 })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Seats Total</label>
          <input type="number" min={0} value={c.seats_total ?? ""} onChange={(e) => onChange({ ...config, seats_total: parseInt(e.target.value) || 0 })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
        </div>
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
    </div>
  );
}
