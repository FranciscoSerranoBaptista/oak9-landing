import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Server-rendered semantic HTML for SEO/GEO.
 *
 * Renders all landing section content as static HTML. Designed to be used
 * inside <noscript> so crawlers and LLMs that don't execute JavaScript
 * see the full content without hidden-text SEO risk.
 *
 * This file has NO "use client" directive — it is a React Server Component.
 */
interface SectionData {
    sectionType: string;
    config: Record<string, unknown>;
    sortOrder: number;
}
declare function ServerSections({ sections, networkName }: {
    sections: SectionData[];
    networkName: string;
}): react_jsx_runtime.JSX.Element;
declare function ServerSection({ section }: {
    section: SectionData;
}): react_jsx_runtime.JSX.Element | null;
declare function ServerParagraphs({ text }: {
    text: string;
}): react_jsx_runtime.JSX.Element;

export { type SectionData, ServerParagraphs, ServerSection, ServerSections };
