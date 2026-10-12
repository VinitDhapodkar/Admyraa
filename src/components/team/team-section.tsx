"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const getMemberImage = (memberName: string) => {
  const map: Record<string, string> = {
    "Subrata Giri": "/subrata.jpeg",
    "Mr. Rabisankar": "/rabi.jpeg",
    "Vinit Dhapodkar": "/vinit.jpeg",
    "Laxmi Singh": "/Laxmi.jpeg",
    "Akansha Tiwary": "/aku.jpeg",
    "Sabnam pervin": "/sabnam.jpeg",
    "Snigdha Basak": "/singdha.jpeg",
  };

  return map[memberName] ?? "/subrata.jpeg";
};

export const TeamSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < maxLeft - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    const onScroll = () => updateScrollState();
    const onResize = () => updateScrollState();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateScrollState]);

  const scrollCards = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.max(el.clientWidth * 0.92, 260);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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

        <div className="relative">
          <div className="flex items-center justify-end gap-2 sm:gap-3 mb-6">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll team cards left"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white text-slate-700 disabled:text-slate-300 disabled:bg-slate-100 disabled:border-slate-200 hover:border-amber-300 hover:text-amber-700 transition-colors shadow-sm disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards("right")}
              disabled={!canScrollRight}
              aria-label="Scroll team cards right"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white text-slate-700 disabled:text-slate-300 disabled:bg-slate-100 disabled:border-slate-200 hover:border-amber-300 hover:text-amber-700 transition-colors shadow-sm disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            {SITE_DATA.team.map((member, i) => (
              <ScrollReveal
                key={member.name}
                delay={i * 0.1}
                className="shrink-0 snap-start w-[88%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)] h-full"
              >
                <TiltCard className="h-full">
                  <div className="group h-full [perspective:1400px]">
                    <div className="relative h-[390px] sm:h-[410px] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front Face */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-lg bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] [backface-visibility:hidden]">
                        <div className="relative w-full h-full">
                          <Image
                            src={getMemberImage(member.name)}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 88vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          <div className="absolute left-5 right-5 bottom-5">
                            <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                              {member.name}
                            </h3>
                            <p className="text-sm font-bold text-amber-300 mt-1">{member.role}</p>
                          </div>
                        </div>
                      </div>

                      {/* Back Face */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-gradient-to-br from-[#050e1d] via-[#0b1f3a] to-[#102a4e] text-white p-6 sm:p-7 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="mb-4">
                          <h3 className="text-2xl font-black tracking-tight leading-tight">{member.name}</h3>
                          <p className="text-xs font-black uppercase tracking-wider text-amber-300 mt-1">
                            {member.role}
                          </p>
                        </div>

                        <div className="h-px w-full bg-white/25 mb-5" />

                        <p className="text-sm text-slate-200 leading-relaxed font-medium">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
