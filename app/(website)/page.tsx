import dynamic from "next/dynamic";
import HeroSection from "@/app/(website)/(components)/hero-section";
import ClientLogos from "@/app/(website)/(components)/client-logos";
import MyGoal from "@/app/(website)/(components)/my-goal";
import WorkWithMeSection from "@/app/(website)/(components)/work-with-me";
import TechnologySection from "@/app/(website)/(components)/technology-section";

const Portfolio = dynamic(
  () => import("@/app/(website)/(components)/portfolio")
);
const CaseStudiesSection = dynamic(
  () => import("@/app/(website)/(components)/case-studies-section")
);
const WhatIBringSection = dynamic(
  () => import("@/app/(website)/(components)/what-i-bring")
);
const WhyChooseMeSection = dynamic(
  () => import("@/app/(website)/(components)/why-choose-me")
);
const TeamSection = dynamic(
  () => import("@/app/(website)/(components)/team-section")
);
const ProcessSection = dynamic(() =>
  import("@/app/(website)/(components)/process-section").then(
    (mod) => mod.ProcessSection
  )
);
const Testimonials = dynamic(
  () => import("@/app/(website)/(components)/testimonials")
);
const BlogSection = dynamic(
  () => import("@/app/(website)/(components)/blog/blog-section")
);
const FaqSection = dynamic(
  () => import("@/app/(website)/(components)/faq-section")
);

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
