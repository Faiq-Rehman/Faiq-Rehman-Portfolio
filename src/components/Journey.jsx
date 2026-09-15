import React from "react";
import { motion } from "framer-motion";
import { Milestone, ArrowRight, ShieldCheck } from "lucide-react";
import { JOURNEY_STAGES } from "../data/journey";

export default function Journey() {
  return (
    <section
      id="journey"
      className="section-padding"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(14, 17, 24, 0.4) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>05 / JOURNEY</span>
          </div>
          <h2 className="section-title">
            My Development <span className="gold-gradient-text">Journey.</span>
          </h2>
          <p className="section-subtitle">
            An authentic roadmap tracing the evolution from foundational computer
            science principles to full-stack implementation and modern component engineering.
          </p>
        </div>

        {/* Stages Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {JOURNEY_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Step Pill & Category Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      background: "var(--gold-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stage.step}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px",
                      background: "rgba(212, 175, 55, 0.1)",
                      border: "1px solid rgba(212, 175, 55, 0.25)",
                      color: "var(--gold-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stage.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {stage.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {stage.description}
                </p>
              </div>

              {/* Technologies strip */}
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  {stage.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
