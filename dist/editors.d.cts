import * as react_jsx_runtime from 'react/jsx-runtime';
import { L as LandingSectionType } from './landing-pages-C2rQvBu8.cjs';

interface LandingPageEditorProps {
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
    plans?: Array<{
        id: string;
        name: string;
        amountCents: number | null;
        currency: string | null;
    }>;
    onSaveSections: (sections: Array<Record<string, unknown>>) => void;
    onSavePage: (data: {
        title: string;
        slug: string | null;
        status: string;
        settings: Record<string, unknown>;
    }) => void;
    onBack: () => void;
    isSavingSections?: boolean;
    isSavingPage?: boolean;
    saveSectionsSuccess?: boolean;
    savePageSuccess?: boolean;
    /** Set to false to hide the built-in back arrow + page name header. Defaults to true. */
    showHeader?: boolean;
}
declare function LandingPageEditor(props: LandingPageEditorProps): react_jsx_runtime.JSX.Element;

interface LandingPagesListProps {
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
    onCreatePage: (data: {
        page_type: string;
        title: string;
    }) => void;
    onDeletePage: (pageId: string) => void;
    onDuplicatePage: (pageId: string) => void;
}
declare function LandingPagesList({ pages, isLoading, onSelectPage, onCreatePage, onDeletePage, onDuplicatePage, }: LandingPagesListProps): react_jsx_runtime.JSX.Element;

interface LandingPagesSectionProps {
    pages: LandingPagesListProps["pages"];
    isLoadingPages: boolean;
    onCreatePage: LandingPagesListProps["onCreatePage"];
    onDeletePage: LandingPagesListProps["onDeletePage"];
    onDuplicatePage: LandingPagesListProps["onDuplicatePage"];
    selectedPage?: LandingPageEditorProps["page"];
    selectedPageId?: string;
    plans?: LandingPageEditorProps["plans"];
    onSaveSections: LandingPageEditorProps["onSaveSections"];
    onSavePage: LandingPageEditorProps["onSavePage"];
    isSavingSections?: boolean;
    isSavingPage?: boolean;
    saveSectionsSuccess?: boolean;
    savePageSuccess?: boolean;
    onSelectPage: (pageId: string | null) => void;
}
/**
 * Landing Pages section wrapper.
 * Shows either the pages list or a specific page's section editor.
 */
declare function LandingPagesSection(props: LandingPagesSectionProps): react_jsx_runtime.JSX.Element;

interface SectionConfigEditorProps {
    type: LandingSectionType;
    config: Record<string, unknown>;
    onChange: (config: Record<string, unknown>) => void;
}
declare function SectionConfigEditor({ type, config, onChange }: SectionConfigEditorProps): react_jsx_runtime.JSX.Element;

export { LandingPageEditor, type LandingPageEditorProps, LandingPagesList, type LandingPagesListProps, LandingPagesSection, SectionConfigEditor };
