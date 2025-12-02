"use client";
import { getPortfolios, getTopPortfolios } from "@/api/portfolio";
import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Portfolio() {
  const { push } = useRouter();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTopPortfolios();
      setPortfolios(data);
    })();
  }, []);

  return (
    <div
      id="portfolio"
      className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto "
    >
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios.map((item: any, index) => (
          <PortfolioCard
            title={item.title}
            description={item?.description}
            tags={item?.tags}
            images={item.images}
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
