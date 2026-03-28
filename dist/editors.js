"use client";

// src/editors/landing-page-editor.tsx
import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus as Plus26,
  Trash as Trash26,
  Eye,
  EyeSlash,
  PencilSimple,
  DotsSixVertical,
  ArrowLeft,
  FloppyDisk
} from "@phosphor-icons/react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

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
import { jsx, jsxs } from "react/jsx-runtime";

// src/editors/config-editors/hero-editor.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";

// src/editors/config-editors/features-editor.tsx
import { Plus, Trash } from "@phosphor-icons/react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";

// src/editors/config-editors/video-editor.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";

// src/editors/config-editors/faq-editor.tsx
import { Plus as Plus2, Trash as Trash2 } from "@phosphor-icons/react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Section Label" }),
      /* @__PURE__ */ jsx5(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT,
          placeholder: "e.g. Common Questions"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Headline" }),
      /* @__PURE__ */ jsx5(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT,
          placeholder: "Frequently Asked Questions"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Introduction" }),
      /* @__PURE__ */ jsx5(
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
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Questions" }),
      items.map((item, i) => /* @__PURE__ */ jsxs5("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs5("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs5("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Q&A ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx5(
            "button",
            {
              type: "button",
              onClick: () => {
                const updated = items.filter((_, j) => j !== i);
                onChange({ ...config, faq_items: updated });
              },
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ jsx5(Trash2, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx5(
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
        /* @__PURE__ */ jsx5(
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
        /* @__PURE__ */ jsx5(
          "select",
          {
            value: item.objection_type ?? "",
            onChange: (e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], objection_type: e.target.value || void 0 };
              onChange({ ...config, faq_items: updated });
            },
            className: INPUT,
            children: OBJECTION_TYPES.map((opt) => /* @__PURE__ */ jsx5("option", { value: opt.value, children: opt.label }, opt.value))
          }
        )
      ] }, i)),
      /* @__PURE__ */ jsxs5(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            faq_items: [...items, { question: "", answer: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ jsx5(Plus2, { className: "size-3.5" }),
            " Add Q&A"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Layout" }),
      /* @__PURE__ */ jsxs5(
        "select",
        {
          value: c.layout ?? "accordion",
          onChange: (e) => onChange({ ...config, layout: e.target.value }),
          className: INPUT,
          children: [
            /* @__PURE__ */ jsx5("option", { value: "accordion", children: "Accordion" }),
            /* @__PURE__ */ jsx5("option", { value: "stacked", children: "Stacked" }),
            /* @__PURE__ */ jsx5("option", { value: "two-columns", children: "Two Columns" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx5("label", { className: LABEL, children: "Closing Text" }),
      /* @__PURE__ */ jsx5(
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
import { Plus as Plus3, Trash as Trash3 } from "@phosphor-icons/react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";

// src/editors/config-editors/about-editor.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";

// src/editors/config-editors/testimonials-editor.tsx
import { Plus as Plus4, Trash as Trash4 } from "@phosphor-icons/react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var INPUT2 = "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";
var LABEL2 = "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400";
function TestimonialsEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.testimonials ?? [];
  return /* @__PURE__ */ jsxs8("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Section Label" }),
      /* @__PURE__ */ jsx8(
        "input",
        {
          value: c.section_label ?? "",
          onChange: (e) => onChange({ ...config, section_label: e.target.value }),
          className: INPUT2
        }
      )
    ] }),
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Headline" }),
      /* @__PURE__ */ jsx8(
        "input",
        {
          value: c.headline ?? "",
          onChange: (e) => onChange({ ...config, headline: e.target.value }),
          className: INPUT2,
          placeholder: "What People Are Saying"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Layout" }),
        /* @__PURE__ */ jsxs8(
          "select",
          {
            value: c.layout ?? "grid",
            onChange: (e) => onChange({ ...config, layout: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ jsx8("option", { value: "carousel", children: "Carousel" }),
              /* @__PURE__ */ jsx8("option", { value: "grid", children: "Grid" }),
              /* @__PURE__ */ jsx8("option", { value: "single-featured", children: "Single Featured" }),
              /* @__PURE__ */ jsx8("option", { value: "stacked", children: "Stacked" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Style" }),
        /* @__PURE__ */ jsxs8(
          "select",
          {
            value: c.style ?? "card",
            onChange: (e) => onChange({ ...config, style: e.target.value }),
            className: INPUT2,
            children: [
              /* @__PURE__ */ jsx8("option", { value: "card", children: "Card" }),
              /* @__PURE__ */ jsx8("option", { value: "minimal", children: "Minimal" }),
              /* @__PURE__ */ jsx8("option", { value: "pullquote", children: "Pullquote" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ jsx8(
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
    c.use_network_testimonials !== false && /* @__PURE__ */ jsxs8("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Max Items" }),
        /* @__PURE__ */ jsx8(
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
      /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-2 pt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ jsx8(
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
    c.use_network_testimonials === false && /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx8("label", { className: LABEL2, children: "Testimonials" }),
      items.map((item, i) => /* @__PURE__ */ jsxs8("div", { className: "mb-2 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs8("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs8("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Testimonial ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx8(
            "button",
            {
              type: "button",
              onClick: () => onChange({ ...config, testimonials: items.filter((_, j) => j !== i) }),
              className: "text-zinc-400 hover:text-red-500",
              children: /* @__PURE__ */ jsx8(Trash4, { className: "size-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx8(
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
        /* @__PURE__ */ jsx8(
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
        /* @__PURE__ */ jsx8(
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
      /* @__PURE__ */ jsxs8(
        "button",
        {
          type: "button",
          onClick: () => onChange({
            ...config,
            testimonials: [...items, { quote: "", attribution: "" }]
          }),
          className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400",
          children: [
            /* @__PURE__ */ jsx8(Plus4, { className: "size-3.5" }),
            " Add Testimonial"
          ]
        }
      )
    ] })
  ] });
}

// src/editors/config-editors/cta-banner-editor.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";

// src/editors/config-editors/hero-statement-editor.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function HeroStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ jsxs10("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs10("div", { children: [
      /* @__PURE__ */ jsx10("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx10("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs10("div", { children: [
      /* @__PURE__ */ jsx10("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ jsx10("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs10("div", { children: [
      /* @__PURE__ */ jsx10("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx10("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs10("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx10("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs10("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx10("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx10("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs10("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx10("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx10("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx10("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx10("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx10("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ jsxs10("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx10("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx10("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx10("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ jsxs10("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx10("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ jsx10("option", { value: "left-aligned", children: "Left Aligned" }),
          /* @__PURE__ */ jsx10("option", { value: "split", children: "Split" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx10("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Height" }),
        /* @__PURE__ */ jsxs10("select", { value: c.height ?? "large", onChange: (e) => onChange({ ...config, height: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx10("option", { value: "viewport", children: "Viewport" }),
          /* @__PURE__ */ jsx10("option", { value: "large", children: "Large" }),
          /* @__PURE__ */ jsx10("option", { value: "medium", children: "Medium" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/hero-capture-form-editor.tsx
import { Plus as Plus5, Trash as Trash5 } from "@phosphor-icons/react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function HeroCaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  const bg = c.background_image ?? {};
  return /* @__PURE__ */ jsxs11("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx11("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ jsx11("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx11("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ jsx11("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ jsxs11("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs11("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs11("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx11("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx11(Trash5, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx11("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx11("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsxs11("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ jsx11("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ jsx11("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ jsx11("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ jsx11("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ jsx11("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ jsx11("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsxs11("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ jsx11("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxs11("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx11(Plus5, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ jsx11("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Sign Up" })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Position" }),
      /* @__PURE__ */ jsxs11("select", { value: c.form_position ?? "inline", onChange: (e) => onChange({ ...config, form_position: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx11("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ jsx11("option", { value: "sidebar", children: "Sidebar" }),
        /* @__PURE__ */ jsx11("option", { value: "overlay", children: "Overlay" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Social Proof Line" }),
      /* @__PURE__ */ jsx11("input", { value: c.social_proof_line ?? "", onChange: (e) => onChange({ ...config, social_proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Join 500+ professionals..." })
    ] }),
    /* @__PURE__ */ jsxs11("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx11("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Image" }),
      /* @__PURE__ */ jsxs11("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx11("input", { placeholder: "Image URL", value: bg.url ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx11("input", { placeholder: "Alt text", value: bg.alt_text ?? "", onChange: (e) => onChange({ ...config, background_image: { ...bg, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs11("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx11("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ jsx11("option", { value: "split", children: "Split" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ jsx11("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx11("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ jsx11("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/hero-video-editor.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
function HeroVideoEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs12("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs12("div", { children: [
      /* @__PURE__ */ jsx12("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx12("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs12("div", { children: [
      /* @__PURE__ */ jsx12("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ jsx12("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs12("div", { children: [
      /* @__PURE__ */ jsx12("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ jsx12("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ jsxs12("div", { children: [
      /* @__PURE__ */ jsx12("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video Caption" }),
      /* @__PURE__ */ jsx12("input", { value: c.video_caption ?? "", onChange: (e) => onChange({ ...config, video_caption: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs12("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx12("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs12("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx12("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx12("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs12("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx12("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx12("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx12("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx12("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs12("div", { children: [
      /* @__PURE__ */ jsx12("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs12("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx12("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ jsx12("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pattern-recognition-editor.tsx
import { Plus as Plus6, Trash as Trash6 } from "@phosphor-icons/react";
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
function PatternRecognitionEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.recognition_items ?? [];
  return /* @__PURE__ */ jsxs13("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx13("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx13("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx13("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Recognition Items" }),
      /* @__PURE__ */ jsx13("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs13("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx13("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], statement: e.target.value };
          onChange({ ...config, recognition_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Recognition statement..." }),
        /* @__PURE__ */ jsx13("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx13(Trash6, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs13("button", { type: "button", onClick: () => onChange({ ...config, recognition_items: [...items, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx13(Plus6, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ jsx13("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx13("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
      /* @__PURE__ */ jsxs13("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx13("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ jsx13("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ jsx13("option", { value: "cream", children: "Cream" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/problem-statement-editor.tsx
import { Plus as Plus7, Trash as Trash7 } from "@phosphor-icons/react";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
function ProblemStatementEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.contrast_items ?? [];
  return /* @__PURE__ */ jsxs14("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx14("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx14("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx14("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx14("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx14("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx14("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx14("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Contrast Items" }),
      /* @__PURE__ */ jsx14("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs14("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs14("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs14("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Contrast ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx14("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx14(Trash7, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsx14("input", { placeholder: "Surface reality", value: item.surface_reality ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], surface_reality: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx14("input", { placeholder: "Underneath", value: item.underneath ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], underneath: e.target.value };
          onChange({ ...config, contrast_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs14("button", { type: "button", onClick: () => onChange({ ...config, contrast_items: [...items, { surface_reality: "", underneath: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx14(Plus7, { className: "size-3" }),
        " Add Contrast"
      ] })
    ] }),
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx14("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Line" }),
      /* @__PURE__ */ jsx14("textarea", { value: c.transition_line ?? "", onChange: (e) => onChange({ ...config, transition_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/sacred-cow-editor.tsx
import { jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
function SacredCowEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs15("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sacred Cow" }),
      /* @__PURE__ */ jsx15("textarea", { value: c.sacred_cow ?? "", onChange: (e) => onChange({ ...config, sacred_cow: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The commonly held belief..." })
    ] }),
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Sour Milk" }),
      /* @__PURE__ */ jsx15("textarea", { value: c.sour_milk ?? "", onChange: (e) => onChange({ ...config, sour_milk: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Why it no longer holds..." })
    ] }),
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ jsx15("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The new perspective..." })
    ] }),
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Transition Text" }),
      /* @__PURE__ */ jsx15("textarea", { value: c.transition_text ?? "", onChange: (e) => onChange({ ...config, transition_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ jsxs15("select", { value: c.visual_style ?? "quote-card", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx15("option", { value: "quote-card", children: "Quote Card" }),
        /* @__PURE__ */ jsx15("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ jsx15("option", { value: "split", children: "Split" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rome-burning-editor.tsx
import { Plus as Plus8, Trash as Trash8 } from "@phosphor-icons/react";
import { jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
function RomeBurningEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.time_markers ?? [];
  return /* @__PURE__ */ jsxs16("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs16("div", { children: [
      /* @__PURE__ */ jsx16("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx16("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs16("div", { children: [
      /* @__PURE__ */ jsx16("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx16("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs16("div", { children: [
      /* @__PURE__ */ jsx16("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Time Markers" }),
      /* @__PURE__ */ jsx16("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs16("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs16("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs16("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Marker ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx16("button", { type: "button", onClick: () => onChange({ ...config, time_markers: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx16(Trash8, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsx16("input", { placeholder: "Timeframe (e.g. 6 months)", value: item.timeframe ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], timeframe: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx16("input", { placeholder: "Consequence", value: item.consequence ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], consequence: e.target.value };
          onChange({ ...config, time_markers: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs16("button", { type: "button", onClick: () => onChange({ ...config, time_markers: [...items, { timeframe: "", consequence: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx16(Plus8, { className: "size-3" }),
        " Add Marker"
      ] })
    ] }),
    /* @__PURE__ */ jsxs16("div", { children: [
      /* @__PURE__ */ jsx16("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Line" }),
      /* @__PURE__ */ jsx16("textarea", { value: c.closing_line ?? "", onChange: (e) => onChange({ ...config, closing_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/programme-overview-editor.tsx
import { Plus as Plus9, Trash as Trash9 } from "@phosphor-icons/react";
import { jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
function ProgrammeOverviewEditor({
  config,
  onChange
}) {
  const c = config;
  const details = c.key_details ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs17("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs17("div", { children: [
      /* @__PURE__ */ jsx17("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx17("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs17("div", { children: [
      /* @__PURE__ */ jsx17("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx17("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs17("div", { children: [
      /* @__PURE__ */ jsx17("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ jsx17("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs17("div", { children: [
      /* @__PURE__ */ jsx17("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx17("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs17("div", { children: [
      /* @__PURE__ */ jsx17("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Key Details" }),
      /* @__PURE__ */ jsx17("div", { className: "space-y-2", children: details.map((item, i) => /* @__PURE__ */ jsxs17("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx17("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx17("input", { placeholder: "Value", value: item.value ?? "", onChange: (e) => {
          const u = [...details];
          u[i] = { ...u[i], value: e.target.value };
          onChange({ ...config, key_details: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx17("button", { type: "button", onClick: () => onChange({ ...config, key_details: details.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx17(Trash9, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs17("button", { type: "button", onClick: () => onChange({ ...config, key_details: [...details, { label: "", value: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx17(Plus9, { className: "size-3" }),
        " Add Detail"
      ] })
    ] }),
    /* @__PURE__ */ jsxs17("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx17("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs17("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx17("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx17("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs17("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx17("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx17("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx17("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx17("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/programme-arc-editor.tsx
import { Plus as Plus10, Trash as Trash10 } from "@phosphor-icons/react";
import { jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
function ProgrammeArcEditor({
  config,
  onChange
}) {
  const c = config;
  const phases = c.phases ?? [];
  return /* @__PURE__ */ jsxs18("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx18("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx18("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ jsx18("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Phases" }),
      /* @__PURE__ */ jsx18("div", { className: "space-y-2", children: phases.map((phase, i) => /* @__PURE__ */ jsxs18("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs18("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs18("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Phase ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx18("button", { type: "button", onClick: () => onChange({ ...config, phases: phases.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx18(Trash10, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs18("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx18("input", { type: "number", placeholder: "Phase #", value: phase.phase_number ?? i + 1, onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx18("input", { placeholder: "Phase name", value: phase.phase_name ?? "", onChange: (e) => {
            const u = [...phases];
            u[i] = { ...u[i], phase_name: e.target.value };
            onChange({ ...config, phases: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsx18("textarea", { placeholder: "Phase description", value: phase.phase_description ?? "", onChange: (e) => {
          const u = [...phases];
          u[i] = { ...u[i], phase_description: e.target.value };
          onChange({ ...config, phases: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs18("button", { type: "button", onClick: () => onChange({ ...config, phases: [...phases, { phase_number: phases.length + 1, phase_name: "", phase_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx18(Plus10, { className: "size-3" }),
        " Add Phase"
      ] })
    ] }),
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs18("select", { value: c.layout ?? "horizontal-timeline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx18("option", { value: "horizontal-timeline", children: "Horizontal Timeline" }),
        /* @__PURE__ */ jsx18("option", { value: "vertical-steps", children: "Vertical Steps" }),
        /* @__PURE__ */ jsx18("option", { value: "cards-grid", children: "Cards Grid" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs18("div", { children: [
      /* @__PURE__ */ jsx18("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ jsx18("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-this-is-isnt-editor.tsx
import { Plus as Plus11, Trash as Trash11 } from "@phosphor-icons/react";
import { jsx as jsx19, jsxs as jsxs19 } from "react/jsx-runtime";
function WhatThisIsIsntEditor({
  config,
  onChange
}) {
  const c = config;
  const isItems = c.is_items ?? [];
  const isNotItems = c.is_not_items ?? [];
  return /* @__PURE__ */ jsxs19("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs19("div", { children: [
      /* @__PURE__ */ jsx19("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx19("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs19("div", { children: [
      /* @__PURE__ */ jsx19("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This IS..." }),
      /* @__PURE__ */ jsx19("div", { className: "space-y-2", children: isItems.map((item, i) => /* @__PURE__ */ jsxs19("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx19("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is..." }),
        /* @__PURE__ */ jsx19("button", { type: "button", onClick: () => onChange({ ...config, is_items: isItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx19(Trash11, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs19("button", { type: "button", onClick: () => onChange({ ...config, is_items: [...isItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx19(Plus11, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs19("div", { children: [
      /* @__PURE__ */ jsx19("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "This is NOT..." }),
      /* @__PURE__ */ jsx19("div", { className: "space-y-2", children: isNotItems.map((item, i) => /* @__PURE__ */ jsxs19("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx19("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...isNotItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, is_not_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not..." }),
        /* @__PURE__ */ jsx19("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: isNotItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx19(Trash11, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs19("button", { type: "button", onClick: () => onChange({ ...config, is_not_items: [...isNotItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx19(Plus11, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs19("div", { children: [
      /* @__PURE__ */ jsx19("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs19("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx19("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ jsx19("option", { value: "alternating-rows", children: "Alternating Rows" }),
        /* @__PURE__ */ jsx19("option", { value: "single-column", children: "Single Column" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs19("div", { children: [
      /* @__PURE__ */ jsx19("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ jsx19("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/what-youll-experience-editor.tsx
import { Plus as Plus12, Trash as Trash12 } from "@phosphor-icons/react";
import { jsx as jsx20, jsxs as jsxs20 } from "react/jsx-runtime";
function WhatYoullExperienceEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.experience_items ?? [];
  return /* @__PURE__ */ jsxs20("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx20("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx20("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ jsx20("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Experience Items" }),
      /* @__PURE__ */ jsx20("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs20("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs20("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs20("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Item ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx20("button", { type: "button", onClick: () => onChange({ ...config, experience_items: items.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx20(Trash12, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsx20("input", { placeholder: "Title", value: item.title ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], title: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx20("input", { placeholder: "Description", value: item.description ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], description: e.target.value };
          onChange({ ...config, experience_items: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs20("button", { type: "button", onClick: () => onChange({ ...config, experience_items: [...items, { title: "", description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx20(Plus12, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs20("div", { children: [
        /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ jsxs20("select", { value: c.layout ?? "grid-2col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx20("option", { value: "grid-2col", children: "Grid 2 Col" }),
          /* @__PURE__ */ jsx20("option", { value: "grid-3col", children: "Grid 3 Col" }),
          /* @__PURE__ */ jsx20("option", { value: "stacked-cards", children: "Stacked Cards" }),
          /* @__PURE__ */ jsx20("option", { value: "numbered-list", children: "Numbered List" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs20("div", { children: [
        /* @__PURE__ */ jsx20("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Columns (2-4)" }),
        /* @__PURE__ */ jsx20("input", { type: "number", min: 2, max: 4, value: c.columns ?? 2, onChange: (e) => onChange({ ...config, columns: parseInt(e.target.value) || 2 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/curriculum-breakdown-editor.tsx
import { Plus as Plus13, Trash as Trash13 } from "@phosphor-icons/react";
import { jsx as jsx21, jsxs as jsxs21 } from "react/jsx-runtime";
function CurriculumBreakdownEditor({
  config,
  onChange
}) {
  const c = config;
  const modules = c.modules ?? [];
  return /* @__PURE__ */ jsxs21("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs21("div", { children: [
      /* @__PURE__ */ jsx21("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx21("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs21("div", { children: [
      /* @__PURE__ */ jsx21("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx21("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs21("div", { children: [
      /* @__PURE__ */ jsx21("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ jsx21("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs21("div", { children: [
      /* @__PURE__ */ jsx21("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Modules" }),
      /* @__PURE__ */ jsx21("div", { className: "space-y-2", children: modules.map((mod, i) => /* @__PURE__ */ jsxs21("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs21("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs21("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Module ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx21("button", { type: "button", onClick: () => onChange({ ...config, modules: modules.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx21(Trash13, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs21("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx21("input", { type: "number", placeholder: "Module #", value: mod.module_number ?? i + 1, onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx21("input", { placeholder: "Title", value: mod.module_title ?? "", onChange: (e) => {
            const u = [...modules];
            u[i] = { ...u[i], module_title: e.target.value };
            onChange({ ...config, modules: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsx21("textarea", { placeholder: "Description", value: mod.module_description ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_description: e.target.value };
          onChange({ ...config, modules: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx21("input", { placeholder: "Outcomes (comma-separated)", value: mod.module_outcomes ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], module_outcomes: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx21("input", { placeholder: "Duration (e.g. 2 weeks)", value: mod.duration ?? "", onChange: (e) => {
          const u = [...modules];
          u[i] = { ...u[i], duration: e.target.value };
          onChange({ ...config, modules: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs21("button", { type: "button", onClick: () => onChange({ ...config, modules: [...modules, { module_number: modules.length + 1, module_title: "", module_description: "", module_outcomes: "", duration: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx21(Plus13, { className: "size-3" }),
        " Add Module"
      ] })
    ] }),
    /* @__PURE__ */ jsxs21("div", { children: [
      /* @__PURE__ */ jsx21("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs21("select", { value: c.layout ?? "accordion", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx21("option", { value: "accordion", children: "Accordion" }),
        /* @__PURE__ */ jsx21("option", { value: "cards", children: "Cards" }),
        /* @__PURE__ */ jsx21("option", { value: "timeline", children: "Timeline" }),
        /* @__PURE__ */ jsx21("option", { value: "stacked", children: "Stacked" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs21("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ jsx21("input", { type: "checkbox", checked: c.show_duration ?? false, onChange: (e) => onChange({ ...config, show_duration: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Duration"
    ] })
  ] });
}

// src/editors/config-editors/features-grid-editor.tsx
import { Plus as Plus14, Trash as Trash14 } from "@phosphor-icons/react";
import { jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
function FeaturesGridEditor({
  config,
  onChange
}) {
  const c = config;
  const features = c.features ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs22("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx22("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx22("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx22("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx22("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx22("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Subtitle" }),
      /* @__PURE__ */ jsx22("input", { value: c.subtitle ?? "", onChange: (e) => onChange({ ...config, subtitle: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx22("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Features" }),
      /* @__PURE__ */ jsx22("div", { className: "space-y-2", children: features.map((f, i) => /* @__PURE__ */ jsxs22("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs22("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs22("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Feature ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx22("button", { type: "button", onClick: () => onChange({ ...config, features: features.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx22(Trash14, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsx22("input", { placeholder: "Title", value: f.feature_title ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_title: e.target.value };
          onChange({ ...config, features: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx22("input", { placeholder: "Description", value: f.feature_description ?? "", onChange: (e) => {
          const u = [...features];
          u[i] = { ...u[i], feature_description: e.target.value };
          onChange({ ...config, features: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs22("button", { type: "button", onClick: () => onChange({ ...config, features: [...features, { feature_title: "", feature_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx22(Plus14, { className: "size-3" }),
        " Add Feature"
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx22("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs22("select", { value: c.layout ?? "grid-3col", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx22("option", { value: "grid-2col", children: "Grid 2 Col" }),
        /* @__PURE__ */ jsx22("option", { value: "grid-3col", children: "Grid 3 Col" }),
        /* @__PURE__ */ jsx22("option", { value: "grid-4col", children: "Grid 4 Col" }),
        /* @__PURE__ */ jsx22("option", { value: "icon-list", children: "Icon List" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx22("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs22("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx22("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx22("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs22("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx22("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx22("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx22("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx22("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/case-study-editor.tsx
import { jsx as jsx23, jsxs as jsxs23 } from "react/jsx-runtime";
function CaseStudyEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs23("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx23("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx23("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pattern Name" }),
      /* @__PURE__ */ jsx23("input", { value: c.pattern_name ?? "", onChange: (e) => onChange({ ...config, pattern_name: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Before State" }),
      /* @__PURE__ */ jsx23("textarea", { value: c.before_state ?? "", onChange: (e) => onChange({ ...config, before_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Turning Point" }),
      /* @__PURE__ */ jsx23("textarea", { value: c.turning_point ?? "", onChange: (e) => onChange({ ...config, turning_point: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "After State" }),
      /* @__PURE__ */ jsx23("textarea", { value: c.after_state ?? "", onChange: (e) => onChange({ ...config, after_state: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Client Words" }),
      /* @__PURE__ */ jsx23("textarea", { value: c.client_words ?? "", onChange: (e) => onChange({ ...config, client_words: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs23("div", { children: [
      /* @__PURE__ */ jsx23("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs23("select", { value: c.layout ?? "narrative", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx23("option", { value: "narrative", children: "Narrative" }),
        /* @__PURE__ */ jsx23("option", { value: "before-after", children: "Before / After" }),
        /* @__PURE__ */ jsx23("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/coach-bio-editor.tsx
import { Plus as Plus15, Trash as Trash15 } from "@phosphor-icons/react";
import { jsx as jsx24, jsxs as jsxs24 } from "react/jsx-runtime";
function CoachBioEditor({
  config,
  onChange
}) {
  const c = config;
  const photo = c.photo ?? {};
  const creds = c.credentials ?? [];
  return /* @__PURE__ */ jsxs24("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx24("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx24("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs24("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx24("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Photo" }),
      /* @__PURE__ */ jsxs24("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx24("input", { placeholder: "Image URL", value: photo.url ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx24("input", { placeholder: "Alt text", value: photo.alt_text ?? "", onChange: (e) => onChange({ ...config, photo: { ...photo, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Bio Text" }),
      /* @__PURE__ */ jsx24("textarea", { value: c.bio_text ?? "", onChange: (e) => onChange({ ...config, bio_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Credentials" }),
      /* @__PURE__ */ jsx24("div", { className: "space-y-2", children: creds.map((item, i) => /* @__PURE__ */ jsxs24("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx24("input", { value: item.credential ?? "", onChange: (e) => {
          const u = [...creds];
          u[i] = { credential: e.target.value };
          onChange({ ...config, credentials: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Credential..." }),
        /* @__PURE__ */ jsx24("button", { type: "button", onClick: () => onChange({ ...config, credentials: creds.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx24(Trash15, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs24("button", { type: "button", onClick: () => onChange({ ...config, credentials: [...creds, { credential: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx24(Plus15, { className: "size-3" }),
        " Add Credential"
      ] })
    ] }),
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Line" }),
      /* @__PURE__ */ jsx24("textarea", { value: c.personal_line ?? "", onChange: (e) => onChange({ ...config, personal_line: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs24("div", { children: [
      /* @__PURE__ */ jsx24("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs24("select", { value: c.layout ?? "split", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx24("option", { value: "split", children: "Split" }),
        /* @__PURE__ */ jsx24("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ jsx24("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-proof-bar-editor.tsx
import { Plus as Plus16, Trash as Trash16 } from "@phosphor-icons/react";
import { jsx as jsx25, jsxs as jsxs25 } from "react/jsx-runtime";
function SocialProofBarEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.proof_items ?? [];
  return /* @__PURE__ */ jsxs25("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs25("div", { children: [
      /* @__PURE__ */ jsx25("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Items" }),
      /* @__PURE__ */ jsx25("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs25("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx25("input", { placeholder: "Metric (e.g. 500+)", value: item.metric ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], metric: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "w-24 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx25("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, proof_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx25("button", { type: "button", onClick: () => onChange({ ...config, proof_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx25(Trash16, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs25("button", { type: "button", onClick: () => onChange({ ...config, proof_items: [...items, { metric: "", label: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx25(Plus16, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs25("div", { children: [
      /* @__PURE__ */ jsx25("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Proof Line" }),
      /* @__PURE__ */ jsx25("input", { value: c.proof_line ?? "", onChange: (e) => onChange({ ...config, proof_line: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Trusted by 500+ professionals" })
    ] }),
    /* @__PURE__ */ jsxs25("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs25("div", { children: [
        /* @__PURE__ */ jsx25("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
        /* @__PURE__ */ jsxs25("select", { value: c.layout ?? "bar", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx25("option", { value: "bar", children: "Bar" }),
          /* @__PURE__ */ jsx25("option", { value: "inline", children: "Inline" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs25("div", { children: [
        /* @__PURE__ */ jsx25("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ jsxs25("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx25("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx25("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsx25("option", { value: "transparent", children: "Transparent" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/huma-widget-editor.tsx
import { jsx as jsx26, jsxs as jsxs26 } from "react/jsx-runtime";
var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function HumaWidgetEditor({
  config,
  onChange
}) {
  const c = config;
  const widgetId = c.widget_id ?? "";
  const isValidUuid = widgetId === "" || UUID_RE.test(widgetId);
  return /* @__PURE__ */ jsxs26("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs26("div", { children: [
      /* @__PURE__ */ jsxs26("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        "Widget ID ",
        /* @__PURE__ */ jsx26("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx26(
        "input",
        {
          type: "text",
          value: widgetId,
          onChange: (e) => onChange({ ...config, widget_id: e.target.value }),
          placeholder: "e.g. e40542b8-d50c-46f3-a03f-bd7f7f382b21",
          className: `w-full rounded-md border bg-white px-3 py-2 font-mono text-sm dark:bg-surface-base dark:text-white ${isValidUuid ? "border-zinc-300 dark:border-zinc-600" : "border-red-400 dark:border-red-500"}`
        }
      ),
      !isValidUuid ? /* @__PURE__ */ jsx26("p", { className: "mt-1 text-xs text-red-500", children: "Must be a valid UUID" }) : /* @__PURE__ */ jsx26("p", { className: "mt-1 text-xs text-zinc-400", children: "Paste the widget UUID from your Huma dashboard" })
    ] }),
    /* @__PURE__ */ jsxs26("div", { children: [
      /* @__PURE__ */ jsx26("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx26(
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
    /* @__PURE__ */ jsxs26("div", { children: [
      /* @__PURE__ */ jsx26("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx26(
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
import { Plus as Plus17, Trash as Trash17 } from "@phosphor-icons/react";
import { jsx as jsx27, jsxs as jsxs27 } from "react/jsx-runtime";
function PerfectForYouEditor({
  config,
  onChange
}) {
  const c = config;
  const forItems = c.for_items ?? [];
  const notForItems = c.not_for_items ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs27("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx27("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx27("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Perfect For..." }),
      /* @__PURE__ */ jsx27("div", { className: "space-y-2", children: forItems.map((item, i) => /* @__PURE__ */ jsxs27("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx27("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...forItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is for you if..." }),
        /* @__PURE__ */ jsx27("button", { type: "button", onClick: () => onChange({ ...config, for_items: forItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx27(Trash17, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs27("button", { type: "button", onClick: () => onChange({ ...config, for_items: [...forItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx27(Plus17, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "NOT For..." }),
      /* @__PURE__ */ jsx27("div", { className: "space-y-2", children: notForItems.map((item, i) => /* @__PURE__ */ jsxs27("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx27("input", { value: item.statement ?? "", onChange: (e) => {
          const u = [...notForItems];
          u[i] = { statement: e.target.value };
          onChange({ ...config, not_for_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "This is not for you if..." }),
        /* @__PURE__ */ jsx27("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: notForItems.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx27(Trash17, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs27("button", { type: "button", onClick: () => onChange({ ...config, not_for_items: [...notForItems, { statement: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx27(Plus17, { className: "size-3" }),
        " Add Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Closing Text" }),
      /* @__PURE__ */ jsx27("textarea", { value: c.closing_text ?? "", onChange: (e) => onChange({ ...config, closing_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs27("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx27("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs27("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx27("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx27("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs27("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx27("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx27("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx27("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx27("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs27("select", { value: c.layout ?? "two-columns", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx27("option", { value: "two-columns", children: "Two Columns" }),
        /* @__PURE__ */ jsx27("option", { value: "single-column", children: "Single Column" }),
        /* @__PURE__ */ jsx27("option", { value: "checklist", children: "Checklist" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/objection-block-editor.tsx
import { jsx as jsx28, jsxs as jsxs28 } from "react/jsx-runtime";
function ObjectionBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs28("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs28("div", { children: [
      /* @__PURE__ */ jsx28("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Objection" }),
      /* @__PURE__ */ jsx28("textarea", { value: c.objection ?? "", onChange: (e) => onChange({ ...config, objection: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The common objection..." })
    ] }),
    /* @__PURE__ */ jsxs28("div", { children: [
      /* @__PURE__ */ jsx28("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Response" }),
      /* @__PURE__ */ jsx28("textarea", { value: c.response ?? "", onChange: (e) => onChange({ ...config, response: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Your response..." })
    ] }),
    /* @__PURE__ */ jsxs28("div", { children: [
      /* @__PURE__ */ jsx28("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Reframe" }),
      /* @__PURE__ */ jsx28("textarea", { value: c.reframe ?? "", onChange: (e) => onChange({ ...config, reframe: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "The reframed perspective..." })
    ] }),
    /* @__PURE__ */ jsxs28("div", { children: [
      /* @__PURE__ */ jsx28("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Visual Style" }),
      /* @__PURE__ */ jsxs28("select", { value: c.visual_style ?? "pullquote", onChange: (e) => onChange({ ...config, visual_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx28("option", { value: "pullquote", children: "Pullquote" }),
        /* @__PURE__ */ jsx28("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ jsx28("option", { value: "inline", children: "Inline" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/investment-pricing-editor.tsx
import { Plus as Plus18, Trash as Trash18 } from "@phosphor-icons/react";
import { jsx as jsx29, jsxs as jsxs29 } from "react/jsx-runtime";
function InvestmentPricingEditor({
  config,
  onChange
}) {
  const c = config;
  const tiers = c.pricing_tiers ?? [];
  return /* @__PURE__ */ jsxs29("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx29("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx29("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ jsx29("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Tiers" }),
      /* @__PURE__ */ jsx29("div", { className: "space-y-2", children: tiers.map((tier, i) => /* @__PURE__ */ jsxs29("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs29("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs29("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Tier ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx29("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: tiers.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx29(Trash18, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs29("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx29("input", { placeholder: "Tier name", value: tier.tier_name ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], tier_name: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx29("input", { placeholder: "Price", value: tier.price ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx29("input", { placeholder: "Currency (e.g. GBP)", value: tier.currency ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], currency: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx29("input", { placeholder: "Period (e.g. /month)", value: tier.price_period ?? "", onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], price_period: e.target.value };
            onChange({ ...config, pricing_tiers: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsx29("input", { placeholder: "Price note", value: tier.price_note ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], price_note: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx29("textarea", { placeholder: "Tier description", value: tier.tier_description ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], tier_description: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, rows: 2, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx29("input", { placeholder: "Included items (comma-separated)", value: tier.included_items ?? "", onChange: (e) => {
          const u = [...tiers];
          u[i] = { ...u[i], included_items: e.target.value };
          onChange({ ...config, pricing_tiers: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsxs29("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ jsx29("input", { type: "checkbox", checked: tier.is_featured ?? false, onChange: (e) => {
            const u = [...tiers];
            u[i] = { ...u[i], is_featured: e.target.checked };
            onChange({ ...config, pricing_tiers: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Featured"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxs29("button", { type: "button", onClick: () => onChange({ ...config, pricing_tiers: [...tiers, { tier_name: "", price: "", currency: "GBP", price_period: "", price_note: "", tier_description: "", included_items: "", is_featured: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx29(Plus18, { className: "size-3" }),
        " Add Tier"
      ] })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Comparison Note" }),
      /* @__PURE__ */ jsx29("textarea", { value: c.comparison_note ?? "", onChange: (e) => onChange({ ...config, comparison_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee" }),
      /* @__PURE__ */ jsx29("textarea", { value: c.guarantee ?? "", onChange: (e) => onChange({ ...config, guarantee: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs29("div", { children: [
      /* @__PURE__ */ jsx29("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs29("select", { value: c.layout ?? "cards-side-by-side", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx29("option", { value: "cards-side-by-side", children: "Cards Side by Side" }),
        /* @__PURE__ */ jsx29("option", { value: "single-centered", children: "Single Centered" }),
        /* @__PURE__ */ jsx29("option", { value: "stacked", children: "Stacked" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/guarantee-editor.tsx
import { jsx as jsx30, jsxs as jsxs30 } from "react/jsx-runtime";
function GuaranteeEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs30("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsx30("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx30("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsx30("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Text" }),
      /* @__PURE__ */ jsx30("textarea", { value: c.guarantee_text ?? "", onChange: (e) => onChange({ ...config, guarantee_text: e.target.value }), rows: 4, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsx30("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Guarantee Type" }),
      /* @__PURE__ */ jsxs30("select", { value: c.guarantee_type ?? "money-back", onChange: (e) => onChange({ ...config, guarantee_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx30("option", { value: "money-back", children: "Money Back" }),
        /* @__PURE__ */ jsx30("option", { value: "satisfaction", children: "Satisfaction" }),
        /* @__PURE__ */ jsx30("option", { value: "fit-guarantee", children: "Fit Guarantee" }),
        /* @__PURE__ */ jsx30("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs30("div", { children: [
      /* @__PURE__ */ jsx30("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Duration" }),
      /* @__PURE__ */ jsx30("input", { value: c.duration ?? "", onChange: (e) => onChange({ ...config, duration: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "30 days" })
    ] })
  ] });
}

// src/editors/config-editors/urgency-closing-editor.tsx
import { jsx as jsx31, jsxs as jsxs31 } from "react/jsx-runtime";
function UrgencyClosingEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs31("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx31("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx31("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Urgency Type" }),
      /* @__PURE__ */ jsxs31("select", { value: c.urgency_type ?? "seats-limited", onChange: (e) => onChange({ ...config, urgency_type: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx31("option", { value: "seats-limited", children: "Seats Limited" }),
        /* @__PURE__ */ jsx31("option", { value: "deadline", children: "Deadline" }),
        /* @__PURE__ */ jsx31("option", { value: "cohort-start", children: "Cohort Start" }),
        /* @__PURE__ */ jsx31("option", { value: "price-increase", children: "Price Increase" }),
        /* @__PURE__ */ jsx31("option", { value: "custom", children: "Custom" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Countdown Target (date/time)" }),
      /* @__PURE__ */ jsx31("input", { type: "datetime-local", value: c.countdown_target ?? "", onChange: (e) => onChange({ ...config, countdown_target: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs31("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ jsx31("input", { type: "checkbox", checked: c.show_countdown ?? false, onChange: (e) => onChange({ ...config, show_countdown: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show Countdown"
    ] }),
    /* @__PURE__ */ jsxs31("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs31("div", { children: [
        /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Remaining" }),
        /* @__PURE__ */ jsx31("input", { type: "number", min: 0, value: c.seats_remaining ?? "", onChange: (e) => onChange({ ...config, seats_remaining: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs31("div", { children: [
        /* @__PURE__ */ jsx31("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Seats Total" }),
        /* @__PURE__ */ jsx31("input", { type: "number", min: 0, value: c.seats_total ?? "", onChange: (e) => onChange({ ...config, seats_total: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs31("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx31("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs31("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx31("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx31("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs31("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx31("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx31("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx31("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx31("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/capture-form-editor.tsx
import { Plus as Plus19, Trash as Trash19 } from "@phosphor-icons/react";
import { jsx as jsx32, jsxs as jsxs32 } from "react/jsx-runtime";
function CaptureFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ jsxs32("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx32("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx32("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx32("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ jsx32("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ jsxs32("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs32("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs32("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx32("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx32(Trash19, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs32("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx32("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx32("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsxs32("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ jsx32("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ jsx32("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ jsx32("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ jsx32("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ jsx32("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ jsx32("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsxs32("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ jsx32("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxs32("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx32(Plus19, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ jsx32("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Submit" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ jsx32("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Privacy Text" }),
      /* @__PURE__ */ jsx32("textarea", { value: c.privacy_text ?? "", onChange: (e) => onChange({ ...config, privacy_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs32("div", { children: [
      /* @__PURE__ */ jsx32("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs32("select", { value: c.layout ?? "centered", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx32("option", { value: "centered", children: "Centered" }),
        /* @__PURE__ */ jsx32("option", { value: "card", children: "Card" }),
        /* @__PURE__ */ jsx32("option", { value: "minimal", children: "Minimal" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/application-form-editor.tsx
import { Plus as Plus20, Trash as Trash20 } from "@phosphor-icons/react";
import { jsx as jsx33, jsxs as jsxs33 } from "react/jsx-runtime";
function ApplicationFormEditor({
  config,
  onChange
}) {
  const c = config;
  const fields = c.form_fields ?? [];
  return /* @__PURE__ */ jsxs33("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx33("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx33("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Introduction" }),
      /* @__PURE__ */ jsx33("textarea", { value: c.introduction ?? "", onChange: (e) => onChange({ ...config, introduction: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Form Fields" }),
      /* @__PURE__ */ jsx33("div", { className: "space-y-2", children: fields.map((f, i) => /* @__PURE__ */ jsxs33("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs33("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs33("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Field ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx33("button", { type: "button", onClick: () => onChange({ ...config, form_fields: fields.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx33(Trash20, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs33("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx33("input", { placeholder: "Field name (key)", value: f.field_name ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_name: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx33("input", { placeholder: "Label", value: f.field_label ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_label: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsxs33("select", { value: f.field_type ?? "text", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], field_type: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
            /* @__PURE__ */ jsx33("option", { value: "text", children: "Text" }),
            /* @__PURE__ */ jsx33("option", { value: "email", children: "Email" }),
            /* @__PURE__ */ jsx33("option", { value: "tel", children: "Phone" }),
            /* @__PURE__ */ jsx33("option", { value: "textarea", children: "Textarea" }),
            /* @__PURE__ */ jsx33("option", { value: "select", children: "Select" })
          ] }),
          /* @__PURE__ */ jsx33("input", { placeholder: "Placeholder", value: f.placeholder ?? "", onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], placeholder: e.target.value };
            onChange({ ...config, form_fields: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsxs33("label", { className: "mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
          /* @__PURE__ */ jsx33("input", { type: "checkbox", checked: f.required ?? false, onChange: (e) => {
            const u = [...fields];
            u[i] = { ...u[i], required: e.target.checked };
            onChange({ ...config, form_fields: u });
          }, className: "rounded border-zinc-300 dark:border-zinc-600" }),
          "Required"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxs33("button", { type: "button", onClick: () => onChange({ ...config, form_fields: [...fields, { field_name: "", field_type: "text", field_label: "", placeholder: "", required: false }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx33(Plus20, { className: "size-3" }),
        " Add Field"
      ] })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Programme Summary" }),
      /* @__PURE__ */ jsx33("textarea", { value: c.programme_summary ?? "", onChange: (e) => onChange({ ...config, programme_summary: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Pricing Display" }),
      /* @__PURE__ */ jsx33("textarea", { value: c.pricing_display ?? "", onChange: (e) => onChange({ ...config, pricing_display: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Submit Button Label" }),
      /* @__PURE__ */ jsx33("input", { value: c.submit_button_label ?? "", onChange: (e) => onChange({ ...config, submit_button_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Apply Now" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Post-Submit Message" }),
      /* @__PURE__ */ jsx33("textarea", { value: c.post_submit_message ?? "", onChange: (e) => onChange({ ...config, post_submit_message: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Audience ID" }),
      /* @__PURE__ */ jsx33("input", { value: c.audience_id ?? "", onChange: (e) => onChange({ ...config, audience_id: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/inline-cta-editor.tsx
import { jsx as jsx34, jsxs as jsxs34 } from "react/jsx-runtime";
function InlineCtaEditor({
  config,
  onChange
}) {
  const c = config;
  const cta = c.cta_button ?? {};
  const secondary = c.secondary_cta ?? {};
  return /* @__PURE__ */ jsxs34("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs34("div", { children: [
      /* @__PURE__ */ jsx34("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx34("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs34("div", { children: [
      /* @__PURE__ */ jsx34("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx34("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs34("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx34("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs34("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx34("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx34("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs34("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx34("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx34("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx34("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx34("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs34("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx34("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Secondary CTA" }),
      /* @__PURE__ */ jsxs34("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx34("input", { placeholder: "Label", value: secondary.label ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx34("input", { placeholder: "URL", value: secondary.url ?? "", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs34("select", { value: secondary.variant ?? "secondary", onChange: (e) => onChange({ ...config, secondary_cta: { ...secondary, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx34("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx34("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx34("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx34("option", { value: "text-link", children: "Text Link" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs34("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsx34("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background Style" }),
        /* @__PURE__ */ jsxs34("select", { value: c.background_style ?? "light", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx34("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx34("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsx34("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ jsx34("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsx34("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ jsxs34("select", { value: c.alignment ?? "centered", onChange: (e) => onChange({ ...config, alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx34("option", { value: "centered", children: "Centered" }),
          /* @__PURE__ */ jsx34("option", { value: "left", children: "Left" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/confirmation-message-editor.tsx
import { Plus as Plus21, Trash as Trash21 } from "@phosphor-icons/react";
import { jsx as jsx35, jsxs as jsxs35 } from "react/jsx-runtime";
function ConfirmationMessageEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.what_happens_next ?? [];
  return /* @__PURE__ */ jsxs35("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs35("div", { children: [
      /* @__PURE__ */ jsx35("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx35("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs35("div", { children: [
      /* @__PURE__ */ jsx35("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx35("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs35("div", { children: [
      /* @__PURE__ */ jsx35("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Happens Next" }),
      /* @__PURE__ */ jsx35("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ jsxs35("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx35("input", { type: "number", value: step.step_number ?? i + 1, onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
          onChange({ ...config, what_happens_next: u });
        }, className: "w-16 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx35("input", { value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, what_happens_next: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Step description..." }),
        /* @__PURE__ */ jsx35("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: steps.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx35(Trash21, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs35("button", { type: "button", onClick: () => onChange({ ...config, what_happens_next: [...steps, { step_number: steps.length + 1, step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx35(Plus21, { className: "size-3" }),
        " Add Step"
      ] })
    ] })
  ] });
}

// src/editors/config-editors/diagnostic-framing-editor.tsx
import { jsx as jsx36, jsxs as jsxs36 } from "react/jsx-runtime";
function DiagnosticFramingEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs36("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsx36("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Action Taken" }),
      /* @__PURE__ */ jsx36("input", { value: c.action_taken ?? "", onChange: (e) => onChange({ ...config, action_taken: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "What the visitor just did..." })
    ] }),
    /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsx36("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What It Says About You" }),
      /* @__PURE__ */ jsx36("textarea", { value: c.what_it_says ?? "", onChange: (e) => onChange({ ...config, what_it_says: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsx36("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "What Comes Next" }),
      /* @__PURE__ */ jsx36("textarea", { value: c.what_comes_next ?? "", onChange: (e) => onChange({ ...config, what_comes_next: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/quick-win-editor.tsx
import { jsx as jsx37, jsxs as jsxs37 } from "react/jsx-runtime";
function QuickWinEditor({
  config,
  onChange
}) {
  const c = config;
  const res = c.resource ?? {};
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs37("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs37("div", { children: [
      /* @__PURE__ */ jsx37("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx37("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs37("div", { children: [
      /* @__PURE__ */ jsx37("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx37("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs37("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx37("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Resource" }),
      /* @__PURE__ */ jsxs37("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx37("input", { placeholder: "Title", value: res.resource_title ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_title: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx37("input", { placeholder: "Description", value: res.resource_description ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_description: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx37("input", { placeholder: "URL", value: res.resource_url ?? "", onChange: (e) => onChange({ ...config, resource: { ...res, resource_url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsxs37("select", { value: res.resource_type ?? "pdf", onChange: (e) => onChange({ ...config, resource: { ...res, resource_type: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx37("option", { value: "pdf", children: "PDF" }),
          /* @__PURE__ */ jsx37("option", { value: "video", children: "Video" }),
          /* @__PURE__ */ jsx37("option", { value: "article", children: "Article" }),
          /* @__PURE__ */ jsx37("option", { value: "template", children: "Template" }),
          /* @__PURE__ */ jsx37("option", { value: "checklist", children: "Checklist" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs37("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx37("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs37("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx37("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx37("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs37("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx37("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx37("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx37("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx37("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/social-share-editor.tsx
import { jsx as jsx38, jsxs as jsxs38 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs38("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs38("div", { children: [
      /* @__PURE__ */ jsx38("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share Text" }),
      /* @__PURE__ */ jsx38("textarea", { value: c.share_text ?? "", onChange: (e) => onChange({ ...config, share_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs38("div", { children: [
      /* @__PURE__ */ jsx38("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Platforms" }),
      /* @__PURE__ */ jsx38("div", { className: "space-y-1", children: PLATFORM_OPTIONS.map((opt) => /* @__PURE__ */ jsxs38("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ jsx38("input", { type: "checkbox", checked: platforms.includes(opt.value), onChange: () => togglePlatform(opt.value), className: "rounded border-zinc-300 dark:border-zinc-600" }),
        opt.label
      ] }, opt.value)) })
    ] }),
    /* @__PURE__ */ jsxs38("div", { children: [
      /* @__PURE__ */ jsx38("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Share URL" }),
      /* @__PURE__ */ jsx38("input", { value: c.share_url ?? "", onChange: (e) => onChange({ ...config, share_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ jsxs38("div", { children: [
      /* @__PURE__ */ jsx38("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs38("select", { value: c.layout ?? "inline", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx38("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ jsx38("option", { value: "card", children: "Card" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/post-purchase-welcome-editor.tsx
import { Plus as Plus22, Trash as Trash22 } from "@phosphor-icons/react";
import { jsx as jsx39, jsxs as jsxs39 } from "react/jsx-runtime";
function PostPurchaseWelcomeEditor({
  config,
  onChange
}) {
  const c = config;
  const steps = c.next_steps ?? [];
  const cta = c.cta_button ?? {};
  return /* @__PURE__ */ jsxs39("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx39("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx39("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx39("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Welcome Text" }),
      /* @__PURE__ */ jsx39("textarea", { value: c.welcome_text ?? "", onChange: (e) => onChange({ ...config, welcome_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx39("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Next Steps" }),
      /* @__PURE__ */ jsx39("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ jsxs39("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs39("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs39("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Step ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx39("button", { type: "button", onClick: () => onChange({ ...config, next_steps: steps.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx39(Trash22, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxs39("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx39("input", { type: "number", placeholder: "#", value: step.step_number ?? i + 1, onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_number: parseInt(e.target.value) || 0 };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
          /* @__PURE__ */ jsx39("input", { placeholder: "Title", value: step.step_title ?? "", onChange: (e) => {
            const u = [...steps];
            u[i] = { ...u[i], step_title: e.target.value };
            onChange({ ...config, next_steps: u });
          }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
        ] }),
        /* @__PURE__ */ jsx39("input", { placeholder: "Description", value: step.step_description ?? "", onChange: (e) => {
          const u = [...steps];
          u[i] = { ...u[i], step_description: e.target.value };
          onChange({ ...config, next_steps: u });
        }, className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }, i)) }),
      /* @__PURE__ */ jsxs39("button", { type: "button", onClick: () => onChange({ ...config, next_steps: [...steps, { step_number: steps.length + 1, step_title: "", step_description: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx39(Plus22, { className: "size-3" }),
        " Add Step"
      ] })
    ] }),
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx39("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Community Link" }),
      /* @__PURE__ */ jsx39("input", { value: c.community_link ?? "", onChange: (e) => onChange({ ...config, community_link: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://..." })
    ] }),
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx39("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Personal Note" }),
      /* @__PURE__ */ jsx39("textarea", { value: c.personal_note ?? "", onChange: (e) => onChange({ ...config, personal_note: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs39("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx39("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button" }),
      /* @__PURE__ */ jsxs39("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx39("input", { placeholder: "Label", value: cta.label ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, label: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx39("input", { placeholder: "URL", value: cta.url ?? "", onChange: (e) => onChange({ ...config, cta_button: { ...cta, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] }),
      /* @__PURE__ */ jsxs39("select", { value: cta.variant ?? "primary", onChange: (e) => onChange({ ...config, cta_button: { ...cta, variant: e.target.value } }), className: "mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx39("option", { value: "primary", children: "Primary" }),
        /* @__PURE__ */ jsx39("option", { value: "secondary", children: "Secondary" }),
        /* @__PURE__ */ jsx39("option", { value: "ghost", children: "Ghost" }),
        /* @__PURE__ */ jsx39("option", { value: "text-link", children: "Text Link" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/rich-text-block-editor.tsx
import { jsx as jsx40, jsxs as jsxs40 } from "react/jsx-runtime";
function RichTextBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs40("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsx40("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Label" }),
      /* @__PURE__ */ jsx40("input", { value: c.section_label ?? "", onChange: (e) => onChange({ ...config, section_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsx40("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Body Text" }),
      /* @__PURE__ */ jsx40("textarea", { value: c.body_text ?? "", onChange: (e) => onChange({ ...config, body_text: e.target.value }), rows: 8, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs40("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxs40("div", { children: [
        /* @__PURE__ */ jsx40("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Max Width" }),
        /* @__PURE__ */ jsxs40("select", { value: c.max_width ?? "medium", onChange: (e) => onChange({ ...config, max_width: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx40("option", { value: "narrow", children: "Narrow" }),
          /* @__PURE__ */ jsx40("option", { value: "medium", children: "Medium" }),
          /* @__PURE__ */ jsx40("option", { value: "full", children: "Full" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs40("div", { children: [
        /* @__PURE__ */ jsx40("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ jsxs40("select", { value: c.background_style ?? "transparent", onChange: (e) => onChange({ ...config, background_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx40("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx40("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsx40("option", { value: "cream", children: "Cream" }),
          /* @__PURE__ */ jsx40("option", { value: "transparent", children: "Transparent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs40("div", { children: [
        /* @__PURE__ */ jsx40("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Alignment" }),
        /* @__PURE__ */ jsxs40("select", { value: c.text_alignment ?? "left", onChange: (e) => onChange({ ...config, text_alignment: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx40("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ jsx40("option", { value: "centered", children: "Centered" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/pullquote-editor.tsx
import { jsx as jsx41, jsxs as jsxs41 } from "react/jsx-runtime";
function PullquoteEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs41("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs41("div", { children: [
      /* @__PURE__ */ jsx41("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Quote Text" }),
      /* @__PURE__ */ jsx41("textarea", { value: c.quote_text ?? "", onChange: (e) => onChange({ ...config, quote_text: e.target.value }), rows: 3, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs41("div", { children: [
      /* @__PURE__ */ jsx41("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Attribution" }),
      /* @__PURE__ */ jsx41("input", { value: c.attribution ?? "", onChange: (e) => onChange({ ...config, attribution: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs41("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs41("div", { children: [
        /* @__PURE__ */ jsx41("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
        /* @__PURE__ */ jsxs41("select", { value: c.style ?? "large-text", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx41("option", { value: "large-text", children: "Large Text" }),
          /* @__PURE__ */ jsx41("option", { value: "bordered-left", children: "Bordered Left" }),
          /* @__PURE__ */ jsx41("option", { value: "dark-card", children: "Dark Card" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs41("div", { children: [
        /* @__PURE__ */ jsx41("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Background" }),
        /* @__PURE__ */ jsxs41("select", { value: c.background_style ?? "", onChange: (e) => onChange({ ...config, background_style: e.target.value || void 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
          /* @__PURE__ */ jsx41("option", { value: "", children: "Default" }),
          /* @__PURE__ */ jsx41("option", { value: "light", children: "Light" }),
          /* @__PURE__ */ jsx41("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsx41("option", { value: "cream", children: "Cream" })
        ] })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/data-statistic-editor.tsx
import { jsx as jsx42, jsxs as jsxs42 } from "react/jsx-runtime";
function DataStatisticEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs42("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs42("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs42("div", { children: [
        /* @__PURE__ */ jsx42("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric" }),
        /* @__PURE__ */ jsx42("input", { value: c.metric ?? "", onChange: (e) => onChange({ ...config, metric: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "87%" })
      ] }),
      /* @__PURE__ */ jsxs42("div", { children: [
        /* @__PURE__ */ jsx42("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Metric Label" }),
        /* @__PURE__ */ jsx42("input", { value: c.metric_label ?? "", onChange: (e) => onChange({ ...config, metric_label: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "completion rate" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs42("div", { children: [
      /* @__PURE__ */ jsx42("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Source" }),
      /* @__PURE__ */ jsx42("input", { value: c.source ?? "", onChange: (e) => onChange({ ...config, source: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "Source attribution" })
    ] }),
    /* @__PURE__ */ jsxs42("div", { children: [
      /* @__PURE__ */ jsx42("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Context Text" }),
      /* @__PURE__ */ jsx42("textarea", { value: c.context_text ?? "", onChange: (e) => onChange({ ...config, context_text: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs42("div", { children: [
      /* @__PURE__ */ jsx42("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ jsxs42("select", { value: c.style ?? "dark-card", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx42("option", { value: "dark-card", children: "Dark Card" }),
        /* @__PURE__ */ jsx42("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ jsx42("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/image-block-editor.tsx
import { jsx as jsx43, jsxs as jsxs43 } from "react/jsx-runtime";
function ImageBlockEditor({
  config,
  onChange
}) {
  const c = config;
  const img = c.image ?? {};
  return /* @__PURE__ */ jsxs43("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs43("fieldset", { className: "rounded-md border border-zinc-200 p-3 dark:border-zinc-700", children: [
      /* @__PURE__ */ jsx43("legend", { className: "px-1 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Image" }),
      /* @__PURE__ */ jsxs43("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx43("input", { placeholder: "Image URL", value: img.url ?? "", onChange: (e) => onChange({ ...config, image: { ...img, url: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx43("input", { placeholder: "Alt text", value: img.alt_text ?? "", onChange: (e) => onChange({ ...config, image: { ...img, alt_text: e.target.value } }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs43("div", { children: [
      /* @__PURE__ */ jsx43("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ jsx43("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs43("div", { children: [
      /* @__PURE__ */ jsx43("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs43("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx43("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ jsx43("option", { value: "contained", children: "Contained" }),
        /* @__PURE__ */ jsx43("option", { value: "small-centered", children: "Small Centered" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/video-block-editor.tsx
import { jsx as jsx44, jsxs as jsxs44 } from "react/jsx-runtime";
function VideoBlockEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs44("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs44("div", { children: [
      /* @__PURE__ */ jsx44("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Video URL" }),
      /* @__PURE__ */ jsx44("input", { value: c.video_url ?? "", onChange: (e) => onChange({ ...config, video_url: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: "https://youtube.com/..." })
    ] }),
    /* @__PURE__ */ jsxs44("div", { children: [
      /* @__PURE__ */ jsx44("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Caption" }),
      /* @__PURE__ */ jsx44("textarea", { value: c.caption ?? "", onChange: (e) => onChange({ ...config, caption: e.target.value }), rows: 2, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs44("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ jsx44("input", { type: "checkbox", checked: c.autoplay ?? false, onChange: (e) => onChange({ ...config, autoplay: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Autoplay"
    ] }),
    /* @__PURE__ */ jsxs44("div", { children: [
      /* @__PURE__ */ jsx44("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Layout" }),
      /* @__PURE__ */ jsxs44("select", { value: c.layout ?? "contained", onChange: (e) => onChange({ ...config, layout: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx44("option", { value: "full-width", children: "Full Width" }),
        /* @__PURE__ */ jsx44("option", { value: "contained", children: "Contained" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/comparison-table-editor.tsx
import { Plus as Plus23, Trash as Trash23 } from "@phosphor-icons/react";
import { jsx as jsx45, jsxs as jsxs45 } from "react/jsx-runtime";
function ComparisonTableEditor({
  config,
  onChange
}) {
  const c = config;
  const headers = c.column_headers ?? ["", ""];
  const rows = c.rows ?? [];
  return /* @__PURE__ */ jsxs45("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs45("div", { children: [
      /* @__PURE__ */ jsx45("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Headline" }),
      /* @__PURE__ */ jsx45("input", { value: c.headline ?? "", onChange: (e) => onChange({ ...config, headline: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs45("div", { children: [
      /* @__PURE__ */ jsx45("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Column Headers" }),
      /* @__PURE__ */ jsx45("div", { className: "space-y-2", children: headers.map((h, i) => /* @__PURE__ */ jsxs45("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx45("input", { value: h, onChange: (e) => {
          const u = [...headers];
          u[i] = e.target.value;
          onChange({ ...config, column_headers: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", placeholder: `Column ${i + 1}` }),
        headers.length > 2 && /* @__PURE__ */ jsx45("button", { type: "button", onClick: () => {
          const u = headers.filter((_, j) => j !== i);
          const ur = rows.map((r) => ({ ...r, column_values: (r.column_values ?? []).filter((_, j) => j !== i) }));
          onChange({ ...config, column_headers: u, rows: ur });
        }, className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx45(Trash23, { className: "size-4" }) })
      ] }, i)) }),
      headers.length < 3 && /* @__PURE__ */ jsxs45("button", { type: "button", onClick: () => {
        const u = [...headers, ""];
        const ur = rows.map((r) => ({ ...r, column_values: [...r.column_values ?? [], ""] }));
        onChange({ ...config, column_headers: u, rows: ur });
      }, className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx45(Plus23, { className: "size-3" }),
        " Add Column"
      ] })
    ] }),
    /* @__PURE__ */ jsxs45("div", { children: [
      /* @__PURE__ */ jsx45("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Rows" }),
      /* @__PURE__ */ jsx45("div", { className: "space-y-2", children: rows.map((row, i) => /* @__PURE__ */ jsxs45("div", { className: "rounded-lg border border-zinc-200 p-3 dark:border-zinc-700", children: [
        /* @__PURE__ */ jsxs45("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs45("span", { className: "text-xs font-medium text-zinc-400", children: [
            "Row ",
            i + 1
          ] }),
          /* @__PURE__ */ jsx45("button", { type: "button", onClick: () => onChange({ ...config, rows: rows.filter((_, j) => j !== i) }), className: "text-zinc-400 hover:text-red-500", children: /* @__PURE__ */ jsx45(Trash23, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ jsx45("input", { placeholder: "Row label", value: row.row_label ?? "", onChange: (e) => {
          const u = [...rows];
          u[i] = { ...u[i], row_label: e.target.value };
          onChange({ ...config, rows: u });
        }, className: "mb-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx45("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${headers.length}, 1fr)` }, children: headers.map((_, ci) => /* @__PURE__ */ jsx45("input", { placeholder: headers[ci] || `Col ${ci + 1}`, value: (row.column_values ?? [])[ci] ?? "", onChange: (e) => {
          const u = [...rows];
          const vals = [...u[i]?.column_values ?? []];
          vals[ci] = e.target.value;
          u[i] = { ...u[i], column_values: vals };
          onChange({ ...config, rows: u });
        }, className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }, ci)) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs45("button", { type: "button", onClick: () => onChange({ ...config, rows: [...rows, { row_label: "", column_values: headers.map(() => "") }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx45(Plus23, { className: "size-3" }),
        " Add Row"
      ] })
    ] }),
    /* @__PURE__ */ jsxs45("div", { children: [
      /* @__PURE__ */ jsx45("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Highlight Column (0-indexed)" }),
      /* @__PURE__ */ jsx45("input", { type: "number", min: 0, max: headers.length - 1, value: c.highlight_column ?? 0, onChange: (e) => onChange({ ...config, highlight_column: parseInt(e.target.value) || 0 }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] })
  ] });
}

// src/editors/config-editors/section-divider-editor.tsx
import { jsx as jsx46, jsxs as jsxs46 } from "react/jsx-runtime";
function SectionDividerEditor({
  config,
  onChange
}) {
  const c = config;
  return /* @__PURE__ */ jsxs46("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs46("div", { children: [
      /* @__PURE__ */ jsx46("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Divider Style" }),
      /* @__PURE__ */ jsxs46("select", { value: c.divider_style ?? "line", onChange: (e) => onChange({ ...config, divider_style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx46("option", { value: "line", children: "Line" }),
        /* @__PURE__ */ jsx46("option", { value: "dots", children: "Dots" }),
        /* @__PURE__ */ jsx46("option", { value: "space-only", children: "Space Only" }),
        /* @__PURE__ */ jsx46("option", { value: "bird-icon", children: "Bird Icon" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs46("div", { children: [
      /* @__PURE__ */ jsx46("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Spacing" }),
      /* @__PURE__ */ jsxs46("select", { value: c.spacing ?? "medium", onChange: (e) => onChange({ ...config, spacing: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx46("option", { value: "small", children: "Small" }),
        /* @__PURE__ */ jsx46("option", { value: "medium", children: "Medium" }),
        /* @__PURE__ */ jsx46("option", { value: "large", children: "Large" })
      ] })
    ] })
  ] });
}

// src/editors/config-editors/anchor-navigation-editor.tsx
import { Plus as Plus24, Trash as Trash24 } from "@phosphor-icons/react";
import { jsx as jsx47, jsxs as jsxs47 } from "react/jsx-runtime";
function AnchorNavigationEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.nav_items ?? [];
  return /* @__PURE__ */ jsxs47("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs47("div", { children: [
      /* @__PURE__ */ jsx47("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Nav Items" }),
      /* @__PURE__ */ jsx47("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs47("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx47("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx47("input", { placeholder: "Anchor ID", value: item.anchor_id ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], anchor_id: e.target.value };
          onChange({ ...config, nav_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx47("button", { type: "button", onClick: () => onChange({ ...config, nav_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx47(Trash24, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs47("button", { type: "button", onClick: () => onChange({ ...config, nav_items: [...items, { label: "", anchor_id: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx47(Plus24, { className: "size-3" }),
        " Add Nav Item"
      ] })
    ] }),
    /* @__PURE__ */ jsxs47("div", { children: [
      /* @__PURE__ */ jsx47("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Style" }),
      /* @__PURE__ */ jsxs47("select", { value: c.style ?? "sticky-top", onChange: (e) => onChange({ ...config, style: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white", children: [
        /* @__PURE__ */ jsx47("option", { value: "sticky-top", children: "Sticky Top" }),
        /* @__PURE__ */ jsx47("option", { value: "inline", children: "Inline" }),
        /* @__PURE__ */ jsx47("option", { value: "sidebar", children: "Sidebar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs47("label", { className: "flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400", children: [
      /* @__PURE__ */ jsx47("input", { type: "checkbox", checked: c.show_on_mobile ?? false, onChange: (e) => onChange({ ...config, show_on_mobile: e.target.checked }), className: "rounded border-zinc-300 dark:border-zinc-600" }),
      "Show on Mobile"
    ] })
  ] });
}

// src/editors/config-editors/page-header-editor.tsx
import { Plus as Plus25, Trash as Trash25 } from "@phosphor-icons/react";
import { jsx as jsx48, jsxs as jsxs48 } from "react/jsx-runtime";
function PageHeaderEditor({
  config,
  onChange
}) {
  const c = config;
  const items = c.breadcrumb_items ?? [];
  return /* @__PURE__ */ jsxs48("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs48("div", { children: [
      /* @__PURE__ */ jsx48("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Title" }),
      /* @__PURE__ */ jsx48("input", { value: c.page_title ?? "", onChange: (e) => onChange({ ...config, page_title: e.target.value }), className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" })
    ] }),
    /* @__PURE__ */ jsxs48("div", { children: [
      /* @__PURE__ */ jsx48("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Breadcrumbs" }),
      /* @__PURE__ */ jsx48("div", { className: "space-y-2", children: items.map((item, i) => /* @__PURE__ */ jsxs48("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx48("input", { placeholder: "Label", value: item.label ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], label: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx48("input", { placeholder: "URL", value: item.url ?? "", onChange: (e) => {
          const u = [...items];
          u[i] = { ...u[i], url: e.target.value };
          onChange({ ...config, breadcrumb_items: u });
        }, className: "flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white" }),
        /* @__PURE__ */ jsx48("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: items.filter((_, j) => j !== i) }), className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30", children: /* @__PURE__ */ jsx48(Trash25, { className: "size-4" }) })
      ] }, i)) }),
      /* @__PURE__ */ jsxs48("button", { type: "button", onClick: () => onChange({ ...config, breadcrumb_items: [...items, { label: "", url: "" }] }), className: "mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-500", children: [
        /* @__PURE__ */ jsx48(Plus25, { className: "size-3" }),
        " Add Breadcrumb"
      ] })
    ] })
  ] });
}

// src/editors/landing-section-config-editor.tsx
import { jsx as jsx49, jsxs as jsxs49 } from "react/jsx-runtime";
function SectionConfigEditor({ type, config, onChange }) {
  const props = { config, onChange };
  switch (type) {
    // Hero
    case "hero_statement":
      return /* @__PURE__ */ jsx49(HeroStatementEditor, { ...props });
    case "hero_capture_form":
      return /* @__PURE__ */ jsx49(HeroCaptureFormEditor, { ...props });
    case "hero_video":
      return /* @__PURE__ */ jsx49(HeroVideoEditor, { ...props });
    // Problem & Recognition
    case "pattern_recognition":
      return /* @__PURE__ */ jsx49(PatternRecognitionEditor, { ...props });
    case "problem_statement":
      return /* @__PURE__ */ jsx49(ProblemStatementEditor, { ...props });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ jsx49(SacredCowEditor, { ...props });
    case "rome_is_burning":
      return /* @__PURE__ */ jsx49(RomeBurningEditor, { ...props });
    // Solution & Programme
    case "programme_overview":
      return /* @__PURE__ */ jsx49(ProgrammeOverviewEditor, { ...props });
    case "programme_arc":
      return /* @__PURE__ */ jsx49(ProgrammeArcEditor, { ...props });
    case "what_this_is_isnt":
      return /* @__PURE__ */ jsx49(WhatThisIsIsntEditor, { ...props });
    case "what_youll_experience":
      return /* @__PURE__ */ jsx49(WhatYoullExperienceEditor, { ...props });
    case "curriculum_breakdown":
      return /* @__PURE__ */ jsx49(CurriculumBreakdownEditor, { ...props });
    case "features_grid":
      return /* @__PURE__ */ jsx49(FeaturesGridEditor, { ...props });
    // Trust & Proof
    case "testimonials":
      return /* @__PURE__ */ jsx49(TestimonialsEditor, { ...props });
    case "case_study":
      return /* @__PURE__ */ jsx49(CaseStudyEditor, { ...props });
    case "coach_bio":
      return /* @__PURE__ */ jsx49(CoachBioEditor, { ...props });
    case "social_proof_bar":
      return /* @__PURE__ */ jsx49(SocialProofBarEditor, { ...props });
    case "huma_widget":
      return /* @__PURE__ */ jsx49(HumaWidgetEditor, { ...props });
    // Qualification & Objection
    case "perfect_for_you":
      return /* @__PURE__ */ jsx49(PerfectForYouEditor, { ...props });
    case "faq":
      return /* @__PURE__ */ jsx49(FaqEditor, { ...props });
    case "objection_block":
      return /* @__PURE__ */ jsx49(ObjectionBlockEditor, { ...props });
    // Pricing & Commitment
    case "investment_pricing":
      return /* @__PURE__ */ jsx49(InvestmentPricingEditor, { ...props });
    case "guarantee":
      return /* @__PURE__ */ jsx49(GuaranteeEditor, { ...props });
    case "urgency_closing":
      return /* @__PURE__ */ jsx49(UrgencyClosingEditor, { ...props });
    // Forms & Capture
    case "capture_form":
      return /* @__PURE__ */ jsx49(CaptureFormEditor, { ...props });
    case "application_form":
      return /* @__PURE__ */ jsx49(ApplicationFormEditor, { ...props });
    case "inline_cta":
      return /* @__PURE__ */ jsx49(InlineCtaEditor, { ...props });
    // Confirmation & Thank You
    case "confirmation_message":
      return /* @__PURE__ */ jsx49(ConfirmationMessageEditor, { ...props });
    case "diagnostic_framing":
      return /* @__PURE__ */ jsx49(DiagnosticFramingEditor, { ...props });
    case "quick_win":
      return /* @__PURE__ */ jsx49(QuickWinEditor, { ...props });
    case "social_share":
      return /* @__PURE__ */ jsx49(SocialShareEditor, { ...props });
    case "post_purchase_welcome":
      return /* @__PURE__ */ jsx49(PostPurchaseWelcomeEditor, { ...props });
    // Content & Narrative
    case "rich_text":
      return /* @__PURE__ */ jsx49(RichTextBlockEditor, { ...props });
    case "pullquote":
      return /* @__PURE__ */ jsx49(PullquoteEditor, { ...props });
    case "data_statistic":
      return /* @__PURE__ */ jsx49(DataStatisticEditor, { ...props });
    case "image_block":
      return /* @__PURE__ */ jsx49(ImageBlockEditor, { ...props });
    case "video_block":
      return /* @__PURE__ */ jsx49(VideoBlockEditor, { ...props });
    case "comparison_table":
      return /* @__PURE__ */ jsx49(ComparisonTableEditor, { ...props });
    // Structural & Navigation
    case "section_divider":
      return /* @__PURE__ */ jsx49(SectionDividerEditor, { ...props });
    case "anchor_navigation":
      return /* @__PURE__ */ jsx49(AnchorNavigationEditor, { ...props });
    case "page_header_breadcrumb":
      return /* @__PURE__ */ jsx49(PageHeaderEditor, { ...props });
    default:
      return /* @__PURE__ */ jsxs49("p", { className: "text-xs text-zinc-500", children: [
        "No editor available for section type \u201C",
        type,
        "\u201D."
      ] });
  }
}

// src/editors/landing-page-editor.tsx
import { jsx as jsx50, jsxs as jsxs50 } from "react/jsx-runtime";
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
  } = useSortable({ id: section.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const summary = getSectionSummary(section);
  return /* @__PURE__ */ jsxs50(
    "div",
    {
      ref: setNodeRef,
      style,
      className: `rounded-xl border bg-white shadow-sm dark:bg-surface-raised ${isDragging ? "ring-2 ring-brand-500 shadow-lg border-brand-500" : "border-zinc-200 dark:border-surface-border"}`,
      children: [
        /* @__PURE__ */ jsxs50("div", { className: "flex items-center gap-3 px-3 py-3", children: [
          /* @__PURE__ */ jsx50(
            "button",
            {
              type: "button",
              className: "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-grab active:cursor-grabbing",
              ...attributes,
              ...listeners,
              children: /* @__PURE__ */ jsx50(DotsSixVertical, { className: "size-5", weight: "bold" })
            }
          ),
          /* @__PURE__ */ jsxs50("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx50("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
            summary && /* @__PURE__ */ jsxs50("span", { className: "ml-2 text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
              "\u2014 ",
              summary
            ] })
          ] }),
          /* @__PURE__ */ jsx50(
            "button",
            {
              onClick: onToggleVisibility,
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: section.visible ? "Hide" : "Show",
              children: section.visible ? /* @__PURE__ */ jsx50(Eye, { className: "size-4" }) : /* @__PURE__ */ jsx50(EyeSlash, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx50(
            "button",
            {
              onClick: onToggleEdit,
              className: `rounded p-1 ${isEditing ? "bg-brand-50 text-brand-600 dark:bg-brand-600/10 dark:text-brand-400" : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"}`,
              children: /* @__PURE__ */ jsx50(PencilSimple, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx50(
            "button",
            {
              onClick: onRemove,
              className: "rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400",
              children: /* @__PURE__ */ jsx50(Trash26, { className: "size-4" })
            }
          )
        ] }),
        isEditing && /* @__PURE__ */ jsxs50("div", { className: "border-t border-zinc-100 px-4 py-3 dark:border-surface-border max-w-2xl", children: [
          /* @__PURE__ */ jsxs50("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx50("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Section Background" }),
            /* @__PURE__ */ jsx50("div", { className: "flex gap-2", children: [
              { value: void 0, label: "Default", preview: "bg-zinc-100 dark:bg-surface-base" },
              { value: "light", label: "Light", preview: "bg-white dark:bg-surface-secondary" },
              { value: "cream", label: "Cream", preview: "bg-amber-100 dark:bg-surface-overlay" },
              { value: "dark", label: "Dark", preview: "bg-zinc-800 dark:bg-zinc-950" },
              { value: "transparent", label: "None", preview: "bg-transparent border border-dashed border-zinc-300 dark:border-zinc-600" }
            ].map((opt) => {
              const current = section.config.background_style ?? void 0;
              const isActive = current === opt.value;
              return /* @__PURE__ */ jsxs50(
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
                    /* @__PURE__ */ jsx50("span", { className: `size-3 rounded-full ${opt.preview}` }),
                    opt.label
                  ]
                },
                opt.label
              );
            }) })
          ] }),
          /* @__PURE__ */ jsx50(
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
  return /* @__PURE__ */ jsx50("div", { className: "rounded-xl border border-brand-500 bg-white shadow-lg ring-2 ring-brand-500 dark:bg-surface-raised px-3 py-3", children: /* @__PURE__ */ jsxs50("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx50(DotsSixVertical, { className: "size-5 text-zinc-400", weight: "bold" }),
    /* @__PURE__ */ jsx50("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: SECTION_TYPE_LABELS[section.section_type] }),
    summary && /* @__PURE__ */ jsxs50("span", { className: "text-secondary text-zinc-500 dark:text-zinc-400 truncate", children: [
      "\u2014 ",
      summary
    ] })
  ] }) });
}
function AddSectionMenu({ onAdd }) {
  return /* @__PURE__ */ jsxs50(Menu, { children: [
    /* @__PURE__ */ jsxs50(
      MenuButton,
      {
        as: "button",
        className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
        children: [
          /* @__PURE__ */ jsx50(Plus26, { className: "size-3.5" }),
          "Add Section"
        ]
      }
    ),
    /* @__PURE__ */ jsx50(MenuItems, { anchor: "bottom end", className: "bg-white dark:bg-surface-raised rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-2 max-h-96 overflow-y-auto w-72", children: SECTION_TYPE_CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxs50("div", { className: i > 0 ? "mt-2" : "", children: [
      /* @__PURE__ */ jsx50("div", { className: "px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500", children: cat.label }),
      cat.types.map((type) => /* @__PURE__ */ jsx50(
        MenuItem,
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
  const [sections, setSections] = useState([]);
  const [editingSectionId, setEditingSectionId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [pageTitle, setPageTitle] = useState("");
  const [pageSlug, setPageSlug] = useState("");
  const [pageStatus, setPageStatus] = useState("draft");
  const [ctaModeType, setCtaModeType] = useState("none");
  const [ctaExternalUrl, setCtaExternalUrl] = useState("");
  const [ctaPlanId, setCtaPlanId] = useState("");
  const [ctaFormTarget, setCtaFormTarget] = useState("capture_form");
  useEffect(() => {
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
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
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
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  }
  const showHeader = props.showHeader ?? true;
  return /* @__PURE__ */ jsxs50("div", { children: [
    showHeader && /* @__PURE__ */ jsxs50("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx50(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "rounded p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
          children: /* @__PURE__ */ jsx50(ArrowLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxs50("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx50("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: page.title }),
        /* @__PURE__ */ jsx50("p", { className: "text-caption text-zinc-400", children: page.pageType.replace(/_/g, " ") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs50("div", { className: "mb-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ jsxs50("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl", children: [
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
          /* @__PURE__ */ jsx50(
            "input",
            {
              value: pageTitle,
              onChange: (e) => setPageTitle(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Slug" }),
          /* @__PURE__ */ jsx50(
            "input",
            {
              value: pageSlug,
              onChange: (e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")),
              placeholder: "my-landing-page",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Status" }),
          /* @__PURE__ */ jsxs50(
            "select",
            {
              value: pageStatus,
              onChange: (e) => setPageStatus(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ jsx50("option", { value: "draft", children: "Draft" }),
                /* @__PURE__ */ jsx50("option", { value: "published", children: "Published" }),
                /* @__PURE__ */ jsx50("option", { value: "archived", children: "Archived" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs50("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsx50("label", { className: "mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "CTA Button Action" }),
        /* @__PURE__ */ jsx50("div", { className: "mb-3 flex gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-surface-border dark:bg-surface-base", children: [
          { value: "none", label: "Not set" },
          { value: "checkout", label: "Checkout" },
          { value: "external_link", label: "External Link" },
          { value: "form_capture", label: "Form on Page" }
        ].map((opt) => /* @__PURE__ */ jsx50(
          "button",
          {
            type: "button",
            onClick: () => setCtaModeType(opt.value),
            className: `flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${ctaModeType === opt.value ? "bg-white text-zinc-900 shadow-sm dark:bg-surface-raised dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"}`,
            children: opt.label
          },
          opt.value
        )) }),
        ctaModeType === "checkout" && /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Plan" }),
          /* @__PURE__ */ jsxs50(
            "select",
            {
              value: ctaPlanId,
              onChange: (e) => setCtaPlanId(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ jsx50("option", { value: "", children: "Select a plan..." }),
                plansData?.map((plan) => /* @__PURE__ */ jsxs50("option", { value: plan.id, children: [
                  plan.name,
                  plan.amountCents ? ` \u2014 ${plan.currency} ${(plan.amountCents / 100).toFixed(0)}` : " \u2014 Free"
                ] }, plan.id))
              ]
            }
          ),
          /* @__PURE__ */ jsx50("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons link to this plan's checkout page." })
        ] }),
        ctaModeType === "external_link" && /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "URL" }),
          /* @__PURE__ */ jsx50(
            "input",
            {
              value: ctaExternalUrl,
              onChange: (e) => setCtaExternalUrl(e.target.value),
              placeholder: "https://calendly.com/... or https://typeform.com/...",
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            }
          ),
          /* @__PURE__ */ jsx50("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons open this URL (booking page, application form, etc.)." })
        ] }),
        ctaModeType === "form_capture" && /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx50("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Scroll to" }),
          /* @__PURE__ */ jsxs50(
            "select",
            {
              value: ctaFormTarget,
              onChange: (e) => setCtaFormTarget(e.target.value),
              className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
              children: [
                /* @__PURE__ */ jsx50("option", { value: "capture_form", children: "Capture Form" }),
                /* @__PURE__ */ jsx50("option", { value: "application_form", children: "Application Form" })
              ]
            }
          ),
          !sections.some((s) => s.section_type === ctaFormTarget) && /* @__PURE__ */ jsxs50("p", { className: "mt-1 text-xs text-amber-600 dark:text-amber-400", children: [
            "No ",
            ctaFormTarget === "capture_form" ? "Capture Form" : "Application Form",
            " section on this page yet. Add one for this to work."
          ] }),
          /* @__PURE__ */ jsx50("p", { className: "mt-1 text-xs text-zinc-400 dark:text-zinc-500", children: "CTA buttons scroll to the form section on this page." })
        ] }),
        ctaModeType === "none" && /* @__PURE__ */ jsx50("p", { className: "text-xs text-zinc-400 dark:text-zinc-500", children: "Each section's CTA button uses its own URL. Set a mode to override all buttons at once." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs50("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsx50("h3", { className: "text-sm font-semibold text-zinc-900 dark:text-white", children: "Sections" }),
      /* @__PURE__ */ jsx50(AddSectionMenu, { onAdd: addSection })
    ] }),
    saveSectionsSuccess && /* @__PURE__ */ jsx50("div", { className: "mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 dark:bg-green-950/30 dark:text-green-400", children: "Sections saved." }),
    sections.length === 0 ? /* @__PURE__ */ jsx50("div", { className: "rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: /* @__PURE__ */ jsx50("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "No sections yet. Click \u201CAdd Section\u201D to start building." }) }) : /* @__PURE__ */ jsxs50(
      DndContext,
      {
        sensors,
        collisionDetection: closestCenter,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ jsx50(
            SortableContext,
            {
              items: sections.map((s) => s.id),
              strategy: verticalListSortingStrategy,
              children: /* @__PURE__ */ jsx50("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ jsx50(
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
          /* @__PURE__ */ jsx50(DragOverlay, { children: activeSection ? /* @__PURE__ */ jsx50(SectionOverlayCard, { section: activeSection }) : null })
        ]
      }
    ),
    /* @__PURE__ */ jsx50("div", { className: "sticky bottom-0 mt-6 -mx-4 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-surface-border dark:bg-surface-raised/95", children: /* @__PURE__ */ jsxs50("div", { className: "flex items-center justify-end gap-3", children: [
      /* @__PURE__ */ jsx50(
        "button",
        {
          type: "button",
          onClick: handleSavePage,
          disabled: isSavingPage,
          className: "rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300",
          children: isSavingPage ? "Saving..." : "Save Page Settings"
        }
      ),
      /* @__PURE__ */ jsxs50(
        "button",
        {
          type: "button",
          onClick: handleSaveSections,
          disabled: !isDirty || isSavingSections,
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-40",
          children: [
            /* @__PURE__ */ jsx50(FloppyDisk, { className: "size-4" }),
            isSavingSections ? "Saving..." : "Save Sections"
          ]
        }
      )
    ] }) })
  ] });
}

// src/editors/landing-pages-list.tsx
import { useState as useState2 } from "react";
import {
  Plus as Plus27,
  Trash as Trash27,
  PencilSimple as PencilSimple2,
  Copy,
  Globe
} from "@phosphor-icons/react";
import { Fragment, jsx as jsx51, jsxs as jsxs51 } from "react/jsx-runtime";
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
  const [showCreateForm, setShowCreateForm] = useState2(false);
  const [newPageType, setNewPageType] = useState2("course_landing");
  const [newPageTitle, setNewPageTitle] = useState2("");
  if (isLoading) {
    return /* @__PURE__ */ jsx51("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsx51(
      "div",
      {
        className: "h-16 animate-pulse rounded-xl bg-zinc-100 dark:bg-surface-raised"
      },
      i
    )) });
  }
  return /* @__PURE__ */ jsxs51("div", { children: [
    /* @__PURE__ */ jsxs51("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs51("div", { children: [
        /* @__PURE__ */ jsx51("h2", { className: "text-page-heading font-semibold text-zinc-900 dark:text-white", children: "Landing Pages" }),
        /* @__PURE__ */ jsx51("p", { className: "mt-1 text-body text-zinc-500 dark:text-zinc-400", children: "Create and manage landing pages for your network." })
      ] }),
      /* @__PURE__ */ jsxs51(
        "button",
        {
          type: "button",
          onClick: () => setShowCreateForm(true),
          className: "inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500",
          children: [
            /* @__PURE__ */ jsx51(Plus27, { className: "size-3.5" }),
            "New Page"
          ]
        }
      )
    ] }),
    showCreateForm && /* @__PURE__ */ jsx51("div", { className: "mt-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised", children: /* @__PURE__ */ jsxs51("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs51("div", { children: [
        /* @__PURE__ */ jsx51("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Page Type" }),
        /* @__PURE__ */ jsx51(
          "select",
          {
            value: newPageType,
            onChange: (e) => setNewPageType(e.target.value),
            className: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white",
            children: Object.entries(PAGE_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsx51("option", { value, children: label }, value))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs51("div", { children: [
        /* @__PURE__ */ jsx51("label", { className: "mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400", children: "Title" }),
        /* @__PURE__ */ jsx51(
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
      /* @__PURE__ */ jsxs51("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx51(
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
        /* @__PURE__ */ jsx51(
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
    !pages || pages.length === 0 ? /* @__PURE__ */ jsxs51("div", { className: "mt-4 rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600", children: [
      /* @__PURE__ */ jsx51(Globe, { className: "mx-auto size-8 text-zinc-300 dark:text-zinc-600" }),
      /* @__PURE__ */ jsx51("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: "No landing pages yet. Create one to get started." })
    ] }) : /* @__PURE__ */ jsx51("div", { className: "mt-4 space-y-2", children: pages.map((page) => /* @__PURE__ */ jsxs51(
      "div",
      {
        className: "flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-surface-border dark:bg-surface-raised",
        children: [
          /* @__PURE__ */ jsxs51("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs51("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx51("span", { className: "text-sm font-semibold text-zinc-900 dark:text-white truncate", children: page.title }),
              /* @__PURE__ */ jsx51(
                "span",
                {
                  className: `rounded-full px-2 py-0.5 text-caption font-medium ${STATUS_COLORS[page.status]}`,
                  children: page.status
                }
              ),
              page.isDefault && /* @__PURE__ */ jsx51("span", { className: "rounded-full bg-brand-100 px-2 py-0.5 text-caption font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: "Default" })
            ] }),
            /* @__PURE__ */ jsxs51("div", { className: "mt-0.5 flex items-center gap-2 text-caption text-zinc-400 dark:text-zinc-500", children: [
              /* @__PURE__ */ jsx51("span", { children: PAGE_TYPE_LABELS[page.pageType] ?? page.pageType }),
              page.slug && /* @__PURE__ */ jsxs51(Fragment, { children: [
                /* @__PURE__ */ jsx51("span", { children: "\xB7" }),
                /* @__PURE__ */ jsxs51("span", { children: [
                  "/landing/",
                  page.slug
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx51(
            "button",
            {
              type: "button",
              onClick: () => onSelectPage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Edit sections",
              children: /* @__PURE__ */ jsx51(PencilSimple2, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx51(
            "button",
            {
              type: "button",
              onClick: () => onDuplicatePage(page.id),
              className: "rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover",
              title: "Duplicate",
              children: /* @__PURE__ */ jsx51(Copy, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx51(
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
              children: /* @__PURE__ */ jsx51(Trash27, { className: "size-4" })
            }
          )
        ]
      },
      page.id
    )) })
  ] });
}

// src/editors/landing-pages-section.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx52(
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
  return /* @__PURE__ */ jsx52(
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
export {
  LandingPageEditor,
  LandingPagesList,
  LandingPagesSection,
  SectionConfigEditor
};
