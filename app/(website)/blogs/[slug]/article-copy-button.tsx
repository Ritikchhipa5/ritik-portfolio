"use client";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
const codeStyle = arduinoLight;

function ArticleContent({ body }: any) {
  return (
    <div className="text-muted-foreground text-left font-dm-sans">
      <PortableText
        value={body}
        components={{
          // 🟦 BLOCKS (headings, paragraphs, quotes, lists)
          block: {
            h1: ({ children }: any) => (
              <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }: any) => (
              <h2 className="text-2xl font-semibold text-gray-900 mt-7 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }: any) => (
              <h3 className="text-lg mt-6 text-gray-900 font-medium">
                {children}
              </h3>
            ),

            normal: ({ children }: any) => (
              <p className="text-muted-foreground font-light leading-7 pt-4">
                {children}
              </p>
            ),

            blockquote: ({ children }: any) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
                {children}
              </blockquote>
            ),
          },

          // 🟩 LISTS
          list: {
            bullet: ({ children }: any) => (
              <ul className="list-disc ml-6 space-y-1 text-muted-foreground font-light">
                {children}
              </ul>
            ),
            number: ({ children }: any) => (
              <ol className="list-decimal ml-6 space-y-1 text-muted-foreground font-light">
                {children}
              </ol>
            ),
          },

          listItem: {
            bullet: ({ children }: any) => <li className="pl-1">{children}</li>,
            number: ({ children }: any) => <li className="pl-1">{children}</li>,
          },

          // 🟧 INLINE MARKS (bold, italic, code, links)
          marks: {
            strong: ({ children }: any) => (
              <strong className="font-medium text-black">{children}</strong>
            ),

            em: ({ children }: any) => (
              <em className="italic text-gray-700">{children}</em>
            ),

            code: ({ children }: any) => (
              <code className="bg-gray-200 px-1 py-0.5 rounded text-sm text-gray-900">
                {children}
              </code>
            ),

            link: ({ value, children }: any) => (
              <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {children}
              </a>
            ),
          },

          // 🟥 CODE BLOCKS (full block, not inline)
          types: {
            code: (props: any) => {
              const { language, code, filename } = props.value;
              return (
                <div className="my-6 relative text-sm border border-muted shadow-xs rounded-xl overflow-hidden bg-[#fafafa]">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-muted bg-muted/40">
                    <span className="text-xs font-dm-sans text-muted-foreground">
                      {filename || language}
                    </span>
                    <CopyButton
                      onClick={() => {
                        navigator.clipboard.writeText(code);
                      }}
                      content="Outline variant"
                      variant="outline"
                      size="sm"
                    />
                  </div>
                  <SyntaxHighlighter
                    showLineNumbers
                    customStyle={{
                      padding: 16,
                      margin: 0,
                      borderRadius: 0,
                      background: "transparent",
                    }}
                    language={language}
                    style={codeStyle}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              );
            },

            image: ({ value }) => (
              <Image
                width={1200}
                height={700}
                src={value?.asset?.url}
                alt={value?.alt || "Image"}
                className="rounded-2xl my-8"
              />
            ),
          },
        }}
      />
    </div>
  );
}

export default ArticleContent;
