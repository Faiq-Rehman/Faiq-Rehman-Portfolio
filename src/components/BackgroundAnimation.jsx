import React, { useEffect, useRef, useState } from "react";

/**
 * BackgroundAnimation Component
 * Renders an elegant, high-performance ambient scroll animation featuring:
 * - Fluid parallax gradient orbs (Champagne gold & electric slate tones)
 * - Lightweight constellation stardust particles on canvas with scroll-inertia parallax
 * - Complete accessibility with prefers-reduced-motion support
 * - Zero pointer-events interference and zero horizontal overflow
 */
export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // References for smooth scroll interpolation
  const scrollData = useRef({
    targetY: 0,
    currentY: 0,
    maxScroll: 1000,
    progress: 0,
    isScrolling: false,
  });

  // Track prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e) => setReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  // Canvas and Particle Animation Effect
  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Particle pool with depth for multi-layer parallax
    const PARTICLE_COUNT = Math.min(Math.floor(width / 35), 45);
    const particles = [];
    const colors = [
      "rgba(212, 175, 55, ", // Gold
      "rgba(244, 229, 184, ", // Champagne
      "rgba(157, 163, 180, ", // Silver
      "rgba(56, 189, 248, ", // Subtle cyan
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.6,
        baseAlpha: 0.12 + Math.random() * 0.35,
        alpha: 0.15,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        depth: 0.4 + Math.random() * 1.4, // Higher depth = greater scroll movement
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleScroll = () => {
      scrollData.current.targetY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollData.current.maxScroll = docHeight > 0 ? docHeight : 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth scroll lerp (0.09 factor gives butter-smooth momentum)
      const data = scrollData.current;
      const prevY = data.currentY;
      data.currentY += (data.targetY - data.currentY) * 0.09;
      data.progress = Math.min(Math.max(data.currentY / data.maxScroll, 0), 1);

      const scrollDelta = data.currentY - prevY;

      ctx.clearRect(0, 0, width, height);

      // Render each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient drift
        p.x += p.vx;
        p.y += p.vy - scrollDelta * p.depth * 0.15; // Natural scroll parallax

        // Pulse alpha
        p.alpha =
          p.baseAlpha + Math.sin(time * p.pulseSpeed * 10 + p.pulseOffset) * 0.1;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${Math.max(0.05, Math.min(p.alpha, 0.6))})`;
        ctx.fill();
      }

      // Parallax update for gradient orbs directly in DOM for 60/120fps hardware acceleration
      const orb1 = document.getElementById("scroll-orb-gold-1");
      const orb2 = document.getElementById("scroll-orb-slate");
      const orb3 = document.getElementById("scroll-orb-gold-2");
      const orb4 = document.getElementById("scroll-orb-amber");

      if (orb1) {
        const y1 = data.currentY * 0.14;
        const x1 = Math.sin(data.progress * Math.PI) * -35;
        orb1.style.transform = `translate3d(${x1.toFixed(1)}px, ${y1.toFixed(1)}px, 0)`;
      }

      if (orb2) {
        const y2 = data.currentY * -0.11;
        const x2 = Math.cos(data.progress * Math.PI) * 40;
        orb2.style.transform = `translate3d(${x2.toFixed(1)}px, ${y2.toFixed(1)}px, 0)`;
      }

      if (orb3) {
        const y3 = data.currentY * -0.16;
        const scale3 = 1 + data.progress * 0.15;
        orb3.style.transform = `translate3d(0, ${y3.toFixed(1)}px, 0) scale(${scale3.toFixed(2)})`;
      }

      if (orb4) {
        const y4 = data.currentY * 0.08;
        orb4.style.transform = `translate3d(0, ${y4.toFixed(1)}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Ambient Gradient Orbs */}
      <div
        id="scroll-orb-gold-1"
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, rgba(212, 175, 55, 0.02) 45%, transparent 70%)",
          filter: "blur(75px)",
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      <div
        id="scroll-orb-slate"
        style={{
          position: "absolute",
          top: "35%",
          left: "-8%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, rgba(30, 58, 138, 0.02) 45%, transparent 70%)",
          filter: "blur(85px)",
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      <div
        id="scroll-orb-gold-2"
        style={{
          position: "absolute",
          top: "65%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.055) 0%, rgba(197, 168, 106, 0.015) 50%, transparent 70%)",
          filter: "blur(80px)",
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      <div
        id="scroll-orb-amber"
        style={{
          position: "absolute",
          top: "85%",
          left: "12%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244, 229, 184, 0.035) 0%, transparent 70%)",
          filter: "blur(90px)",
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      {/* Floating Stardust Canvas */}
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
