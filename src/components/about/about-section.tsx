"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  GraduationCap,
  Briefcase,
  Rocket,
  Sprout,
} from "lucide-react";

const WHAT_WE_OFFER = [
  {
    icon: GraduationCap,
    title: "University & Admission Guidance",
    description:
      "We help students explore suitable universities and academic programs aligned with their aspirations. Our goal is to simplify the admission journey and help students make informed educational decisions.",
  },
  {
    icon: Briefcase,
    title: "Skill Development & Training",
    description:
      "Through the Admyra Training System, students can work on communication skills, professional skills, and industry-relevant capabilities to prepare for real-world opportunities.",
  },
  {
    icon: Rocket,
    title: "Learning & Earning Opportunities",
    description:
      "Eligible and interested students may explore performance-based earning opportunities by working with Admyra as Learning & Referral Partners, gaining practical exposure alongside their studies.",
  },
  {
    icon: Sprout,
    title: "Career Development & Placement Support",
    description:
      "We create a structured pathway toward internships, career development, and placement opportunities through industry connections, skill development, and employment-focused initiatives.",
  },
];

const MISSION_POINTS = [
  "Make education and admission guidance more accessible.",
  "Help students develop relevant professional and industry-ready skills.",
  "Create opportunities for practical learning and performance-based earnings.",
  "Support students in their transition from education to employment.",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-[2px] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* ── Row 1: Logo card + intro text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Visual card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] border-2 border-amber-400/40 shadow-2xl relative overflow-hidden text-white group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Logo */}
                <div className="w-full h-52 sm:h-64 lg:h-72 rounded-2xl bg-white p-4 sm:p-6 shadow-xl border border-slate-100 flex items-center justify-center mb-6 relative overflow-hidden group-hover:shadow-2xl transition-all">
                  <Image
                    src="/logo-transparent.png"
                    alt="Official ADMYRA Crest"
                    width={320}
                    height={320}
                    priority
                    className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 border border-amber-400/30">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  <span>Our Promise</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  Admission to Career
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 font-medium">
                  From Admission to Training, Training to Earning Opportunities, and Earning Opportunities to Career Development — Admyra builds the complete journey.
                </p>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/40">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">Learn. Grow. Earn. Build Your Career.</div>
                    <div className="text-[11px] sm:text-xs text-amber-300/90 font-semibold">Admyra — From Skills to Opportunity to Career</div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right — Intro narrative */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
                <Target className="w-3.5 h-3.5 text-amber-600" />
                About Admyra
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Empowering Students. Building Careers. Creating Opportunities.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                At Admyra, we believe that education should go beyond earning a degree. It should empower students with the right skills, practical exposure, professional experience, and meaningful career opportunities.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our vision is to build a complete education-to-employment ecosystem where a student&apos;s journey extends from Admission to Training, Training to Earning Opportunities, and Earning Opportunities to Career Development.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-l-4 border-amber-500 my-4 shadow-sm">
                <p className="text-base sm:text-lg font-black text-slate-900">
                  For us, admission is not the destination — it is the beginning of a student&apos;s career journey.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We aim to make quality education more accessible by helping students identify suitable universities and academic programs based on their career goals, interests, and individual requirements.
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-3">
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Admission Guidance
                </span>
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Skill Development
                </span>
                <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Career & Placement Support
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 shadow-lg font-black">
                  <a href="#solution" className="gap-2">
                    <span>See Our Solution</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto justify-center rounded-xl border-slate-300 hover:border-amber-500 hover:text-amber-900 hover:bg-amber-50/50 font-black">
                  <a href="#contact">Partner With Admyra</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Row 2: What We Offer ── */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full shadow-sm">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              What We Offer
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Complete Education-to-Employment Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHAT_WE_OFFER.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 0.08}>
                <TiltCard className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Row 3: Vision + Mission + Promise ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Vision */}
          <ScrollReveal direction="left" className="h-full">
            <TiltCard className="h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] border border-amber-400/30 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-5 border border-amber-400/30">
                <Target className="w-3 h-3 text-amber-400" />
                Our Vision
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">
                Beyond Education — Toward Employment &amp; Long-Term Career Growth
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our vision is to build an ecosystem where students don&apos;t simply complete their education — they develop the skills, experience, and opportunities needed to move confidently toward employment and long-term career growth.
              </p>
            </TiltCard>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal direction="up" delay={0.08} className="h-full">
            <TiltCard className="h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-amber-50 border border-amber-200 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-800 text-xs font-black uppercase tracking-wider mb-5 border border-amber-300">
                <CheckCircle2 className="w-3 h-3 text-amber-600" />
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                From Learning to Becoming Career-Ready Professionals
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                To create a structured ecosystem that connects Education, Skills, Experience, Earning Opportunities, and Employment — helping students move from learning to becoming career-ready professionals.
              </p>
              <ul className="space-y-3 mt-4">
                {MISSION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </ScrollReveal>

          {/* Promise */}
          <ScrollReveal direction="right" delay={0.16} className="md:col-span-2 lg:col-span-1 h-full">
            <TiltCard className="h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] border border-amber-400/30 shadow-xl text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-5 border border-amber-400/30">
                <Target className="w-3 h-3 text-amber-400" />
                Our Promise
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">
                More Than Guidance — A Pathway
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We strive to ensure that every student who connects with Admyra receives more than just educational guidance — they get access to a pathway designed to support their growth, skills, and career aspirations.
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <p className="text-xs font-black text-amber-300 leading-relaxed uppercase tracking-wide">
                  Admyra — From Admission to Skills, Skills to Opportunity, and Opportunity to Career
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
