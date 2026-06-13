import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    // ── Core ────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on listing cards and homepage (clamped to 3–4 lines)",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      description: "Unpublish without deleting",
      initialValue: false,
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Label / Caption",
              type: "string",
              description: 'e.g. "Landing Page" or "Dashboard"',
            }),
          ],
        },
      ],
      validation: (R) => R.min(1),
    }),

    // ── Case Study toggle ────────────────────────────────────────
    defineField({
      name: "isCaseStudy",
      title: "Add Case Study",
      type: "boolean",
      description: "Enable to reveal all case study fields below",
      initialValue: false,
    }),

    // ── Case Study fields (hidden unless isCaseStudy = true) ─────
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "URL path — auto-generated from the title",
      hidden: ({ document }) => !document?.isCaseStudy,
      validation: (R) =>
        R.custom((value, ctx) => {
          if (ctx.document?.isCaseStudy && !value?.current) return "Slug is required for case studies";
          return true;
        }),
    }),

    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: 'e.g. "Isaac · PropTech MVP"',
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "string",
      description: "e.g. https://kali.day — shown as a live link on the card and modal",
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Website", value: "Website" },
          { title: "SaaS", value: "SaaS" },
          { title: "Mobile App", value: "Mobile App" },
          { title: "AI Integration", value: "AI Integration" },
        ],
      },
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "categoryColor",
      title: "Accent Color",
      type: "string",
      description: "Used for icon backgrounds and accents on the detail page",
      options: {
        list: [
          { title: "Sky (blue)", value: "bg-sky-400" },
          { title: "Purple", value: "bg-purple-400" },
          { title: "Lime", value: "bg-lime-500" },
          { title: "Orange", value: "bg-orange-400" },
          { title: "Emerald (green)", value: "bg-emerald-500" },
          { title: "Teal", value: "bg-teal-500" },
          { title: "Rose (red)", value: "bg-rose-500" },
        ],
      },
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      description: "Show in the homepage case studies section (first 3 featured by order)",
      initialValue: false,
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower = appears first in lists",
      initialValue: 99,
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "One-line summary shown under the title on the detail page",
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "metric",
      title: "Metric",
      type: "string",
      description: 'Big stat shown on listing cards, e.g. "3 months", "5.0★", "4+"',
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "metricLabel",
      title: "Metric Label",
      type: "string",
      description: 'Small text under the metric, e.g. "from first call to live MVP"',
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
      description: "Shown in the right-hand card in the hero section",
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 7,
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "solution",
      title: "The Solution",
      type: "text",
      rows: 7,
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      description: "Up to 4 stat cards shown in the hero row",
      validation: (R) => R.max(4),
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      hidden: ({ document }) => !document?.isCaseStudy,
    }),

    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      hidden: ({ document }) => !document?.isCaseStudy,
      fields: [
        defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
        defineField({ name: "author", title: "Author", type: "string" }),
        defineField({
          name: "role",
          title: "Role / Title",
          type: "string",
          description: 'e.g. "Founder, RapidRent"',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ?? "Portfolio item",
        media,
      };
    },
  },
});
