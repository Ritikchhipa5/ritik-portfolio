import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
        relative shadow-none aspect-580/450 gap-2 overflow-hidden border rounded-3xl 
        bg-white 
        transition-all duration-300 
        hover:-translate-y-1
        group
        py-0
        p-2
      "
    >
      <div className="p-2 rounded-xl overflow-hidden  h-full relative">
        <Image
          src={image}
          alt={`Portfolio ${index + 1}`}
          fill
          className="object-cover  inverted-radius "
        />
        <div className="absolute inset-0 rounded-[20px] bg-linear-to-tl bottom-0 right-0 top-0 left-0 from-white/0   to-black/50 from-10%" />
        <button
          className="
            absolute bottom-0  right-2.5 
            h-14 w-14 rounded-full 
            bg-black text-white 
            flex items-center scale-90 justify-center
             group-hover:scale-95 transition
          "
        >
          <ArrowUpRight size={26} />
        </button>
      </div>
      <CardContent
        className="
          relative z-10 flex  flex-col justify-between p-0 "
      >
        <div className="  p-2 bg-white font-dm-sans text-left">
          <h3 className="text-md capitalize font-normal  sm:text-xl text-black ">
            {title}
          </h3>
          <p className=" mt-1  text-xs font-inter font-light sm:text-sm text-black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            exercitationem et architecto tenetur.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
