"use client";

import Header from "@/components/header";
import HeroSection from "@/app/(website)/(components)/hero-section";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative  w-full bg-white">
      <Header />
      <HeroSection />
      <MyGoal />
      <Portfolio />
      <WhoAmI />
      <Footer />
    </div>
  );
}
