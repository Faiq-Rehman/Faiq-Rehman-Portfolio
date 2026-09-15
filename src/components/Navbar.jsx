import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backgroundColor: scrolled ? "rgba(8, 9, 12, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212, 175, 55, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.6)" : "none",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scrolled ? "64px" : "80px",
              transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Left: Brand Monogram & Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Luxury Monogram Emblem */}
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
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
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                    background: "var(--gold-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FR
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "-0.01em",
                    color: "var(--text-primary)",
                  }}
                >
                  Faiq Rehman
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--gold-muted)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Associate Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.5rem",
              }}
              className="desktop-nav"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      style={{
                        position: "relative",
                        padding: "0.45rem 1rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive
                          ? "var(--gold-light)"
                          : "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color var(--transition-fast)",
                        borderRadius: "9999px",
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(212, 175, 55, 0.12)",
                            border: "1px solid rgba(212, 175, 55, 0.3)",
                            borderRadius: "9999px",
                            zIndex: -1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Right: CTA & Mobile Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="desktop-cta"
                style={{
                  display: "none",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.55rem 1.25rem",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#07080b",
                  background: "var(--gold-gradient)",
                  textDecoration: "none",
                  boxShadow: "0 2px 14px rgba(212, 175, 55, 0.25)",
                  transition: "all var(--transition-fast)",
                }}
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={15} />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-medium)",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                }}
                className="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: scrolled ? "64px" : "80px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(7, 8, 11, 0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.5rem",
              borderTop: "1px solid rgba(212, 175, 55, 0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.85rem 1.25rem",
                      borderRadius: "12px",
                      background: isActive
                        ? "rgba(212, 175, 55, 0.1)"
                        : "rgba(255, 255, 255, 0.02)",
                      border: isActive
                        ? "1px solid rgba(212, 175, 55, 0.3)"
                        : "1px solid var(--border-subtle)",
                      color: isActive
                        ? "var(--gold-light)"
                        : "var(--text-primary)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>{link.name}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--gold-muted)",
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#07080b",
                background: "var(--gold-gradient)",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
