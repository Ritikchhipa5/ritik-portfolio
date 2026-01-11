import { getTopPortfolios } from "@/api/portfolio";
import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import CustomButton from "@/components/custom-btn";
import Link from "next/link";

async function Portfolio() {
  const portfolios = await getTopPortfolios();

  return (
    <div
      id="portfolio"
      className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto "
    >
      <SectionHeading primaryHeading="Portfolio" secondHeading="Best Works" />
      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios?.map((item: any, index: number) => (
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
        <Link href="/portfolio">
          <CustomButton label="See All Works" className="mt-10" />
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
