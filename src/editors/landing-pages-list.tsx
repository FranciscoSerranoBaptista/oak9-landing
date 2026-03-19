"use client";

import { useState } from "react";
import {
  Plus,
  Trash,
  PencilSimple,
  Copy,
  Globe,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";

const PAGE_TYPE_LABELS: Record<string, string> = {
  lead_magnet: "Lead Magnet Landing",
  waiting_list: "Waiting List",
  thank_you: "Thank You / Confirmation",
  course_landing: "Course / Programme Landing",
  sales_page: "Sales Page (Long-form)",
  enrollment: "Enrollment / Application",
  event_registration: "Event / Webinar Registration",
  post_purchase_thank_you: "Post-Purchase Thank You",
};

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  published: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  archived: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

export interface LandingPagesListProps {
  pages: Array<{
    id: string;
    title: string;
    slug: string | null;
    pageType: string;
    status: string;
    isDefault: boolean;
    createdAt: string;
    updatedAt: string;
  }> | undefined;
  isLoading: boolean;
  onSelectPage: (pageId: string) => void;
  onCreatePage: (data: { page_type: string; title: string }) => void;
  onDeletePage: (pageId: string) => void;
  onDuplicatePage: (pageId: string) => void;
}

export function LandingPagesList({
  pages,
  isLoading,
  onSelectPage,
  onCreatePage,
  onDeletePage,
  onDuplicatePage,
}: LandingPagesListProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPageType, setNewPageType] = useState("course_landing");
  const [newPageTitle, setNewPageTitle] = useState("");

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-xl bg-zinc-100 dark:bg-surface-raised"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-page-heading font-semibold text-zinc-900 dark:text-white">
            Landing Pages
          </h2>
          <p className="mt-1 text-body text-zinc-500 dark:text-zinc-400">
            Create and manage landing pages for your network.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowCreateForm(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500"
        >
          <Plus className="size-3.5" />
          New Page
        </button>
      </div>

      {/* Create form */}
      {showCreateForm && (
        <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-surface-border dark:bg-surface-raised">
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Page Type
              </label>
              <select
                value={newPageType}
                onChange={(e) => setNewPageType(e.target.value)}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
              >
                {Object.entries(PAGE_TYPE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Title
              </label>
              <input
                type="text"
                value={newPageTitle}
                onChange={(e) => setNewPageTitle(e.target.value)}
                placeholder="e.g. Conference of the Birds — Waiting List"
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  onCreatePage({
                    page_type: newPageType,
                    title: newPageTitle || PAGE_TYPE_LABELS[newPageType] || "Untitled",
                  });
                  setShowCreateForm(false);
                  setNewPageTitle("");
                }}
                className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-500 disabled:opacity-50"
              >
                Create Page
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="rounded-lg px-4 py-2 text-xs font-medium text-zinc-500 hover:bg-zinc-100 dark:hover:bg-surface-hover"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pages list */}
      {!pages || pages.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-600">
          <Globe className="mx-auto size-8 text-zinc-300 dark:text-zinc-600" />
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            No landing pages yet. Create one to get started.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-surface-border dark:bg-surface-raised"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                    {page.title}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-caption font-medium ${STATUS_COLORS[page.status]}`}
                  >
                    {page.status}
                  </span>
                  {page.isDefault && (
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-caption font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                      Default
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-caption text-zinc-400 dark:text-zinc-500">
                  <span>{PAGE_TYPE_LABELS[page.pageType] ?? page.pageType}</span>
                  {page.slug && (
                    <>
                      <span>&middot;</span>
                      <span>/landing/{page.slug}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Actions */}
              <button
                type="button"
                onClick={() => onSelectPage(page.id)}
                className="rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"
                title="Edit sections"
              >
                <PencilSimple className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => onDuplicatePage(page.id)}
                className="rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-surface-hover"
                title="Duplicate"
              >
                <Copy className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm("Delete this landing page?")) {
                    onDeletePage(page.id);
                  }
                }}
                className="rounded p-1 text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                title="Delete"
              >
                <Trash className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
