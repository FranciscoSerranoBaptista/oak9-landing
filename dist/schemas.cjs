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

// src/schemas/index.ts
var schemas_exports = {};
__export(schemas_exports, {
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
module.exports = __toCommonJS(schemas_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
