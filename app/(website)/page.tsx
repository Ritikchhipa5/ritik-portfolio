import HeroSection from "@/app/(website)/(components)/hero-section";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import Testimonials from "@/app/(website)/(components)/testimonials";
import TechnologySection from "@/app/(website)/(components)/technology-section";
import { ProcessSection } from "@/app/(website)/(components)/process-section";
import BlogSection from "@/app/(website)/(components)/blog/blog-section";
import WhatIBringSection from "@/app/(website)/(components)/what-i-bring";
import FaqSection from "@/app/(website)/(components)/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyGoal />
      <TechnologySection />
      <Portfolio />
      <WhatIBringSection />
      <ProcessSection />
      <Testimonials />
      <WhoAmI />
      <BlogSection />
      <FaqSection />
    </>
  );
}
