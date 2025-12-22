"use client";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constant";
import { ArrowUp, ArrowUpRight, LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomButton from "@/components/custom-btn";

function Footer() {
  const { push } = useRouter();
  return (
    <footer className="w-full  relative bg-white pt-16 ">
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-top opacity-90"
        style={{
          backgroundImage: `url(${IMAGES.ellipse_footer.src})`,
        }}
      />
      {/* Navigation */}
      <div className="z-10 relative overflow-hidden">
        <div className="max-w-7xl px-4 mx-auto  ">
          <div className="w-full text-center space-y-4 ">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{
                once: true,
              }}
              className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal"
            >
              Let’s make it happen
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
              }}
              className="  font-inter mx-auto max-w-lg w-full  text-gray-900 tracking-tight italic font-light"
            >
              always open to new opportunities, collaborations, and creative
              challenges. Let&apos;s work together to bring your ideas to life
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{
                once: true,
              }}
              className="flex justify-center my-10"
            >
              <CustomButton
                onClick={() => push("/contact")}
                label="Get Touch"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{
              once: true,
            }}
            className="flex mb-16 gap-10 md:flex-row flex-col items-center justify-between"
          >
            <nav className="flex gap-8 flex-wrap justify-center    text-sm font-dm-sans text-gray-700 ">
              {routes.map((route, index) => (
                <Link
                  key={index}
                  href={route.link}
                  className="hover:text-lime-500 hover:underline delay-100 ease-in-out transition "
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs font-dm-sans text-black/50">
              {new Date().getFullYear()} Ritik Chhipa. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{
          once: true,
        }}
        className=" block font-newsreader text-center bottom-0 relative   italic  text-[14vw]  leading-[0.9]  text-black  font-light
    "
      >
        Ritik Chhipa
      </motion.h1>
    </footer>
  );
}

export default Footer;
