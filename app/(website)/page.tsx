"use client";

import Header from "@/components/header";
import HeroSection from "@/app/(website)/(components)/hero-section";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Testimonials from "@/app/(website)/(components)/testimonials";

export default function Home() {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTransition(true), 1250);
    const timer2 = setTimeout(() => setIsLoaded(true), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative h-dvh   w-full bg-white",
        !isLoaded && "overflow-y-hidden"
      )}
    >
      <Header transition={transition} />

      {transition && (
        <>
          <HeroSection />
          <MyGoal />
          <Portfolio />
          <Testimonials />
          <WhoAmI />
          <Footer />
        </>
      )}
    </div>
  );
}
