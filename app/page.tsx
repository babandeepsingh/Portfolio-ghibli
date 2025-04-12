import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import FloatingNav from "@/components/floating-nav";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="min-h-screen">
      {/* <Button variant="outline">Button</Button> */}
      <FloatingNav />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      </main>
    // </div>
  );
}
