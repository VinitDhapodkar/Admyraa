"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { GraduationCap, Building2, School, AlertCircle, Target } from "lucide-react";

const problemIcons: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  Building: <Building2 className="w-7 h-7" />,
  School: <School className="w-7 h-7" />,
};

export const ProblemCards = () => {
  return (
    <section id="problem" className="py-24 bg-slate-50/75 backdrop-blur-[2px] border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-amber-600" />
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Different Challenges. One Solution.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            Students, universities, and corporate recruiters face distinct roadblocks that ADMYRA unifies under a single platform.
          </p>
        </ScrollReveal>

        {/* Cohesive, Harmonious Cards (Consistent with Website UI Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SITE_DATA.problems.map((prob, i) => (
            <ScrollReveal
              key={prob.title}
              direction={i === 0 ? "left" : i === 1 ? "up" : "right"}
              delay={i * 0.15}
              className={`h-full ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200/80 shadow-md hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-[#0b1f3a] group-hover:text-amber-400 group-hover:border-[#0b1f3a] transition-all duration-300">
                      {problemIcons[prob.icon]}
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/90 group-hover:bg-amber-50 group-hover:text-amber-900 group-hover:border-amber-200 transition-colors">
                      Focus Area 0{i + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                    {prob.title}
                  </h3>

                  {/* Challenge Bullet Points */}
                  <ul className="space-y-3.5">
                    {prob.challenges.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-sm leading-relaxed font-medium text-slate-600"
                      >
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle, elegant card footer accent consistent with design system */}
                <div className="pt-8 mt-4 border-t border-slate-100">
                  <div className="h-1 w-12 bg-amber-400/40 rounded-full group-hover:w-full group-hover:bg-amber-400 transition-all duration-300" />
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
