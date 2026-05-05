import { getContent } from "@/i18n/get-content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { ResumeCTA } from "@/components/sections/ResumeCTA";
import { Contact } from "@/components/sections/Contact";

export default async function HomeEs() {
  const content = await getContent("es");
  return (
    <>
      <Hero personal={content.personal} ui={content.ui} />
      <About personal={content.personal} ui={content.ui} />
      <Services personal={content.personal} services={content.services} ui={content.ui} />
      <Projects projects={content.projects} ui={content.ui} />
      <TechStack techStack={content.techStack} ui={content.ui} />
      <Experience experience={content.experience} ui={content.ui} />
      <ResumeCTA ui={content.ui} />
      <Contact personal={content.personal} ui={content.ui} />
    </>
  );
}
