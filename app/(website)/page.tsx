"use client";

import HeroSection from "@/app/(website)/(components)/hero-section";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import Testimonials from "@/app/(website)/(components)/testimonials";
import { BlogSection } from "@/app/(website)/(components)/blog-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyGoal />
      <Portfolio />
      <Testimonials />
      <WhoAmI />
      <BlogSection />
    </>
  );
}
