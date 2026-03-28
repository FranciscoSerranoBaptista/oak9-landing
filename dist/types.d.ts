type LandingSectionType = "hero_statement" | "hero_capture_form" | "hero_video" | "pattern_recognition" | "problem_statement" | "sacred_cow_challenge" | "rome_is_burning" | "programme_overview" | "programme_arc" | "what_this_is_isnt" | "what_youll_experience" | "curriculum_breakdown" | "features_grid" | "testimonials" | "case_study" | "coach_bio" | "social_proof_bar" | "huma_widget" | "perfect_for_you" | "faq" | "objection_block" | "investment_pricing" | "guarantee" | "urgency_closing" | "capture_form" | "application_form" | "inline_cta" | "confirmation_message" | "diagnostic_framing" | "quick_win" | "social_share" | "post_purchase_welcome" | "rich_text" | "pullquote" | "data_statistic" | "image_block" | "video_block" | "comparison_table" | "section_divider" | "anchor_navigation" | "page_header_breadcrumb";
/** All section type keys for runtime use */
declare const LANDING_SECTION_TYPES: LandingSectionType[];
/** Human-readable labels for section types, grouped by category */
declare const SECTION_TYPE_LABELS: Record<LandingSectionType, string>;
/** Categorised section types for the "Add Section" menu */
declare const SECTION_TYPE_CATEGORIES: {
    label: string;
    types: LandingSectionType[];
}[];
type CtaMode = {
    mode: "external_link";
    url: string;
} | {
    mode: "checkout";
    plan_id: string;
} | {
    mode: "form_capture";
    target_section_type?: "capture_form" | "application_form";
};
interface LandingPageSettings {
    meta_title?: string;
    meta_description?: string;
    og_image_url?: string;
    canonical_url?: string;
    robots?: string;
    custom_css_class?: string;
    cta_mode?: CtaMode;
    /** @deprecated Use cta_mode instead. Kept for backwards compat reads. */
    default_cta_url?: string;
    waitlist_headline?: string;
    waitlist_description?: string;
    default_audience_id?: string;
}

export { type CtaMode, LANDING_SECTION_TYPES, type LandingPageSettings, type LandingSectionType, SECTION_TYPE_CATEGORIES, SECTION_TYPE_LABELS };
