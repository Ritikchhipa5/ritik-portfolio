"use client";

import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const DESCRIPTION =
  "From pixel-perfect interfaces to scalable backend systems — I craft end-to-end digital products that are fast, beautiful, and built to grow.";

const LEFT_CHIPS = [
  { label: "React Native",    color: "bg-lime-400",    rotateClass: "rotate-3 xl:rotate-6" },
  { label: "TypeScript",      color: "bg-sky-400",     rotateClass: "-rotate-1 xl:-rotate-3" },
  { label: "REST / GraphQL",  color: "bg-orange-400",  rotateClass: "rotate-2 xl:rotate-5" },
];

const RIGHT_CHIPS = [
  { label: "Cloud / DevOps",  color: "bg-yellow-400", rotateClass: "-rotate-2 xl:-rotate-4" },
  { label: "Web3 / Solidity", color: "bg-red-400",    rotateClass: "rotate-1 xl:rotate-6" },
  { label: "AI Integration",  color: "bg-purple-400", rotateClass: "-rotate-3 xl:-rotate-7" },
];

function Badge({ label, color, delay = 0 }: { label: string; color: string; delay?: number }) {
  return (
    <Magnetic>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        className="px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg rounded-full flex items-center gap-2.5 hover:bg-white/15 transition-colors duration-200"
      >
        <span className={cn("w-2 h-2 rounded-full shrink-0", color)} />
        <span className="text-sm font-light font-dm-sans whitespace-nowrap text-white/90">{label}</span>
      </motion.div>
    </Magnetic>
  );
}

export default function WhatIBringSection() {
  return (
    <div className="relative py-10 md:py-16 px-4">
      <div className="relative bg-black rounded-3xl overflow-hidden py-20 md:py-28 px-4 max-w-7xl mx-auto">

        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#a3e635_0%,_transparent_50%)] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_#818cf8_0%,_transparent_50%)] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_#a3e635_0%,_transparent_40%)] opacity-8 pointer-events-none" />

        {/* LEFT BADGES */}
        <div className="
          absolute inset-x-0 top-6
          flex justify-center space-x-3
          sm:space-x-5

          xl:inset-auto
          xl:left-8
          xl:top-1/2
          xl:-translate-y-1/2
          xl:flex-col
          xl:justify-start
          xl:space-x-0
          xl:space-y-8
        ">
          <div className={cn("scale-95 xl:scale-100", LEFT_CHIPS[0].rotateClass)}>
            <Badge label={LEFT_CHIPS[0].label} color={LEFT_CHIPS[0].color} delay={0.1} />
          </div>
          <div className={cn("scale-95 xl:scale-100 hidden sm:block xl:block", LEFT_CHIPS[1].rotateClass)}>
            <Badge label={LEFT_CHIPS[1].label} color={LEFT_CHIPS[1].color} delay={0.2} />
          </div>
          <div className={cn("scale-95 xl:scale-100", LEFT_CHIPS[2].rotateClass)}>
            <Badge label={LEFT_CHIPS[2].label} color={LEFT_CHIPS[2].color} delay={0.3} />
          </div>
        </div>

        {/* RIGHT BADGES */}
        <div className="
          absolute inset-x-0 bottom-6
          flex justify-center space-x-3
          sm:space-x-5

          xl:inset-auto
          xl:right-8
          xl:top-1/2
          xl:-translate-y-1/2
          xl:flex-col
          xl:justify-start
          xl:space-x-0
          xl:space-y-8
        ">
          <div className={cn("scale-95 xl:scale-100", RIGHT_CHIPS[0].rotateClass)}>
            <Badge label={RIGHT_CHIPS[0].label} color={RIGHT_CHIPS[0].color} delay={0.15} />
          </div>
          <div className={cn("scale-95 xl:scale-100 hidden sm:block xl:block", RIGHT_CHIPS[1].rotateClass)}>
            <Badge label={RIGHT_CHIPS[1].label} color={RIGHT_CHIPS[1].color} delay={0.25} />
          </div>
          <div className={cn("scale-95 xl:scale-100 hidden md:block xl:block", RIGHT_CHIPS[2].rotateClass)}>
            <Badge label={RIGHT_CHIPS[2].label} color={RIGHT_CHIPS[2].color} delay={0.35} />
          </div>
        </div>

        {/* Centre content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-newsreader italic text-3xl font-extralight text-white/60 text-center"
          >
            Skills &amp; Expertise
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-newsreader italic text-4xl md:text-5xl font-extralight text-white leading-tight"
          >
            What I bring to the table
          </motion.h2>

          {/* Animated description */}
          <div className="relative font-dm-sans font-light leading-[1.4] text-2xl sm:text-3xl md:text-4xl">
            <SplittingText
              text={DESCRIPTION}
              aria-hidden="true"
              className="block text-white/10 px-6 sm:px-10"
              disableAnimation
            />
            <SplittingText
              text={DESCRIPTION}
              className="block absolute inset-0 px-6 sm:px-10 text-white/80"
              type="chars"
              inView
              color=""
              initial={{ y: 0, opacity: 0, x: 0, filter: "blur(2px)" }}
              animate={{ y: 0, opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
