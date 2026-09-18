"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/motion/tilt-card";
import { Briefcase, CheckCircle, Award, TrendingUp, UserCheck } from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative h-[500px] lg:h-[560px] flex items-center justify-center">
      {/* Ambient Logo-Inspired Radial Glows */}
      <div className="absolute w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bg-[#0b1f3a]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Card 1: Real Jobs */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -left-4 sm:left-0 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200/70 shadow-xl shadow-amber-950/5 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60">
          <Briefcase className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Real Jobs</div>
          <div className="text-[11px] text-amber-700 font-semibold">120+ Hiring Partners</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Industry Ready */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-10 -right-4 sm:right-0 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-200/70 shadow-xl shadow-emerald-950/5 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/60">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Industry Ready</div>
          <div className="text-[11px] text-emerald-700 font-semibold">Hands-on Vetted</div>
        </div>
      </motion.div>

      {/* Floating Card 3: Skills Matrix */}
      <motion.div
        animate={{ y: [0, -9, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 -left-6 sm:-left-2 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-[#0b1f3a]/10 text-[#0b1f3a] flex items-center justify-center border border-[#0b1f3a]/15">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Market Skills</div>
          <div className="text-[11px] text-slate-600 font-medium">Tech + Communication</div>
        </div>
      </motion.div>

      {/* Floating Card 4: Learning to Earning */}
      <motion.div
        animate={{ y: [0, -11, 0], rotate: [-1.5, 0.5, -1.5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-200/70 shadow-xl flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center border border-amber-400/40">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Learning → Earning</div>
          <div className="text-[11px] text-amber-700 font-semibold">Clear Career Track</div>
        </div>
      </motion.div>

      {/* Floating Card 5: Career Ready */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [1, -0.5, 1] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-300/70 shadow-xl flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-[#0b1f3a] text-amber-400 flex items-center justify-center shadow-md">
          <UserCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Career Ready</div>
          <div className="text-[11px] text-slate-600 font-medium">Mocks &amp; Resumes</div>
        </div>
      </motion.div>

      {/* Central 3D Interactive Centerpiece featuring official ADMYRA Crest */}
      <TiltCard className="w-72 sm:w-84 h-[420px] bg-gradient-to-b from-white via-amber-50/20 to-slate-50/80 rounded-3xl border border-amber-300/60 shadow-2xl p-8 flex flex-col items-center justify-center text-center relative z-10 group hover:border-amber-400 transition-all">
        {/* Animated Golden Celestial Orbit Ring echoing the logo swoosh */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-5">
          {/* Outer rotating dashed gold ring */}
          <div
            className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-400/60 animate-spin"
            style={{ animationDuration: "24s" }}
          />
          {/* Pulsing ambient gold backdrop */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 blur-md animate-pulse" />
          
          {/* Logo container */}
          <div className="relative w-28 h-28 p-2 rounded-2xl bg-white shadow-xl border border-amber-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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

        <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1.5">
          AD<span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">MYRA</span> Ecosystem
        </h3>
        <p className="text-xs font-medium text-slate-600 mb-5 leading-relaxed max-w-[240px]">
          Empowered Students. Structured Training. Real Employment.
        </p>

        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Active Institutional Network
        </div>
      </TiltCard>
    </div>
  );
};
