import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  MessageSquare,
  Loader2,
} from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { DEVELOPER_INFO } from "../data/developer";
import Toast from "./Toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkwkwap";

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
  const [toast, setToast] = useState(null);

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

    if (!formData.message.trim() || formData.message.trim().length < 10) {
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

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setToast({
          type: "success",
          title: "Message Sent Successfully!",
          description:
            "Thank you for reaching out. Your message has been submitted successfully.",
        });
        // Clear form only on successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        // Display professional error notification
        setToast({
          type: "error",
          title: "Message Could Not Be Sent",
          description:
            "Something went wrong while sending your message. Please try again.",
        });
      }
    } catch {
      // Network or unexpected failure
      setToast({
        type: "error",
        title: "Message Could Not Be Sent",
        description:
          "Something went wrong while sending your message. Please try again.",
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
              >
                <span>Visit</span>
                <ExternalLink size={13} />
              </a>
            </div>
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
                  Direct delivery to{" "}
                  <strong style={{ color: "var(--gold-light)" }}>
                    {DEVELOPER_INFO.email}
                  </strong>{" "}
                  • Fast response guaranteed
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
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Top-Right Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

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
