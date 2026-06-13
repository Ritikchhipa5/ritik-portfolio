export type CaseStudyResult = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  client: string;
  headline: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  featured: boolean;
  overview: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  techStack: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "healthtrack-pro",
    category: "SaaS",
    categoryColor: "bg-sky-400",
    title: "HealthTrack Pro",
    client: "HealthTech Startup · US",
    headline: "Fitness SaaS with wearable integrations, launched in 6 weeks",
    metric: "10K+",
    metricLabel: "active users in 3 months",
    description:
      "Built a full-stack fitness tracking platform with Garmin & Apple Health sync, Stripe subscription billing, and real-time dashboards — from zero to paying customers in 6 weeks.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    featured: true,
    overview:
      "A US-based health startup needed a web SaaS platform to track workouts, nutrition, and biometric data synced from wearables. The founder had a tight 6-week window before their investor demo.",
    challenge:
      "The existing mobile app was siloed with no web presence. Users had to manually enter data, which killed retention. They needed real-time sync from Apple Health and Garmin, a subscription model with multiple tiers, and a dashboard that actually motivated users to stick around.",
    solution:
      "Built a Next.js web app backed by a NestJS API and PostgreSQL. Implemented OAuth-based Apple Health and Garmin SDK integrations, Stripe billing with webhook handling, and a real-time chart dashboard using Recharts. Deployed on AWS with auto-scaling to handle viral spikes after launch.",
    results: [
      { value: "10K+", label: "Active users in 3 months" },
      { value: "6 wks", label: "Time to launch" },
      { value: "$42K", label: "MRR at 3-month mark" },
      { value: "4.8★", label: "Average user rating" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "AWS EC2",
      "TypeScript",
      "Recharts",
    ],
    testimonial: {
      quote:
        "Ritik delivered a production-grade SaaS in 6 weeks that my previous agency said would take 6 months. The quality blew our investors away at the demo.",
      author: "James T.",
      role: "Founder, HealthTrack Pro",
    },
  },
  {
    slug: "aidesk",
    category: "AI Integration",
    categoryColor: "bg-purple-400",
    title: "AiDesk",
    client: "B2B SaaS Startup · UK",
    headline: "AI customer support that cuts tickets by 70%",
    metric: "70%",
    metricLabel: "fewer support tickets needing humans",
    description:
      "Embedded Claude AI into an existing helpdesk platform for autonomous ticket resolution, smart routing, and drafted responses — saving the equivalent of 3 full-time support staff.",
    tags: ["Next.js", "Claude AI", "Node.js", "PostgreSQL", "Pinecone"],
    featured: true,
    overview:
      "A UK-based B2B SaaS company was drowning in support tickets as they scaled. Their team of 6 support agents couldn't keep up. They needed an AI layer that could handle tier-1 tickets autonomously while still feeling human.",
    challenge:
      "The existing Zendesk-based workflow had no AI. Tickets were manually triaged, answers copy-pasted from an 800-page knowledge base. Response times averaged 18 hours. Customer churn was rising directly because of poor support experience.",
    solution:
      "Integrated Claude AI via the Anthropic API to auto-classify and respond to incoming tickets. Built a custom RAG pipeline over their knowledge base using OpenAI embeddings stored in Pinecone. Implemented confidence scoring — high-confidence responses auto-resolved, low-confidence ones were drafted and queued for human review with a single-click approval flow.",
    results: [
      { value: "70%", label: "Fewer tickets needing humans" },
      { value: "4 min", label: "Avg first response time" },
      { value: "3 FTE", label: "Support staff hours saved monthly" },
      { value: "92%", label: "Customer satisfaction score" },
    ],
    techStack: [
      "Next.js",
      "Claude AI (Anthropic)",
      "OpenAI Embeddings",
      "Node.js",
      "PostgreSQL",
      "Pinecone",
      "TypeScript",
    ],
    testimonial: {
      quote:
        "We went from 18-hour response times to 4 minutes. The AI handles 70% of tickets with zero human touch. This is the most ROI-positive thing we've done this year.",
      author: "Sarah K.",
      role: "Head of Customer Success, AiDesk",
    },
  },
  {
    slug: "rentflow",
    category: "SaaS",
    categoryColor: "bg-lime-500",
    title: "RentFlow",
    client: "PropTech Startup · UAE",
    headline: "Property management SaaS replacing spreadsheets for 500+ units",
    metric: "500+",
    metricLabel: "properties managed on platform",
    description:
      "End-to-end property management platform with automated rent collection, maintenance tracking, and tenant portals — built for a Dubai-based operator scaling from spreadsheets to SaaS.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "React Native"],
    featured: true,
    overview:
      "A Dubai-based property management company was managing 300+ residential units using WhatsApp and Google Sheets. As they expanded to new buildings, the chaos was costing them both tenants and deals.",
    challenge:
      "No centralized system for rent collection, maintenance requests, or lease management. Tenants had no self-service portal. Accountants were spending 3 days per month manually reconciling spreadsheets, and late payment follow-ups fell through the cracks.",
    solution:
      "Built a multi-tenant SaaS with separate portals for property managers and tenants. Online rent collection via Stripe, automated payment reminders, maintenance request tracking with photo uploads, lease expiry alerts, and a React Native companion app for on-site staff. Integrated with a local AED payment gateway for UAE transactions.",
    results: [
      { value: "500+", label: "Properties on platform" },
      { value: "3 days", label: "Saved in monthly reconciliation" },
      { value: "98%", label: "On-time rent collection rate" },
      { value: "4.9★", label: "Tenant satisfaction score" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Stripe",
      "React Native",
      "AWS S3",
      "TypeScript",
      "Redis",
    ],
    testimonial: {
      quote:
        "RentFlow transformed how we operate. What used to take a team of 4 to manage now runs with 2 people. The ROI was visible within the first month.",
      author: "Omar A.",
      role: "CEO, RentFlow Properties",
    },
  },
  {
    slug: "shipdash",
    category: "Mobile App",
    categoryColor: "bg-orange-400",
    title: "ShipDash",
    client: "E-commerce Brand · Australia",
    headline: "Mobile app driving 40% more repeat purchases",
    metric: "40%",
    metricLabel: "increase in repeat orders",
    description:
      "Cross-platform iOS & Android app for an Australian e-commerce brand with push notification campaigns, loyalty points, and a personalised product feed — shipped in 4 weeks.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Expo", "Firebase"],
    featured: false,
    overview:
      "An Australian e-commerce company with $2M annual revenue had no mobile app. 60% of their traffic came from mobile but converted at a fraction of desktop rates. They had no push notification capability to re-engage customers after purchase.",
    challenge:
      "Mobile web checkout was clunky and three-step checkout pages were losing customers at each step. No loyalty program meant repeat purchase rates were below industry average. No push notifications meant zero re-engagement capability after a user left the site.",
    solution:
      "Built a React Native app with Expo for fast dual-platform deployment. Implemented a points-based loyalty program, AI-personalised product feeds based on purchase history, Firebase Cloud Messaging for targeted push campaigns, and a streamlined 3-tap checkout flow.",
    results: [
      { value: "40%", label: "Increase in repeat orders" },
      { value: "25K+", label: "App downloads in month 1" },
      { value: "4.7★", label: "App Store rating" },
      { value: "4 wks", label: "Time to launch" },
    ],
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "TypeScript",
      "AWS",
    ],
  },
];
