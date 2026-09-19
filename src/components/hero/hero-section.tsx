"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./hero-visual";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { SkillMarqueeTicker } from "@/components/motion/marquee";

export const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 overflow-hidden bg-gradient-to-b from-amber-50/30 via-slate-50/30 to-transparent">
      {/* Background radial highlights */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0b1f3a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-900 text-xs font-black uppercase tracking-wider shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              {SITE_DATA.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]"
            >
              Bridging the Gap Between{" "}
              <span className="gradient-gold-text">{SITE_DATA.hero.highlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {SITE_DATA.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full"
            >
              <Button asChild size="lg" className="w-full sm:w-auto justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 shadow-lg shadow-amber-950/20 hover:border-amber-400 gap-2 font-bold transition-all">
                <a href="#contact">
                  <span>{SITE_DATA.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto justify-center rounded-xl border-slate-300 hover:border-amber-500 hover:text-amber-800 hover:bg-amber-50/50 transition-colors font-bold">
                <a
                  href="/about"
                  onClick={(e) => {
                    const el = document.getElementById("about");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.history.pushState(null, "", "/about");
                    }
                  }}
                >
                  {SITE_DATA.hero.secondaryCta}
                </a>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto justify-center rounded-xl gap-2 text-slate-800 bg-slate-100 hover:bg-amber-50 hover:text-amber-800 transition-colors font-bold"
              >
                <Play className="w-4 h-4 fill-amber-500 text-amber-500" />
                {SITE_DATA.hero.videoCta}
              </Button>
            </motion.div>

            {/* Tagline pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs font-bold uppercase tracking-widest text-slate-400"
            >
              <span className="px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/70 font-bold shrink-0">Motto</span>
              <span className="text-slate-600 font-semibold">{SITE_DATA.brand.tagline}</span>
            </motion.div>
          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Ticker directly below Hero (matching reference) */}
      <SkillMarqueeTicker />

      {/* Video Modal Dialog */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="sm:max-w-xl p-0 overflow-hidden bg-slate-950 text-white border-slate-800">
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
              <Play className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-black text-white text-center">
                How ADMYRA Transforms Careers
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-center text-sm max-w-md mx-auto leading-relaxed">
                ADMYRA connects higher education to enterprise recruiters through structured diagnostic assessment, hands-on skill training, interview grooming, and placement drives.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4 px-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-around text-xs font-bold">
              <span>1. Assess</span>
              <span>→</span>
              <span>2. Train</span>
              <span>→</span>
              <span>3. Groom</span>
              <span>→</span>
              <span className="text-emerald-400">4. Get Hired</span>
            </div>

            <Button
              className="w-full justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
              onClick={() => {
                setVideoModalOpen(false);
                window.location.href = "#contact";
              }}
            >
              Schedule an Institutional Consultation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
