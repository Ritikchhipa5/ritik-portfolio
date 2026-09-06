"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import CustomButton from "@/components/custom-btn";
import { Logo } from "@/components/logo";
import { routes } from "@/lib/constant";
import { useHoverSound } from "@/hooks/use-hover-sound";

const NAV_NOTE_SCALE = [523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77];

export default function NotFound() {
  const { push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const playHoverTune = useHoverSound({ frequency: 720, duration: 0.09, volume: 0.05 });

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white overflow-hidden">
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6">
        <Link href="/" aria-label="Ritik Chhipa — Home">
          <Logo size="sm" />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseEnter={() => playHoverTune()}
          aria-label="Open menu"
          className="h-8 w-8 rounded-full bg-black/5 hover:bg-black/10 cursor-pointer transition-colors flex items-center justify-center"
        >
          <Menu size={14} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-99"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 z-100 bg-white/50 backdrop-blur-2xl shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.06]">
                <span className="font-newsreader italic text-lg font-light text-gray-500">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => playHoverTune()}
                  className="h-8 w-8 rounded-full bg-black hover:bg-neutral-800 flex items-center justify-center text-white transition-colors"
                >
                  <X size={13} />
                </button>
              </div>

              <nav className="flex flex-col flex-1 px-4 py-6 gap-1 overflow-y-auto">
                {routes.map((item, i) => (
                  <motion.button
                    key={item.link}
                    onClick={() => {
                      setMenuOpen(false);
                      push(item.link);
                    }}
                    onMouseEnter={() =>
                      playHoverTune(NAV_NOTE_SCALE[i % NAV_NOTE_SCALE.length])
                    }
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.06,
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl text-gray-800 hover:bg-black/5 transition-colors text-left w-full"
                  >
                    <span className="font-dm-sans text-base font-medium">
                      {item.label}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-neutral-300 group-hover:text-neutral-700 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-newsreader italic text-[28vw] sm:text-[16vw] leading-none text-black font-light"
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-900 font-dm-sans font-normal"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 font-inter max-w-md text-gray-900 tracking-tight italic font-light"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Try one of these instead:
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-dm-sans text-gray-700"
        >
          {routes
            .filter((route) => route.link !== "/")
            .map((route, index) => (
              <Link
                key={index}
                href={route.link}
                className="hover:text-lime-500 hover:underline transition"
              >
                {route.label}
              </Link>
            ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10"
        >
          <CustomButton onClick={() => push("/")} label="Back to Home" />
        </motion.div>
      </main>
    </div>
  );
}
