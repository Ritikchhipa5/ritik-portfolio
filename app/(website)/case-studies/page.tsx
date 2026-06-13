"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { CASE_STUDIES } from "@/data/case-studies";

const CATEGORIES = ["All", "Website", "SaaS", "Mobile App"];


export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");
  const { push } = useRouter();

  const filtered =
    active === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.categories.includes(active));

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-28 px-4 max-w-7xl mx-auto text-center">
        <SectionHeading
          primaryHeading="Case Studies"
          secondHeading="From idea to impact"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-2 flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-dm-sans text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-500 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Cards grid */}
      <section className="px-4 max-w-7xl mx-auto pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((cs, i) => {
              return (
                <motion.div
                  key={cs.slug}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 340, damping: 24 },
                  }}
                  onClick={() => push(`/case-studies/${cs.slug}`)}
                  className="group cursor-pointer bg-card border rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-xl hover:shadow-black/6 transition-shadow duration-300"
                >
                  {/* Left: metric column */}
                  <div className="flex flex-col items-center justify-center bg-neutral-50 border-b md:border-b-0 md:border-r border-neutral-100 px-6 py-8 md:w-48 shrink-0">
                    <span
                      className={`font-newsreader italic font-light text-lime-500 leading-none text-center ${
                        cs.metric.length > 5 ? "text-3xl" : "text-5xl"
                      }`}
                    >
                      {cs.metric}
                    </span>
                    <span className="font-dm-sans text-[11px] text-gray-400 text-center mt-2 max-w-[110px] leading-tight">
                      {cs.metricLabel}
                    </span>
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h2 className="font-newsreader italic text-2xl font-light text-gray-900 leading-snug">
                          {cs.title}
                        </h2>
                        <p className="font-dm-sans text-xs text-gray-400 mt-0.5">
                          {cs.client}
                        </p>
                      </div>

                      <span className="mt-1 h-9 w-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-200 shrink-0">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                    <p className="font-dm-sans text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {cs.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cs.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-inter text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {cs.tags.length > 4 && (
                        <span className="text-[11px] font-inter text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                          +{cs.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-2 flex flex-col items-center justify-center py-28 gap-4"
          >
            <p className="font-newsreader italic text-4xl text-gray-200">
              Nothing here yet.
            </p>
            <p className="font-dm-sans text-sm text-gray-400 max-w-xs text-center leading-relaxed">
              More work in this category is on the way — check back soon or{" "}
              <span className="text-lime-500">view all</span> to see what&apos;s
              live.
            </p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
