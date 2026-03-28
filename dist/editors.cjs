"use client";
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

// src/editors/index.ts
var editors_exports = {};
__export(editors_exports, {
  LandingPageEditor: () => LandingPageEditor,
  LandingPagesList: () => LandingPagesList,
  LandingPagesSection: () => LandingPagesSection,
  SectionConfigEditor: () => SectionConfigEditor
});
module.exports = __toCommonJS(editors_exports);

// src/editors/landing-page-editor.tsx
var import_react26 = require("react");
var import_core = require("@dnd-kit/core");
var import_sortable = require("@dnd-kit/sortable");
var import_utilities = require("@dnd-kit/utilities");
var import_react27 = require("@phosphor-icons/react");
var import_react28 = require("@headlessui/react");

// src/types/landing-pages.ts
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

// src/editors/config-editors/image-url-field.tsx
var import_jsx_runtime = require("react/jsx-runtime");

// src/editors/config-editors/hero-editor.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");

// src/editors/config-editors/features-editor.tsx
var import_react = require("@phosphor-icons/react");
var import_jsx_runtime3 = require("react/jsx-runtime");

// src/editors/config-editors/video-editor.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");

// src/editors/config-editors/faq-editor.tsx
var import_react2 = require("@phosphor-icons/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT,
          placeholder: "e.g. Common Questions"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT,
          placeholder: "Frequently Asked Questions"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Questions" }),
      items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Q&A ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                const updated = items.filter((_, j) => j !== i);
                onChange({ ...config, faq_items: updated });
              },
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react2.Trash, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "select",
          {
            value: item.objection_type ?? "",
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], objection_type: e.target.value || void 0 };
              onChange({ ...config, faq_items: updated });
            },
            className: INPUT,
            children: OBJECTION_TYPES.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
          }
        )
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            faq_items: [...items, { question: "", answer: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react2.Plus, { className: "size-3.5" }),
            " Add Q&A"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "select",
        {
          value: c.layout ?? "accordion",
          onChange: (e) => onChange({ ...config, layout: e.target.value }),
          className: INPUT,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "accordion", children: "Accordion" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "stacked", children: "Stacked" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "two-columns", children: "Two Columns" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: LABEL, children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_react3 = require("@phosphor-icons/react");
var import_jsx_runtime6 = require("react/jsx-runtime");

// src/editors/config-editors/about-editor.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");

// src/editors/config-editors/testimonials-editor.tsx
var import_react4 = require("@phosphor-icons/react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var INPUT2 = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
var LABEL2 = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";
function TestimonialsEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.testimonials ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT2
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT2,
          placeholder: "What People Are Saying"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "select",
          {
            value: c.layout ?? "grid",
            onChange: (e) => onChange({ ...config, layout: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "carousel", children: "Carousel" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "grid", children: "Grid" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "single-featured", children: "Single Featured" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "stacked", children: "Stacked" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "select",
          {
            value: c.style ?? "card",
            onChange: (e) => onChange({ ...config, style: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "card", children: "Card" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "minimal", children: "Minimal" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { value: "pullquote", children: "Pullquote" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    c.use_network_testimonials !== false && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Max Items" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "flex items-center gap-2 pt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    c.use_network_testimonials === false && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { className: LABEL2, children: "Testimonials" }),
      items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Testimonial ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onChange({ ...config, testimonials: items.filter((_, j) => j !== i) }),
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react4.Trash, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            testimonials: [...items, { quote: "", attribution: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react4.Plus, { className: "size-3.5" }),
            " Add Testimonial"
          ]
        }
      )
    ] })
  ] });
}

// src/editors/config-editors/cta-banner-editor.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");

// src/editors/config-editors/hero-statement-editor.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function HeroStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "left-aligned", children: "Left Aligned" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "split", children: "Split" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Height" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("select", { value: c.height ?? "large", onChange: (e) => onChange({ ...config, height: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "viewport", children: "Viewport" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "large", children: "Large" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "medium", children: "Medium" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/hero-capture-form-editor.tsx
var import_react5 = require("@phosphor-icons/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function HeroCaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react5.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react5.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Sign Up" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Position" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("select", { value: c.form_position ?? "inline", onChange: (e) => onChange({ ...config, form_position: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "sidebar", children: "Sidebar" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "overlay", children: "Overlay" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Social Proof Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { value: c.social_proof_line ?? "", onChange: (e) => onChange({ ...config, social_proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Join 500+ professionals..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/hero-video-editor.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function HeroVideoEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: c.video_caption ?? "", onChange: (e) => onChange({ ...config, video_caption: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pattern-recognition-editor.tsx
var import_react6 = require("@phosphor-icons/react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function PatternRecognitionEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.recognition_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Recognition Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], statement: e.target.value };
          onChange({ ...config, recognition_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Recognition statement..." }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react6.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: [...items, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react6.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "cream", children: "Cream" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/problem-statement-editor.tsx
var import_react7 = require("@phosphor-icons/react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function ProblemStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.contrast_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Contrast Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Contrast ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react7.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { placeholder: "Surface reality", value: item.surface_reality ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], surface_reality: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { placeholder: "Underneath", value: item.underneath ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], underneath: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: [...items, { surface_reality: "", underneath: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react7.Plus, { className: "size-3" }),
        " Add Contrast"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("textarea", { value: c.transition_line ?? "", onChange: (e) => onChange({ ...config, transition_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/sacred-cow-editor.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function SacredCowEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sacred Cow" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { value: c.sacred_cow ?? "", onChange: (e) => onChange({ ...config, sacred_cow: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The commonly held belief..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sour Milk" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { value: c.sour_milk ?? "", onChange: (e) => onChange({ ...config, sour_milk: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Why it no longer holds..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The new perspective..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { value: c.transition_text ?? "", onChange: (e) => onChange({ ...config, transition_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("select", { value: c.visual_style ?? "quote-card", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "quote-card", children: "Quote Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rome-burning-editor.tsx
var import_react8 = require("@phosphor-icons/react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function RomeBurningEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.time_markers ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Time Markers" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Marker ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: () => onChange({ ...config, time_markers: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react8.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { placeholder: "Timeframe (e.g. 6 months)", value: item.timeframe ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], timeframe: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { placeholder: "Consequence", value: item.consequence ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], consequence: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, time_markers: [...items, { timeframe: "", consequence: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react8.Plus, { className: "size-3" }),
        " Add Marker"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/programme-overview-editor.tsx
var import_react9 = require("@phosphor-icons/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function ProgrammeOverviewEditor({
  config,
  onChange
}) {
  const c = config;
  const details = c.key_details ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Key Details" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "space-y-2", children: details.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { placeholder: "Value", value: item.value ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], value: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", onClick: () => onChange({ ...config, key_details: details.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react9.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, key_details: [...details, { label: "", value: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react9.Plus, { className: "size-3" }),
        " Add Detail"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/programme-arc-editor.tsx
var import_react10 = require("@phosphor-icons/react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function ProgrammeArcEditor({
  config,
  onChange
}) {
  const c = config;
  const phases = c.phases ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Phases" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "space-y-2", children: phases.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Phase ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", onClick: () => onChange({ ...config, phases: phases.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react10.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "number", placeholder: "Phase #", value: phase.phase_number ?? i + 1, onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { placeholder: "Phase name", value: phase.phase_name ?? "", onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_name: e.target.value };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("textarea", { placeholder: "Phase description", value: phase.phase_description ?? "", onChange: (e) => {
          const u = [...phases];
          u[i] = { ...u[i], phase_description: e.target.value };
          onChange({ ...config, phases: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, phases: [...phases, { phase_number: phases.length + 1, phase_name: "", phase_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react10.Plus, { className: "size-3" }),
        " Add Phase"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("select", { value: c.layout ?? "horizontal-timeline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "horizontal-timeline", children: "Horizontal Timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "vertical-steps", children: "Vertical Steps" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "cards-grid", children: "Cards Grid" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-this-is-isnt-editor.tsx
var import_react11 = require("@phosphor-icons/react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function WhatThisIsIsntEditor({
  config,
  onChange
}) {
  const c = config;
  const isItems = c.is_items ?? [];
  const isNotItems = c.is_not_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This IS..." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "space-y-2", children: isItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is..." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", onClick: () => onChange({ ...config, is_items: isItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react11.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, is_items: [...isItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react11.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This is NOT..." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "space-y-2", children: isNotItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isNotItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_not_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not..." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: isNotItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react11.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: [...isNotItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react11.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "alternating-rows", children: "Alternating Rows" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "single-column", children: "Single Column" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-youll-experience-editor.tsx
var import_react12 = require("@phosphor-icons/react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function WhatYoullExperienceEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.experience_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Experience Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Item ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type: "button", onClick: () => onChange({ ...config, experience_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react12.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { placeholder: "Title", value: item.title ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], title: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { placeholder: "Description", value: item.description ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], description: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, experience_items: [...items, { title: "", description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react12.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("select", { value: c.layout ?? "grid-2col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: "grid-2col", children: "Grid 2 Col" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: "grid-3col", children: "Grid 3 Col" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: "stacked-cards", children: "Stacked Cards" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: "numbered-list", children: "Numbered List" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Columns (2-4)" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { type: "number", min: 2, max: 4, value: c.columns ?? 2, onChange: (e) => onChange({ ...config, columns: parseInt(e.target.value) || 2 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/curriculum-breakdown-editor.tsx
var import_react13 = require("@phosphor-icons/react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function CurriculumBreakdownEditor({
  config,
  onChange
}) {
  const c = config;
  const modules = c.modules ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Modules" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "space-y-2", children: modules.map((mod, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Module ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", onClick: () => onChange({ ...config, modules: modules.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react13.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { type: "number", placeholder: "Module #", value: mod.module_number ?? i + 1, onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { placeholder: "Title", value: mod.module_title ?? "", onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_title: e.target.value };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("textarea", { placeholder: "Description", value: mod.module_description ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_description: e.target.value };
          onChange({ ...config, modules: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { placeholder: "Outcomes (comma-separated)", value: mod.module_outcomes ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_outcomes: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { placeholder: "Duration (e.g. 2 weeks)", value: mod.duration ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], duration: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, modules: [...modules, { module_number: modules.length + 1, module_title: "", module_description: "", module_outcomes: "", duration: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react13.Plus, { className: "size-3" }),
        " Add Module"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("select", { value: c.layout ?? "accordion", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "accordion", children: "Accordion" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "cards", children: "Cards" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "timeline", children: "Timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "stacked", children: "Stacked" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { type: "checkbox", checked: c.show_duration ?? false, onChange: (e) => onChange({ ...config, show_duration: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Duration"
    ] })
  ] });
}

// src/editors/config-editors/features-grid-editor.tsx
var import_react14 = require("@phosphor-icons/react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function FeaturesGridEditor({
  config,
  onChange
}) {
  const c = config;
  const features = c.features ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Features" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "space-y-2", children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Feature ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", onClick: () => onChange({ ...config, features: features.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react14.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { placeholder: "Title", value: f.feature_title ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_title: e.target.value };
          onChange({ ...config, features: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { placeholder: "Description", value: f.feature_description ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_description: e.target.value };
          onChange({ ...config, features: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, features: [...features, { feature_title: "", feature_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react14.Plus, { className: "size-3" }),
        " Add Feature"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("select", { value: c.layout ?? "grid-3col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "grid-2col", children: "Grid 2 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "grid-3col", children: "Grid 3 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "grid-4col", children: "Grid 4 Col" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "icon-list", children: "Icon List" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/case-study-editor.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function CaseStudyEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pattern Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("input", { value: c.pattern_name ?? "", onChange: (e) => onChange({ ...config, pattern_name: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Before State" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("textarea", { value: c.before_state ?? "", onChange: (e) => onChange({ ...config, before_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Turning Point" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("textarea", { value: c.turning_point ?? "", onChange: (e) => onChange({ ...config, turning_point: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "After State" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("textarea", { value: c.after_state ?? "", onChange: (e) => onChange({ ...config, after_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Client Words" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("textarea", { value: c.client_words ?? "", onChange: (e) => onChange({ ...config, client_words: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("select", { value: c.layout ?? "narrative", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("option", { value: "narrative", children: "Narrative" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("option", { value: "before-after", children: "Before / After" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/coach-bio-editor.tsx
var import_react15 = require("@phosphor-icons/react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function CoachBioEditor({
  config,
  onChange
}) {
  const c = config;
  const photo = c.photo ?? {};
  const creds = c.credentials ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Photo" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { placeholder: "Image URL", value: photo.url ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { placeholder: "Alt text", value: photo.alt_text ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Bio Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("textarea", { value: c.bio_text ?? "", onChange: (e) => onChange({ ...config, bio_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "space-y-2", children: creds.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { value: item.credential ?? "", onChange: (e) => {
          const u = [...creds];
          u[i] = { credential: e.target.value };
          onChange({ ...config, credentials: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Credential..." }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("button", { type: "button", onClick: () => onChange({ ...config, credentials: creds.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react15.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, credentials: [...creds, { credential: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react15.Plus, { className: "size-3" }),
        " Add Credential"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("textarea", { value: c.personal_line ?? "", onChange: (e) => onChange({ ...config, personal_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("select", { value: c.layout ?? "split", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: "split", children: "Split" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-proof-bar-editor.tsx
var import_react16 = require("@phosphor-icons/react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function SocialProofBarEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.proof_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { placeholder: "Metric (e.g. 500+)", value: item.metric ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], metric: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "w-24 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", { type: "button", onClick: () => onChange({ ...config, proof_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react16.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, proof_items: [...items, { metric: "", label: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react16.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Line" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("input", { value: c.proof_line ?? "", onChange: (e) => onChange({ ...config, proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Trusted by 500+ professionals" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("select", { value: c.layout ?? "bar", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "bar", children: "Bar" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "inline", children: "Inline" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/huma-widget-editor.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function HumaWidgetEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        "Widget ID ",
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "input",
        {
          type: "text",
          value: c.widget_id ?? "",
          onChange: (e) => onChange({ ...config, widget_id: e.target.value }),
          placeholder: "e.g. e40542b8-d50c-46f3-a03f-bd7f7f382b21",
          className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mt-1 text-xs text-zinc-400", children: "Paste the widget UUID from your Huma dashboard" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var import_react17 = require("@phosphor-icons/react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function PerfectForYouEditor({
  config,
  onChange
}) {
  const c = config;
  const forItems = c.for_items ?? [];
  const notForItems = c.not_for_items ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Perfect For..." }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "space-y-2", children: forItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...forItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is for you if..." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", onClick: () => onChange({ ...config, for_items: forItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react17.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, for_items: [...forItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react17.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "NOT For..." }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "space-y-2", children: notForItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...notForItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, not_for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not for you if..." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: notForItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react17.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: [...notForItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react17.Plus, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "single-column", children: "Single Column" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "checklist", children: "Checklist" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/objection-block-editor.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function ObjectionBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Objection" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { value: c.objection ?? "", onChange: (e) => onChange({ ...config, objection: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The common objection..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Response" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { value: c.response ?? "", onChange: (e) => onChange({ ...config, response: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Your response..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The reframed perspective..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("select", { value: c.visual_style ?? "pullquote", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: "pullquote", children: "Pullquote" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: "inline", children: "Inline" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/investment-pricing-editor.tsx
var import_react18 = require("@phosphor-icons/react");
var import_jsx_runtime29 = require("react/jsx-runtime");
function InvestmentPricingEditor({
  config,
  onChange
}) {
  const c = config;
  const tiers = c.pricing_tiers ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Tiers" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "space-y-2", children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Tier ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: tiers.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react18.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Tier name", value: tier.tier_name ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], tier_name: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Price", value: tier.price ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Currency (e.g. GBP)", value: tier.currency ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], currency: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Period (e.g. /month)", value: tier.price_period ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price_period: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Price note", value: tier.price_note ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], price_note: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("textarea", { placeholder: "Tier description", value: tier.tier_description ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], tier_description: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { placeholder: "Included items (comma-separated)", value: tier.included_items ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], included_items: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { type: "checkbox", checked: tier.is_featured ?? false, onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], is_featured: e.target.checked };
            onChange({ ...config, pricing_tiers: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Featured"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: [...tiers, { tier_name: "", price: "", currency: "GBP", price_period: "", price_note: "", tier_description: "", included_items: "", is_featured: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react18.Plus, { className: "size-3" }),
        " Add Tier"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Comparison Note" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("textarea", { value: c.comparison_note ?? "", onChange: (e) => onChange({ ...config, comparison_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("textarea", { value: c.guarantee ?? "", onChange: (e) => onChange({ ...config, guarantee: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("select", { value: c.layout ?? "cards-side-by-side", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "cards-side-by-side", children: "Cards Side by Side" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "single-centered", children: "Single Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "stacked", children: "Stacked" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/guarantee-editor.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
function GuaranteeEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("textarea", { value: c.guarantee_text ?? "", onChange: (e) => onChange({ ...config, guarantee_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("select", { value: c.guarantee_type ?? "money-back", onChange: (e) => onChange({ ...config, guarantee_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("option", { value: "money-back", children: "Money Back" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("option", { value: "satisfaction", children: "Satisfaction" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("option", { value: "fit-guarantee", children: "Fit Guarantee" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Duration" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { value: c.duration ?? "", onChange: (e) => onChange({ ...config, duration: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "30 days" })
    ] })
  ] });
}

// src/editors/config-editors/urgency-closing-editor.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function UrgencyClosingEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Urgency Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("select", { value: c.urgency_type ?? "seats-limited", onChange: (e) => onChange({ ...config, urgency_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "seats-limited", children: "Seats Limited" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "deadline", children: "Deadline" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "cohort-start", children: "Cohort Start" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "price-increase", children: "Price Increase" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Countdown Target (date/time)" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { type: "datetime-local", value: c.countdown_target ?? "", onChange: (e) => onChange({ ...config, countdown_target: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { type: "checkbox", checked: c.show_countdown ?? false, onChange: (e) => onChange({ ...config, show_countdown: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Countdown"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Remaining" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { type: "number", min: 0, value: c.seats_remaining ?? "", onChange: (e) => onChange({ ...config, seats_remaining: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { type: "number", min: 0, value: c.seats_total ?? "", onChange: (e) => onChange({ ...config, seats_total: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/capture-form-editor.tsx
var import_react19 = require("@phosphor-icons/react");
var import_jsx_runtime32 = require("react/jsx-runtime");
function CaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react19.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react19.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Submit" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("option", { value: "minimal", children: "Minimal" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/application-form-editor.tsx
var import_react20 = require("@phosphor-icons/react");
var import_jsx_runtime33 = require("react/jsx-runtime");
function ApplicationFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react20.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react20.Plus, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Programme Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("textarea", { value: c.programme_summary ?? "", onChange: (e) => onChange({ ...config, programme_summary: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Display" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("textarea", { value: c.pricing_display ?? "", onChange: (e) => onChange({ ...config, pricing_display: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Apply Now" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Post-Submit Message" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("textarea", { value: c.post_submit_message ?? "", onChange: (e) => onChange({ ...config, post_submit_message: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/inline-cta-editor.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function InlineCtaEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const secondary = c.secondary_cta ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Secondary CTA" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { placeholder: "Label", value: secondary.label ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { placeholder: "URL", value: secondary.url ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("select", { value: secondary.variant ?? "secondary", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("select", { value: c.alignment ?? "centered", onChange: (e) => onChange({ ...config, alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("option", { value: "left", children: "Left" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/confirmation-message-editor.tsx
var import_react21 = require("@phosphor-icons/react");
var import_jsx_runtime35 = require("react/jsx-runtime");
function ConfirmationMessageEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.what_happens_next ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Happens Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "number", value: step.step_number ?? i + 1, onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
          onChange({ ...config, what_happens_next: u });
        }, className: "w-16 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, what_happens_next: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Step description..." }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: steps.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react21.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: [...steps, { step_number: steps.length + 1, step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react21.Plus, { className: "size-3" }),
        " Add Step"
      ] })
    ] })
  ] });
}

// src/editors/config-editors/diagnostic-framing-editor.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function DiagnosticFramingEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Action Taken" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { value: c.action_taken ?? "", onChange: (e) => onChange({ ...config, action_taken: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "What the visitor just did..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What It Says About You" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("textarea", { value: c.what_it_says ?? "", onChange: (e) => onChange({ ...config, what_it_says: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Comes Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("textarea", { value: c.what_comes_next ?? "", onChange: (e) => onChange({ ...config, what_comes_next: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/quick-win-editor.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function QuickWinEditor({
  config,
  onChange
}) {
  const c = config;
  const res = c.resource ?? {};
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Resource" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { placeholder: "Title", value: res.resource_title ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_title: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { placeholder: "Description", value: res.resource_description ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_description: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { placeholder: "URL", value: res.resource_url ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("select", { value: res.resource_type ?? "pdf", onChange: (e) => onChange({ ...config, resource: { ...res, resource_type: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "pdf", children: "PDF" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "video", children: "Video" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "article", children: "Article" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "template", children: "Template" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "checklist", children: "Checklist" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-share-editor.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("textarea", { value: c.share_text ?? "", onChange: (e) => onChange({ ...config, share_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Platforms" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "space-y-1", children: PLATFORM_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "checkbox", checked: platforms.includes(opt.value), onChange: () => togglePlatform(opt.value), className: "rounded border-zinc-300 dark:border-zinc-600" }),
        opt.label
      ] }, opt.value)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { value: c.share_url ?? "", onChange: (e) => onChange({ ...config, share_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("select", { value: c.layout ?? "inline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/post-purchase-welcome-editor.tsx
var import_react22 = require("@phosphor-icons/react");
var import_jsx_runtime39 = require("react/jsx-runtime");
function PostPurchaseWelcomeEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.next_steps ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Welcome Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("textarea", { value: c.welcome_text ?? "", onChange: (e) => onChange({ ...config, welcome_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Next Steps" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Step ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("button", { type: "button", onClick: () => onChange({ ...config, next_steps: steps.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react22.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { type: "number", placeholder: "#", value: step.step_number ?? i + 1, onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { placeholder: "Title", value: step.step_title ?? "", onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_title: e.target.value };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { placeholder: "Description", value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, next_steps: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, next_steps: [...steps, { step_number: steps.length + 1, step_title: "", step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react22.Plus, { className: "size-3" }),
        " Add Step"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Community Link" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { value: c.community_link ?? "", onChange: (e) => onChange({ ...config, community_link: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Note" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("textarea", { value: c.personal_note ?? "", onChange: (e) => onChange({ ...config, personal_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rich-text-block-editor.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
function RichTextBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 8, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Max Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("select", { value: c.max_width ?? "medium", onChange: (e) => onChange({ ...config, max_width: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "narrow", children: "Narrow" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "medium", children: "Medium" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "full", children: "Full" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("select", { value: c.background_style ?? "transparent", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("select", { value: c.text_alignment ?? "left", onChange: (e) => onChange({ ...config, text_alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "centered", children: "Centered" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pullquote-editor.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function PullquoteEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Quote Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("textarea", { value: c.quote_text ?? "", onChange: (e) => onChange({ ...config, quote_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Attribution" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { value: c.attribution ?? "", onChange: (e) => onChange({ ...config, attribution: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("select", { value: c.style ?? "large-text", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "large-text", children: "Large Text" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "bordered-left", children: "Bordered Left" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "dark-card", children: "Dark Card" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("select", { value: c.background_style ?? "", onChange: (e) => onChange({ ...config, background_style: e.target.value || void 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "", children: "Default" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("option", { value: "cream", children: "Cream" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/data-statistic-editor.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
function DataStatisticEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { value: c.metric ?? "", onChange: (e) => onChange({ ...config, metric: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "87%" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric Label" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { value: c.metric_label ?? "", onChange: (e) => onChange({ ...config, metric_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "completion rate" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Source" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("input", { value: c.source ?? "", onChange: (e) => onChange({ ...config, source: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Source attribution" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Context Text" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("textarea", { value: c.context_text ?? "", onChange: (e) => onChange({ ...config, context_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("select", { value: c.style ?? "dark-card", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("option", { value: "dark-card", children: "Dark Card" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/image-block-editor.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
function ImageBlockEditor({
  config,
  onChange
}) {
  const c = config;
  const img = c.image ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Image" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("input", { placeholder: "Image URL", value: img.url ?? "", onChange: (e) => onChange({ ...config, image: { ...img, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("input", { placeholder: "Alt text", value: img.alt_text ?? "", onChange: (e) => onChange({ ...config, image: { ...img, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("option", { value: "contained", children: "Contained" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("option", { value: "small-centered", children: "Small Centered" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/video-block-editor.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function VideoBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "checkbox", checked: c.autoplay ?? false, onChange: (e) => onChange({ ...config, autoplay: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Autoplay"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("option", { value: "contained", children: "Contained" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/comparison-table-editor.tsx
var import_react23 = require("@phosphor-icons/react");
var import_jsx_runtime45 = require("react/jsx-runtime");
function ComparisonTableEditor({
  config,
  onChange
}) {
  const c = config;
  const headers = c.column_headers ?? ["", ""];
  const rows = c.rows ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Column Headers" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "space-y-2", children: headers.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { value: h, onChange: (e) => {
          const u = [...headers];
          u[i] = e.target.value;
          onChange({ ...config, column_headers: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: `Column ${i + 1}` }),
        headers.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { type: "button", onClick: () => {
          const u = headers.filter((_, j) => j !== i);
          const ur = rows.map((r) => ({ ...r, column_values: (r.column_values ?? []).filter((_, j) => j !== i) }));
          onChange({ ...config, column_headers: u, rows: ur });
        }, className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react23.Trash, { className: "size-4" }) })
      ] }, i)) }),
      headers.length < 3 && /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("button", { type: "button", onClick: () => {
        const u = [...headers, ""];
        const ur = rows.map((r) => ({ ...r, column_values: [...r.column_values ?? [], ""] }));
        onChange({ ...config, column_headers: u, rows: ur });
      }, className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react23.Plus, { className: "size-3" }),
        " Add Column"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Rows" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "space-y-2", children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Row ",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { type: "button", onClick: () => onChange({ ...config, rows: rows.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react23.Trash, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { placeholder: "Row label", value: row.row_label ?? "", onChange: (e) => {
          const u = [...rows];
          u[i] = { ...u[i], row_label: e.target.value };
          onChange({ ...config, rows: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${headers.length}, 1fr)` }, children: headers.map((_, ci) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { placeholder: headers[ci] || `Col ${ci + 1}`, value: (row.column_values ?? [])[ci] ?? "", onChange: (e) => {
          const u = [...rows];
          const vals = [...u[i]?.column_values ?? []];
          vals[ci] = e.target.value;
          u[i] = { ...u[i], column_values: vals };
          onChange({ ...config, rows: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }, ci)) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, rows: [...rows, { row_label: "", column_values: headers.map(() => "") }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react23.Plus, { className: "size-3" }),
        " Add Row"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Highlight Column (0-indexed)" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("input", { type: "number", min: 0, max: headers.length - 1, value: c.highlight_column ?? 0, onChange: (e) => onChange({ ...config, highlight_column: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/section-divider-editor.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
function SectionDividerEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Divider Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("select", { value: c.divider_style ?? "line", onChange: (e) => onChange({ ...config, divider_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "line", children: "Line" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "dots", children: "Dots" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "space-only", children: "Space Only" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "bird-icon", children: "Bird Icon" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Spacing" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("select", { value: c.spacing ?? "medium", onChange: (e) => onChange({ ...config, spacing: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "small", children: "Small" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "medium", children: "Medium" }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/anchor-navigation-editor.tsx
var import_react24 = require("@phosphor-icons/react");
var import_jsx_runtime47 = require("react/jsx-runtime");
function AnchorNavigationEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.nav_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Nav Items" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { placeholder: "Anchor ID", value: item.anchor_id ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], anchor_id: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("button", { type: "button", onClick: () => onChange({ ...config, nav_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react24.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, nav_items: [...items, { label: "", anchor_id: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react24.Plus, { className: "size-3" }),
        " Add Nav Item"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("select", { value: c.style ?? "sticky-top", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "sticky-top", children: "Sticky Top" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "sidebar", children: "Sidebar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("input", { type: "checkbox", checked: c.show_on_mobile ?? false, onChange: (e) => onChange({ ...config, show_on_mobile: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show on Mobile"
    ] })
  ] });
}

// src/editors/config-editors/page-header-editor.tsx
var import_react25 = require("@phosphor-icons/react");
var import_jsx_runtime48 = require("react/jsx-runtime");
function PageHeaderEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.breadcrumb_items ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("input", { value: c.page_title ?? "", onChange: (e) => onChange({ ...config, page_title: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Breadcrumbs" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("input", { placeholder: "URL", value: item.url ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], url: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react25.Trash, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: [...items, { label: "", url: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react25.Plus, { className: "size-3" }),
        " Add Breadcrumb"
      ] })
    ] })
  ] });
}

// src/editors/landing-section-config-editor.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
function SectionConfigEditor({ type, config, onChange }) {
  const props = { config, onChange };
  switch (type) {
    // Hero
    case "hero_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(HeroStatementEditor, { ...props });
    case "hero_capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(HeroCaptureFormEditor, { ...props });
    case "hero_video":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(HeroVideoEditor, { ...props });
    // Problem & Recognition
    case "pattern_recognition":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PatternRecognitionEditor, { ...props });
    case "problem_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ProblemStatementEditor, { ...props });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SacredCowEditor, { ...props });
    case "rome_is_burning":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(RomeBurningEditor, { ...props });
    // Solution & Programme
    case "programme_overview":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ProgrammeOverviewEditor, { ...props });
    case "programme_arc":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ProgrammeArcEditor, { ...props });
    case "what_this_is_isnt":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(WhatThisIsIsntEditor, { ...props });
    case "what_youll_experience":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(WhatYoullExperienceEditor, { ...props });
    case "curriculum_breakdown":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CurriculumBreakdownEditor, { ...props });
    case "features_grid":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(FeaturesGridEditor, { ...props });
    // Trust & Proof
    case "testimonials":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(TestimonialsEditor, { ...props });
    case "case_study":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CaseStudyEditor, { ...props });
    case "coach_bio":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CoachBioEditor, { ...props });
    case "social_proof_bar":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SocialProofBarEditor, { ...props });
    case "huma_widget":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(HumaWidgetEditor, { ...props });
    // Qualification & Objection
    case "perfect_for_you":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PerfectForYouEditor, { ...props });
    case "faq":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(FaqEditor, { ...props });
    case "objection_block":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ObjectionBlockEditor, { ...props });
    // Pricing & Commitment
    case "investment_pricing":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(InvestmentPricingEditor, { ...props });
    case "guarantee":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(GuaranteeEditor, { ...props });
    case "urgency_closing":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(UrgencyClosingEditor, { ...props });
    // Forms & Capture
    case "capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CaptureFormEditor, { ...props });
    case "application_form":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ApplicationFormEditor, { ...props });
    case "inline_cta":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(InlineCtaEditor, { ...props });
    // Confirmation & Thank You
    case "confirmation_message":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ConfirmationMessageEditor, { ...props });
    case "diagnostic_framing":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DiagnosticFramingEditor, { ...props });
    case "quick_win":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(QuickWinEditor, { ...props });
    case "social_share":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SocialShareEditor, { ...props });
    case "post_purchase_welcome":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PostPurchaseWelcomeEditor, { ...props });
    // Content & Narrative
    case "rich_text":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(RichTextBlockEditor, { ...props });
    case "pullquote":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PullquoteEditor, { ...props });
    case "data_statistic":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DataStatisticEditor, { ...props });
    case "image_block":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ImageBlockEditor, { ...props });
    case "video_block":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(VideoBlockEditor, { ...props });
    case "comparison_table":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ComparisonTableEditor, { ...props });
    // Structural & Navigation
    case "section_divider":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SectionDividerEditor, { ...props });
    case "anchor_navigation":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AnchorNavigationEditor, { ...props });
    case "page_header_breadcrumb":
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PageHeaderEditor, { ...props });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("p", { className: "text-xs text-zinc-500", children: [
        "No editor available for section type \u201C",
        type,
        "\u201D."
      ] });
  }
}

// src/editors/landing-page-editor.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
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
    const arr = c[key];
    if (arr?.length) return `${arr.length} items`;
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "div",
    {
      ref: setNodeRef,
      style,
      className: `rounded-xl border bg-white shadow-sm dark:bg-surface-raised ${isDragging ? "ring-2 ring-brand-500 shadow-lg border-brand-500" : "border-zinc-200 dark:border-surface-border"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3 px-3 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              type: "button",
              className: "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-grab active:cursor-grabbing",
              ...attributes,
              ...listeners,
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.DotsSixVertical, { className: "size-5", weight: "bold" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
            summary && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "ml-2 text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
              "\u2014 ",
              summary
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              onClick: onToggleVisibility,
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: section.visible ? "Hide" : "Show",
              children: section.visible ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.Eye, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.EyeSlash, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              onClick: onToggleEdit,
              className: `rounded p-1 ${isEditing ? "bg-brand-50 text-brand-600 dark:bg-brand-600/10 dark:text-brand-400" : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.PencilSimple, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              onClick: onRemove,
              className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400",
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.Trash, { className: "size-4" })
            }
          )
        ] }),
        isEditing && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "border-t border-zinc-100 px-4 py-3 dark:border-surface-border max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Background" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "flex gap-2", children: [
              { value: void 0, label: "Default", preview: "bg-zinc-100 dark:bg-surface-base" },
              { value: "light", label: "Light", preview: "bg-white dark:bg-surface-secondary" },
              { value: "cream", label: "Cream", preview: "bg-amber-100 dark:bg-surface-overlay" },
              { value: "dark", label: "Dark", preview: "bg-zinc-800 dark:bg-zinc-950" },
              { value: "transparent", label: "None", preview: "bg-transparent border border-dashed border-zinc-300 dark:border-zinc-600" }
            ].map((opt) => {
              const current = section.config.background_style ?? void 0;
              const isActive = current === opt.value;
              return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: `size-3 rounded-full ${opt.preview}` }),
                    opt.label
                  ]
                },
                opt.label
              );
            }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "rounded-xl border border-brand-500 bg-white shadow-lg ring-2 ring-brand-500 dark:bg-surface-raised px-3 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.DotsSixVertical, { className: "size-5 text-zinc-400", weight: "bold" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
    summary && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
      "\u2014 ",
      summary
    ] })
  ] }) });
}
function AddSectionMenu({ onAdd }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_react28.Menu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
      import_react28.MenuButton,
      {
        as: "button",
        className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.Plus, { className: "size-3.5" }),
          "Add Section"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react28.MenuItems, { anchor: "bottom end", className: "bg-white dark:bg-surface-raised rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-2 max-h-96 overflow-y-auto w-72", children: SECTION_TYPE_CATEGORIES.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: i > 0 ? "mt-2" : "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500", children: cat.label }),
      cat.types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        import_react28.MenuItem,
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
  const [sections, setSections] = (0, import_react26.useState)([]);
  const [editingSectionId, setEditingSectionId] = (0, import_react26.useState)(null);
  const [activeId, setActiveId] = (0, import_react26.useState)(null);
  const [pageTitle, setPageTitle] = (0, import_react26.useState)("");
  const [pageSlug, setPageSlug] = (0, import_react26.useState)("");
  const [pageStatus, setPageStatus] = (0, import_react26.useState)("draft");
  const [ctaModeType, setCtaModeType] = (0, import_react26.useState)("none");
  const [ctaExternalUrl, setCtaExternalUrl] = (0, import_react26.useState)("");
  const [ctaPlanId, setCtaPlanId] = (0, import_react26.useState)("");
  const [ctaFormTarget, setCtaFormTarget] = (0, import_react26.useState)("capture_form");
  (0, import_react26.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
    showHeader && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "rounded p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
          children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.ArrowLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: page.title }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-caption text-zinc-400", children: page.pageType.replace(/_/g, " ") })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mb-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "input",
            {
              value: pageTitle,
              onChange: (e) => setPageTitle(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Slug" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "input",
            {
              value: pageSlug,
              onChange: (e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")),
              placeholder: "my-landing-page",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Status" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
            "select",
            {
              value: pageStatus,
              onChange: (e) => setPageStatus(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "draft", children: "Draft" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "published", children: "Published" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "archived", children: "Archived" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button Action" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mb-3 flex gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-surface-border dark:bg-surface-base", children: [
          { value: "none", label: "Not set" },
          { value: "checkout", label: "Checkout" },
          { value: "external_link", label: "External Link" },
          { value: "form_capture", label: "Form on Page" }
        ].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setCtaModeType(opt.value),
            className: `flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${ctaModeType === opt.value ? "bg-white text-zinc-900 shadow-sm dark:bg-surface-raised dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"}`,
            children: opt.label
          },
          opt.value
        )) }),
        ctaModeType === "checkout" && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Plan" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
            "select",
            {
              value: ctaPlanId,
              onChange: (e) => setCtaPlanId(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "", children: "Select a plan..." }),
                plansData?.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("option", { value: plan.id, children: [
                  plan.name,
                  plan.amountCents ? ` \u2014 ${plan.currency} ${(plan.amountCents / 100).toFixed(0)}` : " \u2014 Free"
                ] }, plan.id))
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons link to this plan's checkout page." })
        ] }),
        ctaModeType === "external_link" && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "URL" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "input",
            {
              value: ctaExternalUrl,
              onChange: (e) => setCtaExternalUrl(e.target.value),
              placeholder: "https://calendly.com/... or https://typeform.com/...",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons open this URL (booking page, application form, etc.)." })
        ] }),
        ctaModeType === "form_capture" && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Scroll to" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
            "select",
            {
              value: ctaFormTarget,
              onChange: (e) => setCtaFormTarget(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "capture_form", children: "Capture Form" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("option", { value: "application_form", children: "Application Form" })
              ]
            }
          ),
          !sections.some((s) => s.section_type === ctaFormTarget) && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { className: "mt-1 text-xs text-amber-600 dark:text-amber-400", children: [
            "No ",
            ctaFormTarget === "capture_form" ? "Capture Form" : "Application Form",
            " section on this page yet. Add one for this to work."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons scroll to the form section on this page." })
        ] }),
        ctaModeType === "none" && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-zinc-400 dark:text-zinc-500", children: "Each section's CTA button uses its own URL. Set a mode to override all buttons at once." })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h3", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: "Sections" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(AddSectionMenu, { onAdd: addSection })
    ] }),
    saveSectionsSuccess && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 dark:bg-green-950/30 dark:text-green-400", children: "Sections saved." }),
    sections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "No sections yet. Click \u201CAdd Section\u201D to start building." }) }) : /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
      import_core.DndContext,
      {
        sensors,
        collisionDetection: import_core.closestCenter,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            import_sortable.SortableContext,
            {
              items: sections.map((s) => s.id),
              strategy: import_sortable.verticalListSortingStrategy,
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_core.DragOverlay, { children: activeSection ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(SectionOverlayCard, { section: activeSection }) : null })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "sticky bottom-0 mt-6 -mx-4 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-surface-border dark:bg-surface-raised/95", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-end gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "button",
        {
          type: "button",
          onClick: handleSavePage,
          disabled: isSavingPage,
          className: "rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300",
          children: isSavingPage ? "Saving..." : "Save Page Settings"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
        "button",
        {
          type: "button",
          onClick: handleSaveSections,
          disabled: !isDirty || isSavingSections,
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-40",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react27.FloppyDisk, { className: "size-4" }),
            isSavingSections ? "Saving..." : "Save Sections"
          ]
        }
      )
    ] }) })
  ] });
}

// src/editors/landing-pages-list.tsx
var import_react29 = require("react");
var import_react30 = require("@phosphor-icons/react");
var import_jsx_runtime51 = require("react/jsx-runtime");
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
  const [showCreateForm, setShowCreateForm] = (0, import_react29.useState)(false);
  const [newPageType, setNewPageType] = (0, import_react29.useState)("course_landing");
  const [newPageTitle, setNewPageTitle] = (0, import_react29.useState)("");
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      "div",
      {
        className: "h-16 animate-pulse rounded-xl bg-zinc-100 dark:bg-surface-raised"
      },
      i
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: "Landing Pages" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "mt-1 text-body text-zinc-500 dark:text-zinc-400", children: "Create and manage landing pages for your network." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => setShowCreateForm(true),
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react30.Plus, { className: "size-3.5" }),
            "New Page"
          ]
        }
      )
    ] }),
    showCreateForm && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mt-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Type" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "select",
          {
            value: newPageType,
            onChange: (e) => setNewPageType(e.target.value),
            className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
            children: Object.entries(PAGE_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("option", { value, children: label }, value))
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
    !pages || pages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "mt-4 rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react30.Globe, { className: "mx-auto size-8 text-zinc-300 dark:text-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: "No landing pages yet. Create one to get started." })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mt-4 space-y-2", children: pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-surface-border dark:bg-surface-raised",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white truncate", children: page.title }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                "span",
                {
                  className: `rounded-full px-2 py-0.5 text-caption font-medium ${STATUS_COLORS[page.status]}`,
                  children: page.status
                }
              ),
              page.isDefault && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "rounded-full bg-brand-100 px-2 py-0.5 text-caption font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: "Default" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "mt-0.5 flex items-center gap-2 text-caption text-zinc-400 dark:text-zinc-500", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: PAGE_TYPE_LABELS[page.pageType] ?? page.pageType }),
              page.slug && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "\xB7" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("span", { children: [
                  "/landing/",
                  page.slug
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onSelectPage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Edit sections",
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react30.PencilSimple, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onDuplicatePage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Duplicate",
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react30.Copy, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react30.Trash, { className: "size-4" })
            }
          )
        ]
      },
      page.id
    )) })
  ] });
}

// src/editors/landing-pages-section.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LandingPageEditor,
  LandingPagesList,
  LandingPagesSection,
  SectionConfigEditor
});
