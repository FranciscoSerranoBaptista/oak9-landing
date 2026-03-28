"use client";

import { useEffect, useRef } from "react";

const EMBED_SCRIPT_URL = "https://www.humaproof.app/static/embed.js";

/** Track how many mounted widgets depend on the script */
let mountedWidgetCount = 0;

interface HumaWidgetConfig {
  section_label?: string;
  headline?: string;
  widget_id?: string;
}

export function LandingHumaWidget({ config }: { config: Record<string, unknown> }) {
  const c = config as HumaWidgetConfig;

  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!c.widget_id) return;

    mountedWidgetCount++;

    // Load embed.js once per page
    const existing = document.querySelector(`script[src="${EMBED_SCRIPT_URL}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    } else {
      // Script already loaded — tell it to pick up new containers
      const win = window as unknown as Record<string, unknown>;
      const embed = win.HumaEmbed;
      if (embed && typeof embed === "object" && typeof (embed as Record<string, unknown>).refresh === "function") {
        (embed as { refresh: () => void }).refresh();
      }
    }

    return () => {
      mountedWidgetCount--;
      // Remove script when last widget unmounts
      if (mountedWidgetCount === 0 && scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
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
