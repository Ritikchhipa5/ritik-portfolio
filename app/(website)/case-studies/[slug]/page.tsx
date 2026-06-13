"use client";

import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/case-studies";
import CustomButton from "@/components/custom-btn";

const CATEGORY_TEXT: Record<string, string> = {
  "bg-sky-400": "text-sky-700 bg-sky-50 border-sky-100",
  "bg-purple-400": "text-purple-700 bg-purple-50 border-purple-100",
  "bg-lime-500": "text-lime-700 bg-lime-50 border-lime-100",
  "bg-orange-400": "text-orange-700 bg-orange-50 border-orange-100",
};

const ACCENT_BG: Record<string, string> = {
  "bg-sky-400": "bg-sky-400",
  "bg-purple-400": "bg-purple-400",
  "bg-lime-500": "bg-lime-400",
  "bg-orange-400": "bg-orange-400",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { push } = useRouter();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) notFound();

  const badgeClass =
    CATEGORY_TEXT[cs.categoryColor] ??
    "text-neutral-600 bg-neutral-50 border-neutral-100";
  const accentBg = ACCENT_BG[cs.categoryColor] ?? "bg-lime-400";

  return (
    <main className="min-h-screen">
      {/* Back link */}
      <div className="px-4 max-w-7xl mx-auto pt-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 font-dm-sans text-sm text-gray-400 hover:text-gray-900 transition-colors group"
        >
          <span className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-200">
            <ArrowLeft size={13} />
          </span>
          Case Studies
        </Link>
      </div>

      {/* Hero */}
      <section className="px-4 max-w-7xl mx-auto pt-10 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: title block */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <span
                className={`text-[11px] font-inter font-medium px-3 py-1 rounded-full border ${badgeClass}`}
              >
                {cs.category}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-newsreader italic text-5xl md:text-6xl font-light text-gray-900 leading-tight"
            >
              {cs.title}
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="font-newsreader italic text-xl text-gray-400 leading-snug"
            >
              {cs.headline}
            </motion.p>

            <motion.p
              {...fadeUp(0.18)}
              className="font-dm-sans text-sm text-gray-400"
            >
              {cs.client}
            </motion.p>
          </div>

          {/* Right: overview */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-card border rounded-3xl p-8 space-y-4"
          >
            <p className="font-dm-sans text-xs font-medium text-gray-400 uppercase tracking-widest">
              Overview
            </p>
            <p className="font-dm-sans text-base text-gray-700 leading-relaxed">
              {cs.overview}
            </p>
          </motion.div>
        </div>

        {/* Results row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {cs.results.map((r, i) => (
            <div
              key={i}
              className="bg-card border rounded-2xl p-5 text-center space-y-1"
            >
              <p className="font-newsreader italic text-4xl font-light text-gray-900">
                {r.value}
              </p>
              <p className="font-dm-sans text-xs text-gray-400 leading-tight">
                {r.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-neutral-100 max-w-7xl mx-auto" />

      {/* Challenge → Solution */}
      <section className="px-4 max-w-7xl mx-auto py-14 md:py-20 space-y-14">
        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start"
        >
          <div className="space-y-2">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${accentBg}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <h2 className="font-newsreader italic text-2xl font-light text-gray-900 mt-3">
              The Challenge
            </h2>
          </div>
          <p className="font-dm-sans text-base text-gray-600 leading-relaxed max-w-2xl">
            {cs.challenge}
          </p>
        </motion.div>

        <div className="h-px bg-neutral-100" />

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-lime-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <h2 className="font-newsreader italic text-2xl font-light text-gray-900 mt-3">
              The Solution
            </h2>
          </div>
          <p className="font-dm-sans text-base text-gray-600 leading-relaxed max-w-2xl">
            {cs.solution}
          </p>
        </motion.div>
      </section>

      <div className="h-px bg-neutral-100 max-w-7xl mx-auto" />

      {/* Tech Stack */}
      <section className="px-4 max-w-7xl mx-auto py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="font-dm-sans text-xs font-medium text-gray-400 uppercase tracking-widest">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="font-inter text-sm text-neutral-700 bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <>
          <div className="h-px bg-neutral-100 max-w-7xl mx-auto" />
          <section className="px-4 max-w-7xl mx-auto py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative bg-card border rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              {/* Subtle lime blob */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-lime-400 rounded-full blur-3xl opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

              <Quote
                size={36}
                className="text-neutral-200 mb-6"
                strokeWidth={1.5}
              />
              <blockquote className="font-newsreader italic text-2xl md:text-3xl font-light text-gray-800 leading-relaxed max-w-3xl">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full ${accentBg} flex items-center justify-center`}
                >
                  <span className="font-dm-sans font-semibold text-white text-sm">
                    {cs.testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-dm-sans font-medium text-sm text-gray-900">
                    {cs.testimonial.author}
                  </p>
                  <p className="font-dm-sans text-xs text-gray-400">
                    {cs.testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="px-4 max-w-7xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative bg-black rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_#a3e635_0%,_transparent_55%)] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-400 rounded-full blur-3xl opacity-15 translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/60 text-[11px] font-dm-sans px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                Open to new projects
              </span>
              <h2 className="font-newsreader italic text-4xl md:text-5xl font-light text-white leading-snug max-w-lg">
                Have a similar project in mind?
              </h2>
              <p className="font-dm-sans text-sm text-white/50 max-w-md leading-relaxed">
                Whether you&apos;re starting from scratch or scaling an existing
                product, I&apos;d love to hear what you&apos;re building.
              </p>
            </div>

            <div className="shrink-0">
              <CustomButton
                label="Let's talk"
                onClick={() => push("/contact")}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
