"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ServiceCards = () => {
  const [activeTab, setActiveTab] = useState("colleges");
  const currentService = SITE_DATA.services.find((s) => s.id === activeTab) || SITE_DATA.services[0];

  return (
    <section id="services" className="py-24 bg-slate-50/70 backdrop-blur-[2px] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Tailored Solutions for Every Stakeholder
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            Dedicated programs structured specifically for colleges, students, and hiring employers.
          </p>
        </ScrollReveal>

        {/* Tab Controls (Reference Style Segmented Pill) */}
        <div className="flex justify-center mb-10 sm:mb-12 px-2">
          <div className="flex w-full sm:w-auto max-w-full overflow-x-auto p-1 sm:p-1.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md">
            {SITE_DATA.services.map((svc) => {
              const isSelected = activeTab === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`relative flex-1 sm:flex-initial px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 whitespace-nowrap text-center ${
                    isSelected
                      ? "bg-[#0b1f3a] text-amber-400 shadow-md border border-amber-400/40"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {svc.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            {/* Features Grid */}
            <div className="lg:col-span-7">
              <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black uppercase tracking-wider mb-4">
                    <span>Program Deliverables</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-slate-900 mb-6 tracking-tight">
                    {currentService.heading}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {currentService.features.map((feat) => (
                      <div
                        key={feat}
                        className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-amber-400 hover:bg-amber-50/30 transition-all"
                      >
                        <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/70">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Service CTA Banner (High-Impact Dark Card) */}
            <div className="lg:col-span-5">
              <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white border-2 border-amber-400/40 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
                    Partner with ADMYRA
                  </span>
                  <h4 className="text-xl sm:text-3xl font-black mb-4 leading-snug text-white tracking-tight">
                    {currentService.heading}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    {currentService.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8">
                  <Button asChild size="lg" className="w-full justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-xl shadow-amber-950/30 rounded-xl transition-all h-12 sm:h-13">
                    <a href={currentService.ctaLink} className="gap-2">
                      <span>{currentService.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
