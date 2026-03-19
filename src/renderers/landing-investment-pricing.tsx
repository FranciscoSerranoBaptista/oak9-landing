interface CtaButton {
  label: string;
  url: string;
  variant?: string;
  size?: string;
  open_in_new_tab?: boolean;
}

interface PricingTier {
  tier_name: string;
  price: string;
  currency?: string;
  price_period?: string;
  price_note?: string;
  tier_description?: string;
  included_items?: string[];
  cta_button?: CtaButton;
  is_featured?: boolean;
}

interface InvestmentPricingConfig {
  section_label?: string;
  headline?: string;
  introduction?: string;
  pricing_tiers?: PricingTier[];
  comparison_note?: string;
  guarantee?: string;
  layout?: "cards-side-by-side" | "single-centered" | "stacked";
}

export function LandingInvestmentPricing({ config }: { config: Record<string, unknown> }) {
  const c = config as InvestmentPricingConfig;
  const tiers = c.pricing_tiers ?? [];
  const layout = c.layout || "cards-side-by-side";

  if (tiers.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Pricing"}>
      {c.section_label && (
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && (
        <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      {c.introduction && (
        <div className="mx-auto mb-10 max-w-4xl space-y-3 text-center text-lg text-zinc-600 dark:text-zinc-400">
          {c.introduction.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}

      {layout === "single-centered" && tiers[0] && (
        <div className="mx-auto max-w-md">
          <TierCard tier={tiers[0]} />
        </div>
      )}

      {layout === "stacked" && (
        <div className="mx-auto max-w-lg space-y-6">
          {tiers.map((tier, i) => (
            <TierCard key={i} tier={tier} />
          ))}
        </div>
      )}

      {layout === "cards-side-by-side" && (
        <div className={`grid gap-6 ${tiers.length === 1 ? "mx-auto max-w-md" : tiers.length === 2 ? "mx-auto max-w-4xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {tiers.map((tier, i) => (
            <TierCard key={i} tier={tier} />
          ))}
        </div>
      )}

      {c.comparison_note && (
        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">{c.comparison_note}</p>
      )}
      {c.guarantee && (
        <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">{c.guarantee}</p>
      )}
    </section>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={`relative rounded-2xl border p-8 ${
        tier.is_featured
          ? "border-brand-500 bg-white ring-2 ring-brand-500/20 dark:bg-surface-raised dark:ring-brand-400/20"
          : "border-zinc-200 bg-white dark:border-surface-border dark:bg-surface-raised"
      }`}
    >
      {tier.is_featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Recommended
        </span>
      )}
      <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{tier.tier_name}</h3>
      {tier.tier_description && (
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{tier.tier_description}</p>
      )}
      <div className="mb-4">
        <span className="text-4xl font-bold text-zinc-900 dark:text-white">
          {tier.currency || "EUR"} {tier.price}
        </span>
        {tier.price_period && (
          <span className="ml-1 text-sm text-zinc-500 dark:text-zinc-400">/{tier.price_period}</span>
        )}
      </div>
      {tier.price_note && (
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">{tier.price_note}</p>
      )}
      {tier.included_items && tier.included_items.length > 0 && (
        <ul className="mb-6 space-y-2">
          {tier.included_items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mt-0.5 text-green-600 dark:text-green-400" aria-hidden="true">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {tier.cta_button && (
        <a
          href={tier.cta_button.url}
          {...(tier.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
            tier.is_featured
              ? "bg-brand-600 text-white hover:bg-brand-500"
              : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-surface-border dark:bg-surface-hover dark:text-white dark:hover:bg-surface-raised"
          }`}
        >
          {tier.cta_button.label}
        </a>
      )}
    </article>
  );
}
