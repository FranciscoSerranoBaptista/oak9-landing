"use client";

import type { LandingSectionType, CtaMode } from "../types/landing-pages";

// Section renderers
import { LandingHeroStatement } from "./landing-hero-statement";
import { LandingHeroCaptureForm } from "./landing-hero-capture-form";
import { LandingHeroVideo } from "./landing-hero-video";
import { LandingPatternRecognition } from "./landing-pattern-recognition";
import { LandingProblemStatement } from "./landing-problem-statement";
import { LandingSacredCow } from "./landing-sacred-cow";
import { LandingRomeBurning } from "./landing-rome-burning";
import { LandingProgrammeOverview } from "./landing-programme-overview";
import { LandingProgrammeArc } from "./landing-programme-arc";
import { LandingWhatThisIsIsnt } from "./landing-what-this-is-isnt";
import { LandingWhatYoullExperience } from "./landing-what-youll-experience";
import { LandingCurriculumBreakdown } from "./landing-curriculum-breakdown";
import { LandingFeaturesGrid } from "./landing-features-grid";
import { LandingTestimonialsNew } from "./landing-testimonials-new";
import { LandingCaseStudy } from "./landing-case-study";
import { LandingCoachBio } from "./landing-coach-bio";
import { LandingSocialProofBar } from "./landing-social-proof-bar";
import { LandingHumaWidget } from "./landing-huma-widget";
import { LandingPerfectForYou } from "./landing-perfect-for-you";
import { LandingFaqNew } from "./landing-faq-new";
import { LandingObjectionBlock } from "./landing-objection-block";
import { LandingInvestmentPricing } from "./landing-investment-pricing";
import { LandingGuarantee } from "./landing-guarantee";
import { LandingUrgencyClosing } from "./landing-urgency-closing";
import { LandingCaptureForm } from "./landing-capture-form";
import { LandingApplicationForm } from "./landing-application-form";
import { LandingInlineCta } from "./landing-inline-cta";
import { LandingConfirmationMessage } from "./landing-confirmation-message";
import { LandingDiagnosticFraming } from "./landing-diagnostic-framing";
import { LandingQuickWin } from "./landing-quick-win";
import { LandingSocialShare } from "./landing-social-share";
import { LandingPostPurchaseWelcome } from "./landing-post-purchase-welcome";
import { LandingRichText } from "./landing-rich-text";
import { LandingPullquote } from "./landing-pullquote";
import { LandingDataStatistic } from "./landing-data-statistic";
import { LandingImageBlock } from "./landing-image-block";
import { LandingVideoBlock } from "./landing-video-block";
import { LandingComparisonTable } from "./landing-comparison-table";
import { LandingSectionDivider } from "./landing-section-divider";
import { LandingAnchorNavigation } from "./landing-anchor-navigation";
import { LandingPageHeader } from "./landing-page-header";

export interface LandingSectionRendererProps {
  sectionType: LandingSectionType;
  config: Record<string, unknown>;
  networkId?: string;
  sectionId?: string;
  /** Structured CTA mode from page settings */
  ctaMode?: CtaMode;
  /** @deprecated Legacy fallback — use ctaMode instead */
  defaultCtaUrl?: string;
  /** Callback for form sections (capture_form, application_form, hero_capture_form) */
  onSubmitForm?: (data: { networkId: string; sectionId: string; fields: Record<string, string> }) => Promise<void>;
}

function computeCtaUrl(ctaMode?: CtaMode, defaultCtaUrl?: string, networkId?: string): string | undefined {
  if (!ctaMode) return defaultCtaUrl;

  switch (ctaMode.mode) {
    case "external_link":
      return ctaMode.url;
    case "checkout":
      return `/n/${networkId}/courses/${ctaMode.plan_id}`;
    case "form_capture": {
      const target = ctaMode.target_section_type ?? "capture_form";
      return `#${target.replace(/_/g, "-")}`;
    }
    default: {
      const _exhaustive: never = ctaMode;
      return defaultCtaUrl;
    }
  }
}

function resolveCtaUrls(config: Record<string, unknown>, resolvedUrl?: string): Record<string, unknown> {
  if (!resolvedUrl) return config;

  const isPlaceholder = (url?: string) =>
    !url || url.startsWith("#");

  const resolved = { ...config };

  const cta = resolved.cta_button;
  if (cta && typeof cta === "object" && isPlaceholder((cta as Record<string, unknown>).url as string | undefined)) {
    resolved.cta_button = { ...(cta as Record<string, unknown>), url: resolvedUrl };
  }

  const secondary = resolved.secondary_cta;
  if (secondary && typeof secondary === "object" && isPlaceholder((secondary as Record<string, unknown>).url as string | undefined)) {
    resolved.secondary_cta = { ...(secondary as Record<string, unknown>), url: resolvedUrl };
  }

  const tiers = resolved.pricing_tiers;
  if (Array.isArray(tiers) && tiers.length > 0) {
    resolved.pricing_tiers = tiers.map((tier: Record<string, unknown>) => {
      const btn = tier.cta_button;
      if (btn && typeof btn === "object" && isPlaceholder((btn as Record<string, unknown>).url as string | undefined)) {
        return { ...tier, cta_button: { ...(btn as Record<string, unknown>), url: resolvedUrl } };
      }
      return tier;
    });
  }

  return resolved;
}

function sectionBgClasses(style?: string) {
  switch (style) {
    case "dark":
      return "bg-zinc-950 text-white dark:bg-surface-base";
    case "cream":
      return "bg-amber-50 text-zinc-900 dark:bg-surface-overlay dark:text-zinc-100";
    case "light":
      return "bg-white text-zinc-900 dark:bg-surface-secondary dark:text-zinc-100";
    default:
      return "";
  }
}

export function LandingSectionRenderer({
  sectionType,
  config,
  networkId,
  sectionId,
  ctaMode,
  defaultCtaUrl,
  onSubmitForm,
}: LandingSectionRendererProps) {
  const ctaUrl = computeCtaUrl(ctaMode, defaultCtaUrl, networkId);
  const resolvedConfig = resolveCtaUrls(config, ctaUrl);
  const formProps = {
    config: resolvedConfig,
    networkId: networkId ?? "",
    sectionId: sectionId ?? "",
    onSubmitForm,
  };

  const anchorId = sectionType.replace(/_/g, "-");
  const bg = (resolvedConfig as Record<string, unknown>).background_style as string | undefined;

  return (
    <div id={anchorId} className={sectionBgClasses(bg)}>
      <SectionContent sectionType={sectionType} config={resolvedConfig} formProps={formProps} />
    </div>
  );
}

function SectionContent({
  sectionType,
  config,
  formProps,
}: {
  sectionType: LandingSectionType;
  config: Record<string, unknown>;
  formProps: {
    config: Record<string, unknown>;
    networkId: string;
    sectionId: string;
    onSubmitForm?: (data: { networkId: string; sectionId: string; fields: Record<string, string> }) => Promise<void>;
  };
}) {
  switch (sectionType) {
    case "hero_statement":
      return <LandingHeroStatement config={config} />;
    case "hero_capture_form":
      return <LandingHeroCaptureForm {...formProps} />;
    case "hero_video":
      return <LandingHeroVideo config={config} />;
    case "pattern_recognition":
      return <LandingPatternRecognition config={config} />;
    case "problem_statement":
      return <LandingProblemStatement config={config} />;
    case "sacred_cow_challenge":
      return <LandingSacredCow config={config} />;
    case "rome_is_burning":
      return <LandingRomeBurning config={config} />;
    case "programme_overview":
      return <LandingProgrammeOverview config={config} />;
    case "programme_arc":
      return <LandingProgrammeArc config={config} />;
    case "what_this_is_isnt":
      return <LandingWhatThisIsIsnt config={config} />;
    case "what_youll_experience":
      return <LandingWhatYoullExperience config={config} />;
    case "curriculum_breakdown":
      return <LandingCurriculumBreakdown config={config} />;
    case "features_grid":
      return <LandingFeaturesGrid config={config} />;
    case "testimonials":
      return <LandingTestimonialsNew config={config} />;
    case "case_study":
      return <LandingCaseStudy config={config} />;
    case "coach_bio":
      return <LandingCoachBio config={config} />;
    case "social_proof_bar":
      return <LandingSocialProofBar config={config} />;
    case "huma_widget":
      return <LandingHumaWidget config={config} />;
    case "perfect_for_you":
      return <LandingPerfectForYou config={config} />;
    case "faq":
      return <LandingFaqNew config={config} />;
    case "objection_block":
      return <LandingObjectionBlock config={config} />;
    case "investment_pricing":
      return <LandingInvestmentPricing config={config} />;
    case "guarantee":
      return <LandingGuarantee config={config} />;
    case "urgency_closing":
      return <LandingUrgencyClosing config={config} />;
    case "capture_form":
      return <LandingCaptureForm {...formProps} />;
    case "application_form":
      return <LandingApplicationForm {...formProps} />;
    case "inline_cta":
      return <LandingInlineCta config={config} />;
    case "confirmation_message":
      return <LandingConfirmationMessage config={config} />;
    case "diagnostic_framing":
      return <LandingDiagnosticFraming config={config} />;
    case "quick_win":
      return <LandingQuickWin config={config} />;
    case "social_share":
      return <LandingSocialShare config={config} />;
    case "post_purchase_welcome":
      return <LandingPostPurchaseWelcome config={config} />;
    case "rich_text":
      return <LandingRichText config={config} />;
    case "pullquote":
      return <LandingPullquote config={config} />;
    case "data_statistic":
      return <LandingDataStatistic config={config} />;
    case "image_block":
      return <LandingImageBlock config={config} />;
    case "video_block":
      return <LandingVideoBlock config={config} />;
    case "comparison_table":
      return <LandingComparisonTable config={config} />;
    case "section_divider":
      return <LandingSectionDivider config={config} />;
    case "anchor_navigation":
      return <LandingAnchorNavigation config={config} />;
    case "page_header_breadcrumb":
      return <LandingPageHeader config={config} />;
    default:
      return null;
  }
}
