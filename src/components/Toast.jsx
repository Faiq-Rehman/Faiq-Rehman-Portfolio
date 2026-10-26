import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

/**
 * ToastNotification component for luxury portfolio
 * Displays top-right feedback with auto-dismiss and manual close.
 */
export default function Toast({ toast, onClose, autoDismissTime = 4500 }) {
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      onClose();
    }, autoDismissTime);

    return () => clearTimeout(timer);
  }, [toast, onClose, autoDismissTime]);

  if (typeof document === "undefined") return null;

  const isSuccess = toast?.type === "success";

  return createPortal(
    <AnimatePresence>
      {toast && (
        <aside
          role="status"
          aria-live="polite"
          className="portfolio-toast-wrapper"
          style={{
            position: "fixed",
            top: "84px",
            right: "24px",
            zIndex: 99999,
            maxWidth: "430px",
            width: "calc(100vw - 32px)",
            pointerEvents: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -18, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, x: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "14px",
              background: "rgba(12, 14, 21, 0.94)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: isSuccess
                ? "1px solid rgba(16, 185, 129, 0.4)"
                : "1px solid rgba(239, 68, 68, 0.4)",
              boxShadow: isSuccess
                ? "0 18px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(16, 185, 129, 0.15)"
                : "0 18px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(239, 68, 68, 0.15)",
              padding: "1.15rem 1.25rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.95rem",
            }}
          >
            {/* Top metallic glow border */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: isSuccess
                  ? "linear-gradient(90deg, transparent, #10b981 50%, transparent)"
                  : "linear-gradient(90deg, transparent, #ef4444 50%, transparent)",
              }}
            />

            {/* Status Icon */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: isSuccess
                  ? "rgba(16, 185, 129, 0.14)"
                  : "rgba(239, 68, 68, 0.14)",
                border: isSuccess
                  ? "1px solid rgba(16, 185, 129, 0.35)"
                  : "1px solid rgba(239, 68, 68, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: isSuccess ? "#10b981" : "#ef4444",
                marginTop: "1px",
              }}
            >
              {isSuccess ? <CheckCircle2 size={19} /> : <AlertCircle size={19} />}
            </div>

            {/* Toast Copy */}
            <div style={{ flex: 1, minWidth: 0, paddingRight: "0.25rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                  lineHeight: 1.35,
                }}
              >
                {toast.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.835rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                {toast.description}
              </div>
            </div>

            {/* Manual Dismiss Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close notification"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s ease, background 0.2s ease",
                flexShrink: 0,
                marginTop: "-2px",
                marginRight: "-4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <X size={16} />
            </button>

            {/* Progress duration bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                background: isSuccess
                  ? "rgba(16, 185, 129, 0.6)"
                  : "rgba(239, 68, 68, 0.6)",
                animation: `toastCountdown ${autoDismissTime}ms linear forwards`,
              }}
            />
          </motion.div>
        </aside>
      )}
    </AnimatePresence>,
    document.body
  );
}
