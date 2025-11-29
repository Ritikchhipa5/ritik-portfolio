"use client";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constant";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <div className="max-w-7xl px-6 mx-auto  ">
          <div className="w-full text-center space-y-4 ">
            <h1 className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal">
              Let’s make it happen
            </h1>

            <p className="  font-inter mx-auto max-w-lg w-full  text-gray-900 tracking-tight italic font-light">
              always open to new opportunities, collaborations, and creative
              challenges. Let&apos;s work together to bring your ideas to life
            </p>

            <Button
              onClick={() => push("/contact")}
              size="xl"
              className="group my-10 rounded-full"
            >
              <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
              <span className="text-base"> Get Touch</span>
            </Button>
          </div>
          <div className="flex mb-16 gap-10 md:flex-row flex-col items-center justify-between">
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
          </div>
        </div>
      </div>
      <h1
        className=" block font-newsreader text-center bottom-0 relative   italic  text-[14vw]  leading-[0.9]  text-black  font-light
    "
      >
        Ritik Chhipa
      </h1>
    </footer>
  );
}

export default Footer;
