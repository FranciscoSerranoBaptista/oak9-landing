// =============================================================================
// LANDING PAGE SECTION TYPE — all 30 types as a union
// =============================================================================

export type LandingSectionType =
  // Cat 1 — Hero
  | "hero_statement"
  | "hero_capture_form"
  | "hero_video"
  // Cat 2 — Problem & Recognition
  | "pattern_recognition"
  | "problem_statement"
  | "sacred_cow_challenge"
  | "rome_is_burning"
  // Cat 3 — Solution & Programme
  | "programme_overview"
  | "programme_arc"
  | "what_this_is_isnt"
  | "what_youll_experience"
  | "curriculum_breakdown"
  | "features_grid"
  // Cat 4 — Trust & Proof
  | "testimonials"
  | "case_study"
  | "coach_bio"
  | "social_proof_bar"
  | "huma_widget"
  // Cat 5 — Qualification & Objection
  | "perfect_for_you"
  | "faq"
  | "objection_block"
  // Cat 6 — Pricing & Commitment
  | "investment_pricing"
  | "guarantee"
  | "urgency_closing"
  // Cat 7 — Forms & Capture
  | "capture_form"
  | "application_form"
  | "inline_cta"
  // Cat 8 — Confirmation & Thank You
  | "confirmation_message"
  | "diagnostic_framing"
  | "quick_win"
  | "social_share"
  | "post_purchase_welcome"
  // Cat 9 — Content & Narrative
  | "rich_text"
  | "pullquote"
  | "data_statistic"
  | "image_block"
  | "video_block"
  | "comparison_table"
  // Cat 10 — Structural & Navigation
  | "section_divider"
  | "anchor_navigation"
  | "page_header_breadcrumb";

/** All section type keys for runtime use */
export const LANDING_SECTION_TYPES: LandingSectionType[] = [
  "hero_statement",
  "hero_capture_form",
  "hero_video",
  "pattern_recognition",
  "problem_statement",
  "sacred_cow_challenge",
  "rome_is_burning",
  "programme_overview",
  "programme_arc",
  "what_this_is_isnt",
  "what_youll_experience",
  "curriculum_breakdown",
  "features_grid",
  "testimonials",
  "case_study",
  "coach_bio",
  "social_proof_bar",
  "huma_widget",
  "perfect_for_you",
  "faq",
  "objection_block",
  "investment_pricing",
  "guarantee",
  "urgency_closing",
  "capture_form",
  "application_form",
  "inline_cta",
  "confirmation_message",
  "diagnostic_framing",
  "quick_win",
  "social_share",
  "post_purchase_welcome",
  "rich_text",
  "pullquote",
  "data_statistic",
  "image_block",
  "video_block",
  "comparison_table",
  "section_divider",
  "anchor_navigation",
  "page_header_breadcrumb",
];

/** Human-readable labels for section types, grouped by category */
export const SECTION_TYPE_LABELS: Record<LandingSectionType, string> = {
  hero_statement: "Hero — Statement",
  hero_capture_form: "Hero — With Capture Form",
  hero_video: "Hero — With Video",
  pattern_recognition: "Pattern Recognition",
  problem_statement: "Problem Statement",
  sacred_cow_challenge: "Sacred Cow Challenge",
  rome_is_burning: "Rome Is Burning",
  programme_overview: "Programme Overview",
  programme_arc: "Programme Arc / Journey",
  what_this_is_isnt: "What This Is / What This Isn't",
  what_youll_experience: "What You'll Experience",
  curriculum_breakdown: "Curriculum / Module Breakdown",
  features_grid: "Features Grid",
  testimonials: "Testimonials",
  case_study: "Case Study",
  coach_bio: "Coach / Facilitator Bio",
  social_proof_bar: "Social Proof Bar",
  huma_widget: "Huma Testimonial Widget",
  perfect_for_you: "Perfect For You If",
  faq: "FAQ",
  objection_block: "Objection Block",
  investment_pricing: "Investment / Pricing",
  guarantee: "Guarantee",
  urgency_closing: "Urgency / Closing",
  capture_form: "Capture Form",
  application_form: "Application Form",
  inline_cta: "Inline CTA Block",
  confirmation_message: "Confirmation Message",
  diagnostic_framing: "Diagnostic Framing Block",
  quick_win: "Quick Win / Immediate Value",
  social_share: "Social Share",
  post_purchase_welcome: "Post-Purchase Welcome",
  rich_text: "Rich Text Block",
  pullquote: "Pullquote / Highlight",
  data_statistic: "Data / Statistic Highlight",
  image_block: "Image Block",
  video_block: "Video Block",
  comparison_table: "Comparison Table",
  section_divider: "Section Divider",
  anchor_navigation: "Anchor Navigation",
  page_header_breadcrumb: "Page Header / Breadcrumb",
};

/** Categorised section types for the "Add Section" menu */
export const SECTION_TYPE_CATEGORIES: { label: string; types: LandingSectionType[] }[] = [
  { label: "Hero", types: ["hero_statement", "hero_capture_form", "hero_video"] },
  { label: "Problem & Recognition", types: ["pattern_recognition", "problem_statement", "sacred_cow_challenge", "rome_is_burning"] },
  { label: "Solution & Programme", types: ["programme_overview", "programme_arc", "what_this_is_isnt", "what_youll_experience", "curriculum_breakdown", "features_grid"] },
  { label: "Trust & Proof", types: ["testimonials", "case_study", "coach_bio", "social_proof_bar", "huma_widget"] },
  { label: "Qualification & Objection", types: ["perfect_for_you", "faq", "objection_block"] },
  { label: "Pricing & Commitment", types: ["investment_pricing", "guarantee", "urgency_closing"] },
  { label: "Forms & Capture", types: ["capture_form", "application_form", "inline_cta"] },
  { label: "Confirmation & Thank You", types: ["confirmation_message", "diagnostic_framing", "quick_win", "social_share", "post_purchase_welcome"] },
  { label: "Content & Narrative", types: ["rich_text", "pullquote", "data_statistic", "image_block", "video_block", "comparison_table"] },
  { label: "Structural & Navigation", types: ["section_divider", "anchor_navigation", "page_header_breadcrumb"] },
];

// =============================================================================
// PAGE SETTINGS — JSONB shape
// =============================================================================

export type CtaMode =
  | { mode: "external_link"; url: string }
  | { mode: "checkout"; plan_id: string }
  | { mode: "form_capture"; target_section_type?: "capture_form" | "application_form" };

export interface LandingPageSettings {
  // SEO
  meta_title?: string;
  meta_description?: string;
  og_image_url?: string;
  canonical_url?: string;
  robots?: string; // e.g. "noindex, nofollow"
  // Appearance
  custom_css_class?: string;
  // CTA — determines what all "Apply" / "Get Started" buttons do
  cta_mode?: CtaMode;
  /** @deprecated Use cta_mode instead. Kept for backwards compat reads. */
  default_cta_url?: string;
  // Waitlist (for waiting_list page type)
  waitlist_headline?: string;
  waitlist_description?: string;
}
