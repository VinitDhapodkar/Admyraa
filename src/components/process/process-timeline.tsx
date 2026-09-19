"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FileText, Activity, BookOpen, UserCheck, Briefcase, Award, ArrowRight, Compass } from "lucide-react";

const processIcons: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  UserCheck: <UserCheck className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

// Map step to appropriate professional icon (replacing AI processor/sparkle icons)
const stepIconMap: Record<number, React.ReactNode> = {
  1: <FileText className="w-6 h-6" />,
  2: <Activity className="w-6 h-6" />,
  3: <BookOpen className="w-6 h-6" />,
  4: <UserCheck className="w-6 h-6" />,
  5: <Briefcase className="w-6 h-6" />,
  6: <Award className="w-6 h-6" />,
};

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white relative overflow-hidden">
      {/* Subtle gold and navy ambient glow backdrops */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-300 uppercase bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Structured Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Learn. Prepare. Get Hired.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3.5 leading-relaxed font-medium">
            A structured roadmap converting candidate potential into verified career placement.
          </p>
        </ScrollReveal>

        {/* FLOW DIAGRAM: Connected Roadmap Steps with Professional Icons */}
        <div className="relative">
          {/* Animated Glowing Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 pointer-events-none z-0">
            <svg className="w-full h-2 overflow-visible">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(245, 158, 11, 0.4)"
                strokeWidth="2"
                className="animate-flow-dash"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
            {SITE_DATA.processTimeline.map((item, i) => (
              <ScrollReveal
                key={item.label}
                delay={i * 0.1}
                className="group relative p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-amber-400/25 backdrop-blur-xl text-center hover:bg-white/[0.09] hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Flow indicator arrow for desktop between cards */}
                {i < SITE_DATA.processTimeline.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0b1f3a] border border-amber-400/50 items-center justify-center text-amber-400 z-20 shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                <div>
                  {/* Clean Step Pill Header (No Emojis) */}
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-black uppercase tracking-wider mb-4">
                    Step - 0{item.step}
                  </div>

                  {/* Step Professional Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all border border-amber-400/30 shadow-lg shadow-amber-950/20">
                    {stepIconMap[item.step] || processIcons[item.icon]}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                    {item.label}
                  </h3>
                </div>

                {/* Subtitle */}
                <p className="text-xs text-slate-300 leading-relaxed font-medium mt-2 pt-2 border-t border-white/10">
                  {item.sub}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
