"use client";
import { PortfolioModal } from "@/app/(website)/(components)/portfolio-modal";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const PortfolioCard = ({
  index,
  images,
  title,
  description,
  tags,
  caseStudySlug,
  siteUrl,
}: {
  index: number;
  images: any[];
  tags: string[];
  title: string;
  description: string;
  caseStudySlug?: string;
  siteUrl?: string;
}) => {
  const domain = siteUrl
    ? (() => { try { return new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`).hostname.replace(/^www\./, ""); } catch { return siteUrl; } })()
    : null;
  const [active, setActive] = useState<any>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.55,
          delay: (index % 2) * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 26 } }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setActive({ index, images, title, description, tags, caseStudySlug, siteUrl })}
        className="group cursor-pointer rounded-2xl bg-white border border-neutral-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/9 transition-shadow duration-300"
      >
        {/* ── Browser chrome ── */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-[5px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
          </div>

          <div className="flex flex-1 justify-center">
            <div className={`flex items-center gap-1.5 rounded-md px-3 py-[5px] max-w-[200px] w-full justify-center transition-colors ${domain ? "bg-lime-50 border border-lime-200" : "bg-neutral-50 border border-neutral-100"}`}>
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={domain ? "text-lime-500 shrink-0" : "text-neutral-400 shrink-0"}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className={`text-[11px] font-inter truncate ${domain ? "text-lime-600 font-medium" : "text-neutral-400"}`}>
                {domain ?? title}
              </span>
            </div>
          </div>
        </div>

        {/* ── Screenshot ── */}
        <div className="relative overflow-hidden aspect-16/10 bg-neutral-50">
          {images?.[0]?.asset?.url && (
            <Image
              src={images[0].asset.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}

          {/* Index badge */}
          <span className="absolute bottom-3 left-3 z-10 text-[11px] font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-inter">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute inset-0 z-20 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4"
              >
                {/* Title + tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
                  className="text-center px-6"
                >
                  <h3 className="text-white text-lg font-medium font-dm-sans leading-snug mb-2">
                    {title}
                  </h3>
                  {tags?.length > 0 && (
                    <p className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 font-inter">
                      {tags.slice(0, 2).map((tag, i, arr) => (
                        <span key={i} className="flex items-center gap-1.5">
                          {tag}
                          {i < arr.length - 1 && (
                            <span className="text-white/30">·</span>
                          )}
                        </span>
                      ))}
                    </p>
                  )}
                </motion.div>

                {/* CTA button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
                  className="flex items-center gap-2 bg-white text-black text-[13px] font-medium font-dm-sans px-5 py-2.5 rounded-full shadow-lg hover:bg-neutral-100 transition-colors"
                >
                  View Project
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {active && (
        <PortfolioModal
          open={!!active}
          onClose={() => setActive(null)}
          title={active.title}
          description={active.description}
          tags={active.tags}
          images={active.images}
          caseStudySlug={active.caseStudySlug}
          siteUrl={active.siteUrl}
        />
      )}
    </>
  );
};
