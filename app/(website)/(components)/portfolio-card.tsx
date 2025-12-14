import { PortfolioModal } from "@/app/(website)/(components)/portfolio-modal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const PortfolioCard = ({
  index,
  images,
  title,
  description,
  tags,
}: {
  index: number;
  images: any[];
  tags: string[];
  title: string;
  description: string;
}) => {
  const [active, setActive] = useState<any>(null);

  return (
    <>
      <Card
        onClick={() =>
          setActive({
            index,
            images,
            title,
            description,
            tags,
          })
        }
        className="
        relative shadow-none  aspect-540/450 lg:aspect-580/450 gap-2 overflow-hidden border rounded-3xl 
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
            src={images?.[0]?.asset?.url}
            alt={`Portfolio ${index + 1}`}
            fill
            className="object-cover  inverted-radius  "
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
          <div className=" space-y-2  p-2 px-4 bg-white font-dm-sans text-left">
            <div className="gap-2 mt-2 mb-4 flex">
              {tags?.slice(0, 4)?.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="   font-dm-sans font-normal text-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-md line-clamp-1 capitalize font-normal  sm:text-xl text-black ">
              {title}
            </h3>
            <p className="  line-clamp-2  text-xs font-inter font-light sm:text-sm text-black leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>

      {active && (
        <PortfolioModal
          open={!!active}
          onClose={() => setActive(null)}
          title={active.title}
          description={active.description}
          tags={active.tags}
          images={active.images}
        />
      )}
    </>
  );
};
