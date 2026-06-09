"use client";

import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const DESCRIPTION =
  "From pixel-perfect interfaces to scalable backend systems — I craft end-to-end digital products that are fast, beautiful, and built to grow.";

const LEFT_CHIPS = [
  { label: "Product Design", color: "bg-lime-400",   rotateClass: "rotate-3 xl:rotate-6" },
  { label: "UI/UX Design",   color: "bg-sky-400",    rotateClass: "-rotate-1 xl:-rotate-3" },
  { label: "Design Systems", color: "bg-orange-400", rotateClass: "rotate-2 xl:rotate-5" },
];

const RIGHT_CHIPS = [
  { label: "Next.js / React",  color: "bg-yellow-400", rotateClass: "-rotate-2 xl:-rotate-4" },
  { label: "Node.js / NestJS", color: "bg-red-400",    rotateClass: "rotate-1 xl:rotate-6" },
  { label: "Full Stack Dev",   color: "bg-purple-400", rotateClass: "-rotate-3 xl:-rotate-7" },
];

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <Magnetic>
      <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center gap-2">
        <span className={cn("p-1 rounded-full", color)}>
          <Zap size={14} fill="white" color="white" />
        </span>
        <span className="text-sm font-light font-dm-sans whitespace-nowrap">{label}</span>
      </div>
    </Magnetic>
  );
}

export default function WhatIBringSection() {
  return (
    <div className="relative py-10 md:py-20 mt-10 max-w-7xl mx-auto">
      {/* LEFT BADGES */}
      <div
        className="
          absolute inset-x-0 top-2
          flex justify-center space-x-4
          sm:space-x-6
          md:space-x-10

          xl:inset-auto
          xl:left-4
          xl:top-1/2
          xl:-translate-y-1/2
          xl:flex-col
          xl:justify-start
          xl:space-x-0
          xl:space-y-10
        "
      >
        <div className={cn("scale-95 xl:scale-100", LEFT_CHIPS[0].rotateClass)}>
          <Badge label={LEFT_CHIPS[0].label} color={LEFT_CHIPS[0].color} />
        </div>
        <div className={cn("scale-95 xl:scale-100 hidden sm:block xl:block", LEFT_CHIPS[1].rotateClass)}>
          <Badge label={LEFT_CHIPS[1].label} color={LEFT_CHIPS[1].color} />
        </div>
        <div className={cn("scale-95 xl:scale-100", LEFT_CHIPS[2].rotateClass)}>
          <Badge label={LEFT_CHIPS[2].label} color={LEFT_CHIPS[2].color} />
        </div>
      </div>

      {/* RIGHT BADGES */}
      <div
        className="
          absolute inset-x-0 bottom-6
          flex justify-center space-x-4
          sm:space-x-6
          md:space-x-10

          xl:inset-auto
          xl:right-4
          xl:top-1/2
          xl:-translate-y-1/2
          xl:flex-col
          xl:justify-start
          xl:space-x-0
          xl:space-y-10
        "
      >
        <div className={cn("scale-95 xl:scale-100", RIGHT_CHIPS[0].rotateClass)}>
          <Badge label={RIGHT_CHIPS[0].label} color={RIGHT_CHIPS[0].color} />
        </div>
        <div className={cn("scale-95 xl:scale-100 hidden sm:block xl:block", RIGHT_CHIPS[1].rotateClass)}>
          <Badge label={RIGHT_CHIPS[1].label} color={RIGHT_CHIPS[1].color} />
        </div>
        <div className={cn("scale-95 xl:scale-100 hidden md:block xl:block", RIGHT_CHIPS[2].rotateClass)}>
          <Badge label={RIGHT_CHIPS[2].label} color={RIGHT_CHIPS[2].color} />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl relative z-10 font-newsreader italic text-center font-extralight">
        What I bring to the table
      </h2>
      

      {/* Animated description */}
      <div className="relative z-10 font-dm-sans text-center font-light leading-[1.4] text-3xl sm:text-4xl md:text-5xl max-w-5xl mx-auto mt-6">
        <SplittingText
          text={DESCRIPTION}
          aria-hidden="true"
          className="block text-neutral-200 px-8 sm:px-10 dark:text-neutral-800"
          disableAnimation
        />
        <SplittingText
          text={DESCRIPTION}
          className="block absolute inset-0 px-8 sm:px-10"
          type="chars"
          inView
          color=""
          initial={{ y: 0, opacity: 0, x: 0, filter: "blur(2px)" }}
          animate={{ y: 0, opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
