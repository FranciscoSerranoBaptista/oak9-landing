import { describe, it, expect } from "vitest";
import { sectionConfigSchemas } from "../src/schemas/section-configs";
import { pageSettingsSchema, ctaModeSchema } from "../src/schemas/page-settings";
import { LANDING_SECTION_TYPES, type LandingSectionType } from "../src/types/landing-pages";

// ---------------------------------------------------------------------------
// Minimal valid configs for every section type
// ---------------------------------------------------------------------------

const minimalConfigs: Record<LandingSectionType, Record<string, unknown>> = {
  hero_statement: { headline: "Welcome" },
  hero_capture_form: { headline: "Join Us" },
  hero_video: { headline: "Watch", video_url: "https://example.com/video.mp4" },
  pattern_recognition: { headline: "Patterns", body_text: "Do you recognise this?" },
  problem_statement: { headline: "The Problem", body_text: "Here is the problem." },
  sacred_cow_challenge: { sacred_cow: "Everyone says X", sour_milk: "But actually...", reframe: "Consider this instead" },
  rome_is_burning: { headline: "Act Now", body_text: "Time is running out." },
  programme_overview: { headline: "The Programme", body_text: "Overview text here." },
  programme_arc: { phases: [{ phase_number: 1, phase_name: "Start", phase_description: "The beginning" }] },
  what_this_is_isnt: { is_items: [{ statement: "It is this" }], is_not_items: [{ statement: "Not that" }] },
  what_youll_experience: { experience_items: [{ title: "Deep work", description: "Focused sessions" }] },
  curriculum_breakdown: { modules: [{ module_number: 1, module_title: "Module 1", module_description: "First module" }] },
  features_grid: { features: [{ feature_title: "Fast", feature_description: "Really fast" }] },
  testimonials: {},
  case_study: { headline: "Case Study", before_state: "Before", turning_point: "Turning point", after_state: "After" },
  coach_bio: { bio_text: "A bio about the coach." },
  social_proof_bar: {},
  huma_widget: { widget_id: "550e8400-e29b-41d4-a716-446655440000" },
  perfect_for_you: { headline: "Perfect for you", for_items: [{ statement: "You want growth" }] },
  faq: { faq_items: [{ question: "Why?", answer: "Because." }] },
  objection_block: { objection: "Too expensive", response: "Consider the value." },
  investment_pricing: { pricing_tiers: [{ tier_name: "Standard", price: "500", currency: "EUR" }] },
  guarantee: { guarantee_text: "Full money-back guarantee" },
  urgency_closing: { body_text: "Spots are limited.", cta_button: { label: "Apply", url: "https://example.com" } },
  capture_form: { form_fields: [{ field_name: "email", field_type: "email", field_label: "Email" }] },
  application_form: { form_fields: [{ field_name: "email", field_type: "email", field_label: "Email" }] },
  inline_cta: { cta_button: { label: "Get Started", url: "https://example.com" } },
  confirmation_message: { headline: "Thank you!", body_text: "We received your submission." },
  diagnostic_framing: { action_taken: "Signed up", what_it_says: "You're ready to grow." },
  quick_win: {},
  social_share: { platforms: ["linkedin", "twitter"], share_url: "https://example.com" },
  post_purchase_welcome: { headline: "Welcome!", welcome_text: "Let's get started.", next_steps: [{ step_number: 1, step_title: "Step 1", step_description: "Do this first" }] },
  rich_text: { body_text: "Some rich text content." },
  pullquote: { quote_text: "Something profound." },
  data_statistic: { metric: "95%", metric_label: "Completion rate" },
  image_block: { image: { url: "https://example.com/img.jpg" } },
  video_block: { video_url: "https://example.com/video.mp4" },
  comparison_table: { column_headers: ["Us", "Them"], rows: [{ row_label: "Speed", column_values: ["Fast", "Slow"] }] },
  section_divider: {},
  anchor_navigation: { nav_items: [{ label: "Top", anchor_id: "top" }] },
  page_header_breadcrumb: {},
};

// ---------------------------------------------------------------------------
// Section config schema tests
// ---------------------------------------------------------------------------

describe("sectionConfigSchemas", () => {
  describe("accepts minimal valid config for every section type", () => {
    for (const type of LANDING_SECTION_TYPES) {
      it(type, () => {
        const schema = sectionConfigSchemas[type];
        expect(schema).toBeDefined();
        const result = schema.safeParse(minimalConfigs[type]);
        if (!result.success) {
          throw new Error(`Validation failed for ${type}: ${JSON.stringify(result.error.issues, null, 2)}`);
        }
        expect(result.success).toBe(true);
      });
    }
  });

  describe("rejects invalid configs", () => {
    it("hero_statement rejects headline exceeding max length", () => {
      const schema = sectionConfigSchemas.hero_statement;
      const result = schema.safeParse({ headline: "x".repeat(501) });
      expect(result.success).toBe(false);
    });

    it("programme_arc rejects missing phases", () => {
      const schema = sectionConfigSchemas.programme_arc;
      const result = schema.safeParse({});
      expect(result.success).toBe(false);
    });

    it("urgency_closing rejects missing cta_button", () => {
      const schema = sectionConfigSchemas.urgency_closing;
      const result = schema.safeParse({ body_text: "Go!" });
      expect(result.success).toBe(false);
    });

    it("social_share rejects invalid platform", () => {
      const schema = sectionConfigSchemas.social_share;
      const result = schema.safeParse({
        platforms: ["myspace"],
        share_url: "https://example.com",
      });
      expect(result.success).toBe(false);
    });

    it("comparison_table rejects fewer than 2 column_headers", () => {
      const schema = sectionConfigSchemas.comparison_table;
      const result = schema.safeParse({
        column_headers: ["Only one"],
        rows: [{ row_label: "Row", column_values: ["Val"] }],
      });
      expect(result.success).toBe(false);
    });

    it("faq rejects missing faq_items", () => {
      const schema = sectionConfigSchemas.faq;
      const result = schema.safeParse({});
      expect(result.success).toBe(false);
    });

    it("what_this_is_isnt rejects missing is_items", () => {
      const schema = sectionConfigSchemas.what_this_is_isnt;
      const result = schema.safeParse({ is_not_items: [{ statement: "Not this" }] });
      expect(result.success).toBe(false);
    });
  });
});

// ---------------------------------------------------------------------------
// Page settings schema tests
// ---------------------------------------------------------------------------

describe("pageSettingsSchema", () => {
  it("accepts undefined (optional)", () => {
    const result = pageSettingsSchema.safeParse(undefined);
    expect(result.success).toBe(true);
  });

  it("accepts empty object", () => {
    const result = pageSettingsSchema.safeParse({});
    expect(result.success).toBe(true);
  });

  it("accepts valid SEO fields", () => {
    const result = pageSettingsSchema.safeParse({
      meta_title: "My Page",
      meta_description: "A landing page",
      robots: "noindex, nofollow",
    });
    expect(result.success).toBe(true);
  });
});

describe("ctaModeSchema", () => {
  it("accepts external_link with valid URL", () => {
    const result = ctaModeSchema.safeParse({
      mode: "external_link",
      url: "https://calendly.com/demo",
    });
    expect(result.success).toBe(true);
  });

  it("accepts checkout with valid UUID", () => {
    const result = ctaModeSchema.safeParse({
      mode: "checkout",
      plan_id: "550e8400-e29b-41d4-a716-446655440000",
    });
    expect(result.success).toBe(true);
  });

  it("accepts form_capture", () => {
    const result = ctaModeSchema.safeParse({
      mode: "form_capture",
      target_section_type: "capture_form",
    });
    expect(result.success).toBe(true);
  });

  it("rejects external_link with invalid URL", () => {
    const result = ctaModeSchema.safeParse({
      mode: "external_link",
      url: "not-a-url",
    });
    expect(result.success).toBe(false);
  });

  it("rejects checkout with non-UUID plan_id", () => {
    const result = ctaModeSchema.safeParse({
      mode: "checkout",
      plan_id: "not-a-uuid",
    });
    expect(result.success).toBe(false);
  });

  it("rejects unknown mode", () => {
    const result = ctaModeSchema.safeParse({
      mode: "unknown",
    });
    expect(result.success).toBe(false);
  });
});
