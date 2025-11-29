import { IMAGES } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const hedline =
  "Building premium, scalable products with me. Creating web, mobile, UI, and beyond—experiences that truly work.";

function HeroSection() {
  return (
    <div className="relative w-full  bg-[#EAFECF] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url(${IMAGES.ellipse.src})`,
        }}
      />

      <div className="max-w-7xl relative mx-auto w-full flex flex-col h-screen overflow-hidden pt-20 ">
        {/* Headline */}
        <div className="relative z-10 mb-6 flex flex-col items-center px-4 shrink-0">
          <Headline />
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="flex-1 relative flex items-end justify-center overflow-hidden"
        >
          <Image
            src={IMAGES.ritik_full.src}
            width={1600}
            height={1600}
            alt="Ritik"
            className="z-10 h-full w-auto object-contain object-bottom"
          />
        </motion.div>

        <MiddleSection />

        {/* MiddleSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="relative z-20 shrink-0"
        >
          <BottomSection />
        </motion.div>
      </div>
      <Image
        src={IMAGES.faded_white.src}
        width={1600}
        height={1600}
        alt="Ritik"
        className=" z-10 absolute left-0 right-0 bottom-0 w-full h-[280px]"
      />
    </div>
  );
}

export default HeroSection;

const AvailableBadge = () => {
  return (
    <div className="flex z-10 items-center gap-3 bg-white rounded-full px-4 py-2 ">
      <div className="relative">
        <div className="w-3 h-3 absolute bg-lime-400 rounded-full animate-ping"></div>
        <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
      </div>
      <span className="text-gray-700 font-dm-sans text-sm">
        Available for new projects
      </span>
    </div>
  );
};

const MiddleSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.5,
      }}
      className=" hidden md:flex px-4 absolute h-full w-full justify-between items-center"
    >
      <AvailableBadge />

      <div className=" z-10 hidden sm:block right-4 md:right-10  font-normal       max-w-[350px] text-gray-700 font-dm-sans   ">
        {hedline}
      </div>
    </motion.div>
  );
};
const Headline = () => {
  return (
    <div className="w-full text-center">
      {/* Heading 1 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-4xl md:text-6xl text-gray-900 lg:text-7xl font-dm-sans font-normal"
      >
        Hi I’m Ritik
      </motion.h1>

      {/* Heading 2 */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="text-5xl md:text-7xl mb-2 lg:text-8xl text-gray-900 tracking-tight font-newsreader italic font-extralight"
      >
        Software developer
      </motion.h2>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="md:hidden flex justify-center"
      >
        <AvailableBadge />
      </motion.div>
    </div>
  );
};

const BottomSection = () => {
  const { push } = useRouter();
  return (
    <div className="flex gap-6 mb-10 md:mb-10   flex-col-reverse  md:flex-row px-4   z-20  absolute bottom-0 w-full max-w-7xl  items-center justify-center md:justify-between flex-1">
      <div className="flex flex-col items-start justify-center">
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
          <div className="text-sm  font-dm-sans  text-gray-700">
            <p className="">Trusted by over</p>
            <p className="">
              <span className="text-gray-900 font-semibold">50+</span> happy
              clients
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={() => push("/contact")}
        size="xl"
        className="group  md:my-0 rounded-full"
      >
        <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
        <span className="text-base"> Get Touch</span>
      </Button>
      <div className="text-sm md:hidden block text-gray-700 font-dm-sans text-center max-w-xs">
        {hedline}
      </div>
    </div>
  );
};
