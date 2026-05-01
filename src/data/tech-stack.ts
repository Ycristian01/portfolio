export type TechItem = {
  name: string;
  level: "proficient" | "familiar";
};

export type TechCategory = {
  name: string;
  items: TechItem[];
};

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "Ruby", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "C#", level: "familiar" },
      { name: "Java", level: "familiar" },
      { name: "CSS", level: "familiar" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: "proficient" },
      { name: "NestJS", level: "proficient" },
      { name: "Ruby on Rails", level: "proficient" },
      { name: "Django", level: "familiar" },
      { name: "Spring Boot", level: "familiar" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", level: "proficient" },
      { name: "React Native", level: "proficient" },
      { name: "Redux", level: "proficient" },
      { name: "Next.js", level: "familiar" },
      { name: "Astro", level: "familiar" },
    ],
  },
  {
    name: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "Sequelize", level: "proficient" },
      { name: "TypeORM", level: "proficient" },
      { name: "ActiveRecord", level: "proficient" },
      { name: "MongoDB", level: "familiar" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Google Cloud Platform", level: "proficient" },
      { name: "AWS (S3, EC2)", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Redis", level: "proficient" },
      { name: "Kubernetes", level: "familiar" },
    ],
  },
  {
    name: "Integrations",
    items: [
      { name: "Stripe", level: "proficient" },
      { name: "Firebase Auth", level: "proficient" },
      { name: "Shopify", level: "proficient" },
      { name: "FedEx / UPS APIs", level: "proficient" },
      { name: "Happy Returns", level: "proficient" },
    ],
  },
  {
    name: "AI-Assisted Dev",
    items: [
      { name: "Claude Code", level: "proficient" },
      { name: "Cursor", level: "proficient" },
    ],
  },
];
