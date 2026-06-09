"use client";

import { useEffect } from "react";
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
};

export function PortfolioModal({
  open,
  onClose,
  title,
  description,
  tags = [],
  images,
}: PortfolioModalProps) {
  const router = useRouter();

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 "
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
              relative z-10 w-full sm:max-w-6xl bg-white shadow-2xl
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
              <div className="
                flex flex-col gap-5
                px-5 sm:px-7 py-6
                md:w-80 shrink-0 md:overflow-y-auto
                border-b md:border-b-0 md:border-r border-neutral-100
              ">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400 font-inter">
                    Project description
                  </p>
                  <p className="text-sm text-neutral-600 font-inter leading-relaxed">
                    {description}
                  </p>
                </div>

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

                <div className="hidden md:block flex-1" />

                <button onClick={() => router.push("/contact")} className="relative font-dm-sans font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden cursor-pointer bg-black text-white mt-2 md:mt-0">
                  <span className="relative z-10 text-sm transition-all duration-500 whitespace-nowrap">
                    Hire Me
                  </span>
                  <div className="absolute top-1 right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
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
                      className="relative w-full shrink-0 overflow-hidden rounded-xl"
                      style={{ height: "min(calc(90vh - 80px), 90vw)" }}
                    >
                      <Image
                        src={img.asset.url}
                        alt={img.alt || `${title} – screen ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 64vw"
                        className="object-cover"
                        priority={i === 0}
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
    </AnimatePresence>
  );
}
