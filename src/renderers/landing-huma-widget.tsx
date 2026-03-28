"use client";

import { useEffect } from "react";

const EMBED_SCRIPT_URL = "https://www.humaproof.app/static/embed.js";

interface HumaWidgetConfig {
  section_label?: string;
  headline?: string;
  widget_id?: string;
}

export function LandingHumaWidget({ config }: { config: Record<string, unknown> }) {
  const c = config as HumaWidgetConfig;

  useEffect(() => {
    if (!c.widget_id) return;

    // Load embed.js once per page
    const existing = document.querySelector(`script[src="${EMBED_SCRIPT_URL}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script already loaded — tell it to pick up new containers
      (window as Record<string, unknown>).HumaEmbed &&
        typeof (window as Record<string, unknown>).HumaEmbed === "object" &&
        typeof ((window as Record<string, unknown>).HumaEmbed as Record<string, unknown>).refresh === "function" &&
        ((window as Record<string, unknown>).HumaEmbed as { refresh: () => void }).refresh();
    }
  }, [c.widget_id]);

  if (!c.widget_id) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <p className="text-sm text-zinc-400">Huma widget — no widget ID configured</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {c.section_label && (
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {c.section_label}
        </p>
      )}
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          {c.headline}
        </h2>
      )}
      <div data-widget-id={c.widget_id} />
    </section>
  );
}
