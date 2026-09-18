"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Zap, Globe, Target, TrendingDown, TrendingUp, Layers } from "lucide-react";

/* ─── Icon map ───────────────────────────────────────────────────────────── */
const benefitIcons: Record<string, React.ReactNode> = {
  Zap:          <Zap          className="w-5 h-5 text-amber-700" />,
  Globe:        <Globe        className="w-5 h-5 text-amber-700" />,
  Target:       <Target       className="w-5 h-5 text-amber-700" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-amber-700" />,
  TrendingUp:   <TrendingUp   className="w-5 h-5 text-amber-700" />,
  Layers:       <Layers       className="w-5 h-5 text-amber-700" />,
};

/* ─── Pushpin ────────────────────────────────────────────────────────────── */
type PinColor = "darkgreen" | "black" | "lightgreen";
const PIN_COLORS: PinColor[] = ["darkgreen", "black", "lightgreen"];

const Pushpin = ({ color }: { color: PinColor }) => {
  const cfg = {
    darkgreen:  { top: "#1b4332", mid: "#2d6a4f", shine: "#52b788", shaft: "#1b4332" },
    black:      { top: "#111827", mid: "#1f2937", shine: "#6b7280", shaft: "#111827" },
    lightgreen: { top: "#4d7c0f", mid: "#84cc16", shine: "#bef264", shaft: "#4d7c0f" },
  }[color];

  return (
    <svg
      width="44"
      height="60"
      viewBox="0 0 44 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Needle / shaft */}
      <rect x="20" y="34" width="4" height="24" rx="2" fill={cfg.shaft} />

      {/* Shadow ellipse under dome */}
      <ellipse cx="22" cy="34" rx="13" ry="3.5" fill="rgba(0,0,0,0.18)" />

      {/* Main dome */}
      <circle cx="22" cy="20" r="17" fill={cfg.top} />

      {/* Mid highlight band */}
      <ellipse cx="22" cy="26" rx="14" ry="8" fill={cfg.mid} />

      {/* Top specular shine */}
      <ellipse
        cx="16"
        cy="13"
        rx="6"
        ry="4"
        fill={cfg.shine}
        opacity="0.55"
        transform="rotate(-30 16 13)"
      />

      {/* Tiny bright spot */}
      <circle cx="14" cy="12" r="2.5" fill="white" opacity="0.35" />
    </svg>
  );
};

/* ─── Note Card ──────────────────────────────────────────────────────────── */
const NoteCard = ({
  benefit,
  index,
  delay,
}: {
  benefit: (typeof SITE_DATA.benefits)[number];
  index: number;
  delay: number;
}) => {
  const pinColor = PIN_COLORS[index % 3];

  return (
    <ScrollReveal delay={delay}>
      {/* Outer wrapper — extra top space for the pushpin overhang */}
      <div className="relative pt-7 h-full">

        {/* Pushpin — sits centred on the top edge of the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <Pushpin color={pinColor} />
        </div>

        {/* Card */}
        <div
          className="
            relative z-10 flex flex-col h-full
            bg-white rounded-3xl
            px-7 pt-12 pb-8
            shadow-[0_4px_24px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.06)]
            hover:shadow-[0_8px_36px_rgba(0,0,0,0.13)]
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          {/* Icon badge */}
          <div className="w-12 h-12 rounded-xl bg-[#fdf5e4] border border-amber-200/60 flex items-center justify-center mb-5 shadow-sm">
            {benefitIcons[benefit.icon]}
          </div>

          {/* Title */}
          <h3 className="text-[1.05rem] font-black text-slate-900 tracking-tight leading-snug mb-3">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="text-[0.84rem] text-slate-500 leading-relaxed flex-1">
            {benefit.description}
          </p>

          {/* Bottom amber bar */}
          <div className="mt-7 h-[3px] w-9 bg-amber-500 rounded-full" />
        </div>
      </div>
    </ScrollReveal>
  );
};

/* ─── Section ────────────────────────────────────────────────────────────── */
export const WhyAdmyra = () => {
  return (
    <section
      id="why"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fefcf7 0%,#fdf8ee 50%,#faf6ed 100%)",
      }}
    >
      {/* Decorative ✦ corners — matches reference */}
      <span className="absolute top-6 right-8 text-amber-300/60 text-3xl select-none pointer-events-none leading-none">✦</span>
      <span className="absolute bottom-6 left-8 text-amber-300/50 text-2xl select-none pointer-events-none leading-none">✦</span>

      {/* Faint leaf / botanical shapes (bottom-left, matching reference) */}
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-amber-600" />
            Why Choose ADMYRA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-1">
            Built for Better Career Outcomes
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-4 leading-relaxed">
            Six pillars that establish ADMYRA as India&apos;s most reliable employability ecosystem.
          </p>
        </ScrollReveal>

        {/* Pinboard grid — extra row-gap for pushpin overhang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
          {SITE_DATA.benefits.map((benefit, i) => (
            <NoteCard
              key={benefit.title}
              benefit={benefit}
              index={i}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
