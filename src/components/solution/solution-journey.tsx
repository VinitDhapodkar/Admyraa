"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Search, BookOpen, MessageSquare, Handshake, CheckCircle2, ArrowRight, Layers, Target } from "lucide-react";
import { motion } from "framer-motion";

const solutionIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
};

const smallSolutionIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-3.5 h-3.5" />,
  BookOpen: <BookOpen className="w-3.5 h-3.5" />,
  MessageSquare: <MessageSquare className="w-3.5 h-3.5" />,
  Handshake: <Handshake className="w-3.5 h-3.5" />,
  CheckCircle2: <CheckCircle2 className="w-3.5 h-3.5" />,
};

export const SolutionJourney = () => {
  const [activeStep, setActiveStep] = useState(1);
  const activeData = SITE_DATA.solutionSteps.find((s) => s.step === activeStep) || SITE_DATA.solutionSteps[0];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-white/75 via-slate-50/50 to-white/75 backdrop-blur-[2px] relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0b1f3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-amber-600" />
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            A Complete Employability &amp; Placement Ecosystem
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            ADMYRA provides a complete ecosystem designed to improve career outcomes across 5 synchronized stages.
          </p>
        </ScrollReveal>

        {/* FLOW DIAGRAM: Interactive Stepper Bar with Clean Vector Icons */}
        <div className="mb-12 relative">
          {/* Connecting Track Line behind steps (desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-slate-200 -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-[#0b1f3a]"
              initial={{ width: "20%" }}
              animate={{ width: `${(activeStep / 5) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {SITE_DATA.solutionSteps.map((step) => {
              const isActive = activeStep === step.step;
              const isPassed = activeStep >= step.step;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`group relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0b1f3a] text-white border-amber-400 shadow-xl shadow-amber-950/15 -translate-y-1.5"
                      : isPassed
                      ? "bg-white text-slate-900 border-amber-200 hover:border-amber-400 hover:shadow-md"
                      : "bg-white/80 text-slate-700 border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                        isActive
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      <span className={isActive ? "text-amber-300" : "text-amber-600"}>
                        {smallSolutionIcons[step.icon]}
                      </span>
                      <span>Step - 0{step.step}</span>
                    </span>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                        isActive
                          ? "bg-amber-400 text-slate-950 scale-110 shadow-md"
                          : isPassed
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="font-bold text-sm tracking-tight line-clamp-1">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STAGE SHOWCASE CARD with Clean Professional Icons */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white border-2 border-amber-400/40 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Step Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black tracking-wider uppercase">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Stage 0{activeData.step} of 05 in the Ecosystem</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {activeData.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
                {activeData.desc}
              </p>

              {/* Navigation stepper buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed border border-white/10 transition-all"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStep === 5}
                  onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Step Visual Emblem */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-amber-400/30 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center shadow-2xl group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {solutionIcons[activeData.icon]}
                </div>
                <div className="text-2xl font-black text-white">Step 0{activeData.step}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5-Step Grid Cards: Full View with Vector Icons (No Emojis) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {SITE_DATA.solutionSteps.map((step) => {
            const isCurrent = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-center relative ${
                  isCurrent
                    ? "border-amber-400 bg-amber-50/70 shadow-lg -translate-y-1"
                    : "border-slate-200/90 bg-white hover:border-amber-300 hover:shadow-md"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  {solutionIcons[step.icon]}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1.5">
                  Step - 0{step.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-medium">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
