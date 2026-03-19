type LandingSectionType = "hero_statement" | "hero_capture_form" | "hero_video" | "pattern_recognition" | "problem_statement" | "sacred_cow_challenge" | "rome_is_burning" | "programme_overview" | "programme_arc" | "what_this_is_isnt" | "what_youll_experience" | "curriculum_breakdown" | "features_grid" | "testimonials" | "case_study" | "coach_bio" | "social_proof_bar" | "perfect_for_you" | "faq" | "objection_block" | "investment_pricing" | "guarantee" | "urgency_closing" | "capture_form" | "application_form" | "inline_cta" | "confirmation_message" | "diagnostic_framing" | "quick_win" | "social_share" | "post_purchase_welcome" | "rich_text" | "pullquote" | "data_statistic" | "image_block" | "video_block" | "comparison_table" | "section_divider" | "anchor_navigation" | "page_header_breadcrumb";
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

export type { CtaMode as C, LandingSectionType as L };
