import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Compass,
  ArrowRight,
} from "lucide-react";
import { DEVELOPER_INFO } from "../data/developer";

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>01 / ABOUT</span>
          </div>
          <h2 className="section-title">
            A Developer Built Around{" "}
            <span className="gold-gradient-text">Curiosity.</span>
          </h2>
          <p className="section-subtitle">
            Engineering digital solutions at the intersection of logical backend
            systems and responsive, accessible user interfaces.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "stretch",
          }}
          className="about-grid"
        >
          {/* Left Column: Authentic Professional Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {DEVELOPER_INFO.summary}
              </p>

              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(212, 175, 55, 0.04)",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Compass size={18} />
                  <span>Engineering Principles</span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    "Clean Coding Standards",
                    "Responsive UI Paradigms",
                    "Relational DB Normalization",
                    "Continuous Technical Learning",
                  ].map((principle) => (
                    <div
                      key={principle}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--gold-primary)" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div style={{ marginTop: "2rem" }}>
              <button
                type="button"
                onClick={() => scrollTo("#skills")}
                className="btn-luxury-secondary"
                style={{ fontSize: "0.875rem" }}
              >
                <span>Explore Technical Skills</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Developer Profile Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                  }}
                >
                  Developer Profile
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  TECHNICAL COMPOSITION MATRIX
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "6px",
                  background: "rgba(212, 175, 55, 0.1)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  color: "var(--gold-light)",
                }}
              >
                VERIFIED
              </span>
            </div>

            {/* 4 Quadrants: Frontend, Backend, Database, Tools */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.25rem",
              }}
              className="profile-stack-grid"
            >
              {/* Frontend */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Code size={16} color="var(--gold-primary)" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    FRONTEND
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--gold-light)",
                    lineHeight: 1.5,
                  }}
                >
                  HTML5 / CSS3 / JavaScript / React.js
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  * React.js: Basic / hands-on current exposure
                </div>
              </div>

              {/* Backend */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Server size={16} color="var(--gold-primary)" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    BACKEND
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--gold-light)",
                    lineHeight: 1.5,
                  }}
                >
                  Node.js / Express / PHP / C# / .NET
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  RESTful APIs, JavaScript runtime & enterprise stacks
                </div>
              </div>

              {/* Database */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Database size={16} color="var(--gold-primary)" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    DATABASE
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--gold-light)",
                    lineHeight: 1.5,
                  }}
                >
                  MongoDB / MySQL / SQL Server
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  NoSQL document collections & relational schemas
                </div>
              </div>

              {/* Tools */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Wrench size={16} color="var(--gold-primary)" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    TOOLS & WORKFLOW
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--gold-light)",
                    lineHeight: 1.5,
                  }}
                >
                  Git / GitHub / Visual Studio / VS Code
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  Version control & development environments
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
        @media (min-width: 640px) {
          .profile-stack-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
