"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import Image from "next/image";

import BlogList from "@/app/(website)/(components)/blog/blog-list";
import { useEffect, useState } from "react";
import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import { getPortfolios } from "@/api/portfolio";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const data = await getPortfolios();
      setPortfolios(data);
    })();
  }, []);

  return (
    <>
      <div className="relative w-full  z-30    py-20  overflow-hidden">
        <Image
          src={IMAGES.faded_white.src}
          width={1600}
          height={1600}
          alt="Ritik"
          className=" z-10 absolute left-0 right-0 bottom-0 w-full h-[280px]"
        />
        {/* BG gradient */}
        <div className="absolute inset-0 opacity-80 bg-[url('/ellipse.png')] bg-cover bg-center" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 text-center">
          {/* Headline */}
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-newsreader italic font-extralight"
          >
            Portfolio
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl mt-4 font-newsreader italic font-light"
          >
            Best Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-gray-700 font-dm-sans max-w-xl mx-auto"
          >
            Here are some of my best projects, Take <br /> a look at what I’ve
            built
          </motion.p>

          {/* Social Cards */}
          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-6">
            {portfolios.map((item: any, index) => (
              <PortfolioCard
                title={item.title}
                description={item.description}
                images={item.images}
                tags={item.tags}
                index={index}
                key={index}
              />
            ))}
          </div>
          <BlogList />
        </div>
      </div>
    </>
  );
}
