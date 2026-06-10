"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Logo } from "@/components/logo";
import { useEffect, useRef, useState } from "react";

import { routes } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { getLenis } from "@/provider/lenis-gsap-provider";

const LOGO_WRAPPER_VARIANTS = {
  center: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
  },
  topLeft: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: "auto",
    height: "80px",
  },
};

export default function Header({ transition }: { transition: boolean }) {
  const isMobile = false;
  const { push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const hideY = useMotionValue(0);
  const springY = useSpring(hideY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 100 && transition) {
        hideY.set(-90);
      } else if (y < lastScrollY.current) {
        hideY.set(0);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transition, hideY]);

  // Lock body scroll when menu is open
  useEffect(() => {
    const lenis = getLenis();
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      variants={LOGO_WRAPPER_VARIANTS}
      initial="center"
      animate={transition ? "topLeft" : "center"}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      style={{ y: springY }}
      className="z-40 flex items-center justify-center "
    >
      <div className="relative max-w-7xl size-full">

        {transition ? (
          <motion.div
            onClick={() => push("/")}
            layoutId="logo"
            className="absolute cursor-pointer z-30 left-5"
            animate={{
              top: 32,
            }}
          >
            <Logo size="sm" />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => push("/")}
            layoutId="logo"
            className="absolute cursor-pointer z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo size={isMobile ? "lg" : "xl"} draw />
          </motion.div>
        )}

        <motion.div
          initial={{
            top: 28,
            right: -43,
            opacity: 0,
          }}
          animate={
            transition
              ? { top: 28, right: 20, opacity: 1 }
              : { top: 28, right: -43, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="absolute z-50 flex items-center gap-x-4"
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="h-8 w-8 rounded-full bg-black/5 hover:bg-black/10 cursor-pointer transition-colors flex items-center justify-center"
          >
            <Menu size={14} />
          </button>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-99"
              />

              {/* Right-side drawer */}
              <motion.div
                key="drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                className="fixed top-0 right-0 h-full w-full sm:w-80 z-100 bg-white/50 backdrop-blur-2xl shadow-xl flex flex-col"
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.06]">
                  <span className="font-newsreader italic text-lg font-light text-gray-500">Menu</span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="h-8 w-8 rounded-full bg-black hover:bg-neutral-800 flex items-center justify-center text-white transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col flex-1 px-4 py-6 gap-1 overflow-y-auto">
                  {routes.map((item, i) => (
                    <motion.button
                      key={item.link}
                      onClick={() => { setMenuOpen(false); push(item.link); }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl text-gray-800 hover:bg-black/5 transition-colors text-left w-full"
                    >
                      <span className="font-dm-sans text-base font-medium">{item.label}</span>
                      <ArrowRight size={14} className="text-neutral-300  group-hover:text-neutral-700 group-hover:translate-x-1 transition-all duration-200" />
                    </motion.button>
                  ))}
                </nav>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-black/[0.06]">
                  <span className="flex items-center gap-2 text-gray-400 font-dm-sans text-xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    Available for new projects
                  </span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
