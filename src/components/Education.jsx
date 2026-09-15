import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EDUCATION_DATA } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>04 / EDUCATION</span>
          </div>
          <h2 className="section-title">
            Academic Background &{" "}
            <span className="gold-gradient-text">Formal Training.</span>
          </h2>
          <p className="section-subtitle">
            Structured foundations in software engineering, full-stack enterprise
            programming, and continuous technical curriculum.
          </p>
        </div>

        {/* Vertical Illuminated Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "850px",
            margin: "0 auto",
            paddingLeft: "2rem",
          }}
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "10px",
              left: "7px",
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(212, 175, 55, 0.8) 0%, rgba(212, 175, 55, 0.2) 70%, transparent 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {EDUCATION_DATA.map((item, idx) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                style={{ position: "relative" }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2rem",
                    top: "1.5rem",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: item.highlight ? "var(--gold-primary)" : "#222736",
                    border: item.highlight
                      ? "3px solid #08090C"
                      : "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: item.highlight
                      ? "0 0 15px var(--gold-primary)"
                      : "none",
                    zIndex: 2,
                  }}
                />

                {/* Timeline Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    border: item.highlight
                      ? "1px solid rgba(212, 175, 55, 0.35)"
                      : "1px solid var(--border-subtle)",
                    background: item.highlight
                      ? "rgba(18, 22, 33, 0.75)"
                      : "var(--bg-card)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: item.highlight
                          ? "var(--gold-light)"
                          : "var(--text-muted)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "9999px",
                        background: item.highlight
                          ? "rgba(212, 175, 55, 0.1)"
                          : "rgba(255, 255, 255, 0.03)",
                        border: item.highlight
                          ? "1px solid rgba(212, 175, 55, 0.25)"
                          : "1px solid var(--border-subtle)",
                      }}
                    >
                      <Calendar size={13} />
                      <span>{item.period}</span>
                      {item.status && (
                        <span style={{ opacity: 0.7 }}>• {item.status}</span>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <MapPin size={13} />
                      <span>{item.campus}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.institution}
                  </h3>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: item.highlight
                        ? "var(--gold-primary)"
                        : "var(--text-secondary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.program}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: item.modules?.length ? "1.25rem" : "0",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Modules Pill Grid for Aptech */}
                  {item.modules && item.modules.length > 0 && (
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6875rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.6rem",
                        }}
                      >
                        Core Training Modules:
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {item.modules.map((mod) => (
                          <span
                            key={mod}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              padding: "0.3rem 0.65rem",
                              borderRadius: "6px",
                              background: "rgba(255, 255, 255, 0.03)",
                              border: "1px solid rgba(212, 175, 55, 0.2)",
                              color: "var(--gold-light)",
                            }}
                          >
                            <CheckCircle size={12} color="var(--gold-primary)" />
                            <span>{mod}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
