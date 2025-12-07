import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    {
      type: "code",
      title: "Code Block",
      options: {
        languageAlternatives: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "ts" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "SCSS", value: "scss" },
          { title: "Tailwind", value: "tailwindcss" },

          // Backend / Frameworks
          { title: "Node.js", value: "node" },
          { title: "Express", value: "express" },
          { title: "NestJS", value: "nestjs" },

          // Databases
          { title: "SQL", value: "sql" },
          { title: "PostgreSQL", value: "postgresql" },
          { title: "MySQL", value: "mysql" },
          { title: "MongoDB", value: "mongodb" },
          { title: "Prisma", value: "prisma" },

          // Mobile
          { title: "React Native", value: "reactnative" },
          { title: "Swift", value: "swift" },
          { title: "Kotlin", value: "kotlin" },

          // DevOps & Cloud
          { title: "Docker", value: "docker" },
          { title: "YAML", value: "yaml" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
          { title: "PowerShell", value: "powershell" },

          // Web3
          { title: "Solidity", value: "solidity" },
          { title: "Ethers.js", value: "ethers" },
          { title: "Web3.js", value: "web3" },

          // AI / ML
          { title: "Python", value: "python" },
          { title: "Jupyter Notebook", value: "jupyter" },

          // Other Popular Languages
          { title: "Java", value: "java" },
          { title: "C", value: "c" },
          { title: "C++", value: "cpp" },
          { title: "C#", value: "csharp" },
          { title: "Go", value: "go" },
          { title: "Rust", value: "rust" },
          { title: "PHP", value: "php" },
          { title: "Ruby", value: "ruby" },

          // Markup / Config / Misc
          { title: "Markdown", value: "md" },
          { title: "XML", value: "xml" },
          { title: "GraphQL", value: "graphql" },
          { title: "JSON5", value: "json5" },
          { title: "Config", value: "ini" },
        ],
        withFilename: true, // Optional: allows adding a filename
      },
    },

    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
