"use client";

import { useState } from "react";

interface SocialShareConfig {
  headline?: string;
  share_text?: string;
  platforms?: ("twitter" | "linkedin" | "email" | "copy-link")[];
  share_url?: string;
  layout?: "inline" | "card";
}

const PLATFORM_LABELS: Record<string, string> = {
  twitter: "Twitter / X",
  linkedin: "LinkedIn",
  email: "Email",
  "copy-link": "Copy Link",
};

function getShareHref(platform: string, url: string, text: string): string | null {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "email":
      return `mailto:?subject=${encodedText}&body=${encodedUrl}`;
    default:
      return null;
  }
}

export function LandingSocialShare({ config }: { config: Record<string, unknown> }) {
  const c = config as SocialShareConfig;
  const platforms = c.platforms ?? ["twitter", "linkedin", "copy-link"];
  const shareUrl = c.share_url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = c.share_text || "";
  const [copied, setCopied] = useState(false);

  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center" aria-label={c.headline || "Share"}>
      {c.headline && (
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">{c.headline}</h2>
      )}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {platforms.map((platform) => {
          if (platform === "copy-link") {
            return (
              <button
                key={platform}
                onClick={handleCopyLink}
                className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover"
              >
                {copied ? "Copied!" : PLATFORM_LABELS[platform]}
              </button>
            );
          }
          const href = getShareHref(platform, shareUrl, shareText);
          if (!href) return null;
          return (
            <a
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-surface-border dark:text-zinc-300 dark:hover:bg-surface-hover"
            >
              {PLATFORM_LABELS[platform] || platform}
            </a>
          );
        })}
      </div>
    </section>
  );
}
