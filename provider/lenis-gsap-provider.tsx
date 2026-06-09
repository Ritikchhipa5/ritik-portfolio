"use client";

import { PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "lenis/dist/lenis.css";

// Module-level ref so any client component can stop/start Lenis
let _lenis: Lenis | null = null;
export const getLenis = () => _lenis;

export default function LenisGsapProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ smoothWheel: true });
    _lenis = lenis;
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      _lenis = null;
    };
  }, []);

  return <>{children}</>;
}
