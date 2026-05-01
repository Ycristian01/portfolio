export type Service = {
  id: string;
  icon: string;
  title: string;
  pitch: string;
  bullets: string[];
  bestFor: string;
  engagement: string;
};

export const services: Service[] = [
  {
    id: "fullstack",
    icon: "Monitor",
    title: "Full-Stack Web Applications",
    pitch: "Production-ready web apps from idea to deploy.",
    bullets: [
      "Next.js / React frontends with a typed design system",
      "NestJS or Rails backends with clean architecture",
      "Auth, payments, file storage, and deploys included",
    ],
    bestFor: "Startups shipping an MVP or v1",
    engagement: "Project-based · typical 4–10 weeks",
  },
  {
    id: "backend",
    icon: "Server",
    title: "Backend & API Engineering",
    pitch: "Senior backend muscle without the headcount.",
    bullets: [
      "REST APIs in NestJS, Rails, or Node.js",
      "PostgreSQL data modeling and query optimization",
      "Background jobs, webhooks, and scheduled tasks",
    ],
    bestFor: "Teams with a frontend but no senior backend",
    engagement: "Project or weekly retainer",
  },
  {
    id: "integrations",
    icon: "Plug",
    title: "Third-Party Integrations",
    pitch: "I ship integrations other teams stall on.",
    bullets: [
      "Stripe (subscriptions, coupons, payouts)",
      "Shipping & returns (FedEx, UPS, Happy Returns)",
      "Firebase Auth, Shopify, custom webhooks",
    ],
    bestFor: "Teams shipping a complex integration on a deadline",
    engagement: "Fixed-scope project · 2–6 weeks",
  },
  {
    id: "performance",
    icon: "Gauge",
    title: "Performance & Maintenance",
    pitch: "Make slow apps fast and keep them that way.",
    bullets: [
      "DB query and N+1 hunting (30% page-load win at last audit)",
      "Frontend render and bundle optimization",
      "Monthly retainer for fixes, deps, and deploy support",
    ],
    bestFor: "Existing apps that need a tune-up or steady hands",
    engagement: "One-time audit or monthly retainer",
  },
];
