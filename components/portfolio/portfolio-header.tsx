"use client";

import { motion } from "framer-motion";
function PortfolioHeader() {
  return (
    <>
      <motion.h4
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-newsreader italic font-extralight"
      >
        Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl mt-4 font-newsreader italic font-light"
      >
        Best Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-gray-700 font-dm-sans max-w-xl mx-auto"
      >
        Here are some of my best projects, Take <br /> a look at what I’ve built
      </motion.p>
    </>
  );
}

export default PortfolioHeader;
