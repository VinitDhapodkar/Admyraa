"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Building2, Users, Briefcase, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
};

export const StatsSection = () => {
  return (
    <section id="stats" className="py-20 bg-white/75 backdrop-blur-[2px] border-b border-slate-200/60 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Students, Colleges &amp; Companies
          </h2>
        </ScrollReveal>

        {/* High-Impact Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.1}
              className="p-8 rounded-3xl bg-white/90 border-2 border-slate-200/80 hover:bg-white hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/5 hover:-translate-y-1.5 transition-all duration-300 text-center group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-[#0b1f3a] group-hover:text-amber-400 group-hover:border-[#0b1f3a] transition-all shadow-sm">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-2">
                  {stat.number === 0 ? "0" : stat.number >= 1000 ? stat.number.toLocaleString("en-IN") : stat.number}
                  <span className="text-amber-600">{stat.suffix}</span>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-600 mt-2">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Proof Trust Pill (matching reference's "Loved by thousands..." banner) */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white border border-amber-400/30 shadow-lg text-xs sm:text-sm font-semibold">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verified Impact
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-200">
              Connecting academic potential with enterprise opportunities nationwide
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
