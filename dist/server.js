// src/server/server-sections.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function ServerSections({ sections, networkName }) {
  return /* @__PURE__ */ jsx("article", { "aria-label": `${networkName} landing page`, children: sections.map((section, i) => /* @__PURE__ */ jsx(ServerSection, { section }, i)) });
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
      return /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsx("h1", { children: str(c, "headline") }),
        str(c, "subtitle") && /* @__PURE__ */ jsx("p", { children: str(c, "subtitle") }),
        str(c, "body_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "body_text") })
      ] });
    case "pattern_recognition":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Pattern recognition", children: [
        str(c, "section_label") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: str(c, "section_label") }) }),
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "recognition_items").length > 0 && /* @__PURE__ */ jsx("ul", { children: arr(c, "recognition_items").map((item, i) => /* @__PURE__ */ jsx("li", { children: item.statement }, i)) }),
        str(c, "closing_line") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: str(c, "closing_line") }) })
      ] });
    case "sacred_cow_challenge":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Challenge the belief", children: [
        /* @__PURE__ */ jsx("blockquote", { children: str(c, "sacred_cow") }),
        str(c, "sour_milk") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "sour_milk") }),
        str(c, "reframe") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "reframe") }),
        str(c, "transition_text") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: str(c, "transition_text") }) })
      ] });
    case "rome_is_burning":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Urgency", children: [
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "time_markers").length > 0 && /* @__PURE__ */ jsx("dl", { children: arr(c, "time_markers").map((m, i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: /* @__PURE__ */ jsx("strong", { children: m.timeframe }) }),
          /* @__PURE__ */ jsx("dd", { children: m.consequence })
        ] }, i)) }),
        str(c, "closing_line") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: str(c, "closing_line") }) })
      ] });
    case "programme_overview":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Programme", children: [
        str(c, "section_label") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: str(c, "section_label") }) }),
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "subtitle") && /* @__PURE__ */ jsx("p", { children: str(c, "subtitle") }),
        str(c, "body_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "body_text") }),
        arr(c, "key_details").length > 0 && /* @__PURE__ */ jsx("dl", { children: arr(c, "key_details").map((d, i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: d.label }),
          /* @__PURE__ */ jsx("dd", { children: d.value })
        ] }, i)) })
      ] });
    case "programme_arc":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Programme journey", children: [
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "introduction") && /* @__PURE__ */ jsx("p", { children: str(c, "introduction") }),
        arr(c, "phases").length > 0 && /* @__PURE__ */ jsx("ol", { children: arr(c, "phases").map((p, i) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h3", { children: p.phase_name }),
          /* @__PURE__ */ jsx("p", { children: p.phase_description })
        ] }, i)) }),
        str(c, "closing_text") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: str(c, "closing_text") }) })
      ] });
    case "what_youll_experience":
      return /* @__PURE__ */ jsx("section", { "aria-label": "What shifts", children: arr(c, "experience_items").length > 0 && /* @__PURE__ */ jsx("dl", { children: arr(c, "experience_items").map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: /* @__PURE__ */ jsx("strong", { children: item.title }) }),
        /* @__PURE__ */ jsx("dd", { children: item.description })
      ] }, i)) }) });
    case "what_this_is_isnt":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "What this is and isn't", children: [
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        arr(c, "is_items").length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { children: "What this is" }),
          /* @__PURE__ */ jsx("ul", { children: arr(c, "is_items").map((item, i) => /* @__PURE__ */ jsx("li", { children: item.statement }, i)) })
        ] }),
        arr(c, "is_not_items").length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { children: "What this is not" }),
          /* @__PURE__ */ jsx("ul", { children: arr(c, "is_not_items").map((item, i) => /* @__PURE__ */ jsx("li", { children: item.statement }, i)) })
        ] }),
        str(c, "closing_text") && /* @__PURE__ */ jsx("p", { children: str(c, "closing_text") })
      ] });
    case "testimonials":
      return /* @__PURE__ */ jsx("section", { "aria-label": "Testimonials", children: arr(c, "testimonials").map((t, i) => /* @__PURE__ */ jsxs("blockquote", { children: [
        /* @__PURE__ */ jsx("p", { children: t.quote }),
        /* @__PURE__ */ jsxs("footer", { children: [
          /* @__PURE__ */ jsx("cite", { children: t.attribution }),
          t.context && /* @__PURE__ */ jsxs("span", { children: [
            " \u2014 ",
            t.context
          ] })
        ] })
      ] }, i)) });
    case "case_study":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Case study", children: [
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "before_state") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "before_state") }),
        str(c, "turning_point") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "turning_point") }),
        str(c, "after_state") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "after_state") }),
        str(c, "client_words") && /* @__PURE__ */ jsx("blockquote", { children: str(c, "client_words") })
      ] });
    case "perfect_for_you":
      return /* @__PURE__ */ jsxs("section", { "aria-label": str(c, "headline") ?? "Is this for you?", children: [
        /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        arr(c, "for_items").length > 0 && /* @__PURE__ */ jsx("ul", { children: arr(c, "for_items").map((item, i) => /* @__PURE__ */ jsx("li", { children: item.statement }, i)) }),
        arr(c, "not_for_items").length > 0 && /* @__PURE__ */ jsx("ul", { children: arr(c, "not_for_items").map((item, i) => /* @__PURE__ */ jsx("li", { children: item.statement }, i)) }),
        str(c, "closing_text") && /* @__PURE__ */ jsx("p", { children: str(c, "closing_text") })
      ] });
    case "coach_bio":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "About the coach", children: [
        str(c, "bio_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "bio_text") }),
        arr(c, "credentials").length > 0 && /* @__PURE__ */ jsx("ul", { children: arr(c, "credentials").map((cred, i) => /* @__PURE__ */ jsx("li", { children: cred.credential }, i)) }),
        str(c, "personal_line") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: str(c, "personal_line") }) })
      ] });
    case "faq":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Frequently Asked Questions", children: [
        str(c, "introduction") && /* @__PURE__ */ jsx("p", { children: str(c, "introduction") }),
        arr(c, "faq_items").length > 0 && /* @__PURE__ */ jsx("dl", { children: arr(c, "faq_items").map((faq, i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: /* @__PURE__ */ jsx("strong", { children: faq.question }) }),
          /* @__PURE__ */ jsx("dd", { children: faq.answer })
        ] }, i)) })
      ] });
    case "objection_block":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Addressing concerns", children: [
        /* @__PURE__ */ jsx("blockquote", { children: str(c, "objection") }),
        str(c, "response") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "response") }),
        str(c, "reframe") && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: str(c, "reframe") }) })
      ] });
    case "guarantee":
      return /* @__PURE__ */ jsx("section", { "aria-label": "Guarantee", children: str(c, "guarantee_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "guarantee_text") }) });
    case "investment_pricing":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Pricing", children: [
        str(c, "introduction") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "introduction") }),
        arr(c, "pricing_tiers").map((tier, i) => /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("h3", { children: tier.tier_name }),
          /* @__PURE__ */ jsxs("p", { children: [
            tier.currency ?? "EUR",
            " ",
            tier.price
          ] }),
          tier.tier_description && /* @__PURE__ */ jsx("p", { children: tier.tier_description }),
          tier.included_items && /* @__PURE__ */ jsx("ul", { children: tier.included_items.map((item, j) => /* @__PURE__ */ jsx("li", { children: item }, j)) })
        ] }, i))
      ] });
    case "urgency_closing":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Limited availability", children: [
        str(c, "headline") && /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ jsx(ServerParagraphs, { text: str(c, "body_text") })
      ] });
    case "pullquote":
      return /* @__PURE__ */ jsxs("figure", { children: [
        /* @__PURE__ */ jsx("blockquote", { children: str(c, "quote_text") }),
        str(c, "attribution") && /* @__PURE__ */ jsxs("figcaption", { children: [
          "\u2014 ",
          str(c, "attribution")
        ] })
      ] });
    case "inline_cta":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Call to action", children: [
        str(c, "headline") && /* @__PURE__ */ jsx("h2", { children: str(c, "headline") }),
        str(c, "body_text") && /* @__PURE__ */ jsx("p", { children: str(c, "body_text") })
      ] });
    case "social_proof_bar":
      return /* @__PURE__ */ jsxs("section", { "aria-label": "Social proof", children: [
        arr(c, "proof_items").length > 0 && /* @__PURE__ */ jsx("dl", { children: arr(c, "proof_items").map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: item.metric }),
          /* @__PURE__ */ jsx("dd", { children: item.label })
        ] }, i)) }),
        str(c, "proof_line") && /* @__PURE__ */ jsx("p", { children: str(c, "proof_line") })
      ] });
    default:
      return null;
  }
}
function ServerParagraphs({ text }) {
  return /* @__PURE__ */ jsx(Fragment, { children: text.split("\n\n").map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) });
}
export {
  ServerParagraphs,
  ServerSection,
  ServerSections
};
