// import { DocumentTextIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const postType = defineType({
//   name: "post",
//   title: "Post",
//   type: "document",
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({
//       name: "title",
//       type: "string",
//     }),
//     defineField({
//       name: "slug",
//       type: "slug",
//       options: {
//         source: "title",
//       },
//     }),
//     defineField({
//       name: "author",
//       type: "reference",
//       to: { type: "author" },
//     }),
//     defineField({
//       name: "mainImage",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         defineField({
//           name: "alt",
//           type: "string",
//           title: "Alternative text",
//         }),
//       ],
//     }),
//     defineField({
//       name: "categories",
//       type: "array",
//       of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
//     }),
//     defineField({
//       name: "publishedAt",
//       type: "datetime",
//     }),
//     defineField({
//       name: "body",
//       type: "blockContent",
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       author: "author.name",
//       media: "mainImage",
//     },
//     prepare(selection) {
//       const { author } = selection;
//       return { ...selection, subtitle: author && `by ${author}` };
//     },
//   },
// });

import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "Used in previews and SEO.",
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "category" },
        }),
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent", // this is where your code blocks live
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
