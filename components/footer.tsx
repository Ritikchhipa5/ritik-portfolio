import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";

function Footer() {
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

            <p className=" text-lg font-inter mx-auto max-w-xl w-full  text-gray-900 tracking-tight italic font-light">
              always open to new opportunities, collaborations, and creative
              challenges. Let's work together to bring your ideas to life
            </p>

            <Button size="xl" className="group my-10 rounded-full">
              <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
              <span className="text-base"> Get Touch</span>
            </Button>
          </div>
          <div className="flex mb-16 gap-10 md:flex-row flex-col items-center justify-between">
            <nav className="flex gap-10    text-sm font-dm-sans text-gray-700 ">
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
      </div>
      <h1
        className=" font-newsreader text-center bottom-0 relative   italic  text-[14vw]  leading-[0.9]  text-black  font-light
    "
      >
        Ritik Chhipa
      </h1>
    </footer>
  );
}

export default Footer;
