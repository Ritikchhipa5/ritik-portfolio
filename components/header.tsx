"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";

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
            layoutId="logo"
            className="absolute z-110 left-5"
            animate={{
              top: 32,
            }}
          >
            <Logo size="sm" />
          </motion.div>
        ) : (
          <motion.div
            layoutId="logo"
            className="absolute z-110 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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
              ? {
                  top: 28,
                  right: 20,
                  opacity: 1,
                }
              : {
                  top: 28,
                  right: -43,
                  opacity: 0,
                }
          }
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="absolute z-110 flex items-center gap-x-4"
        >
          {/* Right Menu Icon */}
          <button className="p-2 cursor-pointer rounded-full bg-black/5 transition">
            <Menu size={18} />
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
