import { cn } from "@/lib/utils";
import Image from "next/image";

export const TechnologyBadge = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 hover:bg-lime-400/10 cursor-pointer overflow-hidden rounded-full border p-2"
      )}
    >
      <div className="flex flex-row items-center gap-2 p-1 ">
        <Image
          className="w-6 h-6 object-contain"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-muted-foreground tracking-wider  font-dm-sans">
            {" "}
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};
