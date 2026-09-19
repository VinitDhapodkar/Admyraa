"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Building2, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 bg-slate-100/80 px-3.5 py-1.5 rounded-full border border-slate-200/80"
        >
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 font-bold">Services &amp; Solutions</span>
        </motion.div>

        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="block mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Digitally Enabled Real Employment Solutions
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]"
        >
          End-to-End Solutions for{" "}
          <span className="gradient-gold-text">Colleges, Students &amp; Employers</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed italic"
        >
          [Comprehensive service frameworks and tailored solutions for every stakeholder.]
        </motion.p>

        {/* Quick-Jump Stakeholder Track Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-3.5 pt-8 max-w-md sm:max-w-none mx-auto"
        >
          <Button asChild variant="outline" className="w-full sm:w-auto rounded-2xl border-slate-300 hover:border-amber-500 hover:bg-amber-50/60 font-bold text-slate-800 shadow-sm justify-center">
            <a href="#universities" className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>For Universities</span>
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto rounded-2xl border-slate-300 hover:border-amber-500 hover:bg-amber-50/60 font-bold text-slate-800 shadow-sm justify-center">
            <a href="#students" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600 shrink-0" />
              <span>For Students</span>
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto rounded-2xl border-slate-300 hover:border-amber-500 hover:bg-amber-50/60 font-bold text-slate-800 shadow-sm justify-center">
            <a href="#companies" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600 shrink-0" />
              <span>For Employers</span>
            </a>
          </Button>

          <Button asChild className="w-full sm:w-auto rounded-2xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-400/40 shadow-md font-bold justify-center">
            <a href="#inquire" className="flex items-center gap-2">
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
