import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnimatedBackground } from "@/components/background/animated-background";
import { AboutHero } from "@/components/about/about-hero";
import { AboutSection } from "@/components/about/about-section";
import { VisionMission } from "@/components/vision/vision-mission";
import { StatsSection } from "@/components/stats/stats-section";
import { WhyAdmyra } from "@/components/benefits/why-admyra";
import { TeamSection } from "@/components/team/team-section";
import { FinalCTA } from "@/components/final-cta/final-cta";

export const metadata: Metadata = {
  title: "About Us — ADMYRA | Digitally Enabled Real Employment",
  description:
    "Learn about ADMYRA's vision, mission, leadership, and our structured ecosystem connecting education, skills, experience, earning opportunities, and employment.",
  keywords: [
    "about admyra",
    "digitally enabled real employment",
    "higher education employability",
    "placement partnership ecosystem",
    "admyra leadership",
    "student career readiness",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-transparent selection:bg-amber-500 selection:text-slate-950 relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <AboutHero />
      <AboutSection />
      <VisionMission />
      <StatsSection />
      <WhyAdmyra />
      <TeamSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
