"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <div>
      <Badge
        onClick={() => router.back()}
        variant="outline"
        className="font-inter cursor-pointer font-light"
      >
        <ArrowLeft />
        Back
      </Badge>
    </div>
  );
}
