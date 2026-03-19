# @oak9/landing

Landing-page builder library for the Oak9 network platform. Provides React
renderers, editors, Zod schemas, TypeScript types, and server-side HTML
rendering for 40 section types.

## Install

```bash
pnpm add @oak9/landing
```

### Peer dependencies

| Package | Required | Notes |
|---------|----------|-------|
| `react` / `react-dom` | yes | >=18 |
| `zod` | yes | >=3.20 |
| `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities` | optional | Drag-drop in editors |
| `@phosphor-icons/react` | optional | Icons in editor UI |
| `@headlessui/react` | optional | Headless UI components |

## Entry points

```ts
import { LandingSectionRenderer } from "@oak9/landing/renderers";
import { LandingPageEditor }      from "@oak9/landing/editors";
import { sectionConfigSchemas }    from "@oak9/landing/schemas";
import { LANDING_SECTION_TYPES }   from "@oak9/landing/types";
import { ServerSections }          from "@oak9/landing/server";
```

| Export | Description |
|--------|-------------|
| `@oak9/landing` | Barrel — re-exports everything |
| `@oak9/landing/types` | TypeScript types, enums, constants |
| `@oak9/landing/schemas` | Zod validation schemas |
| `@oak9/landing/renderers` | Client-side section renderers |
| `@oak9/landing/editors` | Client-side section & page editors |
| `@oak9/landing/server` | Server-side static HTML (SEO/GEO) |

## Quick start

### Render a section

```tsx
import { LandingSectionRenderer } from "@oak9/landing/renderers";

<LandingSectionRenderer
  sectionType="hero_statement"
  config={{ headline: "Welcome", subtitle: "Get started today" }}
  ctaMode={{ mode: "external_link", url: "/signup" }}
/>
```

### Edit a page

```tsx
import { LandingPageEditor } from "@oak9/landing/editors";

<LandingPageEditor
  pageId={page.id}
  page={page}
  onSaveSections={saveSections}
  onSavePage={savePage}
  onBack={() => router.back()}
/>
```

### Validate config server-side

```ts
import { sectionConfigSchemas } from "@oak9/landing/schemas";

const schema = sectionConfigSchemas[section.sectionType];
const result = schema.safeParse(section.config);
```

### Server-side HTML

```tsx
import { ServerSections } from "@oak9/landing/server";

<ServerSections sections={sections} networkName="Acme" />
```

## Section types

40 section types organised into 10 categories:

- **Hero** — `hero_statement`, `hero_capture_form`, `hero_video`
- **Problem & Recognition** — `pattern_recognition`, `problem_statement`, `sacred_cow_challenge`, `rome_is_burning`
- **Solution & Programme** — `programme_overview`, `programme_arc`, `what_this_is_isnt`, `what_youll_experience`, `curriculum_breakdown`, `features_grid`
- **Trust & Proof** — `testimonials`, `case_study`, `coach_bio`, `social_proof_bar`
- **Qualification & Objection** — `perfect_for_you`, `faq`, `objection_block`
- **Pricing & Commitment** — `investment_pricing`, `guarantee`, `urgency_closing`
- **Forms & Capture** — `capture_form`, `application_form`, `inline_cta`
- **Confirmation & Thank You** — `confirmation_message`, `diagnostic_framing`, `quick_win`, `social_share`, `post_purchase_welcome`
- **Content & Narrative** — `rich_text`, `pullquote`, `data_statistic`, `image_block`, `video_block`, `comparison_table`
- **Structural & Navigation** — `section_divider`, `anchor_navigation`, `page_header_breadcrumb`

## Development

```bash
pnpm install
pnpm dev          # watch mode
pnpm build        # production build
pnpm typecheck    # type-check without emitting
```

## Architecture

```
src/
├── types/       # TypeScript types, enums, constants
├── schemas/     # Zod schemas for all 40 section configs + page settings
├── renderers/   # Client React components (one per section type)
├── editors/     # Client React editors (field primitives + section editors)
├── server/      # Server-side static HTML renderers
└── sql/         # PostgreSQL reference schema
```

The library is built with **tsup** into six separate entry points (ESM + CJS),
with `"use client"` banners on client bundles for Next.js App Router
compatibility.

### Assumptions

- The host application provides **Tailwind CSS** (including dark-mode classes).
- User-generated content must be **sanitised before storage** — the rich-text
  renderer uses `dangerouslySetInnerHTML` and does not sanitise at render time.

## License

Private — Oak9 internal.
