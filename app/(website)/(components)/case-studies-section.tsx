"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import CustomButton from "@/components/custom-btn";
import { CASE_STUDIES } from "@/data/case-studies";

const FEATURED = CASE_STUDIES.filter((cs) => cs.featured).slice(0, 3);


export default function CaseStudiesSection() {
  const { push } = useRouter();

  return (
    <section className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="Case Studies"
        secondHeading="Real results"
        paragraph="Deep dives into projects that moved the needle — from first commit to measurable impact."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED.map((cs, i) => {
          return (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 340, damping: 24 },
              }}
              onClick={() => push(`/case-studies/${cs.slug}`)}
              className="group relative bg-white border border-neutral-100 rounded-3xl overflow-hidden cursor-pointer flex flex-col hover:shadow-2xl hover:shadow-black/20 transition-all duration-400"
            >
              {/* Dark bg on hover */}
              <div className="absolute inset-0 bg-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0" />

              {/* Lime corner glow */}
              <div className="absolute top-0 left-0 w-44 h-44 bg-[radial-gradient(circle_at_0%_0%,#a3e635_0%,transparent_70%)] opacity-20 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none z-0 rounded-tl-3xl" />

              {/* ── Top row: card number ── */}
              <div className="relative z-10 flex items-center justify-end px-7 pt-5 pb-4">
                <span className="font-newsreader italic text-3xl font-light text-neutral-200 group-hover:text-neutral-700 select-none leading-none transition-colors duration-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* ── Content ── */}
              <div className="relative z-10 flex flex-col flex-1 px-7 pb-6 gap-4">
                <div>
                  <h3 className="font-newsreader italic text-[1.6rem] font-light text-gray-900 group-hover:text-lime-400 leading-snug transition-colors duration-400">
                    {cs.title}
                  </h3>
                  <p className="font-dm-sans text-xs text-gray-400 group-hover:text-neutral-500 mt-1 transition-colors duration-400">
                    {cs.client}
                  </p>
                </div>

                <p className="font-dm-sans text-sm text-gray-500 group-hover:text-neutral-400 leading-relaxed transition-colors duration-400">
                  {cs.description}
                </p>
              </div>

              {/* ── Footer: read label + arrow ── */}
              <div className="relative z-10 flex items-center justify-between px-7 py-4 border-t border-neutral-100 group-hover:border-neutral-800 transition-colors duration-400">
                <span className="font-dm-sans text-sm text-gray-400 group-hover:text-white transition-colors duration-400">
                  Read case study
                </span>
                <span className="h-8 w-8 rounded-full border border-neutral-200 group-hover:border-white flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View all */}
      <div className="flex justify-end mt-10">
        <Link href="/case-studies">
          <CustomButton label="View All Case Studies" />
        </Link>
      </div>
    </section>
  );
}
