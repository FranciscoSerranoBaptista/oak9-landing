"use client";

import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Trash,
  Eye,
  EyeSlash,
  PencilSimple,
  DotsSixVertical,
  ArrowLeft,
  FloppyDisk,
} from "@phosphor-icons/react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  SECTION_TYPE_LABELS,
  SECTION_TYPE_CATEGORIES,
  type LandingSectionType,
  type CtaMode,
  type LandingPageSettings,
} from "../types/landing-pages";
import { SectionConfigEditor } from "./landing-section-config-editor";

// =============================================================================
// Types
// =============================================================================

export interface LandingPageEditorProps {
  pageId: string;
  page: {
    title: string;
    slug: string | null;
    pageType: string;
    status: "draft" | "published" | "archived";
    settings: Record<string, unknown>;
    sections: Array<{
      id: string;
      sectionType: string;
      sortOrder: number;
      visible: boolean;
      config: Record<string, unknown>;
      scheduledStart?: string | null;
      scheduledEnd?: string | null;
      audienceSegment?: string;
      abVariant?: string | null;
      ctcSubsequence?: string | null;
      ctcTechniques?: string[];
      ssfLane?: string | null;
      notes?: string | null;
    }>;
  };
  plans?: Array<{ id: string; name: string; amountCents: number | null; currency: string | null }>;
  onSaveSections: (sections: Array<Record<string, unknown>>) => void;
  onSavePage: (data: { title: string; slug: string | null; status: string; settings: Record<string, unknown> }) => void;
  onBack: () => void;
  isSavingSections?: boolean;
  isSavingPage?: boolean;
  saveSectionsSuccess?: boolean;
  savePageSuccess?: boolean;
  /** Set to false to hide the built-in back arrow + page name header. Defaults to true. */
  showHeader?: boolean;
}

interface SectionItem {
  id: string;
  section_type: LandingSectionType;
  sort_order: number;
  visible: boolean;
  config: Record<string, unknown>;
  // metadata
  scheduled_start?: string | null;
  scheduled_end?: string | null;
  audience_segment: string;
  ab_variant?: string | null;
  ctc_subsequence?: string | null;
  ctc_techniques?: string[];
  ssf_lane?: string | null;
  notes?: string | null;
}

// =============================================================================
// Section summary helper
// =============================================================================

function getSectionSummary(section: SectionItem): string {
  const c = section.config as Record<string, unknown>;
  const headline = (c.headline as string) || (c.section_label as string) || "";
  if (headline) return headline;

  // List-based sections
  for (const key of [
    "recognition_items", "contrast_items", "phases", "modules",
    "features", "testimonials", "faq_items", "pricing_tiers",
    "for_items", "experience_items", "form_fields", "nav_items",
    "proof_items", "next_steps", "time_markers", "rows",
  ]) {
    const arr = c[key] as unknown[] | undefined;
    if (arr?.length) return `${arr.length} items`;
  }

  return (c.body_text as string)?.slice(0, 60) || (c.quote_text as string)?.slice(0, 60) || "";
}

// =============================================================================
// Sortable Section Card
// =============================================================================

function SortableSectionCard({
  section,
  isEditing,
  onToggleVisibility,
  onToggleEdit,
  onRemove,
  onConfigChange,
}: {
  section: SectionItem;
  isEditing: boolean;
  onToggleVisibility: () => void;
  onToggleEdit: () => void;
  onRemove: () => void;
  onConfigChange: (config: Record<string, unknown>) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const summary = getSectionSummary(section);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-xl border bg-white shadow-sm dark:bg-surface-raised ${
        isDragging
          ? "ring-2 ring-brand-500 shadow-lg border-brand-500"
          : "border-zinc-200 dark:border-surface-border"
      }`}
    >
      <div className="flex items-center gap-3 px-3 py-3">
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 cursor-grab active:cursor-grabbing"
          {...attributes}
          {...listeners}
        >
          <DotsSixVertical className="size-5" weight="bold" />
        </button>

        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold text-zinc-900 dark:text-white">
            {SECTION_TYPE_LABELS[section.section_type]}
          </span>
          {summary && (
            <span className="ml-2 text-secondary text-zinc-500 dark:text-zinc-400 truncate">
              — {summary}
            </span>
          )}
        </div>

        <button
          onClick={onToggleVisibility}
          className="rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"
          title={section.visible ? "Hide" : "Show"}
        >
          {section.visible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
        </button>
        <button
          onClick={onToggleEdit}
          className={`rounded p-1 ${
            isEditing
              ? "bg-brand-50 text-brand-600 dark:bg-brand-600/10 dark:text-brand-400"
              : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"
          }`}
        >
          <PencilSimple className="size-4" />
        </button>
        <button
          onClick={onRemove}
          className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
        >
          <Trash className="size-4" />
        </button>
      </div>

      {isEditing && (
        <div className="border-t border-zinc-100 px-4 py-3 dark:border-surface-border max-w-2xl">
          {/* Universal background style picker */}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Section Background
            </label>
            <div className="flex gap-2">
              {([
                { value: undefined, label: "Default", preview: "bg-zinc-100 dark:bg-surface-base" },
                { value: "light", label: "Light", preview: "bg-white dark:bg-surface-secondary" },
                { value: "cream", label: "Cream", preview: "bg-amber-100 dark:bg-surface-overlay" },
                { value: "dark", label: "Dark", preview: "bg-zinc-800 dark:bg-zinc-950" },
                { value: "transparent", label: "None", preview: "bg-transparent border border-dashed border-zinc-300 dark:border-zinc-600" },
              ] as const).map((opt) => {
                const current = (section.config.background_style as string | undefined) ?? undefined;
                const isActive = current === opt.value;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => {
                      const next = { ...section.config };
                      if (opt.value) {
                        next.background_style = opt.value;
                      } else {
                        delete next.background_style;
                      }
                      onConfigChange(next);
                    }}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-600/10 dark:text-brand-400 dark:border-brand-400"
                        : "border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover"
                    }`}
                  >
                    <span className={`size-3 rounded-full ${opt.preview}`} />
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <SectionConfigEditor
            type={section.section_type}
            config={section.config}
            onChange={onConfigChange}
          />
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Drag Overlay
// =============================================================================

function SectionOverlayCard({ section }: { section: SectionItem }) {
  const summary = getSectionSummary(section);
  return (
    <div className="rounded-xl border border-brand-500 bg-white shadow-lg ring-2 ring-brand-500 dark:bg-surface-raised px-3 py-3">
      <div className="flex items-center gap-3">
        <DotsSixVertical className="size-5 text-zinc-400" weight="bold" />
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">
          {SECTION_TYPE_LABELS[section.section_type]}
        </span>
        {summary && (
          <span className="text-secondary text-zinc-500 dark:text-zinc-400 truncate">
            — {summary}
          </span>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// Add Section Menu (categorised)
// =============================================================================

function AddSectionMenu({ onAdd }: { onAdd: (type: LandingSectionType) => void }) {
  return (
    <Menu>
      <MenuButton
        as="button"
        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500"
      >
        <Plus className="size-3.5" />
        Add Section
      </MenuButton>
      <MenuItems anchor="bottom end" className="bg-white dark:bg-surface-raised rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-2 max-h-96 overflow-y-auto w-72">
        {SECTION_TYPE_CATEGORIES.map((cat, i) => (
          <div key={cat.label} className={i > 0 ? "mt-2" : ""}>
            <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {cat.label}
            </div>
            {cat.types.map((type) => (
              <MenuItem
                key={type}
                as="button"
                onClick={() => onAdd(type)}
                className="block w-full rounded-lg px-2 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 data-[focus]:bg-brand-50 data-[focus]:text-brand-700 dark:data-[focus]:bg-brand-600/10 dark:data-[focus]:text-brand-400 cursor-pointer"
              >
                {SECTION_TYPE_LABELS[type]}
              </MenuItem>
            ))}
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}

// =============================================================================
// Main Component
// =============================================================================

export function LandingPageEditor(props: LandingPageEditorProps) {
  const {
    pageId,
    page,
    plans: plansData,
    onSaveSections,
    onSavePage,
    onBack,
    isSavingSections,
    isSavingPage,
    saveSectionsSuccess,
  } = props;

  const [sections, setSections] = useState<SectionItem[]>([]);
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState("");
  const [pageSlug, setPageSlug] = useState("");
  const [pageStatus, setPageStatus] = useState<"draft" | "published" | "archived">("draft");
  const [ctaModeType, setCtaModeType] = useState<"external_link" | "checkout" | "form_capture" | "none">("none");
  const [ctaExternalUrl, setCtaExternalUrl] = useState("");
  const [ctaPlanId, setCtaPlanId] = useState("");
  const [ctaFormTarget, setCtaFormTarget] = useState<"capture_form" | "application_form">("capture_form");

  useEffect(() => {
    if (page) {
      setSections(
        page.sections.map((s) => ({
          id: s.id,
          section_type: s.sectionType as LandingSectionType,
          sort_order: s.sortOrder,
          visible: s.visible,
          config: (s.config ?? {}) as Record<string, unknown>,
          scheduled_start: s.scheduledStart ?? null,
          scheduled_end: s.scheduledEnd ?? null,
          audience_segment: s.audienceSegment ?? "all",
          ab_variant: s.abVariant ?? null,
          ctc_subsequence: s.ctcSubsequence ?? null,
          ctc_techniques: s.ctcTechniques ?? [],
          ssf_lane: s.ssfLane ?? null,
          notes: s.notes ?? null,
        }))
      );
      setPageTitle(page.title);
      setPageSlug(page.slug ?? "");
      setPageStatus(page.status);
      // Initialize CTA mode from settings
      const settings = (page.settings ?? {}) as LandingPageSettings;
      if (settings.cta_mode) {
        const cm = settings.cta_mode;
        setCtaModeType(cm.mode);
        if (cm.mode === "external_link") setCtaExternalUrl(cm.url);
        if (cm.mode === "checkout") setCtaPlanId(cm.plan_id);
        if (cm.mode === "form_capture") setCtaFormTarget(cm.target_section_type ?? "capture_form");
      } else if (settings.default_cta_url) {
        // Migrate legacy
        setCtaModeType("external_link");
        setCtaExternalUrl(settings.default_cta_url);
      }
    }
  }, [page]);

  const handleSaveSections = () => {
    onSaveSections(
      sections.map((s, i) => ({
        id: s.id,
        section_type: s.section_type,
        sort_order: i,
        visible: s.visible,
        config: s.config,
        audience_segment: s.audience_segment,
      }))
    );
  };

  const handleSavePage = () => {
    let ctaMode: CtaMode | undefined;
    if (ctaModeType === "external_link" && ctaExternalUrl) {
      ctaMode = { mode: "external_link", url: ctaExternalUrl };
    } else if (ctaModeType === "checkout" && ctaPlanId) {
      ctaMode = { mode: "checkout", plan_id: ctaPlanId };
    } else if (ctaModeType === "form_capture") {
      ctaMode = { mode: "form_capture", target_section_type: ctaFormTarget };
    }

    onSavePage({
      title: pageTitle,
      slug: pageSlug || null,
      status: pageStatus,
      settings: {
        ...((page.settings ?? {}) as Record<string, unknown>),
        cta_mode: ctaMode,
        default_cta_url: undefined, // clear legacy field
      },
    });
  };

  const isDirty = (() => {
    if (!page) return false;
    const current = page.sections.map((s) => ({
      id: s.id,
      type: s.sectionType,
      visible: s.visible,
      config: s.config,
    }));
    const local = sections.map((s) => ({
      id: s.id,
      type: s.section_type,
      visible: s.visible,
      config: s.config,
    }));
    return JSON.stringify(current) !== JSON.stringify(local);
  })();

  const addSection = (type: LandingSectionType) => {
    const newSection: SectionItem = {
      id: crypto.randomUUID(),
      section_type: type,
      sort_order: sections.length,
      visible: true,
      config: {},
      audience_segment: "all",
    };
    setSections([...sections, newSection]);
    setEditingSectionId(newSection.id);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter((s) => s.id !== id));
    if (editingSectionId === id) setEditingSectionId(null);
  };

  const toggleVisibility = (id: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)));
  };

  const updateSectionConfig = (id: string, config: Record<string, unknown>) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, config } : s)));
  };

  // DnD
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const activeSection = activeId ? sections.find((s) => s.id === activeId) ?? null : null;

  function handleDragStart(event: DragStartEvent) {
    setActiveId(String(event.active.id));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;
    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  }

  const showHeader = props.showHeader ?? true;

  return (
    <div>
      {/* Header with back button */}
      {showHeader && (
        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            onClick={onBack}
            className="rounded p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex-1">
            <h2 className="text-page-heading font-semibold text-zinc-900 dark:text-white">
              {page.title}
            </h2>
            <p className="text-caption text-zinc-400">
              {page.pageType.replace(/_/g, " ")}
            </p>
          </div>
        </div>
      )}

      {/* Page settings */}
      <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Title
            </label>
            <input
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Slug
            </label>
            <input
              value={pageSlug}
              onChange={(e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
              placeholder="my-landing-page"
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Status
            </label>
            <select
              value={pageStatus}
              onChange={(e) => setPageStatus(e.target.value as "draft" | "published" | "archived")}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
        {/* CTA Mode selector */}
        <div className="mt-3">
          <label className="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            CTA Button Action
          </label>
          <div className="mb-3 flex gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1 dark:border-surface-border dark:bg-surface-base">
            {([
              { value: "none", label: "Not set" },
              { value: "checkout", label: "Checkout" },
              { value: "external_link", label: "External Link" },
              { value: "form_capture", label: "Form on Page" },
            ] as const).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCtaModeType(opt.value)}
                className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                  ctaModeType === opt.value
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-surface-raised dark:text-white"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {ctaModeType === "checkout" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Plan</label>
              <select
                value={ctaPlanId}
                onChange={(e) => setCtaPlanId(e.target.value)}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
              >
                <option value="">Select a plan...</option>
                {plansData?.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}{plan.amountCents ? ` — ${plan.currency} ${(plan.amountCents / 100).toFixed(0)}` : " — Free"}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                CTA buttons link to this plan&apos;s checkout page.
              </p>
            </div>
          )}

          {ctaModeType === "external_link" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">URL</label>
              <input
                value={ctaExternalUrl}
                onChange={(e) => setCtaExternalUrl(e.target.value)}
                placeholder="https://calendly.com/... or https://typeform.com/..."
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
              />
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                CTA buttons open this URL (booking page, application form, etc.).
              </p>
            </div>
          )}

          {ctaModeType === "form_capture" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">Scroll to</label>
              <select
                value={ctaFormTarget}
                onChange={(e) => setCtaFormTarget(e.target.value as typeof ctaFormTarget)}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
              >
                <option value="capture_form">Capture Form</option>
                <option value="application_form">Application Form</option>
              </select>
              {!sections.some((s) => s.section_type === ctaFormTarget) && (
                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                  No {ctaFormTarget === "capture_form" ? "Capture Form" : "Application Form"} section on this page yet. Add one for this to work.
                </p>
              )}
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                CTA buttons scroll to the form section on this page.
              </p>
            </div>
          )}

          {ctaModeType === "none" && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Each section&apos;s CTA button uses its own URL. Set a mode to override all buttons at once.
            </p>
          )}
        </div>
      </div>

      {/* Sections header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
          Sections
        </h3>
        <AddSectionMenu onAdd={addSection} />
      </div>

      {saveSectionsSuccess && (
        <div className="mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 dark:bg-green-950/30 dark:text-green-400">
          Sections saved.
        </div>
      )}

      {/* Section list with DnD */}
      {sections.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No sections yet. Click &ldquo;Add Section&rdquo; to start building.
          </p>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map((s) => s.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {sections.map((section) => (
                <SortableSectionCard
                  key={section.id}
                  section={section}
                  isEditing={editingSectionId === section.id}
                  onToggleVisibility={() => toggleVisibility(section.id)}
                  onToggleEdit={() =>
                    setEditingSectionId(
                      editingSectionId === section.id ? null : section.id
                    )
                  }
                  onRemove={() => removeSection(section.id)}
                  onConfigChange={(config) => updateSectionConfig(section.id, config)}
                />
              ))}
            </div>
          </SortableContext>

          <DragOverlay>
            {activeSection ? <SectionOverlayCard section={activeSection} /> : null}
          </DragOverlay>
        </DndContext>
      )}

      {/* Sticky save bar */}
      <div className="sticky bottom-0 mt-6 -mx-4 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-surface-border dark:bg-surface-raised/95">
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleSavePage}
            disabled={isSavingPage}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {isSavingPage ? "Saving..." : "Save Page Settings"}
          </button>
          <button
            type="button"
            onClick={handleSaveSections}
            disabled={!isDirty || isSavingSections}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FloppyDisk className="size-4" />
            {isSavingSections ? "Saving..." : "Save Sections"}
          </button>
        </div>
      </div>
    </div>
  );
}
