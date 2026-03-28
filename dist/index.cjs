"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  LANDING_SECTION_TYPES: () => LANDING_SECTION_TYPES,
  LandingPageEditor: () => LandingPageEditor,
  LandingPagesList: () => LandingPagesList,
  LandingPagesSection: () => LandingPagesSection,
  LandingSectionRenderer: () => LandingSectionRenderer,
  SECTION_TYPE_CATEGORIES: () => SECTION_TYPE_CATEGORIES,
  SECTION_TYPE_LABELS: () => SECTION_TYPE_LABELS,
  SectionConfigEditor: () => SectionConfigEditor,
  ServerParagraphs: () => ServerParagraphs,
  ServerSection: () => ServerSection,
  ServerSections: () => ServerSections,
  anchorNavigationConfigSchema: () => anchorNavigationConfigSchema,
  applicationFormConfigSchema: () => applicationFormConfigSchema,
  captureFormConfigSchema: () => captureFormConfigSchema,
  caseStudyConfigSchema: () => caseStudyConfigSchema,
  coachBioConfigSchema: () => coachBioConfigSchema,
  comparisonTableConfigSchema: () => comparisonTableConfigSchema,
  confirmationMessageConfigSchema: () => confirmationMessageConfigSchema,
  ctaButtonSchema: () => ctaButtonSchema,
  ctaModeSchema: () => ctaModeSchema,
  curriculumBreakdownConfigSchema: () => curriculumBreakdownConfigSchema,
  dataStatisticConfigSchema: () => dataStatisticConfigSchema,
  diagnosticFramingConfigSchema: () => diagnosticFramingConfigSchema,
  faqConfigSchema: () => faqConfigSchema,
  featuresGridConfigSchema: () => featuresGridConfigSchema,
  guaranteeConfigSchema: () => guaranteeConfigSchema,
  heroCaptureFormConfigSchema: () => heroCaptureFormConfigSchema,
  heroStatementConfigSchema: () => heroStatementConfigSchema,
  heroVideoConfigSchema: () => heroVideoConfigSchema,
  humaWidgetConfigSchema: () => humaWidgetConfigSchema,
  imageBlockConfigSchema: () => imageBlockConfigSchema,
  inlineCtaConfigSchema: () => inlineCtaConfigSchema,
  investmentPricingConfigSchema: () => investmentPricingConfigSchema,
  mediaSchema: () => mediaSchema,
  objectionBlockConfigSchema: () => objectionBlockConfigSchema,
  pageHeaderBreadcrumbConfigSchema: () => pageHeaderBreadcrumbConfigSchema,
  pageSettingsSchema: () => pageSettingsSchema,
  patternRecognitionConfigSchema: () => patternRecognitionConfigSchema,
  perfectForYouConfigSchema: () => perfectForYouConfigSchema,
  postPurchaseWelcomeConfigSchema: () => postPurchaseWelcomeConfigSchema,
  problemStatementConfigSchema: () => problemStatementConfigSchema,
  programmeArcConfigSchema: () => programmeArcConfigSchema,
  programmeOverviewConfigSchema: () => programmeOverviewConfigSchema,
  pullquoteConfigSchema: () => pullquoteConfigSchema,
  quickWinConfigSchema: () => quickWinConfigSchema,
  richTextConfigSchema: () => richTextConfigSchema,
  romeIsBurningConfigSchema: () => romeIsBurningConfigSchema,
  sacredCowChallengeConfigSchema: () => sacredCowChallengeConfigSchema,
  safeUrlSchema: () => safeUrlSchema,
  sectionConfigSchemas: () => sectionConfigSchemas,
  sectionDividerConfigSchema: () => sectionDividerConfigSchema,
  socialProofBarConfigSchema: () => socialProofBarConfigSchema,
  socialShareConfigSchema: () => socialShareConfigSchema,
  testimonialsConfigSchema: () => testimonialsConfigSchema,
  urgencyClosingConfigSchema: () => urgencyClosingConfigSchema,
  videoBlockConfigSchema: () => videoBlockConfigSchema,
  whatThisIsIsntConfigSchema: () => whatThisIsIsntConfigSchema,
  whatYoullExperienceConfigSchema: () => whatYoullExperienceConfigSchema
});
module.exports = __toCommonJS(src_exports);

// src/types/landing-pages.ts
var LANDING_SECTION_TYPES = [
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
  "page_header_breadcrumb"
];
var SECTION_TYPE_LABELS = {
  hero_statement: "Hero \u2014 Statement",
  hero_capture_form: "Hero \u2014 With Capture Form",
  hero_video: "Hero \u2014 With Video",
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
  page_header_breadcrumb: "Page Header / Breadcrumb"
};
var SECTION_TYPE_CATEGORIES = [
  { label: "Hero", types: ["hero_statement", "hero_capture_form", "hero_video"] },
  { label: "Problem & Recognition", types: ["pattern_recognition", "problem_statement", "sacred_cow_challenge", "rome_is_burning"] },
  { label: "Solution & Programme", types: ["programme_overview", "programme_arc", "what_this_is_isnt", "what_youll_experience", "curriculum_breakdown", "features_grid"] },
  { label: "Trust & Proof", types: ["testimonials", "case_study", "coach_bio", "social_proof_bar", "huma_widget"] },
  { label: "Qualification & Objection", types: ["perfect_for_you", "faq", "objection_block"] },
  { label: "Pricing & Commitment", types: ["investment_pricing", "guarantee", "urgency_closing"] },
  { label: "Forms & Capture", types: ["capture_form", "application_form", "inline_cta"] },
  { label: "Confirmation & Thank You", types: ["confirmation_message", "diagnostic_framing", "quick_win", "social_share", "post_purchase_welcome"] },
  { label: "Content & Narrative", types: ["rich_text", "pullquote", "data_statistic", "image_block", "video_block", "comparison_table"] },
  { label: "Structural & Navigation", types: ["section_divider", "anchor_navigation", "page_header_breadcrumb"] }
];

// src/schemas/section-configs.ts
var import_zod = require("zod");
var ctaButtonSchema = import_zod.z.object({
  label: import_zod.z.string().max(100),
  url: import_zod.z.string().max(500),
  variant: import_zod.z.enum(["primary", "secondary", "ghost", "text-link"]).default("primary"),
  size: import_zod.z.enum(["small", "medium", "large"]).optional(),
  open_in_new_tab: import_zod.z.boolean().optional()
});
var mediaSchema = import_zod.z.object({
  url: import_zod.z.string().max(1e3),
  alt_text: import_zod.z.string().max(300).default(""),
  caption: import_zod.z.string().max(500).optional()
});
var heroStatementConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  subtitle: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(5e3).optional(),
  cta_button: ctaButtonSchema.optional(),
  background_image: mediaSchema.optional(),
  background_overlay: import_zod.z.object({
    color: import_zod.z.string().max(20).optional(),
    opacity: import_zod.z.number().min(0).max(1).optional()
  }).optional(),
  layout: import_zod.z.enum(["centered", "left-aligned", "split"]).default("centered"),
  height: import_zod.z.enum(["viewport", "large", "medium"]).default("large")
});
var heroCaptureFormConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  subtitle: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(5e3).optional(),
  form_fields: import_zod.z.array(import_zod.z.object({
    field_name: import_zod.z.string().max(50),
    field_type: import_zod.z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: import_zod.z.string().max(100),
    placeholder: import_zod.z.string().max(200).optional(),
    required: import_zod.z.boolean().default(false),
    options: import_zod.z.array(import_zod.z.string().max(200)).optional(),
    help_text: import_zod.z.string().max(300).optional()
  })).default([
    { field_name: "email", field_type: "email", field_label: "Email", placeholder: "Enter your email", required: true }
  ]),
  submit_button_label: import_zod.z.string().max(100).default("Join the waiting list"),
  form_position: import_zod.z.enum(["inline", "sidebar", "overlay"]).default("inline"),
  social_proof_line: import_zod.z.string().max(300).optional(),
  background_image: mediaSchema.optional(),
  layout: import_zod.z.enum(["centered", "split"]).default("centered"),
  audience_id: import_zod.z.string().max(100).optional(),
  privacy_text: import_zod.z.string().max(1e3).optional()
});
var heroVideoConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  subtitle: import_zod.z.string().max(500).optional(),
  video_url: import_zod.z.string().max(1e3),
  video_thumbnail: mediaSchema.optional(),
  video_autoplay: import_zod.z.boolean().optional(),
  video_caption: import_zod.z.string().max(300).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: import_zod.z.enum(["centered", "split"]).default("split")
});
var patternRecognitionConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500),
  body_text: import_zod.z.string().max(5e3),
  recognition_items: import_zod.z.array(import_zod.z.object({
    statement: import_zod.z.string().max(1e3)
  })).optional(),
  closing_line: import_zod.z.string().max(1e3).optional(),
  background_style: import_zod.z.enum(["light", "dark", "cream"]).default("light")
});
var problemStatementConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500),
  body_text: import_zod.z.string().max(5e3),
  contrast_items: import_zod.z.array(import_zod.z.object({
    surface_reality: import_zod.z.string().max(500),
    underneath: import_zod.z.string().max(500)
  })).optional(),
  transition_line: import_zod.z.string().max(1e3).optional()
});
var sacredCowChallengeConfigSchema = import_zod.z.object({
  sacred_cow: import_zod.z.string().max(1e3),
  sour_milk: import_zod.z.string().max(2e3),
  reframe: import_zod.z.string().max(2e3),
  transition_text: import_zod.z.string().max(1e3).optional(),
  visual_style: import_zod.z.enum(["quote-card", "inline", "split"]).default("quote-card")
});
var romeIsBurningConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  body_text: import_zod.z.string().max(5e3),
  time_markers: import_zod.z.array(import_zod.z.object({
    timeframe: import_zod.z.string().max(200),
    consequence: import_zod.z.string().max(500)
  })).optional(),
  closing_line: import_zod.z.string().max(1e3).optional()
});
var programmeOverviewConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500),
  subtitle: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(5e3),
  key_details: import_zod.z.array(import_zod.z.object({
    label: import_zod.z.string().max(100),
    value: import_zod.z.string().max(200)
  })).optional(),
  cta_button: ctaButtonSchema.optional()
});
var programmeArcConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(2e3).optional(),
  phases: import_zod.z.array(import_zod.z.object({
    phase_number: import_zod.z.number(),
    phase_name: import_zod.z.string().max(200),
    phase_description: import_zod.z.string().max(1e3),
    phase_icon: mediaSchema.optional()
  })),
  layout: import_zod.z.enum(["horizontal-timeline", "vertical-steps", "cards-grid"]).default("vertical-steps"),
  closing_text: import_zod.z.string().max(2e3).optional()
});
var whatThisIsIsntConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  is_items: import_zod.z.array(import_zod.z.object({
    statement: import_zod.z.string().max(500)
  })),
  is_not_items: import_zod.z.array(import_zod.z.object({
    statement: import_zod.z.string().max(500)
  })),
  layout: import_zod.z.enum(["two-columns", "alternating-rows", "single-column"]).default("two-columns"),
  closing_text: import_zod.z.string().max(2e3).optional()
});
var whatYoullExperienceConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(2e3).optional(),
  experience_items: import_zod.z.array(import_zod.z.object({
    title: import_zod.z.string().max(200),
    description: import_zod.z.string().max(1e3),
    icon: mediaSchema.optional()
  })),
  layout: import_zod.z.enum(["grid-2col", "grid-3col", "stacked-cards", "numbered-list"]).default("grid-2col"),
  columns: import_zod.z.number().min(2).max(4).optional()
});
var curriculumBreakdownConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(2e3).optional(),
  modules: import_zod.z.array(import_zod.z.object({
    module_number: import_zod.z.number(),
    module_title: import_zod.z.string().max(200),
    module_description: import_zod.z.string().max(2e3),
    module_outcomes: import_zod.z.array(import_zod.z.string().max(500)).optional(),
    duration: import_zod.z.string().max(100).optional()
  })),
  layout: import_zod.z.enum(["accordion", "cards", "timeline", "stacked"]).default("accordion"),
  show_duration: import_zod.z.boolean().optional()
});
var featuresGridConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  subtitle: import_zod.z.string().max(500).optional(),
  features: import_zod.z.array(import_zod.z.object({
    feature_title: import_zod.z.string().max(200),
    feature_description: import_zod.z.string().max(1e3),
    feature_icon: mediaSchema.optional()
  })),
  layout: import_zod.z.enum(["grid-2col", "grid-3col", "grid-4col", "icon-list"]).default("grid-3col"),
  cta_button: ctaButtonSchema.optional()
});
var testimonialsConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  testimonials: import_zod.z.array(import_zod.z.object({
    quote: import_zod.z.string().max(2e3),
    attribution: import_zod.z.string().max(200),
    context: import_zod.z.string().max(300).optional(),
    avatar: mediaSchema.optional()
  })).optional(),
  use_network_testimonials: import_zod.z.boolean().default(true),
  max_items: import_zod.z.number().min(1).max(20).optional(),
  featured_only: import_zod.z.boolean().optional(),
  layout: import_zod.z.enum(["carousel", "grid", "single-featured", "stacked"]).default("grid"),
  style: import_zod.z.enum(["card", "minimal", "pullquote"]).default("card")
});
var caseStudyConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500),
  pattern_name: import_zod.z.string().max(200).optional(),
  before_state: import_zod.z.string().max(3e3),
  turning_point: import_zod.z.string().max(3e3),
  after_state: import_zod.z.string().max(3e3),
  client_words: import_zod.z.string().max(2e3).optional(),
  layout: import_zod.z.enum(["narrative", "before-after", "card"]).default("narrative")
});
var coachBioConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  photo: mediaSchema.optional(),
  bio_text: import_zod.z.string().max(5e3),
  credentials: import_zod.z.array(import_zod.z.object({
    credential: import_zod.z.string().max(300)
  })).optional(),
  personal_line: import_zod.z.string().max(1e3).optional(),
  layout: import_zod.z.enum(["split", "centered", "card"]).default("split")
});
var socialProofBarConfigSchema = import_zod.z.object({
  proof_items: import_zod.z.array(import_zod.z.object({
    metric: import_zod.z.string().max(100),
    label: import_zod.z.string().max(200)
  })).optional(),
  logos: import_zod.z.array(mediaSchema).optional(),
  proof_line: import_zod.z.string().max(300).optional(),
  layout: import_zod.z.enum(["bar", "inline"]).default("bar"),
  background_style: import_zod.z.enum(["light", "dark", "transparent"]).default("dark")
});
var humaWidgetConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(200).optional(),
  widget_id: import_zod.z.string().uuid()
});
var perfectForYouConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500),
  for_items: import_zod.z.array(import_zod.z.object({
    statement: import_zod.z.string().max(500)
  })),
  not_for_items: import_zod.z.array(import_zod.z.object({
    statement: import_zod.z.string().max(500)
  })).optional(),
  closing_text: import_zod.z.string().max(2e3).optional(),
  cta_button: ctaButtonSchema.optional(),
  layout: import_zod.z.enum(["two-columns", "single-column", "checklist"]).default("two-columns")
});
var faqConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(2e3).optional(),
  faq_items: import_zod.z.array(import_zod.z.object({
    question: import_zod.z.string().max(500),
    answer: import_zod.z.string().max(3e3),
    objection_type: import_zod.z.enum(["time", "money", "fit", "trust", "past_failure", "social_risk", "self_sufficiency"]).optional()
  })),
  layout: import_zod.z.enum(["accordion", "stacked", "two-columns"]).default("accordion"),
  closing_text: import_zod.z.string().max(2e3).optional()
});
var objectionBlockConfigSchema = import_zod.z.object({
  objection: import_zod.z.string().max(1e3),
  response: import_zod.z.string().max(3e3),
  reframe: import_zod.z.string().max(2e3).optional(),
  visual_style: import_zod.z.enum(["pullquote", "card", "inline"]).default("card")
});
var investmentPricingConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(3e3).optional(),
  pricing_tiers: import_zod.z.array(import_zod.z.object({
    tier_name: import_zod.z.string().max(200),
    price: import_zod.z.string().max(100),
    currency: import_zod.z.string().max(10).default("EUR"),
    price_period: import_zod.z.string().max(100).optional(),
    price_note: import_zod.z.string().max(300).optional(),
    tier_description: import_zod.z.string().max(2e3).optional(),
    included_items: import_zod.z.array(import_zod.z.string().max(300)).optional(),
    cta_button: ctaButtonSchema.optional(),
    is_featured: import_zod.z.boolean().optional()
  })),
  comparison_note: import_zod.z.string().max(2e3).optional(),
  guarantee: import_zod.z.string().max(2e3).optional(),
  layout: import_zod.z.enum(["cards-side-by-side", "single-centered", "stacked"]).default("cards-side-by-side")
});
var guaranteeConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  guarantee_text: import_zod.z.string().max(3e3),
  guarantee_type: import_zod.z.enum(["money-back", "satisfaction", "fit-guarantee", "custom"]).default("satisfaction"),
  duration: import_zod.z.string().max(100).optional(),
  icon: mediaSchema.optional()
});
var urgencyClosingConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(3e3),
  urgency_type: import_zod.z.enum(["seats-limited", "deadline", "cohort-start", "price-increase", "custom"]).default("cohort-start"),
  countdown_target: import_zod.z.string().max(100).optional(),
  // ISO date string
  show_countdown: import_zod.z.boolean().optional(),
  seats_remaining: import_zod.z.number().optional(),
  seats_total: import_zod.z.number().optional(),
  cta_button: ctaButtonSchema
});
var captureFormConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(3e3).optional(),
  form_fields: import_zod.z.array(import_zod.z.object({
    field_name: import_zod.z.string().max(50),
    field_type: import_zod.z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: import_zod.z.string().max(100),
    placeholder: import_zod.z.string().max(200).optional(),
    required: import_zod.z.boolean().default(false),
    options: import_zod.z.array(import_zod.z.string().max(200)).optional(),
    help_text: import_zod.z.string().max(300).optional()
  })),
  submit_button_label: import_zod.z.string().max(100).default("Join the waiting list"),
  audience_id: import_zod.z.string().max(100).optional(),
  privacy_text: import_zod.z.string().max(1e3).optional(),
  layout: import_zod.z.enum(["centered", "card", "minimal"]).default("centered")
});
var applicationFormConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  headline: import_zod.z.string().max(500).optional(),
  introduction: import_zod.z.string().max(3e3).optional(),
  form_fields: import_zod.z.array(import_zod.z.object({
    field_name: import_zod.z.string().max(50),
    field_type: import_zod.z.enum(["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]),
    field_label: import_zod.z.string().max(100),
    placeholder: import_zod.z.string().max(200).optional(),
    required: import_zod.z.boolean().default(false),
    options: import_zod.z.array(import_zod.z.string().max(200)).optional(),
    help_text: import_zod.z.string().max(300).optional()
  })),
  programme_summary: import_zod.z.string().max(3e3).optional(),
  pricing_display: import_zod.z.string().max(1e3).optional(),
  submit_button_label: import_zod.z.string().max(100).default("Apply for the next cohort"),
  post_submit_message: import_zod.z.string().max(2e3).optional(),
  audience_id: import_zod.z.string().max(100).optional(),
  layout: import_zod.z.enum(["centered", "card", "split"]).default("centered")
});
var inlineCtaConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(1e3).optional(),
  cta_button: ctaButtonSchema,
  secondary_cta: ctaButtonSchema.optional(),
  background_style: import_zod.z.enum(["light", "dark", "cream", "transparent"]).default("dark"),
  alignment: import_zod.z.enum(["centered", "left"]).default("centered")
});
var confirmationMessageConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  body_text: import_zod.z.string().max(3e3),
  what_happens_next: import_zod.z.array(import_zod.z.object({
    step_number: import_zod.z.number(),
    step_description: import_zod.z.string().max(500)
  })).optional(),
  icon: mediaSchema.optional()
});
var diagnosticFramingConfigSchema = import_zod.z.object({
  action_taken: import_zod.z.string().max(200),
  what_it_says: import_zod.z.string().max(2e3),
  what_comes_next: import_zod.z.string().max(2e3).optional()
});
var quickWinConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  body_text: import_zod.z.string().max(2e3).optional(),
  resource: import_zod.z.object({
    resource_title: import_zod.z.string().max(200),
    resource_description: import_zod.z.string().max(500).optional(),
    resource_url: import_zod.z.string().max(1e3),
    resource_type: import_zod.z.enum(["pdf", "video", "article", "assessment"])
  }).optional(),
  cta_button: ctaButtonSchema.optional()
});
var socialShareConfigSchema = import_zod.z.object({
  share_text: import_zod.z.string().max(1e3).optional(),
  platforms: import_zod.z.array(import_zod.z.enum(["linkedin", "twitter", "email", "copy-link"])),
  share_url: import_zod.z.string().max(1e3),
  layout: import_zod.z.enum(["inline", "card"]).default("inline")
});
var postPurchaseWelcomeConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500),
  welcome_text: import_zod.z.string().max(5e3),
  next_steps: import_zod.z.array(import_zod.z.object({
    step_number: import_zod.z.number(),
    step_title: import_zod.z.string().max(200),
    step_description: import_zod.z.string().max(500)
  })),
  community_link: import_zod.z.string().max(1e3).optional(),
  personal_note: import_zod.z.string().max(3e3).optional(),
  cta_button: ctaButtonSchema.optional()
});
var richTextConfigSchema = import_zod.z.object({
  section_label: import_zod.z.string().max(100).optional(),
  body_text: import_zod.z.string().max(1e4),
  max_width: import_zod.z.enum(["narrow", "medium", "full"]).default("narrow"),
  background_style: import_zod.z.enum(["light", "dark", "cream", "transparent"]).default("transparent"),
  text_alignment: import_zod.z.enum(["left", "centered"]).default("left")
});
var pullquoteConfigSchema = import_zod.z.object({
  quote_text: import_zod.z.string().max(2e3),
  attribution: import_zod.z.string().max(200).optional(),
  style: import_zod.z.enum(["large-text", "bordered-left", "dark-card"]).default("bordered-left"),
  background_style: import_zod.z.enum(["light", "dark", "cream"]).optional()
});
var dataStatisticConfigSchema = import_zod.z.object({
  metric: import_zod.z.string().max(100),
  metric_label: import_zod.z.string().max(300),
  source: import_zod.z.string().max(200).optional(),
  context_text: import_zod.z.string().max(1e3).optional(),
  style: import_zod.z.enum(["dark-card", "inline", "large"]).default("dark-card")
});
var imageBlockConfigSchema = import_zod.z.object({
  image: mediaSchema,
  caption: import_zod.z.string().max(500).optional(),
  layout: import_zod.z.enum(["full-width", "contained", "small-centered"]).default("contained")
});
var videoBlockConfigSchema = import_zod.z.object({
  video_url: import_zod.z.string().max(1e3),
  thumbnail: mediaSchema.optional(),
  caption: import_zod.z.string().max(500).optional(),
  autoplay: import_zod.z.boolean().optional(),
  layout: import_zod.z.enum(["full-width", "contained"]).default("contained")
});
var comparisonTableConfigSchema = import_zod.z.object({
  headline: import_zod.z.string().max(500).optional(),
  column_headers: import_zod.z.array(import_zod.z.string().max(200)).min(2).max(3),
  rows: import_zod.z.array(import_zod.z.object({
    row_label: import_zod.z.string().max(200),
    column_values: import_zod.z.array(import_zod.z.string().max(500))
  })),
  highlight_column: import_zod.z.number().min(1).max(3).optional()
});
var sectionDividerConfigSchema = import_zod.z.object({
  divider_style: import_zod.z.enum(["line", "dots", "space-only", "bird-icon"]).default("space-only"),
  spacing: import_zod.z.enum(["small", "medium", "large"]).default("medium")
});
var anchorNavigationConfigSchema = import_zod.z.object({
  nav_items: import_zod.z.array(import_zod.z.object({
    label: import_zod.z.string().max(100),
    anchor_id: import_zod.z.string().max(100)
  })),
  style: import_zod.z.enum(["sticky-top", "inline", "sidebar"]).default("sticky-top"),
  show_on_mobile: import_zod.z.boolean().default(true)
});
var pageHeaderBreadcrumbConfigSchema = import_zod.z.object({
  breadcrumb_items: import_zod.z.array(import_zod.z.object({
    label: import_zod.z.string().max(100),
    url: import_zod.z.string().max(500)
  })).optional(),
  page_title: import_zod.z.string().max(200).optional()
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
  page_header_breadcrumb: pageHeaderBreadcrumbConfigSchema
};

// src/schemas/page-settings.ts
var import_zod2 = require("zod");
var safeUrlSchema = import_zod2.z.string().max(1e3).refine(
  (url) => /^(https?:\/\/|\/[^/])/.test(url),
  { message: "URL must start with https://, http://, or /" }
);
var ctaModeSchema = import_zod2.z.discriminatedUnion("mode", [
  import_zod2.z.object({ mode: import_zod2.z.literal("external_link"), url: safeUrlSchema }),
  import_zod2.z.object({ mode: import_zod2.z.literal("checkout"), plan_id: import_zod2.z.string().uuid() }),
  import_zod2.z.object({
    mode: import_zod2.z.literal("form_capture"),
    target_section_type: import_zod2.z.enum(["capture_form", "application_form"]).optional()
  })
]);
var pageSettingsSchema = import_zod2.z.object({
  meta_title: import_zod2.z.string().max(200).optional(),
  meta_description: import_zod2.z.string().max(500).optional(),
  og_image_url: import_zod2.z.string().max(1e3).optional(),
  canonical_url: import_zod2.z.string().max(1e3).optional(),
  robots: import_zod2.z.string().max(100).optional(),
  custom_css_class: import_zod2.z.string().max(100).optional(),
  cta_mode: ctaModeSchema.optional(),
  default_cta_url: import_zod2.z.string().max(1e3).optional(),
  // legacy backwards compat
  waitlist_headline: import_zod2.z.string().max(255).optional(),
  waitlist_description: import_zod2.z.string().max(1e3).optional(),
  default_audience_id: import_zod2.z.string().max(100).optional()
}).optional();

// src/renderers/landing-hero-statement.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function LandingHeroStatement({ config }) {
  const c = config;
  const layout = c.layout || "centered";
  const height = c.height || "large";
  const overlayOpacity = c.background_overlay?.opacity ?? 0.6;
  const heightClass = height === "viewport" ? "min-h-screen" : height === "large" ? "min-h-[70vh]" : "min-h-[50vh]";
  const alignClass = layout === "left-aligned" ? "text-left items-start" : layout === "split" ? "text-left items-start md:w-1/2" : "text-center items-center";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: `relative flex overflow-hidden ${heightClass}`, role: "banner", children: [
    c.background_image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: c.background_image.url,
          alt: c.background_image.alt_text || "",
          className: "absolute inset-0 size-full object-cover",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute inset-0 bg-black",
          style: { opacity: overlayOpacity },
          "aria-hidden": "true"
        }
      )
    ] }),
    !c.background_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(135deg, var(--color-brand-700, #7c3aed) 0%, var(--color-brand-900, #4c1d95) 100%)"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `relative mx-auto flex w-full max-w-5xl flex-col justify-center px-4 py-20 ${alignClass}`, children: [
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl", children: c.headline }),
      c.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-4 max-w-2xl text-lg text-white/80 sm:text-xl", children: c.subtitle }),
      c.body_text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-4 max-w-2xl text-base text-white/70", children: c.body_text }),
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "mt-8", "aria-label": "Primary action", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          href: c.cta_button.url,
          ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
          className: "inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100",
          children: c.cta_button.label
        }
      ) })
    ] })
  ] });
}

// src/renderers/landing-hero-capture-form.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function LandingHeroCaptureForm({
  config,
  networkId,
  sectionId,
  onSubmitForm
}) {
  const c = config;
  const layout = c.layout || "centered";
  const fields = c.form_fields ?? [
    { field_name: "email", field_type: "email", field_label: "Email", required: true }
  ];
  const submitLabel = c.submit_button_label || "Join the waiting list";
  const [isPending, setIsPending] = (0, import_react.useState)(false);
  const [submitted, setSubmitted] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmitForm) return;
    const formData = new FormData(e.currentTarget);
    const data = {};
    for (const [key, val] of formData.entries()) {
      data[key] = val;
    }
    setIsPending(true);
    setError(false);
    try {
      await onSubmitForm({ networkId, sectionId, fields: data });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsPending(false);
    }
  }
  const isSplit = layout === "split";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "relative overflow-hidden", role: "banner", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(135deg, var(--color-brand-700, #7c3aed) 0%, var(--color-brand-900, #4c1d95) 100%)"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `relative mx-auto max-w-5xl px-4 py-20 ${isSplit ? "flex flex-col gap-12 md:flex-row md:items-center" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: isSplit ? "md:w-1/2" : "mb-10 text-center", children: [
        c.headline && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-5xl", children: c.headline }),
        c.subtitle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-4 max-w-xl text-lg text-white/80", children: c.subtitle }),
        c.body_text && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-3 max-w-xl text-base text-white/70", children: c.body_text }),
        c.social_proof_line && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-4 text-sm text-white/60", children: c.social_proof_line })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: isSplit ? "md:w-1/2" : "mx-auto max-w-md", children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-lg font-semibold text-white", children: "Thank you!" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-2 text-sm text-white/70", children: "We'll be in touch soon." })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "form",
        {
          onSubmit: handleSubmit,
          className: "rounded-2xl bg-white/10 p-6 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "space-y-4", children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: field.field_name, className: "mb-1 block text-sm font-medium text-white/90", children: field.field_label }),
              field.field_type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "textarea",
                {
                  id: field.field_name,
                  name: field.field_name,
                  placeholder: field.placeholder,
                  required: field.required,
                  rows: 3,
                  className: "w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                }
              ) : field.field_type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "select",
                {
                  id: field.field_name,
                  name: field.field_name,
                  required: field.required,
                  className: "w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: field.placeholder || "Select..." }),
                    field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: opt, children: opt }, opt))
                  ]
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  id: field.field_name,
                  name: field.field_name,
                  type: field.field_type || "text",
                  placeholder: field.placeholder,
                  required: field.required,
                  className: "w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                }
              )
            ] }, field.field_name)) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "submit",
                disabled: isPending,
                className: "mt-4 w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-60",
                children: isPending ? "Submitting..." : submitLabel
              }
            ),
            error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-2 text-center text-sm text-red-300", children: "Something went wrong. Please try again." }),
            c.privacy_text && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-3 text-center text-xs text-white/50", children: c.privacy_text })
          ]
        }
      ) })
    ] })
  ] });
}

// src/renderers/landing-hero-video.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function getEmbedUrl(url) {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}
function LandingHeroVideo({ config }) {
  const c = config;
  const layout = c.layout || "centered";
  const embedUrl = c.video_url ? getEmbedUrl(c.video_url) : null;
  const isSplit = layout === "split";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "relative overflow-hidden bg-zinc-900 dark:bg-surface-base", role: "banner", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `mx-auto max-w-5xl px-4 py-20 ${isSplit ? "flex flex-col gap-10 md:flex-row md:items-center" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: isSplit ? "md:w-1/2" : "mb-10 text-center", children: [
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-5xl", children: c.headline }),
      c.subtitle && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-4 max-w-xl text-lg text-zinc-400", children: c.subtitle }),
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: "mt-8", "aria-label": "Primary action", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "a",
        {
          href: c.cta_button.url,
          ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
          className: "inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
          children: c.cta_button.label
        }
      ) })
    ] }),
    embedUrl && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: isSplit ? "md:w-1/2" : "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative aspect-video overflow-hidden rounded-2xl shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "iframe",
        {
          src: embedUrl,
          title: c.headline || "Video",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          className: "absolute inset-0 size-full"
        }
      ) }),
      c.video_caption && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-2 text-center text-sm text-zinc-400", children: c.video_caption })
    ] })
  ] }) });
}

// src/renderers/landing-pattern-recognition.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function LandingPatternRecognition({ config }) {
  const c = config;
  const items = c.recognition_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "px-4 py-16", "aria-label": c.headline || "Pattern recognition", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mb-8 space-y-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.body_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: p }, i)) }),
    items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "mb-8 space-y-3", role: "list", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "li",
      {
        className: "flex items-start gap-3 text-base text-zinc-700 dark:text-zinc-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-brand-500", "aria-hidden": "true" }),
          item.statement
        ]
      },
      i
    )) }),
    c.closing_line && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-lg font-medium italic text-zinc-700 dark:text-zinc-300", children: c.closing_line })
  ] }) });
}

// src/renderers/landing-problem-statement.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function LandingProblemStatement({ config }) {
  const c = config;
  const items = c.contrast_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "The problem", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mb-10 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-10 space-y-4", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: "grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-surface-border md:grid-cols-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded-xl bg-zinc-100 p-4 dark:bg-surface-raised", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-400", children: "On the surface" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.surface_reality })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded-xl bg-brand-50 p-4 dark:bg-brand-900/20", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: "Underneath" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.underneath })
          ] })
        ]
      },
      i
    )) }),
    c.transition_line && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-lg font-medium italic text-zinc-700 dark:text-zinc-300", children: c.transition_line })
  ] });
}

// src/renderers/landing-sacred-cow.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function LandingSacredCow({ config }) {
  const c = config;
  const style = c.visual_style || "quote-card";
  if (!c.sacred_cow) return null;
  if (style === "split") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Challenge the belief", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-red-500", children: "The Belief" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-lg font-medium text-zinc-900 dark:text-white", children: c.sacred_cow })
        ] }),
        c.sour_milk && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400", children: "The Consequence" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-lg text-zinc-700 dark:text-zinc-300", children: c.sour_milk })
        ] }),
        c.reframe && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400", children: "The Reframe" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-lg font-medium text-zinc-900 dark:text-white", children: c.reframe })
        ] })
      ] }),
      c.transition_text && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mt-8 text-center text-lg text-zinc-600 dark:text-zinc-400", children: c.transition_text })
    ] });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Challenge the belief", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("blockquote", { className: "mb-4 border-l-4 border-red-400 pl-4 text-xl font-medium italic text-zinc-900 dark:text-white", children: [
        "\u201C",
        c.sacred_cow,
        "\u201D"
      ] }),
      c.sour_milk && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mb-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400", children: c.sour_milk.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: p }, i)) }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "space-y-3 text-lg font-semibold text-brand-600 dark:text-brand-400", children: c.reframe.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: p }, i)) }),
      c.transition_text && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mt-6 text-base text-zinc-600 dark:text-zinc-400", children: c.transition_text })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Challenge the belief", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400", children: "The common belief" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("blockquote", { className: "mb-6 text-2xl font-bold text-zinc-900 dark:text-white", children: [
        "\u201C",
        c.sacred_cow,
        "\u201D"
      ] }),
      c.sour_milk && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mb-6 space-y-3 text-base text-zinc-600 dark:text-zinc-400", children: c.sour_milk.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: p }, i)) }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mx-auto mb-6 h-px w-16 bg-zinc-200 dark:bg-surface-border", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "space-y-3 text-lg font-semibold text-brand-600 dark:text-brand-400", children: c.reframe.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: p }, i)) })
      ] })
    ] }),
    c.transition_text && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mt-8 text-center text-lg text-zinc-600 dark:text-zinc-400", children: c.transition_text })
  ] });
}

// src/renderers/landing-rome-burning.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function LandingRomeBurning({ config }) {
  const c = config;
  const markers = c.time_markers ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "bg-zinc-900 px-4 py-16 dark:bg-surface-base", "aria-label": c.headline || "The cost of waiting", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "mb-6 text-3xl font-bold text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mb-10 max-w-4xl text-lg leading-relaxed text-zinc-400", children: c.body_text }),
    markers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mb-10 space-y-4", children: markers.map((marker, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "div",
      {
        className: "flex items-start gap-4 rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 dark:border-surface-border dark:bg-surface-raised",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "shrink-0 rounded-lg bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400", children: marker.timeframe }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base text-zinc-300", children: marker.consequence })
        ]
      },
      i
    )) }),
    c.closing_line && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-lg font-medium text-amber-400", children: c.closing_line })
  ] }) });
}

// src/renderers/landing-programme-overview.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function LandingProgrammeOverview({ config }) {
  const c = config;
  const details = c.key_details ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Programme overview", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.subtitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mb-4 text-xl text-zinc-600 dark:text-zinc-400", children: c.subtitle }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mb-8 max-w-4xl space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.body_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: p }, i)) }),
    details.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("dl", { className: "mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: details.map((detail, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "rounded-xl border border-zinc-200 p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("dt", { className: "text-sm font-medium text-zinc-500 dark:text-zinc-400", children: detail.label }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("dd", { className: "mt-1 text-lg font-semibold text-zinc-900 dark:text-white", children: detail.value })
    ] }, i)) }),
    c.cta_button?.label && c.cta_button?.url && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "a",
      {
        href: c.cta_button.url,
        className: "inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
        children: c.cta_button.label
      }
    )
  ] });
}

// src/renderers/landing-programme-arc.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function LandingProgrammeArc({ config }) {
  const c = config;
  const phases = c.phases ?? [];
  const layout = c.layout || "vertical-steps";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Programme journey", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "mb-10 max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    phases.length > 0 && layout === "horizontal-timeline" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mb-10 overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex min-w-max gap-6", children: phases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex w-56 shrink-0 flex-col items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex size-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white", children: phase.phase_number }),
      i < phases.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "my-2 h-px w-full bg-brand-200 dark:bg-brand-800", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "mt-3 text-base font-semibold text-zinc-900 dark:text-white", children: phase.phase_name }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: phase.phase_description })
    ] }, i)) }) }),
    phases.length > 0 && layout === "vertical-steps" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "relative mb-10 space-y-8 pl-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "absolute bottom-0 left-3.5 top-0 w-px bg-zinc-200 dark:bg-surface-border", "aria-hidden": "true" }),
      phases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "absolute -left-8 flex size-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white", children: phase.phase_number }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-lg font-semibold text-zinc-900 dark:text-white", children: phase.phase_name }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "mt-1 text-base text-zinc-600 dark:text-zinc-400", children: phase.phase_description })
      ] }, i))
    ] }),
    phases.length > 0 && layout === "cards-grid" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: phases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "mb-3 inline-flex size-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: phase.phase_number }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "mb-2 text-lg font-semibold text-zinc-900 dark:text-white", children: phase.phase_name }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: phase.phase_description })
    ] }, i)) }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-lg font-medium italic text-zinc-700 dark:text-zinc-300", children: c.closing_text })
  ] });
}

// src/renderers/landing-what-this-is-isnt.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function LandingWhatThisIsIsnt({ config }) {
  const c = config;
  const isList = c.is_items ?? [];
  const isntList = c.is_not_items ?? [];
  const layout = c.layout || "two-columns";
  if (isList.length === 0 && isntList.length === 0) return null;
  if (layout === "alternating-rows") {
    const maxLen = Math.max(isList.length, isntList.length);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "What this is and isn't", children: [
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "space-y-3", children: Array.from({ length: maxLen }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid gap-3 md:grid-cols-2", children: [
        isList[i] && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-start gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: isList[i].statement })
        ] }),
        isntList[i] && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-start gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "mt-0.5 text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: isntList[i].statement })
        ] })
      ] }, i)) }),
      c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-8 text-center text-lg font-medium text-zinc-700 dark:text-zinc-300", children: c.closing_text })
    ] });
  }
  const gridClass = layout === "single-column" ? "max-w-xl mx-auto space-y-8" : "grid gap-8 md:grid-cols-2";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "What this is and isn't", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: gridClass, children: [
      isList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "mb-4 text-lg font-semibold text-green-700 dark:text-green-400", children: "What this is" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "space-y-3", role: "list", children: isList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] }),
      isntList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "mb-4 text-lg font-semibold text-red-600 dark:text-red-400", children: "What this isn't" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "space-y-3", role: "list", children: isntList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "mt-0.5 text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] })
    ] }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-8 text-center text-lg font-medium text-zinc-700 dark:text-zinc-300", children: c.closing_text })
  ] });
}

// src/renderers/landing-what-youll-experience.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function LandingWhatYoullExperience({ config }) {
  const c = config;
  const items = c.experience_items ?? [];
  const layout = c.layout || "grid-3col";
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "What you'll experience", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mx-auto mb-10 max-w-4xl text-center text-base text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    layout === "numbered-list" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ol", { className: "mx-auto max-w-4xl space-y-6", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: i + 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-lg font-semibold text-zinc-900 dark:text-white", children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-1 whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400", children: item.description })
      ] })
    ] }, i)) }) : layout === "stacked-cards" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mx-auto max-w-4xl space-y-4", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "mb-2 text-lg font-semibold text-zinc-900 dark:text-white", children: item.title }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400", children: item.description })
    ] }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: `grid gap-6 ${layout === "grid-2col" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`, children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "mb-2 text-lg font-semibold text-zinc-900 dark:text-white", children: item.title }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.description })
    ] }, i)) })
  ] });
}

// src/renderers/landing-curriculum-breakdown.tsx
var import_react2 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function LandingCurriculumBreakdown({ config }) {
  const c = config;
  const modules = c.modules ?? [];
  const layout = c.layout || "accordion";
  if (modules.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Curriculum", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    layout === "accordion" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto max-w-3xl space-y-3", children: modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AccordionModule, { module: mod, index: i }, i)) }),
    layout === "cards" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ModuleCard, { module: mod, index: i }, i)) }),
    layout === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative mx-auto max-w-3xl space-y-8 pl-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute bottom-0 left-3.5 top-0 w-px bg-zinc-200 dark:bg-surface-border", "aria-hidden": "true" }),
      modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute -left-8 flex size-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white", children: mod.number ?? i + 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-lg font-semibold text-zinc-900 dark:text-white", children: mod.title }),
        mod.duration && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-0.5 text-xs text-zinc-400", children: mod.duration }),
        mod.description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: mod.description }),
        mod.outcomes && mod.outcomes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "mt-2 space-y-1", children: mod.outcomes.map((o, j) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { className: "flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-brand-500", "aria-hidden": "true" }),
          o
        ] }, j)) })
      ] }, i))
    ] }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto max-w-3xl space-y-6", children: modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ModuleCard, { module: mod, index: i }, i)) })
  ] });
}
function AccordionModule({ module: mod, index }) {
  const [open, setOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "rounded-xl border border-zinc-200 dark:border-surface-border", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "flex w-full items-center justify-between p-4 text-left",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: mod.number ?? index + 1 }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: mod.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ml-2 shrink-0 text-zinc-400", children: open ? "\u2212" : "+" })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-surface-border", children: [
      mod.duration && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mb-2 text-xs font-medium text-zinc-400", children: mod.duration }),
      mod.description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mb-3 text-sm text-zinc-600 dark:text-zinc-400", children: mod.description }),
      mod.outcomes && mod.outcomes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "space-y-1", children: mod.outcomes.map((o, j) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { className: "flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-brand-500", "aria-hidden": "true" }),
        o
      ] }, j)) })
    ] })
  ] });
}
function ModuleCard({ module: mod, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "flex size-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: mod.number ?? index + 1 }),
      mod.duration && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-xs text-zinc-400", children: mod.duration })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "mb-2 text-lg font-semibold text-zinc-900 dark:text-white", children: mod.title }),
    mod.description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mb-3 text-sm text-zinc-600 dark:text-zinc-400", children: mod.description }),
    mod.outcomes && mod.outcomes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "space-y-1", children: mod.outcomes.map((o, j) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { className: "flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-brand-500", "aria-hidden": "true" }),
      o
    ] }, j)) })
  ] });
}

// src/renderers/landing-features-grid.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function LandingFeaturesGrid({ config }) {
  const c = config;
  const items = c.items ?? [];
  const layout = c.layout || "grid-3col";
  if (items.length === 0) return null;
  const gridClass = layout === "grid-2col" ? "grid gap-6 sm:grid-cols-2" : layout === "grid-4col" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" : layout === "icon-list" ? "mx-auto max-w-3xl space-y-4" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Features", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    layout === "icon-list" ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: gridClass, children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "size-2 rounded-full bg-brand-600 dark:bg-brand-400" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "font-semibold text-zinc-900 dark:text-white", children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: item.description })
      ] })
    ] }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: gridClass, role: "list", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", role: "listitem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "mb-2 text-lg font-semibold text-zinc-900 dark:text-white", children: item.title }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.description })
    ] }, i)) })
  ] });
}

// src/renderers/landing-testimonials-new.tsx
var import_react3 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function LandingTestimonialsNew({ config }) {
  const c = config;
  const testimonials = c.testimonials ?? [];
  const layout = c.layout || "grid";
  const style = c.style || "card";
  if (testimonials.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Testimonials", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    layout === "carousel" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Carousel, { testimonials, style }),
    layout === "single-featured" && testimonials[0] && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mx-auto max-w-4xl text-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TestimonialItem, { t: testimonials[0], style: "pullquote" }) }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mx-auto max-w-4xl space-y-6", children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TestimonialItem, { t, style }, i)) }),
    layout === "grid" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: `grid gap-6 ${testimonials.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`, children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TestimonialItem, { t, style }, i)) })
  ] });
}
function Carousel({ testimonials, style }) {
  const [index, setIndex] = (0, import_react3.useState)(0);
  const t = testimonials[index];
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TestimonialItem, { t, style }),
    testimonials.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-6 flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "button",
        {
          onClick: () => setIndex((index - 1 + testimonials.length) % testimonials.length),
          className: "rounded-full border border-zinc-300 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover",
          "aria-label": "Previous testimonial",
          children: "\u2190"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-sm text-zinc-400", children: [
        index + 1,
        " / ",
        testimonials.length
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "button",
        {
          onClick: () => setIndex((index + 1) % testimonials.length),
          className: "rounded-full border border-zinc-300 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover",
          "aria-label": "Next testimonial",
          children: "\u2192"
        }
      )
    ] })
  ] });
}
function AvatarImage({ avatar }) {
  if (!avatar?.url) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "img",
    {
      src: avatar.url,
      alt: avatar.alt_text || "",
      className: "size-10 rounded-full object-cover"
    }
  );
}
function TestimonialItem({ t, style }) {
  if (style === "pullquote") {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("blockquote", { className: "text-center", children: [
      t.avatar && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mb-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarImage, { avatar: t.avatar }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-xl font-medium italic text-zinc-900 dark:text-white", children: [
        "\u201C",
        t.quote,
        "\u201D"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("footer", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-semibold text-zinc-700 dark:text-zinc-300", children: t.attribution }),
        t.context && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: t.context })
      ] })
    ] });
  }
  if (style === "minimal") {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("blockquote", { className: "border-l-4 border-brand-500 pl-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: [
        "\u201C",
        t.quote,
        "\u201D"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("footer", { className: "mt-2 flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarImage, { avatar: t.avatar }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: t.attribution }),
          t.context && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: t.context })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("blockquote", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-base leading-relaxed text-zinc-700 dark:text-zinc-300", children: [
      "\u201C",
      t.quote,
      "\u201D"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("footer", { className: "mt-4 flex items-center gap-3 border-t border-zinc-100 pt-3 dark:border-surface-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarImage, { avatar: t.avatar }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-semibold text-zinc-900 dark:text-white", children: t.attribution }),
        t.context && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: t.context })
      ] })
    ] })
  ] });
}

// src/renderers/landing-case-study.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function LandingCaseStudy({ config }) {
  const c = config;
  const layout = c.layout || "narrative";
  if (layout === "before-after") {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Case study", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400", children: c.section_label }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      c.pattern_name && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-8 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.pattern_name }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid gap-6 md:grid-cols-2", children: [
        c.before_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400", children: "Before" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-3 text-base text-zinc-700 dark:text-zinc-300", children: c.before_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) })
        ] }),
        c.after_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400", children: "After" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-3 text-base text-zinc-700 dark:text-zinc-300", children: c.after_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) })
        ] })
      ] }),
      c.turning_point && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-6 text-base italic text-zinc-600 dark:text-zinc-400", children: c.turning_point }),
      c.client_words && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("blockquote", { className: "mt-6 border-l-4 border-brand-500 pl-4 text-lg italic text-zinc-700 dark:text-zinc-300", children: [
        "\u201C",
        c.client_words,
        "\u201D"
      ] })
    ] });
  }
  if (layout === "card") {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Case study", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400", children: c.section_label }),
      c.pattern_name && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.pattern_name }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "mb-4 text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      c.before_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-3 space-y-3 text-base text-zinc-600 dark:text-zinc-400", children: c.before_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
      c.turning_point && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-3 space-y-3 font-medium text-zinc-800 dark:text-zinc-200", children: c.turning_point.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
      c.after_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400", children: c.after_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
      c.client_words && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("blockquote", { className: "border-t border-zinc-100 pt-4 text-base italic text-zinc-700 dark:border-surface-border dark:text-zinc-300", children: [
        "\u201C",
        c.client_words,
        "\u201D"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Case study", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400", children: c.section_label }),
    c.pattern_name && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.pattern_name }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.before_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.before_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
    c.turning_point && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-4 space-y-3 text-base font-medium text-zinc-800 dark:text-zinc-200", children: c.turning_point.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
    c.after_state && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-6 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.after_state.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: p }, i)) }),
    c.client_words && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("blockquote", { className: "border-l-4 border-brand-500 pl-4 text-lg italic text-zinc-700 dark:text-zinc-300", children: [
      "\u201C",
      c.client_words,
      "\u201D"
    ] })
  ] });
}

// src/renderers/landing-coach-bio.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function LandingCoachBio({ config }) {
  const c = config;
  const layout = c.layout || "split";
  const credentials = c.credentials ?? [];
  const photoUrl = c.photo?.url;
  const photoAlt = c.photo?.alt_text || "Coach";
  if (layout === "centered") {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16 text-center", "aria-label": c.headline || "About the coach", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      photoUrl && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: photoUrl, alt: photoAlt, className: "mx-auto mb-6 size-32 rounded-full object-cover shadow-lg" }),
      c.bio_text && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.bio_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: p }, i)) }),
      credentials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "mb-4 flex flex-wrap justify-center gap-2", children: credentials.map((cred, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { className: "rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/20 dark:text-brand-400", children: cred.credential }, i)) }),
      c.personal_line && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm italic text-zinc-500 dark:text-zinc-400", children: c.personal_line })
    ] });
  }
  if (layout === "card") {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "About the coach", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("article", { className: "rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center gap-6 sm:flex-row sm:items-start", children: [
        photoUrl && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: photoUrl, alt: photoAlt, className: "size-24 shrink-0 rounded-full object-cover" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
          c.bio_text && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mb-3 space-y-2 text-base text-zinc-600 dark:text-zinc-400", children: c.bio_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: p }, i)) }),
          credentials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "mb-3 flex flex-wrap gap-2", children: credentials.map((cred, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { className: "rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-surface-hover dark:text-zinc-300", children: cred.credential }, i)) }),
          c.personal_line && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm italic text-zinc-500 dark:text-zinc-400", children: c.personal_line })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "About the coach", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "mb-6 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col gap-10 md:flex-row md:items-center", children: [
      photoUrl && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: photoUrl, alt: photoAlt, className: "size-48 rounded-2xl object-cover shadow-lg md:size-64" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
        c.bio_text && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mb-4 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.bio_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: p }, i)) }),
        credentials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "mb-4 flex flex-wrap gap-2", children: credentials.map((cred, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { className: "rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/20 dark:text-brand-400", children: cred.credential }, i)) }),
        c.personal_line && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm italic text-zinc-500 dark:text-zinc-400", children: c.personal_line })
      ] })
    ] })
  ] });
}

// src/renderers/landing-social-proof-bar.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function LandingSocialProofBar({ config }) {
  const c = config;
  const proofItems = c.proof_items ?? [];
  const logos = c.logos ?? [];
  const bg = c.background_style || "dark";
  if (proofItems.length === 0 && logos.length === 0 && !c.proof_line) return null;
  const bgClass = bg === "dark" ? "bg-zinc-900 text-white dark:bg-surface-base" : bg === "transparent" ? "" : "bg-zinc-50 dark:bg-surface-raised/50";
  const isDark = bg === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { className: `px-4 py-10 ${bgClass}`, "aria-label": "Social proof", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "mx-auto flex max-w-4xl flex-col items-center gap-8", children: [
    proofItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dl", { className: "flex flex-wrap items-center justify-center gap-8 sm:gap-12", children: proofItems.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { className: `text-2xl font-bold ${isDark ? "text-white" : "text-brand-600 dark:text-brand-400"}`, children: m.metric }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { className: `mt-1 text-sm ${isDark ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"}`, children: m.label })
    ] }, i)) }),
    logos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex flex-wrap items-center justify-center gap-6", children: logos.map((logo, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "img",
      {
        src: logo.url,
        alt: logo.alt_text || "",
        className: `h-8 object-contain ${isDark ? "opacity-60" : "opacity-50 dark:opacity-40"}`
      },
      i
    )) }),
    c.proof_line && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: `text-center text-sm ${isDark ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"}`, children: c.proof_line })
  ] }) });
}

// src/renderers/landing-huma-widget.tsx
var import_react4 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var EMBED_SCRIPT_URL = "https://www.humaproof.app/static/embed.js";
function LandingHumaWidget({ config }) {
  const c = config;
  (0, import_react4.useEffect)(() => {
    if (!c.widget_id) return;
    const existing = document.querySelector(`script[src="${EMBED_SCRIPT_URL}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    } else {
      const win = window;
      const embed = win.HumaEmbed;
      if (embed && typeof embed === "object" && typeof embed.refresh === "function") {
        embed.refresh();
      }
    }
  }, [c.widget_id]);
  if (!c.widget_id) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("section", { className: "mx-auto max-w-5xl px-6 py-12 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-zinc-400", children: "Huma widget \u2014 no widget ID configured" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "mx-auto max-w-6xl px-6 py-16", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mb-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { "data-widget-id": c.widget_id })
  ] });
}

// src/renderers/landing-perfect-for-you.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function LandingPerfectForYou({ config }) {
  const c = config;
  const forList = c.for_items ?? [];
  const notList = c.not_for_items ?? [];
  const layout = c.layout || "two-columns";
  if (forList.length === 0 && notList.length === 0) return null;
  if (layout === "checklist") {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Is this for you?", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-3", children: [
        forList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-start gap-3 rounded-lg p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "mt-0.5 text-lg text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, `y-${i}`)),
        notList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-start gap-3 rounded-lg p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "mt-0.5 text-lg text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, `n-${i}`))
      ] }),
      c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text }),
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mt-8 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "a",
        {
          href: c.cta_button.url,
          className: "inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500",
          children: c.cta_button.label
        }
      ) })
    ] });
  }
  const isSingle = layout === "single-column";
  const gridClass = isSingle ? "mx-auto max-w-xl space-y-8" : "grid gap-8 md:grid-cols-2";
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Is this for you?", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: gridClass, children: [
      forList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900/30 dark:bg-green-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "mb-4 text-lg font-semibold text-green-700 dark:text-green-400", children: "This is for you if\u2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "space-y-3", role: "list", children: forList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] }),
      notList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "rounded-2xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "mb-4 text-lg font-semibold text-red-600 dark:text-red-400", children: "This is not for you if\u2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "space-y-3", role: "list", children: notList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "mt-0.5 text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] })
    ] }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mt-8 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "a",
      {
        href: c.cta_button.url,
        className: "inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500",
        children: c.cta_button.label
      }
    ) })
  ] });
}

// src/renderers/landing-faq-new.tsx
var import_react5 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function LandingFaqNew({ config }) {
  const c = config;
  const items = c.faq_items ?? [];
  const layout = c.layout || "accordion";
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Frequently Asked Questions", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mx-auto mb-10 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    layout === "accordion" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("dl", { className: "mx-auto max-w-4xl space-y-3", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AccordionItem, { item }, i)) }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("dl", { className: "mx-auto max-w-4xl space-y-6", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("dt", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
        item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("dd", { className: "text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.answer })
    ] }, i)) }),
    layout === "two-columns" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "grid gap-6 sm:grid-cols-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "rounded-2xl border border-zinc-200 p-5 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
        item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: item.answer })
    ] }, i)) }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mt-10 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text })
  ] });
}
function AccordionItem({ item }) {
  const [open, setOpen] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "rounded-xl border border-zinc-200 dark:border-surface-border", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "flex w-full items-center justify-between p-4 text-left",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "flex items-center gap-2 pr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
            item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "shrink-0 text-zinc-400", children: open ? "\u2212" : "+" })
        ]
      }
    ) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("dd", { className: "border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-surface-border", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.answer }) })
  ] });
}

// src/renderers/landing-objection-block.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function LandingObjectionBlock({ config }) {
  const c = config;
  const style = c.visual_style || "card";
  if (!c.objection) return null;
  if (style === "pullquote") {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("blockquote", { className: "mb-6 border-l-4 border-zinc-300 pl-4 text-xl italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300", children: [
        "\u201C",
        c.objection,
        "\u201D"
      ] }),
      c.response && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.response }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-lg font-semibold text-brand-600 dark:text-brand-400", children: c.reframe })
    ] });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "mb-3 text-lg font-medium text-zinc-900 dark:text-white", children: [
        "\u201C",
        c.objection,
        "\u201D"
      ] }),
      c.response && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-3 text-base text-zinc-600 dark:text-zinc-400", children: c.response }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-base font-medium text-brand-600 dark:text-brand-400", children: c.reframe })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400", children: "Common concern" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("blockquote", { className: "mb-4 text-xl font-medium text-zinc-900 dark:text-white", children: [
      "\u201C",
      c.objection,
      "\u201D"
    ] }),
    c.response && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.response }),
    c.reframe && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mb-4 h-px bg-zinc-100 dark:bg-surface-border", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-base font-semibold text-brand-600 dark:text-brand-400", children: c.reframe })
    ] })
  ] }) });
}

// src/renderers/landing-investment-pricing.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function LandingInvestmentPricing({ config }) {
  const c = config;
  const tiers = c.pricing_tiers ?? [];
  const layout = c.layout || "cards-side-by-side";
  if (tiers.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Pricing", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mb-2 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mx-auto mb-10 max-w-4xl space-y-3 text-center text-lg text-zinc-600 dark:text-zinc-400", children: c.introduction.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: p }, i)) }),
    layout === "single-centered" && tiers[0] && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mx-auto max-w-md", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TierCard, { tier: tiers[0] }) }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mx-auto max-w-lg space-y-6", children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TierCard, { tier }, i)) }),
    layout === "cards-side-by-side" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `grid gap-6 ${tiers.length === 1 ? "mx-auto max-w-md" : tiers.length === 2 ? "mx-auto max-w-4xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`, children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TierCard, { tier }, i)) }),
    c.comparison_note && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.comparison_note }),
    c.guarantee && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.guarantee })
  ] });
}
function TierCard({ tier }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "article",
    {
      className: `relative rounded-2xl border p-8 ${tier.is_featured ? "border-brand-500 bg-white ring-2 ring-brand-500/20 dark:bg-surface-raised dark:ring-brand-400/20" : "border-zinc-200 bg-white dark:border-surface-border dark:bg-surface-raised"}`,
      children: [
        tier.is_featured && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white", children: "Recommended" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "mb-2 text-xl font-bold text-zinc-900 dark:text-white", children: tier.tier_name }),
        tier.tier_description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mb-4 text-sm text-zinc-600 dark:text-zinc-400", children: tier.tier_description }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "text-4xl font-bold text-zinc-900 dark:text-white", children: [
            tier.currency || "EUR",
            " ",
            tier.price
          ] }),
          tier.price_period && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "ml-1 text-sm text-zinc-500 dark:text-zinc-400", children: [
            "/",
            tier.price_period
          ] })
        ] }),
        tier.price_note && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mb-4 text-sm text-zinc-500 dark:text-zinc-400", children: tier.price_note }),
        tier.included_items && tier.included_items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("ul", { className: "mb-6 space-y-2", children: tier.included_items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("li", { className: "flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          item
        ] }, i)) }),
        tier.cta_button && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "a",
          {
            href: tier.cta_button.url,
            ...tier.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
            className: `block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${tier.is_featured ? "bg-brand-600 text-white hover:bg-brand-500" : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-surface-border dark:bg-surface-hover dark:text-white dark:hover:bg-surface-raised"}`,
            children: tier.cta_button.label
          }
        )
      ]
    }
  );
}

// src/renderers/landing-guarantee.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function LandingGuarantee({ config }) {
  const c = config;
  if (!c.guarantee_text) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Our guarantee", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("article", { className: "rounded-2xl border-2 border-green-200 bg-green-50/50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
    c.icon ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: c.icon.url, alt: c.icon.alt_text || "", className: "mx-auto h-12 w-auto" }) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-4 inline-flex size-12 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30", "aria-hidden": "true", children: "\u2705" }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { className: "mb-4 text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-4 space-y-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300", children: c.guarantee_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: p }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
      c.guarantee_type && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400", children: c.guarantee_type }),
      c.duration && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-surface-hover dark:text-zinc-300", children: c.duration })
    ] })
  ] }) });
}

// src/renderers/landing-urgency-closing.tsx
var import_react6 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function LandingUrgencyClosing({ config }) {
  const c = config;
  const showCountdown = c.show_countdown !== false;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("section", { className: "px-4 py-16 text-center", "aria-label": c.headline || "Limited availability", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mb-8 space-y-4 text-lg text-zinc-600 dark:text-zinc-400", children: c.body_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { children: p }, i)) }),
    c.countdown_target && showCountdown && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Countdown, { target: c.countdown_target }),
    c.seats_remaining != null && c.seats_total != null && c.seats_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mx-auto mb-2 h-3 max-w-xs overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "div",
        {
          className: "h-full rounded-full bg-brand-500 transition-all",
          style: { width: `${(c.seats_total - c.seats_remaining) / c.seats_total * 100}%` }
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: c.seats_remaining }),
        " of ",
        c.seats_total,
        " spots remaining"
      ] })
    ] }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "a",
      {
        href: c.cta_button.url,
        className: "inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500",
        children: c.cta_button.label
      }
    )
  ] }) });
}
function Countdown({ target }) {
  const [remaining, setRemaining] = (0, import_react6.useState)(calcRemaining(target));
  (0, import_react6.useEffect)(() => {
    const interval = setInterval(() => {
      setRemaining(calcRemaining(target));
    }, 1e3);
    return () => clearInterval(interval);
  }, [target]);
  if (remaining.total <= 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mb-8 text-lg font-semibold text-red-400", children: "Time's up!" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mb-8 flex justify-center gap-4", children: [
    { value: remaining.days, label: "Days" },
    { value: remaining.hours, label: "Hours" },
    { value: remaining.minutes, label: "Min" },
    { value: remaining.seconds, label: "Sec" }
  ].map((unit) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex size-16 items-center justify-center rounded-xl bg-zinc-100 text-2xl font-bold text-zinc-900 dark:bg-surface-raised dark:text-white", children: String(unit.value).padStart(2, "0") }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-1 text-xs text-zinc-500", children: unit.label })
  ] }, unit.label)) });
}
function calcRemaining(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total: diff,
    days: Math.floor(diff / (1e3 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1e3 * 60 * 60) % 24),
    minutes: Math.floor(diff / (1e3 * 60) % 60),
    seconds: Math.floor(diff / 1e3 % 60)
  };
}

// src/renderers/landing-capture-form.tsx
var import_react7 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function LandingCaptureForm({
  config,
  networkId,
  sectionId,
  onSubmitForm
}) {
  const c = config;
  const fields = c.form_fields ?? [
    { field_name: "email", field_type: "email", field_label: "Email", required: true }
  ];
  const submitLabel = c.submit_button_label || "Join the waiting list";
  const [isPending, setIsPending] = (0, import_react7.useState)(false);
  const [submitted, setSubmitted] = (0, import_react7.useState)(false);
  const [error, setError] = (0, import_react7.useState)(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmitForm) return;
    setIsPending(true);
    setError(false);
    const formData = new FormData(e.currentTarget);
    const data = {};
    for (const [key, val] of formData.entries()) {
      data[key] = val;
    }
    try {
      await onSubmitForm({ networkId, sectionId, fields: data });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsPending(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": c.headline || "Sign up", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mb-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    submitted ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-lg font-semibold text-zinc-900 dark:text-white", children: "Thank you!" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400", children: "We'll be in touch soon." })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "space-y-4", children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { htmlFor: field.field_name, className: "mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300", children: field.field_label }),
        field.help_text && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mb-1 text-xs text-zinc-400", children: field.help_text }),
        field.field_type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "textarea",
          {
            id: field.field_name,
            name: field.field_name,
            placeholder: field.placeholder,
            required: field.required,
            rows: 3,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
          }
        ) : field.field_type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          "select",
          {
            id: field.field_name,
            name: field.field_name,
            required: field.required,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "", children: field.placeholder || "Select..." }),
              field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: opt, children: opt }, opt))
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "input",
          {
            id: field.field_name,
            name: field.field_name,
            type: field.field_type || "text",
            placeholder: field.placeholder,
            required: field.required,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
          }
        )
      ] }, field.field_name)) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "button",
        {
          type: "submit",
          disabled: isPending,
          className: "mt-4 w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60",
          children: isPending ? "Submitting..." : submitLabel
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mt-2 text-center text-sm text-red-500", children: "Something went wrong. Please try again." }),
      c.privacy_text && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mt-3 text-center text-xs text-zinc-400", children: c.privacy_text })
    ] })
  ] });
}

// src/renderers/landing-application-form.tsx
var import_react8 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
function LandingApplicationForm({
  config,
  networkId,
  sectionId,
  onSubmitForm
}) {
  const c = config;
  const fields = c.form_fields ?? [
    { field_name: "name", field_type: "text", field_label: "Full Name", required: true },
    { field_name: "email", field_type: "email", field_label: "Email", required: true }
  ];
  const submitLabel = c.submit_button_label || "Apply for the next cohort";
  const [isPending, setIsPending] = (0, import_react8.useState)(false);
  const [submitted, setSubmitted] = (0, import_react8.useState)(false);
  const [error, setError] = (0, import_react8.useState)(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmitForm) return;
    setIsPending(true);
    setError(false);
    const formData = new FormData(e.currentTarget);
    const data = {};
    for (const [key, val] of formData.entries()) {
      data[key] = val;
    }
    try {
      await onSubmitForm({ networkId, sectionId, fields: data });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsPending(false);
    }
  }
  if (submitted) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": "Application submitted", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mb-4 text-4xl", "aria-hidden": "true", children: "\u2713" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "mb-2 text-2xl font-bold text-zinc-900 dark:text-white", children: "Application Received" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-base text-zinc-600 dark:text-zinc-400", children: c.post_submit_message || "Thank you for applying. We'll review your application and get back to you soon." })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": c.headline || "Apply now", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mb-6 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    (c.programme_summary || c.pricing_display) && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      c.programme_summary && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm text-zinc-700 dark:text-zinc-300", children: c.programme_summary }),
      c.pricing_display && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mt-2 text-lg font-bold text-zinc-900 dark:text-white", children: c.pricing_display })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "space-y-4", children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { htmlFor: field.field_name, className: "mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300", children: field.field_label }),
        field.help_text && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mb-1 text-xs text-zinc-400", children: field.help_text }),
        field.field_type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "textarea",
          {
            id: field.field_name,
            name: field.field_name,
            placeholder: field.placeholder,
            required: field.required,
            rows: 4,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
          }
        ) : field.field_type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "select",
          {
            id: field.field_name,
            name: field.field_name,
            required: field.required,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: "", children: field.placeholder || "Select..." }),
              field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: opt, children: opt }, opt))
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "input",
          {
            id: field.field_name,
            name: field.field_name,
            type: field.field_type || "text",
            placeholder: field.placeholder,
            required: field.required,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
          }
        )
      ] }, field.field_name)) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          type: "submit",
          disabled: isPending,
          className: "mt-4 w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60",
          children: isPending ? "Submitting..." : submitLabel
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mt-2 text-center text-sm text-red-500", children: "Something went wrong. Please try again." })
    ] })
  ] });
}

// src/renderers/landing-inline-cta.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function LandingInlineCta({ config }) {
  const c = config;
  const alignment = c.alignment || "centered";
  if (!c.headline && !c.cta_button) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("section", { className: "px-4 py-12", "aria-label": "Call to action", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `mx-auto flex max-w-4xl flex-col items-center gap-6 ${alignment === "centered" ? "text-center" : "text-left"} sm:flex-row sm:text-left`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1", children: [
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      c.body_text && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "mt-2 text-base text-zinc-600 dark:text-zinc-400", children: c.body_text })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex shrink-0 items-center gap-3", children: [
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "a",
        {
          href: c.cta_button.url,
          ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
          className: "inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
          children: c.cta_button.label
        }
      ),
      c.secondary_cta && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "a",
        {
          href: c.secondary_cta.url,
          ...c.secondary_cta.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
          className: "inline-flex items-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover",
          children: c.secondary_cta.label
        }
      )
    ] })
  ] }) });
}

// src/renderers/landing-confirmation-message.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function LandingConfirmationMessage({ config }) {
  const c = config;
  const steps = c.what_happens_next ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16 text-center", "aria-label": c.headline || "Confirmation", children: [
    c.icon ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("img", { src: c.icon.url, alt: c.icon.alt_text || "", className: "mx-auto h-16 w-auto" }) }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mb-6 text-4xl", "aria-hidden": "true", children: "\u2713" }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mb-8 text-lg text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mx-auto max-w-md text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h3", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400", children: "What happens next" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ol", { className: "space-y-4", children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: step.step_number }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: step.step_description })
      ] }, step.step_number)) })
    ] })
  ] });
}

// src/renderers/landing-diagnostic-framing.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function LandingDiagnosticFraming({ config }) {
  const c = config;
  if (!c.actionTaken && !c.whatItSays && !c.whatComesNext) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Diagnostic", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "grid gap-6 md:grid-cols-3", children: [
      c.actionTaken && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: "Action taken" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.actionTaken })
      ] }),
      c.whatItSays && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400", children: "What it says" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.whatItSays })
      ] }),
      c.whatComesNext && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400", children: "What comes next" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.whatComesNext })
      ] })
    ] })
  ] });
}

// src/renderers/landing-quick-win.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var TYPE_ICONS = {
  pdf: "\u{1F4C4}",
  video: "\u{1F3AC}",
  article: "\u{1F4DD}",
  assessment: "\u{1F4CB}"
};
function LandingQuickWin({ config }) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16", "aria-label": c.headline || "Quick win", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    c.resource && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "a",
      {
        href: c.resource.resource_url,
        className: "mb-8 block rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-brand-300 hover:bg-zinc-50 dark:border-surface-border dark:hover:border-brand-600/30 dark:hover:bg-surface-hover",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-2xl", "aria-hidden": "true", children: TYPE_ICONS[c.resource.resource_type || "article"] || "\u{1F4DD}" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h3", { className: "font-semibold text-zinc-900 dark:text-white", children: c.resource.resource_title }),
            c.resource.resource_description && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: c.resource.resource_description }),
            c.resource.resource_type && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "mt-2 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: c.resource.resource_type.toUpperCase() })
          ] })
        ] })
      }
    ),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "a",
      {
        href: c.cta_button.url,
        ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
        children: c.cta_button.label
      }
    )
  ] });
}

// src/renderers/landing-social-share.tsx
var import_react9 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var PLATFORM_LABELS = {
  twitter: "Twitter / X",
  linkedin: "LinkedIn",
  email: "Email",
  "copy-link": "Copy Link"
};
function getShareHref(platform, url, text) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "email":
      return `mailto:?subject=${encodedText}&body=${encodedUrl}`;
    default:
      return null;
  }
}
function LandingSocialShare({ config }) {
  const c = config;
  const platforms = c.platforms ?? ["twitter", "linkedin", "copy-link"];
  const shareUrl = c.share_url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = c.share_text || "";
  const [copied, setCopied] = (0, import_react9.useState)(false);
  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }).catch(() => {
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-12 text-center", "aria-label": c.headline || "Share", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { className: "mb-6 text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "flex flex-wrap items-center justify-center gap-3", children: platforms.map((platform) => {
      if (platform === "copy-link") {
        return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "button",
          {
            onClick: handleCopyLink,
            className: "rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover",
            children: copied ? "Copied!" : PLATFORM_LABELS[platform]
          },
          platform
        );
      }
      const href = getShareHref(platform, shareUrl, shareText);
      if (!href) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover",
          children: PLATFORM_LABELS[platform] || platform
        },
        platform
      );
    }) })
  ] });
}

// src/renderers/landing-post-purchase-welcome.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function LandingPostPurchaseWelcome({ config }) {
  const c = config;
  const steps = c.next_steps ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16", "aria-label": c.headline || "Welcome", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.welcome_text && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.welcome_text }),
    steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white", children: "Your next steps" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("ol", { className: "space-y-4", children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: step.step_number }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "font-medium text-zinc-900 dark:text-white", children: step.step_title }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: step.step_description })
        ] })
      ] }, step.step_number)) })
    ] }),
    c.community_link && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "a",
      {
        href: c.community_link,
        className: "mb-6 inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/30",
        children: "Join the Community"
      }
    ),
    c.personal_note && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("blockquote", { className: "mb-8 border-l-4 border-brand-500 pl-4 text-base italic text-zinc-600 dark:text-zinc-400", children: c.personal_note }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "a",
      {
        href: c.cta_button.url,
        ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
        children: c.cta_button.label
      }
    ) })
  ] });
}

// src/renderers/landing-rich-text.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function renderMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" class="text-brand-600 hover:underline dark:text-brand-400">$1</a>'
  ).replace(/^- (.*)/gm, "<li>$1</li>").replace(
    /(<li>.*<\/li>\n?)+/g,
    '<ul class="list-disc pl-5 space-y-1">$&</ul>'
  ).split("\n\n").map((p) => p.startsWith("<") ? p : `<p>${p}</p>`).join("");
}
function bgClasses(bg) {
  switch (bg) {
    case "dark":
      return "bg-zinc-900 dark:bg-surface-base";
    case "cream":
      return "bg-amber-50 dark:bg-stone-900";
    case "transparent":
      return "";
    default:
      return "bg-white dark:bg-surface-base";
  }
}
function LandingRichText({ config }) {
  const c = config;
  if (!c.body_text) return null;
  const isDark = c.background_style === "dark";
  const maxW = c.max_width === "narrow" ? "max-w-2xl" : c.max_width === "full" ? "max-w-5xl" : "max-w-3xl";
  const align = c.text_alignment === "centered" ? "text-center" : "text-left";
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("section", { className: `px-4 py-16 ${bgClasses(c.background_style)}`, "aria-label": "Content", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: `mx-auto mb-4 ${maxW} text-sm font-semibold uppercase tracking-wider ${isDark ? "text-zinc-400" : "text-brand-600 dark:text-brand-400"}`, children: c.section_label }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "div",
      {
        className: `prose mx-auto ${maxW} ${align} ${isDark ? "prose-invert text-zinc-300" : "text-zinc-700 dark:text-zinc-300"}`,
        dangerouslySetInnerHTML: { __html: renderMarkdown(c.body_text) }
      }
    )
  ] });
}

// src/renderers/landing-pullquote.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function LandingPullquote({ config }) {
  const c = config;
  const text = c.quote_text;
  if (!text) return null;
  const style = c.style || "large-text";
  if (style === "dark-card") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figure", { className: "mx-auto max-w-4xl rounded-2xl bg-zinc-900 p-8 dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("blockquote", { className: "text-xl font-medium leading-relaxed text-white sm:text-2xl", children: [
        "\u201C",
        text,
        "\u201D"
      ] }),
      c.attribution && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figcaption", { className: "mt-4 text-sm text-zinc-400", children: [
        "\u2014 ",
        c.attribution
      ] })
    ] }) });
  }
  if (style === "bordered-left") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figure", { className: "mx-auto max-w-4xl border-l-4 border-brand-500 pl-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("blockquote", { className: "text-xl font-medium text-zinc-900 dark:text-white", children: [
        "\u201C",
        text,
        "\u201D"
      ] }),
      c.attribution && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figcaption", { className: "mt-4 text-sm text-zinc-500 dark:text-zinc-400", children: [
        "\u2014 ",
        c.attribution
      ] })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figure", { className: "mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("blockquote", { className: "text-2xl font-medium leading-relaxed text-zinc-900 sm:text-3xl dark:text-white", children: [
      "\u201C",
      text,
      "\u201D"
    ] }),
    c.attribution && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("figcaption", { className: "mt-6 text-sm text-zinc-500 dark:text-zinc-400", children: [
      "\u2014 ",
      c.attribution
    ] })
  ] }) });
}

// src/renderers/landing-data-statistic.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function LandingDataStatistic({ config }) {
  const c = config;
  if (!c.metric) return null;
  const style = c.style || "large";
  if (style === "dark-card") {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("section", { className: "px-4 py-16", "aria-label": "Statistic", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-10 text-center dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-5xl font-bold text-white", children: c.metric }),
      c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-3 text-lg leading-relaxed text-zinc-300", children: c.metric_label }),
      c.context_text && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-4 text-base text-zinc-400 italic", children: c.context_text }),
      c.source && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "mt-3 text-xs text-zinc-500", children: [
        "Source: ",
        c.source
      ] })
    ] }) });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-10", "aria-label": "Statistic", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-wrap items-baseline gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-3xl font-bold text-brand-600 dark:text-brand-400", children: c.metric }),
        c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-base text-zinc-600 dark:text-zinc-400", children: c.metric_label }),
        c.source && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "text-xs text-zinc-400", children: [
          "(",
          c.source,
          ")"
        ] })
      ] }),
      c.context_text && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: c.context_text })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("section", { className: "px-4 py-16 text-center", "aria-label": "Statistic", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-5xl font-bold text-brand-600 sm:text-6xl dark:text-brand-400", children: c.metric }),
    c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-3 text-xl text-zinc-700 dark:text-zinc-300", children: c.metric_label }),
    c.context_text && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-3 text-base text-zinc-500 dark:text-zinc-400", children: c.context_text }),
    c.source && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "mt-2 text-xs text-zinc-400", children: [
      "Source: ",
      c.source
    ] })
  ] }) });
}

// src/renderers/landing-image-block.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function LandingImageBlock({ config }) {
  const c = config;
  if (!c.imageUrl) return null;
  const layout = c.layout || "contained";
  const containerClass = layout === "full-width" ? "px-0" : layout === "small-centered" ? "mx-auto max-w-xl px-4" : "mx-auto max-w-5xl px-4";
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("section", { className: `py-12 ${containerClass}`, "aria-label": c.alt || "Image", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("figure", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "img",
      {
        src: c.imageUrl,
        alt: c.alt || "",
        className: `w-full object-cover ${layout === "full-width" ? "max-h-[60vh]" : "rounded-2xl shadow-md"}`
      }
    ),
    c.caption && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("figcaption", { className: "mx-auto mt-3 max-w-3xl px-4 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.caption })
  ] }) });
}

// src/renderers/landing-video-block.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function getEmbedUrl2(url) {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}
function LandingVideoBlock({ config }) {
  const c = config;
  if (!c.videoUrl) return null;
  const embedUrl = getEmbedUrl2(c.videoUrl);
  const layout = c.layout || "contained";
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "section",
    {
      className: `py-12 ${layout === "full-width" ? "px-0" : "mx-auto max-w-5xl px-4"}`,
      "aria-label": c.title || "Video",
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: `relative aspect-video overflow-hidden ${layout === "full-width" ? "" : "rounded-2xl shadow-md"}`, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        "iframe",
        {
          src: embedUrl || void 0,
          title: c.title || "Video",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          className: "absolute inset-0 size-full"
        }
      ) })
    }
  );
}

// src/renderers/landing-comparison-table.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
function LandingComparisonTable({ config }) {
  const c = config;
  const columns = c.columns ?? [];
  const rows = c.rows ?? [];
  if (columns.length === 0 || rows.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Comparison", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("table", { className: "w-full border-collapse text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { className: "border-b border-zinc-200 pb-3 pr-4 text-sm font-semibold text-zinc-500 dark:border-surface-border dark:text-zinc-400", children: "\xA0" }),
        columns.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "th",
          {
            className: `border-b border-zinc-200 pb-3 px-4 text-sm font-semibold dark:border-surface-border ${c.highlightColumn === i ? "text-brand-600 dark:text-brand-400" : "text-zinc-700 dark:text-zinc-300"}`,
            children: col
          },
          i
        ))
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { className: "border-b border-zinc-100 dark:border-surface-border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { className: "py-3 pr-4 text-sm font-medium text-zinc-700 dark:text-zinc-300", children: row.label }),
        row.values.map((val, vi) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "td",
          {
            className: `px-4 py-3 text-sm ${c.highlightColumn === vi ? "font-semibold text-brand-600 dark:text-brand-400" : "text-zinc-600 dark:text-zinc-400"}`,
            children: val
          },
          vi
        ))
      ] }, ri)) })
    ] }) })
  ] });
}

// src/renderers/landing-section-divider.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function LandingSectionDivider({ config }) {
  const c = config;
  const style = c.style || "line";
  const spacing = c.spacing || "medium";
  const paddingClass = spacing === "small" ? "py-4" : spacing === "large" ? "py-16" : "py-8";
  if (style === "space-only") {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: paddingClass, role: "separator", "aria-hidden": "true" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: `flex items-center justify-center ${paddingClass}`, role: "separator", "aria-hidden": "true", children: [
    style === "line" && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mx-auto h-px w-full max-w-5xl bg-zinc-200 dark:bg-surface-border" }),
    style === "dots" && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" })
    ] }),
    style === "bird-icon" && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-2xl text-zinc-300 dark:text-zinc-600", children: "\u{1F426}" })
  ] });
}

// src/renderers/landing-anchor-navigation.tsx
var import_react10 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
function LandingAnchorNavigation({ config }) {
  const c = config;
  const links = c.links ?? [];
  const style = c.style || "sticky-top";
  const [activeId, setActiveId] = (0, import_react10.useState)("");
  (0, import_react10.useEffect)(() => {
    if (links.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    for (const link of links) {
      const el = document.getElementById(link.sectionId);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [links]);
  if (links.length === 0) return null;
  if (style === "sidebar") {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("nav", { className: "hidden lg:fixed lg:left-4 lg:top-1/2 lg:block lg:-translate-y-1/2", "aria-label": "Page navigation", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("ul", { className: "space-y-2", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "a",
      {
        href: `#${link.sectionId}`,
        className: `block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${activeId === link.sectionId ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400" : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"}`,
        children: link.label
      }
    ) }, link.sectionId)) }) });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("nav", { className: "mx-auto max-w-5xl px-4 py-6", "aria-label": "Page navigation", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("ul", { className: "flex flex-wrap gap-3", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "a",
      {
        href: `#${link.sectionId}`,
        className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeId === link.sectionId ? "bg-brand-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-surface-hover dark:text-zinc-300 dark:hover:bg-surface-raised"}`,
        children: link.label
      }
    ) }, link.sectionId)) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "nav",
    {
      className: "sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-surface-border dark:bg-surface-base/90",
      "aria-label": "Page navigation",
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "a",
        {
          href: `#${link.sectionId}`,
          className: `shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${activeId === link.sectionId ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"}`,
          children: link.label
        },
        link.sectionId
      )) })
    }
  );
}

// src/renderers/landing-page-header.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function LandingPageHeader({ config }) {
  const c = config;
  const breadcrumbs = c.breadcrumbs ?? [];
  if (!c.title && breadcrumbs.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("header", { className: "border-b border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-surface-border dark:bg-surface-raised/50", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "mx-auto max-w-5xl", children: [
    breadcrumbs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("nav", { "aria-label": "Breadcrumb", className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: breadcrumbs.map((crumb, i) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("li", { className: "flex items-center gap-1", children: [
      i > 0 && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "text-zinc-300 dark:text-zinc-600", "aria-hidden": "true", children: "/" }),
      crumb.url ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "a",
        {
          href: crumb.url,
          className: "text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300",
          children: crumb.label
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "text-zinc-700 dark:text-zinc-300", children: crumb.label })
    ] }, i)) }) }),
    c.title && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h1", { className: "text-2xl font-bold text-zinc-900 dark:text-white", children: c.title })
  ] }) });
}

// src/renderers/landing-section-renderer.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
function computeCtaUrl(ctaMode, defaultCtaUrl, networkId) {
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
      const _exhaustive = ctaMode;
      return defaultCtaUrl;
    }
  }
}
function resolveCtaUrls(config, resolvedUrl) {
  if (!resolvedUrl) return config;
  const isPlaceholder = (url) => !url || url.startsWith("#");
  const resolved = { ...config };
  const cta = resolved.cta_button;
  if (cta && typeof cta === "object" && isPlaceholder(cta.url)) {
    resolved.cta_button = { ...cta, url: resolvedUrl };
  }
  const secondary = resolved.secondary_cta;
  if (secondary && typeof secondary === "object" && isPlaceholder(secondary.url)) {
    resolved.secondary_cta = { ...secondary, url: resolvedUrl };
  }
  const tiers = resolved.pricing_tiers;
  if (Array.isArray(tiers) && tiers.length > 0) {
    resolved.pricing_tiers = tiers.map((tier) => {
      const btn = tier.cta_button;
      if (btn && typeof btn === "object" && isPlaceholder(btn.url)) {
        return { ...tier, cta_button: { ...btn, url: resolvedUrl } };
      }
      return tier;
    });
  }
  return resolved;
}
function sectionBgClasses(style) {
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
function LandingSectionRenderer({
  sectionType,
  config,
  networkId,
  sectionId,
  ctaMode,
  defaultCtaUrl,
  onSubmitForm
}) {
  const ctaUrl = computeCtaUrl(ctaMode, defaultCtaUrl, networkId);
  const resolvedConfig = resolveCtaUrls(config, ctaUrl);
  const formProps = {
    config: resolvedConfig,
    networkId: networkId ?? "",
    sectionId: sectionId ?? "",
    onSubmitForm
  };
  const anchorId = sectionType.replace(/_/g, "-");
  const bg = resolvedConfig.background_style;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { id: anchorId, className: sectionBgClasses(bg), children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(SectionContent, { sectionType, config: resolvedConfig, formProps }) });
}
function SectionContent({
  sectionType,
  config,
  formProps
}) {
  switch (sectionType) {
    case "hero_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingHeroStatement, { config });
    case "hero_capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingHeroCaptureForm, { ...formProps });
    case "hero_video":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingHeroVideo, { config });
    case "pattern_recognition":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingPatternRecognition, { config });
    case "problem_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingProblemStatement, { config });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingSacredCow, { config });
    case "rome_is_burning":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingRomeBurning, { config });
    case "programme_overview":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingProgrammeOverview, { config });
    case "programme_arc":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingProgrammeArc, { config });
    case "what_this_is_isnt":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingWhatThisIsIsnt, { config });
    case "what_youll_experience":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingWhatYoullExperience, { config });
    case "curriculum_breakdown":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingCurriculumBreakdown, { config });
    case "features_grid":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingFeaturesGrid, { config });
    case "testimonials":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingTestimonialsNew, { config });
    case "case_study":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingCaseStudy, { config });
    case "coach_bio":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingCoachBio, { config });
    case "social_proof_bar":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingSocialProofBar, { config });
    case "huma_widget":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingHumaWidget, { config });
    case "perfect_for_you":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingPerfectForYou, { config });
    case "faq":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingFaqNew, { config });
    case "objection_block":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingObjectionBlock, { config });
    case "investment_pricing":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingInvestmentPricing, { config });
    case "guarantee":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingGuarantee, { config });
    case "urgency_closing":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingUrgencyClosing, { config });
    case "capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingCaptureForm, { ...formProps });
    case "application_form":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingApplicationForm, { ...formProps });
    case "inline_cta":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingInlineCta, { config });
    case "confirmation_message":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingConfirmationMessage, { config });
    case "diagnostic_framing":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingDiagnosticFraming, { config });
    case "quick_win":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingQuickWin, { config });
    case "social_share":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingSocialShare, { config });
    case "post_purchase_welcome":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingPostPurchaseWelcome, { config });
    case "rich_text":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingRichText, { config });
    case "pullquote":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingPullquote, { config });
    case "data_statistic":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingDataStatistic, { config });
    case "image_block":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingImageBlock, { config });
    case "video_block":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingVideoBlock, { config });
    case "comparison_table":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingComparisonTable, { config });
    case "section_divider":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingSectionDivider, { config });
    case "anchor_navigation":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingAnchorNavigation, { config });
    case "page_header_breadcrumb":
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LandingPageHeader, { config });
    default:
      return null;
  }
}

// src/editors/landing-page-editor.tsx
var import_react36 = require("react");
var import_core = require("@dnd-kit/core");
var import_sortable = require("@dnd-kit/sortable");
var import_utilities = require("@dnd-kit/utilities");
var import_react37 = require("@phosphor-icons/react");
var import_react38 = require("@headlessui/react");

// src/editors/config-editors/image-url-field.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");

// src/editors/config-editors/hero-editor.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");

// src/editors/config-editors/features-editor.tsx
var import_react11 = require("@phosphor-icons/react");
var import_jsx_runtime45 = require("react/jsx-runtime");

// src/editors/config-editors/video-editor.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");

// src/editors/config-editors/faq-editor.tsx
var import_react12 = require("@phosphor-icons/react");
var import_jsx_runtime47 = require("react/jsx-runtime");
var INPUT = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
var LABEL = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";
var OBJECTION_TYPES = [
  { value: "", label: "None" },
  { value: "time", label: "Time" },
  { value: "money", label: "Money" },
  { value: "fit", label: "Fit" },
  { value: "trust", label: "Trust" },
  { value: "past_failure", label: "Past Failure" },
  { value: "social_risk", label: "Social Risk" },
  { value: "self_sufficiency", label: "Self-Sufficiency" }
];
function FaqEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.faq_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT,
          placeholder: "e.g. Common Questions"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT,
          placeholder: "Frequently Asked Questions"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "textarea",
        {
          value: c.introduction ?? "",
          onChange: (e) => onChange({ ...config, introduction: e.target.value }),
          className: INPUT,
          rows: 2,
          placeholder: "Frame questions as positive buyer traits..."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Questions" }),
      items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Q&A ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                const updated = items.filter((_, j) => j !== i);
                onChange({ ...config, faq_items: updated });
              },
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react12.Trash, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "input",
          {
            value: item.question,
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], question: e.target.value };
              onChange({ ...config, faq_items: updated });
            },
            placeholder: "Question",
            className: `mb-2 ${INPUT}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "textarea",
          {
            value: item.answer,
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], answer: e.target.value };
              onChange({ ...config, faq_items: updated });
            },
            placeholder: "Answer",
            rows: 2,
            className: `mb-2 ${INPUT}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "select",
          {
            value: item.objection_type ?? "",
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], objection_type: e.target.value || void 0 };
              onChange({ ...config, faq_items: updated });
            },
            className: INPUT,
            children: OBJECTION_TYPES.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
          }
        )
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            faq_items: [...items, { question: "", answer: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react12.Plus, { className: "size-3.5" }),
            " Add Q&A"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
        "select",
        {
          value: c.layout ?? "accordion",
          onChange: (e) => onChange({ ...config, layout: e.target.value }),
          className: INPUT,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "accordion", children: "Accordion" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "stacked", children: "Stacked" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "two-columns", children: "Two Columns" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: LABEL, children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "textarea",
        {
          value: c.closing_text ?? "",
          onChange: (e) => onChange({ ...config, closing_text: e.target.value }),
          className: INPUT,
          rows: 2
        }
      )
    ] })
  ] });
}

// src/editors/config-editors/stats-editor.tsx
var import_react13 = require("@phosphor-icons/react");
var import_jsx_runtime48 = require("react/jsx-runtime");

// src/editors/config-editors/about-editor.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");

// src/editors/config-editors/testimonials-editor.tsx
var import_react14 = require("@phosphor-icons/react");
var import_jsx_runtime50 = require("react/jsx-runtime");
var INPUT2 = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
var LABEL2 = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";
function TestimonialsEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.testimonials ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT2
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT2,
          placeholder: "What People Are Saying"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "select",
          {
            value: c.layout ?? "grid",
            onChange: (e) => onChange({ ...config, layout: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "carousel", children: "Carousel" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "grid", children: "Grid" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "single-featured", children: "Single Featured" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "stacked", children: "Stacked" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "select",
          {
            value: c.style ?? "card",
            onChange: (e) => onChange({ ...config, style: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "card", children: "Card" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "minimal", children: "Minimal" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "pullquote", children: "Pullquote" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "input",
        {
          type: "checkbox",
          checked: c.use_network_testimonials ?? true,
          onChange: (e) => onChange({ ...config, use_network_testimonials: e.target.checked }),
          className: "rounded border-zinc-300 dark:border-zinc-600"
        }
      ),
      "Use network testimonials from database"
    ] }),
    c.use_network_testimonials !== false && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Max Items" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "input",
          {
            type: "number",
            min: 1,
            max: 20,
            value: c.max_items ?? 6,
            onChange: (e) => onChange({ ...config, max_items: parseInt(e.target.value) || 6 }),
            className: INPUT2
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("label", { className: "flex items-center gap-2 pt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "input",
          {
            type: "checkbox",
            checked: c.featured_only ?? false,
            onChange: (e) => onChange({ ...config, featured_only: e.target.checked }),
            className: "rounded border-zinc-300 dark:border-zinc-600"
          }
        ),
        "Featured only"
      ] })
    ] }),
    c.use_network_testimonials === false && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: LABEL2, children: "Testimonials" }),
      items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Testimonial ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onChange({ ...config, testimonials: items.filter((_, j) => j !== i) }),
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react14.Trash, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "textarea",
          {
            value: item.quote,
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], quote: e.target.value };
              onChange({ ...config, testimonials: updated });
            },
            placeholder: "Quote",
            rows: 2,
            className: `mb-2 ${INPUT2}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "input",
          {
            value: item.attribution,
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], attribution: e.target.value };
              onChange({ ...config, testimonials: updated });
            },
            placeholder: "Attribution (e.g. Director, Financial Services)",
            className: `mb-2 ${INPUT2}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "input",
          {
            value: item.context ?? "",
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], context: e.target.value };
              onChange({ ...config, testimonials: updated });
            },
            placeholder: "Context (optional)",
            className: INPUT2
          }
        )
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            testimonials: [...items, { quote: "", attribution: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react14.Plus, { className: "size-3.5" }),
            " Add Testimonial"
          ]
        }
      )
    ] })
  ] });
}

// src/editors/config-editors/cta-banner-editor.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");

// src/editors/config-editors/hero-statement-editor.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
function HeroStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "left-aligned", children: "Left Aligned" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "split", children: "Split" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Height" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("select", { value: c.height ?? "large", onChange: (e) => onChange({ ...config, height: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "viewport", children: "Viewport" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "large", children: "Large" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("option", { value: "medium", children: "Medium" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/hero-capture-form-editor.tsx
var import_react15 = require("@phosphor-icons/react");
var import_jsx_runtime53 = require("react/jsx-runtime");
function HeroCaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react15.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react15.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Sign Up" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Position" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("select", { value: c.form_position ?? "inline", onChange: (e) => onChange({ ...config, form_position: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "sidebar", children: "Sidebar" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "overlay", children: "Overlay" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Social Proof Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { value: c.social_proof_line ?? "", onChange: (e) => onChange({ ...config, social_proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Join 500+ professionals..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/hero-video-editor.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
function HeroVideoEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { value: c.video_caption ?? "", onChange: (e) => onChange({ ...config, video_caption: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pattern-recognition-editor.tsx
var import_react16 = require("@phosphor-icons/react");
var import_jsx_runtime55 = require("react/jsx-runtime");
function PatternRecognitionEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.recognition_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Recognition Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], statement: e.target.value };
          onChange({ ...config, recognition_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Recognition statement..." }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_react16.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: [...items, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_react16.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("option", { value: "cream", children: "Cream" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/problem-statement-editor.tsx
var import_react17 = require("@phosphor-icons/react");
var import_jsx_runtime56 = require("react/jsx-runtime");
function ProblemStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.contrast_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Contrast Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Contrast ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react17.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("input", { placeholder: "Surface reality", value: item.surface_reality ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], surface_reality: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("input", { placeholder: "Underneath", value: item.underneath ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], underneath: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: [...items, { surface_reality: "", underneath: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react17.Plus, { className: "size-3" }),
        " Add Contrast"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("textarea", { value: c.transition_line ?? "", onChange: (e) => onChange({ ...config, transition_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/sacred-cow-editor.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
function SacredCowEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sacred Cow" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("textarea", { value: c.sacred_cow ?? "", onChange: (e) => onChange({ ...config, sacred_cow: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The commonly held belief..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sour Milk" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("textarea", { value: c.sour_milk ?? "", onChange: (e) => onChange({ ...config, sour_milk: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Why it no longer holds..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The new perspective..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("textarea", { value: c.transition_text ?? "", onChange: (e) => onChange({ ...config, transition_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("select", { value: c.visual_style ?? "quote-card", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("option", { value: "quote-card", children: "Quote Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rome-burning-editor.tsx
var import_react18 = require("@phosphor-icons/react");
var import_jsx_runtime58 = require("react/jsx-runtime");
function RomeBurningEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.time_markers ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Time Markers" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Marker ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { type: "button", onClick: () => onChange({ ...config, time_markers: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react18.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("input", { placeholder: "Timeframe (e.g. 6 months)", value: item.timeframe ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], timeframe: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("input", { placeholder: "Consequence", value: item.consequence ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], consequence: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, time_markers: [...items, { timeframe: "", consequence: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react18.Plus, { className: "size-3" }),
        " Add Marker"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/programme-overview-editor.tsx
var import_react19 = require("@phosphor-icons/react");
var import_jsx_runtime59 = require("react/jsx-runtime");
function ProgrammeOverviewEditor({
  config,
  onChange
}) {
  const c = config;
  const details = c.key_details ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Key Details" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "space-y-2", children: details.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { placeholder: "Value", value: item.value ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], value: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { type: "button", onClick: () => onChange({ ...config, key_details: details.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react19.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, key_details: [...details, { label: "", value: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react19.Plus, { className: "size-3" }),
        " Add Detail"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/programme-arc-editor.tsx
var import_react20 = require("@phosphor-icons/react");
var import_jsx_runtime60 = require("react/jsx-runtime");
function ProgrammeArcEditor({
  config,
  onChange
}) {
  const c = config;
  const phases = c.phases ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Phases" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "space-y-2", children: phases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Phase ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { type: "button", onClick: () => onChange({ ...config, phases: phases.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react20.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "number", placeholder: "Phase #", value: phase.phase_number ?? i + 1, onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { placeholder: "Phase name", value: phase.phase_name ?? "", onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_name: e.target.value };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("textarea", { placeholder: "Phase description", value: phase.phase_description ?? "", onChange: (e) => {
          const u = [...phases];
          u[i] = { ...u[i], phase_description: e.target.value };
          onChange({ ...config, phases: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, phases: [...phases, { phase_number: phases.length + 1, phase_name: "", phase_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react20.Plus, { className: "size-3" }),
        " Add Phase"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("select", { value: c.layout ?? "horizontal-timeline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("option", { value: "horizontal-timeline", children: "Horizontal Timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("option", { value: "vertical-steps", children: "Vertical Steps" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("option", { value: "cards-grid", children: "Cards Grid" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-this-is-isnt-editor.tsx
var import_react21 = require("@phosphor-icons/react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function WhatThisIsIsntEditor({
  config,
  onChange
}) {
  const c = config;
  const isItems = c.is_items ?? [];
  const isNotItems = c.is_not_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This IS..." }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "space-y-2", children: isItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is..." }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { type: "button", onClick: () => onChange({ ...config, is_items: isItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react21.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, is_items: [...isItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react21.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This is NOT..." }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "space-y-2", children: isNotItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isNotItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_not_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not..." }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: isNotItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react21.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: [...isNotItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react21.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("option", { value: "alternating-rows", children: "Alternating Rows" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("option", { value: "single-column", children: "Single Column" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-youll-experience-editor.tsx
var import_react22 = require("@phosphor-icons/react");
var import_jsx_runtime62 = require("react/jsx-runtime");
function WhatYoullExperienceEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.experience_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Experience Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Item ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("button", { type: "button", onClick: () => onChange({ ...config, experience_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react22.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("input", { placeholder: "Title", value: item.title ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], title: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("input", { placeholder: "Description", value: item.description ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], description: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, experience_items: [...items, { title: "", description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react22.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("select", { value: c.layout ?? "grid-2col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("option", { value: "grid-2col", children: "Grid 2 Col" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("option", { value: "grid-3col", children: "Grid 3 Col" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("option", { value: "stacked-cards", children: "Stacked Cards" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("option", { value: "numbered-list", children: "Numbered List" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Columns (2-4)" }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("input", { type: "number", min: 2, max: 4, value: c.columns ?? 2, onChange: (e) => onChange({ ...config, columns: parseInt(e.target.value) || 2 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/curriculum-breakdown-editor.tsx
var import_react23 = require("@phosphor-icons/react");
var import_jsx_runtime63 = require("react/jsx-runtime");
function CurriculumBreakdownEditor({
  config,
  onChange
}) {
  const c = config;
  const modules = c.modules ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Modules" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "space-y-2", children: modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Module ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("button", { type: "button", onClick: () => onChange({ ...config, modules: modules.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react23.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { type: "number", placeholder: "Module #", value: mod.module_number ?? i + 1, onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { placeholder: "Title", value: mod.module_title ?? "", onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_title: e.target.value };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("textarea", { placeholder: "Description", value: mod.module_description ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_description: e.target.value };
          onChange({ ...config, modules: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { placeholder: "Outcomes (comma-separated)", value: mod.module_outcomes ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_outcomes: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { placeholder: "Duration (e.g. 2 weeks)", value: mod.duration ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], duration: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, modules: [...modules, { module_number: modules.length + 1, module_title: "", module_description: "", module_outcomes: "", duration: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react23.Plus, { className: "size-3" }),
        " Add Module"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("select", { value: c.layout ?? "accordion", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("option", { value: "accordion", children: "Accordion" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("option", { value: "cards", children: "Cards" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("option", { value: "timeline", children: "Timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("option", { value: "stacked", children: "Stacked" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { type: "checkbox", checked: c.show_duration ?? false, onChange: (e) => onChange({ ...config, show_duration: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Duration"
    ] })
  ] });
}

// src/editors/config-editors/features-grid-editor.tsx
var import_react24 = require("@phosphor-icons/react");
var import_jsx_runtime64 = require("react/jsx-runtime");
function FeaturesGridEditor({
  config,
  onChange
}) {
  const c = config;
  const features = c.features ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Features" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "space-y-2", children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Feature ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("button", { type: "button", onClick: () => onChange({ ...config, features: features.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react24.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { placeholder: "Title", value: f.feature_title ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_title: e.target.value };
          onChange({ ...config, features: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { placeholder: "Description", value: f.feature_description ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_description: e.target.value };
          onChange({ ...config, features: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, features: [...features, { feature_title: "", feature_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react24.Plus, { className: "size-3" }),
        " Add Feature"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("select", { value: c.layout ?? "grid-3col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "grid-2col", children: "Grid 2 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "grid-3col", children: "Grid 3 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "grid-4col", children: "Grid 4 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "icon-list", children: "Icon List" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/case-study-editor.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
function CaseStudyEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pattern Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("input", { value: c.pattern_name ?? "", onChange: (e) => onChange({ ...config, pattern_name: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Before State" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("textarea", { value: c.before_state ?? "", onChange: (e) => onChange({ ...config, before_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Turning Point" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("textarea", { value: c.turning_point ?? "", onChange: (e) => onChange({ ...config, turning_point: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "After State" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("textarea", { value: c.after_state ?? "", onChange: (e) => onChange({ ...config, after_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Client Words" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("textarea", { value: c.client_words ?? "", onChange: (e) => onChange({ ...config, client_words: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("select", { value: c.layout ?? "narrative", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("option", { value: "narrative", children: "Narrative" }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("option", { value: "before-after", children: "Before / After" }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/coach-bio-editor.tsx
var import_react25 = require("@phosphor-icons/react");
var import_jsx_runtime66 = require("react/jsx-runtime");
function CoachBioEditor({
  config,
  onChange
}) {
  const c = config;
  const photo = c.photo ?? {};
  const creds = c.credentials ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Photo" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("input", { placeholder: "Image URL", value: photo.url ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("input", { placeholder: "Alt text", value: photo.alt_text ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Bio Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("textarea", { value: c.bio_text ?? "", onChange: (e) => onChange({ ...config, bio_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "space-y-2", children: creds.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("input", { value: item.credential ?? "", onChange: (e) => {
          const u = [...creds];
          u[i] = { credential: e.target.value };
          onChange({ ...config, credentials: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Credential..." }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("button", { type: "button", onClick: () => onChange({ ...config, credentials: creds.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react25.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, credentials: [...creds, { credential: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react25.Plus, { className: "size-3" }),
        " Add Credential"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("textarea", { value: c.personal_line ?? "", onChange: (e) => onChange({ ...config, personal_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("select", { value: c.layout ?? "split", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("option", { value: "split", children: "Split" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-proof-bar-editor.tsx
var import_react26 = require("@phosphor-icons/react");
var import_jsx_runtime67 = require("react/jsx-runtime");
function SocialProofBarEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.proof_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("input", { placeholder: "Metric (e.g. 500+)", value: item.metric ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], metric: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "w-24 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("button", { type: "button", onClick: () => onChange({ ...config, proof_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react26.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, proof_items: [...items, { metric: "", label: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react26.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("input", { value: c.proof_line ?? "", onChange: (e) => onChange({ ...config, proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Trusted by 500+ professionals" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("select", { value: c.layout ?? "bar", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("option", { value: "bar", children: "Bar" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("option", { value: "inline", children: "Inline" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/huma-widget-editor.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
function HumaWidgetEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        "Widget ID ",
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "input",
        {
          type: "text",
          value: c.widget_id ?? "",
          onChange: (e) => onChange({ ...config, widget_id: e.target.value }),
          placeholder: "e.g. e40542b8-d50c-46f3-a03f-bd7f7f382b21",
          className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "mt-1 text-xs text-zinc-400", children: "Paste the widget UUID from your Huma dashboard" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "input",
        {
          type: "text",
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value || void 0 }),
          placeholder: "e.g. What Our Graduates Say",
          className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "input",
        {
          type: "text",
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value || void 0 }),
          placeholder: "e.g. TESTIMONIALS",
          className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        }
      )
    ] })
  ] });
}

// src/editors/config-editors/perfect-for-you-editor.tsx
var import_react27 = require("@phosphor-icons/react");
var import_jsx_runtime69 = require("react/jsx-runtime");
function PerfectForYouEditor({
  config,
  onChange
}) {
  const c = config;
  const forItems = c.for_items ?? [];
  const notForItems = c.not_for_items ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Perfect For..." }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "space-y-2", children: forItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...forItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is for you if..." }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("button", { type: "button", onClick: () => onChange({ ...config, for_items: forItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react27.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, for_items: [...forItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react27.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "NOT For..." }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "space-y-2", children: notForItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...notForItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, not_for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not for you if..." }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: notForItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react27.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: [...notForItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react27.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "single-column", children: "Single Column" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("option", { value: "checklist", children: "Checklist" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/objection-block-editor.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
function ObjectionBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Objection" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("textarea", { value: c.objection ?? "", onChange: (e) => onChange({ ...config, objection: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The common objection..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Response" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("textarea", { value: c.response ?? "", onChange: (e) => onChange({ ...config, response: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Your response..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The reframed perspective..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("select", { value: c.visual_style ?? "pullquote", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("option", { value: "pullquote", children: "Pullquote" }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("option", { value: "inline", children: "Inline" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/investment-pricing-editor.tsx
var import_react28 = require("@phosphor-icons/react");
var import_jsx_runtime71 = require("react/jsx-runtime");
function InvestmentPricingEditor({
  config,
  onChange
}) {
  const c = config;
  const tiers = c.pricing_tiers ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Tiers" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "space-y-2", children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Tier ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: tiers.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react28.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Tier name", value: tier.tier_name ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], tier_name: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Price", value: tier.price ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Currency (e.g. GBP)", value: tier.currency ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], currency: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Period (e.g. /month)", value: tier.price_period ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price_period: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Price note", value: tier.price_note ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], price_note: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("textarea", { placeholder: "Tier description", value: tier.tier_description ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], tier_description: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { placeholder: "Included items (comma-separated)", value: tier.included_items ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], included_items: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("input", { type: "checkbox", checked: tier.is_featured ?? false, onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], is_featured: e.target.checked };
            onChange({ ...config, pricing_tiers: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Featured"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: [...tiers, { tier_name: "", price: "", currency: "GBP", price_period: "", price_note: "", tier_description: "", included_items: "", is_featured: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react28.Plus, { className: "size-3" }),
        " Add Tier"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Comparison Note" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("textarea", { value: c.comparison_note ?? "", onChange: (e) => onChange({ ...config, comparison_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("textarea", { value: c.guarantee ?? "", onChange: (e) => onChange({ ...config, guarantee: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("select", { value: c.layout ?? "cards-side-by-side", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "cards-side-by-side", children: "Cards Side by Side" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "single-centered", children: "Single Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: "stacked", children: "Stacked" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/guarantee-editor.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
function GuaranteeEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("textarea", { value: c.guarantee_text ?? "", onChange: (e) => onChange({ ...config, guarantee_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("select", { value: c.guarantee_type ?? "money-back", onChange: (e) => onChange({ ...config, guarantee_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("option", { value: "money-back", children: "Money Back" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("option", { value: "satisfaction", children: "Satisfaction" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("option", { value: "fit-guarantee", children: "Fit Guarantee" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Duration" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("input", { value: c.duration ?? "", onChange: (e) => onChange({ ...config, duration: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "30 days" })
    ] })
  ] });
}

// src/editors/config-editors/urgency-closing-editor.tsx
var import_jsx_runtime73 = require("react/jsx-runtime");
function UrgencyClosingEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Urgency Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("select", { value: c.urgency_type ?? "seats-limited", onChange: (e) => onChange({ ...config, urgency_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "seats-limited", children: "Seats Limited" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "deadline", children: "Deadline" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "cohort-start", children: "Cohort Start" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "price-increase", children: "Price Increase" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Countdown Target (date/time)" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { type: "datetime-local", value: c.countdown_target ?? "", onChange: (e) => onChange({ ...config, countdown_target: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { type: "checkbox", checked: c.show_countdown ?? false, onChange: (e) => onChange({ ...config, show_countdown: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Countdown"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Remaining" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { type: "number", min: 0, value: c.seats_remaining ?? "", onChange: (e) => onChange({ ...config, seats_remaining: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { type: "number", min: 0, value: c.seats_total ?? "", onChange: (e) => onChange({ ...config, seats_total: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/capture-form-editor.tsx
var import_react29 = require("@phosphor-icons/react");
var import_jsx_runtime74 = require("react/jsx-runtime");
function CaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react29.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react29.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Submit" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("option", { value: "minimal", children: "Minimal" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/application-form-editor.tsx
var import_react30 = require("@phosphor-icons/react");
var import_jsx_runtime75 = require("react/jsx-runtime");
function ApplicationFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_react30.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_react30.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Programme Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("textarea", { value: c.programme_summary ?? "", onChange: (e) => onChange({ ...config, programme_summary: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Display" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("textarea", { value: c.pricing_display ?? "", onChange: (e) => onChange({ ...config, pricing_display: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Apply Now" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Post-Submit Message" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("textarea", { value: c.post_submit_message ?? "", onChange: (e) => onChange({ ...config, post_submit_message: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/inline-cta-editor.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
function InlineCtaEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const secondary = c.secondary_cta ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Secondary CTA" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("input", { placeholder: "Label", value: secondary.label ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("input", { placeholder: "URL", value: secondary.url ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("select", { value: secondary.variant ?? "secondary", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("select", { value: c.alignment ?? "centered", onChange: (e) => onChange({ ...config, alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("option", { value: "left", children: "Left" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/confirmation-message-editor.tsx
var import_react31 = require("@phosphor-icons/react");
var import_jsx_runtime77 = require("react/jsx-runtime");
function ConfirmationMessageEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.what_happens_next ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Happens Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("input", { type: "number", value: step.step_number ?? i + 1, onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
          onChange({ ...config, what_happens_next: u });
        }, className: "w-16 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("input", { value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, what_happens_next: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Step description..." }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: steps.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_react31.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: [...steps, { step_number: steps.length + 1, step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_react31.Plus, { className: "size-3" }),
        " Add Step"
      ] })
    ] })
  ] });
}

// src/editors/config-editors/diagnostic-framing-editor.tsx
var import_jsx_runtime78 = require("react/jsx-runtime");
function DiagnosticFramingEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Action Taken" }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("input", { value: c.action_taken ?? "", onChange: (e) => onChange({ ...config, action_taken: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "What the visitor just did..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What It Says About You" }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("textarea", { value: c.what_it_says ?? "", onChange: (e) => onChange({ ...config, what_it_says: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Comes Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("textarea", { value: c.what_comes_next ?? "", onChange: (e) => onChange({ ...config, what_comes_next: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/quick-win-editor.tsx
var import_jsx_runtime79 = require("react/jsx-runtime");
function QuickWinEditor({
  config,
  onChange
}) {
  const c = config;
  const res = c.resource ?? {};
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Resource" }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { placeholder: "Title", value: res.resource_title ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_title: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { placeholder: "Description", value: res.resource_description ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_description: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { placeholder: "URL", value: res.resource_url ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("select", { value: res.resource_type ?? "pdf", onChange: (e) => onChange({ ...config, resource: { ...res, resource_type: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "pdf", children: "PDF" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "video", children: "Video" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "article", children: "Article" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "template", children: "Template" }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "checklist", children: "Checklist" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-share-editor.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
var PLATFORM_OPTIONS = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter / X" },
  { value: "email", label: "Email" },
  { value: "copy-link", label: "Copy Link" }
];
function SocialShareEditor({
  config,
  onChange
}) {
  const c = config;
  const platforms = c.platforms ?? [];
  const togglePlatform = (value) => {
    const updated = platforms.includes(value) ? platforms.filter((p) => p !== value) : [...platforms, value];
    onChange({ ...config, platforms: updated });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("textarea", { value: c.share_text ?? "", onChange: (e) => onChange({ ...config, share_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Platforms" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: "space-y-1", children: PLATFORM_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("input", { type: "checkbox", checked: platforms.includes(opt.value), onChange: () => togglePlatform(opt.value), className: "rounded border-zinc-300 dark:border-zinc-600" }),
        opt.label
      ] }, opt.value)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("input", { value: c.share_url ?? "", onChange: (e) => onChange({ ...config, share_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("select", { value: c.layout ?? "inline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/post-purchase-welcome-editor.tsx
var import_react32 = require("@phosphor-icons/react");
var import_jsx_runtime81 = require("react/jsx-runtime");
function PostPurchaseWelcomeEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.next_steps ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Welcome Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("textarea", { value: c.welcome_text ?? "", onChange: (e) => onChange({ ...config, welcome_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Next Steps" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Step ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("button", { type: "button", onClick: () => onChange({ ...config, next_steps: steps.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_react32.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { type: "number", placeholder: "#", value: step.step_number ?? i + 1, onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { placeholder: "Title", value: step.step_title ?? "", onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_title: e.target.value };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { placeholder: "Description", value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, next_steps: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, next_steps: [...steps, { step_number: steps.length + 1, step_title: "", step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_react32.Plus, { className: "size-3" }),
        " Add Step"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Community Link" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { value: c.community_link ?? "", onChange: (e) => onChange({ ...config, community_link: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Note" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("textarea", { value: c.personal_note ?? "", onChange: (e) => onChange({ ...config, personal_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rich-text-block-editor.tsx
var import_jsx_runtime82 = require("react/jsx-runtime");
function RichTextBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 8, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Max Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("select", { value: c.max_width ?? "medium", onChange: (e) => onChange({ ...config, max_width: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "narrow", children: "Narrow" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "medium", children: "Medium" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "full", children: "Full" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("select", { value: c.background_style ?? "transparent", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("select", { value: c.text_alignment ?? "left", onChange: (e) => onChange({ ...config, text_alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("option", { value: "centered", children: "Centered" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pullquote-editor.tsx
var import_jsx_runtime83 = require("react/jsx-runtime");
function PullquoteEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Quote Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("textarea", { value: c.quote_text ?? "", onChange: (e) => onChange({ ...config, quote_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Attribution" }),
      /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("input", { value: c.attribution ?? "", onChange: (e) => onChange({ ...config, attribution: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("select", { value: c.style ?? "large-text", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "large-text", children: "Large Text" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "bordered-left", children: "Bordered Left" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "dark-card", children: "Dark Card" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("select", { value: c.background_style ?? "", onChange: (e) => onChange({ ...config, background_style: e.target.value || void 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "", children: "Default" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("option", { value: "cream", children: "Cream" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/data-statistic-editor.tsx
var import_jsx_runtime84 = require("react/jsx-runtime");
function DataStatisticEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("input", { value: c.metric ?? "", onChange: (e) => onChange({ ...config, metric: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "87%" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric Label" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("input", { value: c.metric_label ?? "", onChange: (e) => onChange({ ...config, metric_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "completion rate" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Source" }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("input", { value: c.source ?? "", onChange: (e) => onChange({ ...config, source: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Source attribution" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Context Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("textarea", { value: c.context_text ?? "", onChange: (e) => onChange({ ...config, context_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("select", { value: c.style ?? "dark-card", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "dark-card", children: "Dark Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/image-block-editor.tsx
var import_jsx_runtime85 = require("react/jsx-runtime");
function ImageBlockEditor({
  config,
  onChange
}) {
  const c = config;
  const img = c.image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("input", { placeholder: "Image URL", value: img.url ?? "", onChange: (e) => onChange({ ...config, image: { ...img, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("input", { placeholder: "Alt text", value: img.alt_text ?? "", onChange: (e) => onChange({ ...config, image: { ...img, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("option", { value: "contained", children: "Contained" }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("option", { value: "small-centered", children: "Small Centered" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/video-block-editor.tsx
var import_jsx_runtime86 = require("react/jsx-runtime");
function VideoBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("input", { type: "checkbox", checked: c.autoplay ?? false, onChange: (e) => onChange({ ...config, autoplay: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Autoplay"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("option", { value: "contained", children: "Contained" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/comparison-table-editor.tsx
var import_react33 = require("@phosphor-icons/react");
var import_jsx_runtime87 = require("react/jsx-runtime");
function ComparisonTableEditor({
  config,
  onChange
}) {
  const c = config;
  const headers = c.column_headers ?? ["", ""];
  const rows = c.rows ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Column Headers" }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: "space-y-2", children: headers.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("input", { value: h, onChange: (e) => {
          const u = [...headers];
          u[i] = e.target.value;
          onChange({ ...config, column_headers: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: `Column ${i + 1}` }),
        headers.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("button", { type: "button", onClick: () => {
          const u = headers.filter((_, j) => j !== i);
          const ur = rows.map((r) => ({ ...r, column_values: (r.column_values ?? []).filter((_, j) => j !== i) }));
          onChange({ ...config, column_headers: u, rows: ur });
        }, className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_react33.Trash, { className: "size-4" }) })
      ] }, i)) }),
      headers.length < 3 && /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("button", { type: "button", onClick: () => {
        const u = [...headers, ""];
        const ur = rows.map((r) => ({ ...r, column_values: [...r.column_values ?? [], ""] }));
        onChange({ ...config, column_headers: u, rows: ur });
      }, className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_react33.Plus, { className: "size-3" }),
        " Add Column"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Rows" }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: "space-y-2", children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Row ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("button", { type: "button", onClick: () => onChange({ ...config, rows: rows.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_react33.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("input", { placeholder: "Row label", value: row.row_label ?? "", onChange: (e) => {
          const u = [...rows];
          u[i] = { ...u[i], row_label: e.target.value };
          onChange({ ...config, rows: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${headers.length}, 1fr)` }, children: headers.map((_, ci) => /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("input", { placeholder: headers[ci] || `Col ${ci + 1}`, value: (row.column_values ?? [])[ci] ?? "", onChange: (e) => {
          const u = [...rows];
          const vals = [...u[i]?.column_values ?? []];
          vals[ci] = e.target.value;
          u[i] = { ...u[i], column_values: vals };
          onChange({ ...config, rows: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }, ci)) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, rows: [...rows, { row_label: "", column_values: headers.map(() => "") }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_react33.Plus, { className: "size-3" }),
        " Add Row"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Highlight Column (0-indexed)" }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("input", { type: "number", min: 0, max: headers.length - 1, value: c.highlight_column ?? 0, onChange: (e) => onChange({ ...config, highlight_column: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/section-divider-editor.tsx
var import_jsx_runtime88 = require("react/jsx-runtime");
function SectionDividerEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Divider Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("select", { value: c.divider_style ?? "line", onChange: (e) => onChange({ ...config, divider_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "line", children: "Line" }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "dots", children: "Dots" }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "space-only", children: "Space Only" }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "bird-icon", children: "Bird Icon" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Spacing" }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("select", { value: c.spacing ?? "medium", onChange: (e) => onChange({ ...config, spacing: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "small", children: "Small" }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "medium", children: "Medium" }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/anchor-navigation-editor.tsx
var import_react34 = require("@phosphor-icons/react");
var import_jsx_runtime89 = require("react/jsx-runtime");
function AnchorNavigationEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.nav_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Nav Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("input", { placeholder: "Anchor ID", value: item.anchor_id ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], anchor_id: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("button", { type: "button", onClick: () => onChange({ ...config, nav_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_react34.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, nav_items: [...items, { label: "", anchor_id: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_react34.Plus, { className: "size-3" }),
        " Add Nav Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("select", { value: c.style ?? "sticky-top", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("option", { value: "sticky-top", children: "Sticky Top" }),
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("option", { value: "sidebar", children: "Sidebar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("input", { type: "checkbox", checked: c.show_on_mobile ?? false, onChange: (e) => onChange({ ...config, show_on_mobile: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show on Mobile"
    ] })
  ] });
}

// src/editors/config-editors/page-header-editor.tsx
var import_react35 = require("@phosphor-icons/react");
var import_jsx_runtime90 = require("react/jsx-runtime");
function PageHeaderEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.breadcrumb_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("input", { value: c.page_title ?? "", onChange: (e) => onChange({ ...config, page_title: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Breadcrumbs" }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("input", { placeholder: "URL", value: item.url ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], url: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_react35.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: [...items, { label: "", url: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_react35.Plus, { className: "size-3" }),
        " Add Breadcrumb"
      ] })
    ] })
  ] });
}

// src/editors/landing-section-config-editor.tsx
var import_jsx_runtime91 = require("react/jsx-runtime");
function SectionConfigEditor({ type, config, onChange }) {
  const props = { config, onChange };
  switch (type) {
    // Hero
    case "hero_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(HeroStatementEditor, { ...props });
    case "hero_capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(HeroCaptureFormEditor, { ...props });
    case "hero_video":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(HeroVideoEditor, { ...props });
    // Problem & Recognition
    case "pattern_recognition":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(PatternRecognitionEditor, { ...props });
    case "problem_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ProblemStatementEditor, { ...props });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(SacredCowEditor, { ...props });
    case "rome_is_burning":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(RomeBurningEditor, { ...props });
    // Solution & Programme
    case "programme_overview":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ProgrammeOverviewEditor, { ...props });
    case "programme_arc":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ProgrammeArcEditor, { ...props });
    case "what_this_is_isnt":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(WhatThisIsIsntEditor, { ...props });
    case "what_youll_experience":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(WhatYoullExperienceEditor, { ...props });
    case "curriculum_breakdown":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(CurriculumBreakdownEditor, { ...props });
    case "features_grid":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(FeaturesGridEditor, { ...props });
    // Trust & Proof
    case "testimonials":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(TestimonialsEditor, { ...props });
    case "case_study":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(CaseStudyEditor, { ...props });
    case "coach_bio":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(CoachBioEditor, { ...props });
    case "social_proof_bar":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(SocialProofBarEditor, { ...props });
    case "huma_widget":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(HumaWidgetEditor, { ...props });
    // Qualification & Objection
    case "perfect_for_you":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(PerfectForYouEditor, { ...props });
    case "faq":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(FaqEditor, { ...props });
    case "objection_block":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ObjectionBlockEditor, { ...props });
    // Pricing & Commitment
    case "investment_pricing":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(InvestmentPricingEditor, { ...props });
    case "guarantee":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(GuaranteeEditor, { ...props });
    case "urgency_closing":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(UrgencyClosingEditor, { ...props });
    // Forms & Capture
    case "capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(CaptureFormEditor, { ...props });
    case "application_form":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ApplicationFormEditor, { ...props });
    case "inline_cta":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(InlineCtaEditor, { ...props });
    // Confirmation & Thank You
    case "confirmation_message":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ConfirmationMessageEditor, { ...props });
    case "diagnostic_framing":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(DiagnosticFramingEditor, { ...props });
    case "quick_win":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(QuickWinEditor, { ...props });
    case "social_share":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(SocialShareEditor, { ...props });
    case "post_purchase_welcome":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(PostPurchaseWelcomeEditor, { ...props });
    // Content & Narrative
    case "rich_text":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(RichTextBlockEditor, { ...props });
    case "pullquote":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(PullquoteEditor, { ...props });
    case "data_statistic":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(DataStatisticEditor, { ...props });
    case "image_block":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ImageBlockEditor, { ...props });
    case "video_block":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(VideoBlockEditor, { ...props });
    case "comparison_table":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ComparisonTableEditor, { ...props });
    // Structural & Navigation
    case "section_divider":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(SectionDividerEditor, { ...props });
    case "anchor_navigation":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(AnchorNavigationEditor, { ...props });
    case "page_header_breadcrumb":
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(PageHeaderEditor, { ...props });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("p", { className: "text-xs text-zinc-500", children: [
        "No editor available for section type \u201C",
        type,
        "\u201D."
      ] });
  }
}

// src/editors/landing-page-editor.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
function getSectionSummary(section) {
  const c = section.config;
  const headline = c.headline || c.section_label || "";
  if (headline) return headline;
  for (const key of [
    "recognition_items",
    "contrast_items",
    "phases",
    "modules",
    "features",
    "testimonials",
    "faq_items",
    "pricing_tiers",
    "for_items",
    "experience_items",
    "form_fields",
    "nav_items",
    "proof_items",
    "next_steps",
    "time_markers",
    "rows"
  ]) {
    const arr2 = c[key];
    if (arr2?.length) return `${arr2.length} items`;
  }
  return c.body_text?.slice(0, 60) || c.quote_text?.slice(0, 60) || "";
}
function SortableSectionCard({
  section,
  isEditing,
  onToggleVisibility,
  onToggleEdit,
  onRemove,
  onConfigChange
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = (0, import_sortable.useSortable)({ id: section.id });
  const style = {
    transform: import_utilities.CSS.Transform.toString(transform),
    transition
  };
  const summary = getSectionSummary(section);
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
    "div",
    {
      ref: setNodeRef,
      style,
      className: `rounded-xl border bg-white shadow-sm dark:bg-surface-raised ${isDragging ? "ring-2 ring-brand-500 shadow-lg border-brand-500" : "border-zinc-200 dark:border-surface-border"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex items-center gap-3 px-3 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "button",
            {
              type: "button",
              className: "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-grab active:cursor-grabbing",
              ...attributes,
              ...listeners,
              children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.DotsSixVertical, { className: "size-5", weight: "bold" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
            summary && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("span", { className: "ml-2 text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
              "\u2014 ",
              summary
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "button",
            {
              onClick: onToggleVisibility,
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: section.visible ? "Hide" : "Show",
              children: section.visible ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.Eye, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.EyeSlash, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "button",
            {
              onClick: onToggleEdit,
              className: `rounded p-1 ${isEditing ? "bg-brand-50 text-brand-600 dark:bg-brand-600/10 dark:text-brand-400" : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.PencilSimple, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "button",
            {
              onClick: onRemove,
              className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400",
              children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.Trash, { className: "size-4" })
            }
          )
        ] }),
        isEditing && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "border-t border-zinc-100 px-4 py-3 dark:border-surface-border max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Background" }),
            /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "flex gap-2", children: [
              { value: void 0, label: "Default", preview: "bg-zinc-100 dark:bg-surface-base" },
              { value: "light", label: "Light", preview: "bg-white dark:bg-surface-secondary" },
              { value: "cream", label: "Cream", preview: "bg-amber-100 dark:bg-surface-overlay" },
              { value: "dark", label: "Dark", preview: "bg-zinc-800 dark:bg-zinc-950" },
              { value: "transparent", label: "None", preview: "bg-transparent border border-dashed border-zinc-300 dark:border-zinc-600" }
            ].map((opt) => {
              const current = section.config.background_style ?? void 0;
              const isActive = current === opt.value;
              return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const next = { ...section.config };
                    if (opt.value) {
                      next.background_style = opt.value;
                    } else {
                      delete next.background_style;
                    }
                    onConfigChange(next);
                  },
                  className: `flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${isActive ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-600/10 dark:text-brand-400 dark:border-brand-400" : "border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("span", { className: `size-3 rounded-full ${opt.preview}` }),
                    opt.label
                  ]
                },
                opt.label
              );
            }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            SectionConfigEditor,
            {
              type: section.section_type,
              config: section.config,
              onChange: onConfigChange
            }
          )
        ] })
      ]
    }
  );
}
function SectionOverlayCard({ section }) {
  const summary = getSectionSummary(section);
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "rounded-xl border border-brand-500 bg-white shadow-lg ring-2 ring-brand-500 dark:bg-surface-raised px-3 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.DotsSixVertical, { className: "size-5 text-zinc-400", weight: "bold" }),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
    summary && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("span", { className: "text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
      "\u2014 ",
      summary
    ] })
  ] }) });
}
function AddSectionMenu({ onAdd }) {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(import_react38.Menu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
      import_react38.MenuButton,
      {
        as: "button",
        className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.Plus, { className: "size-3.5" }),
          "Add Section"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react38.MenuItems, { anchor: "bottom end", className: "bg-white dark:bg-surface-raised rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-2 max-h-96 overflow-y-auto w-72", children: SECTION_TYPE_CATEGORIES.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: i > 0 ? "mt-2" : "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500", children: cat.label }),
      cat.types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        import_react38.MenuItem,
        {
          as: "button",
          onClick: () => onAdd(type),
          className: "block w-full rounded-lg px-2 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 data-[focus]:bg-brand-50 data-[focus]:text-brand-700 dark:data-[focus]:bg-brand-600/10 dark:data-[focus]:text-brand-400 cursor-pointer",
          children: SECTION_TYPE_LABELS[type]
        },
        type
      ))
    ] }, cat.label)) })
  ] });
}
function LandingPageEditor(props) {
  const {
    pageId,
    page,
    plans: plansData,
    onSaveSections,
    onSavePage,
    onBack,
    isSavingSections,
    isSavingPage,
    saveSectionsSuccess
  } = props;
  const [sections, setSections] = (0, import_react36.useState)([]);
  const [editingSectionId, setEditingSectionId] = (0, import_react36.useState)(null);
  const [activeId, setActiveId] = (0, import_react36.useState)(null);
  const [pageTitle, setPageTitle] = (0, import_react36.useState)("");
  const [pageSlug, setPageSlug] = (0, import_react36.useState)("");
  const [pageStatus, setPageStatus] = (0, import_react36.useState)("draft");
  const [ctaModeType, setCtaModeType] = (0, import_react36.useState)("none");
  const [ctaExternalUrl, setCtaExternalUrl] = (0, import_react36.useState)("");
  const [ctaPlanId, setCtaPlanId] = (0, import_react36.useState)("");
  const [ctaFormTarget, setCtaFormTarget] = (0, import_react36.useState)("capture_form");
  (0, import_react36.useEffect)(() => {
    if (page) {
      setSections(
        page.sections.map((s) => ({
          id: s.id,
          section_type: s.sectionType,
          sort_order: s.sortOrder,
          visible: s.visible,
          config: s.config ?? {},
          scheduled_start: s.scheduledStart ?? null,
          scheduled_end: s.scheduledEnd ?? null,
          audience_segment: s.audienceSegment ?? "all",
          ab_variant: s.abVariant ?? null,
          ctc_subsequence: s.ctcSubsequence ?? null,
          ctc_techniques: s.ctcTechniques ?? [],
          ssf_lane: s.ssfLane ?? null,
          notes: s.notes ?? null
        }))
      );
      setPageTitle(page.title);
      setPageSlug(page.slug ?? "");
      setPageStatus(page.status);
      const settings = page.settings ?? {};
      if (settings.cta_mode) {
        const cm = settings.cta_mode;
        setCtaModeType(cm.mode);
        if (cm.mode === "external_link") setCtaExternalUrl(cm.url);
        if (cm.mode === "checkout") setCtaPlanId(cm.plan_id);
        if (cm.mode === "form_capture") setCtaFormTarget(cm.target_section_type ?? "capture_form");
      } else if (settings.default_cta_url) {
        setCtaModeType("external_link");
        setCtaExternalUrl(settings.default_cta_url);
      }
    }
  }, [page]);
  const handleSaveSections = () => {
    onSaveSections(
      sections.map((s, i) => ({
        id: s.id,
        section_type: s.section_type,
        sort_order: i,
        visible: s.visible,
        config: s.config,
        audience_segment: s.audience_segment
      }))
    );
  };
  const handleSavePage = () => {
    let ctaMode;
    if (ctaModeType === "external_link" && ctaExternalUrl) {
      ctaMode = { mode: "external_link", url: ctaExternalUrl };
    } else if (ctaModeType === "checkout" && ctaPlanId) {
      ctaMode = { mode: "checkout", plan_id: ctaPlanId };
    } else if (ctaModeType === "form_capture") {
      ctaMode = { mode: "form_capture", target_section_type: ctaFormTarget };
    }
    onSavePage({
      title: pageTitle,
      slug: pageSlug || null,
      status: pageStatus,
      settings: {
        ...page.settings ?? {},
        cta_mode: ctaMode,
        default_cta_url: void 0
        // clear legacy field
      }
    });
  };
  const isDirty = (() => {
    if (!page) return false;
    const current = page.sections.map((s) => ({
      id: s.id,
      type: s.sectionType,
      visible: s.visible,
      config: s.config
    }));
    const local = sections.map((s) => ({
      id: s.id,
      type: s.section_type,
      visible: s.visible,
      config: s.config
    }));
    return JSON.stringify(current) !== JSON.stringify(local);
  })();
  const addSection = (type) => {
    const newSection = {
      id: crypto.randomUUID(),
      section_type: type,
      sort_order: sections.length,
      visible: true,
      config: {},
      audience_segment: "all"
    };
    setSections([...sections, newSection]);
    setEditingSectionId(newSection.id);
  };
  const removeSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
    if (editingSectionId === id) setEditingSectionId(null);
  };
  const toggleVisibility = (id) => {
    setSections(sections.map((s) => s.id === id ? { ...s, visible: !s.visible } : s));
  };
  const updateSectionConfig = (id, config) => {
    setSections(sections.map((s) => s.id === id ? { ...s, config } : s));
  };
  const sensors = (0, import_core.useSensors)(
    (0, import_core.useSensor)(import_core.PointerSensor, { activationConstraint: { distance: 5 } }),
    (0, import_core.useSensor)(import_core.KeyboardSensor, { coordinateGetter: import_sortable.sortableKeyboardCoordinates })
  );
  const activeSection = activeId ? sections.find((s) => s.id === activeId) ?? null : null;
  function handleDragStart(event) {
    setActiveId(String(event.active.id));
  }
  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;
    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      setSections((0, import_sortable.arrayMove)(sections, oldIndex, newIndex));
    }
  }
  const showHeader = props.showHeader ?? true;
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
    showHeader && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "rounded p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
          children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.ArrowLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: page.title }),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "text-caption text-zinc-400", children: page.pageType.replace(/_/g, " ") })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "mb-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "input",
            {
              value: pageTitle,
              onChange: (e) => setPageTitle(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Slug" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "input",
            {
              value: pageSlug,
              onChange: (e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")),
              placeholder: "my-landing-page",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Status" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
            "select",
            {
              value: pageStatus,
              onChange: (e) => setPageStatus(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "draft", children: "Draft" }),
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "published", children: "Published" }),
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "archived", children: "Archived" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button Action" }),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "mb-3 flex gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-surface-border dark:bg-surface-base", children: [
          { value: "none", label: "Not set" },
          { value: "checkout", label: "Checkout" },
          { value: "external_link", label: "External Link" },
          { value: "form_capture", label: "Form on Page" }
        ].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setCtaModeType(opt.value),
            className: `flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${ctaModeType === opt.value ? "bg-white text-zinc-900 shadow-sm dark:bg-surface-raised dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"}`,
            children: opt.label
          },
          opt.value
        )) }),
        ctaModeType === "checkout" && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Plan" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
            "select",
            {
              value: ctaPlanId,
              onChange: (e) => setCtaPlanId(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "", children: "Select a plan..." }),
                plansData?.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("option", { value: plan.id, children: [
                  plan.name,
                  plan.amountCents ? ` \u2014 ${plan.currency} ${(plan.amountCents / 100).toFixed(0)}` : " \u2014 Free"
                ] }, plan.id))
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons link to this plan's checkout page." })
        ] }),
        ctaModeType === "external_link" && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "URL" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            "input",
            {
              value: ctaExternalUrl,
              onChange: (e) => setCtaExternalUrl(e.target.value),
              placeholder: "https://calendly.com/... or https://typeform.com/...",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons open this URL (booking page, application form, etc.)." })
        ] }),
        ctaModeType === "form_capture" && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Scroll to" }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
            "select",
            {
              value: ctaFormTarget,
              onChange: (e) => setCtaFormTarget(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "capture_form", children: "Capture Form" }),
                /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("option", { value: "application_form", children: "Application Form" })
              ]
            }
          ),
          !sections.some((s) => s.section_type === ctaFormTarget) && /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("p", { className: "mt-1 text-xs text-amber-600 dark:text-amber-400", children: [
            "No ",
            ctaFormTarget === "capture_form" ? "Capture Form" : "Application Form",
            " section on this page yet. Add one for this to work."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons scroll to the form section on this page." })
        ] }),
        ctaModeType === "none" && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "text-xs text-zinc-400 dark:text-zinc-500", children: "Each section's CTA button uses its own URL. Set a mode to override all buttons at once." })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("h3", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: "Sections" }),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(AddSectionMenu, { onAdd: addSection })
    ] }),
    saveSectionsSuccess && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 dark:bg-green-950/30 dark:text-green-400", children: "Sections saved." }),
    sections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "No sections yet. Click \u201CAdd Section\u201D to start building." }) }) : /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
      import_core.DndContext,
      {
        sensors,
        collisionDetection: import_core.closestCenter,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
            import_sortable.SortableContext,
            {
              items: sections.map((s) => s.id),
              strategy: import_sortable.verticalListSortingStrategy,
              children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                SortableSectionCard,
                {
                  section,
                  isEditing: editingSectionId === section.id,
                  onToggleVisibility: () => toggleVisibility(section.id),
                  onToggleEdit: () => setEditingSectionId(
                    editingSectionId === section.id ? null : section.id
                  ),
                  onRemove: () => removeSection(section.id),
                  onConfigChange: (config) => updateSectionConfig(section.id, config)
                },
                section.id
              )) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_core.DragOverlay, { children: activeSection ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(SectionOverlayCard, { section: activeSection }) : null })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "sticky bottom-0 mt-6 -mx-4 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-surface-border dark:bg-surface-raised/95", children: /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: "flex items-center justify-end gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        "button",
        {
          type: "button",
          onClick: handleSavePage,
          disabled: isSavingPage,
          className: "rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300",
          children: isSavingPage ? "Saving..." : "Save Page Settings"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
        "button",
        {
          type: "button",
          onClick: handleSaveSections,
          disabled: !isDirty || isSavingSections,
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-40",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_react37.FloppyDisk, { className: "size-4" }),
            isSavingSections ? "Saving..." : "Save Sections"
          ]
        }
      )
    ] }) })
  ] });
}

// src/editors/landing-pages-list.tsx
var import_react39 = require("react");
var import_react40 = require("@phosphor-icons/react");
var import_jsx_runtime93 = require("react/jsx-runtime");
var PAGE_TYPE_LABELS = {
  lead_magnet: "Lead Magnet Landing",
  waiting_list: "Waiting List",
  thank_you: "Thank You / Confirmation",
  course_landing: "Course / Programme Landing",
  sales_page: "Sales Page (Long-form)",
  enrollment: "Enrollment / Application",
  event_registration: "Event / Webinar Registration",
  post_purchase_thank_you: "Post-Purchase Thank You"
};
var STATUS_COLORS = {
  draft: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  published: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  archived: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
};
function LandingPagesList({
  pages,
  isLoading,
  onSelectPage,
  onCreatePage,
  onDeletePage,
  onDuplicatePage
}) {
  const [showCreateForm, setShowCreateForm] = (0, import_react39.useState)(false);
  const [newPageType, setNewPageType] = (0, import_react39.useState)("course_landing");
  const [newPageTitle, setNewPageTitle] = (0, import_react39.useState)("");
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
      "div",
      {
        className: "h-16 animate-pulse rounded-xl bg-zinc-100 dark:bg-surface-raised"
      },
      i
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: "Landing Pages" }),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("p", { className: "mt-1 text-body text-zinc-500 dark:text-zinc-400", children: "Create and manage landing pages for your network." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => setShowCreateForm(true),
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_react40.Plus, { className: "size-3.5" }),
            "New Page"
          ]
        }
      )
    ] }),
    showCreateForm && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: "mt-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Type" }),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          "select",
          {
            value: newPageType,
            onChange: (e) => setNewPageType(e.target.value),
            className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
            children: Object.entries(PAGE_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("option", { value, children: label }, value))
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          "input",
          {
            type: "text",
            value: newPageTitle,
            onChange: (e) => setNewPageTitle(e.target.value),
            placeholder: "e.g. Conference of the Birds \u2014 Waiting List",
            className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              onCreatePage({
                page_type: newPageType,
                title: newPageTitle || PAGE_TYPE_LABELS[newPageType] || "Untitled"
              });
              setShowCreateForm(false);
              setNewPageTitle("");
            },
            className: "rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-500 disabled:opacity-50",
            children: "Create Page"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setShowCreateForm(false),
            className: "rounded-lg px-4 py-2 text-xs font-medium text-zinc-500 hover:bg-zinc-100 dark:hover:bg-surface-hover",
            children: "Cancel"
          }
        )
      ] })
    ] }) }),
    !pages || pages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "mt-4 rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: [
      /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_react40.Globe, { className: "mx-auto size-8 text-zinc-300 dark:text-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: "No landing pages yet. Create one to get started." })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: "mt-4 space-y-2", children: pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-surface-border dark:bg-surface-raised",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white truncate", children: page.title }),
              /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                "span",
                {
                  className: `rounded-full px-2 py-0.5 text-caption font-medium ${STATUS_COLORS[page.status]}`,
                  children: page.status
                }
              ),
              page.isDefault && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { className: "rounded-full bg-brand-100 px-2 py-0.5 text-caption font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: "Default" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "mt-0.5 flex items-center gap-2 text-caption text-zinc-400 dark:text-zinc-500", children: [
              /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: PAGE_TYPE_LABELS[page.pageType] ?? page.pageType }),
              page.slug && /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(import_jsx_runtime93.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "\xB7" }),
                /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("span", { children: [
                  "/landing/",
                  page.slug
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onSelectPage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Edit sections",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_react40.PencilSimple, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onDuplicatePage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Duplicate",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_react40.Copy, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                if (confirm("Delete this landing page?")) {
                  onDeletePage(page.id);
                }
              },
              className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400",
              title: "Delete",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_react40.Trash, { className: "size-4" })
            }
          )
        ]
      },
      page.id
    )) })
  ] });
}

// src/editors/landing-pages-section.tsx
var import_jsx_runtime94 = require("react/jsx-runtime");
function LandingPagesSection(props) {
  const {
    pages,
    isLoadingPages,
    onCreatePage,
    onDeletePage,
    onDuplicatePage,
    selectedPage,
    selectedPageId,
    plans,
    onSaveSections,
    onSavePage,
    isSavingSections,
    isSavingPage,
    saveSectionsSuccess,
    savePageSuccess,
    onSelectPage
  } = props;
  if (selectedPageId && selectedPage) {
    return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
      LandingPageEditor,
      {
        pageId: selectedPageId,
        page: selectedPage,
        plans,
        onSaveSections,
        onSavePage,
        onBack: () => onSelectPage(null),
        isSavingSections,
        isSavingPage,
        saveSectionsSuccess,
        savePageSuccess
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
    LandingPagesList,
    {
      pages,
      isLoading: isLoadingPages,
      onSelectPage: (pageId) => onSelectPage(pageId),
      onCreatePage,
      onDeletePage,
      onDuplicatePage
    }
  );
}

// src/server/server-sections.tsx
var import_jsx_runtime95 = require("react/jsx-runtime");
function ServerSections({ sections, networkName }) {
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("article", { "aria-label": `${networkName} landing page`, children: sections.map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerSection, { section }, i)) });
}
function str(config, key) {
  const v = config[key];
  return typeof v === "string" && v.length > 0 ? v : null;
}
function arr(config, key) {
  const v = config[key];
  return Array.isArray(v) ? v : [];
}
function ServerSection({ section }) {
  const c = section.config;
  switch (section.sectionType) {
    case "hero_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h1", { children: str(c, "headline") }),
        str(c, "subtitle") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "subtitle") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "body_text") })
      ] });
    case "pattern_recognition":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Pattern recognition", children: [
        str(c, "section_label") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: str(c, "section_label") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "recognition_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "recognition_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item.statement }, i)) }),
        str(c, "closing_line") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("em", { children: str(c, "closing_line") }) })
      ] });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Challenge the belief", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("blockquote", { children: str(c, "sacred_cow") }),
        str(c, "sour_milk") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "sour_milk") }),
        str(c, "reframe") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "reframe") }),
        str(c, "transition_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("em", { children: str(c, "transition_text") }) })
      ] });
    case "rome_is_burning":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Urgency", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "time_markers").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dl", { children: arr(c, "time_markers").map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: m.timeframe }) }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dd", { children: m.consequence })
        ] }, i)) }),
        str(c, "closing_line") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("em", { children: str(c, "closing_line") }) })
      ] });
    case "programme_overview":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Programme", children: [
        str(c, "section_label") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: str(c, "section_label") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "subtitle") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "subtitle") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "key_details").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dl", { children: arr(c, "key_details").map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dt", { children: d.label }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dd", { children: d.value })
        ] }, i)) })
      ] });
    case "programme_arc":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Programme journey", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "introduction") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "introduction") }),
        arr(c, "phases").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ol", { children: arr(c, "phases").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h3", { children: p.phase_name }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: p.phase_description })
        ] }, i)) }),
        str(c, "closing_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("em", { children: str(c, "closing_text") }) })
      ] });
    case "what_youll_experience":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("section", { "aria-label": "What shifts", children: arr(c, "experience_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dl", { children: arr(c, "experience_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: item.title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dd", { children: item.description })
      ] }, i)) }) });
    case "what_this_is_isnt":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "What this is and isn't", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        arr(c, "is_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(import_jsx_runtime95.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h3", { children: "What this is" }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "is_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item.statement }, i)) })
        ] }),
        arr(c, "is_not_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(import_jsx_runtime95.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h3", { children: "What this is not" }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "is_not_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item.statement }, i)) })
        ] }),
        str(c, "closing_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "closing_text") })
      ] });
    case "testimonials":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("section", { "aria-label": "Testimonials", children: arr(c, "testimonials").map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("blockquote", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: t.quote }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("footer", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("cite", { children: t.attribution }),
          t.context && /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("span", { children: [
            " \u2014 ",
            t.context
          ] })
        ] })
      ] }, i)) });
    case "case_study":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Case study", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "before_state") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "before_state") }),
        str(c, "turning_point") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "turning_point") }),
        str(c, "after_state") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "after_state") }),
        str(c, "client_words") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("blockquote", { children: str(c, "client_words") })
      ] });
    case "perfect_for_you":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": str(c, "headline") ?? "Is this for you?", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        arr(c, "for_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "for_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item.statement }, i)) }),
        arr(c, "not_for_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "not_for_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item.statement }, i)) }),
        str(c, "closing_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "closing_text") })
      ] });
    case "coach_bio":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "About the coach", children: [
        str(c, "bio_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "bio_text") }),
        arr(c, "credentials").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: arr(c, "credentials").map((cred, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: cred.credential }, i)) }),
        str(c, "personal_line") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("em", { children: str(c, "personal_line") }) })
      ] });
    case "faq":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Frequently Asked Questions", children: [
        str(c, "introduction") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "introduction") }),
        arr(c, "faq_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dl", { children: arr(c, "faq_items").map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: faq.question }) }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dd", { children: faq.answer })
        ] }, i)) })
      ] });
    case "objection_block":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Addressing concerns", children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("blockquote", { children: str(c, "objection") }),
        str(c, "response") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "response") }),
        str(c, "reframe") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("strong", { children: str(c, "reframe") }) })
      ] });
    case "guarantee":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("section", { "aria-label": "Guarantee", children: str(c, "guarantee_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "guarantee_text") }) });
    case "investment_pricing":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Pricing", children: [
        str(c, "introduction") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "introduction") }),
        arr(c, "pricing_tiers").map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("article", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h3", { children: tier.tier_name }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("p", { children: [
            tier.currency ?? "EUR",
            " ",
            tier.price
          ] }),
          tier.tier_description && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: tier.tier_description }),
          tier.included_items && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("ul", { children: tier.included_items.map((item, j) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("li", { children: item }, j)) })
        ] }, i))
      ] });
    case "urgency_closing":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Limited availability", children: [
        str(c, "headline") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ServerParagraphs, { text: str(c, "body_text") })
      ] });
    case "pullquote":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("figure", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("blockquote", { children: str(c, "quote_text") }),
        str(c, "attribution") && /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("figcaption", { children: [
          "\u2014 ",
          str(c, "attribution")
        ] })
      ] });
    case "inline_cta":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Call to action", children: [
        str(c, "headline") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "body_text") })
      ] });
    case "social_proof_bar":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("section", { "aria-label": "Social proof", children: [
        arr(c, "proof_items").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dl", { children: arr(c, "proof_items").map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dt", { children: item.metric }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("dd", { children: item.label })
        ] }, i)) }),
        str(c, "proof_line") && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: str(c, "proof_line") })
      ] });
    default:
      return null;
  }
}
function ServerParagraphs({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(import_jsx_runtime95.Fragment, { children: text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("p", { children: p }, i)) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LANDING_SECTION_TYPES,
  LandingPageEditor,
  LandingPagesList,
  LandingPagesSection,
  LandingSectionRenderer,
  SECTION_TYPE_CATEGORIES,
  SECTION_TYPE_LABELS,
  SectionConfigEditor,
  ServerParagraphs,
  ServerSection,
  ServerSections,
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
  humaWidgetConfigSchema,
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
});
