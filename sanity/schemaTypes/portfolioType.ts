import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      description: "Enable or disable this portfolio item",
      initialValue: false, // default ON
    }),

    // TAGS
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // MULTIPLE IMAGES
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "images.0", // first image
    },
  },
});
