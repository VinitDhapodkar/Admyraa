"use client";

import React from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Briefcase, ArrowRight, Target } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-28 bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white relative overflow-hidden">
      {/* Background Floating Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal className="max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-300 uppercase bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            Take Action
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Build the Future of Employability With ADMYRA
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Whether you are a College, University, Student, or Company — ADMYRA can help you build a stronger future through employability and placement solutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Colleges */}
          <ScrollReveal delay={0.1} className="h-full">
            <TiltCard className="p-8 sm:p-9 rounded-3xl bg-white/[0.06] border-2 border-amber-400/30 backdrop-blur-xl hover:bg-white/[0.1] hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center h-full flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-amber-400/15 text-amber-400 flex items-center justify-center mx-auto mb-5 border border-amber-400/30 group-hover:scale-110 transition-transform shadow-lg shadow-amber-950/30">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">Colleges &amp; Universities</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Elevate your institution&apos;s placement records and provide students with industry-tested training.
                </p>
              </div>
              <Button asChild size="lg" className="w-full justify-center rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-950/30 h-12">
                <a href="#contact" className="gap-2">
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </TiltCard>
          </ScrollReveal>

          {/* Students */}
          <ScrollReveal delay={0.2} className="h-full">
            <TiltCard className="p-8 sm:p-9 rounded-3xl bg-white/[0.06] border-2 border-amber-400/30 backdrop-blur-xl hover:bg-white/[0.1] hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center h-full flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mx-auto mb-5 border border-white/20 group-hover:scale-110 transition-transform shadow-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">Students</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Gain the skills, mentorship, and interview connections required to step into your dream career.
                </p>
              </div>
              <Button asChild size="lg" className="w-full justify-center rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-black shadow-lg h-12">
                <a href="#contact" className="gap-2">
                  <span>Start Career Journey</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </a>
              </Button>
            </TiltCard>
          </ScrollReveal>

          {/* Companies */}
          <ScrollReveal delay={0.3} className="h-full">
            <TiltCard className="p-8 sm:p-9 rounded-3xl bg-white/[0.06] border-2 border-amber-400/30 backdrop-blur-xl hover:bg-white/[0.1] hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center h-full flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-400/30 group-hover:scale-110 transition-transform shadow-lg">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">Companies</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Cut onboarding cycles and hire pre-vetted, job-ready freshers tailored to your exact tech stack.
                </p>
              </div>
              <Button asChild size="lg" className="w-full justify-center rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-950/30 h-12">
                <a href="#contact" className="gap-2">
                  <span>Hire Pre-Skilled Talent</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
