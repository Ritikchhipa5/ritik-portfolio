"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const LOGOS = [
  { src: "/logos/logo-1.svg", alt: "Client" },
  { src: "/logos/logo-procraft.svg", alt: "Procraft" },
  { src: "/logos/logo-kali.svg", alt: "Kali" },
  { src: "/logos/logo-rapidrent.svg", alt: "RapidRent" },
  { src: "/logos/logo-5.svg", alt: "Client" },
  { src: "/logos/logo-thrive.png", alt: "Thrive Finance" },
  { src: "/logos/logo-molar.png", alt: "Molar HQ" },
];

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={32}
        className="h-6 w-auto object-contain"
      />
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="w-full py-12">
      <p className="text-center text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-inter mb-8">
        Trusted by clients worldwide
      </p>
      <div className="relative overflow-hidden max-w-4xl mx-auto">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        <Marquee pauseOnHover repeat={4} className="[--duration:30s] [--gap:3rem]">
          {LOGOS.map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
