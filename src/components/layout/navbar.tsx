"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

function scrollToHash(href: string, pathname: string): boolean {
  const [page, anchor] = href.split("#");
  const targetPage = page === "" ? "/" : page;
  if (targetPage !== pathname) return false;
  if (!anchor) return false;
  const el = document.getElementById(anchor);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${anchor}`);
  return true;
}

/**
 * Map each section id → the nav href it belongs to.
 * Sections not in the nav (stats, solution, process, etc.) get mapped
 * to the nearest parent nav item so the highlight never goes blank.
 */
const SECTION_TO_NAV: Record<string, string> = {
  hero:         "/",
  stats:        "/",
  about:        "/#about",
  solution:     "/#about",
  process:      "/#about",
  problems:     "/#about",
  services:     "/#about",   // on homepage the services section sits near about
  benefits:     "/#about",
  partnerships: "/#about",
  vision:       "/#about",
  team:         "/#about",
  faq:          "/#faq",
  contact:      "/#contact",
};

// All section ids we want to observe (in DOM order, top → bottom)
const OBSERVED_IDS = [
  "hero", "stats", "about", "solution", "process",
  "problems", "services", "benefits", "partnerships",
  "vision", "team", "faq", "contact",
];

export const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Scroll-driven active href (updated by IntersectionObserver)
  const [scrollHref, setScrollHref] = useState<string>("/");
  // Click-driven active href — overrides scroll for a brief moment after click
  const [clickedHref, setClickedHref] = useState<string | null>(null);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();

  // ── Scroll style ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll spy — updates active nav based on scroll position ───────────────
  useEffect(() => {
    if (pathname !== "/") return;

    const update = () => {
      // Use 35% from the top of the viewport as the trigger line
      const triggerY = window.scrollY + window.innerHeight * 0.35;

      // Walk sections bottom-up: first one whose top is above triggerY wins
      let activeId = OBSERVED_IDS[0];
      for (const id of OBSERVED_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= triggerY) {
          activeId = id;
        }
      }

      const navHref = SECTION_TO_NAV[activeId] ?? "/";
      setScrollHref(navHref);

      // Keep URL hash in sync silently
      const anchor = navHref.startsWith("/#") ? navHref.slice(1) : "";
      const newHash = anchor ? `#${anchor}` : "";
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash || window.location.pathname);
      }
    };

    update(); // run once on mount
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  // ── Close mobile on route change ──────────────────────────────────────────
  useEffect(() => {
    setClickedHref(null);
    setMobileOpen(false);
    // On sub-pages (e.g. /services) set scroll href to the matching nav entry
    if (pathname !== "/") setScrollHref(pathname);
    else setScrollHref("/");
  }, [pathname]);

  // ── Active href: clicked wins briefly, then scroll takes over ─────────────
  const activeHref = clickedHref ?? scrollHref;

  const isActive = useCallback(
    (link: NavLink) => activeHref === link.href,
    [activeHref]
  );

  // ── Click handler ─────────────────────────────────────────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Instantly show the clicked link as active
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      setClickedHref(href);
      setMobileOpen(false);

      if (href.includes("#")) {
        const handled = scrollToHash(href, pathname);
        if (handled) e.preventDefault();
      }

      // After 1 s, hand control back to the IntersectionObserver
      clickTimerRef.current = setTimeout(() => setClickedHref(null), 1000);
    },
    [pathname]
  );

  // ── Outside-click closes mobile menu ─────────────────────────────────────
  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-navbar]")) setMobileOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [mobileOpen]);

  // ── Shared link class helper ──────────────────────────────────────────────
  const desktopLinkClass = (active: boolean) =>
    `relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
      active
        ? "text-amber-400 bg-amber-400/15 border border-amber-400/30"
        : "text-slate-300 hover:text-white hover:bg-white/10"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
      active
        ? "bg-amber-400/15 border border-amber-400/30 text-amber-400"
        : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header
      data-navbar
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled
            ? "rounded-2xl bg-[#0d1b2e]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/10"
            : "rounded-2xl bg-[#0d1b2e]/90 backdrop-blur-md shadow-xl shadow-black/30 border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 py-3">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 group-hover:border-amber-400/60 transition-all duration-300">
              <Image src="/logo-transparent.png" alt="ADMYRA" width={36} height={36} priority className="w-full h-full object-contain" />
            </div>
            <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl">
              AD<span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">MYRA</span>
            </span>
          </Link>

          {/* ── Desktop Nav (centered) ── */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {SITE_DATA.navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={desktopLinkClass(active)}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button asChild className="rounded-xl bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-bold text-sm px-5 py-2 h-auto shadow-none border-0 transition-all duration-200">
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")} className="gap-2">
                <span>Login</span>
              </Link>
            </Button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-5 flex flex-col gap-1">
                {SITE_DATA.navLinks.map((link) => {
                  const active = isActive(link);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={mobileLinkClass(active)}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                    </Link>
                  );
                })}
                <div className="pt-3 mt-1 border-t border-white/10">
                  <Button asChild className="w-full justify-center rounded-xl bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-bold">
                    <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                      <span>Login</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
