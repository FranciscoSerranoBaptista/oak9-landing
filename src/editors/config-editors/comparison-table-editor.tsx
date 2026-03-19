"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface ComparisonTableConfig {
  headline?: string;
  column_headers?: string[];
  rows?: Array<{ row_label?: string; column_values?: string[] }>;
  highlight_column?: number;
}

export function ComparisonTableEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as ComparisonTableConfig;
  const headers = c.column_headers ?? ["", ""];
  const rows = c.rows ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Column Headers</label>
        <div className="space-y-2">
          {headers.map((h, i) => (
            <div key={i} className="flex gap-2">
              <input value={h} onChange={(e) => { const u = [...headers]; u[i] = e.target.value; onChange({ ...config, column_headers: u }); }} className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" placeholder={`Column ${i + 1}`} />
              {headers.length > 2 && (
                <button type="button" onClick={() => { const u = headers.filter((_, j) => j !== i); const ur = rows.map((r) => ({ ...r, column_values: (r.column_values ?? []).filter((_, j) => j !== i) })); onChange({ ...config, column_headers: u, rows: ur }); }} className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"><Trash className="size-4" /></button>
              )}
            </div>
          ))}
        </div>
        {headers.length < 3 && (
          <button type="button" onClick={() => { const u = [...headers, ""]; const ur = rows.map((r) => ({ ...r, column_values: [...(r.column_values ?? []), ""] })); onChange({ ...config, column_headers: u, rows: ur }); }} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Column</button>
        )}
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Rows</label>
        <div className="space-y-2">
          {rows.map((row, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Row {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, rows: rows.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <input placeholder="Row label" value={row.row_label ?? ""} onChange={(e) => { const u = [...rows]; u[i] = { ...u[i], row_label: e.target.value }; onChange({ ...config, rows: u }); }} className="mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
                {headers.map((_, ci) => (
                  <input key={ci} placeholder={headers[ci] || `Col ${ci + 1}`} value={(row.column_values ?? [])[ci] ?? ""} onChange={(e) => { const u = [...rows]; const vals = [...(u[i]?.column_values ?? [])]; vals[ci] = e.target.value; u[i] = { ...u[i], column_values: vals }; onChange({ ...config, rows: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, rows: [...rows, { row_label: "", column_values: headers.map(() => "") }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Row</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Highlight Column (0-indexed)</label>
        <input type="number" min={0} max={headers.length - 1} value={c.highlight_column ?? 0} onChange={(e) => onChange({ ...config, highlight_column: parseInt(e.target.value) || 0 })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
    </div>
  );
}
