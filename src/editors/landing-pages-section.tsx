"use client";

import { useState } from "react";
import { LandingPagesList, type LandingPagesListProps } from "./landing-pages-list";
import { LandingPageEditor, type LandingPageEditorProps } from "./landing-page-editor";

export interface LandingPagesSectionProps {
  // List props
  pages: LandingPagesListProps["pages"];
  isLoadingPages: boolean;
  onCreatePage: LandingPagesListProps["onCreatePage"];
  onDeletePage: LandingPagesListProps["onDeletePage"];
  onDuplicatePage: LandingPagesListProps["onDuplicatePage"];

  // Editor props — the selected page data (undefined when no page selected or still loading)
  selectedPage?: LandingPageEditorProps["page"];
  selectedPageId?: string;
  plans?: LandingPageEditorProps["plans"];
  onSaveSections: LandingPageEditorProps["onSaveSections"];
  onSavePage: LandingPageEditorProps["onSavePage"];
  isSavingSections?: boolean;
  isSavingPage?: boolean;
  saveSectionsSuccess?: boolean;
  savePageSuccess?: boolean;

  // Called when user selects or deselects a page (so the host can fetch page data)
  onSelectPage: (pageId: string | null) => void;
}

/**
 * Landing Pages section wrapper.
 * Shows either the pages list or a specific page's section editor.
 */
export function LandingPagesSection(props: LandingPagesSectionProps) {
  const {
    pages,
    isLoadingPages,
    onCreatePage,
    onDeletePage,
    onDuplicatePage,
    selectedPage,
    selectedPageId,
    plans,
    onSaveSections,
    onSavePage,
    isSavingSections,
    isSavingPage,
    saveSectionsSuccess,
    savePageSuccess,
    onSelectPage,
  } = props;

  if (selectedPageId && selectedPage) {
    return (
      <LandingPageEditor
        pageId={selectedPageId}
        page={selectedPage}
        plans={plans}
        onSaveSections={onSaveSections}
        onSavePage={onSavePage}
        onBack={() => onSelectPage(null)}
        isSavingSections={isSavingSections}
        isSavingPage={isSavingPage}
        saveSectionsSuccess={saveSectionsSuccess}
        savePageSuccess={savePageSuccess}
      />
    );
  }

  return (
    <LandingPagesList
      pages={pages}
      isLoading={isLoadingPages}
      onSelectPage={(pageId) => onSelectPage(pageId)}
      onCreatePage={onCreatePage}
      onDeletePage={onDeletePage}
      onDuplicatePage={onDuplicatePage}
    />
  );
}
