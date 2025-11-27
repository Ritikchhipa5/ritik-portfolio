"use client";

import Image from "next/image";
import { IMAGES } from "@/assets/images";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#EAFECF]">
      <Header />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.ellipse.src})`,
        }}
      />

      <div className="relative z-10 max-w-7xl   mx-auto px-6 h-screen  items-center">
        {/* Headline */}
        <div className="absolute top-32 z-10 left-0 right-0  text-center">
          <h1 className="text-6xl md:text-7xl font-dm-sans  font-normal">
            Hi I’m Ritik
          </h1>

          <h2 className="md:text-8xl text-6xl font-newsreader italic font-light ">
            Software developer
          </h2>
        </div>

        {/* Center Section - Photo */}
        <div className="w-full  relative flex z-0 items-end h-full">
          <div className="flex z-10 justify-between flex-1 mb-10">
            <div className="flex flex-col items-start justify-center">
              {/* Available Badge */}
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-12">
                <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                <span className="text-gray-700 text-sm font-medium">
                  Availble for new projects
                </span>
              </div>

              {/* Bottom Left - Social Proof */}
              <div className="flex items-center gap-4 ">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500"></div>
                </div>
                <div className="text-sm text-gray-900">
                  <p className="font-semibold">Trusted by over</p>
                  <p className="font-semibold">50+ happy clients</p>
                </div>
              </div>
            </div>
            <Button className="rounded-full py-6">
              <div className="mx-4 flex items-center gap-2">
                <LucideArrowRight /> Get on touch
              </div>
            </Button>
          </div>
          <Image
            src={IMAGES.ritik_full.src}
            width={1000}
            height={1000}
            alt="Ritik"
            className=" object-bottom object-contain absolute w-full h-[75vh] left-0 right-0 bottom-0  "
          />
        </div>
      </div>
    </div>
  );
}
