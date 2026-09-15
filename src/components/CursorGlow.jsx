import React, { useEffect, useRef, useState } from "react";

const checkIsTouchDevice = () => {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
};

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isTouchDevice] = useState(checkIsTouchDevice);

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;
    let isRunning = false;
    let targetX = -300;
    let targetY = -300;
    let currentX = -300;
    let currentY = -300;
    let isVisible = false;

    const updatePosition = () => {
      // Smooth linear interpolation (lerp) toward mouse position for luxury floating effect
      const ease = 0.09;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);

      // Keep running smoothly until settled
      if (dx > 0.1 || dy > 0.1) {
        animationFrameId = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible && glowRef.current) {
        isVisible = true;
        glowRef.current.style.opacity = "1";
      }

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (targetX > 0 && targetY > 0 && glowRef.current) {
        isVisible = true;
        glowRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "540px",
        height: "540px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(244, 229, 184, 0.18) 0%, rgba(212, 175, 55, 0.11) 30%, rgba(212, 175, 55, 0.03) 55%, transparent 72%)",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0,
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
        transform: "translate3d(-300px, -300px, 0) translate(-50%, -50%)",
      }}
    />
  );
}
