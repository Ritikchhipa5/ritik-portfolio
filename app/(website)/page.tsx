"use client";

import Image from "next/image";
import { IMAGES } from "@/assets/images";
import Header from "@/components/header";

import { LucideArrowRight } from "lucide-react";
import HeroSection from "@/app/(website)/(components)/hero-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Header />
    </div>
  );
}
