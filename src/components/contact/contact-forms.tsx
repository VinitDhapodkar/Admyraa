"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/content";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building2, GraduationCap, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

export const ContactForms = () => {
  const [activeTab, setActiveTab] = useState<"college" | "student" | "company">("college");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent, formKey: string) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(formKey);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/75 backdrop-blur-[2px] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-900 uppercase bg-amber-50 border border-amber-200/90 px-4 py-1.5 rounded-full mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Let&apos;s Build Stronger Career Pathways Together
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Select your category below and connect directly with our partnership and placement cell.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-amber-400 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Email</div>
                  <a href={`mailto:${SITE_DATA.brand.email}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-700 transition-colors break-words">
                    {SITE_DATA.brand.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-emerald-400 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone &amp; WhatsApp</div>
                  <a
                    href={`https://wa.me/${SITE_DATA.brand.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    {SITE_DATA.brand.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-[#0b1f3a] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0b1f3a]/10 text-[#0b1f3a] border border-[#0b1f3a]/15 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Colleges &amp; Universities</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">Partnership Enquiries Welcome</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <TiltCard className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                {/* Form Segmented Tabs */}
                <div className="flex p-1.5 rounded-2xl bg-slate-100 mb-8 gap-1">
                  <button
                    onClick={() => { setActiveTab("college"); setSubmitted(null); }}
                    className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                      activeTab === "college"
                        ? "bg-white text-[#0b1f3a] shadow-sm font-extrabold border border-slate-200/80"
                        : "text-slate-600 hover:text-amber-800"
                    }`}
                  >
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>College</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab("student"); setSubmitted(null); }}
                    className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                      activeTab === "student"
                        ? "bg-white text-[#0b1f3a] shadow-sm font-extrabold border border-slate-200/80"
                        : "text-slate-600 hover:text-amber-800"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Student</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab("company"); setSubmitted(null); }}
                    className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                      activeTab === "company"
                        ? "bg-white text-[#0b1f3a] shadow-sm font-extrabold border border-slate-200/80"
                        : "text-slate-600 hover:text-amber-800"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>Company</span>
                  </button>
                </div>

                {/* College Form */}
                {activeTab === "college" && (
                  submitted === "college" ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">Enquiry Received!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you for reaching out. Our partnership team will contact your institution within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(null)}>
                        Submit Another Query
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, "college")} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                          <Input required placeholder="Dr. Rajesh Kumar" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Institution Name *</label>
                          <Input required placeholder="College / University" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Designation *</label>
                          <Input required placeholder="TPO / Dean / Director" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Official Email *</label>
                          <Input type="email" required placeholder="name@college.edu.in" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                          <Input type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Approx. Students</label>
                          <Input type="number" placeholder="500" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Requirements / Message</label>
                        <Textarea placeholder="Tell us about your campus skilling and placement needs..." />
                      </div>

                      <Button type="submit" size="lg" disabled={submitting} className="w-full justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 font-bold shadow-md">
                        <span>{submitting ? "Submitting..." : "Partner With ADMYRA"}</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                      </Button>
                    </form>
                  )
                )}

                {/* Student Form */}
                {activeTab === "student" && (
                  submitted === "student" ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">Application Received!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you! Your career profile has been submitted. A career mentor will reach out shortly.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(null)}>
                        Submit Another Application
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, "student")} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                          <Input required placeholder="Rahul Verma" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                          <Input type="email" required placeholder="rahul@example.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                          <Input type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">College Name *</label>
                          <Input required placeholder="Your Institute" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Degree / Course</label>
                          <Input placeholder="B.Tech, MBA, etc." />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Graduation Year</label>
                          <Input type="number" placeholder="2025" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Career Interest</label>
                        <Input placeholder="e.g. Software Engineer, Business Analyst, Marketing" />
                      </div>

                      <Button type="submit" size="lg" disabled={submitting} className="w-full justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 font-bold shadow-md">
                        <span>{submitting ? "Submitting..." : "Start Your Career Journey"}</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                      </Button>
                    </form>
                  )
                )}

                {/* Company Form */}
                {activeTab === "company" && (
                  submitted === "company" ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">Hiring Request Received!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you. Our corporate talent desk will send pre-vetted candidate pools matching your requirements.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(null)}>
                        Submit Another Requirement
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleSubmit(e, "company")} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                          <Input required placeholder="Neha Kapoor" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name *</label>
                          <Input required placeholder="Tech Corp" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Designation *</label>
                          <Input required placeholder="HR Manager / Talent Lead" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                          <Input type="email" required placeholder="neha@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                          <Input type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Open Positions</label>
                          <Input type="number" placeholder="10" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Hiring Roles / Skill Sets</label>
                        <Textarea placeholder="List target roles, tech stacks, or joining timelines..." />
                      </div>

                      <Button type="submit" size="lg" disabled={submitting} className="w-full justify-center rounded-xl bg-[#0b1f3a] hover:bg-[#102a4e] text-white border border-amber-500/40 font-bold shadow-md">
                        <span>{submitting ? "Submitting..." : "Hire Pre-Skilled Talent"}</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                      </Button>
                    </form>
                  )
                )}
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
