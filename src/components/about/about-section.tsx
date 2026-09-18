"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-[2px] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Card with Official Crest (First Image Reference) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <TiltCard className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] border-2 border-amber-400/40 shadow-2xl relative overflow-hidden text-white group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Enhanced Pure White Logo Emblem Container with High-Res Image Quality */}
                <div className="w-full h-64 sm:h-72 rounded-2xl bg-white p-6 shadow-xl border border-slate-100 flex items-center justify-center mb-6 relative overflow-hidden group-hover:shadow-2xl transition-all">
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
                  <span>The Core Mission</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  From Degree to Career
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-medium">
                  Every year, thousands of degree holders lack the applied skills and interview readiness needed to land corporate jobs. ADMYRA bridges that exact divide.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/40">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Better Skills. Brighter Futures.</div>
                    <div className="text-xs text-amber-300/90 font-semibold">India&apos;s Trusted Employment Bridge</div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
                <Target className="w-3.5 h-3.5 text-amber-600" />
                About ADMYRA
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                From Education to Employment
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                Today, thousands of students complete their degrees every year but still struggle to find meaningful employment. At the same time, companies face challenges in finding skilled, job-ready candidates and spend significant resources on training fresh hires.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/90 border-l-4 border-amber-500 my-4 shadow-sm">
                <p className="text-base sm:text-lg font-black text-slate-900">
                  ADMYRA solves this gap.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                By partnering with colleges, universities, and industry leaders, we create a complete employability ecosystem that prepares students for real-world careers while helping companies access trained talent.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Practical Training
                </span>
                <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Corporate Mentorship
                </span>
                <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-2 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Placement Drives
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 shadow-lg font-black">
                  <a href="#solution" className="gap-2">
                    <span>See Our Solution</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border-slate-300 hover:border-amber-500 hover:text-amber-900 hover:bg-amber-50/50 font-black">
                  <a href="#contact">Partner With ADMYRA</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
