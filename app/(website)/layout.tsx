"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import LenisGsapProvider from "@/provider/lenis-gsap-provider";
import React, { useEffect, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
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
    <LenisGsapProvider>
      <div
        className={cn(
          "relative min-h-screen  w-full bg-white",
          !isLoaded && "overflow-y-hidden h-dvh"
        )}
      >
        <Header transition={transition} />
        {transition && (
          <>
            {children}

            <Footer />
          </>
        )}
      </div>
    </LenisGsapProvider>
  );
}

export default Layout;
