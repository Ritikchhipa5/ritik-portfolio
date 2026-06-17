import { DM_Sans, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SanityLive } from "@/sanity/lib/live";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const BASE_URL = "https://www.ritikchhipa.xyz";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ritik Chhipa — AI SaaS & Full-Stack Developer | React, Next.js, React Native",
    template: "%s | Ritik Chhipa",
  },
  description:
    "Ritik Chhipa is a Top Rated Upwork freelancer and full-stack developer specialising in AI SaaS platforms, React, Next.js, React Native, and OpenAI integrations. 100% Job Success. Trusted by 50+ clients worldwide.",
  keywords: [
    "Ritik Chhipa",
    "full stack developer",
    "AI SaaS developer",
    "OpenAI integration developer",
    "ChatGPT developer",
    "React developer for hire",
    "Next.js developer for hire",
    "React Native developer for hire",
    "Node.js developer",
    "NestJS developer",
    "TypeScript developer",
    "mobile app developer",
    "UI UX designer",
    "SaaS developer",
    "freelance full stack developer",
    "hire full stack developer",
    "hire React developer",
    "hire Next.js developer",
    "hire mobile app developer",
    "Upwork Top Rated developer",
    "100% Job Success Upwork",
    "software engineer for hire",
    "full stack developer US",
    "full stack developer UK",
    "full stack developer Canada",
    "full stack developer Singapore",
    "full stack developer UAE",
    "AI developer for startups",
    "AWS cloud developer",
    "product designer",
    "portfolio",
  ],
  authors: [{ name: "Ritik Chhipa", url: BASE_URL }],
  creator: "Ritik Chhipa",
  publisher: "Ritik Chhipa",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Ritik Chhipa — AI SaaS & Full-Stack Developer | React, Next.js, React Native",
    description:
      "Top Rated Upwork freelancer building AI SaaS platforms, web & mobile apps with React, Next.js, React Native and OpenAI. 100% Job Success. 50+ clients worldwide.",
    url: BASE_URL,
    siteName: "Ritik Chhipa",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ritik Chhipa — AI SaaS & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Chhipa — AI SaaS & Full-Stack Developer",
    description:
      "Top Rated Upwork freelancer. React, Next.js, React Native, OpenAI. 100% Job Success. 50+ clients worldwide.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@ritikchhipa5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4548722974359094" />
        <meta
          name="p:domain_verify"
          content="9f7382bead040ea073ec7ec56997bc6e"
        />
      </head>

      <body
        className={`${dmSans.variable} ${inter.variable} ${newsreader.variable} `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ritik Chhipa",
              url: BASE_URL,
              image: `${BASE_URL}/og-image.png`,
              jobTitle: "AI SaaS & Full-Stack Developer",
              description:
                "Top Rated Upwork freelancer specialising in AI SaaS platforms, React, Next.js, React Native, and OpenAI integrations. 100% Job Success. 50+ clients across US, UK, Canada, Singapore, and UAE.",
              email: "ritikchhipa5@gmail.com",
              telephone: "+919001586400",
              sameAs: [
                "https://www.linkedin.com/in/ritikchhipa5/",
                "https://www.upwork.com/freelancers/~01567a14a1df3e84cd",
                "https://github.com/Ritikchhipa5",
                "https://wa.me/919001586400",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "Node.js",
                "NestJS",
                "React Native",
                "OpenAI",
                "ChatGPT",
                "AI SaaS",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Prisma",
                "AWS",
                "Docker",
                "UI/UX Design",
                "Tailwind CSS",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full-Stack Developer",
                occupationLocation: { "@type": "Country", name: "Worldwide" },
                estimatedSalary: {
                  "@type": "MonetaryAmountDistribution",
                  currency: "USD",
                  median: 25,
                  unitText: "HOUR",
                },
              },
              offers: {
                "@type": "Offer",
                description:
                  "Freelance AI SaaS development, full-stack web & mobile app development, and UI/UX design services. Available for clients in US, UK, Canada, Singapore, and UAE.",
                price: "25",
                priceCurrency: "USD",
                priceSpecification: { "@type": "UnitPriceSpecification", price: 25, priceCurrency: "USD", unitText: "HOUR" },
              },
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TFKGWBDWZV"
        ></Script>

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TFKGWBDWZV');
          `}
        </Script>
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548722974359094"
          crossOrigin="anonymous"
        />
        <>{children}</>
        <SanityLive />
      </body>
    </html>
  );
}
