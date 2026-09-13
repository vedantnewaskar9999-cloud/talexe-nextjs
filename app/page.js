"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Star,
  ShieldCheck,
  Menu,
  FileText,
  Users,
  Linkedin,
  MessageSquare,
  Briefcase,
  Target,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "918530809768";

const services = [
  {
    icon: FileText,
    title: "Resume Writing",
    text: "ATS-friendly rewrites, tailored bullet points and impactful storytelling that recruiters actually read.",
    hl: "ATS-friendly",
  },
  {
    icon: Users,
    title: "Career Counselling",
    text: "1:1 sessions to map your goals, identify strengths and design a 6-month career growth plan.",
    hl: "strengths",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    text: "Keyword-rich headline, story-first about section, and a profile recruiters can't scroll past.",
    hl: "recruiters",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    text: "Mock interviews, behavioural drills and role-specific technical prep by senior HR practitioners.",
    hl: "practitioners",
  },
  {
    icon: Briefcase,
    title: "Personal HR Advisor",
    text: "Your HR on speed-dial for offer negotiations, references, career pivots and workplace advice.",
    hl: "pivots",
  },
  {
    icon: Target,
    title: "Job-Hunt Strategy",
    text: "Curated openings, application funnel tracking and weekly accountability so you land offers faster.",
    hl: "application funnel tracking",
  },
];

const plans = [
  {
    badge: "1 MONTH",
    name: "1 Month",
    price: "₹99",
    duration: "/ 30 days",
    note: "Billed once. No auto-renewal.",
    features: [
      "Resume review & rewrite (1)",
      "Career consultation (30 min)",
      "LinkedIn quick audit",
      "Email support",
    ],
  },
  {
    badge: "6 MONTHS",
    name: "6 Months",
    price: "₹499",
    duration: "/ 180 days",
    note: "Billed once. No auto-renewal.",
    features: [
      "Unlimited resume revisions",
      "3 career consultations",
      "LinkedIn optimization",
      "Interview prep session",
      "Priority email support",
    ],
  },
  {
    badge: "1 YEAR",
    name: "1 Year",
    price: "₹999",
    duration: "/ 365 days",
    note: "Billed once. No auto-renewal.",
    features: [
      "Everything in 6 months",
      "Unlimited consultations",
      "Personal HR advisor",
      "Job-hunt strategy plan",
      "Mock interviews (unlimited)",
      "24x7 chat support",
    ],
    featured: true,
  },
];
const isMobile =
  typeof window !== "undefined" && window.innerWidth <= 520;

const isTablet =
  typeof window !== "undefined" && window.innerWidth <= 768;

function Logo() {
  return (
    <a href="#top" className="logo">
      <span className="logo-mark">T</span>
      <span className="logo-word">
        Talexe
        <span>.IN</span>
      </span>
    </a>
  );
}

function ServiceDescription({ text, hl }) {
  if (!hl) return <p>{text}</p>;

  const idx = text.indexOf(hl);

  if (idx === -1) return <p>{text}</p>;

  return (
    <p>
      {text.slice(0, idx)}
      <span className="hl">{hl}</span>
      {text.slice(idx + hl.length)}
    </p>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function updateField(field) {
    return (e) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  }

   function getPlanWaLink(plan) {
    const lines = [
      "New plan inquiry from Talexe website",
      `Plan: ${plan.name} (${plan.price}/month)`,
      `About: ${plan.note}`,
      `Includes: ${plan.features.join(", ")}`,
    ];
 
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }

  function handleSendInquiry(e) {
    e.preventDefault();

    const lines = [
      "New inquiry from Talexe website",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "Not specified"}`,
      `Message: ${form.message}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  }

  return (
    <>
      {/* ================= HEADER ================= */}

      <div className="site-header-wrap">
        <header className="site-header">
          <Logo />

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="primary-btn nav-cta" href="#contact">
              Get started
            </a>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>

          <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setMobileOpen(false)}>
              Services
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </a>
          </div>
        </header>
      </div>

      <main id="top">

        {/* ================= HERO ================= */}

        <section className="hero" id="home">

          <div className="hero-grid"></div>

          {/* LEFT CONTENT */}
          <div className="hero-copy">

            <div className="eyebrow">
              <Sparkles size={13} />
              PERSONAL HR & CAREER GUIDANCE
            </div>

            <h1>
              Land the role you
              <br />
              deserve.
              <strong>One resume at a time.</strong>
            </h1>

            <p className="hero-text">
              Talexe.in gives you a personal HR partner — resume rewrites,
              LinkedIn glow-ups, interview drills and career strategy. All
              under a single, refreshingly affordable subscription.
            </p>

            <div className="hero-buttons">

              <a
                className="primary-btn hero-primary"
                href="#contact"
              >
                Start your journey
                <ArrowRight size={17} />
              </a>

              <a
                className="secondary-btn hero-secondary"
                href="#pricing"
              >
                See plans
              </a>

            </div>

            <div className="trust-row">

              <span>
                <ShieldCheck size={15} />
                Secure payments
              </span>

              <span>
                <Star size={15} />
                Rated 4.9 by 1,200+ candidates
              </span>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div className="hero-visual">

            <div className="hero-image-container">

              <img
                src="/photo1"
                alt="Personal HR career guidance"
              />

            </div>


            {/* RESPONSE CARD */}

            <div className="response-card">

              <span>RESPONSE</span>

              <b>under 24h</b>

              <small>on all inquiries</small>

            </div>


            {/* PERSONAL SESSION CARD */}

            <div className="session-card">

              <span>PERSONAL SESSION</span>

              <b>Meet your HR partner.</b>

              <small>
                1:1 guidance, tailored to your career stage — no templates.
              </small>

            </div>


            {/* DECORATIVE CIRCLE */}

            <div className="hero-circle"></div>

          </div>

        </section>




        {/* ================= SERVICES ================= */}

        <section className="section" id="services">

          <div className="section-heading">

            <div>

              <div className="mini-label">
                OUR SERVICES
              </div>

              <h2>
                Everything a career move needs —{" "}
                <em>under one roof.</em>
              </h2>

            </div>

            <p>
              Every subscription gives you access to real HR practitioners,
              not templates. Pick a service, or use them all.
            </p>

          </div>


          <div className="service-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <article
                  className="service-card"
                  key={service.title}
                >

                  <div className="service-blob"></div>

                  <div className="service-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{service.title}</h3>

                  <ServiceDescription
                    text={service.text}
                    hl={service.hl}
                  />

                </article>

              );

            })}

          </div>

        </section>


        {/* ================= DARK BAND ================= */}

        <section className="dark-band">

          <div className="dark-band-copy">

            <div className="mini-label">
              A BETTER WAY TO JOB SEARCH
            </div>

            <h2>
              Stop sending resumes into the void.
            </h2>

            <p>
              Build a career story recruiters understand, then walk
              into interviews with confidence.
            </p>

          </div>


          <div className="check-list">

            {[
              "Role-specific resume positioning",
              "Recruiter-friendly LinkedIn profile",
              "Interview confidence & feedback",
              "A clear 30-day action plan",
            ].map((x) => (

              <div key={x}>

                <span>
                  <Check size={15} />
                </span>

                {x}

              </div>

            ))}

          </div>

        </section>


        {/* ================= PRICING ================= */}

        <section
          className="section pricing"
          id="pricing"
        >

          <div className="section-heading centered">

            <div>

              <div className="mini-label">
                SIMPLE, HONEST PRICING
              </div>

              <h2>
                Pick the plan that fits your career stage
              </h2>

            </div>

            <p>
              No hidden fees. Cancel anytime. Every plan gets you access
              to a real HR practitioner.
            </p>

          </div>

                <div className="pricing-grid">
 
            {plans.map((plan) => (
 
              <article
                className={`price-card ${
                  plan.featured ? "featured" : ""
                }`}
                key={plan.name}
              >
 
                {plan.featured && (
                  <div className="popular">
                    MOST POPULAR
                  </div>
                )}
 
                <h3>{plan.name}</h3>
 
                <div className="price">
                  {plan.price}
                  <span>/month</span>
                </div>
 
                <p>{plan.note}</p>
 
                <div className="divider"></div>
 
                {plan.features.map((f) => (
 
                  <div
                    className="feature"
                    key={f}
                  >
                    <Check size={16} />
                    {f}
                  </div>
 
                ))}
 
                <a
                  href={getPlanWaLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    plan.featured
                      ? "primary-btn full"
                      : "secondary-btn full"
                  }
                >
                  Get started
                  <ArrowRight size={17} />
                </a>
 
              </article>
 
            ))}
 
          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-left">

            <div className="mini-label">
              GET IN TOUCH
            </div>

            <h2>
              Talk to a real HR practitioner —{" "}
              <em>not a bot.</em>
            </h2>

            <p>
              Send us your question, career goal or resume situation. We
              reply within 24 hours, with a real, human response.
            </p>

            <div className="contact-cards">

              <div className="contact-card">

                <span className="contact-icon">
                  <Mail size={17} />
                </span>

                <div>
                  <small>EMAIL US</small>
                  <b>talexeteam@gmail.com</b>
                </div>

              </div>

              <div className="contact-card">

                <span className="contact-icon">
                  <Phone size={17} />
                </span>

                <div>
                  <small>CALL US</small>
                  <b>+91 85308 09768</b>
                </div>

              </div>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSendInquiry}
          >

            <div className="form-row">

              <div className="form-field">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Riya Sharma"
                  value={form.name}
                  onChange={updateField("name")}
                  required
                />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={updateField("email")}
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98xxxxxxxx"
                  value={form.phone}
                  onChange={updateField("phone")}
                />
              </div>

              <div className="form-field">
                <label>Service</label>
                <select
                  value={form.service}
                  onChange={updateField("service")}
                >
                  <option value="">Pick a service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="form-field full-field">
              <label>How can we help?</label>
              <textarea
                rows={4}
                placeholder="Tell us a bit about where you are in your career..."
                value={form.message}
                onChange={updateField("message")}
              />
            </div>

            <button
              type="submit"
              className="primary-btn full send-btn"
            >
              Send inquiry
              <Send size={16} />
            </button>

            <p className="form-note">
              We reply within 24 hours. Your details are safe with us.
            </p>

          </form>

        </section>


        {/* ================= FOOTER ================= */}

        <footer
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: isMobile ? "45px 18px 20px" : "60px 30px 25px",
            background: "#090d15",
            borderTop: "1px solid #242d3c",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* FOOTER GRID */}
          <div
            className="footer-grid"
            style={{
              width: "100%",
              maxWidth: "1000px",
              display: "grid",

              // Desktop: 3 columns
              // Mobile: 1 column
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",

              gap: isMobile
                ? "35px"
                : isTablet
                  ? "40px 25px"
                  : "60px",

              textAlign: "center",
              margin: "0 auto",
            }}
          >

            {/* ================= BRAND ================= */}
            <div
              className="footer-brand"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",

                // On tablet brand takes full row
                gridColumn: isTablet && !isMobile ? "1 / -1" : "auto",
              }}
            >
              <div
                className="logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: isMobile ? "8px" : "10px",
                }}
              >
                <span
                  className="logo-mark"
                  style={{
                    width: isMobile ? "36px" : "40px",
                    height: isMobile ? "36px" : "40px",
                    minWidth: isMobile ? "36px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "#ffbd3d",
                    color: "#11151d",
                    fontSize: isMobile ? "17px" : "19px",
                    fontWeight: "800",
                  }}
                >
                  T
                </span>

                <span
                  className="logo-word"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    fontSize: isMobile ? "17px" : "18px",
                    fontWeight: "800",
                    color: "#f5f5f5",
                    lineHeight: "1.1",
                  }}
                >
                  Talexe

                  <span
                    style={{
                      marginTop: "3px",
                      color: "#ffbd3d",
                      fontSize: isMobile ? "6px" : "7px",
                      letterSpacing: isMobile ? "1.4px" : "1.8px",
                      fontWeight: "800",
                    }}
                  >
                    CAREER GUIDANCE
                  </span>
                </span>
              </div>

              <p
                style={{
                  width: "100%",
                  maxWidth: isMobile ? "310px" : "330px",
                  margin: "20px auto 0",
                  color: "#9298a1",
                  fontSize: isMobile ? "12px" : "13px",
                  lineHeight: "1.7",
                  textAlign: "center",
                }}
              >
                Your personal HR partner. Resume writing, interview prep,
                LinkedIn optimisation and end-to-end career guidance —
                built with warmth, delivered with precision.
              </p>
            </div>


            {/* ================= COMPANY ================= */}
            <div
              className="footer-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "11px" : "13px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div
                className="mini-label"
                style={{
                  marginBottom: "5px",
                  color: "#ffbd3d",
                  fontSize: "10px",
                  fontWeight: "800",
                  letterSpacing: "1.6px",
                }}
              >
                COMPANY
              </div>

              <a
                href="#services"
                style={{
                  color: "#aeb2ba",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Services
              </a>

              <a
                href="#pricing"
                style={{
                  color: "#aeb2ba",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Pricing
              </a>

              <a
                href="#contact"
                style={{
                  color: "#aeb2ba",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </div>


            {/* ================= REACH US ================= */}
            <div
              className="footer-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "11px" : "13px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div
                className="mini-label"
                style={{
                  marginBottom: "5px",
                  color: "#ffbd3d",
                  fontSize: "10px",
                  fontWeight: "800",
                  letterSpacing: "1.6px",
                }}
              >
                REACH US
              </div>

              <a
                href="mailto:talexeteam@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#aeb2ba",
                  fontSize: isMobile ? "12px" : "13px",
                  textDecoration: "none",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                <Mail size={14} />
                <span>talexeteam@gmail.com</span>
              </a>

              <a
                href="tel:+918530809768"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#aeb2ba",
                  fontSize: isMobile ? "12px" : "13px",
                  textDecoration: "none",
                }}
              >
                <Phone size={14} />
                <span>+91 85308 09768</span>
              </a>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#aeb2ba",
                  fontSize: isMobile ? "12px" : "13px",
                }}
              >
                <MapPin size={14} />
                <span>India</span>
              </span>
            </div>
          </div>


          {/* ================= FOOTER BOTTOM ================= */}
          <div
            className="footer-bottom"
            style={{
              width: "100%",
              maxWidth: "1000px",
              marginTop: isMobile ? "35px" : "45px",
              paddingTop: isMobile ? "18px" : "22px",
              borderTop: "1px solid #242d3c",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              gap: isMobile ? "12px" : "15px",

              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <span
              style={{
                color: "#6f7580",
                fontSize: isMobile ? "10px" : "11px",
              }}
            >
              © 2026 Talexe.in — All rights reserved.
            </span>

            <div
              className="footer-legal"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                // Allows wrapping on very small screens
                flexWrap: "wrap",

                gap: isMobile ? "12px 20px" : "25px",

                textAlign: "center",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#777e88",
                  fontSize: isMobile ? "10px" : "11px",
                  textDecoration: "none",
                }}
              >
                Privacy
              </a>

              <a
                href="#"
                style={{
                  color: "#777e88",
                  fontSize: isMobile ? "10px" : "11px",
                  textDecoration: "none",
                }}
              >
                Terms
              </a>

              <a
                href="#"
                style={{
                  color: "#777e88",
                  fontSize: isMobile ? "10px" : "11px",
                  textDecoration: "none",
                }}
              >
                Refund Policy
              </a>
            </div>
          </div>
        </footer>

      </main>


      {/* =========================================================
          ALL CSS IN SAME PAGE.JS FILE
      ========================================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #090d15;
          color: #f6f5f2;
          font-family: "DM Sans", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }


        /* =========================================
           HEADER
        ========================================= */

        .site-header-wrap {
          position: sticky;

          top: 0;

          z-index: 50;

          background: rgba(9, 13, 21, .86);

          backdrop-filter: blur(10px);

          border-bottom: 1px solid #202735;
        }


        .site-header {
          position: relative;

          max-width: 1200px;

          margin: auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            14px
            max(
              28px,
              calc((100vw - 1200px) / 2)
            );
        }


        .nav-links {
          display: flex;

          align-items: center;

          gap: 30px;

          font-size: 14px;

          font-weight: 600;

          color: #d3d5da;
        }


        .nav-links a:hover {
          color: #ffbd3d;
        }


        .nav-cta {
          height: 38px;

          padding: 0 18px;

          font-size: 13px;
        }


        .menu-btn {
          display: none;

          background: none;

          border: none;

          color: #eee;

          cursor: pointer;

          padding: 4px;
        }


        .mobile-nav {
          display: none;

          flex-direction: column;

          position: absolute;

          top: 100%;

          left: 0;

          right: 0;

          background: #0d121c;

          border-bottom: 1px solid #202735;

          padding: 4px 24px 12px;
        }


        .mobile-nav.open {
          display: flex;
        }


        .mobile-nav a {
          padding: 12px 0;

          color: #d7d8da;

          font-size: 14px;

          font-weight: 600;

          border-bottom: 1px solid #1c2432;
        }


        .mobile-nav a:last-child {
          border-bottom: none;
        }


        /* =========================================
           HERO
        ========================================= */

        .hero {
          position: relative;

          height: 502px;
          min-height: 502px;

          display: grid;
          grid-template-columns: 52.5% 47.5%;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 88% 10%,
              rgba(255, 189, 61, 0.10),
              transparent 35%
            ),
            #090d15;

          border-bottom: 1px solid #202735;
        }


        /* =========================================
           GRID
        ========================================= */

        .hero-grid {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(34, 43, 58, 0.50) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34, 43, 58, 0.50) 1px,
              transparent 1px
            );

          background-size: 48px 48px;

          opacity: .72;
        }


        /* =========================================
           LEFT HERO
        ========================================= */

        .hero-copy {
          position: relative;

          z-index: 5;

          max-width: 620px;

          padding-left: max(
            28px,
            calc((100vw - 1200px) / 2)
          );

          padding-right: 30px;

          padding-top: 72px;
        }


        /* =========================================
           EYEBROW
        ========================================= */

        .eyebrow {
          width: fit-content;

          height: 25px;

          padding: 0 13px;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          border: 1px solid #5a461f;

          border-radius: 20px;

          background: rgba(
            13,
            17,
            25,
            .70
          );

          color: #ffbd3d;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.45px;
        }


        /* =========================================
           HEADING
        ========================================= */

        .hero h1 {
          margin: 26px 0 20px;

          font-family: "Manrope", sans-serif;

          font-size: clamp(
            44px,
            4.15vw,
            59px
          );

          line-height: .98;

          font-weight: 800;

          letter-spacing: -2.8px;

          color: #f5f4f1;
        }

        .hero h1 strong {
          display: block;

          margin-top: 3px;

          color: #ffbd3d;

          font-weight: 800;

          white-space: nowrap;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .hero-text {
          max-width: 535px;

          margin: 0 0 28px;

          color: #aeb1b7;

          font-size: 15px;

          line-height: 1.52;
        }


        /* =========================================
           BUTTONS
        ========================================= */

        .hero-buttons {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .primary-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          background: #ffbd3d;

          color: #11151d;

          border-radius: 28px;

          font-weight: 700;

          border: none;

          cursor: pointer;

          font-family: inherit;

          transition:
            transform .2s ease,
            background .2s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);

          background: #ffc84e;
        }

        .hero-primary {
          min-width: 182px;

          height: 43px;

          padding: 0 20px;

          font-size: 14px;
        }


        .secondary-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          height: 43px;

          padding: 0 25px;

          border: 1px solid #344052;

          border-radius: 28px;

          color: #eeeeee;

          font-weight: 700;

          font-size: 14px;

          transition: .2s;
        }

        .secondary-btn:hover {
          border-color: #68758a;
        }


        /* =========================================
           TRUST
        ========================================= */

        .trust-row {
          display: flex;

          align-items: center;

          gap: 26px;

          margin-top: 28px;

          color: #8d929b;

          font-size: 11px;
        }

        .trust-row span {
          display: flex;

          align-items: center;

          gap: 8px;
        }

        .trust-row svg {
          color: #ffbd3d;
        }


        /* =========================================
           HERO IMAGE
        ========================================= */

        .hero-visual {
          position: relative;

          height: 502px;

          overflow: visible;
        }


        .hero-image-container {
          position: absolute;

          top: 28px;

          right: 7.5%;

          width: 83%;

          height: calc(100% - 28px);

          overflow: hidden;

          background: #242a2d;

          border-radius:
            0
            0
            18px
            18px;

          z-index: 2;
        }


        .hero-image-container img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center 25%;

          filter: saturate(.84);
        }


        /* =========================================
           IMAGE BACKPLATE
        ========================================= */

        .hero-visual::before {
          content: "";

          position: absolute;

          top: 0;

          left: 4%;

          width: 34%;

          height: 100%;

          background:
            rgba(
              255,
              189,
              61,
              .12
            );

          border-radius:
            0
            0
            20px
            20px;

          z-index: 1;
        }


        /* =========================================
           RESPONSE CARD
        ========================================= */

        .response-card {
          position: absolute;

          left: -1%;

          top: 72px;

          width: 112px;

          padding:
            13px
            13px
            12px;

          background: #121b2b;

          border: 1px solid #2e394a;

          border-radius: 13px;

          box-shadow:
            0 14px 30px
            rgba(
              0,
              0,
              0,
              .38
            );

          z-index: 8;
        }


        .response-card span {
          display: block;

          margin-bottom: 4px;

          color: #ffbd3d;

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .response-card b {
          display: block;

          color: #f1f1ef;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 18px;

          line-height: 1.15;

          font-weight: 800;
        }


        .response-card small {
          display: block;

          margin-top: 2px;

          color: #999fa8;

          font-size: 9px;
        }


        /* =========================================
           SESSION CARD
        ========================================= */

        .session-card {
          position: absolute;

          left: 2%;

          right: 8%;

          bottom: 18px;

          min-height: 79px;

          padding:
            14px
            15px
            12px;

          background:
            rgba(
              23,
              32,
              45,
              .96
            );

          border:
            1px solid
            #303b4c;

          border-radius: 15px;

          box-shadow:
            0 12px 30px
            rgba(
              0,
              0,
              0,
              .25
            );

          z-index: 7;
        }


        .session-card span {
          display: block;

          margin-bottom: 5px;

          color: #ffbd3d;

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 1.55px;
        }


        .session-card b {
          display: block;

          margin-bottom: 3px;

          color: #f4f3ef;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 15px;

          line-height: 1.15;

          font-weight: 800;
        }


        .session-card small {
          display: block;

          color: #a7acb3;

          font-size: 9.5px;

          line-height: 1.3;
        }


        /* =========================================
           DECORATIVE CIRCLE
        ========================================= */

        .hero-circle {
          position: absolute;

          width: 105px;
          height: 105px;

          right: 4%;

          bottom: -42px;

          border-radius: 50%;

          background:
            rgba(
              166,
              41,
              67,
              .52
            );

          z-index: 1;
        }


        /* =========================================
           GENERAL SECTION
        ========================================= */

        .section {
          max-width: 1200px;

          margin: auto;

          padding:
            110px
            28px;
        }


        .section-heading {
          display: flex;

          justify-content:
            space-between;

          align-items: flex-end;

          gap: 50px;

          margin-bottom: 52px;
        }


        .mini-label {
          color: #ffbd3d;

          font-size: 11px;

          letter-spacing: 1.6px;

          font-weight: 800;
        }


        .section-heading h2,
        .dark-band h2,
        .contact-left h2 {
          margin:
            12px 0 0;

          font-family:
            "Manrope",
            sans-serif;

          font-size:
            clamp(
              35px,
              4vw,
              55px
            );

          line-height: 1.02;

          font-weight: 800;

          letter-spacing: -2px;
        }


        .section-heading h2 em,
        .contact-left em {
          color: #ffbd3d;

          font-style: normal;
        }


        .section-heading > p {
          max-width: 390px;

          color: #9ea2a9;

          line-height: 1.65;
        }


        /* =========================================
           SERVICES
        ========================================= */

        .service-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 18px;
        }


        .service-card {
          position: relative;

          min-height: 0;

          padding: 26px;

          background:
            rgba(
              14,
              19,
              28,
              .55
            );

          border: 1px solid #242d3c;

          border-radius: 16px;

          overflow: hidden;

          transition: .25s;
        }


        .service-card:hover {
          background: #131a25;

          border-color: #37455a;

          transform:
            translateY(-3px);
        }


        .service-blob {
          position: absolute;

          top: -26px;

          right: -26px;

          width: 92px;
          height: 92px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              .025
            );
        }


        .service-icon {
          position: relative;

          width: 42px;
          height: 42px;

          margin-bottom: 20px;

          display: grid;

          place-items: center;

          border-radius: 11px;

          background: #241c0f;

          color: #ffbd3d;
        }


        .service-card h3 {
          position: relative;

          margin: 0 0 8px;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 16.5px;

          font-weight: 700;

          color: #f2f1ee;
        }


        .service-card p {
          position: relative;

          margin: 0;

          color: #979da5;

          line-height: 1.62;

          font-size: 13.5px;
        }


        .service-card .hl {
          color: #ffbd3d;

          font-weight: 600;
        }


        /* =========================================
           DARK BAND
        ========================================= */

        .dark-band {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 80px;

          align-items: center;

          padding:
            85px
            max(
              28px,
              calc((100vw - 1200px) / 2)
            );

          background: #121924;

          border-top:
            1px solid #242d3c;

          border-bottom:
            1px solid #242d3c;
        }


        .dark-band-copy p {
          max-width: 480px;

          color: #9fa4ab;

          line-height: 1.7;

          font-size: 16px;
        }


        .check-list {
          display: grid;

          gap: 17px;
        }


        .check-list div {
          display: flex;

          align-items: center;

          gap: 13px;

          padding-bottom: 17px;

          border-bottom:
            1px solid
            #28313f;

          color: #d7d8da;
        }


        .check-list span {
          width: 25px;
          height: 25px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #283445;

          color: #ffbd3d;
        }


        /* =========================================
           PRICING
        ========================================= */

        .centered {
          display: block;

          text-align: center;
        }


        .centered > p {
          margin:
            22px
            auto
            0;
        }


        .pricing-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 18px;

          margin-top: 52px;
        }


        .price-card {
          position: relative;

          padding: 32px;

          background: #0e141e;

          border:
            1px solid
            #2a3443;

          border-radius: 18px;
        }


        .price-card.featured {
          background:
            linear-gradient(
              180deg,
              #171d27,
              #0d131c
            );

          border-color: #9b7223;

          transform:
            translateY(-8px);
        }


        .popular {
          position: absolute;

          top: -13px;

          right: 20px;

          padding:
            6px
            10px;

          border-radius: 12px;

          background: #ffbd3d;

          color: #111;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1px;
        }


        .price-card h3 {
          font-family:
            "Manrope",
            sans-serif;

          font-size: 21px;
        }


        .price {
          margin:
            18px
            0
            4px;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 38px;

          font-weight: 800;
        }


        .price span {
          color: #777e89;

          font-size: 12px;

          font-weight: 500;
        }


        .price-card > p {
          color: #898f98;

          font-size: 13px;
        }


        .divider {
          height: 1px;

          margin: 25px 0;

          background: #28313d;
        }


        .feature {
          display: flex;

          align-items: center;

          gap: 10px;

          margin: 15px 0;

          color: #c9cbd0;

          font-size: 14px;
        }


        .feature svg {
          color: #ffbd3d;
        }


        .full {
          width: 100%;

          margin-top: 20px;
        }


        /* =========================================
           CONTACT
        ========================================= */

        .contact-section {
          max-width: 1200px;

          margin: auto;

          padding:
            90px
            28px
            105px;

          display: grid;

          grid-template-columns: 1.05fr 1fr;

          align-items: start;

          gap: 60px;

          border-top:
            1px solid
            #242d3c;
        }


        .contact-left > p {
          max-width: 460px;

          margin: 18px 0 0;

          color: #9ea2a9;

          line-height: 1.7;

          font-size: 15px;
        }


        .contact-cards {
          display: grid;

          gap: 14px;

          margin-top: 30px;

          max-width: 460px;
        }


        .contact-card {
          display: flex;

          align-items: center;

          gap: 14px;

          padding: 15px 18px;

          background: #10151f;

          border: 1px solid #242d3c;

          border-radius: 14px;
        }


        .contact-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 10px;

          background: #241c0f;

          color: #ffbd3d;
        }


        .contact-card small {
          display: block;

          color: #8a8fa6;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1px;

          margin-bottom: 3px;
        }


        .contact-card b {
          display: block;

          color: #f1f1ef;

          font-size: 14px;
        }


        .contact-form {
          background: #10151f;

          border: 1px solid #242d3c;

          border-radius: 20px;

          padding: 28px;

          display: grid;

          gap: 18px;
        }


        .form-row {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 16px;
        }


        .form-field {
          display: flex;

          flex-direction: column;

          gap: 8px;
        }


        .form-field label {
          font-size: 13px;

          font-weight: 700;

          color: #e6e6e3;
        }


        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;

          padding: 11px 13px;

          background: #0b0f17;

          border: 1px solid #2a3443;

          border-radius: 10px;

          color: #f0f0ee;

          font-size: 13.5px;

          font-family: inherit;

          outline: none;

          transition: border-color .2s;
        }


        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #5c6270;
        }


        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: #ffbd3d;
        }


        .form-field textarea {
          resize: vertical;

          min-height: 90px;
        }


        .form-field select {
          appearance: none;

          background-image:
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%23888'/></svg>");

          background-repeat: no-repeat;

          background-position: right 14px center;
        }


        .send-btn {
          height: 46px;

          font-size: 14px;
        }


        .form-note {
          margin: 0;

          text-align: center;

          color: #7f8590;

          font-size: 11.5px;
        }


        /* =========================================
           FOOTER
        ========================================= */

        footer {
          border-top: 1px solid #242d3c;
        }


        .footer-grid {
          max-width: 1200px;

          margin: auto;

          padding: 70px 28px 40px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 40px;
        }


        .footer-brand {
          flex: 1 1 320px;

          max-width: 420px;
        }


        .footer-brand .logo {
          margin-bottom: 16px;
        }


        .footer-brand p {
          max-width: 340px;

          margin: 0;

          color: #8d929b;

          font-size: 13.5px;

          line-height: 1.75;
        }


        .footer-col {
          flex: 0 0 auto;

          display: flex;

          // flex-direction: column;

          gap: 13px;
        }


        .footer-col .mini-label {
          margin-bottom: 4px;
        }


        .footer-col a,
        .footer-col span {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #a9adb5;

          font-size: 13.5px;
        }


        .footer-col a:hover {
          color: #ffbd3d;
        }


        .footer-col svg {
          color: #ffbd3d;

          flex-shrink: 0;
        }


        .footer-bottom {
          // max-width: 1200px;

          margin: auto;

          padding: 22px 28px;

          display: grid;

          align-items: center;

          // justify-content: space-between;

          gap: 20px;

          flex-wrap: wrap;

          color: #6f7580;

          font-size: 12px;

          border-top: 1px solid #202735;
        }


        .footer-legal {
          display: flex;

          align-items: center;

          gap: 22px;
        }


        .footer-legal a {
          color: #8a8fa6;

          font-size: 12px;
        }


        .footer-legal a:hover {
          color: #ffbd3d;
        }


        /* =========================================
           LOGO
        ========================================= */

        .logo {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .logo-mark {
          width: 36px;
          height: 36px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 12px;

          background: #ffbd3d;

          color: #111;

          font-size: 18px;

          font-weight: 800;
        }


        .logo-word {
          font-family:
            "Manrope",
            sans-serif;

          font-size: 17px;

          font-weight: 800;
        }


        .logo-word > span {
          display: block;

          margin-top: -2px;

          color: #ffbd3d;

          font-size: 7px;

          letter-spacing: 2px;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .nav-links,
          .nav-actions {
            display: none;
          }


          .menu-btn {
            display: block;
          }


          .hero {
            height: auto;

            min-height: 0;

            display: flex;

            flex-direction: column;
          }


          .hero-copy {
            max-width: none;

            padding:
              45px
              24px
              40px;
          }


          .hero h1 {
            font-size:
              clamp(
                42px,
                10vw,
                56px
              );

            letter-spacing: -2.4px;
          }


          .hero h1 strong {
            white-space: normal;
          }


          .hero-text {
            max-width: 600px;

            font-size: 15px;
          }


          .hero-visual {
            width: 100%;

            height: 430px;
          }


          .hero-image-container {
            right: 0;

            width: 94%;
          }


          .response-card {
            left: 10px;

            top: 35px;
          }


          .session-card {
            left: 15px;

            right: 20px;

            bottom: 15px;
          }


          .service-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }


          .pricing-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }


          .dark-band {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .section-heading {
            display: block;
          }


          .section-heading > p {
            margin-top: 20px;
          }


          .contact-section {
            grid-template-columns: 1fr;

            gap: 40px;
          }


       


          .footer-brand {
            flex-basis: 100%;

            max-width: none;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .hero-copy {
            padding:
              38px
              20px
              35px;
          }


          .eyebrow {
            font-size: 8px;

            padding:
              0
              11px;
          }


          .hero h1 {
            margin-top: 22px;

            font-size: 42px;

            line-height: .98;
          }


          .hero-text {
            font-size: 14px;

            line-height: 1.6;
          }


          .hero-buttons {
            flex-wrap: wrap;
          }


          .hero-primary,
          .hero-secondary {
            height: 44px;
          }


          .trust-row {
            flex-direction: column;

            align-items: flex-start;

            gap: 11px;

            margin-top: 24px;
          }


          .hero-visual {
            height: 390px;
          }


          .hero-image-container {
            width: 100%;

            border-radius: 0;
          }


          .response-card {
            left: 12px;

            top: 25px;
          }


          .session-card {
            left: 12px;

            right: 12px;
          }


          .service-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
          }


          .price-card.featured {
            transform: none;
          }


          .form-row {
            grid-template-columns: 1fr;
          }


          .footer-grid {
            // flex-direction: row;

            padding: 50px 24px 30px;
          }


          .footer-col {
            flex-basis: auto;
          }


         
        }

      `}</style>
    </>
  );
}