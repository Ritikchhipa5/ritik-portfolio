"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { IMAGES } from "@/assets/images";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({
  mainImage,
  title,
  publishedDate,
  description,
  slug,
  author,
}: any) => {
  const { push } = useRouter();

  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <motion.article
      onClick={() => push(`/blogs/${slug}`)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 26 } }}
      className="group cursor-pointer flex flex-col rounded-2xl border border-transparent hover:border-neutral-200 transition-all duration-300 p-3 -m-3 relative overflow-hidden"
    >
      {/* Lime glow — bottom right, shows on hover */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-lime-300 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-neutral-100">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Arrow badge on hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={14} className="text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-4 gap-2">
        {/* Meta row */}
        <div className="flex items-center gap-2">
          <span className="relative flex shrink-0 overflow-hidden w-5 h-5 rounded-full ring-1 ring-neutral-200">
            <Image
              fill
              className="object-cover"
              alt={author?.name || "author"}
              src={
                author?.image
                  ? urlFor(author.image).url()
                  : IMAGES.avatars[1].src
              }
            />
          </span>
          <span className="font-inter text-[11px] text-neutral-500">{author?.name}</span>
          {formattedDate && (
            <>
              <span className="text-neutral-300 text-[11px]">·</span>
              <span className="font-inter text-[11px] text-neutral-400">{formattedDate}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="font-dm-sans font-medium text-[15px] text-gray-900 leading-snug line-clamp-2 group-hover:text-lime-600 transition-colors duration-200">
          {title}
        </h2>

        {/* Description */}
        <p className="font-inter text-sm text-neutral-500 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default BlogCard;
