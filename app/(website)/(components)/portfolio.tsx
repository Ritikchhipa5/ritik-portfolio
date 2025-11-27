import SectionHeading from "@/app/(website)/(components)/section-heading";
import { ArrowUpRight } from "lucide-react";
import React from "react";

function Portfolio() {
  return (
    <div className="relative py-16 my-16 max-w-7xl mx-auto ">
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-4">
        {new Array(4)
          .fill(2) // Create an array with 6 undefined elements
          .map((_, index) => (
            <PortfolioCard index={index} key={index} />
          ))}
      </div>
    </div>
  );
}

const PortfolioCard = ({ index }: { index: number }) => {
  return (
    <div
      className="  bg-[#E9E9E9] rounded-3xl p-6 relative aspect-580/450 flex flex-col justify-between shadow-sm
    "
    >
      <div>
        <h3 className="text-xl font-dm-sans">Portfolio {index + 1}</h3>
        <p className="text-sm mt-1 max-w-sm opacity-70 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      {/* Arrow Button */}
      <div
        className=" absolute  top-4  right-4   bg-white  h-10 w-10  rounded-full  flex items-center justify-center  shadow-md
      "
      >
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
};

export default Portfolio;
