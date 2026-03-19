import { z } from "zod";

export const safeUrlSchema = z.string().max(1000).refine(
  (url) => /^(https?:\/\/|\/[^/])/.test(url),
  { message: "URL must start with https://, http://, or /" },
);

export const ctaModeSchema = z.discriminatedUnion("mode", [
  z.object({ mode: z.literal("external_link"), url: safeUrlSchema }),
  z.object({ mode: z.literal("checkout"), plan_id: z.string().uuid() }),
  z.object({
    mode: z.literal("form_capture"),
    target_section_type: z.enum(["capture_form", "application_form"]).optional(),
  }),
]);

export const pageSettingsSchema = z.object({
  meta_title: z.string().max(200).optional(),
  meta_description: z.string().max(500).optional(),
  og_image_url: z.string().max(1000).optional(),
  canonical_url: z.string().max(1000).optional(),
  robots: z.string().max(100).optional(),
  custom_css_class: z.string().max(100).optional(),
  cta_mode: ctaModeSchema.optional(),
  default_cta_url: z.string().max(1000).optional(), // legacy backwards compat
  waitlist_headline: z.string().max(255).optional(),
  waitlist_description: z.string().max(1000).optional(),
  default_audience_id: z.string().max(100).optional(),
}).optional();
