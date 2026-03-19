"use client";

import { Plus, Trash } from "@phosphor-icons/react";

interface PricingTier {
  tier_name?: string;
  price?: string;
  currency?: string;
  price_period?: string;
  price_note?: string;
  tier_description?: string;
  included_items?: string;
  is_featured?: boolean;
}

interface InvestmentPricingConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  pricing_tiers?: PricingTier[];
  comparison_note?: string;
  guarantee?: string;
  layout?: string;
}

export function InvestmentPricingEditor({
  config,
  onChange,
}: {
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}) {
  const c = config as InvestmentPricingConfig;
  const tiers = c.pricing_tiers ?? [];

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Section Label</label>
        <input value={c.section_label ?? ""} onChange={(e) => onChange({ ...config, section_label: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Headline</label>
        <input value={c.headline ?? ""} onChange={(e) => onChange({ ...config, headline: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Introduction</label>
        <textarea value={c.introduction ?? ""} onChange={(e) => onChange({ ...config, introduction: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Pricing Tiers</label>
        <div className="space-y-2">
          {tiers.map((tier, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Tier {i + 1}</span>
                <button type="button" onClick={() => onChange({ ...config, pricing_tiers: tiers.filter((_, j) => j !== i) })} className="text-zinc-400 hover:text-red-500"><Trash className="size-3.5" /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <input placeholder="Tier name" value={tier.tier_name ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], tier_name: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Price" value={tier.price ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], price: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Currency (e.g. GBP)" value={tier.currency ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], currency: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
                <input placeholder="Period (e.g. /month)" value={tier.price_period ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], price_period: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              </div>
              <input placeholder="Price note" value={tier.price_note ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], price_note: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <textarea placeholder="Tier description" value={tier.tier_description ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], tier_description: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} rows={2} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <input placeholder="Included items (comma-separated)" value={tier.included_items ?? ""} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], included_items: e.target.value }; onChange({ ...config, pricing_tiers: u }); }} className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
              <label className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <input type="checkbox" checked={tier.is_featured ?? false} onChange={(e) => { const u = [...tiers]; u[i] = { ...u[i], is_featured: e.target.checked }; onChange({ ...config, pricing_tiers: u }); }} className="rounded border-zinc-300 dark:border-zinc-600" />
                Featured
              </label>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange({ ...config, pricing_tiers: [...tiers, { tier_name: "", price: "", currency: "GBP", price_period: "", price_note: "", tier_description: "", included_items: "", is_featured: false }] })} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500"><Plus className="size-3" /> Add Tier</button>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Comparison Note</label>
        <textarea value={c.comparison_note ?? ""} onChange={(e) => onChange({ ...config, comparison_note: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Guarantee</label>
        <textarea value={c.guarantee ?? ""} onChange={(e) => onChange({ ...config, guarantee: e.target.value })} rows={2} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Layout</label>
        <select value={c.layout ?? "cards-side-by-side"} onChange={(e) => onChange({ ...config, layout: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white">
          <option value="cards-side-by-side">Cards Side by Side</option>
          <option value="single-centered">Single Centered</option>
          <option value="stacked">Stacked</option>
        </select>
      </div>
    </div>
  );
}
