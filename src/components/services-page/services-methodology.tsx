"use client";

import React from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { CheckCircle2, Workflow, ArrowRight, FileSearch, Code2, Users, ShieldCheck, Briefcase, Award } from "lucide-react";

export const ServicesMethodology = () => {
  const steps = [
    {
      step: "01",
      title: "[Stage 01 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <FileSearch className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 01]",
    },
    {
      step: "02",
      title: "[Stage 02 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <Code2 className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 02]",
    },
    {
      step: "03",
      title: "[Stage 03 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <Users className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 03]",
    },
    {
      step: "04",
      title: "[Stage 04 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 04]",
    },
    {
      step: "05",
      title: "[Stage 05 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 05]",
    },
    {
      step: "06",
      title: "[Stage 06 Title]",
      description: "[Stage description and execution details will be added here.]",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      detail: "[Key Outcome 06]",
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-[#0b1f3a] via-[#102a4e] to-[#050e1d] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            [Methodology / Delivery Framework]
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3.5 leading-relaxed italic">
            [Content for this section will be added soon.]
          </p>
        </ScrollReveal>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => (
            <ScrollReveal key={item.step} delay={idx * 0.08}>
              <TiltCard className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/40 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-amber-400/70 group-hover:text-amber-400 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.detail}</span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
