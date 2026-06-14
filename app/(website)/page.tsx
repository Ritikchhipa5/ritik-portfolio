import HeroSection from "@/app/(website)/(components)/hero-section";
import ClientLogos from "@/app/(website)/(components)/client-logos";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import Testimonials from "@/app/(website)/(components)/testimonials";
import TechnologySection from "@/app/(website)/(components)/technology-section";
import { ProcessSection } from "@/app/(website)/(components)/process-section";
import BlogSection from "@/app/(website)/(components)/blog/blog-section";
import WhatIBringSection from "@/app/(website)/(components)/what-i-bring";
import FaqSection from "@/app/(website)/(components)/faq-section";
import WorkWithMeSection from "@/app/(website)/(components)/work-with-me";
import WhyChooseMeSection from "@/app/(website)/(components)/why-choose-me";
import TeamSection from "@/app/(website)/(components)/team-section";
import CaseStudiesSection from "@/app/(website)/(components)/case-studies-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <MyGoal />
      <WorkWithMeSection />
      <TechnologySection />
      <Portfolio />
      <CaseStudiesSection />
      <WhatIBringSection />
      <WhyChooseMeSection />
      <TeamSection />
      <ProcessSection />
      <Testimonials />
      <BlogSection />
      <FaqSection />
    </>
  );
}
