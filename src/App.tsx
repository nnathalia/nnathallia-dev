import { Navigation } from "./components/layout/navigation";
import { AboutSection } from "./components/sections/about-section";
import { ContactSection } from "./components/sections/contact-section";
import { HeroSection } from "./components/sections/hero-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { SkillsSection } from "./components/sections/skills-section";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
