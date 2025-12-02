"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // adjust import to your setup

type SanityImage = {
  asset?: {
    url?: string;
  };
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image whenever you open a new portfolio
  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

  if (!images || images.length === 0) return null;

  const total = images.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="
              relative z-10 w-full max-w-5xl 
              rounded-3xl bg-white 
              overflow-hidden 
              shadow-xl 
              mx-4

              my-20
            "
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="
                absolute right-4 top-4 z-20
                inline-flex h-9 w-9 items-center justify-center 
                rounded-full border border-black/10 bg-white/80 
                hover:bg-white transition
              "
            >
              <X size={18} />
            </button>

            <div className="flex flex-col">
              {/* LEFT: Carousel */}
              <div className="relative aspect-4/3  md:aspect-auto overflow-hidden  md:h-[420px] bg-zinc-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="relative w-full h-full "
                    initial={{ opacity: 0, scale: 0.97, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.97, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {currentImage?.asset?.url && (
                      <Image
                        src={currentImage.asset.url}
                        alt={currentImage.alt || title}
                        fill
                        className="object-contain "
                      />
                    )}

                    {/* Gradient overlay bottom */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next buttons */}
                {total > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="
                        absolute left-3 top-1/2 -translate-y-1/2 
                        inline-flex h-9 w-9 items-center justify-center 
                        rounded-full bg-white text-black transition
                      "
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={goNext}
                      className="
                        absolute right-3 top-1/2 -translate-y-1/2 
                        inline-flex h-9 w-9 items-center justify-center 
                        rounded-full bg-white text-black 
                    transition
                      "
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Dots */}
                {total > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`
                          h-2 rounded-full transition-all 
                          ${i === currentIndex ? "w-5 bg-white" : "w-2 bg-muted"}
                        `}
                      />
                    ))}
                  </div>
                )}

                {/* Counter */}
                {total > 1 && (
                  <div className="absolute left-3 bottom-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    {currentIndex + 1} / {total}
                  </div>
                )}
              </div>

              {/* RIGHT: Text content */}
              <div className="flex flex-col gap-4 p-5 sm:p-7 md:p-8">
                {/* Tags */}
                {tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 8).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-dm-sans font-normal text-xs sm:text-[13px] text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="font-dm-sans text-xl sm:text-2xl font-medium text-left text-black">
                  {title}
                </h2>
                {/* Description */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-left text-zinc-700">
                  {description}
                </p>

                {/* Optional: small meta row / CTA slot */}
                {/* You can add links, tech stack, etc. here later */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
