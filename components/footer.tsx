import { IMAGES } from "@/assets/images";
import { LucideArrowRight } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full relative bg-white pt-16 ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url(${IMAGES.ellipse.src})`,
        }}
      />
      {/* Navigation */}
      <div className="z-10 relative overflow-hidden">
        <div className="max-w-7xl px-6 mx-auto space-y-10 ">
          <div className="w-full text-center space-y-4 ">
            <h1 className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal">
              Let’s make it happen
            </h1>

            <p className=" text-lg font-inter mx-auto max-w-xl w-full  text-gray-900 tracking-tight italic font-light">
              always open to new opportunities, collaborations, and creative
              challenges. Let's work together to bring your ideas to life
            </p>
            <div className="rounded-full mt-10 bg-black inline-block text-white font-dm-sans py-3 px-6 ">
              <div className=" flex items-center gap-2 capitalize">
                <LucideArrowRight size={22} /> Get touch
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <nav className="flex gap-10 py-12 text-sm font-dm-sans text-gray-700 mb-10">
              <a href="#" className="hover:text-black">
                Home
              </a>
              <a href="#" className="hover:text-black">
                About
              </a>
              <a href="#" className="hover:text-black">
                Portfolio
              </a>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </nav>
            <p className="text-xs font-dm-sans text-black/50">
              {new Date().getFullYear()} Ritik Chhipa. All rights reserved.
            </p>
          </div>
        </div>

        {/* Big Name */}
        <h1
          className=" font-newsreader text-center -bottom-[20px] relative   italic  text-[16vw]  leading-[0.9]  text-black  font-light
    "
        >
          Ritik Chhipa
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
