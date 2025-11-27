import React from "react";

function SectionHeading({
  primaryHeading,
  secondHeading,
}: {
  primaryHeading: string;
  secondHeading: string;
}) {
  return (
    <div>
      <h4 className="text-3xl relative z-10 font-newsreader italic text-center font-extralight">
        {primaryHeading}
      </h4>
      <h1 className="text-center font-newsreader mt-6 text-5xl italic font-light">
        {secondHeading}
      </h1>
    </div>
  );
}

export default SectionHeading;
