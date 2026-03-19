-- Canonical SQL schema for @oak9/landing — implement in your ORM of choice

-- =============================================================================
-- ENUMS
-- =============================================================================

CREATE TYPE landing_page_type AS ENUM (
  'lead_magnet',
  'waiting_list',
  'thank_you',
  'course_landing',
  'sales_page',
  'enrollment',
  'event_registration',
  'post_purchase_thank_you'
);

CREATE TYPE landing_page_status AS ENUM (
  'draft',
  'published',
  'archived'
);

CREATE TYPE landing_section_type AS ENUM (
  'hero_statement',
  'hero_capture_form',
  'hero_video',
  'pattern_recognition',
  'problem_statement',
  'sacred_cow_challenge',
  'rome_is_burning',
  'programme_overview',
  'programme_arc',
  'what_this_is_isnt',
  'what_youll_experience',
  'curriculum_breakdown',
  'features_grid',
  'testimonials',
  'case_study',
  'coach_bio',
  'social_proof_bar',
  'perfect_for_you',
  'faq',
  'objection_block',
  'investment_pricing',
  'guarantee',
  'urgency_closing',
  'capture_form',
  'application_form',
  'inline_cta',
  'confirmation_message',
  'diagnostic_framing',
  'quick_win',
  'social_share',
  'post_purchase_welcome',
  'rich_text',
  'pullquote',
  'data_statistic',
  'image_block',
  'video_block',
  'comparison_table',
  'section_divider',
  'anchor_navigation',
  'page_header_breadcrumb'
);

-- =============================================================================
-- TABLES
-- =============================================================================

CREATE TABLE landing_pages (
  id            uuid            PRIMARY KEY DEFAULT gen_random_uuid(),
  network_id    uuid            NOT NULL REFERENCES networks(id) ON DELETE CASCADE,
  page_type     landing_page_type NOT NULL,
  title         varchar(255)    NOT NULL,
  slug          varchar(100),
  description   text,
  status        landing_page_status NOT NULL DEFAULT 'draft',
  is_default    boolean         NOT NULL DEFAULT false,
  settings      jsonb           NOT NULL DEFAULT '{}'::jsonb,
  created_at    timestamptz     NOT NULL DEFAULT now(),
  updated_at    timestamptz     NOT NULL DEFAULT now()
);

CREATE INDEX landing_pages_network_idx ON landing_pages (network_id);
CREATE UNIQUE INDEX landing_pages_network_slug_idx ON landing_pages (network_id, slug);
CREATE INDEX landing_pages_network_status_idx ON landing_pages (network_id, status);

CREATE TABLE landing_sections (
  id                uuid            PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id           uuid            NOT NULL REFERENCES landing_pages(id) ON DELETE CASCADE,
  section_type      varchar(50)     NOT NULL,
  sort_order        integer         NOT NULL DEFAULT 0,
  visible           boolean         NOT NULL DEFAULT true,
  scheduled_start   timestamptz,
  scheduled_end     timestamptz,
  audience_segment  varchar(30)     NOT NULL DEFAULT 'all',
  ab_variant        varchar(10),
  ctc_subsequence   varchar(30),
  ctc_techniques    text[]          DEFAULT '{}'::text[],
  ssf_lane          varchar(20),
  notes             text,
  config            jsonb           NOT NULL DEFAULT '{}'::jsonb,
  created_at        timestamptz     NOT NULL DEFAULT now(),
  updated_at        timestamptz     NOT NULL DEFAULT now()
);

CREATE INDEX landing_sections_page_idx ON landing_sections (page_id);
CREATE INDEX landing_sections_page_sort_idx ON landing_sections (page_id, sort_order);
