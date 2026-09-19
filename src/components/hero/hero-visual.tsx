"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/motion/tilt-card";
import { Briefcase, CheckCircle, Award, TrendingUp, UserCheck } from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative h-[440px] sm:h-[500px] lg:h-[560px] w-full max-w-full flex items-center justify-center overflow-hidden sm:overflow-visible">
      {/* Ambient Logo-Inspired Radial Glows */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-[#0b1f3a]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Card 1: Real Jobs */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 left-1 sm:top-4 sm:left-0 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-amber-200/70 shadow-xl shadow-amber-950/5 flex items-center gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60 shrink-0">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Real Jobs</div>
          <div className="text-[10px] sm:text-[11px] text-amber-700 font-semibold">120+ Partners</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Industry Ready */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-4 right-1 sm:top-10 sm:right-0 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-emerald-200/70 shadow-xl shadow-emerald-950/5 flex items-center gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/60 shrink-0">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Industry Ready</div>
          <div className="text-[10px] sm:text-[11px] text-emerald-700 font-semibold">Hands-on Vetted</div>
        </div>
      </motion.div>

      {/* Floating Card 3: Skills Matrix */}
      <motion.div
        animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-1 sm:bottom-16 sm:-left-2 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0b1f3a]/10 text-[#0b1f3a] flex items-center justify-center border border-[#0b1f3a]/15 shrink-0">
          <Award className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Market Skills</div>
          <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Tech + Soft Skills</div>
        </div>
      </motion.div>

      {/* Floating Card 4: Learning to Earning */}
      <motion.div
        animate={{ y: [0, -9, 0], rotate: [-1.5, 0.5, -1.5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-3 right-1 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-amber-200/70 shadow-xl flex items-center gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center border border-amber-400/40 shrink-0">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Learn → Earn</div>
          <div className="text-[10px] sm:text-[11px] text-amber-700 font-semibold">Career Track</div>
        </div>
      </motion.div>

      {/* Floating Card 5: Career Ready (Visible on tablets and desktop) */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [1, -0.5, 1] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-8 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-300/70 shadow-xl items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-[#0b1f3a] text-amber-400 flex items-center justify-center shadow-md shrink-0">
          <UserCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Career Ready</div>
          <div className="text-[11px] text-slate-600 font-medium">Mocks &amp; Resumes</div>
        </div>
      </motion.div>

      {/* Central 3D Interactive Centerpiece featuring official ADMYRA Crest */}
      <TiltCard className="w-64 sm:w-80 max-w-[90vw] h-[370px] sm:h-[420px] bg-gradient-to-b from-white via-amber-50/20 to-slate-50/80 rounded-3xl border border-amber-300/60 shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative z-10 group hover:border-amber-400 transition-all">
        {/* Animated Golden Celestial Orbit Ring echoing the logo swoosh */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-4 sm:mb-5">
          {/* Outer rotating dashed gold ring */}
          <div
            className="absolute -inset-2.5 sm:-inset-3 rounded-full border-2 border-dashed border-amber-400/60 animate-spin"
            style={{ animationDuration: "24s" }}
          />
          {/* Pulsing ambient gold backdrop */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 blur-md animate-pulse" />
          
          {/* Logo container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 p-2 rounded-2xl bg-white shadow-xl border border-amber-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-transparent.png"
              alt="Official ADMYRA Crest"
              width={100}
              height={100}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1 sm:mb-1.5">
          AD<span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">MYRA</span> Ecosystem
        </h3>
        <p className="text-xs font-medium text-slate-600 mb-4 sm:mb-5 leading-relaxed max-w-[220px] sm:max-w-[240px]">
          Empowered Students. Structured Training. Real Employment.
        </p>

        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 border border-amber-300/80 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Active Institutional Network
        </div>
      </TiltCard>
    </div>
  );
};
