import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Glows & Grid */}
      <div className="bg-grid-pattern" />
      <div
        className="ambient-glow-gold"
        style={{ top: "15%", left: "10%", opacity: 0.8 }}
      />
      <div
        className="ambient-glow-slate"
        style={{ bottom: "10%", right: "5%", opacity: 0.6 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <div>
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag"
              style={{ marginBottom: "1.5rem" }}
            >
              <span className="section-tag-dot" />
              <span>ASSOCIATE SOFTWARE ENGINEER / WEB DEVELOPER</span>
            </motion.div>

            {/* Main Cinematic Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Building Digital Experiences With{" "}
              <span className="gold-gradient-text">Code & Precision.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Full Stack Developer focused on building functional, responsive,
              and modern web applications with clean coding practices and robust
              architectures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo("#projects")}
                className="btn-luxury-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="btn-luxury-secondary"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={18} />
              </button>
            </motion.div>

            {/* Tech Badges Minimal Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "2.75rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Core Toolset:
              </span>
              {[
                "Node.js",
                "Express",
                "PHP",
                "C#",
                ".NET",
                "React.js",
                "MongoDB",
                "MySQL",
                "SQL Server",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Futuristic Digital Identity Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Outer Animated Rotating Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "32px",
                border: "1px dashed rgba(212, 175, 55, 0.25)",
                pointerEvents: "none",
              }}
            />

            {/* Glass Digital Identity Card */}
            <div
              style={{
                width: "100%",
                maxWidth: "460px",
                background:
                  "linear-gradient(145deg, rgba(20, 24, 35, 0.85) 0%, rgba(10, 12, 18, 0.95) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                borderRadius: "28px",
                padding: "2.25rem",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(212, 175, 55, 0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Top Border Highlight */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--gold-gradient)",
                }}
              />

              {/* Status Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 12px #10b981",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "#10b981",
                      letterSpacing: "0.04em",
                    }}
                  >
                    STATUS: ACTIVE / AVAILABLE
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--text-muted)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  ID: FR-2026
                </div>
              </div>

              {/* Monogram Crest & Role Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(14, 17, 26, 0.9) 100%)",
                    border: "1.5px solid rgba(212, 175, 55, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.875rem",
                      letterSpacing: "0.06em",
                      background: "var(--gold-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    FR
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Faiq Rehman
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: "var(--gold-primary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Full Stack Developer
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "0.15rem",
                    }}
                  >
                    Surjani Town, Karachi, Pakistan
                  </div>
                </div>
              </div>

              {/* Architecture Telemetry Matrix */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  padding: "1.25rem",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>FOCUS</span>
                  <span style={{ color: "var(--text-primary)" }}>
                    Open-Source & Microsoft Stacks
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>BACKEND</span>
                  <span style={{ color: "var(--gold-light)" }}>
                    Node.js / Express / PHP / C# / .NET
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>DATABASE</span>
                  <span style={{ color: "var(--gold-light)" }}>
                    MongoDB / MySQL / SQL Server
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>FRONTEND</span>
                  <span style={{ color: "var(--text-primary)" }}>
                    HTML5 / CSS3 / ES6+ / React.js
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>EDUCATION</span>
                  <span style={{ color: "var(--text-primary)" }}>
                    Aptech (2025–Cont.)
                  </span>
                </div>
              </div>

              {/* Code Verification Footnote */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--text-muted)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <ShieldCheck size={14} color="#10b981" />
                  <span>Verified CV Specifications</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Cpu size={14} color="var(--gold-primary)" />
                  <span>Precision Engineering</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
