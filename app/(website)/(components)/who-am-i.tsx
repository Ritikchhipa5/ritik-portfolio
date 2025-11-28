import SectionHeading from "@/app/(website)/(components)/section-heading";
import { IMAGES } from "@/assets/images";
import Image from "next/image";

function WhoAmI() {
  return (
    <div className="relative md:py-20 py-10 md:my-20 my-10 px-4 max-w-7xl mx-auto ">
      <SectionHeading
        primaryHeading="Who am I?"
        secondHeading="Let me introduce myself"
      />

      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left — Image box */}
        <div>
          <div className="  bg-black hover:bg-[#83EC00]/80 rounded-3xl  overflow-hidden  shadow-xl  transform  -rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out  ">
            <Image
              width={1000}
              height={1000}
              src={IMAGES.ritik_full.src}
              className="rounded-3xl aspect-square w-full object-contain px-10 pt-10"
              alt="Ritik"
            />
          </div>

          {/* Social + Name */}
          <div className="flex justify-between items-end mt-6 px-2">
            {/* Social icons */}
            <div className="flex items-center gap-4 text-2xl">
              <a href="#" className="hover:opacity-70">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:opacity-70">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            {/* Name */}
            <div className="text-right">
              <p className="font-dm-sans text-xl">Ritik Chhipa</p>
              <p className="text-sm opacity-60">Software developer 🧑‍💻</p>
            </div>
          </div>
        </div>

        {/* Right — Text + Experience */}
        <div>
          {/* Paragraph */}
          <p className="font-dm-sans font-light leading-relaxed mb-10">
            I’m a{" "}
            <span className="font-semibold underline">
              full-stack developer
            </span>{" "}
            who loves turning ideas into fast, functional, and user-friendly
            digital products. I build{" "}
            <span className="font-semibold underline ">
              mobile apps, websites, backend systems, and complete end-to-end
              solutions
            </span>
            . I’ve worked across multiple tech stacks, helping startups and
            clients bring their ideas to life with clean code, smart
            architecture, and a strong focus on problem-solving.
          </p>

          {/* Experience list */}
          <div className="space-y-6">
            {[
              {
                company: "Requin Solutions",
                role: "Web Developer",
                year: "2021",
              },
              {
                company: "Ramlogics Technosoft",
                role: "Full-stack/Blockchain",
                year: "2023",
              },
              {
                company: "ThernLoven",
                role: "Web3 Full Stack and Mobile",
                year: "2023",
              },
              {
                company: "EPICVision",
                role: "Lead Developer",
                year: "2025-Present",
              },
            ].map((exp, index) => (
              <ExperienceRow {...exp} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceRow = ({
  role,
  company,
  year,
}: {
  role: string;
  company: string;
  year: string;
}) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 font-dm-sans items-center capitalize border-b pb-2">
      <p className="text-sm md:text-base opacity-70 capitalize">
        <span>{company}</span>
        <div className="opacity-40 text-xs">{role}</div>
      </p>
      <p className="text-sm  hidden md:block md:text-base opacity-40 text-right">
        {role}
      </p>
      <p className="text-sm md:text-base text-right">{year}</p>
    </div>
  );
};

export default WhoAmI;
