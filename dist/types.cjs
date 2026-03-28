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

// src/types/index.ts
var types_exports = {};
__export(types_exports, {
  LANDING_SECTION_TYPES: () => LANDING_SECTION_TYPES,
  SECTION_TYPE_CATEGORIES: () => SECTION_TYPE_CATEGORIES,
  SECTION_TYPE_LABELS: () => SECTION_TYPE_LABELS
});
module.exports = __toCommonJS(types_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LANDING_SECTION_TYPES,
  SECTION_TYPE_CATEGORIES,
  SECTION_TYPE_LABELS
});
