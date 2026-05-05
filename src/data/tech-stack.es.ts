import type { TechCategory } from "./tech-stack";
import { techStack as techStackEn } from "./tech-stack";

const categoryNames: Record<string, string> = {
  Languages: "Lenguajes",
  Backend: "Backend",
  Frontend: "Frontend",
  "Databases & ORMs": "Bases de datos y ORMs",
  "Cloud & DevOps": "Cloud y DevOps",
  Integrations: "Integraciones",
  "AI-Assisted Dev": "Desarrollo con IA",
};

export const techStack: TechCategory[] = techStackEn.map((cat) => ({
  ...cat,
  name: categoryNames[cat.name] ?? cat.name,
}));
