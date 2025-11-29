import SectionHeading from "@/app/(website)/(components)/section-heading";
import { IMAGES } from "@/assets/images";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const portfolio = [
  {
    image: IMAGES.portfolio[1].src,
    title: "Kali – Step-Tracking Rewards Mobile App",
  },
  { image: IMAGES.portfolio[2].src, title: "Sortcoder Web app" },
  { image: IMAGES.portfolio[3].src, title: "Mailforest Brandkit " },
  { image: IMAGES.portfolio[4].src, title: "MIMIR:Visualize Your Crypto" },
];
function Portfolio() {
  return (
    <div className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto ">
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.map((item, index) => (
          <PortfolioCard
            title={item.title}
            image={item.image}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

// const PortfolioCard = ({ index, image }: { index: number; image: string }) => {
//   return (
//     <div
//       className=" bg-[#E9E9E9] overflow-hidden rounded-3xl  relative aspect-580/450 flex flex-col justify-between shadow-sm
//     "
//     >
//       <div className="p-6 z-10 ">
//         <h3 className="text-xl font-dm-sans">Portfolio {index + 1}</h3>
//         <p className="text-sm mt-1 max-w-sm opacity-70 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//         </p>
//       </div>

//       {/* Arrow Button */}
//       <div
//         className=" absolute  top-4  right-4   bg-white  h-10 w-10  rounded-full  flex items-center justify-center  shadow-md
//       "
//       >
//         <ArrowUpRight size={16} />
//       </div>
//       <Image
//         width={1000}
//         height={1000}
//         alt={image}
//         src={image}
//         className=" absolute h-full w-full"
//       />
//     </div>
//   );
// };

export const PortfolioCard = ({
  index,
  image,
  title,
}: {
  index: number;
  image: string;
  title: string;
}) => {
  return (
    <Card
      className="
        relative aspect-580/450 overflow-hidden rounded-3xl border-0 
        bg-muted/40 shadow-sm 
        transition-all duration-300 
        hover:-translate-y-1 hover:shadow-xl
        group
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`Portfolio ${index + 1}`}
          fill
          className="
            object-cover 
            transition-transform duration-500 
            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/5  to-black" />
      </div>

      <CardContent
        className="
          relative z-10 py-6 flex h-full flex-col justify-between 
          p-6
        "
      >
        {/* Top row: Badge + Arrow */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Case Study #{index + 1}</span>
          </div>

          <button
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-full 
              bg-white/90 text-neutral-900 
              shadow-md backdrop-blur 
              transition-all duration-300 
              hover:bg-white hover:shadow-lg hover:-translate-y-0.5
            "
            type="button"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Bottom text */}
        <div className="mt-auto pt-6">
          <h3 className="text-lg capitalize sm:text-xl font-dm-sans text-white tracking-tight">
            {title}
          </h3>
          <p className="mt-2 max-w-sm text-xs font-inter font-light sm:text-sm text-white/75 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            exercitationem et architecto tenetur.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
