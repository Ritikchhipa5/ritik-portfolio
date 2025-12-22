"use client";

import { motion } from "framer-motion";

function SectionHeading({
  primaryHeading,
  secondHeading,
  paragraph,
}: {
  primaryHeading: string;
  secondHeading: string;
  paragraph?: string;
}) {
  return (
    <div className=" capitalize">
      <motion.h4
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{
          once: true,
        }}
        className="text-3xl relative z-10 font-newsreader italic text-center font-extralight"
      >
        {primaryHeading}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
        }}
        className="text-center font-newsreader mt-6 text-5xl italic font-light"
      >
        {secondHeading}
      </motion.h2>

      {paragraph && (
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{
            once: true,
          }}
          className="mt-6 text-gray-700 font-dm-sans max-w-xl mx-auto"
        >
          {paragraph}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;
