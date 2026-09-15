import React from "react";
import { motion } from "framer-motion";
import { DEVELOPER_INFO } from "../data/developer";
import { Layers, Database, Code2, Sparkles } from "lucide-react";

const STAT_ICONS = [
  <Layers key="1" size={20} className="text-gold" />,
  <Sparkles key="2" size={20} className="text-gold" />,
  <Database key="3" size={20} className="text-gold" />,
  <Code2 key="4" size={20} className="text-gold" />,
];

export default function HeroStats() {
  return (
    <section style={{ position: "relative", zIndex: 10, marginTop: "-2rem", marginBottom: "4rem" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            padding: "1.75rem",
            background: "rgba(14, 17, 24, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.05)",
          }}
        >
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "0.75rem",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                transition: "all var(--transition-fast)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "rgba(212, 175, 55, 0.1)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--gold-primary)",
                }}
              >
                {STAT_ICONS[idx]}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    background: stat.highlight
                      ? "var(--gold-gradient)"
                      : "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginTop: "0.2rem",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
