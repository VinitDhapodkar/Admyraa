import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/about/about-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnimatedBackground } from "@/components/background/animated-background";

export const metadata: Metadata = {
  title: "About Us — ADMYRA | Digitally Enabled Real Employment",
  description:
    "Empowering Students. Building Careers. Creating Opportunities. Learn more about ADMYRA — Digitally Enabled Real Employment.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-transparent selection:bg-amber-500 selection:text-slate-950 relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
