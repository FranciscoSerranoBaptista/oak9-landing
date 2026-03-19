// src/schemas/section-configs.ts
import { z } from "zod";
var ctaButtonSchema = z.object({
  label: z.string().max(100),
  url: z.string().max(500),
  variant: z.enum(["primary", "secondary", "ghost", "text-link"]).default("primary"),
  size: z.enum(["small", "medium", "large"]).optional(),
  open_in_new_tab: z.boolean().optional()
});
var mediaSchema = z.object({
  url: z.string().max(1e3),
  alt_text: z.string().max(300).default(""),
  caption: z.string().max(500).optional()
});
var heroStatementConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5e3).optional(),
  cta_button: ctaButtonSchema.optional(),
  background_image: mediaSchema.optional(),
  background_overlay: z.object({
    color: z.string().max(20).optional(),
    opacity: z.number().min(0).max(1).optional()
  }).optional(),
  layout: z.enum(["centered", "left-aligned", "split"]).default("centered"),
  height: z.enum(["viewport", "large", "medium"]).default("large")
});
var heroCaptureFormConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5e3).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional()
  })).default([
    { field_name: "email", field_type: "email", field_label: "Email", placeholder: "Enter your email", required: true }
  ]),
  submit_button_label: z.string().max(100).default("Join the waiting list"),
  form_position: z.enum(["inline", "sidebar", "overlay"]).default("inline"),
  social_proof_line: z.string().max(300).optional(),
  background_image: mediaSchema.optional(),
  layout: z.enum(["centered", "split"]).default("centered"),
  audience_id: z.string().max(100).optional(),
  privacy_text: z.string().max(1e3).optional()
});
var heroVideoConfigSchema = z.object({
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  video_url: z.string().max(1e3),
  video_thumbnail: mediaSchema.optional(),
  video_autoplay: z.boolean().optional(),
  video_caption: z.string().max(300).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: z.enum(["centered", "split"]).default("split")
});
var patternRecognitionConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  body_text: z.string().max(5e3),
  recognition_items: z.array(z.object({
    statement: z.string().max(1e3)
  })).optional(),
  closing_line: z.string().max(1e3).optional(),
  background_style: z.enum(["light", "dark", "cream"]).default("light")
});
var problemStatementConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  body_text: z.string().max(5e3),
  contrast_items: z.array(z.object({
    surface_reality: z.string().max(500),
    underneath: z.string().max(500)
  })).optional(),
  transition_line: z.string().max(1e3).optional()
});
var sacredCowChallengeConfigSchema = z.object({
  sacred_cow: z.string().max(1e3),
  sour_milk: z.string().max(2e3),
  reframe: z.string().max(2e3),
  transition_text: z.string().max(1e3).optional(),
  visual_style: z.enum(["quote-card", "inline", "split"]).default("quote-card")
});
var romeIsBurningConfigSchema = z.object({
  headline: z.string().max(500),
  body_text: z.string().max(5e3),
  time_markers: z.array(z.object({
    timeframe: z.string().max(200),
    consequence: z.string().max(500)
  })).optional(),
  closing_line: z.string().max(1e3).optional()
});
var programmeOverviewConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  subtitle: z.string().max(500).optional(),
  body_text: z.string().max(5e3),
  key_details: z.array(z.object({
    label: z.string().max(100),
    value: z.string().max(200)
  })).optional(),
  cta_button: ctaButtonSchema.optional()
});
var programmeArcConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2e3).optional(),
  phases: z.array(z.object({
    phase_number: z.number(),
    phase_name: z.string().max(200),
    phase_description: z.string().max(1e3),
    phase_icon: mediaSchema.optional()
  })),
  layout: z.enum(["horizontal-timeline", "vertical-steps", "cards-grid"]).default("vertical-steps"),
  closing_text: z.string().max(2e3).optional()
});
var whatThisIsIsntConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  is_items: z.array(z.object({
    statement: z.string().max(500)
  })),
  is_not_items: z.array(z.object({
    statement: z.string().max(500)
  })),
  layout: z.enum(["two-columns", "alternating-rows", "single-column"]).default("two-columns"),
  closing_text: z.string().max(2e3).optional()
});
var whatYoullExperienceConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2e3).optional(),
  experience_items: z.array(z.object({
    title: z.string().max(200),
    description: z.string().max(1e3),
    icon: mediaSchema.optional()
  })),
  layout: z.enum(["grid-2col", "grid-3col", "stacked-cards", "numbered-list"]).default("grid-2col"),
  columns: z.number().min(2).max(4).optional()
});
var curriculumBreakdownConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2e3).optional(),
  modules: z.array(z.object({
    module_number: z.number(),
    module_title: z.string().max(200),
    module_description: z.string().max(2e3),
    module_outcomes: z.array(z.string().max(500)).optional(),
    duration: z.string().max(100).optional()
  })),
  layout: z.enum(["accordion", "cards", "timeline", "stacked"]).default("accordion"),
  show_duration: z.boolean().optional()
});
var featuresGridConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  subtitle: z.string().max(500).optional(),
  features: z.array(z.object({
    feature_title: z.string().max(200),
    feature_description: z.string().max(1e3),
    feature_icon: mediaSchema.optional()
  })),
  layout: z.enum(["grid-2col", "grid-3col", "grid-4col", "icon-list"]).default("grid-3col"),
  cta_button: ctaButtonSchema.optional()
});
var testimonialsConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  testimonials: z.array(z.object({
    quote: z.string().max(2e3),
    attribution: z.string().max(200),
    context: z.string().max(300).optional(),
    avatar: mediaSchema.optional()
  })).optional(),
  use_network_testimonials: z.boolean().default(true),
  max_items: z.number().min(1).max(20).optional(),
  featured_only: z.boolean().optional(),
  layout: z.enum(["carousel", "grid", "single-featured", "stacked"]).default("grid"),
  style: z.enum(["card", "minimal", "pullquote"]).default("card")
});
var caseStudyConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  pattern_name: z.string().max(200).optional(),
  before_state: z.string().max(3e3),
  turning_point: z.string().max(3e3),
  after_state: z.string().max(3e3),
  client_words: z.string().max(2e3).optional(),
  layout: z.enum(["narrative", "before-after", "card"]).default("narrative")
});
var coachBioConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  photo: mediaSchema.optional(),
  bio_text: z.string().max(5e3),
  credentials: z.array(z.object({
    credential: z.string().max(300)
  })).optional(),
  personal_line: z.string().max(1e3).optional(),
  layout: z.enum(["split", "centered", "card"]).default("split")
});
var socialProofBarConfigSchema = z.object({
  proof_items: z.array(z.object({
    metric: z.string().max(100),
    label: z.string().max(200)
  })).optional(),
  logos: z.array(mediaSchema).optional(),
  proof_line: z.string().max(300).optional(),
  layout: z.enum(["bar", "inline"]).default("bar"),
  background_style: z.enum(["light", "dark", "transparent"]).default("dark")
});
var perfectForYouConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500),
  for_items: z.array(z.object({
    statement: z.string().max(500)
  })),
  not_for_items: z.array(z.object({
    statement: z.string().max(500)
  })).optional(),
  closing_text: z.string().max(2e3).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: z.enum(["two-columns", "single-column", "checklist"]).default("two-columns")
});
var faqConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(2e3).optional(),
  faq_items: z.array(z.object({
    question: z.string().max(500),
    answer: z.string().max(3e3),
    objection_type: z.enum(["time", "money", "fit", "trust", "past_failure", "social_risk", "self_sufficiency"]).optional()
  })),
  layout: z.enum(["accordion", "stacked", "two-columns"]).default("accordion"),
  closing_text: z.string().max(2e3).optional()
});
var objectionBlockConfigSchema = z.object({
  objection: z.string().max(1e3),
  response: z.string().max(3e3),
  reframe: z.string().max(2e3).optional(),
  visual_style: z.enum(["pullquote", "card", "inline"]).default("card")
});
var investmentPricingConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(3e3).optional(),
  pricing_tiers: z.array(z.object({
    tier_name: z.string().max(200),
    price: z.string().max(100),
    currency: z.string().max(10).default("EUR"),
    price_period: z.string().max(100).optional(),
    price_note: z.string().max(300).optional(),
    tier_description: z.string().max(2e3).optional(),
    included_items: z.array(z.string().max(300)).optional(),
    cta_button: ctaButtonSchema.optional(),
    is_featured: z.boolean().optional()
  })),
  comparison_note: z.string().max(2e3).optional(),
  guarantee: z.string().max(2e3).optional(),
  layout: z.enum(["cards-side-by-side", "single-centered", "stacked"]).default("cards-side-by-side")
});
var guaranteeConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  guarantee_text: z.string().max(3e3),
  guarantee_type: z.enum(["money-back", "satisfaction", "fit-guarantee", "custom"]).default("satisfaction"),
  duration: z.string().max(100).optional(),
  icon: mediaSchema.optional()
});
var urgencyClosingConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(3e3),
  urgency_type: z.enum(["seats-limited", "deadline", "cohort-start", "price-increase", "custom"]).default("cohort-start"),
  countdown_target: z.string().max(100).optional(),
  // ISO date string
  show_countdown: z.boolean().optional(),
  seats_remaining: z.number().optional(),
  seats_total: z.number().optional(),
  cta_button: ctaButtonSchema
});
var captureFormConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  body_text: z.string().max(3e3).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional()
  })),
  submit_button_label: z.string().max(100).default("Join the waiting list"),
  audience_id: z.string().max(100).optional(),
  privacy_text: z.string().max(1e3).optional(),
  layout: z.enum(["centered", "card", "minimal"]).default("centered")
});
var applicationFormConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  headline: z.string().max(500).optional(),
  introduction: z.string().max(3e3).optional(),
  form_fields: z.array(z.object({
    field_name: z.string().max(50),
    field_type: z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: z.string().max(100),
    placeholder: z.string().max(200).optional(),
    required: z.boolean().default(false),
    options: z.array(z.string().max(200)).optional(),
    help_text: z.string().max(300).optional()
  })),
  programme_summary: z.string().max(3e3).optional(),
  pricing_display: z.string().max(1e3).optional(),
  submit_button_label: z.string().max(100).default("Apply for the next cohort"),
  post_submit_message: z.string().max(2e3).optional(),
  audience_id: z.string().max(100).optional(),
  layout: z.enum(["centered", "card", "split"]).default("centered")
});
var inlineCtaConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(1e3).optional(),
  cta_button: ctaButtonSchema,
  secondary_cta: ctaButtonSchema.optional(),
  background_style: z.enum(["light", "dark", "cream", "transparent"]).default("dark"),
  alignment: z.enum(["centered", "left"]).default("centered")
});
var confirmationMessageConfigSchema = z.object({
  headline: z.string().max(500),
  body_text: z.string().max(3e3),
  what_happens_next: z.array(z.object({
    step_number: z.number(),
    step_description: z.string().max(500)
  })).optional(),
  icon: mediaSchema.optional()
});
var diagnosticFramingConfigSchema = z.object({
  action_taken: z.string().max(200),
  what_it_says: z.string().max(2e3),
  what_comes_next: z.string().max(2e3).optional()
});
var quickWinConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  body_text: z.string().max(2e3).optional(),
  resource: z.object({
    resource_title: z.string().max(200),
    resource_description: z.string().max(500).optional(),
    resource_url: z.string().max(1e3),
    resource_type: z.enum(["pdf", "video", "article", "assessment"])
  }).optional(),
  cta_button: ctaButtonSchema.optional()
});
var socialShareConfigSchema = z.object({
  share_text: z.string().max(1e3).optional(),
  platforms: z.array(z.enum(["linkedin", "twitter", "email", "copy-link"])),
  share_url: z.string().max(1e3),
  layout: z.enum(["inline", "card"]).default("inline")
});
var postPurchaseWelcomeConfigSchema = z.object({
  headline: z.string().max(500),
  welcome_text: z.string().max(5e3),
  next_steps: z.array(z.object({
    step_number: z.number(),
    step_title: z.string().max(200),
    step_description: z.string().max(500)
  })),
  community_link: z.string().max(1e3).optional(),
  personal_note: z.string().max(3e3).optional(),
  cta_button: ctaButtonSchema.optional()
});
var richTextConfigSchema = z.object({
  section_label: z.string().max(100).optional(),
  body_text: z.string().max(1e4),
  max_width: z.enum(["narrow", "medium", "full"]).default("narrow"),
  background_style: z.enum(["light", "dark", "cream", "transparent"]).default("transparent"),
  text_alignment: z.enum(["left", "centered"]).default("left")
});
var pullquoteConfigSchema = z.object({
  quote_text: z.string().max(2e3),
  attribution: z.string().max(200).optional(),
  style: z.enum(["large-text", "bordered-left", "dark-card"]).default("bordered-left"),
  background_style: z.enum(["light", "dark", "cream"]).optional()
});
var dataStatisticConfigSchema = z.object({
  metric: z.string().max(100),
  metric_label: z.string().max(300),
  source: z.string().max(200).optional(),
  context_text: z.string().max(1e3).optional(),
  style: z.enum(["dark-card", "inline", "large"]).default("dark-card")
});
var imageBlockConfigSchema = z.object({
  image: mediaSchema,
  caption: z.string().max(500).optional(),
  layout: z.enum(["full-width", "contained", "small-centered"]).default("contained")
});
var videoBlockConfigSchema = z.object({
  video_url: z.string().max(1e3),
  thumbnail: mediaSchema.optional(),
  caption: z.string().max(500).optional(),
  autoplay: z.boolean().optional(),
  layout: z.enum(["full-width", "contained"]).default("contained")
});
var comparisonTableConfigSchema = z.object({
  headline: z.string().max(500).optional(),
  column_headers: z.array(z.string().max(200)).min(2).max(3),
  rows: z.array(z.object({
    row_label: z.string().max(200),
    column_values: z.array(z.string().max(500))
  })),
  highlight_column: z.number().min(1).max(3).optional()
});
var sectionDividerConfigSchema = z.object({
  divider_style: z.enum(["line", "dots", "space-only", "bird-icon"]).default("space-only"),
  spacing: z.enum(["small", "medium", "large"]).default("medium")
});
var anchorNavigationConfigSchema = z.object({
  nav_items: z.array(z.object({
    label: z.string().max(100),
    anchor_id: z.string().max(100)
  })),
  style: z.enum(["sticky-top", "inline", "sidebar"]).default("sticky-top"),
  show_on_mobile: z.boolean().default(true)
});
var pageHeaderBreadcrumbConfigSchema = z.object({
  breadcrumb_items: z.array(z.object({
    label: z.string().max(100),
    url: z.string().max(500)
  })).optional(),
  page_title: z.string().max(200).optional()
});
var sectionConfigSchemas = {
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
  page_header_breadcrumb: pageHeaderBreadcrumbConfigSchema
};

// src/schemas/page-settings.ts
import { z as z2 } from "zod";
var safeUrlSchema = z2.string().max(1e3).refine(
  (url) => /^(https?:\/\/|\/[^/])/.test(url),
  { message: "URL must start with https://, http://, or /" }
);
var ctaModeSchema = z2.discriminatedUnion("mode", [
  z2.object({ mode: z2.literal("external_link"), url: safeUrlSchema }),
  z2.object({ mode: z2.literal("checkout"), plan_id: z2.string().uuid() }),
  z2.object({
    mode: z2.literal("form_capture"),
    target_section_type: z2.enum(["capture_form", "application_form"]).optional()
  })
]);
var pageSettingsSchema = z2.object({
  meta_title: z2.string().max(200).optional(),
  meta_description: z2.string().max(500).optional(),
  og_image_url: z2.string().max(1e3).optional(),
  canonical_url: z2.string().max(1e3).optional(),
  robots: z2.string().max(100).optional(),
  custom_css_class: z2.string().max(100).optional(),
  cta_mode: ctaModeSchema.optional(),
  default_cta_url: z2.string().max(1e3).optional(),
  // legacy backwards compat
  waitlist_headline: z2.string().max(255).optional(),
  waitlist_description: z2.string().max(1e3).optional(),
  default_audience_id: z2.string().max(100).optional()
}).optional();
export {
  anchorNavigationConfigSchema,
  applicationFormConfigSchema,
  captureFormConfigSchema,
  caseStudyConfigSchema,
  coachBioConfigSchema,
  comparisonTableConfigSchema,
  confirmationMessageConfigSchema,
  ctaButtonSchema,
  ctaModeSchema,
  curriculumBreakdownConfigSchema,
  dataStatisticConfigSchema,
  diagnosticFramingConfigSchema,
  faqConfigSchema,
  featuresGridConfigSchema,
  guaranteeConfigSchema,
  heroCaptureFormConfigSchema,
  heroStatementConfigSchema,
  heroVideoConfigSchema,
  imageBlockConfigSchema,
  inlineCtaConfigSchema,
  investmentPricingConfigSchema,
  mediaSchema,
  objectionBlockConfigSchema,
  pageHeaderBreadcrumbConfigSchema,
  pageSettingsSchema,
  patternRecognitionConfigSchema,
  perfectForYouConfigSchema,
  postPurchaseWelcomeConfigSchema,
  problemStatementConfigSchema,
  programmeArcConfigSchema,
  programmeOverviewConfigSchema,
  pullquoteConfigSchema,
  quickWinConfigSchema,
  richTextConfigSchema,
  romeIsBurningConfigSchema,
  sacredCowChallengeConfigSchema,
  safeUrlSchema,
  sectionConfigSchemas,
  sectionDividerConfigSchema,
  socialProofBarConfigSchema,
  socialShareConfigSchema,
  testimonialsConfigSchema,
  urgencyClosingConfigSchema,
  videoBlockConfigSchema,
  whatThisIsIsntConfigSchema,
  whatYoullExperienceConfigSchema
};
