import { z } from 'zod';
import { LandingSectionType } from './types.cjs';

/** CTA Button — reused across many section types */
declare const ctaButtonSchema: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodString;
    variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
    size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
    open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    url: string;
    variant: "primary" | "secondary" | "ghost" | "text-link";
    size?: "small" | "medium" | "large" | undefined;
    open_in_new_tab?: boolean | undefined;
}, {
    label: string;
    url: string;
    variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    open_in_new_tab?: boolean | undefined;
}>;
/** Media reference — image/video with alt + caption */
declare const mediaSchema: z.ZodObject<{
    url: z.ZodString;
    alt_text: z.ZodDefault<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string;
    alt_text: string;
    caption?: string | undefined;
}, {
    url: string;
    alt_text?: string | undefined;
    caption?: string | undefined;
}>;
/** 1.1 Hero — Statement */
declare const heroStatementConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    body_text: z.ZodOptional<z.ZodString>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
    background_image: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
    background_overlay: z.ZodOptional<z.ZodObject<{
        color: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        opacity?: number | undefined;
    }, {
        color?: string | undefined;
        opacity?: number | undefined;
    }>>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "left-aligned", "split"]>>;
    height: z.ZodDefault<z.ZodEnum<["viewport", "large", "medium"]>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    layout: "centered" | "left-aligned" | "split";
    height: "medium" | "large" | "viewport";
    subtitle?: string | undefined;
    body_text?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    background_image?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    background_overlay?: {
        color?: string | undefined;
        opacity?: number | undefined;
    } | undefined;
}, {
    headline: string;
    subtitle?: string | undefined;
    body_text?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    background_image?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    background_overlay?: {
        color?: string | undefined;
        opacity?: number | undefined;
    } | undefined;
    layout?: "centered" | "left-aligned" | "split" | undefined;
    height?: "medium" | "large" | "viewport" | undefined;
}>;
/** 1.2 Hero — With Capture Form */
declare const heroCaptureFormConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    body_text: z.ZodOptional<z.ZodString>;
    form_fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
        field_name: z.ZodString;
        field_type: z.ZodEnum<["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]>;
        field_label: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodDefault<z.ZodBoolean>;
        options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        help_text: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }>, "many">>;
    submit_button_label: z.ZodDefault<z.ZodString>;
    form_position: z.ZodDefault<z.ZodEnum<["inline", "sidebar", "overlay"]>>;
    social_proof_line: z.ZodOptional<z.ZodString>;
    background_image: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "split"]>>;
    audience_id: z.ZodOptional<z.ZodString>;
    privacy_text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    layout: "centered" | "split";
    form_fields: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }[];
    submit_button_label: string;
    form_position: "inline" | "sidebar" | "overlay";
    subtitle?: string | undefined;
    body_text?: string | undefined;
    background_image?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    social_proof_line?: string | undefined;
    audience_id?: string | undefined;
    privacy_text?: string | undefined;
}, {
    headline: string;
    subtitle?: string | undefined;
    body_text?: string | undefined;
    background_image?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    layout?: "centered" | "split" | undefined;
    form_fields?: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }[] | undefined;
    submit_button_label?: string | undefined;
    form_position?: "inline" | "sidebar" | "overlay" | undefined;
    social_proof_line?: string | undefined;
    audience_id?: string | undefined;
    privacy_text?: string | undefined;
}>;
/** 1.3 Hero — With Video */
declare const heroVideoConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    video_url: z.ZodString;
    video_thumbnail: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
    video_autoplay: z.ZodOptional<z.ZodBoolean>;
    video_caption: z.ZodOptional<z.ZodString>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "split"]>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    layout: "centered" | "split";
    video_url: string;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    video_thumbnail?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    video_autoplay?: boolean | undefined;
    video_caption?: string | undefined;
}, {
    headline: string;
    video_url: string;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    layout?: "centered" | "split" | undefined;
    video_thumbnail?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    video_autoplay?: boolean | undefined;
    video_caption?: string | undefined;
}>;
/** 2.1 Pattern Recognition */
declare const patternRecognitionConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodString;
    body_text: z.ZodString;
    recognition_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        statement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statement: string;
    }, {
        statement: string;
    }>, "many">>;
    closing_line: z.ZodOptional<z.ZodString>;
    background_style: z.ZodDefault<z.ZodEnum<["light", "dark", "cream"]>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    body_text: string;
    background_style: "light" | "dark" | "cream";
    section_label?: string | undefined;
    recognition_items?: {
        statement: string;
    }[] | undefined;
    closing_line?: string | undefined;
}, {
    headline: string;
    body_text: string;
    section_label?: string | undefined;
    recognition_items?: {
        statement: string;
    }[] | undefined;
    closing_line?: string | undefined;
    background_style?: "light" | "dark" | "cream" | undefined;
}>;
/** 2.2 Problem Statement */
declare const problemStatementConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodString;
    body_text: z.ZodString;
    contrast_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        surface_reality: z.ZodString;
        underneath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        surface_reality: string;
        underneath: string;
    }, {
        surface_reality: string;
        underneath: string;
    }>, "many">>;
    transition_line: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    body_text: string;
    section_label?: string | undefined;
    contrast_items?: {
        surface_reality: string;
        underneath: string;
    }[] | undefined;
    transition_line?: string | undefined;
}, {
    headline: string;
    body_text: string;
    section_label?: string | undefined;
    contrast_items?: {
        surface_reality: string;
        underneath: string;
    }[] | undefined;
    transition_line?: string | undefined;
}>;
/** 2.3 Sacred Cow Challenge */
declare const sacredCowChallengeConfigSchema: z.ZodObject<{
    sacred_cow: z.ZodString;
    sour_milk: z.ZodString;
    reframe: z.ZodString;
    transition_text: z.ZodOptional<z.ZodString>;
    visual_style: z.ZodDefault<z.ZodEnum<["quote-card", "inline", "split"]>>;
}, "strip", z.ZodTypeAny, {
    sacred_cow: string;
    sour_milk: string;
    reframe: string;
    visual_style: "split" | "inline" | "quote-card";
    transition_text?: string | undefined;
}, {
    sacred_cow: string;
    sour_milk: string;
    reframe: string;
    transition_text?: string | undefined;
    visual_style?: "split" | "inline" | "quote-card" | undefined;
}>;
/** 2.4 Rome Is Burning */
declare const romeIsBurningConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    body_text: z.ZodString;
    time_markers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        timeframe: z.ZodString;
        consequence: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        timeframe: string;
        consequence: string;
    }, {
        timeframe: string;
        consequence: string;
    }>, "many">>;
    closing_line: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    body_text: string;
    closing_line?: string | undefined;
    time_markers?: {
        timeframe: string;
        consequence: string;
    }[] | undefined;
}, {
    headline: string;
    body_text: string;
    closing_line?: string | undefined;
    time_markers?: {
        timeframe: string;
        consequence: string;
    }[] | undefined;
}>;
/** 3.1 Programme Overview */
declare const programmeOverviewConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    body_text: z.ZodString;
    key_details: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        value: string;
    }, {
        label: string;
        value: string;
    }>, "many">>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    body_text: string;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    section_label?: string | undefined;
    key_details?: {
        label: string;
        value: string;
    }[] | undefined;
}, {
    headline: string;
    body_text: string;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    section_label?: string | undefined;
    key_details?: {
        label: string;
        value: string;
    }[] | undefined;
}>;
/** 3.2 Programme Arc / Journey */
declare const programmeArcConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    phases: z.ZodArray<z.ZodObject<{
        phase_number: z.ZodNumber;
        phase_name: z.ZodString;
        phase_description: z.ZodString;
        phase_icon: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            alt_text: z.ZodDefault<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        }, {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        phase_number: number;
        phase_name: string;
        phase_description: string;
        phase_icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }, {
        phase_number: number;
        phase_name: string;
        phase_description: string;
        phase_icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["horizontal-timeline", "vertical-steps", "cards-grid"]>>;
    closing_text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    layout: "horizontal-timeline" | "vertical-steps" | "cards-grid";
    phases: {
        phase_number: number;
        phase_name: string;
        phase_description: string;
        phase_icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    closing_text?: string | undefined;
}, {
    phases: {
        phase_number: number;
        phase_name: string;
        phase_description: string;
        phase_icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    layout?: "horizontal-timeline" | "vertical-steps" | "cards-grid" | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    closing_text?: string | undefined;
}>;
/** 3.3 What This Is / What This Isn't */
declare const whatThisIsIsntConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    is_items: z.ZodArray<z.ZodObject<{
        statement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statement: string;
    }, {
        statement: string;
    }>, "many">;
    is_not_items: z.ZodArray<z.ZodObject<{
        statement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statement: string;
    }, {
        statement: string;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["two-columns", "alternating-rows", "single-column"]>>;
    closing_text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    layout: "two-columns" | "alternating-rows" | "single-column";
    is_items: {
        statement: string;
    }[];
    is_not_items: {
        statement: string;
    }[];
    headline?: string | undefined;
    closing_text?: string | undefined;
}, {
    is_items: {
        statement: string;
    }[];
    is_not_items: {
        statement: string;
    }[];
    headline?: string | undefined;
    layout?: "two-columns" | "alternating-rows" | "single-column" | undefined;
    closing_text?: string | undefined;
}>;
/** 3.4 What You'll Experience */
declare const whatYoullExperienceConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    experience_items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        icon: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            alt_text: z.ZodDefault<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        }, {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
        icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }, {
        title: string;
        description: string;
        icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["grid-2col", "grid-3col", "stacked-cards", "numbered-list"]>>;
    columns: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    layout: "grid-2col" | "grid-3col" | "stacked-cards" | "numbered-list";
    experience_items: {
        title: string;
        description: string;
        icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    columns?: number | undefined;
}, {
    experience_items: {
        title: string;
        description: string;
        icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    layout?: "grid-2col" | "grid-3col" | "stacked-cards" | "numbered-list" | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    columns?: number | undefined;
}>;
/** 3.5 Curriculum / Module Breakdown */
declare const curriculumBreakdownConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    modules: z.ZodArray<z.ZodObject<{
        module_number: z.ZodNumber;
        module_title: z.ZodString;
        module_description: z.ZodString;
        module_outcomes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        duration: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        module_number: number;
        module_title: string;
        module_description: string;
        module_outcomes?: string[] | undefined;
        duration?: string | undefined;
    }, {
        module_number: number;
        module_title: string;
        module_description: string;
        module_outcomes?: string[] | undefined;
        duration?: string | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["accordion", "cards", "timeline", "stacked"]>>;
    show_duration: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    layout: "accordion" | "cards" | "timeline" | "stacked";
    modules: {
        module_number: number;
        module_title: string;
        module_description: string;
        module_outcomes?: string[] | undefined;
        duration?: string | undefined;
    }[];
    headline?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    show_duration?: boolean | undefined;
}, {
    modules: {
        module_number: number;
        module_title: string;
        module_description: string;
        module_outcomes?: string[] | undefined;
        duration?: string | undefined;
    }[];
    headline?: string | undefined;
    layout?: "accordion" | "cards" | "timeline" | "stacked" | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    show_duration?: boolean | undefined;
}>;
/** 3.6 Features Grid */
declare const featuresGridConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    features: z.ZodArray<z.ZodObject<{
        feature_title: z.ZodString;
        feature_description: z.ZodString;
        feature_icon: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            alt_text: z.ZodDefault<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        }, {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        feature_title: string;
        feature_description: string;
        feature_icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }, {
        feature_title: string;
        feature_description: string;
        feature_icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["grid-2col", "grid-3col", "grid-4col", "icon-list"]>>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    layout: "grid-2col" | "grid-3col" | "grid-4col" | "icon-list";
    features: {
        feature_title: string;
        feature_description: string;
        feature_icon?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    section_label?: string | undefined;
}, {
    features: {
        feature_title: string;
        feature_description: string;
        feature_icon?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }[];
    headline?: string | undefined;
    subtitle?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    layout?: "grid-2col" | "grid-3col" | "grid-4col" | "icon-list" | undefined;
    section_label?: string | undefined;
}>;
/** 4.1 Testimonials */
declare const testimonialsConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    testimonials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        quote: z.ZodString;
        attribution: z.ZodString;
        context: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            alt_text: z.ZodDefault<z.ZodString>;
            caption: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        }, {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        quote: string;
        attribution: string;
        context?: string | undefined;
        avatar?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }, {
        quote: string;
        attribution: string;
        context?: string | undefined;
        avatar?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }>, "many">>;
    use_network_testimonials: z.ZodDefault<z.ZodBoolean>;
    max_items: z.ZodOptional<z.ZodNumber>;
    featured_only: z.ZodOptional<z.ZodBoolean>;
    layout: z.ZodDefault<z.ZodEnum<["carousel", "grid", "single-featured", "stacked"]>>;
    style: z.ZodDefault<z.ZodEnum<["card", "minimal", "pullquote"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "stacked" | "carousel" | "grid" | "single-featured";
    use_network_testimonials: boolean;
    style: "pullquote" | "card" | "minimal";
    testimonials?: {
        quote: string;
        attribution: string;
        context?: string | undefined;
        avatar?: {
            url: string;
            alt_text: string;
            caption?: string | undefined;
        } | undefined;
    }[] | undefined;
    headline?: string | undefined;
    section_label?: string | undefined;
    max_items?: number | undefined;
    featured_only?: boolean | undefined;
}, {
    testimonials?: {
        quote: string;
        attribution: string;
        context?: string | undefined;
        avatar?: {
            url: string;
            alt_text?: string | undefined;
            caption?: string | undefined;
        } | undefined;
    }[] | undefined;
    headline?: string | undefined;
    layout?: "stacked" | "carousel" | "grid" | "single-featured" | undefined;
    section_label?: string | undefined;
    use_network_testimonials?: boolean | undefined;
    max_items?: number | undefined;
    featured_only?: boolean | undefined;
    style?: "pullquote" | "card" | "minimal" | undefined;
}>;
/** 4.2 Case Study */
declare const caseStudyConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodString;
    pattern_name: z.ZodOptional<z.ZodString>;
    before_state: z.ZodString;
    turning_point: z.ZodString;
    after_state: z.ZodString;
    client_words: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["narrative", "before-after", "card"]>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    layout: "card" | "narrative" | "before-after";
    before_state: string;
    turning_point: string;
    after_state: string;
    section_label?: string | undefined;
    pattern_name?: string | undefined;
    client_words?: string | undefined;
}, {
    headline: string;
    before_state: string;
    turning_point: string;
    after_state: string;
    layout?: "card" | "narrative" | "before-after" | undefined;
    section_label?: string | undefined;
    pattern_name?: string | undefined;
    client_words?: string | undefined;
}>;
/** 4.3 Coach / Facilitator Bio */
declare const coachBioConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
    bio_text: z.ZodString;
    credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        credential: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        credential: string;
    }, {
        credential: string;
    }>, "many">>;
    personal_line: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["split", "centered", "card"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "centered" | "split" | "card";
    bio_text: string;
    headline?: string | undefined;
    section_label?: string | undefined;
    photo?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    credentials?: {
        credential: string;
    }[] | undefined;
    personal_line?: string | undefined;
}, {
    bio_text: string;
    headline?: string | undefined;
    layout?: "centered" | "split" | "card" | undefined;
    section_label?: string | undefined;
    photo?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    credentials?: {
        credential: string;
    }[] | undefined;
    personal_line?: string | undefined;
}>;
/** 4.4 Social Proof Bar */
declare const socialProofBarConfigSchema: z.ZodObject<{
    proof_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        metric: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        metric: string;
    }, {
        label: string;
        metric: string;
    }>, "many">>;
    logos: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>, "many">>;
    proof_line: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["bar", "inline"]>>;
    background_style: z.ZodDefault<z.ZodEnum<["light", "dark", "transparent"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "inline" | "bar";
    background_style: "light" | "dark" | "transparent";
    proof_items?: {
        label: string;
        metric: string;
    }[] | undefined;
    logos?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }[] | undefined;
    proof_line?: string | undefined;
}, {
    layout?: "inline" | "bar" | undefined;
    background_style?: "light" | "dark" | "transparent" | undefined;
    proof_items?: {
        label: string;
        metric: string;
    }[] | undefined;
    logos?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }[] | undefined;
    proof_line?: string | undefined;
}>;
/** 4.5 Huma Testimonial Widget */
declare const humaWidgetConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    widget_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    widget_id: string;
    headline?: string | undefined;
    section_label?: string | undefined;
}, {
    widget_id: string;
    headline?: string | undefined;
    section_label?: string | undefined;
}>;
/** 5.1 Perfect For You If */
declare const perfectForYouConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodString;
    for_items: z.ZodArray<z.ZodObject<{
        statement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statement: string;
    }, {
        statement: string;
    }>, "many">;
    not_for_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        statement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statement: string;
    }, {
        statement: string;
    }>, "many">>;
    closing_text: z.ZodOptional<z.ZodString>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
    layout: z.ZodDefault<z.ZodEnum<["two-columns", "single-column", "checklist"]>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    layout: "two-columns" | "single-column" | "checklist";
    for_items: {
        statement: string;
    }[];
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    section_label?: string | undefined;
    closing_text?: string | undefined;
    not_for_items?: {
        statement: string;
    }[] | undefined;
}, {
    headline: string;
    for_items: {
        statement: string;
    }[];
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    layout?: "two-columns" | "single-column" | "checklist" | undefined;
    section_label?: string | undefined;
    closing_text?: string | undefined;
    not_for_items?: {
        statement: string;
    }[] | undefined;
}>;
/** 5.2 FAQ */
declare const faqConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    faq_items: z.ZodArray<z.ZodObject<{
        question: z.ZodString;
        answer: z.ZodString;
        objection_type: z.ZodOptional<z.ZodEnum<["time", "money", "fit", "trust", "past_failure", "social_risk", "self_sufficiency"]>>;
    }, "strip", z.ZodTypeAny, {
        question: string;
        answer: string;
        objection_type?: "time" | "money" | "fit" | "trust" | "past_failure" | "social_risk" | "self_sufficiency" | undefined;
    }, {
        question: string;
        answer: string;
        objection_type?: "time" | "money" | "fit" | "trust" | "past_failure" | "social_risk" | "self_sufficiency" | undefined;
    }>, "many">;
    layout: z.ZodDefault<z.ZodEnum<["accordion", "stacked", "two-columns"]>>;
    closing_text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    layout: "two-columns" | "accordion" | "stacked";
    faq_items: {
        question: string;
        answer: string;
        objection_type?: "time" | "money" | "fit" | "trust" | "past_failure" | "social_risk" | "self_sufficiency" | undefined;
    }[];
    headline?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    closing_text?: string | undefined;
}, {
    faq_items: {
        question: string;
        answer: string;
        objection_type?: "time" | "money" | "fit" | "trust" | "past_failure" | "social_risk" | "self_sufficiency" | undefined;
    }[];
    headline?: string | undefined;
    layout?: "two-columns" | "accordion" | "stacked" | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    closing_text?: string | undefined;
}>;
/** 5.3 Objection Block */
declare const objectionBlockConfigSchema: z.ZodObject<{
    objection: z.ZodString;
    response: z.ZodString;
    reframe: z.ZodOptional<z.ZodString>;
    visual_style: z.ZodDefault<z.ZodEnum<["pullquote", "card", "inline"]>>;
}, "strip", z.ZodTypeAny, {
    visual_style: "pullquote" | "inline" | "card";
    objection: string;
    response: string;
    reframe?: string | undefined;
}, {
    objection: string;
    response: string;
    reframe?: string | undefined;
    visual_style?: "pullquote" | "inline" | "card" | undefined;
}>;
/** 6.1 Investment / Pricing */
declare const investmentPricingConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    pricing_tiers: z.ZodArray<z.ZodObject<{
        tier_name: z.ZodString;
        price: z.ZodString;
        currency: z.ZodDefault<z.ZodString>;
        price_period: z.ZodOptional<z.ZodString>;
        price_note: z.ZodOptional<z.ZodString>;
        tier_description: z.ZodOptional<z.ZodString>;
        included_items: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        cta_button: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            url: z.ZodString;
            variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
            size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
            open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            url: string;
            variant: "primary" | "secondary" | "ghost" | "text-link";
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        }, {
            label: string;
            url: string;
            variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        }>>;
        is_featured: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        tier_name: string;
        price: string;
        currency: string;
        cta_button?: {
            label: string;
            url: string;
            variant: "primary" | "secondary" | "ghost" | "text-link";
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        } | undefined;
        price_period?: string | undefined;
        price_note?: string | undefined;
        tier_description?: string | undefined;
        included_items?: string[] | undefined;
        is_featured?: boolean | undefined;
    }, {
        tier_name: string;
        price: string;
        cta_button?: {
            label: string;
            url: string;
            variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        } | undefined;
        currency?: string | undefined;
        price_period?: string | undefined;
        price_note?: string | undefined;
        tier_description?: string | undefined;
        included_items?: string[] | undefined;
        is_featured?: boolean | undefined;
    }>, "many">;
    comparison_note: z.ZodOptional<z.ZodString>;
    guarantee: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["cards-side-by-side", "single-centered", "stacked"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "stacked" | "cards-side-by-side" | "single-centered";
    pricing_tiers: {
        tier_name: string;
        price: string;
        currency: string;
        cta_button?: {
            label: string;
            url: string;
            variant: "primary" | "secondary" | "ghost" | "text-link";
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        } | undefined;
        price_period?: string | undefined;
        price_note?: string | undefined;
        tier_description?: string | undefined;
        included_items?: string[] | undefined;
        is_featured?: boolean | undefined;
    }[];
    guarantee?: string | undefined;
    headline?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    comparison_note?: string | undefined;
}, {
    pricing_tiers: {
        tier_name: string;
        price: string;
        cta_button?: {
            label: string;
            url: string;
            variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
            size?: "small" | "medium" | "large" | undefined;
            open_in_new_tab?: boolean | undefined;
        } | undefined;
        currency?: string | undefined;
        price_period?: string | undefined;
        price_note?: string | undefined;
        tier_description?: string | undefined;
        included_items?: string[] | undefined;
        is_featured?: boolean | undefined;
    }[];
    guarantee?: string | undefined;
    headline?: string | undefined;
    layout?: "stacked" | "cards-side-by-side" | "single-centered" | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    comparison_note?: string | undefined;
}>;
/** 6.2 Guarantee */
declare const guaranteeConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    guarantee_text: z.ZodString;
    guarantee_type: z.ZodDefault<z.ZodEnum<["money-back", "satisfaction", "fit-guarantee", "custom"]>>;
    duration: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    guarantee_text: string;
    guarantee_type: "custom" | "money-back" | "satisfaction" | "fit-guarantee";
    headline?: string | undefined;
    icon?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    duration?: string | undefined;
}, {
    guarantee_text: string;
    headline?: string | undefined;
    icon?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    duration?: string | undefined;
    guarantee_type?: "custom" | "money-back" | "satisfaction" | "fit-guarantee" | undefined;
}>;
/** 6.3 Urgency / Closing */
declare const urgencyClosingConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    body_text: z.ZodString;
    urgency_type: z.ZodDefault<z.ZodEnum<["seats-limited", "deadline", "cohort-start", "price-increase", "custom"]>>;
    countdown_target: z.ZodOptional<z.ZodString>;
    show_countdown: z.ZodOptional<z.ZodBoolean>;
    seats_remaining: z.ZodOptional<z.ZodNumber>;
    seats_total: z.ZodOptional<z.ZodNumber>;
    cta_button: z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body_text: string;
    cta_button: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    };
    urgency_type: "custom" | "seats-limited" | "deadline" | "cohort-start" | "price-increase";
    headline?: string | undefined;
    countdown_target?: string | undefined;
    show_countdown?: boolean | undefined;
    seats_remaining?: number | undefined;
    seats_total?: number | undefined;
}, {
    body_text: string;
    cta_button: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    };
    headline?: string | undefined;
    urgency_type?: "custom" | "seats-limited" | "deadline" | "cohort-start" | "price-increase" | undefined;
    countdown_target?: string | undefined;
    show_countdown?: boolean | undefined;
    seats_remaining?: number | undefined;
    seats_total?: number | undefined;
}>;
/** 7.1 Capture Form */
declare const captureFormConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    body_text: z.ZodOptional<z.ZodString>;
    form_fields: z.ZodArray<z.ZodObject<{
        field_name: z.ZodString;
        field_type: z.ZodEnum<["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]>;
        field_label: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodDefault<z.ZodBoolean>;
        options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        help_text: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }>, "many">;
    submit_button_label: z.ZodDefault<z.ZodString>;
    audience_id: z.ZodOptional<z.ZodString>;
    privacy_text: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "card", "minimal"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "centered" | "card" | "minimal";
    form_fields: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }[];
    submit_button_label: string;
    headline?: string | undefined;
    body_text?: string | undefined;
    audience_id?: string | undefined;
    privacy_text?: string | undefined;
    section_label?: string | undefined;
}, {
    form_fields: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }[];
    headline?: string | undefined;
    body_text?: string | undefined;
    layout?: "centered" | "card" | "minimal" | undefined;
    submit_button_label?: string | undefined;
    audience_id?: string | undefined;
    privacy_text?: string | undefined;
    section_label?: string | undefined;
}>;
/** 7.2 Application Form */
declare const applicationFormConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    headline: z.ZodOptional<z.ZodString>;
    introduction: z.ZodOptional<z.ZodString>;
    form_fields: z.ZodArray<z.ZodObject<{
        field_name: z.ZodString;
        field_type: z.ZodEnum<["text", "email", "textarea", "select", "radio", "checkbox", "tel", "hidden"]>;
        field_label: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
        required: z.ZodDefault<z.ZodBoolean>;
        options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        help_text: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }, {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }>, "many">;
    programme_summary: z.ZodOptional<z.ZodString>;
    pricing_display: z.ZodOptional<z.ZodString>;
    submit_button_label: z.ZodDefault<z.ZodString>;
    post_submit_message: z.ZodOptional<z.ZodString>;
    audience_id: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "card", "split"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "centered" | "split" | "card";
    form_fields: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        required: boolean;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        help_text?: string | undefined;
    }[];
    submit_button_label: string;
    headline?: string | undefined;
    audience_id?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    programme_summary?: string | undefined;
    pricing_display?: string | undefined;
    post_submit_message?: string | undefined;
}, {
    form_fields: {
        field_name: string;
        field_type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "tel" | "hidden";
        field_label: string;
        options?: string[] | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
        help_text?: string | undefined;
    }[];
    headline?: string | undefined;
    layout?: "centered" | "split" | "card" | undefined;
    submit_button_label?: string | undefined;
    audience_id?: string | undefined;
    section_label?: string | undefined;
    introduction?: string | undefined;
    programme_summary?: string | undefined;
    pricing_display?: string | undefined;
    post_submit_message?: string | undefined;
}>;
/** 7.3 Inline CTA Block */
declare const inlineCtaConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    body_text: z.ZodOptional<z.ZodString>;
    cta_button: z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>;
    secondary_cta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
    background_style: z.ZodDefault<z.ZodEnum<["light", "dark", "cream", "transparent"]>>;
    alignment: z.ZodDefault<z.ZodEnum<["centered", "left"]>>;
}, "strip", z.ZodTypeAny, {
    cta_button: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    };
    background_style: "light" | "dark" | "cream" | "transparent";
    alignment: "centered" | "left";
    headline?: string | undefined;
    body_text?: string | undefined;
    secondary_cta?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
}, {
    cta_button: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    };
    headline?: string | undefined;
    body_text?: string | undefined;
    background_style?: "light" | "dark" | "cream" | "transparent" | undefined;
    secondary_cta?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    alignment?: "centered" | "left" | undefined;
}>;
/** 8.1 Confirmation Message */
declare const confirmationMessageConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    body_text: z.ZodString;
    what_happens_next: z.ZodOptional<z.ZodArray<z.ZodObject<{
        step_number: z.ZodNumber;
        step_description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        step_number: number;
        step_description: string;
    }, {
        step_number: number;
        step_description: string;
    }>, "many">>;
    icon: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    body_text: string;
    icon?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    what_happens_next?: {
        step_number: number;
        step_description: string;
    }[] | undefined;
}, {
    headline: string;
    body_text: string;
    icon?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    what_happens_next?: {
        step_number: number;
        step_description: string;
    }[] | undefined;
}>;
/** 8.2 Diagnostic Framing Block */
declare const diagnosticFramingConfigSchema: z.ZodObject<{
    action_taken: z.ZodString;
    what_it_says: z.ZodString;
    what_comes_next: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    action_taken: string;
    what_it_says: string;
    what_comes_next?: string | undefined;
}, {
    action_taken: string;
    what_it_says: string;
    what_comes_next?: string | undefined;
}>;
/** 8.3 Quick Win / Immediate Value */
declare const quickWinConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    body_text: z.ZodOptional<z.ZodString>;
    resource: z.ZodOptional<z.ZodObject<{
        resource_title: z.ZodString;
        resource_description: z.ZodOptional<z.ZodString>;
        resource_url: z.ZodString;
        resource_type: z.ZodEnum<["pdf", "video", "article", "assessment"]>;
    }, "strip", z.ZodTypeAny, {
        resource_title: string;
        resource_url: string;
        resource_type: "pdf" | "video" | "article" | "assessment";
        resource_description?: string | undefined;
    }, {
        resource_title: string;
        resource_url: string;
        resource_type: "pdf" | "video" | "article" | "assessment";
        resource_description?: string | undefined;
    }>>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    headline?: string | undefined;
    body_text?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    resource?: {
        resource_title: string;
        resource_url: string;
        resource_type: "pdf" | "video" | "article" | "assessment";
        resource_description?: string | undefined;
    } | undefined;
}, {
    headline?: string | undefined;
    body_text?: string | undefined;
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    resource?: {
        resource_title: string;
        resource_url: string;
        resource_type: "pdf" | "video" | "article" | "assessment";
        resource_description?: string | undefined;
    } | undefined;
}>;
/** 8.4 Social Share */
declare const socialShareConfigSchema: z.ZodObject<{
    share_text: z.ZodOptional<z.ZodString>;
    platforms: z.ZodArray<z.ZodEnum<["linkedin", "twitter", "email", "copy-link"]>, "many">;
    share_url: z.ZodString;
    layout: z.ZodDefault<z.ZodEnum<["inline", "card"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "inline" | "card";
    platforms: ("email" | "linkedin" | "twitter" | "copy-link")[];
    share_url: string;
    share_text?: string | undefined;
}, {
    platforms: ("email" | "linkedin" | "twitter" | "copy-link")[];
    share_url: string;
    layout?: "inline" | "card" | undefined;
    share_text?: string | undefined;
}>;
/** 8.5 Post-Purchase Welcome */
declare const postPurchaseWelcomeConfigSchema: z.ZodObject<{
    headline: z.ZodString;
    welcome_text: z.ZodString;
    next_steps: z.ZodArray<z.ZodObject<{
        step_number: z.ZodNumber;
        step_title: z.ZodString;
        step_description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        step_number: number;
        step_description: string;
        step_title: string;
    }, {
        step_number: number;
        step_description: string;
        step_title: string;
    }>, "many">;
    community_link: z.ZodOptional<z.ZodString>;
    personal_note: z.ZodOptional<z.ZodString>;
    cta_button: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "ghost", "text-link"]>>;
        size: z.ZodOptional<z.ZodEnum<["small", "medium", "large"]>>;
        open_in_new_tab: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }, {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    headline: string;
    welcome_text: string;
    next_steps: {
        step_number: number;
        step_description: string;
        step_title: string;
    }[];
    cta_button?: {
        label: string;
        url: string;
        variant: "primary" | "secondary" | "ghost" | "text-link";
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    community_link?: string | undefined;
    personal_note?: string | undefined;
}, {
    headline: string;
    welcome_text: string;
    next_steps: {
        step_number: number;
        step_description: string;
        step_title: string;
    }[];
    cta_button?: {
        label: string;
        url: string;
        variant?: "primary" | "secondary" | "ghost" | "text-link" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        open_in_new_tab?: boolean | undefined;
    } | undefined;
    community_link?: string | undefined;
    personal_note?: string | undefined;
}>;
/** 9.1 Rich Text Block */
declare const richTextConfigSchema: z.ZodObject<{
    section_label: z.ZodOptional<z.ZodString>;
    body_text: z.ZodString;
    max_width: z.ZodDefault<z.ZodEnum<["narrow", "medium", "full"]>>;
    background_style: z.ZodDefault<z.ZodEnum<["light", "dark", "cream", "transparent"]>>;
    text_alignment: z.ZodDefault<z.ZodEnum<["left", "centered"]>>;
}, "strip", z.ZodTypeAny, {
    body_text: string;
    background_style: "light" | "dark" | "cream" | "transparent";
    max_width: "medium" | "narrow" | "full";
    text_alignment: "centered" | "left";
    section_label?: string | undefined;
}, {
    body_text: string;
    section_label?: string | undefined;
    background_style?: "light" | "dark" | "cream" | "transparent" | undefined;
    max_width?: "medium" | "narrow" | "full" | undefined;
    text_alignment?: "centered" | "left" | undefined;
}>;
/** 9.2 Pullquote / Highlight */
declare const pullquoteConfigSchema: z.ZodObject<{
    quote_text: z.ZodString;
    attribution: z.ZodOptional<z.ZodString>;
    style: z.ZodDefault<z.ZodEnum<["large-text", "bordered-left", "dark-card"]>>;
    background_style: z.ZodOptional<z.ZodEnum<["light", "dark", "cream"]>>;
}, "strip", z.ZodTypeAny, {
    style: "large-text" | "bordered-left" | "dark-card";
    quote_text: string;
    background_style?: "light" | "dark" | "cream" | undefined;
    attribution?: string | undefined;
}, {
    quote_text: string;
    background_style?: "light" | "dark" | "cream" | undefined;
    attribution?: string | undefined;
    style?: "large-text" | "bordered-left" | "dark-card" | undefined;
}>;
/** 9.3 Data / Statistic Highlight */
declare const dataStatisticConfigSchema: z.ZodObject<{
    metric: z.ZodString;
    metric_label: z.ZodString;
    source: z.ZodOptional<z.ZodString>;
    context_text: z.ZodOptional<z.ZodString>;
    style: z.ZodDefault<z.ZodEnum<["dark-card", "inline", "large"]>>;
}, "strip", z.ZodTypeAny, {
    style: "large" | "inline" | "dark-card";
    metric: string;
    metric_label: string;
    source?: string | undefined;
    context_text?: string | undefined;
}, {
    metric: string;
    metric_label: string;
    style?: "large" | "inline" | "dark-card" | undefined;
    source?: string | undefined;
    context_text?: string | undefined;
}>;
/** 9.4 Image Block */
declare const imageBlockConfigSchema: z.ZodObject<{
    image: z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>;
    caption: z.ZodOptional<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["full-width", "contained", "small-centered"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "full-width" | "contained" | "small-centered";
    image: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    };
    caption?: string | undefined;
}, {
    image: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    };
    caption?: string | undefined;
    layout?: "full-width" | "contained" | "small-centered" | undefined;
}>;
/** 9.5 Video Block */
declare const videoBlockConfigSchema: z.ZodObject<{
    video_url: z.ZodString;
    thumbnail: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        alt_text: z.ZodDefault<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    }, {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    }>>;
    caption: z.ZodOptional<z.ZodString>;
    autoplay: z.ZodOptional<z.ZodBoolean>;
    layout: z.ZodDefault<z.ZodEnum<["full-width", "contained"]>>;
}, "strip", z.ZodTypeAny, {
    layout: "full-width" | "contained";
    video_url: string;
    caption?: string | undefined;
    thumbnail?: {
        url: string;
        alt_text: string;
        caption?: string | undefined;
    } | undefined;
    autoplay?: boolean | undefined;
}, {
    video_url: string;
    caption?: string | undefined;
    layout?: "full-width" | "contained" | undefined;
    thumbnail?: {
        url: string;
        alt_text?: string | undefined;
        caption?: string | undefined;
    } | undefined;
    autoplay?: boolean | undefined;
}>;
/** 9.6 Comparison Table */
declare const comparisonTableConfigSchema: z.ZodObject<{
    headline: z.ZodOptional<z.ZodString>;
    column_headers: z.ZodArray<z.ZodString, "many">;
    rows: z.ZodArray<z.ZodObject<{
        row_label: z.ZodString;
        column_values: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        row_label: string;
        column_values: string[];
    }, {
        row_label: string;
        column_values: string[];
    }>, "many">;
    highlight_column: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    column_headers: string[];
    rows: {
        row_label: string;
        column_values: string[];
    }[];
    headline?: string | undefined;
    highlight_column?: number | undefined;
}, {
    column_headers: string[];
    rows: {
        row_label: string;
        column_values: string[];
    }[];
    headline?: string | undefined;
    highlight_column?: number | undefined;
}>;
/** 10.1 Section Divider */
declare const sectionDividerConfigSchema: z.ZodObject<{
    divider_style: z.ZodDefault<z.ZodEnum<["line", "dots", "space-only", "bird-icon"]>>;
    spacing: z.ZodDefault<z.ZodEnum<["small", "medium", "large"]>>;
}, "strip", z.ZodTypeAny, {
    divider_style: "line" | "dots" | "space-only" | "bird-icon";
    spacing: "small" | "medium" | "large";
}, {
    divider_style?: "line" | "dots" | "space-only" | "bird-icon" | undefined;
    spacing?: "small" | "medium" | "large" | undefined;
}>;
/** 10.2 Anchor Navigation */
declare const anchorNavigationConfigSchema: z.ZodObject<{
    nav_items: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        anchor_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        anchor_id: string;
    }, {
        label: string;
        anchor_id: string;
    }>, "many">;
    style: z.ZodDefault<z.ZodEnum<["sticky-top", "inline", "sidebar"]>>;
    show_on_mobile: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    style: "inline" | "sidebar" | "sticky-top";
    nav_items: {
        label: string;
        anchor_id: string;
    }[];
    show_on_mobile: boolean;
}, {
    nav_items: {
        label: string;
        anchor_id: string;
    }[];
    style?: "inline" | "sidebar" | "sticky-top" | undefined;
    show_on_mobile?: boolean | undefined;
}>;
/** 10.3 Page Header / Breadcrumb */
declare const pageHeaderBreadcrumbConfigSchema: z.ZodObject<{
    breadcrumb_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
    }, {
        label: string;
        url: string;
    }>, "many">>;
    page_title: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    breadcrumb_items?: {
        label: string;
        url: string;
    }[] | undefined;
    page_title?: string | undefined;
}, {
    breadcrumb_items?: {
        label: string;
        url: string;
    }[] | undefined;
    page_title?: string | undefined;
}>;

/**
 * Maps section type → Zod schema for the config JSONB.
 * Used for validation in tRPC mutations.
 */
declare const sectionConfigSchemas: Record<LandingSectionType, z.ZodTypeAny>;

declare const safeUrlSchema: z.ZodEffects<z.ZodString, string, string>;
declare const ctaModeSchema: z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
    mode: z.ZodLiteral<"external_link">;
    url: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    url: string;
    mode: "external_link";
}, {
    url: string;
    mode: "external_link";
}>, z.ZodObject<{
    mode: z.ZodLiteral<"checkout">;
    plan_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mode: "checkout";
    plan_id: string;
}, {
    mode: "checkout";
    plan_id: string;
}>, z.ZodObject<{
    mode: z.ZodLiteral<"form_capture">;
    target_section_type: z.ZodOptional<z.ZodEnum<["capture_form", "application_form"]>>;
}, "strip", z.ZodTypeAny, {
    mode: "form_capture";
    target_section_type?: "capture_form" | "application_form" | undefined;
}, {
    mode: "form_capture";
    target_section_type?: "capture_form" | "application_form" | undefined;
}>]>;
declare const pageSettingsSchema: z.ZodOptional<z.ZodObject<{
    meta_title: z.ZodOptional<z.ZodString>;
    meta_description: z.ZodOptional<z.ZodString>;
    og_image_url: z.ZodOptional<z.ZodString>;
    canonical_url: z.ZodOptional<z.ZodString>;
    robots: z.ZodOptional<z.ZodString>;
    custom_css_class: z.ZodOptional<z.ZodString>;
    cta_mode: z.ZodOptional<z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
        mode: z.ZodLiteral<"external_link">;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        mode: "external_link";
    }, {
        url: string;
        mode: "external_link";
    }>, z.ZodObject<{
        mode: z.ZodLiteral<"checkout">;
        plan_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        mode: "checkout";
        plan_id: string;
    }, {
        mode: "checkout";
        plan_id: string;
    }>, z.ZodObject<{
        mode: z.ZodLiteral<"form_capture">;
        target_section_type: z.ZodOptional<z.ZodEnum<["capture_form", "application_form"]>>;
    }, "strip", z.ZodTypeAny, {
        mode: "form_capture";
        target_section_type?: "capture_form" | "application_form" | undefined;
    }, {
        mode: "form_capture";
        target_section_type?: "capture_form" | "application_form" | undefined;
    }>]>>;
    default_cta_url: z.ZodOptional<z.ZodString>;
    waitlist_headline: z.ZodOptional<z.ZodString>;
    waitlist_description: z.ZodOptional<z.ZodString>;
    default_audience_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    meta_title?: string | undefined;
    meta_description?: string | undefined;
    og_image_url?: string | undefined;
    canonical_url?: string | undefined;
    robots?: string | undefined;
    custom_css_class?: string | undefined;
    cta_mode?: {
        url: string;
        mode: "external_link";
    } | {
        mode: "checkout";
        plan_id: string;
    } | {
        mode: "form_capture";
        target_section_type?: "capture_form" | "application_form" | undefined;
    } | undefined;
    default_cta_url?: string | undefined;
    waitlist_headline?: string | undefined;
    waitlist_description?: string | undefined;
    default_audience_id?: string | undefined;
}, {
    meta_title?: string | undefined;
    meta_description?: string | undefined;
    og_image_url?: string | undefined;
    canonical_url?: string | undefined;
    robots?: string | undefined;
    custom_css_class?: string | undefined;
    cta_mode?: {
        url: string;
        mode: "external_link";
    } | {
        mode: "checkout";
        plan_id: string;
    } | {
        mode: "form_capture";
        target_section_type?: "capture_form" | "application_form" | undefined;
    } | undefined;
    default_cta_url?: string | undefined;
    waitlist_headline?: string | undefined;
    waitlist_description?: string | undefined;
    default_audience_id?: string | undefined;
}>>;

export { anchorNavigationConfigSchema, applicationFormConfigSchema, captureFormConfigSchema, caseStudyConfigSchema, coachBioConfigSchema, comparisonTableConfigSchema, confirmationMessageConfigSchema, ctaButtonSchema, ctaModeSchema, curriculumBreakdownConfigSchema, dataStatisticConfigSchema, diagnosticFramingConfigSchema, faqConfigSchema, featuresGridConfigSchema, guaranteeConfigSchema, heroCaptureFormConfigSchema, heroStatementConfigSchema, heroVideoConfigSchema, humaWidgetConfigSchema, imageBlockConfigSchema, inlineCtaConfigSchema, investmentPricingConfigSchema, mediaSchema, objectionBlockConfigSchema, pageHeaderBreadcrumbConfigSchema, pageSettingsSchema, patternRecognitionConfigSchema, perfectForYouConfigSchema, postPurchaseWelcomeConfigSchema, problemStatementConfigSchema, programmeArcConfigSchema, programmeOverviewConfigSchema, pullquoteConfigSchema, quickWinConfigSchema, richTextConfigSchema, romeIsBurningConfigSchema, sacredCowChallengeConfigSchema, safeUrlSchema, sectionConfigSchemas, sectionDividerConfigSchema, socialProofBarConfigSchema, socialShareConfigSchema, testimonialsConfigSchema, urgencyClosingConfigSchema, videoBlockConfigSchema, whatThisIsIsntConfigSchema, whatYoullExperienceConfigSchema };
