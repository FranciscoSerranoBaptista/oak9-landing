# Changelog

All notable changes to `@oak9/landing` will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

## [0.1.2] — 2026-03-20

### Fixed

- **Add Section dropdown** — styled `MenuItems` with background, shadow, ring,
  padding, fixed width (`w-72`), and `data-[focus]` hover states. Category
  headers now have proper spacing and typography.
- **Page metadata form** — constrained to `max-w-3xl` two-column grid so fields
  don't stretch full-width on large monitors.
- **Section editor panels** — config editor area capped at `max-w-2xl` for
  readability.
- **Save button positioning** — removed buried inline buttons; both "Save Page
  Settings" and "Save Sections" now live in a sticky bottom bar visible at any
  scroll position.

### Added

- **`showHeader` prop** on `LandingPageEditor` — set to `false` to suppress the
  built-in back-arrow + page-name header when the consuming app provides its own
  chrome. Defaults to `true`.
- **Test infrastructure** — Vitest + @testing-library/react + jsdom. Three test
  suites (106 tests):
  - `schema-validation` — validates every Zod section schema with minimal valid
    configs, rejects invalid data (max-length, missing required fields, bad
    enums), and covers `pageSettingsSchema` / `ctaModeSchema`.
  - `type-consistency` — ensures `SECTION_TYPE_LABELS`, `SECTION_TYPE_CATEGORIES`,
    and `sectionConfigSchemas` all stay in sync with `LANDING_SECTION_TYPES`.
  - `renderer-smoke` — mounts all 40 renderers via `LandingSectionRenderer`
    without crashing, plus unknown-type fallback.
- `pnpm test` and `pnpm test:watch` scripts.

## [0.1.0] — 2026-03-19

### Added

- **Types & constants** — 40 landing-section types across 10 categories (hero,
  problem/recognition, solution/programme, trust/proof, qualification/objection,
  pricing/commitment, forms/capture, confirmation/thank-you, content/narrative,
  structural/navigation). 8 page types, 3 statuses, discriminated-union CTA
  modes, page-settings interface.
- **Zod schemas** — Validation schemas for every section config, page settings,
  CTA buttons, and media objects. Exported as `sectionConfigSchemas` record for
  tRPC integration.
- **Client renderers** — 40 React components (one per section type) plus a
  central `LandingSectionRenderer` dispatcher that handles CTA-mode resolution,
  placeholder URL rewriting, and form-submission callbacks.
- **Client editors** — 55 React components: reusable field primitives
  (`TextField`, `RichTextField`, `ListField`, `CtaButtonField`, etc.), one
  config editor per section type, and high-level orchestrators
  (`LandingPageEditor` with drag-drop, `LandingPagesList`,
  `SectionConfigEditor`).
- **Server HTML renderer** — `ServerSections` / `ServerSection` for SEO/GEO
  static rendering (~15 of 40 section types implemented; remaining types render
  as empty sections).
- **Build** — Dual ESM + CJS output via tsup with six entry points
  (`.`, `./schemas`, `./types`, `./renderers`, `./editors`, `./server`),
  TypeScript declarations, and `"use client"` banners on client bundles.
- **SQL reference** — PostgreSQL schema (`landing_pages`, `landing_sections`)
  with enums, JSONB config columns, and indices.

### Known limitations

- Server-side rendering covers ~15 of 40 section types; the rest fall through
  silently.
- `dangerouslySetInnerHTML` in the rich-text renderer relies on the host
  application to sanitise user content before storage.
- No React error boundaries — a malformed config can crash the nearest tree.
- Editors do not surface Zod validation errors to the user; validation is
  expected to happen server-side.
