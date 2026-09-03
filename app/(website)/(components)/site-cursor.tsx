"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Cursor } from "@/components/ui/cursor";

export default function SiteCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    document.documentElement.classList.add("cursor-none-all");

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.documentElement.classList.remove("cursor-none-all");
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Cursor
      springConfig={{ stiffness: 280, damping: 22, mass: 0.2 }}
      className="z-[9999]"
    >
      <motion.div
        animate={{ scale: isPressed ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="h-4 w-4 rounded-full bg-black shadow-[0_0_0_1.5px_rgba(255,255,255,0.9)]"
      />
    </Cursor>
  );
}
