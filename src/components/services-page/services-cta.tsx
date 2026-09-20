"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Mail, MapPin, Building2, GraduationCap, Briefcase } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export const ServicesCTA = () => {
  const [stakeholder, setStakeholder] = useState<"college" | "student" | "company">("college");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="inquire" className="py-24 bg-slate-50/75 backdrop-blur-[2px] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3">
            Inquire &amp; Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Schedule a Service Consultation
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed italic">
            [Content for consultation and partnership inquiries will be added here.]
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Value Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0b1f3a] via-[#102a4e] to-[#050e1d] text-white border border-amber-400/30 shadow-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">[Consultation Overview]</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic">
                [Details, advisory scope, and consultation support information will be added here.]
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Direct Email</p>
                    <a href={`mailto:${SITE_DATA.brand.email}`} className="font-semibold text-white hover:text-amber-400 transition-colors break-words text-xs sm:text-sm">
                      {SITE_DATA.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Location</p>
                    <span className="font-semibold text-white text-xs sm:text-sm">{SITE_DATA.brand.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30">
                <p className="text-xs font-bold text-amber-300 leading-relaxed">
                  ⚡ Guaranteed Response: Our team responds to institutional &amp; corporate inquiries within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Inquiry Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. An ADMYRA program advisor will contact you with a customized service plan and brochure within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Stakeholder Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      I am Inquiring As:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                      {[
                        { id: "college", label: "College", fullLabel: "College / TPO", icon: <Building2 className="w-3.5 h-3.5 shrink-0" /> },
                        { id: "student", label: "Student", fullLabel: "Student", icon: <GraduationCap className="w-3.5 h-3.5 shrink-0" /> },
                        { id: "company", label: "Employer", fullLabel: "Employer / HR", icon: <Briefcase className="w-3.5 h-3.5 shrink-0" /> },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setStakeholder(item.id as any)}
                          className={`py-2 px-1.5 sm:px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1 sm:gap-1.5 transition-all ${
                            stakeholder === item.id
                              ? "bg-[#0b1f3a] text-amber-400 shadow-sm"
                              : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                          }`}
                        >
                          {item.icon}
                          <span className="hidden sm:inline truncate">{item.fullLabel}</span>
                          <span className="sm:hidden truncate">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. r.sharma@college.edu"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Organization / College Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={stakeholder === "student" ? "College or University Name" : "Company or Institution Name"}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements &amp; Objectives
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        stakeholder === "college"
                          ? "e.g. We want to conduct a campus placement drive and finishing school for 350 final-year engineering students."
                          : stakeholder === "company"
                          ? "e.g. We are looking to hire 25 fresh software and data engineers within the next 60 days."
                          : "e.g. I am seeking job-oriented technical training and direct interview opportunities in full-stack development."
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white font-bold border border-amber-400/40 shadow-lg shadow-amber-950/10 hover:border-amber-400 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="text-sm">Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-amber-400" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
