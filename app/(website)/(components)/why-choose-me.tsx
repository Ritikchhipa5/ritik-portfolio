"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/app/(website)/(components)/section-heading";

const REASONS = [
  {
    label: "Startup MVP Specialist",
    desc: "I cut scope ruthlessly and build what matters. Most MVPs shipped within 2–4 weeks.",
  },
  {
    label: "Full Stack + Mobile",
    desc: "Web, API, mobile — one developer handles the full product. No handoff gaps, no translation loss.",
  },
  {
    label: "Fast, Clear Communication",
    desc: "You'll never be left guessing. Daily updates, honest timelines, and a reply within 24 hours.",
  },
  {
    label: "Long-Term Partnership",
    desc: "Launch is just the beginning. I stay involved to grow the product with you.",
  },
  {
    label: "Clean, Maintainable Code",
    desc: "No spaghetti. Every project is documented, tested, and easy for any dev to pick up.",
  },
  {
    label: "Global Client Experience",
    desc: "Delivered projects for clients across the US, UK, Europe, and Asia — remote-first by default.",
  },
];

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "4+",  label: "Years" },
  { value: "98%", label: "Satisfaction" },
  { value: "24h", label: "Response" },
];

export default function WhyChooseMeSection() {
  return (
    <section className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="Why me?"
        secondHeading="Why choose me"
      />

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-card border rounded-2xl p-6 text-center"
          >
            <p className="font-newsreader italic text-5xl font-light text-gray-900">
              {s.value}
            </p>
            <p className="font-dm-sans text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Reasons grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
            className="flex items-start gap-4 bg-card border rounded-2xl p-5"
          >
            <span className="mt-0.5 flex-shrink-0 h-6 w-6 rounded-full bg-lime-400 flex items-center justify-center">
              <Check size={13} strokeWidth={3} className="text-white" />
            </span>
            <div>
              <p className="font-dm-sans font-medium text-sm text-gray-900">
                {r.label}
              </p>
              <p className="font-dm-sans text-xs text-gray-500 mt-0.5 leading-relaxed">
                {r.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
