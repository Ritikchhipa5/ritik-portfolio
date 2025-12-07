import SectionHeading from "@/app/(website)/(components)/section-heading";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const technologies = [
  // --- FRONTEND ---
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
  },
  {
    name: "Redux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "React Native",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "Framer Motion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s",
  },

  // --- DESIGN / UI / PRODUCT ---
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png",
  },
  {
    name: "Adobe XD",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2560px-Adobe_XD_CC_icon.svg.png",
  },

  // --- BACKEND ---
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "NestJS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDlYKWwiHIBw0AwCCpREi9UdXkn0JlZkyCw&s",
  },
  {
    name: "Express",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Prisma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "GraphQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "tRPC",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ74a8w-Diwa-7wz69TRXnC1wmRxQKC0UdDQ&s",
  },

  // --- DATABASES ---
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQLite",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Redis",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  // --- CLOUD & DEVOPS ---
  {
    name: "AWS",
    img: "https://static.vecteezy.com/system/resources/thumbnails/066/712/306/small/aws-icon-logo-symbol-free-png.png",
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Nginx",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "Vercel",
    img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    name: "Netlify",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    name: "Supabase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // --- VERSION CONTROL ---
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "GitLab",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },

  // --- PAYMENTS / AUTH ---
  {
    name: "Stripe",
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/50489e6800006400051ae0d6/0x0.png",
  },
  {
    name: "Clerk Auth",
    img: "https://pipedream.com/s.v0/app_dBhw8k/logo/orig",
  },

  // --- ANALYTICS ---
  {
    name: "Google Analytics",
    img: "https://images.icon-icons.com/2699/PNG/512/google_analytics_image_logo_icon_168152.png",
  },

  // --- WEB3 ---
  {
    name: "Ethereum / Ethers.js",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032",
  },
  {
    name: "Solana",
    img: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=032",
  },
  {
    name: "WalletConnect",
    img: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue%20(Default)/Icon.svg",
  },
  {
    name: "Metamask",
    img: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue%20(Default)/Icon.svg",
  },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

function TechnologySection() {
  return (
    <div
      id="portfolio"
      className="relative py-10 md:py-20 px-4 max-w-7xl mx-auto "
    >
      <SectionHeading
        primaryHeading="Tech Stack"
        secondHeading="Building with the best"
      />

      <div className="relative flex w-full flex-col  mt-12 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s] ">
          {firstRow.map((review) => (
            <TechnologyCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <TechnologyCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}

const TechnologyCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-full border p-2"
      )}
    >
      <div className="flex flex-row items-center gap-2 p-1 ">
        <Image
          className="w-6 h-6 object-contain"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <p className="text-xs text-muted-foreground tracking-wider  font-dm-sans">
            {" "}
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
