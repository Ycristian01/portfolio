import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import type { Role } from "@/data/experience";
import type { TechCategory } from "@/data/tech-stack";
import type { UiStrings } from "@/data/ui-strings.en";

export type { UiStrings };

export type PersonalData = {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  tagline: string;
  eyebrow: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string | null;
  calendly: string | null;
  languages: string[];
  bio: string[];
};

export type SiteContent = {
  personal: PersonalData;
  nav: { label: string; href: string }[];
  services: Service[];
  projects: Project[];
  experience: Role[];
  techStack: TechCategory[];
  ui: UiStrings;
};

export async function getContent(locale: "en" | "es"): Promise<SiteContent> {
  if (locale === "es") {
    const [
      { personal },
      { navLinks },
      { services },
      { projects },
      { experience },
      { techStack },
      { ui },
    ] = await Promise.all([
      import("@/data/personal.es"),
      import("@/data/navigation.es"),
      import("@/data/services.es"),
      import("@/data/projects.es"),
      import("@/data/experience.es"),
      import("@/data/tech-stack.es"),
      import("@/data/ui-strings.es"),
    ]);
    return { personal, nav: navLinks, services, projects, experience, techStack, ui };
  }

  const [
    { personal },
    { navLinks },
    { services },
    { projects },
    { experience },
    { techStack },
    { ui },
  ] = await Promise.all([
    import("@/data/personal"),
    import("@/data/navigation"),
    import("@/data/services"),
    import("@/data/projects"),
    import("@/data/experience"),
    import("@/data/tech-stack"),
    import("@/data/ui-strings.en"),
  ]);
  return { personal, nav: navLinks, services, projects, experience, techStack, ui };
}
