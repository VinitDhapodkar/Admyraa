import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_DATA } from "@/data/content";

export const Footer = () => {
  return (
    <footer className="bg-[#050e1d] text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center border border-amber-400/30">
                <Image
                  src="/logo-transparent.png"
                  alt="ADMYRA Crest"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold tracking-tight text-white text-xl">
                AD<span className="gradient-gold-text">MYRA</span>
              </span>
            </Link>
            <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
              {SITE_DATA.brand.fullName} ({SITE_DATA.brand.tagline})
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering Students. Enabling Careers. Delivering Employment. India&apos;s premier employability bridge between educational campuses and enterprise hiring.
            </p>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About ADMYRA</Link></li>
              <li><Link href="/about#vision" className="hover:text-amber-400 transition-colors">Vision &amp; Mission</Link></li>
              <li><Link href="/about#team" className="hover:text-amber-400 transition-colors">Leadership Team</Link></li>
              <li><Link href="/#faq" className="hover:text-amber-400 transition-colors">Help &amp; FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link href="/services#colleges" className="hover:text-amber-400 transition-colors">For Colleges</Link></li>
              <li><Link href="/services#students" className="hover:text-amber-400 transition-colors">For Students</Link></li>
              <li><Link href="/services#companies" className="hover:text-amber-400 transition-colors">For Companies</Link></li>
              <li><Link href="/#partnerships" className="hover:text-amber-400 transition-colors">Partnership Tiers</Link></li>
              <li><Link href="/#process" className="hover:text-amber-400 transition-colors">6-Step Process</Link></li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href={`mailto:${SITE_DATA.brand.email}`} className="text-amber-400 hover:text-amber-300 font-semibold break-all">{SITE_DATA.brand.email}</a></li>
              <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Login</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Campus Placement Cell</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Corporate Talent Desk</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ADMYRA — Digitally Enabled Real Employment. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Placement Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
