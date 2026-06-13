import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: BookIcon,

  fields: [
    // ── Core identity ──────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: 'e.g. "Isaac · PropTech MVP" or "Kali.day · Wellness Tech"',
    }),

    defineField({
      name: "siteUrl",
      title: "Site URL (domain only)",
      type: "string",
      description: 'e.g. rapidrent.co or kali.day — shown in the browser bar',
    }),

    // ── Categorisation ─────────────────────────────────────────
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
      validation: (R) => R.min(1),
    }),

    defineField({
      name: "categoryColor",
      title: "Category Accent Color",
      type: "string",
      description:
        "Tailwind class used for accents on the detail page, e.g. bg-sky-400 / bg-emerald-500 / bg-teal-500 / bg-rose-500",
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
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on the homepage (first 3 featured by display order)",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. 1 = top of list.",
      initialValue: 99,
    }),

    // ── Listing card ────────────────────────────────────────────
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "One-line summary shown on the detail page hero",
    }),

    defineField({
      name: "metric",
      title: "Metric",
      type: "string",
      description: 'The big number / stat shown on listing cards, e.g. "3 months", "5.0★", "4+"',
    }),

    defineField({
      name: "metricLabel",
      title: "Metric Label",
      type: "string",
      description: 'Small text under the metric, e.g. "from first call to live MVP"',
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on listing cards and homepage section (clamped to 3–4 lines)",
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Tech tags shown on listing cards",
    }),

    // ── Detail page content ─────────────────────────────────────
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 6,
      description: "Shown in the right-hand card in the hero section",
    }),

    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 8,
    }),

    defineField({
      name: "solution",
      title: "The Solution",
      type: "text",
      rows: 8,
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
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      description: "4 result cards shown in the hero stats row",
      validation: (R) => R.max(4),
    }),

    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // ── Images ──────────────────────────────────────────────────
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'Caption shown below each image, e.g. "Landing Page"',
            }),
          ],
          preview: {
            select: { title: "label", media: "image" },
          },
        },
      ],
    }),

    // ── Testimonial ─────────────────────────────────────────────
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      fields: [
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "author",
          title: "Author",
          type: "string",
        }),
        defineField({
          name: "role",
          title: "Role / Title",
          type: "string",
          description: 'e.g. "Founder, RapidRent" or "App Store reviewer · 5★"',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "images.0.image",
    },
  },
});
