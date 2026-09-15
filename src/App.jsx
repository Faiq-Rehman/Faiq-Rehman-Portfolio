import React from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        overflowX: "hidden",
      }}
    >
      {/* Desktop Ambient Cursor Glow */}
      <CursorGlow />

      {/* Floating Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <HeroStats />

        <div className="luxury-divider" />
        <About />

        <div className="luxury-divider" />
        <Skills />

        <div className="luxury-divider" />
        <Projects />

        <div className="luxury-divider" />
        <Education />

        <div className="luxury-divider" />
        <Journey />

        <div className="luxury-divider" />
        <Contact />
      </main>

      {/* Luxury Minimal Footer */}
      <Footer />
    </div>
  );
}
