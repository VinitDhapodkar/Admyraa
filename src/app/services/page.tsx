import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnimatedBackground } from "@/components/background/animated-background";
import { ServicesHero } from "@/components/services-page/services-hero";
import { ServicesTracks } from "@/components/services-page/services-tracks";
import { ServicesMethodology } from "@/components/services-page/services-methodology";
import { ServicesComparison } from "@/components/services-page/services-comparison";
import { ServicesCTA } from "@/components/services-page/services-cta";

export const metadata: Metadata = {
  title: "Services & Solutions — ADMYRA | Digitally Enabled Real Employment",
  description:
    "Comprehensive employability and placement support services for colleges, students, and corporate recruiters. Learn how ADMYRA bridges the gap to verified employment.",
  keywords: [
    "campus recruitment services",
    "employability training programs",
    "fresher hiring solutions",
    "college placement cell partner",
    "student career coaching",
    "pre-vetted freshers",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-transparent selection:bg-amber-500 selection:text-slate-950 relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <ServicesHero />
      <ServicesTracks />
      <ServicesMethodology />
      <ServicesComparison />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
