"use client";

import type { LandingSectionType } from "../types/landing-pages";

// Import all editors — these will be created by the editor agent
import {
  HeroStatementEditor,
  HeroCaptureFormEditor,
  HeroVideoEditor,
  PatternRecognitionEditor,
  ProblemStatementEditor,
  SacredCowEditor,
  RomeBurningEditor,
  ProgrammeOverviewEditor,
  ProgrammeArcEditor,
  WhatThisIsIsntEditor,
  WhatYoullExperienceEditor,
  CurriculumBreakdownEditor,
  FeaturesGridEditor,
  TestimonialsEditor,
  CaseStudyEditor,
  CoachBioEditor,
  SocialProofBarEditor,
  PerfectForYouEditor,
  FaqEditor,
  ObjectionBlockEditor,
  InvestmentPricingEditor,
  GuaranteeEditor,
  UrgencyClosingEditor,
  CaptureFormEditor,
  ApplicationFormEditor,
  InlineCtaEditor,
  ConfirmationMessageEditor,
  DiagnosticFramingEditor,
  QuickWinEditor,
  SocialShareEditor,
  PostPurchaseWelcomeEditor,
  RichTextBlockEditor,
  PullquoteEditor,
  DataStatisticEditor,
  ImageBlockEditor,
  VideoBlockEditor,
  ComparisonTableEditor,
  SectionDividerEditor,
  AnchorNavigationEditor,
  PageHeaderEditor,
} from "./config-editors";

interface SectionConfigEditorProps {
  type: LandingSectionType;
  config: Record<string, unknown>;
  onChange: (config: Record<string, unknown>) => void;
}

export function SectionConfigEditor({ type, config, onChange }: SectionConfigEditorProps) {
  const props = { config, onChange };

  switch (type) {
    // Hero
    case "hero_statement":
      return <HeroStatementEditor {...props} />;
    case "hero_capture_form":
      return <HeroCaptureFormEditor {...props} />;
    case "hero_video":
      return <HeroVideoEditor {...props} />;
    // Problem & Recognition
    case "pattern_recognition":
      return <PatternRecognitionEditor {...props} />;
    case "problem_statement":
      return <ProblemStatementEditor {...props} />;
    case "sacred_cow_challenge":
      return <SacredCowEditor {...props} />;
    case "rome_is_burning":
      return <RomeBurningEditor {...props} />;
    // Solution & Programme
    case "programme_overview":
      return <ProgrammeOverviewEditor {...props} />;
    case "programme_arc":
      return <ProgrammeArcEditor {...props} />;
    case "what_this_is_isnt":
      return <WhatThisIsIsntEditor {...props} />;
    case "what_youll_experience":
      return <WhatYoullExperienceEditor {...props} />;
    case "curriculum_breakdown":
      return <CurriculumBreakdownEditor {...props} />;
    case "features_grid":
      return <FeaturesGridEditor {...props} />;
    // Trust & Proof
    case "testimonials":
      return <TestimonialsEditor {...props} />;
    case "case_study":
      return <CaseStudyEditor {...props} />;
    case "coach_bio":
      return <CoachBioEditor {...props} />;
    case "social_proof_bar":
      return <SocialProofBarEditor {...props} />;
    // Qualification & Objection
    case "perfect_for_you":
      return <PerfectForYouEditor {...props} />;
    case "faq":
      return <FaqEditor {...props} />;
    case "objection_block":
      return <ObjectionBlockEditor {...props} />;
    // Pricing & Commitment
    case "investment_pricing":
      return <InvestmentPricingEditor {...props} />;
    case "guarantee":
      return <GuaranteeEditor {...props} />;
    case "urgency_closing":
      return <UrgencyClosingEditor {...props} />;
    // Forms & Capture
    case "capture_form":
      return <CaptureFormEditor {...props} />;
    case "application_form":
      return <ApplicationFormEditor {...props} />;
    case "inline_cta":
      return <InlineCtaEditor {...props} />;
    // Confirmation & Thank You
    case "confirmation_message":
      return <ConfirmationMessageEditor {...props} />;
    case "diagnostic_framing":
      return <DiagnosticFramingEditor {...props} />;
    case "quick_win":
      return <QuickWinEditor {...props} />;
    case "social_share":
      return <SocialShareEditor {...props} />;
    case "post_purchase_welcome":
      return <PostPurchaseWelcomeEditor {...props} />;
    // Content & Narrative
    case "rich_text":
      return <RichTextBlockEditor {...props} />;
    case "pullquote":
      return <PullquoteEditor {...props} />;
    case "data_statistic":
      return <DataStatisticEditor {...props} />;
    case "image_block":
      return <ImageBlockEditor {...props} />;
    case "video_block":
      return <VideoBlockEditor {...props} />;
    case "comparison_table":
      return <ComparisonTableEditor {...props} />;
    // Structural & Navigation
    case "section_divider":
      return <SectionDividerEditor {...props} />;
    case "anchor_navigation":
      return <AnchorNavigationEditor {...props} />;
    case "page_header_breadcrumb":
      return <PageHeaderEditor {...props} />;
    default:
      return (
        <p className="text-xs text-zinc-500">
          No editor available for section type &ldquo;{type}&rdquo;.
        </p>
      );
  }
}
