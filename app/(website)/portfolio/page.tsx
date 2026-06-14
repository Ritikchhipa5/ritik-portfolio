import { IMAGES } from "@/assets/images";
import Image from "next/image";
import BlogList from "@/app/(website)/(components)/blog/blog-list";
import { PortfolioCard } from "@/app/(website)/(components)/portfolio-card";
import { getPortfolios } from "@/api/portfolio";
import PortfolioHeader from "@/components/portfolio/portfolio-header";

export const metadata = {
  title: "Portfolio — Projects by Ritik Chhipa",
  description:
    "Browse Ritik Chhipa's portfolio of AI SaaS platforms, full-stack web apps, React Native mobile apps, and UI/UX projects delivered for clients across US, UK, Canada, Singapore, and UAE.",
  alternates: { canonical: "https://www.ritikchhipa.xyz/portfolio" },
  openGraph: {
    title: "Portfolio — Projects by Ritik Chhipa",
    description:
      "AI SaaS, web, and mobile projects delivered for 50+ clients worldwide. React, Next.js, React Native, OpenAI.",
    url: "https://www.ritikchhipa.xyz/portfolio",
    type: "website",
  },
};

async function PortfolioPage() {
  const portfolios = await getPortfolios();

  return (
    <>
      <div className="relative w-full  z-30    py-20  overflow-hidden">
        <Image
          src={IMAGES.faded_white.src}
          width={1600}
          height={1600}
          alt="Ritik"
          className=" z-10 absolute left-0 right-0 bottom-0 w-full h-[280px]"
        />
        {/* BG gradient */}
        <div className="absolute inset-0 opacity-80 bg-[url('/ellipse.png')] bg-cover bg-center" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 text-center">
          {/* Headline */}
          <PortfolioHeader />

          {/* Social Cards */}
          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-6">
            {portfolios.map((item: any, index: number) => (
              <PortfolioCard
                title={item.title}
                description={item.description}
                images={item.images}
                tags={item.tags}
                index={index}
                key={index}
                siteUrl={item.siteUrl}
                caseStudySlug={item.isCaseStudy ? item.slug : undefined}
              />
            ))}
          </div>
          <BlogList />
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
