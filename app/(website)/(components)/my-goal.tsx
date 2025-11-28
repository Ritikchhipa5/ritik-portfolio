import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";

function MyGoal() {
  const TEXT =
    "Whereas disregard rights have rights resulted Whereas disregard and contempt for disregard and contempt for human rights have resulted.";

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
          <Badge />
        </div>
        <div className="scale-95 xl:scale-100 rotate-1 xl:rotate-14 hidden sm:block xl:block">
          <Badge />
        </div>
        <div className="scale-95 xl:scale-100 -rotate-2 xl:-rotate-6  block xl:block">
          <Badge />
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
          <Badge />
        </div>
        <div className="scale-95  xl:scale-100 -rotate-1 xl:rotate-12 hidden sm:block xl:block">
          <Badge />
        </div>
        <div className="scale-95  xl:scale-100 -rotate-3 xl:-rotate-15 hidden md:block xl:block">
          <Badge />
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

const Badge = () => {
  return (
    <Magnetic>
      <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center gap-2">
        <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
        <span className="text-sm font-light">new projects</span>
      </div>
    </Magnetic>
  );
};
