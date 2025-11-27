import React from "react";

function MyGoal() {
  return (
    <div className="relative py-16 my-16 max-w-7xl mx-auto ">
      {/* Floating left badges */}
      <div
        className="
        z-1
      absolute 
      left-0 
      top-1/2 
      -translate-y-1/2 
     
      space-y-10 
      md:space-y-14
    "
      >
        <div className="rotate-[10deg]">
          <Badge />
        </div>
        <div className="rotate-[14deg]">
          <Badge />
        </div>
        <div className="rotate-[-6deg]">
          <Badge />
        </div>
      </div>

      {/* Floating right badges */}
      <div
        className="
          z-1
      absolute 
      right-0 
      top-1/2 
      -translate-y-1/2 
      space-y-10 
      md:space-y-16
    "
      >
        <div className="rotate-[-4deg]">
          <Badge />
        </div>
        <div className="rotate-[7deg]">
          <Badge />
        </div>
        <div className="rotate-[-15deg]">
          <Badge />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl relative z-10 font-newsreader italic text-center font-extralight">
        My Goal!
      </h2>

      {/* Paragraph */}
      <p className="text-center px-10 relative z-10 max-w-5xl mx-auto font-dm-sans font-light leading-[1.4] text-3xl sm:text-4xl md:text-5xl mt-6">
        Whereas disregard rights have rights resulted Whereas disregard and
        contempt for disregard and contempt for human rights have resulted.
      </p>
    </div>
  );
}

export default MyGoal;

const Badge = () => {
  return (
    <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center gap-2">
      <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
      <span className="text-sm font-light">new projects</span>
    </div>
  );
};
