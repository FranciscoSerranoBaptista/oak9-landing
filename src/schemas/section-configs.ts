import { z } from "zod";

// =============================================================================
// SHARED ELEMENT SCHEMAS
// =============================================================================

/** CTA Button — reused across many section types */
export const ctaButtonSchema = z.object({
  label: z.string().max(100),
  url: z.string().max(500),
  variant: z.enum(["primary", "secondary", "ghost", "text-link"]).default("primary"),
  size: z.enum(["small", "medium", "large"]).optional(),
  open_in_new_tab: z.boolean().optional(),
});

/** Media reference — image/video with alt + caption */
export const mediaSchema = z.object({
  url: z.string().max(1000),
  alt_text: z.string().max(300).default(""),
  caption: z.string().max(500).optional(),
});

// =============================================================================
// CATEGORY 1: HERO SECTIONS
// =============================================================================

/** 1.1 Hero — Statement */
export const heroStatementConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5000).optional(),
  cta_button: ctaButtonSchema.optional(),
  background_image: mediaSchema.optional(),
  background_overlay: z.object({
    color: z.string().max(20).optional(),
    opacity: z.number().min(0).max(1).optional(),
  }).optional(),
  layout: z.enum(["centered", "left-aligned", "split"]).default("centered"),
  height: z.enum(["viewport", "large", "medium"]).default("large"),
});

/** 1.2 Hero — With Capture Form */
export const heroCaptureFormConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5000).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional(),
  })).default([
    { field_name: "email", field_type: "email", field_label: "Email", placeholder: "Enter your email", required: true },
  ]),
  submit_button_label: z.string().max(100).default("Join the waiting list"),
  form_position: z.enum(["inline", "sidebar", "overlay"]).default("inline"),
  social_proof_line: z.string().max(300).optional(),
  background_image: mediaSchema.optional(),
  layout: z.enum(["centered", "split"]).default("centered"),
  opt_in_key: z.string().min(1).max(100).regex(/^[a-z0-9_-]+$/).optional(),
  opt_in_tags: z.array(z.string().min(1).max(100)).max(10).optional(),
  success_message: z.string().max(500).optional(),
  privacy_text: z.string().max(1000).optional(),
});

/** 1.3 Hero — With Video */
export const heroVideoConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  video_url: z.string().max(1000),
  video_thumbnail: mediaSchema.optional(),
  video_autoplay: z.boolean().optional(),
  video_caption: z.string().max(300).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: z.enum(["centered", "split"]).default("split"),
});

// =============================================================================
// CATEGORY 2: PROBLEM & RECOGNITION SECTIONS
// =============================================================================

/** 2.1 Pattern Recognition */
export const patternRecognitionConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  body_text: z.string().max(5000),
  recognition_items: z.array(z.object({
    statement: z.string().max(1000),
  })).optional(),
  closing_line: z.string().max(1000).optional(),
  background_style: z.enum(["light", "dark", "cream"]).default("light"),
});

/** 2.2 Problem Statement */
export const problemStatementConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  body_text: z.string().max(5000),
  contrast_items: z.array(z.object({
    surface_reality: z.string().max(500),
    underneath: z.string().max(500),
  })).optional(),
  transition_line: z.string().max(1000).optional(),
});

/** 2.3 Sacred Cow Challenge */
export const sacredCowChallengeConfigSchema = z.object({
  sacred_cow: z.string().max(1000),
  sour_milk: z.string().max(2000),
  reframe: z.string().max(2000),
  transition_text: z.string().max(1000).optional(),
  visual_style: z.enum(["quote-card", "inline", "split"]).default("quote-card"),
});

/** 2.4 Rome Is Burning */
export const romeIsBurningConfigSchema = z.object({
  headline: z.string().max(500),
  body_text: z.string().max(5000),
  time_markers: z.array(z.object({
    timeframe: z.string().max(200),
    consequence: z.string().max(500),
  })).optional(),
  closing_line: z.string().max(1000).optional(),
});

// =============================================================================
// CATEGORY 3: SOLUTION & PROGRAMME SECTIONS
// =============================================================================

/** 3.1 Programme Overview */
export const programmeOverviewConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5000),
  key_details: z.array(z.object({
    label: z.string().max(100),
    value: z.string().max(200),
  })).optional(),
  cta_button: ctaButtonSchema.optional(),
});

/** 3.2 Programme Arc / Journey */
export const programmeArcConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2000).optional(),
  phases: z.array(z.object({
    phase_number: z.number(),
    phase_name: z.string().max(200),
    phase_description: z.string().max(1000),
    phase_icon: mediaSchema.optional(),
  })),
  layout: z.enum(["horizontal-timeline", "vertical-steps", "cards-grid"]).default("vertical-steps"),
  closing_text: z.string().max(2000).optional(),
});

/** 3.3 What This Is / What This Isn't */
export const whatThisIsIsntConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  is_items: z.array(z.object({
    statement: z.string().max(500),
  })),
  is_not_items: z.array(z.object({
    statement: z.string().max(500),
  })),
  layout: z.enum(["two-columns", "alternating-rows", "single-column"]).default("two-columns"),
  closing_text: z.string().max(2000).optional(),
});

/** 3.4 What You'll Experience */
export const whatYoullExperienceConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2000).optional(),
  experience_items: z.array(z.object({
    title: z.string().max(200),
    description: z.string().max(1000),
    icon: mediaSchema.optional(),
  })),
  layout: z.enum(["grid-2col", "grid-3col", "stacked-cards", "numbered-list"]).default("grid-2col"),
  columns: z.number().min(2).max(4).optional(),
});

/** 3.5 Curriculum / Module Breakdown */
export const curriculumBreakdownConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2000).optional(),
  modules: z.array(z.object({
    module_number: z.number(),
    module_title: z.string().max(200),
    module_description: z.string().max(2000),
    module_outcomes: z.array(z.string().max(500)).optional(),
    duration: z.string().max(100).optional(),
  })),
  layout: z.enum(["accordion", "cards", "timeline", "stacked"]).default("accordion"),
  show_duration: z.boolean().optional(),
});

/** 3.6 Features Grid */
export const featuresGridConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  subtitle: z.string().max(500).optional(),
  features: z.array(z.object({
    feature_title: z.string().max(200),
    feature_description: z.string().max(1000),
    feature_icon: mediaSchema.optional(),
  })),
  layout: z.enum(["grid-2col", "grid-3col", "grid-4col", "icon-list"]).default("grid-3col"),
  cta_button: ctaButtonSchema.optional(),
});

// =============================================================================
// CATEGORY 4: TRUST & PROOF SECTIONS
// =============================================================================

/** 4.1 Testimonials */
export const testimonialsConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  testimonials: z.array(z.object({
    quote: z.string().max(2000),
    attribution: z.string().max(200),
    context: z.string().max(300).optional(),
    avatar: mediaSchema.optional(),
  })).optional(),
  use_network_testimonials: z.boolean().default(true),
  max_items: z.number().min(1).max(20).optional(),
  featured_only: z.boolean().optional(),
  layout: z.enum(["carousel", "grid", "single-featured", "stacked"]).default("grid"),
  style: z.enum(["card", "minimal", "pullquote"]).default("card"),
});

/** 4.2 Case Study */
export const caseStudyConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  pattern_name: z.string().max(200).optional(),
  before_state: z.string().max(3000),
  turning_point: z.string().max(3000),
  after_state: z.string().max(3000),
  client_words: z.string().max(2000).optional(),
  layout: z.enum(["narrative", "before-after", "card"]).default("narrative"),
});

/** 4.3 Coach / Facilitator Bio */
export const coachBioConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  photo: mediaSchema.optional(),
  bio_text: z.string().max(5000),
  credentials: z.array(z.object({
    credential: z.string().max(300),
  })).optional(),
  personal_line: z.string().max(1000).optional(),
  layout: z.enum(["split", "centered", "card"]).default("split"),
});

/** 4.4 Social Proof Bar */
export const socialProofBarConfigSchema = z.object({
  proof_items: z.array(z.object({
    metric: z.string().max(100),
    label: z.string().max(200),
  })).optional(),
  logos: z.array(mediaSchema).optional(),
  proof_line: z.string().max(300).optional(),
  layout: z.enum(["bar", "inline"]).default("bar"),
  background_style: z.enum(["light", "dark", "transparent"]).default("dark"),
});

/** 4.5 Huma Testimonial Widget */
export const humaWidgetConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(200).optional(),
  widget_id: z.string().uuid(),
});

// =============================================================================
// CATEGORY 5: QUALIFICATION & OBJECTION SECTIONS
// =============================================================================

/** 5.1 Perfect For You If */
export const perfectForYouConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  for_items: z.array(z.object({
    statement: z.string().max(500),
  })),
  not_for_items: z.array(z.object({
    statement: z.string().max(500),
  })).optional(),
  closing_text: z.string().max(2000).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: z.enum(["two-columns", "single-column", "checklist"]).default("two-columns"),
});

/** 5.2 FAQ */
export const faqConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2000).optional(),
  faq_items: z.array(z.object({
    question: z.string().max(500),
    answer: z.string().max(3000),
    objection_type: z.enum(["time", "money", "fit", "trust", "past_failure", "social_risk", "self_sufficiency"]).optional(),
  })),
  layout: z.enum(["accordion", "stacked", "two-columns"]).default("accordion"),
  closing_text: z.string().max(2000).optional(),
});

/** 5.3 Objection Block */
export const objectionBlockConfigSchema = z.object({
  objection: z.string().max(1000),
  response: z.string().max(3000),
  reframe: z.string().max(2000).optional(),
  visual_style: z.enum(["pullquote", "card", "inline"]).default("card"),
});

// =============================================================================
// CATEGORY 6: PRICING & COMMITMENT SECTIONS
// =============================================================================

/** 6.1 Investment / Pricing */
export const investmentPricingConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(3000).optional(),
  pricing_tiers: z.array(z.object({
    tier_name: z.string().max(200),
    price: z.string().max(100),
    currency: z.string().max(10).default("EUR"),
    price_period: z.string().max(100).optional(),
    price_note: z.string().max(300).optional(),
    tier_description: z.string().max(2000).optional(),
    included_items: z.array(z.string().max(300)).optional(),
    cta_button: ctaButtonSchema.optional(),
    is_featured: z.boolean().optional(),
  })),
  comparison_note: z.string().max(2000).optional(),
  guarantee: z.string().max(2000).optional(),
  layout: z.enum(["cards-side-by-side", "single-centered", "stacked"]).default("cards-side-by-side"),
});

/** 6.2 Guarantee */
export const guaranteeConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  guarantee_text: z.string().max(3000),
  guarantee_type: z.enum(["money-back", "satisfaction", "fit-guarantee", "custom"]).default("satisfaction"),
  duration: z.string().max(100).optional(),
  icon: mediaSchema.optional(),
});

/** 6.3 Urgency / Closing */
export const urgencyClosingConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(3000),
  urgency_type: z.enum(["seats-limited", "deadline", "cohort-start", "price-increase", "custom"]).default("cohort-start"),
  countdown_target: z.string().max(100).optional(), // ISO date string
  show_countdown: z.boolean().optional(),
  seats_remaining: z.number().optional(),
  seats_total: z.number().optional(),
  cta_button: ctaButtonSchema,
});

// =============================================================================
// CATEGORY 7: FORMS & CAPTURE SECTIONS
// =============================================================================

/** 7.1 Capture Form */
export const captureFormConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  body_text: z.string().max(3000).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional(),
  })),
  submit_button_label: z.string().max(100).default("Join the waiting list"),
  opt_in_key: z.string().min(1).max(100).regex(/^[a-z0-9_-]+$/).optional(),
  opt_in_tags: z.array(z.string().min(1).max(100)).max(10).optional(),
  success_message: z.string().max(500).optional(),
  privacy_text: z.string().max(1000).optional(),
  layout: z.enum(["centered", "card", "minimal"]).default("centered"),
});

/** 7.2 Application Form */
export const applicationFormConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(3000).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional(),
  })),
  programme_summary: z.string().max(3000).optional(),
  pricing_display: z.string().max(1000).optional(),
  submit_button_label: z.string().max(100).default("Apply for the next cohort"),
  post_submit_message: z.string().max(2000).optional(),
  opt_in_key: z.string().min(1).max(100).regex(/^[a-z0-9_-]+$/).optional(),
  opt_in_tags: z.array(z.string().min(1).max(100)).max(10).optional(),
  success_message: z.string().max(500).optional(),
  layout: z.enum(["centered", "card", "split"]).default("centered"),
});

/** 7.3 Inline CTA Block */
export const inlineCtaConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(1000).optional(),
  cta_button: ctaButtonSchema,
  secondary_cta: ctaButtonSchema.optional(),
  background_style: z.enum(["light", "dark", "cream", "transparent"]).default("dark"),
  alignment: z.enum(["centered", "left"]).default("centered"),
});

// =============================================================================
// CATEGORY 8: CONFIRMATION & THANK YOU SECTIONS
// =============================================================================

/** 8.1 Confirmation Message */
export const confirmationMessageConfigSchema = z.object({
  headline: z.string().max(500),
  body_text: z.string().max(3000),
  what_happens_next: z.array(z.object({
    step_number: z.number(),
    step_description: z.string().max(500),
  })).optional(),
  icon: mediaSchema.optional(),
});

/** 8.2 Diagnostic Framing Block */
export const diagnosticFramingConfigSchema = z.object({
  action_taken: z.string().max(200),
  what_it_says: z.string().max(2000),
  what_comes_next: z.string().max(2000).optional(),
});

/** 8.3 Quick Win / Immediate Value */
export const quickWinConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(2000).optional(),
  resource: z.object({
    resource_title: z.string().max(200),
    resource_description: z.string().max(500).optional(),
    resource_url: z.string().max(1000),
    resource_type: z.enum(["pdf", "video", "article", "assessment"]),
  }).optional(),
  cta_button: ctaButtonSchema.optional(),
});

/** 8.4 Social Share */
export const socialShareConfigSchema = z.object({
  share_text: z.string().max(1000).optional(),
  platforms: z.array(z.enum(["linkedin", "twitter", "email", "copy-link"])),
  share_url: z.string().max(1000),
  layout: z.enum(["inline", "card"]).default("inline"),
});

/** 8.5 Post-Purchase Welcome */
export const postPurchaseWelcomeConfigSchema = z.object({
  headline: z.string().max(500),
  welcome_text: z.string().max(5000),
  next_steps: z.array(z.object({
    step_number: z.number(),
    step_title: z.string().max(200),
    step_description: z.string().max(500),
  })),
  community_link: z.string().max(1000).optional(),
  personal_note: z.string().max(3000).optional(),
  cta_button: ctaButtonSchema.optional(),
});

// =============================================================================
// CATEGORY 9: CONTENT & NARRATIVE SECTIONS
// =============================================================================

/** 9.1 Rich Text Block */
export const richTextConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  body_text: z.string().max(10000),
  max_width: z.enum(["narrow", "medium", "full"]).default("narrow"),
  background_style: z.enum(["light", "dark", "cream", "transparent"]).default("transparent"),
  text_alignment: z.enum(["left", "centered"]).default("left"),
});

/** 9.2 Pullquote / Highlight */
export const pullquoteConfigSchema = z.object({
  quote_text: z.string().max(2000),
  attribution: z.string().max(200).optional(),
  style: z.enum(["large-text", "bordered-left", "dark-card"]).default("bordered-left"),
  background_style: z.enum(["light", "dark", "cream"]).optional(),
});

/** 9.3 Data / Statistic Highlight */
export const dataStatisticConfigSchema = z.object({
  metric: z.string().max(100),
  metric_label: z.string().max(300),
  source: z.string().max(200).optional(),
  context_text: z.string().max(1000).optional(),
  style: z.enum(["dark-card", "inline", "large"]).default("dark-card"),
});

/** 9.4 Image Block */
export const imageBlockConfigSchema = z.object({
  image: mediaSchema,
  caption: z.string().max(500).optional(),
  layout: z.enum(["full-width", "contained", "small-centered"]).default("contained"),
});

/** 9.5 Video Block */
export const videoBlockConfigSchema = z.object({
  video_url: z.string().max(1000),
  thumbnail: mediaSchema.optional(),
  caption: z.string().max(500).optional(),
  autoplay: z.boolean().optional(),
  layout: z.enum(["full-width", "contained"]).default("contained"),
});

/** 9.6 Comparison Table */
export const comparisonTableConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  column_headers: z.array(z.string().max(200)).min(2).max(3),
  rows: z.array(z.object({
    row_label: z.string().max(200),
    column_values: z.array(z.string().max(500)),
  })),
  highlight_column: z.number().min(1).max(3).optional(),
});

// =============================================================================
// CATEGORY 10: STRUCTURAL & NAVIGATION SECTIONS
// =============================================================================

/** 10.1 Section Divider */
export const sectionDividerConfigSchema = z.object({
  divider_style: z.enum(["line", "dots", "space-only", "bird-icon"]).default("space-only"),
  spacing: z.enum(["small", "medium", "large"]).default("medium"),
});

/** 10.2 Anchor Navigation */
export const anchorNavigationConfigSchema = z.object({
  nav_items: z.array(z.object({
    label: z.string().max(100),
    anchor_id: z.string().max(100),
  })),
  style: z.enum(["sticky-top", "inline", "sidebar"]).default("sticky-top"),
  show_on_mobile: z.boolean().default(true),
});

/** 10.3 Page Header / Breadcrumb */
export const pageHeaderBreadcrumbConfigSchema = z.object({
  breadcrumb_items: z.array(z.object({
    label: z.string().max(100),
    url: z.string().max(500),
  })).optional(),
  page_title: z.string().max(200).optional(),
});

// =============================================================================
// SECTION CONFIG VALIDATOR MAP
// =============================================================================

import type { LandingSectionType } from "../types/landing-pages";

/**
 * Maps section type → Zod schema for the config JSONB.
 * Used for validation in tRPC mutations.
 */
export const sectionConfigSchemas: Record<LandingSectionType, z.ZodTypeAny> = {
  // Hero
  hero_statement: heroStatementConfigSchema,
  hero_capture_form: heroCaptureFormConfigSchema,
  hero_video: heroVideoConfigSchema,
  // Problem & Recognition
  pattern_recognition: patternRecognitionConfigSchema,
  problem_statement: problemStatementConfigSchema,
  sacred_cow_challenge: sacredCowChallengeConfigSchema,
  rome_is_burning: romeIsBurningConfigSchema,
  // Solution & Programme
  programme_overview: programmeOverviewConfigSchema,
  programme_arc: programmeArcConfigSchema,
  what_this_is_isnt: whatThisIsIsntConfigSchema,
  what_youll_experience: whatYoullExperienceConfigSchema,
  curriculum_breakdown: curriculumBreakdownConfigSchema,
  features_grid: featuresGridConfigSchema,
  // Trust & Proof
  testimonials: testimonialsConfigSchema,
  case_study: caseStudyConfigSchema,
  coach_bio: coachBioConfigSchema,
  social_proof_bar: socialProofBarConfigSchema,
  huma_widget: humaWidgetConfigSchema,
  // Qualification & Objection
  perfect_for_you: perfectForYouConfigSchema,
  faq: faqConfigSchema,
  objection_block: objectionBlockConfigSchema,
  // Pricing & Commitment
  investment_pricing: investmentPricingConfigSchema,
  guarantee: guaranteeConfigSchema,
  urgency_closing: urgencyClosingConfigSchema,
  // Forms & Capture
  capture_form: captureFormConfigSchema,
  application_form: applicationFormConfigSchema,
  inline_cta: inlineCtaConfigSchema,
  // Confirmation & Thank You
  confirmation_message: confirmationMessageConfigSchema,
  diagnostic_framing: diagnosticFramingConfigSchema,
  quick_win: quickWinConfigSchema,
  social_share: socialShareConfigSchema,
  post_purchase_welcome: postPurchaseWelcomeConfigSchema,
  // Content & Narrative
  rich_text: richTextConfigSchema,
  pullquote: pullquoteConfigSchema,
  data_statistic: dataStatisticConfigSchema,
  image_block: imageBlockConfigSchema,
  video_block: videoBlockConfigSchema,
  comparison_table: comparisonTableConfigSchema,
  // Structural & Navigation
  section_divider: sectionDividerConfigSchema,
  anchor_navigation: anchorNavigationConfigSchema,
  page_header_breadcrumb: pageHeaderBreadcrumbConfigSchema,
};
