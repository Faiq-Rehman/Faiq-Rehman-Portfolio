import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Terminal,
  FileSpreadsheet,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/skills";

const CATEGORY_ICONS = {
  frontend: <Code size={20} color="var(--gold-primary)" />,
  backend: <Server size={20} color="var(--gold-primary)" />,
  databases: <Database size={20} color="var(--gold-primary)" />,
  tools: <Terminal size={20} color="var(--gold-primary)" />,
  office: <FileSpreadsheet size={20} color="var(--gold-primary)" />,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(14, 16, 24, 0.5) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>02 / SKILLS</span>
          </div>
          <h2 className="section-title">
            Technical Arsenal &{" "}
            <span className="gold-gradient-text">Core Competencies.</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, database
            engines, and developer tools grounded in practical implementation.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              cursor: "pointer",
              border:
                selectedCategory === "all"
                  ? "1px solid rgba(212, 175, 55, 0.5)"
                  : "1px solid var(--border-subtle)",
              background:
                selectedCategory === "all"
                  ? "rgba(212, 175, 55, 0.15)"
                  : "rgba(255, 255, 255, 0.02)",
              color:
                selectedCategory === "all"
                  ? "var(--gold-light)"
                  : "var(--text-secondary)",
              transition: "all var(--transition-fast)",
            }}
          >
            All Competencies
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: "pointer",
                border:
                  selectedCategory === cat.id
                    ? "1px solid rgba(212, 175, 55, 0.5)"
                    : "1px solid var(--border-subtle)",
                background:
                  selectedCategory === cat.id
                    ? "rgba(212, 175, 55, 0.15)"
                    : "rgba(255, 255, 255, 0.02)",
                color:
                  selectedCategory === cat.id
                    ? "var(--gold-light)"
                    : "var(--text-secondary)",
                transition: "all var(--transition-fast)",
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(212, 175, 55, 0.1)",
                      border: "1px solid rgba(212, 175, 55, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {CATEGORY_ICONS[category.id]}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    marginBottom: "1.75rem",
                  }}
                >
                  {category.subtitle}
                </p>

                {/* Skills List in Category */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "12px",
                        background: skill.highlight
                          ? "rgba(212, 175, 55, 0.04)"
                          : "rgba(255, 255, 255, 0.02)",
                        border: skill.highlight
                          ? "1px solid rgba(212, 175, 55, 0.18)"
                          : "1px solid rgba(255, 255, 255, 0.04)",
                        transition: "all var(--transition-fast)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                            color: skill.highlight
                              ? "var(--gold-light)"
                              : "var(--text-primary)",
                          }}
                        >
                          {skill.name}
                        </span>

                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6875rem",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {skill.tag}
                        </span>
                      </div>

                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.4,
                        }}
                      >
                        {skill.level}
                      </div>

                      {skill.note && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6875rem",
                            color: "var(--gold-muted)",
                            marginTop: "0.4rem",
                          }}
                        >
                          <Sparkles size={12} />
                          <span>{skill.note}</span>
                        </div>
                      )}
                    </div>
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
