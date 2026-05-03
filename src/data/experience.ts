export type Role = {
  company: string;
  url?: string;
  title: string;
  type: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Katapult Labs",
    url: "https://www.katapultlabs.ai/",
    title: "Full-Stack Engineer",
    type: "Full-time",
    dates: "Aug 2025 – Present",
    location: "Remote",
    bullets: [
      "Working on Trashie, a NY-based sustainable rewards platform; built Stripe coupon lifecycle management supporting the brand partner rewards network.",
      "Engineered logistics and returns integrations with FedEx Easy Returns, UPS, and Happy Returns enabling QR-based Take Back Bag operations at scale.",
      "Enhanced Firebase Authentication flows for web and mobile, improving login reliability and security.",
      "Developed full-stack features across React web and React Native mobile apps backed by Node.js services and PostgreSQL on GCP.",
    ],
  },
  {
    company: "Self-directed Development",
    title: "Software Engineer",
    type: "Personal projects",
    dates: "May 2024 – Aug 2025",
    location: "Remote",
    bullets: [
      "Built and maintained personal applications to deepen full-stack skills across the stack.",
      "Practiced backend development with NestJS, Ruby on Rails, and Python, focusing on clean architecture and robust API design.",
      "Explored Docker, Kubernetes, CI/CD, TDD, and dependency injection best practices.",
    ],
  },
  {
    company: "Horbath Technologies",
    url: "https://horbath.com",
    title: "Full-Stack Developer",
    type: "Full-time",
    dates: "Jun 2022 – May 2024",
    location: "Barranquilla, Colombia",
    bullets: [
      "Co-led backend migration from Ruby on Rails to NestJS + Sequelize, improving scalability and performance.",
      "Led integrations with external store services and built PDF document processing with digital signing via NestJS and AWS S3.",
      "Implemented DB query optimizations achieving a 30% faster page load across the platform.",
      "Contributed to a 25% increase in user satisfaction through UX improvements and reduced response times.",
    ],
  },
  {
    company: "Koombea",
    url: "https://www.koombea.com",
    title: "Backend Developer",
    type: "Full-time",
    dates: "Feb 2021 – Jun 2022",
    location: "Barranquilla, Colombia",
    bullets: [
      "Led core backend development for Doit-Center, a Panamanian e-commerce platform, using Ruby on Rails.",
      "Integrated Shopify services for real-time product catalog sync, order management, and inventory automation.",
      "Co-led development of multi-order logic enabling users to place multiple product orders in a single transaction.",
      "Led deployments to testing and production environments using AWS EC2.",
    ],
  },
];
