import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Gauge,
  Film,
  Armchair,
  Activity,
  HeartPulse,
  Check,
  Layers,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function ProjectCard({ project, index }) {
  // Render bespoke visual art per project theme
  const renderVisualShowcase = () => {
    switch (project.theme) {
      case "automotive":
        return (
          <div
            style={{
              position: "relative",
              height: "220px",
              background:
                "linear-gradient(135deg, #10131d 0%, #090a0f 100%)",
              borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Speedometer / Telemetry Visuals */}
            <div
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                border: "2px dashed rgba(212, 175, 55, 0.3)",
                top: "30%",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                top: "42%",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(212, 175, 55, 0.15)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  marginBottom: "0.75rem",
                  boxShadow: "0 0 25px rgba(212, 175, 55, 0.2)",
                }}
              >
                <Gauge size={28} color="var(--gold-primary)" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--gold-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                DYNAMIC AUTOMOTIVE PORTAL
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Inventory & Vehicle Discovery
              </div>
            </div>

            {/* Simulated Live Telemetry Badges */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "16px",
                right: "16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
              }}
            >
              <span>SYS: PHP+MYSQL</span>
              <span>ROLE: ADMIN DASHBOARD</span>
            </div>
          </div>
        );

      case "cinema":
        return (
          <div
            style={{
              position: "relative",
              height: "220px",
              background:
                "linear-gradient(135deg, #18111e 0%, #0a080e 100%)",
              borderBottom: "1px solid rgba(229, 192, 123, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Film Strips / Theater Beam */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 30%, rgba(229, 192, 123, 0.15), transparent 70%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(229, 192, 123, 0.15)",
                  border: "1px solid rgba(229, 192, 123, 0.4)",
                  marginBottom: "0.75rem",
                  boxShadow: "0 0 25px rgba(229, 192, 123, 0.2)",
                }}
              >
                <Film size={28} color="#E5C07B" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#E5C07B",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                MOVIE BOOKING PLATFORM
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Seat Booking Simulation
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "16px",
                right: "16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
              }}
            >
              <span>SEAT MATRIX SIM</span>
              <span>SHOWTIME SCHEDULING</span>
            </div>
          </div>
        );

      case "furniture":
        return (
          <div
            style={{
              position: "relative",
              height: "220px",
              background:
                "linear-gradient(135deg, #181716 0%, #0b0a09 100%)",
              borderBottom: "1px solid rgba(223, 203, 164, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(223, 203, 164, 0.15)",
                  border: "1px solid rgba(223, 203, 164, 0.4)",
                  marginBottom: "0.75rem",
                  boxShadow: "0 0 25px rgba(223, 203, 164, 0.2)",
                }}
              >
                <Armchair size={28} color="#DFCBA4" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#DFCBA4",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                E-COMMERCE STOREFRONT
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Luxury Living & Furniture
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "16px",
                right: "16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
              }}
            >
              <span>CSS GRID + FLEXBOX</span>
              <span>PURE VANILLA JAVASCRIPT</span>
            </div>
          </div>
        );

      case "fitness":
        return (
          <div
            style={{
              position: "relative",
              height: "220px",
              background:
                "linear-gradient(135deg, #0d1a24 0%, #070e14 100%)",
              borderBottom: "1px solid rgba(100, 210, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Pulse Wave Visual */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(100, 210, 255, 0.15)",
                  border: "1px solid rgba(100, 210, 255, 0.4)",
                  marginBottom: "0.75rem",
                  boxShadow: "0 0 25px rgba(100, 210, 255, 0.2)",
                }}
              >
                <Activity size={28} color="#64D2FF" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#64D2FF",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                HEALTH & FITNESS SPA
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Workout & Progress Tracker
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "16px",
                right: "16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
              }}
            >
              <span>REACT.JS SPA</span>
              <span>WORKOUT TELEMETRY</span>
            </div>
          </div>
        );

      case "petcare":
        return (
          <div
            style={{
              position: "relative",
              height: "220px",
              background:
                "linear-gradient(135deg, #1c1514 0%, #0d0a09 100%)",
              borderBottom: "1px solid rgba(224, 179, 132, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(224, 179, 132, 0.15)",
                  border: "1px solid rgba(224, 179, 132, 0.4)",
                  marginBottom: "0.75rem",
                  boxShadow: "0 0 25px rgba(224, 179, 132, 0.2)",
                }}
              >
                <HeartPulse size={28} color="#E0B384" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#E0B384",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                VETERINARY & PET CARE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                FurShield Wellness Platform
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "16px",
                right: "16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
              }}
            >
              <span>REACT.JS SPA</span>
              <span>PET HEALTH MANAGEMENT</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Visual Showcase Header */}
        {renderVisualShowcase()}

        {/* Card Content Area */}
        <div style={{ padding: "1.75rem" }}>
          {/* Top Label & Project Number */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--gold-primary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {project.subcategory}
            </span>

            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.2)",
              }}
            >
              {project.number}
            </span>
          </div>

          {/* Project Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            {project.name}
          </h3>

          {/* Project Description */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            {project.description}
          </p>

          {/* Key Features List */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              Key Implementations:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.4rem",
              }}
            >
              {project.features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <Check size={12} color="var(--gold-primary)" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.5rem",
            }}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Bar */}
      <div
        style={{
          padding: "1.25rem 1.75rem",
          borderTop: "1px solid var(--border-subtle)",
          background: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.25rem",
            borderRadius: "8px",
            background: "rgba(212, 175, 55, 0.12)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            color: "var(--gold-light)",
            fontFamily: "var(--font-display)",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all var(--transition-fast)",
            flex: 1,
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold-primary)";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(212, 175, 55, 0.12)";
            e.currentTarget.style.color = "var(--gold-light)";
          }}
        >
          <span>Live Demo</span>
          <ExternalLink size={15} />
        </a>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-medium)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-primary)";
              e.currentTarget.style.color = "var(--gold-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-medium)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <GithubIcon size={16} />
            <span>Code</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}
