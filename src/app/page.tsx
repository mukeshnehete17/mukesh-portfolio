import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import TerminalSection from "@/components/TerminalSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AIAssistantDemo from "@/components/AIAssistantDemo";
import SkillNodes from "@/components/SkillNodes";
import AchievementsDashboard from "@/components/AchievementsDashboard";
import EnhancedFooter from "@/components/EnhancedFooter";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <About />
      <SkillNodes />
      <TerminalSection />
      <ProjectsShowcase />
      <AIAssistantDemo />
      <AchievementsDashboard />
      <EnhancedFooter />
    </main>
  );
}
