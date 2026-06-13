export type CaseStudyResult = { value: string; label: string };

export type CaseStudyImage = {
  src: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  categories: string[];
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
  siteUrl?: string;
  images?: CaseStudyImage[];
  testimonial?: { quote: string; author: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "rapidrent",
    categories: ["Website", "SaaS", "AI Integration"],
    categoryColor: "bg-sky-400",
    title: "RapidRent",
    client: "Isaac · PropTech MVP",
    headline:
      "End-to-end rental SaaS MVP — from idea to live product in 3 months",
    metric: "3 months",
    metricLabel: "from first call to live MVP",
    description:
      "Built a full-stack property rental SaaS for Isaac — covering landlord dashboards, tenant portals, online rent collection, lease management, and maintenance requests — shipped as a production-ready MVP in just over 3 months.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    featured: true,
    overview:
      "Isaac had a clear vision: a modern, no-friction rental platform that would make the entire rental cycle — finding tenants, signing leases, collecting rent, handling maintenance — feel effortless for both landlords and renters. He needed an experienced team to take that vision from a Figma file to a live, scalable product, fast. We delivered RapidRent in just over 3 months, and Isaac was live with real users before his original deadline.",
    challenge:
      "The rental market is full of bloated, expensive tools built for enterprise property firms. Isaac's target users — independent landlords managing anywhere from 2 to 50 properties — had no good option. They were stuck juggling WhatsApp messages, bank transfers, and PDF leases sent over email. The challenge wasn't just building software; it was designing a product simple enough that a non-technical landlord could onboard themselves in under 10 minutes, while also giving tenants a frictionless experience on mobile. On top of that, we had to handle sensitive data (ID documents, financial records), integrate a payment gateway securely, and build two completely separate user experiences — all within an MVP scope and a 3-month window.",
    solution:
      "We architected RapidRent as a multi-tenant Next.js application with a NestJS backend and PostgreSQL database. The landlord dashboard lets owners add properties, invite tenants, generate digital leases with e-signature, and see rent payment status in real time. The tenant portal handles everything from the initial application (with document upload to AWS S3) through to monthly rent payment via Stripe, maintenance ticket submission, and lease renewal reminders. We built a smart notification layer — email and in-app — so landlords never miss a late payment or lease expiry. Role-based auth via JWT ensured landlords and tenants always saw only what they were supposed to. We kept the scope ruthlessly tight, cutting anything that wasn't critical to the core rental loop, and shipped a clean, production-grade MVP that Isaac could confidently demo to investors and onboard real users immediately.",
    results: [
      { value: "3 months", label: "Concept to live product" },
      { value: "4", label: "Portals — Admin, Guest, Landlord & Tenant" },
      { value: "100%", label: "Client satisfaction" },
      { value: "MVP", label: "Production-ready, not a prototype" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Stripe",
      "AWS S3",
      "TypeScript",
      "Redis",
      "JWT Auth",
      "DocuSign",
      "BullMQ",
      "OpenAI",
      "Framer Motion",
    ],
    siteUrl: "rapidrent.co",
    images: [
      {
        src: "https://image.thum.io/get/width/1400/crop/820/https://rapidrent.co/",
        label: "Landing Page",
      },
      {
        src: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://rapidrent.co/#features",
        label: "Features Overview",
      },
      {
        src: "https://placehold.co/1400x820/f1f5f9/64748b?text=Landlord+Dashboard+(screenshot+coming+soon)",
        label: "Landlord Dashboard",
      },
      {
        src: "https://placehold.co/1400x820/f1f5f9/64748b?text=Tenant+Portal+(screenshot+coming+soon)",
        label: "Tenant Portal",
      },
      {
        src: "https://placehold.co/1400x820/f1f5f9/64748b?text=Rent+Collection+(screenshot+coming+soon)",
        label: "Rent Collection",
      },
    ],
    testimonial: {
      quote:
        "I first tried building this with an AI tool — it looked good on the surface but I'm not a developer and couldn't tell what was actually working. I wasted time. Then I reached out to Ritik, and the difference was night and day. He built a real, production-grade product that I could actually ship to users. Couldn't be happier.",
      author: "Isaac",
      role: "Founder, RapidRent",
    },
  },
  {
    slug: "kali",
    categories: ["Website", "Mobile App"],
    categoryColor: "bg-emerald-500",
    title: "Kali",
    client: "Kali.day · Wellness Tech",
    headline:
      "Step-to-earn iOS app with a curated Shopify wellness marketplace — website redesign + mobile, shipped end-to-end",
    metric: "5.0★",
    metricLabel: "App Store rating at launch",
    description:
      "Rebuilt Kali's static website into a rich, modern digital brand — then designed and shipped a full step-to-earn iOS app where users walk to earn Kali points and redeem them for discounts across a curated Shopify wellness marketplace.",
    tags: ["React Native", "Shopify API", "Node.js", "HealthKit", "Firebase"],
    featured: true,
    overview:
      "Kali started with a bold idea: what if your daily steps could earn you real discounts on premium wellness products? The brand had a simple static website and a vision, but no mobile presence and no way to connect user behaviour to their Shopify storefront. We took the project end-to-end — redesigning the website into an editorial, wellness-brand experience and then building a full React Native iOS app with a custom step-to-reward engine layered on top of Shopify.",
    challenge:
      "The core technical challenge was making Shopify do something it was never designed to do. Kali's marketplace runs on Shopify, but Shopify has no native concept of step-based rewards, earned point balances, or per-user dynamic discount tiers. We had to build a custom middleware engine that sat between the mobile app and Shopify: reading step counts from Apple HealthKit, converting them to Kali points in real time, generating unique discount codes via the Shopify Admin API, enforcing per-user redemption limits, and writing all step and reward history to our own database — all without disrupting the native Shopify checkout experience users already trusted. On top of that, tracking and modifying user data across two systems (our backend and Shopify's customer records) without creating sync drift was a constant engineering constraint.",
    solution:
      "We rebuilt the Kali website from scratch — clean editorial typography, smooth scroll animations, and a wellness-brand aesthetic that matched the premium feel of the marketplace. For the mobile app, we built in React Native with Expo for fast iOS deployment. Daily step data is pulled via the HealthKit API and synced to our Node.js backend, where a custom reward engine calculates Kali points and eligibility for each user. When a user redeems points, we generate a single-use Shopify discount code via the Admin API, tied to that user's account and expiry window. The Shopify Storefront API powers the in-app marketplace — users browse curated wellness brands and apply earned discounts without leaving the app. Firebase Cloud Messaging handles push notifications for step-goal reminders and new brand announcements. All user reward history, step logs, and redemption records are stored in PostgreSQL, giving Kali full analytics visibility over how customers engage with the marketplace.",
    results: [
      { value: "5.0★", label: "App Store rating at launch" },
      { value: "13", label: "Five-star reviews" },
      { value: "2", label: "Products shipped — website & iOS app" },
      { value: "10K+", label: "Daily step goal driving real purchases" },
    ],
    techStack: [
      "React Native",
      "Shopify Storefront API",
      "Shopify Admin API",
      "Node.js",
      "PostgreSQL",
      "HealthKit",
      "Firebase",
      "TypeScript",
      "AWS S3",
    ],
    siteUrl: "kali.day",
    images: [
      {
        src: "https://image.thum.io/get/width/1400/crop/820/https://kali.day/",
        label: "Kali Website — Homepage",
      },
      {
        src: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://kali.day/",
        label: "Kali Website — Full View",
      },
      {
        src: "https://placehold.co/1400x820/f0fdf4/16a34a?text=iOS+App+—+Step+Tracker+(screenshot+coming+soon)",
        label: "iOS App — Step Tracker",
      },
      {
        src: "https://placehold.co/1400x820/f0fdf4/16a34a?text=iOS+App+—+Marketplace+(screenshot+coming+soon)",
        label: "iOS App — Wellness Marketplace",
      },
    ],
    testimonial: {
      quote:
        "I am surprised this app doesn't already exist. It easily became my strongest motivation to getting steps in to get discounts on the items in my cart. I am excited for more brands to become available and to maximize my step count for points!!",
      author: "lazach",
      role: "App Store reviewer · 5★",
    },
  },
  {
    slug: "molar",
    categories: ["SaaS", "Website"],
    categoryColor: "bg-teal-500",
    title: "Molar",
    client: "Dental Tech · SaaS Platform",
    headline:
      "Full-stack dental management SaaS — doctors, patients, labs, and lab cases fully interconnected in one platform",
    metric: "4+",
    metricLabel: "core modules — doctors, patients, labs & cases",
    description:
      "A comprehensive dental practice management SaaS built over nearly a year — connecting doctors, patients, dental labs, and lab cases in one seamless system. From patient records to lab order tracking, Molar eliminates the manual overhead that slows dental teams down.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "AWS"],
    featured: true,
    overview:
      "Molar is a dental management platform built from the ground up for clinics that want to move beyond spreadsheets, phone calls, and disconnected tools. It brings every stakeholder — doctors, receptionists, patients, lab technicians — into one system where records, appointments, lab orders, and case status are always in sync. We have been building and evolving Molar for nearly a year, and the platform has grown into a feature-rich, production-grade SaaS with the kind of depth that typically takes enterprise teams far longer to reach.",
    challenge:
      "Dental practices are complex ecosystems. A single treatment can involve a receptionist scheduling the appointment, a dentist managing the patient record and treatment plan, a dental lab receiving and manufacturing a crown or appliance, and then a return visit to fit and sign off the work. In most clinics, all of this is tracked across paper files, phone calls to the lab, and fragmented software tools that don't talk to each other. The challenge with Molar was not just building features — it was designing a unified data model that could connect all four stakeholders without introducing friction for any of them. Lab case tracking alone required building a full lifecycle state machine: order placed, received by lab, in production, quality check, dispatched, received by clinic, fitted. Every state change needed to be visible to the right people in real time. On top of that, patient records, doctor assignments, treatment histories, and billing all needed to be relational and role-gated — a receptionist should not see a doctor's clinical notes, and a lab technician only needs to see the cases assigned to them.",
    solution:
      "We architected Molar as a multi-tenant Next.js and NestJS application backed by PostgreSQL, with role-based access control at every layer. The system has four primary modules that all share a single relational data layer: Doctor Management (profiles, specialisations, patient assignments, schedule), Patient Management (records, treatment history, document uploads to AWS S3, visit logs), Lab Management (lab profiles, contacts, order management), and Lab Cases (full case lifecycle — from digital impression order through to delivery and fitting confirmation). A real-time notification layer ensures that when a lab updates a case status, the assigned doctor and reception team see it instantly. The frontend is built for speed — clean dashboards per role, designed to be usable by non-technical dental staff with zero training overhead. We kept the codebase modular so new features — insurance billing, appointment scheduling, patient portal — can be added without structural rework. After nearly a year of active development, Molar is a stable, scalable foundation that a growing clinic can rely on from day one.",
    results: [
      { value: "4+", label: "Fully interconnected modules" },
      { value: "12+", label: "Months in active development" },
      { value: "MVP", label: "Production-ready, not a prototype" },
      { value: "100%", label: "Client satisfaction" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "AWS S3",
      "Redis",
      "JWT Auth",
      "REST API",
      "Framer Motion",
    ],
    images: [
      {
        src: "https://placehold.co/1400x820/f0fdfa/0d9488?text=Molar+—+Doctor+Dashboard+(screenshot+coming+soon)",
        label: "Doctor Dashboard",
      },
      {
        src: "https://placehold.co/1400x820/f0fdfa/0d9488?text=Molar+—+Patient+Records+(screenshot+coming+soon)",
        label: "Patient Records",
      },
      {
        src: "https://placehold.co/1400x820/f0fdfa/0d9488?text=Molar+—+Lab+Cases+Tracker+(screenshot+coming+soon)",
        label: "Lab Cases Tracker",
      },
      {
        src: "https://placehold.co/1400x820/f0fdfa/0d9488?text=Molar+—+Lab+Management+(screenshot+coming+soon)",
        label: "Lab Management",
      },
    ],
    testimonial: {
      quote:
        "I had the pleasure of working with Ritik on several technical projects, and I cannot recommend him highly enough. His development and engineering skills are exceptional, consistently delivering high-quality, well-architected solutions that exceeded our expectations. What truly sets Ritik apart is his rare combination of technical excellence and outstanding communication. He has the ability to break down complex technical concepts into clear, understandable terms, making collaboration seamless. Ritik took full ownership of building out our Labs platform, demonstrating strong independent problem-solving abilities, clean code, and thoughtful execution. Beyond his technical capabilities, he's professional, reliable, and brings a positive attitude to every interaction. Any team would be lucky to have him, and I wouldn't hesitate to work with him again in the future.",
      author: "Santayana",
      role: "Founder, Molar",
    },
  },
  {
    slug: "tamice",
    categories: ["Website"],
    categoryColor: "bg-rose-500",
    title: "Tamice",
    client: "Tamice.com · Korean Travel Agency",
    headline:
      "High-performance travel platform for a leading Korean agency — Next.js frontend, Laravel backend, Node.js microservices",
    metric: "3",
    metricLabel: "tech layers working in unison — Next.js, Laravel & Node.js",
    description:
      "Built the full technical foundation for Tamice.com, a leading Korean travel agency — a high-performance Next.js frontend, a Laravel-powered admin and backend system, and Node.js microservices handling the data layer. My first large-scale full-stack project, delivered as part of a collaborative team.",
    tags: ["Next.js", "React", "Laravel", "Node.js", "PHP"],
    featured: false,
    overview:
      "Tamice.com is a leading Korean travel agency that needed a technical platform to match its ambitions — fast, reliable, and capable of handling real travel booking complexity. This was my first large-scale full-stack project, and I worked on it as part of a team, contributing across the frontend and backend. The platform was built on a deliberate multi-layer architecture: Next.js for a blazing-fast public-facing frontend, Laravel for the core business logic and admin dashboard, and Node.js microservices for the data-intensive operations in between.",
    challenge:
      "Travel platforms are deceptively complex. On the surface they look like content sites, but underneath they need to handle real-time availability, booking flows, user accounts, admin control panels for managing tours and packages, and a backend that can handle concurrent users without degrading. Building this for a Korean market agency added another layer — content, routing, and SEO all needed to work correctly for Korean audiences. The architectural challenge was choosing the right tool for each layer: a PHP/Laravel monolith excels at admin dashboards and relational data; Next.js gives you server-side rendering and performance out of the box; but connecting them cleanly through Node.js microservices without creating a maintenance nightmare required careful planning, especially for a team spread across multiple developers.",
    solution:
      "We split the system into three distinct layers that each owned their responsibility clearly. The Next.js and React frontend handled everything the user sees — tour listings, destination pages, booking flows — with server-side rendering for fast initial load and SEO. Laravel owned the admin dashboard and core backend: tour and package management, booking records, user accounts, and all the business logic that powered the agency's operations. Node.js microservices handled the data bridge between layers — processing availability queries, transforming data between the frontend's needs and Laravel's models, and keeping the two primary systems decoupled. Working across all three layers as a full-stack developer on this project gave me deep experience in multi-service architecture, team code collaboration, and shipping a production system at real scale for the first time.",
    results: [
      { value: "3", label: "Integrated tech layers" },
      { value: "Full", label: "Stack — frontend, backend & microservices" },
      { value: "#1", label: "Leading Korean travel agency" },
      { value: "Live", label: "Production at tamice.com" },
    ],
    techStack: [
      "Next.js",
      "React",
      "Laravel",
      "PHP",
      "Node.js",
      "MySQL",
      "REST API",
      "TypeScript",
    ],
    siteUrl: "tamice.com",
    images: [
      {
        src: "https://image.thum.io/get/width/1400/crop/820/https://tamice.com/",
        label: "Tamice — Homepage",
      },
      {
        src: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://tamice.com/",
        label: "Tamice — Full Page",
      },
    ],
  },
];
