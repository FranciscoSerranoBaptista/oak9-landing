"use client";

interface ObjectionBlockConfig {
  objection?: string;
  response?: string;
  reframe?: string;
  visual_style?: string;
}

export function ObjectionBlockEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ObjectionBlockConfig;

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Objection</label>
        <textarea value={c.objection ?? ""} onChange={(e) => onChange({ ...config, objection: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="The common objection..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Response</label>
        <textarea value={c.response ?? ""} onChange={(e) => onChange({ ...config, response: e.target.value })} rows={3} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="Your response..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Reframe</label>
        <textarea value={c.reframe ?? ""} onChange={(e) => onChange({ ...config, reframe: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder="The reframed perspective..." />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Visual Style</label>
        <select value={c.visual_style ?? "pullquote"} onChange={(e) => onChange({ ...config, visual_style: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="pullquote">Pullquote</option>
          <option value="card">Card</option>
          <option value="inline">Inline</option>
        </select>
      </div>
    </div>
  );
}
