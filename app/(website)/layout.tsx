"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import LenisGsapProvider from "@/provider/lenis-gsap-provider";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setTransition(true), 1250);
    const timer2 = setTimeout(() => setIsLoaded(true), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 100) {
        setHeaderHidden(true);
      } else if (y < lastScrollY.current) {
        setHeaderHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LenisGsapProvider>
      <div
        className={cn(
          "relative min-h-screen w-full bg-white",
          !isLoaded && "overflow-y-hidden h-dvh"
        )}
      >
        <motion.div
          animate={{ y: headerHidden && transition ? -90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sticky top-0 z-40"
        >
          <Header transition={transition} />
        </motion.div>

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
