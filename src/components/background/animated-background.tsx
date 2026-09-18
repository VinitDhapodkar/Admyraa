"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for the education-to-employment network
    // Subtle, tiny nodes in brand gold and navy
    const particleCount = Math.min(36, Math.floor((width * height) / 32000));
    const particles: Particle[] = [];

    const colors = [
      "rgba(212, 163, 65, ",  // Warm Gold
      "rgba(11, 31, 58, ",    // Corporate Navy
      "rgba(30, 58, 102, ",   // Deep Slate Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.25 + 0.15,
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const connectionDistance = 120;

    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between close nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 163, 65, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;

          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Initial render
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-gradient-to-b from-slate-50/70 via-white to-amber-50/30"
    >
      {/* Layer A: Ambient Aurora Orbs (Smooth, organic continuous floating) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1: Warm Gold (Top Right) */}
        <div
          className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent blur-[130px] animate-aurora-1"
        />

        {/* Orb 2: Deep Navy & Indigo (Mid Left) */}
        <div
          className="absolute top-[35%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#0b1f3a]/15 via-[#1e3a66]/10 to-transparent blur-[140px] animate-aurora-2"
        />

        {/* Orb 3: Soft Amber Sunset (Bottom Right) */}
        <div
          className="absolute top-[65%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-amber-500/15 via-[#d4a341]/10 to-transparent blur-[130px] animate-aurora-3"
        />

        {/* Orb 4: Subtle Employability Mint / Emerald Glow (Center Depth) */}
        <div
          className="absolute top-[20%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-500/8 via-teal-400/5 to-transparent blur-[120px] animate-aurora-4"
        />
      </div>

      {/* Layer B: Micro-Dot Framework Matrix (Structured Digital Connectivity) */}
      <div
        className="absolute inset-0 bg-grid-dots opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
      />

      {/* Layer C: Lightweight Ecosystem Canvas Node Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Gentle vignette to keep page edges clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
    </div>
  );
};
