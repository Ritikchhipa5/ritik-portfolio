"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { getLenis } from "@/provider/lenis-gsap-provider";
import { useRouter } from "next/navigation";

type SanityImage = {
  asset?: { url?: string };
  alt?: string;
};

type PortfolioModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags?: string[];
  images: SanityImage[];
  caseStudySlug?: string;
  siteUrl?: string;
};

function ModalImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-lime-50" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-200/60 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 70vw"
        className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export function PortfolioModal({
  open,
  onClose,
  title,
  description,
  tags = [],
  images,
  caseStudySlug,
  siteUrl,
}: PortfolioModalProps) {
  const domain = siteUrl
    ? (() => { try { return new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`).hostname.replace(/^www\./, ""); } catch { return siteUrl; } })()
    : null;
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open) {
      getLenis()?.stop();
      document.body.style.overflow = "hidden";
    }
    return () => {
      getLenis()?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!images || images.length === 0) return null;
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="
              relative z-10 w-full sm:max-w-[90vw] bg-white shadow-2xl
              rounded-none sm:rounded-2xl overflow-hidden
              flex flex-col
              h-screen sm:h-[90vh]
            "
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 300, damping: 34 }}
          >
            {/* ── Top bar (fixed h-16 = 64px so calc below is precise) ── */}
            <div className="flex-none h-16 flex items-center justify-between gap-4 px-5 sm:px-7 border-b border-neutral-100 bg-white">
              <h2 className="font-dm-sans text-sm sm:text-base md:text-lg font-medium text-black line-clamp-1">
                {title}
              </h2>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={onClose}
                  className="h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black transition"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            {/* Mobile  : single scrollable column                    */}
            {/* Desktop : side-by-side, each panel scrolls on its own */}
            <div
              className="flex-1 min-h-0 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
              data-lenis-prevent
            >

              {/* LEFT : details */}
              <div className="flex flex-col md:w-80 shrink-0 min-h-0 border-b md:border-b-0 md:border-r border-neutral-100">

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto flex flex-col gap-5 px-5 sm:px-7 py-6 min-h-0" data-lenis-prevent>
                  <div className="space-y-2 text-left">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400 font-inter">
                      Project description
                    </p>
                    <p className="text-sm text-neutral-600 font-inter leading-relaxed text-left">
                      {description}
                    </p>
                  </div>

                  {domain && (
                    <a
                      href={siteUrl?.startsWith("http") ? siteUrl : `https://${siteUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-lime-50 hover:bg-lime-100 border border-lime-200 text-lime-700 hover:text-lime-800 rounded-full px-3 py-1.5 text-[12px] font-medium font-inter transition-all group w-fit"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-lime-400 flex items-center justify-center shrink-0">
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </span>
                      {domain}
                      <ArrowUpRight size={11} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  )}

                  <div className="h-px bg-neutral-100" />

                  {tags.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400 font-inter">
                        Skills &amp; deliverables
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[12px] font-inter text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Pinned buttons — always visible */}
                <div className="shrink-0 flex flex-col gap-3 px-5 sm:px-7 py-5 border-t border-neutral-100">
                  <button onClick={() => router.push("/contact")} className="relative font-dm-sans font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden cursor-pointer bg-black text-white">
                    <span className="relative z-10 text-sm transition-all duration-500 whitespace-nowrap">
                      Hire Me
                    </span>
                    <div className="absolute top-1 right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>

                  {caseStudySlug && (
                    <button
                      onClick={() => router.push(`/case-studies/${caseStudySlug}`)}
                      className="relative font-dm-sans font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden cursor-pointer bg-neutral-100 text-black hover:bg-neutral-200"
                    >
                      <span className="relative z-10 text-sm transition-all duration-500 whitespace-nowrap">
                        View Case Study
                      </span>
                      <div className="absolute top-1 right-1 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </div>
                    </button>
                  )}
                </div>

              </div>

              {/* RIGHT : full-bleed scrollable image reel
                  ─ each image = min(90vh-80px, 90vw) tall
                    → fills panel on desktop, proportional on mobile
                  ─ gap-3 + p-3 gives visible gap between slides           */}
              <div className="flex-1 md:min-h-0 md:overflow-y-auto bg-white flex flex-col gap-3 p-3">
                {images.map((img, i) =>
                  img?.asset?.url ? (
                    <div
                      key={i}
                      className="relative w-full shrink-0 overflow-hidden rounded-xl bg-neutral-50"
                      style={{ height: "min(calc(90vh - 80px), 90vw)" }}
                    >
                      <ModalImage
                        src={img.asset.url}
                        alt={img.alt || `${title} – screen ${i + 1}`}
                      />

                      {/* counter badge */}
                      {images.length > 1 && (
                        <span className="absolute bottom-3 right-3 text-[11px] font-inter text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {i + 1} / {images.length}
                        </span>
                      )}

                      {/* scroll nudge on first image */}
                      {i === 0 && images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 pointer-events-none">
                          <span className="text-[9px] font-inter uppercase tracking-widest">scroll</span>
                          <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
