"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { useState } from "react";

import { IMAGES } from "@/assets/images";
import { routes } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { MenuVertical } from "@/components/ui/menu-vertical";

const LOGO_WRAPPER_VARIANTS = {
  center: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  topLeft: {
    top: 0,
    left: 0,
    right: 0,
    bottom: "auto",
    height: "auto",
  },
};

export default function Header({ transition }: { transition: boolean }) {
  const isMobile = false;
  const { push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      variants={LOGO_WRAPPER_VARIANTS}
      initial="center"
      animate={transition ? "topLeft" : "center"}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="absolute z-40  flex items-center justify-center"
    >
      <div className="relative max-w-7xl  size-full">
        {/* Left Name */}

        {transition ? (
          <motion.div
            onClick={() => push("/")}
            layoutId="logo"
            className="absolute cursor-pointer z-110 left-5"
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
            className="absolute cursor-pointer z-110 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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
          className="absolute z-110 flex items-center gap-x-4"
        >
          {/* BUTTON WITH MENU → X ANIMATION */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative rounded-full bg-black/5 p-4 cursor-pointer"
          >
            {/* Menu Icon (rotates to cross) */}
            <motion.div
              animate={
                menuOpen
                  ? { rotate: 45, opacity: 0 }
                  : { rotate: 0, opacity: 1 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Menu size={16} />
            </motion.div>

            {/* X icon */}
            <motion.div
              animate={
                menuOpen
                  ? { rotate: 0, opacity: 1 }
                  : { rotate: -45, opacity: 0 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X size={16} />
            </motion.div>
          </button>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 z-100 bg-white items-start flex flex-col justify-center will-change-transform"
            >
              <div
                className="absolute inset-0 bg-cover bg-bottom will-change-transform"
                style={{
                  backgroundImage: `url(${IMAGES.ellipse_footer.src})`,
                }}
              />

              <div className="flex flex-col z-10 max-w-7xl items-start w-full gap-4 mx-auto">
                <MenuVertical
                  handleClick={(link) => {
                    setMenuOpen(false);
                    push(link);
                  }}
                  menuItems={routes}
                />
                {/* {routes.map((item, i) => (
                  <motion.div
                    key={i}
                    // href={`#${item.label.toLowerCase()}`}
                    onClick={() => {
                      setMenuOpen(false);
                      push(item.link);
                    }}
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="text-4xl inline-flex hover:bg-white/40 border-transparent border-2 hover:border-white py-3 rounded-full px-10 items-center text-gray-900 z-10 font-dm-sans hover:translate-x-3 transition"
                  >
                    {item.label}
                  </motion.div>
                ))} */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
