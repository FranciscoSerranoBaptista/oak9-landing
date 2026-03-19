"use client";

interface GuaranteeConfig {
  headline?: string;
  guarantee_text?: string;
  guarantee_type?: string;
  duration?: string;
}

export function GuaranteeEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as GuaranteeConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Guarantee Text</label>
        <textarea value={c.guarantee_text ?? ""} onChange={(e) => onChange({ ...config, guarantee_text: e.target.value })} rows={4} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Guarantee Type</label>
        <select value={c.guarantee_type ?? "money-back"} onChange={(e) => onChange({ ...config, guarantee_type: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="money-back">Money Back</option>
          <option value="satisfaction">Satisfaction</option>
          <option value="fit-guarantee">Fit Guarantee</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Duration</label>
        <input value={c.duration ?? ""} onChange={(e) => onChange({ ...config, duration: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="30 days" />
      </div>
    </div>
  );
}
