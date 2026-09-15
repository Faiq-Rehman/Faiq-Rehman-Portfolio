import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Frontend") return project.category === "Frontend";
    if (activeFilter === "Full Stack") return project.category === "Full Stack";
    if (activeFilter === "Backend") {
      // AutoHive and CinemasTicket are built with PHP & MySQL backend
      return (
        project.category === "Full Stack" ||
        project.technologies.includes("PHP") ||
        project.technologies.includes("MySQL")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>03 / PROJECTS</span>
          </div>
          <h2 className="section-title">
            Selected <span className="gold-gradient-text">Work.</span>
          </h2>
          <p className="section-subtitle">
            Projects built through experimentation, learning, and practical
            development across modern frontend and full-stack architectures.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
            padding: "0.35rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--border-subtle)",
            width: "fit-content",
          }}
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                style={{
                  position: "relative",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? "#07080b" : "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "color var(--transition-fast)",
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      background: "var(--gold-gradient)",
                      zIndex: 0,
                      boxShadow: "0 2px 12px rgba(212, 175, 55, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
