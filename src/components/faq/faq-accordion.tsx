"use client";

import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TiltCard } from "@/components/motion/tilt-card";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

export const FAQAccordion = () => {
  return (
    <section id="faq" className="py-24 bg-white/80 backdrop-blur-[2px] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#0b1f3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            Everything you need to know about ADMYRA&apos;s programs, institutional partnerships, and placement operations.
          </p>
        </ScrollReveal>

        {/* 2-Column Split Layout (Adopting Reference FAQ Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Guide Card ("What would you like to know about Us") */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <TiltCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white border-2 border-amber-400/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 p-2 rounded-2xl bg-white shadow-lg border border-amber-300/50 flex items-center justify-center mb-6">
                  <Image
                    src="/logo-transparent.png"
                    alt="ADMYRA Crest"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black tracking-wider uppercase mb-4">
                  Support &amp; Guidance
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight leading-snug">
                  Have Questions About Our Ecosystem?
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Discover how our Placement Partnership Program, training methodologies, and recruiter drives create predictable career results.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/40">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Need Personal Consultation?</div>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 mt-0.5"
                    >
                      <span>Connect with our team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Sleek Accordion Drawer Items */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {SITE_DATA.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="p-1.5 sm:p-3 rounded-2xl border-2 border-slate-200/90 bg-slate-50/50 data-[state=open]:border-amber-400 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all"
                  >
                    <AccordionTrigger className="text-left font-black text-base sm:text-lg text-slate-900 px-3 sm:px-4 hover:text-amber-700 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed px-3 sm:px-4 pt-2 pb-3 font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
