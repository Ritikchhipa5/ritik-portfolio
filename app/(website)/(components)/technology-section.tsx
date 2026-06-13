import SectionHeading from "@/app/(website)/(components)/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { TechnologyBadge } from "@/app/(website)/(components)/technology-badge";

export const technologies = [
  // --- FRONTEND ---
  { name: "Next.js",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                                                                         link: "https://nextjs.org" },
  { name: "React",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                                                                           link: "https://react.dev" },
  { name: "TypeScript",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",                                                                 link: "https://www.typescriptlang.org" },
  { name: "JavaScript",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                                                                 link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS",   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",                                                        link: "https://tailwindcss.com" },
  { name: "Redux",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",                                                                           link: "https://redux.js.org" },
  { name: "React Native",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                                                                           link: "https://reactnative.dev" },
  { name: "Framer Motion",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s",                                                       link: "https://www.framer.com/motion" },

  // --- DESIGN ---
  { name: "Figma",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",                                                                           link: "https://www.figma.com" },
  { name: "Canva",          img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png",                                                           link: "https://www.canva.com" },

  // --- BACKEND ---
  { name: "Node.js",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                                                                         link: "https://nodejs.org" },
  { name: "NestJS",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&s",                                                       link: "https://nestjs.com" },
  { name: "Express",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",                                                                       link: "https://expressjs.com" },
  { name: "Prisma",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",                                                                         link: "https://www.prisma.io" },
  { name: "GraphQL",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",                                                                          link: "https://graphql.org" },
  { name: "tRPC",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ74a8w-Diwa-7wz69TRXnC1wmRxQKC0UdDQ&s",                                                       link: "https://trpc.io" },

  // --- DATABASES ---
  { name: "PostgreSQL",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",                                                                 link: "https://www.postgresql.org" },
  { name: "MySQL",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",                                                                           link: "https://www.mysql.com" },
  { name: "MongoDB",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                                                                       link: "https://www.mongodb.com" },
  { name: "SQLite",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",                                                                         link: "https://www.sqlite.org" },
  { name: "Redis",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",                                                                           link: "https://redis.io" },

  // --- CLOUD & DEVOPS ---
  { name: "AWS",            img: "https://static.vecteezy.com/system/resources/thumbnails/066/712/306/small/aws-icon-logo-symbol-free-png.png",                                           link: "https://aws.amazon.com" },
  { name: "Docker",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",                                                                         link: "https://www.docker.com" },
  { name: "Nginx",          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",                                                                           link: "https://nginx.org" },
  { name: "Vercel",         img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",                                                                               link: "https://vercel.com" },
  { name: "Netlify",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",                                                                       link: "https://www.netlify.com" },
  { name: "Supabase",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",                                                                     link: "https://supabase.com" },
  { name: "Firebase",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",                                                                        link: "https://firebase.google.com" },

  // --- VERSION CONTROL ---
  { name: "Git",            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                                                                               link: "https://git-scm.com" },
  { name: "GitHub",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                                                                         link: "https://github.com" },
  { name: "GitLab",         img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",                                                                         link: "https://gitlab.com" },

  // --- PAYMENTS / AUTH ---
  { name: "Stripe",         img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/50489e6800006400051ae0d6/0x0.png",                                                                         link: "https://stripe.com" },
  { name: "Clerk Auth",     img: "https://pipedream.com/s.v0/app_dBhw8k/logo/orig",                                                                                                       link: "https://clerk.com" },

  // --- ANALYTICS ---
  { name: "Google Analytics", img: "https://images.icon-icons.com/2699/PNG/512/google_analytics_image_logo_icon_168152.png",                                                              link: "https://analytics.google.com" },

  // --- WEB3 ---
  { name: "Ethereum / Ethers.js", img: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032",                                                                                        link: "https://ethers.org" },
  { name: "Solana",         img: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=032",                                                                                                link: "https://solana.com" },
  { name: "WalletConnect",  img: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue%20(Default)/Icon.svg",                                            link: "https://walletconnect.com" },
  { name: "Metamask",       img: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",                                                                                  link: "https://metamask.io" },
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
