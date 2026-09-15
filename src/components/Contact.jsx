import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  MessageSquare,
  Loader2,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { DEVELOPER_INFO } from "../data/developer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide an email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please provide a valid email format.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a message subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Strict validation: if EmailJS credentials are not configured or placeholder, do not pretend success
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_emailjs_service_id"
    ) {
      setIsSubmitting(false);
      setSubmissionResult({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
      return;
    }

    try {
      const templateParams = {
        name: formData.name.trim(),
        visitor_name: formData.name.trim(),
        email: formData.email.trim(),
        visitor_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        reply_to: formData.email.trim(),
        to_email: DEVELOPER_INFO.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmissionResult({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("EmailJS dispatch error:", err);
      setSubmissionResult({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>06 / CONTACT</span>
          </div>
          <h2 className="section-title">
            Let's Build Something{" "}
            <span className="gold-gradient-text">Meaningful.</span>
          </h2>
          <p className="section-subtitle">
            Whether it's a web application, digital experience, or a new
            technical challenge, I'm always interested in learning, building, and
            growing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Details & Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Email Card with Quick Copy */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(212, 175, 55, 0.12)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {DEVELOPER_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.5rem 0.85rem",
                  borderRadius: "8px",
                  background: copiedEmail
                    ? "rgba(16, 185, 129, 0.15)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: copiedEmail
                    ? "1px solid rgba(16, 185, 129, 0.4)"
                    : "1px solid var(--border-subtle)",
                  color: copiedEmail ? "#10b981" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "12px",
                  background: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Direct Phone / WhatsApp
                </div>
                <a
                  href={`tel:${DEVELOPER_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    textDecoration: "none",
                  }}
                >
                  {DEVELOPER_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "12px",
                  background: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {DEVELOPER_INFO.location}
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                transition: "all var(--transition-fast)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(212, 175, 55, 0.12)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                    flexShrink: 0,
                    transition: "all var(--transition-fast)",
                  }}
                >
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Open Source Repositories
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    github.com/faiq-rehman
                  </div>
                </div>
              </div>

              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Faiq Rehman on GitHub"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.5rem 0.85rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--gold-light)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(212, 175, 55, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>Visit</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* LinkedIn Card - conditionally rendered only if an authentic URL is present */}
            {DEVELOPER_INFO.linkedin && (
              <div
                className="glass-card"
                style={{
                  padding: "1.5rem 1.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  transition: "all var(--transition-fast)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: "rgba(212, 175, 55, 0.12)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      Professional Network
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      LinkedIn
                    </div>
                  </div>
                </div>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--gold-light)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(212, 175, 55, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span>Connect</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </motion.div>

          {/* Right Column: Contact Form with Frontend Validation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card"
            style={{ padding: "2.5rem" }}
          >
            <div style={{ marginBottom: "1.75rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                Send A Direct Message
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                }}
              >
                Fill out the details below to initiate direct communication.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
                className="form-row-grid"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alexander Vance"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "var(--bg-input)",
                      border: errors.name
                        ? "1px solid #ef4444"
                        : "1px solid var(--border-medium)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      outline: "none",
                      transition: "border-color var(--transition-fast)",
                    }}
                    onFocus={(e) => {
                      if (!errors.name)
                        e.target.style.borderColor = "var(--gold-primary)";
                    }}
                    onBlur={(e) => {
                      if (!errors.name)
                        e.target.style.borderColor = "var(--border-medium)";
                    }}
                  />
                  {errors.name && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        color: "#ef4444",
                        fontSize: "0.75rem",
                        marginTop: "0.35rem",
                      }}
                    >
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. contact@domain.com"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "var(--bg-input)",
                      border: errors.email
                        ? "1px solid #ef4444"
                        : "1px solid var(--border-medium)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      outline: "none",
                      transition: "border-color var(--transition-fast)",
                    }}
                    onFocus={(e) => {
                      if (!errors.email)
                        e.target.style.borderColor = "var(--gold-primary)";
                    }}
                    onBlur={(e) => {
                      if (!errors.email)
                        e.target.style.borderColor = "var(--border-medium)";
                    }}
                  />
                  {errors.email && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        color: "#ef4444",
                        fontSize: "0.75rem",
                        marginTop: "0.35rem",
                      }}
                    >
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    background: "var(--bg-input)",
                    border: errors.subject
                      ? "1px solid #ef4444"
                      : "1px solid var(--border-medium)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    transition: "border-color var(--transition-fast)",
                  }}
                  onFocus={(e) => {
                    if (!errors.subject)
                      e.target.style.borderColor = "var(--gold-primary)";
                  }}
                  onBlur={(e) => {
                    if (!errors.subject)
                      e.target.style.borderColor = "var(--border-medium)";
                  }}
                />
                {errors.subject && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#ef4444",
                      fontSize: "0.75rem",
                      marginTop: "0.35rem",
                    }}
                  >
                    <AlertCircle size={12} />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.75rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your project, technical requirement, or question..."
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    background: "var(--bg-input)",
                    border: errors.message
                      ? "1px solid #ef4444"
                      : "1px solid var(--border-medium)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color var(--transition-fast)",
                  }}
                  onFocus={(e) => {
                    if (!errors.message)
                      e.target.style.borderColor = "var(--gold-primary)";
                  }}
                  onBlur={(e) => {
                    if (!errors.message)
                      e.target.style.borderColor = "var(--border-medium)";
                  }}
                />
                {errors.message && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#ef4444",
                      fontSize: "0.75rem",
                      marginTop: "0.35rem",
                    }}
                  >
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Dispatch Info Note */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                <MessageSquare size={14} color="var(--gold-primary)" />
                <span>
                  Delivers directly to{" "}
                  <strong style={{ color: "var(--gold-light)" }}>
                    {DEVELOPER_INFO.email}
                  </strong>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury-primary"
                style={{
                  width: "100%",
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-animation" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {submissionResult && submissionResult.type === "success" && (
                <div
                  role="status"
                  style={{
                    marginTop: "1.25rem",
                    padding: "0.9rem 1.1rem",
                    borderRadius: "10px",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    color: "#34d399",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <CheckCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{submissionResult.message}</span>
                </div>
              )}

              {submissionResult && submissionResult.type === "error" && (
                <div
                  role="alert"
                  style={{
                    marginTop: "1.25rem",
                    padding: "0.9rem 1.1rem",
                    borderRadius: "10px",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#fca5a5",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <AlertCircle
                      size={18}
                      style={{ flexShrink: 0, color: "#ef4444" }}
                    />
                    <span>{submissionResult.message}</span>
                  </div>
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
                      formData.subject
                        ? `[Portfolio Inquiry] ${formData.subject}`
                        : "Portfolio Inquiry"
                    )}&body=${encodeURIComponent(
                      `Hi Faiq,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: "var(--gold-light)",
                      textDecoration: "underline",
                      marginLeft: "1.6rem",
                    }}
                  >
                    Direct Email: {DEVELOPER_INFO.email}
                  </a>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        @media (min-width: 640px) {
          .form-row-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
