"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, Smartphone, Bot, Palette } from "lucide-react";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Rocket,
    color: "bg-lime-400",
    num: "01",
    title: "MVP Development",
    description:
      "Turn your idea into a working product fast. I build lean, launch-ready MVPs so you can validate and iterate with real users.",
  },
  {
    icon: Layers,
    color: "bg-sky-400",
    num: "02",
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms built for scale — auth, billing, dashboards, and everything in between.",
  },
  {
    icon: Smartphone,
    color: "bg-orange-400",
    num: "03",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native. Native feel, shared codebase, fast delivery.",
  },
  {
    icon: Bot,
    color: "bg-purple-400",
    num: "04",
    title: "AI Integration",
    description:
      "Embed OpenAI, Claude, and custom AI agents into your product. Smarter workflows, better user experiences.",
  },
  {
    icon: Palette,
    color: "bg-rose-400",
    num: "05",
    title: "UI/UX Design",
    description:
      "Modern, pixel-perfect interfaces backed by strong UX principles — from wireframes to polished design systems.",
  },
];

export default function WorkWithMeSection() {
  const { push } = useRouter();

  return (
    <section className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading primaryHeading="Services" secondHeading="What I build" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 340, damping: 24 },
              }}
              className="group relative bg-white border border-neutral-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-black/8 transition-all duration-300"
            >
              {/* Lime corner glow */}
              <div className="absolute top-0 left-0 w-44 h-44 bg-[radial-gradient(circle_at_0%_0%,#a3e635_0%,transparent_70%)] opacity-20 group-hover:opacity-35 transition-opacity duration-400 pointer-events-none z-0 rounded-tl-3xl" />

              {/* ── Icon row + number ── */}
              <div className="relative z-10 flex items-center justify-between px-7 pt-6 pb-5">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </span>
                <span className="font-newsreader italic text-3xl font-light text-neutral-200 select-none leading-none">
                  {service.num}
                </span>
              </div>

              {/* ── Content ── */}
              <div className="relative z-10 flex flex-col flex-1 px-7 pb-7 gap-3">
                <h3 className="font-newsreader italic text-[1.45rem] font-light text-gray-900 group-hover:text-lime-500 leading-snug transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-dm-sans text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: SERVICES.length * 0.08,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
            transition: { type: "spring", stiffness: 340, damping: 24 },
          }}
          onClick={() => push("/contact")}
          className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-black/30 transition-all duration-400 min-h-[220px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,#a3e635_0%,transparent_55%)] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 translate-x-1/3 translate-y-1/3 transition-opacity duration-500 pointer-events-none" />

          <p className="relative z-10 font-newsreader italic text-4xl font-light text-white leading-snug">
            Got a project in mind?
          </p>

          <div className="relative z-10 flex items-center justify-between mt-6">
            <span className="font-dm-sans text-sm text-white/50 group-hover:text-white transition-colors duration-300">
              Let&apos;s talk
            </span>
            <span className="h-9 w-9 rounded-full bg-white/10 group-hover:bg-white flex items-center justify-center text-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
