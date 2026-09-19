"use client";

import React from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { User, Users, UserPlus, ArrowRight } from "lucide-react";

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-slate-50/75 backdrop-blur-[2px] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Meet the Team Behind ADMYRA
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3.5 leading-relaxed">
            Professionals committed to building stronger career pathways for students and creating meaningful industry-academia partnerships.
          </p>
        </ScrollReveal>

        {/* Team Cards (Adopting Reference Experts Grid Styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITE_DATA.team.map((member, i) => (
            <ScrollReveal
              key={member.role}
              delay={i * 0.1}
              className={`h-full ${i === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none w-full" : ""}`}
            >
              <TiltCard className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border-2 border-slate-200/90 shadow-lg text-center hover:shadow-2xl hover:border-amber-400 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-amber-300 border border-amber-400/40 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-950/20 group-hover:scale-110 transition-transform">
                    {member.isHiring ? <UserPlus className="w-9 h-9 text-amber-400" /> : <User className="w-9 h-9" />}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{member.name}</h3>
                  <div className="text-xs font-black uppercase tracking-wider text-amber-700 mb-4">{member.role}</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{member.bio}</p>
                </div>

                {member.isHiring && (
                  <div className="pt-6">
                    <Button asChild className="w-full justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 shadow-md font-bold h-11">
                      <a href="#contact" className="gap-2">
                        <span>Get in Touch</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </a>
                    </Button>
                  </div>
                )}
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
