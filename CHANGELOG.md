# Changelog

All notable changes to `@oak9/landing` will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

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
