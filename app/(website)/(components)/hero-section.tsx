import { IMAGES } from "@/assets/images";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="min-h-dvh relative  w-full bg-[#EAFECF] flex flex-col ">
      {" "}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url(${IMAGES.ellipse.src})`,
        }}
      />
      {/* Headline Section */}
      <div className="relative z-10 top-5 flex pt-10 flex-col items-center justify-end grow px-4">
        <Headline />
      </div>
      {/* Image at Bottom */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex z-10 absolute scale-75 sm:scale-100 left-10 md:left-1/5 md:bottom-[40%] bottom-[20%] items-center gap-3 bg-white rounded-full px-4 py-2 mb-12">
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
          <span className="text-gray-700 font-inter text-sm font-medium">
            Available for new projects
          </span>
        </div>
        <div className="absolute hidden sm:block right-40 font-inter font-normal bottom-[40%]      max-w-[300px] text-gray-900 text-sm  ">
          Creates and implements digital solutions, transforming concepts into
          functional technology
        </div>
        <BottomSection />
        <Image
          src={IMAGES.ritik_full.src}
          width={600}
          height={600}
          alt="Ritik"
          className=" z-9 md:h-[70vh] object-contain w-auto"
        />
        <Image
          src={IMAGES.faded_white.src}
          width={600}
          height={600}
          alt="Ritik"
          className=" z-9 absolute  left-0 right-0 bottom-0 w-full  object-contain "
        />
      </div>
    </div>
  );
}

export default HeroSection;

const Headline = () => {
  return (
    <div className="w-full text-center ">
      <h1 className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal">
        Hi I’m Ritik
      </h1>

      <h2 className="text-5xl  md:text-7xl lg:text-8xl text-gray-900 tracking-tight font-newsreader italic font-light">
        Software developer
      </h2>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="flex md:flex-row   absolute bottom-0 w-full max-w-7xl z-10 items-center justify-center md:justify-between flex-1 mb-10">
      <div className="hidden md:flex flex-col items-start justify-center">
        {/* Available Badge */}

        {/* Bottom Left - Social Proof */}
        <div className="flex items-center gap-4 ">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500"></div>
          </div>
          <div className="text-sm  font-inter  text-gray-700">
            <p className="">Trusted by over</p>
            <p className="">
              <span className="text-gray-900 font-semibold">50+</span> happy
              clients
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-black text-white font-inter font-medium py-3 px-6 ">
        <div className=" flex items-center gap-2 capitalize">
          <LucideArrowRight size={22} /> Get touch
        </div>
      </div>
    </div>
  );
};
