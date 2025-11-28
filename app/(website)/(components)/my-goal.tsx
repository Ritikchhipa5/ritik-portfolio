import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

function MyGoal() {
  const TEXT =
    "Empowering brands and startups by turning ideas into sleek, high-performing products backed by clean code and robust architecture.";

  return (
    <div className="relative py-20 md:my-20 my-10 max-w-7xl mx-auto">
      {/* LEFT BADGES */}
      <div
        className="
      absolute inset-x-0 top-2
      flex justify-center space-x-4
      sm:space-x-6
      md:space-x-10

      xl:inset-auto
      xl:left-4
      xl:top-1/2
      xl:-translate-y-1/2
      xl:flex-col
      xl:justify-start
      xl:space-x-0
      xl:space-y-10
    "
      >
        <div className=" scale-95  xl:scale-100 rotate-3 xl:rotate-10">
          <Badge index={1} label={"Product Design"} />
        </div>
        <div className="scale-95 xl:scale-100 rotate-1 xl:rotate-14 hidden sm:block xl:block">
          <Badge index={2} label="Website" />
        </div>
        <div className="scale-95 xl:scale-100 -rotate-2 xl:-rotate-6  block xl:block">
          <Badge index={3} label="Backend" />
        </div>
      </div>

      {/* RIGHT BADGES */}
      <div
        className="
      absolute inset-x-0 bottom-6
      flex justify-center space-x-4
      sm:space-x-6
      md:space-x-10

      xl:inset-auto
      xl:right-4
      xl:top-1/2
      xl:-translate-y-1/2
      xl:flex-col
      xl:justify-start
      xl:space-x-0
      xl:space-y-10
    "
      >
        <div className="scale-95  xl:scale-100 rotate-2 xl:rotate-[7deg]">
          <Badge index={4} label="SaaS" />
        </div>
        <div className="scale-95  xl:scale-100 -rotate-1 xl:rotate-12 hidden sm:block xl:block">
          <Badge index={5} label="Mobile App" />
        </div>
        <div className="scale-95  xl:scale-100 -rotate-3 xl:-rotate-15 hidden md:block xl:block">
          <Badge index={6} label="UI/UX" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl relative z-10 font-newsreader italic text-center font-extralight">
        My Goal!
      </h2>

      {/* Animated text */}
      <div className="relative z-10 font-dm-sans text-center font-light leading-[1.4] text-3xl sm:text-4xl md:text-5xl max-w-5xl mx-auto mt-4">
        <SplittingText
          text={TEXT}
          aria-hidden="true"
          className="block text-neutral-200 px-8 sm:px-10 dark:text-neutral-800"
          disableAnimation
        />
        <SplittingText
          text={TEXT}
          className="block absolute inset-0 px-8 sm:px-10"
          type="chars"
          inView
          color=""
          initial={{ y: 0, opacity: 0, x: 0, filter: "blur(2px)" }}
          animate={{ y: 0, opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default MyGoal;

const Badge = ({ label, index }: { label: string; index: number }) => {
  const colors: Record<number, string> = {
    1: "bg-lime-400",
    2: "bg-sky-400",
    3: "bg-orange-400",
    4: "bg-yellow-400",
    5: "bg-red-400",
    6: "bg-purple-400",
  };
  return (
    <Magnetic>
      <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center gap-2">
        <span className={cn("p-1  rounded-full", colors[index])}>
          <Zap size={14} fill="white" color="white" />
        </span>

        <span className="text-sm font-light font-dm-sans">{label}</span>
      </div>
    </Magnetic>
  );
};
