"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { Linkedin, Globe, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const TEAM = [
  {
    name: "Ritik Chhipa",
    role: "Software Engineer & Product Builder",
    bio: "Building end-to-end digital products — from fast MVPs to production-grade SaaS and mobile apps. 4+ years, 50+ clients, zero compromises on quality.",
    image: "/ritik-team.png",
    tags: [
      "Next.js",
      "React Native",
      "Node.js",
      "NestJS",
      "AWS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
    ],
    accent: "bg-lime-400",
    linkedin: "https://www.linkedin.com/in/ritikchhipa5/",
    website: "https://www.ritikchhipa.xyz",
    available: true,
  },
  {
    name: "Angelina Kalinnikova",
    role: "UI/UX Designer",
    bio: "Crafting intuitive, pixel-perfect interfaces that users love. Specialised in product design, design systems, and brand identity.",
    image: "/angelina.png",
    tags: [
      "Figma",
      "Design Systems",
      "Branding",
      "Prototyping",
      "UI Research",
      "Wireframing",
    ],
    accent: "bg-rose-400",
    linkedin: null,
    website: null,
    available: true,
  },
];

export default function TeamSection() {
  const { push } = useRouter();

  return (
    <section className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto">
      <SectionHeading
        primaryHeading="The team"
        secondHeading="Who builds this"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
            className="group relative bg-card border rounded-3xl overflow-hidden"
          >
            {/* Image area */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-100">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-rose-50 to-pink-100">
                  <div className="w-24 h-24 rounded-full bg-rose-200 flex items-center justify-center">
                    <span className="text-rose-500 text-4xl font-newsreader italic font-light">
                      AK
                    </span>
                  </div>
                  <p className="mt-3 text-rose-400 font-dm-sans text-xs">
                    Photo coming soon
                  </p>
                </div>
              )}

              {/* Available badge */}
              {member.available && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
                  </span>
                  <span className="text-[11px] font-dm-sans text-gray-700">
                    Available
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-dm-sans font-semibold text-lg text-gray-900">
                    {member.name}
                  </h3>
                  <p className="font-newsreader italic text-gray-500 text-base">
                    {member.role}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2 shrink-0">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                      <Linkedin size={13} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                      <Globe size={13} />
                    </a>
                  )}
                </div>
              </div>

              <p className="font-dm-sans text-sm text-gray-500 leading-relaxed">
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {member.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-inter text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {member.tags.length > 3 && (
                  <span className="text-[11px] font-inter text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    +{member.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className={`h-1 w-full ${member.accent}`} />
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.55, ease: "easeOut" }}
          onClick={() => push("/contact")}
          className="group relative bg-black rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 min-h-[420px]"
        >
          {/* Lime gradient — appears on hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_#a3e635_0%,_transparent_55%)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 translate-x-1/4 translate-y-1/4 transition-opacity duration-500" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-[11px] font-dm-sans px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              Open to new projects
            </span>
            <p className="font-newsreader italic text-4xl font-light text-white leading-snug mt-6">
              Have a project in mind?
            </p>
            <p className="font-dm-sans text-sm text-white/50 leading-relaxed">
              We&apos;re a small, focused team that builds fast and ships
              quality. Tell us what you&apos;re working on — we&apos;d love to
              help.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-8">
            <span className="font-dm-sans text-sm text-white/60 group-hover:text-white transition-colors">
              Let&apos;s talk
            </span>
            <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight
                size={16}
                className="text-black group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
