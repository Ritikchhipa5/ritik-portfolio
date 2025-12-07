"use client";

import { getPostBySlug } from "@/api/articles";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";

import PortableText from "react-portable-text";
import { useParams, useRouter } from "next/navigation";

function ArticlePage() {
  const { slug } = useParams();
  const { back } = useRouter();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getPostBySlug(slug as string);
      setArticle(data);
    })();
  }, [slug]);

  const pageData = useMemo(() => {
    return {
      body: article?.body || {},
      title: article?.title || "",
      slug: article?.slug?.current || "",
      publishedDate: article?.publishedAt || "",
      mainImage: article?.mainImage?.asset?.url || "",
    };
  }, [article]);

  if (!article) {
    return null;
  }

  return (
    <div className="relative w-full     py-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto w-full px-4 text-center">
        <div className=" space-y-16">
          <div className="gap-8 flex-col flex mb-20">
            <div>
              <Badge
                onClick={back}
                variant="outline"
                className="font-inter cursor-pointer font-light"
              >
                <ArrowLeft />
                Back
              </Badge>
            </div>
            <div className=" space-y-4">
              <h1 className=" font-newsreader text-5xl font-light">
                {pageData?.title}
              </h1>
              <p className="text-muted-foreground font-dm-sans text-sm">
                {moment(pageData?.publishedDate).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>

          <div className=" aspect-[1.6]">
            <Image
              className=" rounded-2xl h-[400px] object-cover object-center"
              alt=""
              width={1000}
              height={1000}
              src={pageData?.mainImage}
            />
          </div>
          <div className="text-muted-foreground text-left font-dm-sans">
            <PortableText
              content={pageData?.body}
              serializers={{
                // Headings
                h1: (props) => (
                  <h1
                    className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="text-2xl font-semibold text-gray-900 mt-7 mb-4"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="text-lg mt-6 text-gray-900 font-medium"
                    {...props}
                  />
                ),

                // Paragraphs
                normal: (props) => (
                  <p
                    className="text-muted-foreground font-light leading-7 pt-4"
                    {...props}
                  />
                ),

                // Blockquotes
                blockquote: (props) => (
                  <blockquote
                    className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4"
                    {...props}
                  />
                ),

                // Lists
                ul: (props) => (
                  <ul
                    className="list-disc ml-6 space-y-1 text-muted-foreground font-light"
                    {...props}
                  />
                ),
                ol: (props) => (
                  <ol
                    className="list-decimal ml-6 space-y-1 text-muted-foreground font-light"
                    {...props}
                  />
                ),
                li: (props) => <li className="pl-1" {...props} />,

                // Marks (inline)
                marks: {
                  strong: (props) => (
                    <strong
                      className="font-semibold text-gray-900"
                      {...props}
                    />
                  ),
                  em: (props) => (
                    <em className="italic text-gray-700" {...props} />
                  ),
                  code: (props) => (
                    <code
                      className="bg-gray-200 px-1 py-0.5 rounded text-sm text-gray-900"
                      {...props}
                    />
                  ),
                  link: ({ mark, children }) => (
                    <a
                      href={mark?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {children}
                    </a>
                  ),
                },

                // Images
                types: {
                  image: ({ node }) => (
                    <img
                      src={node?.asset?.url}
                      alt={node?.alt || "Image"}
                      className="rounded-lg my-6"
                    />
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
