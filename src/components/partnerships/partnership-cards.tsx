"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react";

export const PartnershipCards = () => {
  return (
    <section id="partnerships" className="py-24 bg-white/80 backdrop-blur-[2px] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            Partnership Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Choose the Right Partnership for Your Goals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            Tailored engagement tiers crafted for colleges and universities committed to excellence.
          </p>
        </ScrollReveal>

        {/* Package Tiers Grid (Adopting Reference Knowledge Packs UI Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SITE_DATA.partnerships.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 0.12} className="h-full">
              <TiltCard
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-between relative group ${
                  tier.popular
                    ? "border-amber-400 bg-gradient-to-b from-[#0b1f3a] to-[#050e1d] text-white shadow-2xl shadow-amber-950/20 lg:scale-105 z-10"
                    : "border-slate-200/90 bg-white text-slate-900 hover:border-amber-400/80 shadow-md"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        tier.popular
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                          : "bg-amber-50 text-amber-900 border border-amber-200"
                      }`}
                    >
                      {tier.tier}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-black mb-3 tracking-tight ${
                      tier.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium ${
                      tier.popular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <div
                    className={`h-px my-6 ${
                      tier.popular ? "bg-white/15" : "bg-slate-200"
                    }`}
                  />

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-center gap-3 text-sm font-semibold ${
                          tier.popular ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            tier.popular ? "text-amber-400" : "text-emerald-600"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`w-full justify-center rounded-xl font-black transition-all h-12 ${
                    tier.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-950/30"
                      : "bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40"
                  }`}
                >
                  <a href="#contact" className="gap-2">
                    <span>{tier.cta}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        tier.popular ? "text-slate-950" : "text-amber-400"
                      }`}
                    />
                  </a>
                </Button>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
