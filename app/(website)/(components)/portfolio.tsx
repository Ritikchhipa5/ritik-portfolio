"use client";
import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const portfolio = [
  {
    image: IMAGES.portfolio[1].src,
    title: "Kali – Step-Tracking Rewards Mobile App",
  },
  { image: IMAGES.portfolio[2].src, title: "Sortcoder Web app" },
  { image: IMAGES.portfolio[3].src, title: "Mailforest Brandkit " },
  { image: IMAGES.portfolio[4].src, title: "MIMIR:Visualize Your Crypto" },
];
function Portfolio() {
  const { push } = useRouter();
  return (
    <div
      id="portfolio"
      className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto "
    >
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.map((item, index) => (
          <PortfolioCard
            title={item.title}
            image={item.image}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => push("/portfolio")}
          size="xl"
          className="group my-10 rounded-full"
        >
          <LucideArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 scale-110" />
          <span className="text-base"> See All Works</span>
        </Button>
      </div>
    </div>
  );
}

export default Portfolio;
