import { DM_Sans, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "Ritik Chhipa — Full-Stack Developer & UI/UX Designer",
    template: "%s | Ritik Chhipa",
  },
  description:
    "Ritik Chhipa is a full-stack developer, UI/UX designer, and mobile app engineer building premium, scalable digital products. Trusted by 50+ clients worldwide.",
  keywords: [
    "Ritik Chhipa",
    "full stack developer",
    "UI UX designer",
    "mobile app developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "NestJS developer",
    "React Native developer",
    "SaaS developer",
    "Web3 developer",
    "blockchain developer",
    "software engineer for hire",
    "freelance developer",
    "product designer",
    "design systems",
    "AWS cloud developer",
    "portfolio",
  ],
  authors: [{ name: "Ritik Chhipa", url: BASE_URL }],
  creator: "Ritik Chhipa",
  publisher: "Ritik Chhipa",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Ritik Chhipa — Full-Stack Developer & UI/UX Designer",
    description:
      "Building premium, scalable products — web, mobile, UI/UX, SaaS, and blockchain. Trusted by 50+ clients worldwide.",
    url: BASE_URL,
    siteName: "Ritik Chhipa",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ritik Chhipa — Full-Stack Developer & UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Chhipa — Full-Stack Developer & UI/UX Designer",
    description:
      "Building premium, scalable web & mobile products. UI/UX, SaaS, Web3. Trusted by 50+ clients worldwide.",
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
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              description:
                "Full-stack developer, UI/UX designer, and mobile app engineer building premium, scalable digital products.",
              email: "ritikchhipa5@gmail.com",
              telephone: "+919001586400",
              sameAs: [
                "https://www.linkedin.com/in/ritikchhipa5/",
                "https://www.upwork.com/freelancers/~01567a14a1df3e84cd",
                "https://wa.me/919001586400",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "Node.js",
                "NestJS",
                "React Native",
                "UI/UX Design",
                "AWS",
                "Web3",
                "TypeScript",
                "Tailwind CSS",
              ],
              offers: {
                "@type": "Offer",
                description:
                  "Freelance full-stack development, UI/UX design, and mobile app development services.",
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
      </body>
    </html>
  );
}
