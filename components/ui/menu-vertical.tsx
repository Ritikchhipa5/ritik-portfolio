"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

type MenuItem = {
  label: string;
  link: string;
};

interface MenuVerticalProps {
  handleClick: (link: string) => void;
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  handleClick,
  menuItems = [],
  color = "#101828",
  skew = 0,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-fit flex-col gap-4 px-10">
      {menuItems.map((item, index) => (
        <motion.div
          onClick={() => {
            handleClick(item.link);
          }}
          key={`${item.link}-${index}`}
          // className="group/nav flex items-center gap-2 cursor-pointer text-zinc-900 dark:text-zinc-50 "
          className="text-4xl inline-flex hover:bg-white/40 border-transparent border-2 hover:border-white py-3 rounded-full px-10 items-center text-gray-900 z-10 font-dm-sans hover:translate-x-3 transition"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={2} className="size-10" />
          </motion.div>

          <motion.div
            variants={{
              initial: { x: -40, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-medium font-dm-sans text-4xl no-underline"
          >
            {item.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
