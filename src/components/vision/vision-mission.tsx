"use client";

import React from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Target, Compass, ArrowRight, UserCheck, GraduationCap, Building2, Briefcase, Layers } from "lucide-react";

export const VisionMission = () => {
  return (
    <section id="vision" className="py-24 bg-slate-50/70 border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-amber-600" />
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Vision &amp; Mission
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed font-medium">
            Guiding India&apos;s education-to-employment transformation.
          </p>
        </ScrollReveal>

        {/* 2 Grand Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ScrollReveal direction="left" className="h-full">
            <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:border-[#0b1f3a] hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0b1f3a]/10 text-[#0b1f3a] border border-[#0b1f3a]/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0b1f3a] group-hover:text-amber-400 transition-all shadow-sm">
                  <Compass className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#0b1f3a] mb-2">Our Vision</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                  Beyond Education — Toward Employment &amp; Long-Term Career Growth
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  Our vision is to build an ecosystem where students don&apos;t simply complete their education — they develop the skills, experience, and opportunities needed to move confidently toward employment and long-term career growth.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right" className="h-full">
            <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:border-amber-400 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-sm">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-700 mb-2">Our Mission</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                  From Learning to Becoming Career-Ready Professionals
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  To create a structured ecosystem that connects Education, Skills, Experience, Earning Opportunities, and Employment — helping students move from learning to becoming career-ready professionals.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* FLOW DIAGRAM: Interactive Entity Connection Model with Clean Professional Vector Icons (Fifth Image) */}
        <ScrollReveal className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl text-center relative overflow-hidden">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-6">
            Ecosystem Connectivity Model
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-black">
            <div className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 text-slate-900 border-2 border-slate-200 shadow-sm hover:border-amber-400 transition-all flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Student</span>
            </div>

            <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 rotate-90 sm:rotate-0 transition-transform" />

            <div className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 text-slate-900 border-2 border-slate-200 shadow-sm hover:border-amber-400 transition-all flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Institution</span>
            </div>

            <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 rotate-90 sm:rotate-0 transition-transform" />

            {/* ADMYRA Ecosystem Node: Professional Layers Icon instead of AI Sparkles */}
            <div className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-amber-300 border-2 border-amber-400/60 shadow-xl shadow-amber-950/20 sm:scale-105 flex items-center justify-center gap-2.5">
              <Layers className="w-4 h-4 text-amber-400 shrink-0" />
              <span>ADMYRA Ecosystem</span>
            </div>

            <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 rotate-90 sm:rotate-0 transition-transform" />

            <div className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 text-slate-900 border-2 border-slate-200 shadow-sm hover:border-amber-400 transition-all flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Industry</span>
            </div>

            <ArrowRight className="w-5 h-5 text-amber-500 shrink-0 rotate-90 sm:rotate-0 transition-transform" />

            <div className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-emerald-50 text-emerald-800 border-2 border-emerald-300 flex items-center justify-center gap-2 shadow-sm">
              <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified Employment</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
