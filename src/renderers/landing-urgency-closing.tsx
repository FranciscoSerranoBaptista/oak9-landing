"use client";

import { useState, useEffect } from "react";

interface UrgencyClosingConfig {
  headline?: string;
  body_text?: string;
  urgency_type?: "countdown" | "scarcity" | "deadline";
  countdown_target?: string; // ISO date string
  show_countdown?: boolean;
  seats_remaining?: number;
  seats_total?: number;
  cta_button?: { label: string; url: string; variant?: string };
}

export function LandingUrgencyClosing({ config }: { config: Record<string, unknown> }) {
  const c = config as UrgencyClosingConfig;
  const showCountdown = c.show_countdown !== false;

  return (
    <section className="px-4 py-16 text-center" aria-label={c.headline || "Limited availability"}>
      <div className="mx-auto max-w-4xl">
        {c.headline && (
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
        )}
        {c.body_text && (
          <div className="mb-8 space-y-4 text-lg text-zinc-600 dark:text-zinc-400">
            {c.body_text.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}

        {c.countdown_target && showCountdown && <Countdown target={c.countdown_target} />}

        {c.seats_remaining != null && c.seats_total != null && c.seats_total > 0 && (
          <div className="mb-8">
            <div className="mx-auto mb-2 h-3 max-w-xs overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${((c.seats_total - c.seats_remaining) / c.seats_total) * 100}%` }}
              />
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-white">{c.seats_remaining}</span> of {c.seats_total} spots remaining
            </p>
          </div>
        )}

        {c.cta_button && (
          <a
            href={c.cta_button.url}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500"
          >
            {c.cta_button.label}
          </a>
        )}
      </div>
    </section>
  );
}

function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState(calcRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calcRemaining(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (remaining.total <= 0) {
    return <p className="mb-8 text-lg font-semibold text-red-400">Time&apos;s up!</p>;
  }

  return (
    <div className="mb-8 flex justify-center gap-4">
      {[
        { value: remaining.days, label: "Days" },
        { value: remaining.hours, label: "Hours" },
        { value: remaining.minutes, label: "Min" },
        { value: remaining.seconds, label: "Sec" },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="flex size-16 items-center justify-center rounded-xl bg-zinc-100 text-2xl font-bold text-zinc-900 dark:bg-surface-raised dark:text-white">
            {String(unit.value).padStart(2, "0")}
          </div>
          <p className="mt-1 text-xs text-zinc-500">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}

function calcRemaining(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
