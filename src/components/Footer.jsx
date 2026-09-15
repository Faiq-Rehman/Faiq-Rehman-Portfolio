import React from "react";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { DEVELOPER_INFO } from "../data/developer";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
        background: "rgba(7, 8, 11, 0.95)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand & Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(20, 24, 35, 0.9) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(212, 175, 55, 0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.05em",
                  background: "var(--gold-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FR
              </span>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                }}
              >
                FAIQ REHMAN
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--gold-muted)",
                  letterSpacing: "0.02em",
                }}
              >
                Associate Software Engineer / Web Developer
              </div>
            </div>
          </div>

          {/* Professional Social & Quick Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {/* GitHub Professional Link */}
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Faiq Rehman on GitHub"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 0.95rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-light)";
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(212, 175, 55, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Link - conditionally rendered only if an authentic URL is present */}
            {DEVELOPER_INFO.linkedin && (
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Faiq Rehman on LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.5rem 0.95rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold-light)";
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 0 16px rgba(212, 175, 55, 0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>LinkedIn</span>
              </a>
            )}

            {/* Direct Email Link */}
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              aria-label="Send email to Faiq Rehman"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 0.95rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-light)";
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(212, 175, 55, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            {/* Scroll To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                color: "var(--gold-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
                marginLeft: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
                e.currentTarget.style.borderColor = "var(--gold-primary)";
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(212, 175, 55, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          <div>© 2026 Faiq Rehman. All rights reserved.</div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ShieldCheck size={14} color="var(--gold-primary)" />
            <span>Precision Engineering • Clean Code Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
