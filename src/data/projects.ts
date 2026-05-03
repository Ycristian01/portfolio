export type Project = {
  name: string;
  employer: string;
  year: string;
  description: string;
  outcome?: string;
  stack: string[];
  liveUrl?: string;
  appUrl?: string;
  repoUrl?: string;
  confidential?: boolean;
  internal?: boolean;
};

export const projects: Project[] = [
  {
    name: "Trashie Rewards Platform",
    employer: "Katapult Labs",
    year: "2025",
    description:
      "Sustainable rewards platform enabling consumers to recycle clothing in exchange for TrashieCash. Built Stripe coupon lifecycle management, FedEx/UPS/Happy Returns integrations, and Firebase Auth flows across web and mobile.",
    stack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Firebase",
      "GCP",
    ],
    liveUrl: "https://app.trashie.io",
    appUrl: "https://apps.apple.com/co/app/trashie/id6747362894",
    confidential: true,
  },
  {
    name: "Sistema Brilla",
    employer: "Horbath Technologies",
    year: "2022 – 2024",
    description:
      "Web platform for non-banking credits paid through gas bills. Led the Rails to NestJS migration, built PDF digital signing, and reduced page-load time by 30%.",
    outcome: "30% faster page loads · 25% increase in user satisfaction",
    stack: [
      "TypeScript",
      "NestJS",
      "Ruby on Rails",
      "React",
      "Redux",
      "PostgreSQL",
      "AWS S3",
    ],
    liveUrl: "https://sistemabrilla.com",
    confidential: true,
    internal: true,
  },
  {
    name: "Doit-Center E-Commerce",
    employer: "Koombea",
    year: "2021 – 2022",
    description:
      "Shopify-integrated e-commerce backend for a Panamanian retailer. Built multi-order logic, real-time product catalog sync, and automated inventory updates.",
    stack: ["Ruby on Rails", "PostgreSQL", "Shopify", "Redis", "AWS EC2"],
    liveUrl: "https://www.doitcenter.com.pa",
    confidential: true,
  },
  {
    name: "Whole Exome Analysis Pipeline",
    employer: "Freelance · Universidad del Norte",
    year: "2020",
    description:
      "Desktop Python application processing human genome data through a bioinformatics pipeline, built for a university professor's research lab.",
    stack: ["Python"],
    confidential: false,
  },
];
