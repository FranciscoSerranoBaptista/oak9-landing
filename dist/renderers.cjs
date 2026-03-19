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

// src/renderers/index.ts
var renderers_exports = {};
__export(renderers_exports, {
  LandingAnchorNavigation: () => LandingAnchorNavigation,
  LandingApplicationForm: () => LandingApplicationForm,
  LandingCaptureForm: () => LandingCaptureForm,
  LandingCaseStudy: () => LandingCaseStudy,
  LandingCoachBio: () => LandingCoachBio,
  LandingComparisonTable: () => LandingComparisonTable,
  LandingConfirmationMessage: () => LandingConfirmationMessage,
  LandingCurriculumBreakdown: () => LandingCurriculumBreakdown,
  LandingDataStatistic: () => LandingDataStatistic,
  LandingDiagnosticFraming: () => LandingDiagnosticFraming,
  LandingFaqNew: () => LandingFaqNew,
  LandingFeaturesGrid: () => LandingFeaturesGrid,
  LandingGuarantee: () => LandingGuarantee,
  LandingHeroCaptureForm: () => LandingHeroCaptureForm,
  LandingHeroStatement: () => LandingHeroStatement,
  LandingHeroVideo: () => LandingHeroVideo,
  LandingImageBlock: () => LandingImageBlock,
  LandingInlineCta: () => LandingInlineCta,
  LandingInvestmentPricing: () => LandingInvestmentPricing,
  LandingObjectionBlock: () => LandingObjectionBlock,
  LandingPageHeader: () => LandingPageHeader,
  LandingPatternRecognition: () => LandingPatternRecognition,
  LandingPerfectForYou: () => LandingPerfectForYou,
  LandingPostPurchaseWelcome: () => LandingPostPurchaseWelcome,
  LandingProblemStatement: () => LandingProblemStatement,
  LandingProgrammeArc: () => LandingProgrammeArc,
  LandingProgrammeOverview: () => LandingProgrammeOverview,
  LandingPullquote: () => LandingPullquote,
  LandingQuickWin: () => LandingQuickWin,
  LandingRichText: () => LandingRichText,
  LandingRomeBurning: () => LandingRomeBurning,
  LandingSacredCow: () => LandingSacredCow,
  LandingSectionDivider: () => LandingSectionDivider,
  LandingSectionRenderer: () => LandingSectionRenderer,
  LandingSocialProofBar: () => LandingSocialProofBar,
  LandingSocialShare: () => LandingSocialShare,
  LandingTestimonialsNew: () => LandingTestimonialsNew,
  LandingUrgencyClosing: () => LandingUrgencyClosing,
  LandingVideoBlock: () => LandingVideoBlock,
  LandingWhatThisIsIsnt: () => LandingWhatThisIsIsnt,
  LandingWhatYoullExperience: () => LandingWhatYoullExperience
});
module.exports = __toCommonJS(renderers_exports);

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

// src/renderers/landing-perfect-for-you.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function LandingPerfectForYou({ config }) {
  const c = config;
  const forList = c.for_items ?? [];
  const notList = c.not_for_items ?? [];
  const layout = c.layout || "two-columns";
  if (forList.length === 0 && notList.length === 0) return null;
  if (layout === "checklist") {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Is this for you?", children: [
      c.section_label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-3", children: [
        forList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-start gap-3 rounded-lg p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "mt-0.5 text-lg text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, `y-${i}`)),
        notList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-start gap-3 rounded-lg p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "mt-0.5 text-lg text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, `n-${i}`))
      ] }),
      c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text }),
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-8 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Is this for you?", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: gridClass, children: [
      forList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900/30 dark:bg-green-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "mb-4 text-lg font-semibold text-green-700 dark:text-green-400", children: "This is for you if\u2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "space-y-3", role: "list", children: forList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] }),
      notList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "rounded-2xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/30 dark:bg-red-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "mb-4 text-lg font-semibold text-red-600 dark:text-red-400", children: "This is not for you if\u2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "space-y-3", role: "list", children: notList.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "mt-0.5 text-red-500 dark:text-red-400", "aria-hidden": "true", children: "\u2717" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: item.statement })
        ] }, i)) })
      ] })
    ] }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-8 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_react4 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function LandingFaqNew({ config }) {
  const c = config;
  const items = c.faq_items ?? [];
  const layout = c.layout || "accordion";
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Frequently Asked Questions", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mx-auto mb-10 max-w-2xl text-center text-base text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    layout === "accordion" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dl", { className: "mx-auto max-w-4xl space-y-3", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AccordionItem, { item }, i)) }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dl", { className: "mx-auto max-w-4xl space-y-6", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dt", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
        item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { className: "text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.answer })
    ] }, i)) }),
    layout === "two-columns" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "grid gap-6 sm:grid-cols-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "rounded-2xl border border-zinc-200 p-5 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
        item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: item.answer })
    ] }, i)) }),
    c.closing_text && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-10 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.closing_text })
  ] });
}
function AccordionItem({ item }) {
  const [open, setOpen] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "rounded-xl border border-zinc-200 dark:border-surface-border", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "flex w-full items-center justify-between p-4 text-left",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "flex items-center gap-2 pr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: item.question }),
            item.objection_type && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: item.objection_type })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "shrink-0 text-zinc-400", children: open ? "\u2212" : "+" })
        ]
      }
    ) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { className: "border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-surface-border", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400", children: item.answer }) })
  ] });
}

// src/renderers/landing-objection-block.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function LandingObjectionBlock({ config }) {
  const c = config;
  const style = c.visual_style || "card";
  if (!c.objection) return null;
  if (style === "pullquote") {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("blockquote", { className: "mb-6 border-l-4 border-zinc-300 pl-4 text-xl italic text-zinc-700 dark:border-zinc-600 dark:text-zinc-300", children: [
        "\u201C",
        c.objection,
        "\u201D"
      ] }),
      c.response && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.response }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-lg font-semibold text-brand-600 dark:text-brand-400", children: c.reframe })
    ] });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "mb-3 text-lg font-medium text-zinc-900 dark:text-white", children: [
        "\u201C",
        c.objection,
        "\u201D"
      ] }),
      c.response && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-3 text-base text-zinc-600 dark:text-zinc-400", children: c.response }),
      c.reframe && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-base font-medium text-brand-600 dark:text-brand-400", children: c.reframe })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": "Addressing concerns", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-8 dark:border-surface-border dark:bg-surface-raised", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400", children: "Common concern" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("blockquote", { className: "mb-4 text-xl font-medium text-zinc-900 dark:text-white", children: [
      "\u201C",
      c.objection,
      "\u201D"
    ] }),
    c.response && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.response }),
    c.reframe && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mb-4 h-px bg-zinc-100 dark:bg-surface-border", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-base font-semibold text-brand-600 dark:text-brand-400", children: c.reframe })
    ] })
  ] }) });
}

// src/renderers/landing-investment-pricing.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function LandingInvestmentPricing({ config }) {
  const c = config;
  const tiers = c.pricing_tiers ?? [];
  const layout = c.layout || "cards-side-by-side";
  if (tiers.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Pricing", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-2 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: c.section_label }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto mb-10 max-w-4xl space-y-3 text-center text-lg text-zinc-600 dark:text-zinc-400", children: c.introduction.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: p }, i)) }),
    layout === "single-centered" && tiers[0] && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto max-w-md", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TierCard, { tier: tiers[0] }) }),
    layout === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto max-w-lg space-y-6", children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TierCard, { tier }, i)) }),
    layout === "cards-side-by-side" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: `grid gap-6 ${tiers.length === 1 ? "mx-auto max-w-md" : tiers.length === 2 ? "mx-auto max-w-4xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`, children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TierCard, { tier }, i)) }),
    c.comparison_note && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.comparison_note }),
    c.guarantee && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.guarantee })
  ] });
}
function TierCard({ tier }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "article",
    {
      className: `relative rounded-2xl border p-8 ${tier.is_featured ? "border-brand-500 bg-white ring-2 ring-brand-500/20 dark:bg-surface-raised dark:ring-brand-400/20" : "border-zinc-200 bg-white dark:border-surface-border dark:bg-surface-raised"}`,
      children: [
        tier.is_featured && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white", children: "Recommended" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h3", { className: "mb-2 text-xl font-bold text-zinc-900 dark:text-white", children: tier.tier_name }),
        tier.tier_description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-4 text-sm text-zinc-600 dark:text-zinc-400", children: tier.tier_description }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "text-4xl font-bold text-zinc-900 dark:text-white", children: [
            tier.currency || "EUR",
            " ",
            tier.price
          ] }),
          tier.price_period && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "ml-1 text-sm text-zinc-500 dark:text-zinc-400", children: [
            "/",
            tier.price_period
          ] })
        ] }),
        tier.price_note && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mb-4 text-sm text-zinc-500 dark:text-zinc-400", children: tier.price_note }),
        tier.included_items && tier.included_items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: "mb-6 space-y-2", children: tier.included_items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("li", { className: "flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "mt-0.5 text-green-600 dark:text-green-400", "aria-hidden": "true", children: "\u2713" }),
          item
        ] }, i)) }),
        tier.cta_button && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
function LandingGuarantee({ config }) {
  const c = config;
  if (!c.guarantee_text) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "mx-auto max-w-4xl px-4 py-16", "aria-label": c.headline || "Our guarantee", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("article", { className: "rounded-2xl border-2 border-green-200 bg-green-50/50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
    c.icon ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: c.icon.url, alt: c.icon.alt_text || "", className: "mx-auto h-12 w-auto" }) }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mb-4 inline-flex size-12 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30", "aria-hidden": "true", children: "\u2705" }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h2", { className: "mb-4 text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mb-4 space-y-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300", children: c.guarantee_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: p }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
      c.guarantee_type && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400", children: c.guarantee_type }),
      c.duration && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-surface-hover dark:text-zinc-300", children: c.duration })
    ] })
  ] }) });
}

// src/renderers/landing-urgency-closing.tsx
var import_react5 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function LandingUrgencyClosing({ config }) {
  const c = config;
  const showCountdown = c.show_countdown !== false;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "px-4 py-16 text-center", "aria-label": c.headline || "Limited availability", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-8 space-y-4 text-lg text-zinc-600 dark:text-zinc-400", children: c.body_text.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: p }, i)) }),
    c.countdown_target && showCountdown && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Countdown, { target: c.countdown_target }),
    c.seats_remaining != null && c.seats_total != null && c.seats_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mx-auto mb-2 h-3 max-w-xs overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "div",
        {
          className: "h-full rounded-full bg-brand-500 transition-all",
          style: { width: `${(c.seats_total - c.seats_remaining) / c.seats_total * 100}%` }
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "font-semibold text-zinc-900 dark:text-white", children: c.seats_remaining }),
        " of ",
        c.seats_total,
        " spots remaining"
      ] })
    ] }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
  const [remaining, setRemaining] = (0, import_react5.useState)(calcRemaining(target));
  (0, import_react5.useEffect)(() => {
    const interval = setInterval(() => {
      setRemaining(calcRemaining(target));
    }, 1e3);
    return () => clearInterval(interval);
  }, [target]);
  if (remaining.total <= 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-8 text-lg font-semibold text-red-400", children: "Time's up!" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-8 flex justify-center gap-4", children: [
    { value: remaining.days, label: "Days" },
    { value: remaining.hours, label: "Hours" },
    { value: remaining.minutes, label: "Min" },
    { value: remaining.seconds, label: "Sec" }
  ].map((unit) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex size-16 items-center justify-center rounded-xl bg-zinc-100 text-2xl font-bold text-zinc-900 dark:bg-surface-raised dark:text-white", children: String(unit.value).padStart(2, "0") }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-1 text-xs text-zinc-500", children: unit.label })
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
var import_react6 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  const [isPending, setIsPending] = (0, import_react6.useState)(false);
  const [submitted, setSubmitted] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": c.headline || "Sign up", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mb-8 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    submitted ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-lg font-semibold text-zinc-900 dark:text-white", children: "Thank you!" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400", children: "We'll be in touch soon." })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "space-y-4", children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { htmlFor: field.field_name, className: "mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300", children: field.field_label }),
        field.help_text && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mb-1 text-xs text-zinc-400", children: field.help_text }),
        field.field_type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "textarea",
          {
            id: field.field_name,
            name: field.field_name,
            placeholder: field.placeholder,
            required: field.required,
            rows: 3,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white dark:placeholder-zinc-500"
          }
        ) : field.field_type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          "select",
          {
            id: field.field_name,
            name: field.field_name,
            required: field.required,
            className: "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-brand-500 focus:outline-none dark:border-surface-border dark:bg-surface-base dark:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: "", children: field.placeholder || "Select..." }),
              field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: opt, children: opt }, opt))
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "button",
        {
          type: "submit",
          disabled: isPending,
          className: "mt-4 w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60",
          children: isPending ? "Submitting..." : submitLabel
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-2 text-center text-sm text-red-500", children: "Something went wrong. Please try again." }),
      c.privacy_text && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-3 text-center text-xs text-zinc-400", children: c.privacy_text })
    ] })
  ] });
}

// src/renderers/landing-application-form.tsx
var import_react7 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  if (submitted) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": "Application submitted", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/40 dark:bg-green-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mb-4 text-4xl", "aria-hidden": "true", children: "\u2713" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "mb-2 text-2xl font-bold text-zinc-900 dark:text-white", children: "Application Received" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-base text-zinc-600 dark:text-zinc-400", children: c.post_submit_message || "Thank you for applying. We'll review your application and get back to you soon." })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("section", { className: "mx-auto max-w-xl px-4 py-16", "aria-label": c.headline || "Apply now", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.introduction && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mb-6 text-center text-base text-zinc-600 dark:text-zinc-400", children: c.introduction }),
    (c.programme_summary || c.pricing_display) && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-surface-border dark:bg-surface-raised", children: [
      c.programme_summary && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm text-zinc-700 dark:text-zinc-300", children: c.programme_summary }),
      c.pricing_display && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mt-2 text-lg font-bold text-zinc-900 dark:text-white", children: c.pricing_display })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-surface-border dark:bg-surface-raised", children: [
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
            rows: 4,
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
      error && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "mt-2 text-center text-sm text-red-500", children: "Something went wrong. Please try again." })
    ] })
  ] });
}

// src/renderers/landing-inline-cta.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function LandingInlineCta({ config }) {
  const c = config;
  const alignment = c.alignment || "centered";
  if (!c.headline && !c.cta_button) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("section", { className: "px-4 py-12", "aria-label": "Call to action", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: `mx-auto flex max-w-4xl flex-col items-center gap-6 ${alignment === "centered" ? "text-center" : "text-left"} sm:flex-row sm:text-left`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1", children: [
      c.headline && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
      c.body_text && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mt-2 text-base text-zinc-600 dark:text-zinc-400", children: c.body_text })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex shrink-0 items-center gap-3", children: [
      c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "a",
        {
          href: c.cta_button.url,
          ...c.cta_button.open_in_new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {},
          className: "inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500",
          children: c.cta_button.label
        }
      ),
      c.secondary_cta && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
var import_jsx_runtime27 = require("react/jsx-runtime");
function LandingConfirmationMessage({ config }) {
  const c = config;
  const steps = c.what_happens_next ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16 text-center", "aria-label": c.headline || "Confirmation", children: [
    c.icon ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: c.icon.url, alt: c.icon.alt_text || "", className: "mx-auto h-16 w-auto" }) }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mb-6 text-4xl", "aria-hidden": "true", children: "\u2713" }),
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "mb-8 text-lg text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mx-auto max-w-md text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400", children: "What happens next" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ol", { className: "space-y-4", children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: step.step_number }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-base text-zinc-700 dark:text-zinc-300", children: step.step_description })
      ] }, step.step_number)) })
    ] })
  ] });
}

// src/renderers/landing-diagnostic-framing.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function LandingDiagnosticFraming({ config }) {
  const c = config;
  if (!c.actionTaken && !c.whatItSays && !c.whatComesNext) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Diagnostic", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "grid gap-6 md:grid-cols-3", children: [
      c.actionTaken && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400", children: "Action taken" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.actionTaken })
      ] }),
      c.whatItSays && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400", children: "What it says" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.whatItSays })
      ] }),
      c.whatComesNext && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("article", { className: "rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400", children: "What comes next" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: c.whatComesNext })
      ] })
    ] })
  ] });
}

// src/renderers/landing-quick-win.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var TYPE_ICONS = {
  pdf: "\u{1F4C4}",
  video: "\u{1F3AC}",
  article: "\u{1F4DD}",
  assessment: "\u{1F4CB}"
};
function LandingQuickWin({ config }) {
  const c = config;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16", "aria-label": c.headline || "Quick win", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.body_text && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.body_text }),
    c.resource && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "a",
      {
        href: c.resource.resource_url,
        className: "mb-8 block rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-brand-300 hover:bg-zinc-50 dark:border-surface-border dark:hover:border-brand-600/30 dark:hover:bg-surface-hover",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-2xl", "aria-hidden": "true", children: TYPE_ICONS[c.resource.resource_type || "article"] || "\u{1F4DD}" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h3", { className: "font-semibold text-zinc-900 dark:text-white", children: c.resource.resource_title }),
            c.resource.resource_description && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: c.resource.resource_description }),
            c.resource.resource_type && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "mt-2 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-surface-hover dark:text-zinc-400", children: c.resource.resource_type.toUpperCase() })
          ] })
        ] })
      }
    ),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_react8 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  const [copied, setCopied] = (0, import_react8.useState)(false);
  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }).catch(() => {
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-12 text-center", "aria-label": c.headline || "Share", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h2", { className: "mb-6 text-2xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex flex-wrap items-center justify-center gap-3", children: platforms.map((platform) => {
      if (platform === "copy-link") {
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var import_jsx_runtime31 = require("react/jsx-runtime");
function LandingPostPurchaseWelcome({ config }) {
  const c = config;
  const steps = c.next_steps ?? [];
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { className: "mx-auto max-w-3xl px-4 py-16", "aria-label": c.headline || "Welcome", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { className: "mb-4 text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    c.welcome_text && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400", children: c.welcome_text }),
    steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "mb-8 rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h3", { className: "mb-4 text-lg font-semibold text-zinc-900 dark:text-white", children: "Your next steps" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("ol", { className: "space-y-4", children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400", children: step.step_number }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "font-medium text-zinc-900 dark:text-white", children: step.step_title }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "text-base text-zinc-700 dark:text-zinc-300", children: step.step_description })
        ] })
      ] }, step.step_number)) })
    ] }),
    c.community_link && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "a",
      {
        href: c.community_link,
        className: "mb-6 inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/30",
        children: "Join the Community"
      }
    ),
    c.personal_note && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("blockquote", { className: "mb-8 border-l-4 border-brand-500 pl-4 text-base italic text-zinc-600 dark:text-zinc-400", children: c.personal_note }),
    c.cta_button && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("section", { className: `px-4 py-16 ${bgClasses(c.background_style)}`, "aria-label": "Content", children: [
    c.section_label && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: `mx-auto mb-4 ${maxW} text-sm font-semibold uppercase tracking-wider ${isDark ? "text-zinc-400" : "text-brand-600 dark:text-brand-400"}`, children: c.section_label }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "div",
      {
        className: `prose mx-auto ${maxW} ${align} ${isDark ? "prose-invert text-zinc-300" : "text-zinc-700 dark:text-zinc-300"}`,
        dangerouslySetInnerHTML: { __html: renderMarkdown(c.body_text) }
      }
    )
  ] });
}

// src/renderers/landing-pullquote.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function LandingPullquote({ config }) {
  const c = config;
  const text = c.quote_text;
  if (!text) return null;
  const style = c.style || "large-text";
  if (style === "dark-card") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figure", { className: "mx-auto max-w-4xl rounded-2xl bg-zinc-900 p-8 dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("blockquote", { className: "text-xl font-medium leading-relaxed text-white sm:text-2xl", children: [
        "\u201C",
        text,
        "\u201D"
      ] }),
      c.attribution && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figcaption", { className: "mt-4 text-sm text-zinc-400", children: [
        "\u2014 ",
        c.attribution
      ] })
    ] }) });
  }
  if (style === "bordered-left") {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figure", { className: "mx-auto max-w-4xl border-l-4 border-brand-500 pl-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("blockquote", { className: "text-xl font-medium text-zinc-900 dark:text-white", children: [
        "\u201C",
        text,
        "\u201D"
      ] }),
      c.attribution && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figcaption", { className: "mt-4 text-sm text-zinc-500 dark:text-zinc-400", children: [
        "\u2014 ",
        c.attribution
      ] })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("section", { className: "px-4 py-16", "aria-label": "Quote", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figure", { className: "mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("blockquote", { className: "text-2xl font-medium leading-relaxed text-zinc-900 sm:text-3xl dark:text-white", children: [
      "\u201C",
      text,
      "\u201D"
    ] }),
    c.attribution && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("figcaption", { className: "mt-6 text-sm text-zinc-500 dark:text-zinc-400", children: [
      "\u2014 ",
      c.attribution
    ] })
  ] }) });
}

// src/renderers/landing-data-statistic.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function LandingDataStatistic({ config }) {
  const c = config;
  if (!c.metric) return null;
  const style = c.style || "large";
  if (style === "dark-card") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 py-16", "aria-label": "Statistic", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-10 text-center dark:bg-surface-raised", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-5xl font-bold text-white", children: c.metric }),
      c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-3 text-lg leading-relaxed text-zinc-300", children: c.metric_label }),
      c.context_text && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-4 text-base text-zinc-400 italic", children: c.context_text }),
      c.source && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "mt-3 text-xs text-zinc-500", children: [
        "Source: ",
        c.source
      ] })
    ] }) });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { className: "mx-auto max-w-4xl px-4 py-10", "aria-label": "Statistic", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-wrap items-baseline gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-3xl font-bold text-brand-600 dark:text-brand-400", children: c.metric }),
        c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-base text-zinc-600 dark:text-zinc-400", children: c.metric_label }),
        c.source && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("span", { className: "text-xs text-zinc-400", children: [
          "(",
          c.source,
          ")"
        ] })
      ] }),
      c.context_text && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-2 text-sm text-zinc-500 dark:text-zinc-400", children: c.context_text })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { className: "px-4 py-16 text-center", "aria-label": "Statistic", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-5xl font-bold text-brand-600 sm:text-6xl dark:text-brand-400", children: c.metric }),
    c.metric_label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-3 text-xl text-zinc-700 dark:text-zinc-300", children: c.metric_label }),
    c.context_text && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-3 text-base text-zinc-500 dark:text-zinc-400", children: c.context_text }),
    c.source && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "mt-2 text-xs text-zinc-400", children: [
      "Source: ",
      c.source
    ] })
  ] }) });
}

// src/renderers/landing-image-block.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function LandingImageBlock({ config }) {
  const c = config;
  if (!c.imageUrl) return null;
  const layout = c.layout || "contained";
  const containerClass = layout === "full-width" ? "px-0" : layout === "small-centered" ? "mx-auto max-w-xl px-4" : "mx-auto max-w-5xl px-4";
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("section", { className: `py-12 ${containerClass}`, "aria-label": c.alt || "Image", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("figure", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "img",
      {
        src: c.imageUrl,
        alt: c.alt || "",
        className: `w-full object-cover ${layout === "full-width" ? "max-h-[60vh]" : "rounded-2xl shadow-md"}`
      }
    ),
    c.caption && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("figcaption", { className: "mx-auto mt-3 max-w-3xl px-4 text-center text-sm text-zinc-500 dark:text-zinc-400", children: c.caption })
  ] }) });
}

// src/renderers/landing-video-block.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "section",
    {
      className: `py-12 ${layout === "full-width" ? "px-0" : "mx-auto max-w-5xl px-4"}`,
      "aria-label": c.title || "Video",
      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: `relative aspect-video overflow-hidden ${layout === "full-width" ? "" : "rounded-2xl shadow-md"}`, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var import_jsx_runtime37 = require("react/jsx-runtime");
function LandingComparisonTable({ config }) {
  const c = config;
  const columns = c.columns ?? [];
  const rows = c.rows ?? [];
  if (columns.length === 0 || rows.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("section", { className: "mx-auto max-w-5xl px-4 py-16", "aria-label": c.headline || "Comparison", children: [
    c.headline && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white", children: c.headline }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("table", { className: "w-full border-collapse text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("th", { className: "border-b border-zinc-200 pb-3 pr-4 text-sm font-semibold text-zinc-500 dark:border-surface-border dark:text-zinc-400", children: "\xA0" }),
        columns.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "th",
          {
            className: `border-b border-zinc-200 pb-3 px-4 text-sm font-semibold dark:border-surface-border ${c.highlightColumn === i ? "text-brand-600 dark:text-brand-400" : "text-zinc-700 dark:text-zinc-300"}`,
            children: col
          },
          i
        ))
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("tbody", { children: rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("tr", { className: "border-b border-zinc-100 dark:border-surface-border", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("td", { className: "py-3 pr-4 text-sm font-medium text-zinc-700 dark:text-zinc-300", children: row.label }),
        row.values.map((val, vi) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
var import_jsx_runtime38 = require("react/jsx-runtime");
function LandingSectionDivider({ config }) {
  const c = config;
  const style = c.style || "line";
  const spacing = c.spacing || "medium";
  const paddingClass = spacing === "small" ? "py-4" : spacing === "large" ? "py-16" : "py-8";
  if (style === "space-only") {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: paddingClass, role: "separator", "aria-hidden": "true" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `flex items-center justify-center ${paddingClass}`, role: "separator", "aria-hidden": "true", children: [
    style === "line" && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "mx-auto h-px w-full max-w-5xl bg-zinc-200 dark:bg-surface-border" }),
    style === "dots" && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" })
    ] }),
    style === "bird-icon" && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-2xl text-zinc-300 dark:text-zinc-600", children: "\u{1F426}" })
  ] });
}

// src/renderers/landing-anchor-navigation.tsx
var import_react9 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
function LandingAnchorNavigation({ config }) {
  const c = config;
  const links = c.links ?? [];
  const style = c.style || "sticky-top";
  const [activeId, setActiveId] = (0, import_react9.useState)("");
  (0, import_react9.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("nav", { className: "hidden lg:fixed lg:left-4 lg:top-1/2 lg:block lg:-translate-y-1/2", "aria-label": "Page navigation", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { className: "space-y-2", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "a",
      {
        href: `#${link.sectionId}`,
        className: `block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${activeId === link.sectionId ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400" : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"}`,
        children: link.label
      }
    ) }, link.sectionId)) }) });
  }
  if (style === "inline") {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("nav", { className: "mx-auto max-w-5xl px-4 py-6", "aria-label": "Page navigation", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { className: "flex flex-wrap gap-3", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "a",
      {
        href: `#${link.sectionId}`,
        className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeId === link.sectionId ? "bg-brand-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-surface-hover dark:text-zinc-300 dark:hover:bg-surface-raised"}`,
        children: link.label
      }
    ) }, link.sectionId)) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "nav",
    {
      className: "sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-surface-border dark:bg-surface-base/90",
      "aria-label": "Page navigation",
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
var import_jsx_runtime40 = require("react/jsx-runtime");
function LandingPageHeader({ config }) {
  const c = config;
  const breadcrumbs = c.breadcrumbs ?? [];
  if (!c.title && breadcrumbs.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("header", { className: "border-b border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-surface-border dark:bg-surface-raised/50", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "mx-auto max-w-5xl", children: [
    breadcrumbs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("nav", { "aria-label": "Breadcrumb", className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: breadcrumbs.map((crumb, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("li", { className: "flex items-center gap-1", children: [
      i > 0 && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-zinc-300 dark:text-zinc-600", "aria-hidden": "true", children: "/" }),
      crumb.url ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "a",
        {
          href: crumb.url,
          className: "text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300",
          children: crumb.label
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-zinc-700 dark:text-zinc-300", children: crumb.label })
    ] }, i)) }) }),
    c.title && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { className: "text-2xl font-bold text-zinc-900 dark:text-white", children: c.title })
  ] }) });
}

// src/renderers/landing-section-renderer.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { id: anchorId, className: sectionBgClasses(bg), children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SectionContent, { sectionType, config: resolvedConfig, formProps }) });
}
function SectionContent({
  sectionType,
  config,
  formProps
}) {
  switch (sectionType) {
    case "hero_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingHeroStatement, { config });
    case "hero_capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingHeroCaptureForm, { ...formProps });
    case "hero_video":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingHeroVideo, { config });
    case "pattern_recognition":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingPatternRecognition, { config });
    case "problem_statement":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingProblemStatement, { config });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingSacredCow, { config });
    case "rome_is_burning":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingRomeBurning, { config });
    case "programme_overview":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingProgrammeOverview, { config });
    case "programme_arc":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingProgrammeArc, { config });
    case "what_this_is_isnt":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingWhatThisIsIsnt, { config });
    case "what_youll_experience":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingWhatYoullExperience, { config });
    case "curriculum_breakdown":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingCurriculumBreakdown, { config });
    case "features_grid":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingFeaturesGrid, { config });
    case "testimonials":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingTestimonialsNew, { config });
    case "case_study":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingCaseStudy, { config });
    case "coach_bio":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingCoachBio, { config });
    case "social_proof_bar":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingSocialProofBar, { config });
    case "perfect_for_you":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingPerfectForYou, { config });
    case "faq":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingFaqNew, { config });
    case "objection_block":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingObjectionBlock, { config });
    case "investment_pricing":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingInvestmentPricing, { config });
    case "guarantee":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingGuarantee, { config });
    case "urgency_closing":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingUrgencyClosing, { config });
    case "capture_form":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingCaptureForm, { ...formProps });
    case "application_form":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingApplicationForm, { ...formProps });
    case "inline_cta":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingInlineCta, { config });
    case "confirmation_message":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingConfirmationMessage, { config });
    case "diagnostic_framing":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingDiagnosticFraming, { config });
    case "quick_win":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingQuickWin, { config });
    case "social_share":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingSocialShare, { config });
    case "post_purchase_welcome":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingPostPurchaseWelcome, { config });
    case "rich_text":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingRichText, { config });
    case "pullquote":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingPullquote, { config });
    case "data_statistic":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingDataStatistic, { config });
    case "image_block":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingImageBlock, { config });
    case "video_block":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingVideoBlock, { config });
    case "comparison_table":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingComparisonTable, { config });
    case "section_divider":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingSectionDivider, { config });
    case "anchor_navigation":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingAnchorNavigation, { config });
    case "page_header_breadcrumb":
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LandingPageHeader, { config });
    default:
      return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LandingAnchorNavigation,
  LandingApplicationForm,
  LandingCaptureForm,
  LandingCaseStudy,
  LandingCoachBio,
  LandingComparisonTable,
  LandingConfirmationMessage,
  LandingCurriculumBreakdown,
  LandingDataStatistic,
  LandingDiagnosticFraming,
  LandingFaqNew,
  LandingFeaturesGrid,
  LandingGuarantee,
  LandingHeroCaptureForm,
  LandingHeroStatement,
  LandingHeroVideo,
  LandingImageBlock,
  LandingInlineCta,
  LandingInvestmentPricing,
  LandingObjectionBlock,
  LandingPageHeader,
  LandingPatternRecognition,
  LandingPerfectForYou,
  LandingPostPurchaseWelcome,
  LandingProblemStatement,
  LandingProgrammeArc,
  LandingProgrammeOverview,
  LandingPullquote,
  LandingQuickWin,
  LandingRichText,
  LandingRomeBurning,
  LandingSacredCow,
  LandingSectionDivider,
  LandingSectionRenderer,
  LandingSocialProofBar,
  LandingSocialShare,
  LandingTestimonialsNew,
  LandingUrgencyClosing,
  LandingVideoBlock,
  LandingWhatThisIsIsnt,
  LandingWhatYoullExperience
});
