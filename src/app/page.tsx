import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";

// Dynamically import below-the-fold sections to improve initial load time
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const EducationSection = dynamic(() => import("@/components/sections/EducationSection"));
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <main className="md:ml-20 font-sans selection:bg-secondary selection:text-primary scroll-smooth">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ArchitectureSection />
      <ContactSection />
    </main>
  );
}
