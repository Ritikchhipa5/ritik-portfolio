"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, Smartphone, Bot, Palette } from "lucide-react";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { useRouter } from "next/navigation";

const SERVICES = [
  {
    icon: Rocket,
    color: "bg-lime-400",
    title: "MVP Development",
    description:
      "Turn your idea into a working product fast. I build lean, launch-ready MVPs so you can validate and iterate with real users.",
  },
  {
    icon: Layers,
    color: "bg-sky-400",
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms built for scale — auth, billing, dashboards, and everything in between.",
  },
  {
    icon: Smartphone,
    color: "bg-orange-400",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native. Native feel, shared codebase, fast delivery.",
  },
  {
    icon: Bot,
    color: "bg-purple-400",
    title: "AI Integration",
    description:
      "Embed OpenAI, Claude, and custom AI agents into your product. Smarter workflows, better user experiences.",
  },
  {
    icon: Palette,
    color: "bg-rose-400",
    title: "UI/UX Design",
    description:
      "Modern, pixel-perfect interfaces backed by strong UX principles — from wireframes to polished design systems.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function WorkWithMeSection() {
  const { push } = useRouter();

  return (
    <section className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="Services"
        secondHeading="What I build"
      
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group bg-card border rounded-2xl p-6 flex flex-col gap-4 cursor-default hover:shadow-md transition-shadow"
            >
              <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${service.color}`}>
                <Icon size={20} className="text-white" strokeWidth={2} />
              </span>

              <div className="space-y-2">
                <h3 className="font-dm-sans font-medium text-base text-gray-900">
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
          custom={SERVICES.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={() => push("/contact")}
          className="group relative bg-black rounded-2xl p-6 flex flex-col justify-between gap-6 cursor-pointer overflow-hidden transition-colors"
        >
          {/* Lime gradient — appears on hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_#a3e635_0%,_transparent_55%)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 translate-x-1/4 translate-y-1/4 transition-opacity duration-500" />

          <p className="relative z-10 font-newsreader italic text-3xl font-light text-white leading-snug">
            Got a project in mind?
          </p>
          <span className="relative z-10 inline-flex items-center gap-2 text-white/60 font-dm-sans text-sm group-hover:text-white transition-colors">
            Let's talk →
          </span>
        </motion.div>
      </div>
    </section>
  );
}
