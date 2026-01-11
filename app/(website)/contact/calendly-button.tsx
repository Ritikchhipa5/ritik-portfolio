"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomButton from "@/components/custom-btn";
import { Calendar } from "lucide-react";

function CalendlyButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://calendly.com/ritikchhipa5");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-14 flex justify-center"
    >
      <CustomButton icon={Calendar} onClick={handleClick} label="Book Call" />
    </motion.div>
  );
}

export default CalendlyButton;
