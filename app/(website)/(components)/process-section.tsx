import { Code, PenTool, Rocket, Search } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { IMAGES } from "@/assets/images";
import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import { TechnologyBadge } from "@/app/(website)/(components)/technology-badge";
import {
  firstRow,
  secondRow,
  thirdRow,
} from "@/app/(website)/(components)/technology-section";

const features = [
  {
    Icon: Search,
    name: "Discover",
    description: "Understanding your idea, goals, and project needs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className=" absolute mask-[linear-gradient(to_top,transparent_40%,#000_80%)] h-full  bottom-0  pt-4  flex w-full flex-col   items-center justify-start overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s] ">
          {firstRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:80s] ">
          {thirdRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    Icon: PenTool,
    name: "Design",
    description: "Crafting clean, intuitive UI/UX that fits your product.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute bottom-4 h-full  w-full flex items-center  border-none mask-[linear-gradient(to_top,transparent_10%,#000_60%)] md:mask-[linear-gradient(to_top,transparent_10%,#000_80%)] transition-all duration-300 ease-out group-hover:scale-90">
        <Image
          alt="screen"
          src={IMAGES.screen.src}
          width={1000}
          height={1000}
          className="absolute  w-full h-full  object-contain"
        />
      </div>
    ),
  },
  {
    Icon: Code,
    name: "Develop",
    description: "Building fast, scalable features with modern tech.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute top-0 left-0 right-0 bottom-0 border-none mask-[linear-gradient(to_top,transparent_10%,#000_80%)] transition-all duration-300 ease-out group-hover:scale-105 ">
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles>
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.github.src}
            />
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.vscode.src}
            />{" "}
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.chatgpt.src}
            />
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse>
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.next.src}
            />{" "}
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.react.src}
            />{" "}
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.redis.src}
            />{" "}
            <Image
              width={100}
              height={100}
              alt=""
              src={IMAGES.icons.typescript.src}
            />
          </OrbitingCircles>
        </div>
      </div>
    ),
  },
  {
    Icon: Rocket,
    name: "Deliver",
    description: "Testing, launching, and supporting your final product.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute top-4 right-2 h-[350px] w-full  border-none mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        <Globe />
      </div>
    ),
  },
];

export function ProcessSection() {
  return (
    <div className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto ">
      <SectionHeading
        primaryHeading="Project Workflow"
        secondHeading="How I build products"
      />

      <BentoGrid className="mt-12">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
