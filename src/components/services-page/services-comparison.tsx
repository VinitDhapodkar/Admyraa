"use client";

import React from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Check, X, Scale } from "lucide-react";

export const ServicesComparison = () => {
  const comparisonData = [
    {
      feature: "[Evaluation Metric 01]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
    {
      feature: "[Evaluation Metric 02]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
    {
      feature: "[Evaluation Metric 03]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
    {
      feature: "[Evaluation Metric 04]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
    {
      feature: "[Evaluation Metric 05]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
    {
      feature: "[Evaluation Metric 06]",
      traditional: "[Traditional approach details will be added here.]",
      admyra: "[ADMYRA approach details will be added here.]",
    },
  ];

  return (
    <section className="py-24 bg-white/80 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Scale className="w-3.5 h-3.5 text-amber-600" />
            Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            [Comparison: Traditional Model vs. ADMYRA Model]
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3.5 leading-relaxed italic">
            [Content for this section will be added soon.]
          </p>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-3xl border-2 border-slate-200/90 overflow-hidden bg-white shadow-xl">
            <div className="grid grid-cols-12 bg-slate-100/90 border-b border-slate-200 p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700">
              <div className="col-span-4 sm:col-span-4">Evaluation Metric</div>
              <div className="col-span-4 sm:col-span-4 text-slate-500">Traditional Approach</div>
              <div className="col-span-4 sm:col-span-4 text-amber-700 font-extrabold">ADMYRA DERE Model</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-12 p-5 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <div className="col-span-4 sm:col-span-4 font-bold text-slate-900 pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-2 pr-2">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 font-semibold text-slate-900 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-emerald-950 font-bold">{row.admyra}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
