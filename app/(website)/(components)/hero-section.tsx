import { IMAGES } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="  relative  w-full bg-[#EAFECF]   ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url(${IMAGES.ellipse.src})`,
        }}
      />
      <div className="max-w-7xl relative mx-auto w-full flex flex-col min-h-dvh ">
        {/* Headline Section */}
        <div className="relative z-10 top-5 flex pt-10 flex-col items-center justify-end grow px-4">
          <Headline />
        </div>
        {/* Image at Bottom */}
        {/* <div className="relative z-30 w-full flex justify-center"> */}
        <Image
          src={IMAGES.ritik_full.src}
          width={600}
          height={600}
          alt="Ritik"
          className=" z-8 md:h-[70vh] object-contain w-auto"
        />
        <Magnetic>
          <div className="flex z-10 absolute scale-75 sm:scale-100 left-10 md:left-1/5 md:bottom-[40%] bottom-[20%] items-center gap-3 bg-white rounded-full px-4 py-2 mb-12">
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-inter text-sm font-medium">
              Available for new projects
            </span>
          </div>
        </Magnetic>
        <div className="absolute z-10 hidden sm:block right-4 md:right-10 font-inter font-normal bottom-[40%]      max-w-[300px] text-gray-900 text-sm  ">
          Creates and implements digital solutions, transforming concepts into
          functional technology
        </div>
        {/* </div> */}
        <BottomSection />
      </div>
      <Image
        src={IMAGES.faded_white.src}
        width={600}
        height={600}
        alt="Ritik"
        className=" z-10 absolute  left-0 right-0 bottom-0 w-full  object-contain "
      />
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
    <div className="flex md:flex-row px-4  z-20  absolute bottom-0 w-full max-w-7xl  items-center justify-center md:justify-between flex-1 mb-10">
      <div className="hidden md:flex flex-col items-start justify-center">
        {/* Bottom Left - Social Proof */}
        <div className="flex items-center gap-4 ">
          <div className="flex -space-x-3">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
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

      <Button size="xl" className="group my-10 rounded-full">
        <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
        <span className="text-base"> Get Touch</span>
      </Button>
    </div>
  );
};
