import * as react_jsx_runtime from 'react/jsx-runtime';
import { L as LandingSectionType, C as CtaMode } from './landing-pages-C2rQvBu8.js';

interface LandingSectionRendererProps {
    sectionType: LandingSectionType;
    config: Record<string, unknown>;
    networkId?: string;
    sectionId?: string;
    /** Structured CTA mode from page settings */
    ctaMode?: CtaMode;
    /** @deprecated Legacy fallback — use ctaMode instead */
    defaultCtaUrl?: string;
    /** Callback for form sections (capture_form, application_form, hero_capture_form) */
    onSubmitForm?: (data: {
        networkId: string;
        sectionId: string;
        fields: Record<string, string>;
    }) => Promise<void>;
}
declare function LandingSectionRenderer({ sectionType, config, networkId, sectionId, ctaMode, defaultCtaUrl, onSubmitForm, }: LandingSectionRendererProps): react_jsx_runtime.JSX.Element;

declare function LandingHeroStatement({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingHeroCaptureForm({ config, networkId, sectionId, onSubmitForm, }: {
    config: Record<string, unknown>;
    networkId: string;
    sectionId: string;
    onSubmitForm?: (data: {
        networkId: string;
        sectionId: string;
        fields: Record<string, string>;
    }) => Promise<void>;
}): react_jsx_runtime.JSX.Element;

declare function LandingHeroVideo({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingPatternRecognition({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingProblemStatement({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingSacredCow({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingRomeBurning({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingProgrammeOverview({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingProgrammeArc({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingWhatThisIsIsnt({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingWhatYoullExperience({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingCurriculumBreakdown({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingFeaturesGrid({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingTestimonialsNew({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingCaseStudy({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingCoachBio({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingSocialProofBar({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingHumaWidget({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingPerfectForYou({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingFaqNew({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingObjectionBlock({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingInvestmentPricing({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingGuarantee({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingUrgencyClosing({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingCaptureForm({ config, networkId, sectionId, onSubmitForm, }: {
    config: Record<string, unknown>;
    networkId: string;
    sectionId: string;
    onSubmitForm?: (data: {
        networkId: string;
        sectionId: string;
        fields: Record<string, string>;
    }) => Promise<void>;
}): react_jsx_runtime.JSX.Element;

declare function LandingApplicationForm({ config, networkId, sectionId, onSubmitForm, }: {
    config: Record<string, unknown>;
    networkId: string;
    sectionId: string;
    onSubmitForm?: (data: {
        networkId: string;
        sectionId: string;
        fields: Record<string, string>;
    }) => Promise<void>;
}): react_jsx_runtime.JSX.Element;

declare function LandingInlineCta({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingConfirmationMessage({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingDiagnosticFraming({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingQuickWin({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingSocialShare({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingPostPurchaseWelcome({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingRichText({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingPullquote({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingDataStatistic({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingImageBlock({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingVideoBlock({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingComparisonTable({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingSectionDivider({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element;

declare function LandingAnchorNavigation({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

declare function LandingPageHeader({ config }: {
    config: Record<string, unknown>;
}): react_jsx_runtime.JSX.Element | null;

export { LandingAnchorNavigation, LandingApplicationForm, LandingCaptureForm, LandingCaseStudy, LandingCoachBio, LandingComparisonTable, LandingConfirmationMessage, LandingCurriculumBreakdown, LandingDataStatistic, LandingDiagnosticFraming, LandingFaqNew, LandingFeaturesGrid, LandingGuarantee, LandingHeroCaptureForm, LandingHeroStatement, LandingHeroVideo, LandingHumaWidget, LandingImageBlock, LandingInlineCta, LandingInvestmentPricing, LandingObjectionBlock, LandingPageHeader, LandingPatternRecognition, LandingPerfectForYou, LandingPostPurchaseWelcome, LandingProblemStatement, LandingProgrammeArc, LandingProgrammeOverview, LandingPullquote, LandingQuickWin, LandingRichText, LandingRomeBurning, LandingSacredCow, LandingSectionDivider, LandingSectionRenderer, type LandingSectionRendererProps, LandingSocialProofBar, LandingSocialShare, LandingTestimonialsNew, LandingUrgencyClosing, LandingVideoBlock, LandingWhatThisIsIsnt, LandingWhatYoullExperience };
