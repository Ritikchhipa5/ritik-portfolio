"use client";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
};

export default function CustomButton({
  label,
  onClick,
  className,
  icon: Icon = ArrowUpRight,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative font-dm-sans font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-black text-white",
        className
      )}
    >
      <span className="relative z-10 text-sm transition-all duration-500 whitespace-nowrap capitalize">
        {label}
      </span>
      <div className="absolute top-1 right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <Icon size={16} />
      </div>
    </button>
  );
}
