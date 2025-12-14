"use client";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  icon,
}: CustomButtonProps) {
  const Icon = icon || ArrowUpRight;
  return (
    <Button
      onClick={onClick}
      size="xl"
      className={cn(
        `
        group rounded-full
        flex items-center gap-3
        bg-black text-white
        border border-black/10
        transition-all duration-300 ease-out
        hover:bg-white hover:text-black
        `,
        className
      )}
    >
      <span className="text-base capitalize font-normal  font-dm-sans tracking-wide">
        {label}
      </span>

      <span
        className="
          -mr-2 flex items-center justify-center
          rounded-full bg-white text-black
          p-2
          transition-all duration-300 ease-out
          group-hover:bg-black group-hover:text-white
          group-hover:scale-110
        "
      >
        <Icon className="h-4 w-4" />
      </span>
    </Button>
  );
}
