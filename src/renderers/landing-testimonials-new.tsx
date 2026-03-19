"use client";

import { useState } from "react";

interface TestimonialAvatar {
  url: string;
  alt_text?: string;
}

interface Testimonial {
  quote: string;
  attribution: string;
  context?: string;
  avatar?: TestimonialAvatar;
}

interface TestimonialsNewConfig {
  section_label?: string;
  headline?: string;
  testimonials?: Testimonial[];
  use_network_testimonials?: boolean;
  max_items?: number;
  featured_only?: boolean;
  layout?: "carousel" | "grid" | "single-featured" | "stacked";
  style?: "card" | "minimal" | "pullquote";
}

export function LandingTestimonialsNew({ config }: { config: Record<string, unknown> }) {
  const c = config as TestimonialsNewConfig;
  const testimonials = c.testimonials ?? [];
  const layout = c.layout || "grid";
  const style = c.style || "card";

  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" aria-label={c.headline || "Testimonials"}>
      {c.section_label && (
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{c.section_label}</p>
      )}
      {c.headline && (
        <h2 className="mb-10 text-center text-3xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}

      {layout === "carousel" && <Carousel testimonials={testimonials} style={style} />}

      {layout === "single-featured" && testimonials[0] && (
        <div className="mx-auto max-w-4xl text-center">
          <TestimonialItem t={testimonials[0]} style="pullquote" />
        </div>
      )}

      {layout === "stacked" && (
        <div className="mx-auto max-w-4xl space-y-6">
          {testimonials.map((t, i) => (
            <TestimonialItem key={i} t={t} style={style} />
          ))}
        </div>
      )}

      {layout === "grid" && (
        <div className={`grid gap-6 ${testimonials.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {testimonials.map((t, i) => (
            <TestimonialItem key={i} t={t} style={style} />
          ))}
        </div>
      )}
    </section>
  );
}

function Carousel({ testimonials, style }: { testimonials: Testimonial[]; style: string }) {
  const [index, setIndex] = useState(0);
  const t = testimonials[index]!;

  return (
    <div className="mx-auto max-w-4xl">
      <TestimonialItem t={t} style={style} />
      {testimonials.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full border border-zinc-300 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <span className="text-sm text-zinc-400">{index + 1} / {testimonials.length}</span>
          <button
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="rounded-full border border-zinc-300 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-400 dark:hover:bg-surface-hover"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

function AvatarImage({ avatar }: { avatar?: TestimonialAvatar }) {
  if (!avatar?.url) return null;
  return (
    <img
      src={avatar.url}
      alt={avatar.alt_text || ""}
      className="size-10 rounded-full object-cover"
    />
  );
}

function TestimonialItem({ t, style }: { t: Testimonial; style: string }) {
  if (style === "pullquote") {
    return (
      <blockquote className="text-center">
        {t.avatar && (
          <div className="mb-4 flex justify-center">
            <AvatarImage avatar={t.avatar} />
          </div>
        )}
        <p className="text-xl font-medium italic text-zinc-900 dark:text-white">
          &ldquo;{t.quote}&rdquo;
        </p>
        <footer className="mt-4">
          <p className="font-semibold text-zinc-700 dark:text-zinc-300">{t.attribution}</p>
          {t.context && <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.context}</p>}
        </footer>
      </blockquote>
    );
  }

  if (style === "minimal") {
    return (
      <blockquote className="border-l-4 border-brand-500 pl-4">
        <p className="text-base text-zinc-700 dark:text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
        <footer className="mt-2 flex items-center gap-3">
          <AvatarImage avatar={t.avatar} />
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.attribution}</p>
            {t.context && <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.context}</p>}
          </div>
        </footer>
      </blockquote>
    );
  }

  // card (default)
  return (
    <blockquote className="rounded-2xl border border-zinc-200 p-6 dark:border-surface-border dark:bg-surface-raised">
      <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
      <footer className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-3 dark:border-surface-border">
        <AvatarImage avatar={t.avatar} />
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{t.attribution}</p>
          {t.context && <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.context}</p>}
        </div>
      </footer>
    </blockquote>
  );
}
