import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { createElement } from "react";
import { LANDING_SECTION_TYPES, type LandingSectionType } from "../src/types/landing-pages";
import { LandingSectionRenderer } from "../src/renderers/landing-section-renderer";

// ---------------------------------------------------------------------------
// Minimal configs that produce visible output for each renderer.
// These mirror the schema-validation test but are shaped for the component's
// internal interface (which casts config as Record<string,unknown>).
// ---------------------------------------------------------------------------

const renderConfigs: Record<LandingSectionType, Record<string, unknown>> = {
  hero_statement: { headline: "Hello World" },
  hero_capture_form: { headline: "Join", form_fields: [{ field_name: "email", field_type: "email", field_label: "Email" }] },
  hero_video: { headline: "Watch", video_url: "https://example.com/v.mp4" },
  pattern_recognition: { headline: "Recognise this?", body_text: "You know the feeling." },
  problem_statement: { headline: "The Problem", body_text: "Here it is." },
  sacred_cow_challenge: { sacred_cow: "Everyone says X", sour_milk: "But actually", reframe: "Try this" },
  rome_is_burning: { headline: "Act Now", body_text: "Time is short." },
  programme_overview: { headline: "Programme", body_text: "Overview." },
  programme_arc: { phases: [{ phase_number: 1, phase_name: "Phase 1", phase_description: "Start here" }] },
  what_this_is_isnt: { is_items: [{ statement: "It is" }], is_not_items: [{ statement: "It isn't" }] },
  what_youll_experience: { experience_items: [{ title: "Focus", description: "Deep work" }] },
  curriculum_breakdown: { modules: [{ module_number: 1, module_title: "Mod 1", module_description: "First" }] },
  features_grid: { features: [{ feature_title: "Fast", feature_description: "Very fast" }] },
  testimonials: { testimonials: [{ quote: "Amazing!", attribution: "Jane" }] },
  case_study: { headline: "Case", before_state: "Before", turning_point: "Change", after_state: "After" },
  coach_bio: { bio_text: "Coach bio." },
  social_proof_bar: { proof_items: [{ metric: "100+", label: "Users" }] },
  perfect_for_you: { headline: "For you", for_items: [{ statement: "You want growth" }] },
  faq: { faq_items: [{ question: "Why?", answer: "Because." }] },
  objection_block: { objection: "Too much", response: "Worth it." },
  investment_pricing: { pricing_tiers: [{ tier_name: "Basic", price: "99", currency: "EUR" }] },
  guarantee: { guarantee_text: "Money back." },
  urgency_closing: { body_text: "Last chance.", cta_button: { label: "Go", url: "#" } },
  capture_form: { form_fields: [{ field_name: "email", field_type: "email", field_label: "Email" }] },
  application_form: { form_fields: [{ field_name: "email", field_type: "email", field_label: "Email" }] },
  inline_cta: { cta_button: { label: "Start", url: "#" } },
  confirmation_message: { headline: "Thanks!", body_text: "Done." },
  diagnostic_framing: { action_taken: "Signed up", what_it_says: "You're in." },
  quick_win: { headline: "Quick win", body_text: "Here's something useful." },
  social_share: { platforms: ["linkedin"], share_url: "https://example.com" },
  post_purchase_welcome: { headline: "Welcome!", welcome_text: "Hi.", next_steps: [{ step_number: 1, step_title: "Step 1", step_description: "Go" }] },
  rich_text: { body_text: "Hello paragraph." },
  pullquote: { quote_text: "Something wise." },
  data_statistic: { metric: "95%", metric_label: "Success rate" },
  image_block: { image: { url: "https://example.com/img.jpg", alt_text: "Photo" } },
  video_block: { video_url: "https://example.com/v.mp4" },
  comparison_table: { columns: ["Us", "Them"], rows: [{ label: "Speed", values: ["Fast", "Slow"] }] },
  section_divider: {},
  anchor_navigation: { nav_items: [{ label: "Top", anchor_id: "top" }] },
  page_header_breadcrumb: { page_title: "Home" },
};

// ---------------------------------------------------------------------------
// Smoke tests: every renderer mounts without throwing
// ---------------------------------------------------------------------------

describe("LandingSectionRenderer smoke tests", () => {
  for (const sectionType of LANDING_SECTION_TYPES) {
    it(`renders ${sectionType} without crashing`, () => {
      expect(() => {
        render(
          createElement(LandingSectionRenderer, {
            sectionType,
            config: renderConfigs[sectionType],
          })
        );
      }).not.toThrow();
    });
  }
});

describe("LandingSectionRenderer returns null for unknown type", () => {
  it("renders nothing for an unrecognised section type", () => {
    const { container } = render(
      createElement(LandingSectionRenderer, {
        sectionType: "nonexistent_type" as LandingSectionType,
        config: {},
      })
    );
    // The outer wrapper div still renders, but the inner SectionContent returns null
    expect(container.firstChild).toBeTruthy();
    expect(container.firstChild!.childNodes.length).toBe(0);
  });
});
