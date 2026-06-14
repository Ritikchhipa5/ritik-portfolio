import SectionHeading from "@/app/(website)/(components)/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { TechnologyBadge } from "@/app/(website)/(components)/technology-badge";

export const technologies = [
  // --- FRONTEND ---
  { name: "Next.js",             img: "/tech-icons/nextjs.svg",          link: "https://nextjs.org" },
  { name: "React",               img: "/tech-icons/react.svg",           link: "https://react.dev" },
  { name: "TypeScript",          img: "/tech-icons/typescript.svg",      link: "https://www.typescriptlang.org" },
  { name: "JavaScript",          img: "/tech-icons/javascript.svg",      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS",        img: "/tech-icons/tailwind.png",        link: "https://tailwindcss.com" },
  { name: "Redux",               img: "/tech-icons/redux.svg",           link: "https://redux.js.org" },
  { name: "React Native",        img: "/tech-icons/react.svg",           link: "https://reactnative.dev" },
  { name: "Framer Motion",       img: "/tech-icons/framer-motion.png",   link: "https://www.framer.com/motion" },

  // --- DESIGN ---
  { name: "Figma",               img: "/tech-icons/figma.svg",           link: "https://www.figma.com" },
  { name: "Canva",               img: "/tech-icons/canva.png",           link: "https://www.canva.com" },

  // --- BACKEND ---
  { name: "Node.js",             img: "/tech-icons/nodejs.svg",          link: "https://nodejs.org" },
  { name: "NestJS",              img: "/tech-icons/nestjs.png",          link: "https://nestjs.com" },
  { name: "Express",             img: "/tech-icons/express.svg",         link: "https://expressjs.com" },
  { name: "Prisma",              img: "/tech-icons/prisma.svg",          link: "https://www.prisma.io" },
  { name: "GraphQL",             img: "/tech-icons/graphql.svg",         link: "https://graphql.org" },
  { name: "tRPC",                img: "/tech-icons/trpc.png",            link: "https://trpc.io" },

  // --- DATABASES ---
  { name: "PostgreSQL",          img: "/tech-icons/postgresql.svg",      link: "https://www.postgresql.org" },
  { name: "MySQL",               img: "/tech-icons/mysql.svg",           link: "https://www.mysql.com" },
  { name: "MongoDB",             img: "/tech-icons/mongodb.svg",         link: "https://www.mongodb.com" },
  { name: "SQLite",              img: "/tech-icons/sqlite.svg",          link: "https://www.sqlite.org" },
  { name: "Redis",               img: "/tech-icons/redis.svg",           link: "https://redis.io" },

  // --- CLOUD & DEVOPS ---
  { name: "AWS",                 img: "/tech-icons/aws.png",             link: "https://aws.amazon.com" },
  { name: "Docker",              img: "/tech-icons/docker.svg",          link: "https://www.docker.com" },
  { name: "Nginx",               img: "/tech-icons/nginx.svg",           link: "https://nginx.org" },
  { name: "Vercel",              img: "/tech-icons/vercel.png",          link: "https://vercel.com" },
  { name: "Netlify",             img: "/tech-icons/netlify.svg",         link: "https://www.netlify.com" },
  { name: "Supabase",            img: "/tech-icons/supabase.svg",        link: "https://supabase.com" },
  { name: "Firebase",            img: "/tech-icons/firebase.svg",        link: "https://firebase.google.com" },

  // --- VERSION CONTROL ---
  { name: "Git",                 img: "/tech-icons/git.svg",             link: "https://git-scm.com" },
  { name: "GitHub",              img: "/tech-icons/github.svg",          link: "https://github.com" },
  { name: "GitLab",              img: "/tech-icons/gitlab.svg",          link: "https://gitlab.com" },

  // --- PAYMENTS / AUTH ---
  { name: "Stripe",              img: "/tech-icons/stripe.png",          link: "https://stripe.com" },
  { name: "Clerk Auth",          img: "/tech-icons/clerk.png",           link: "https://clerk.com" },

  // --- ANALYTICS ---
  { name: "Google Analytics",    img: "/tech-icons/google-analytics.png", link: "https://analytics.google.com" },

  // --- WEB3 ---
  { name: "Ethereum / Ethers.js", img: "/tech-icons/ethereum.svg",      link: "https://ethers.org" },
  { name: "Solana",              img: "/tech-icons/solana.svg",          link: "https://solana.com" },
  { name: "WalletConnect",       img: "/tech-icons/walletconnect.svg",   link: "https://walletconnect.com" },
  { name: "Metamask",            img: "/tech-icons/metamask.svg",        link: "https://metamask.io" },
];

const chunkSize = Math.ceil(technologies.length / 3);

export const firstRow = technologies.slice(0, chunkSize);
export const secondRow = technologies.slice(chunkSize, chunkSize * 2);
export const thirdRow = technologies.slice(chunkSize * 2, chunkSize * 3);

function TechnologySection() {
  return (
    <div className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto ">
      <SectionHeading
        primaryHeading="Tech Stack"
        secondHeading="Building with the best"
      />

      <div className="relative flex w-full flex-col  mt-12 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s] ">
          {firstRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:80s] ">
          {thirdRow.map((review) => (
            <TechnologyBadge key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}

export default TechnologySection;
