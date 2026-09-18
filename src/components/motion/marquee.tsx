"use client";

import React from "react";

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
}

const Pill = ({ label }: { label: string }) => (
  <li className="marquee-pill inline-flex items-center gap-2.5 mx-2.5 px-4 py-2 rounded-xl bg-white/5 border border-amber-400/20 text-slate-200 text-xs sm:text-sm font-bold tracking-wide shadow-sm cursor-default shrink-0">
    <span>{label}</span>
    <span className="text-amber-400 text-[10px] leading-none select-none" aria-hidden>✦</span>
  </li>
);

export const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction = "left" }) => {
  const animClass = direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="marquee-viewport">
      {/* Two identical lists — the second is aria-hidden so screen readers skip it */}
      <ul className={`marquee-track ${animClass}`} aria-label="marquee">
        {items.map((item) => <Pill key={item} label={item} />)}
      </ul>
      <ul className={`marquee-track ${animClass}`} aria-hidden="true">
        {items.map((item) => <Pill key={item} label={item} />)}
      </ul>
    </div>
  );
};

export const SkillMarqueeTicker: React.FC = () => {
  const row1 = [
    "Campus Recruitment Support",
    "Employability Enhancement",
    "Soft Skills & Communication",
    "Technical Assessments",
    "Mock Interview Simulations",
    "Corporate Connect",
    "Resume Building & Optimization",
    "Direct Placement Drives",
  ];

  const row2 = [
    "Job-Oriented Training",
    "Pre-Skilled Candidate Sourcing",
    "Career Guidance & Mentorship",
    "Industry Interaction Sessions",
    "Placement Tracking & Analytics",
    "Workforce Development",
    "Internship & Apprenticeship",
    "Verified Employment",
  ];

  return (
    <div className="w-full py-7 bg-gradient-to-r from-[#050e1d] via-[#0b1f3a] to-[#050e1d] border-y border-amber-400/25 relative overflow-hidden shadow-2xl">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#050e1d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#050e1d] to-transparent" />

      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </div>
  );
};
