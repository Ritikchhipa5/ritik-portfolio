import { cn } from "@/lib/utils";
import Image from "next/image";

export const TechnologyBadge = ({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative h-full hover:bg-lime-400/10 cursor-pointer overflow-hidden rounded-full border p-2 transition-colors duration-200"
      )}
    >
      <div className="flex flex-row items-center gap-2 p-1 px-2">
        <Image
          className="w-6 h-6 object-contain"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <p className="text-sm font-medium text-muted-foreground tracking-wider font-dm-sans">
          {name}
        </p>
      </div>
    </a>
  );
};
