"use client";

import { useState, useEffect } from "react";

interface NavLink {
  label: string;
  sectionId: string;
}

interface AnchorNavigationConfig {
  links?: NavLink[];
  style?: "sticky-top" | "inline" | "sidebar";
}

export function LandingAnchorNavigation({ config }: { config: Record<string, unknown> }) {
  const c = config as AnchorNavigationConfig;
  const links = c.links ?? [];
  const style = c.style || "sticky-top";
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (links.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const link of links) {
      const el = document.getElementById(link.sectionId);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  if (links.length === 0) return null;

  if (style === "sidebar") {
    return (
      <nav className="hidden lg:fixed lg:left-4 lg:top-1/2 lg:block lg:-translate-y-1/2" aria-label="Page navigation">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.sectionId}>
              <a
                href={`#${link.sectionId}`}
                className={`block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeId === link.sectionId
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  if (style === "inline") {
    return (
      <nav className="mx-auto max-w-5xl px-4 py-6" aria-label="Page navigation">
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.sectionId}>
              <a
                href={`#${link.sectionId}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeId === link.sectionId
                    ? "bg-brand-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-surface-hover dark:text-zinc-300 dark:hover:bg-surface-raised"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // sticky-top (default)
  return (
    <nav
      className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-sm dark:border-surface-border dark:bg-surface-base/90"
      aria-label="Page navigation"
    >
      <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2">
        {links.map((link) => (
          <a
            key={link.sectionId}
            href={`#${link.sectionId}`}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              activeId === link.sectionId
                ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
