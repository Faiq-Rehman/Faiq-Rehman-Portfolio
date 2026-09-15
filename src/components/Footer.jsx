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

          {/* Quick Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              <Mail size={15} />
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.transform = "translateY(0)";
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
