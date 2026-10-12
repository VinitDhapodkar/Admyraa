"use client";

import React from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Building2, GraduationCap, Briefcase, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const UNIVERSITY_PARTNERS = [
  {
    name: "Manipal University Jaipur",
    program: "Campus Employability & Placement Readiness Program",
    overview:
      "A structured collaboration focused on improving student employability through job-readiness training, interview preparation, and recruiter-facing placement support.",
    points: [
      "Department-wise skill diagnostics and baseline employability assessment",
      "Soft-skills, aptitude, and interview-readiness bootcamps",
      "Role-aligned technical finishing tracks for final-year students",
      "Mock interviews, resume clinics, and recruiter connect activities",
    ],
  },
  {
    name: "Shoolini University",
    program: "Industry-Linked Career Acceleration Program",
    overview:
      "A delivery model designed to bridge academic learning with hiring expectations through continuous mentoring, project-based upskilling, and placement execution support.",
    points: [
      "Career pathway planning for students across key disciplines",
      "Industry mentorship sessions and practical project orientation",
      "Structured preparation for GD, PI, and campus hiring rounds",
      "Placement tracking support with periodic performance insights",
    ],
  },
];

const ComingSoonBlock = ({ accentColor }: { accentColor: string }) => {
  const colorMap: Record<string, { border: string; bg: string; icon: string; badge: string; badgeBg: string; text: string }> = {
    emerald: {
      border: "border-emerald-200",
      bg: "bg-emerald-50/60",
      icon: "text-emerald-500",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      badgeBg: "",
      text: "text-emerald-700",
    },
    amber: {
      border: "border-amber-200",
      bg: "bg-amber-50/60",
      icon: "text-amber-500",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
      badgeBg: "",
      text: "text-amber-700",
    },
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50/60",
      icon: "text-blue-500",
      badge: "bg-blue-100 text-blue-700 border-blue-200",
      badgeBg: "",
      text: "text-blue-700",
    },
  };

  const c = colorMap[accentColor];

  return (
    <ScrollReveal delay={0.1}>
      <div
        className={`rounded-3xl border-2 border-dashed ${c.border} ${c.bg} flex flex-col items-center justify-center py-14 sm:py-20 px-4 sm:px-8 text-center gap-5`}
      >
        <div className={`w-16 h-16 rounded-2xl bg-white border ${c.border} flex items-center justify-center shadow-sm`}>
          <Clock className={`w-8 h-8 ${c.icon}`} />
        </div>
        <div>
          <span
            className={`inline-block text-xs font-extrabold tracking-widest uppercase border rounded-full px-4 py-1 mb-3 ${c.badge}`}
          >
            Coming Soon
          </span>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">We&apos;re working on it</h3>
          <p className="text-slate-500 text-sm mt-2 max-w-md leading-relaxed">
            Detailed service offerings for this track are being finalized. Check back soon for full program details.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const ServicesTracks = () => {
  return (
    <div className="space-y-28 py-12">
      {/* ========================================================================= */}
      {/* TRACK 1: FOR UNIVERSITIES */}
      {/* ========================================================================= */}
      <section id="universities" className="scroll-mt-28 relative">
        <span id="colleges" className="absolute -top-28" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-emerald-900 uppercase bg-emerald-50 border border-emerald-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              Universities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              For Universities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {UNIVERSITY_PARTNERS.map((uni, idx) => (
              <ScrollReveal key={uni.name} delay={idx * 0.08}>
                <div className="h-full p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border-2 border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-emerald-900 uppercase bg-emerald-50 border border-emerald-200/90 px-3.5 py-1.5 rounded-full mb-4">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                      University Partner
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {uni.name}
                    </h3>

                    <p className="text-sm font-black uppercase tracking-wider text-emerald-700 mt-2 mb-4">
                      {uni.program}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {uni.overview}
                    </p>

                    <ul className="space-y-3">
                      {uni.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <a
                      href="#inquire"
                      className="inline-flex items-center gap-2 text-sm font-black text-[#0b1f3a] hover:text-emerald-700 transition-colors"
                    >
                      <span>Request University Collaboration Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TRACK 2: FOR STUDENTS & DEGREE HOLDERS */}
      {/* ========================================================================= */}
      <section id="students" className="scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              Students
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              For Students
            </h2>
          </ScrollReveal>

          <ComingSoonBlock accentColor="amber" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TRACK 3: FOR CORPORATE HIRING PARTNERS */}
      {/* ========================================================================= */}
      <section id="companies" className="scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-blue-900 uppercase bg-blue-50 border border-blue-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              Employers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              For Employers
            </h2>
          </ScrollReveal>

          <ComingSoonBlock accentColor="blue" />
        </div>
      </section>
    </div>
  );
};
