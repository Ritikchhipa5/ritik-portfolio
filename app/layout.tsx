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
  title: "Ritik Chhipa — Full-Stack & Mobile App Developer",
  description:
    "Ritik is a full-stack, mobile, and Web3 developer building premium, scalable digital products. Trusted by more than 50+ clients. Expert in web, mobile, backend, SaaS, UI/UX, and blockchain development.",
  keywords: [
    "Ritik Chhipa",
    "software developer",
    "full stack developer",
    "mobile app developer",
    "web developer",
    "Web3 developer",
    "blockchain developer",
    "UI/UX designer",
    "SaaS developer",
    "Next.js portfolio",
    "React Native developer",
    "backend developer",
  ],
  authors: [{ name: "Ritik Chhipa" }],
  creator: "Ritik Chhipa",
  publisher: "Ritik Chhipa",
  openGraph: {
    title: "Ritik Chhipa — Full-Stack, Web3 & Mobile App Developer",
    description:
      "Building premium, scalable products — web, mobile, UI/UX, SaaS, and blockchain. Trusted by 50+ clients worldwide.",
    url: BASE_URL,
    siteName: "Ritik Chhipa Portfolio",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ritik Chhipa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Chhipa — Full-Stack Developer",
    description:
      "Full-stack, mobile, and Web3 developer creating high-performance digital products.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
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
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548722974359094"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${dmSans.variable} ${inter.variable} ${newsreader.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
