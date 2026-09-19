import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { StatsSection } from "@/components/stats/stats-section";
import { AboutSection } from "@/components/about/about-section";
import { ProblemCards } from "@/components/problems/problem-cards";
import { SolutionJourney } from "@/components/solution/solution-journey";
import { ProcessTimeline } from "@/components/process/process-timeline";
import { ServiceCards } from "@/components/services/service-cards";
import { WhyAdmyra } from "@/components/benefits/why-admyra";

import { PartnershipCards } from "@/components/partnerships/partnership-cards";
import { VisionMission } from "@/components/vision/vision-mission";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { TeamSection } from "@/components/team/team-section";
import { FinalCTA } from "@/components/final-cta/final-cta";
import { ContactForms } from "@/components/contact/contact-forms";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnimatedBackground } from "@/components/background/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-transparent selection:bg-amber-500 selection:text-slate-950 relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProblemCards />
      <SolutionJourney />
      <ProcessTimeline />
      <ServiceCards />
      <WhyAdmyra />

      <PartnershipCards />
      <VisionMission />
      <TeamSection />
      <FAQAccordion />
      <FinalCTA />
      <ContactForms />
      <Footer />
    </main>
  );
}
