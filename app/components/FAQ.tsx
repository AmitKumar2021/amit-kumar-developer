"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What web services do you offer?",
    a: "I offer WordPress development, PHP & custom web development, e-commerce stores (WooCommerce/Shopify), SEO optimisation, API integration, and ongoing website maintenance. Whether you need a full website build or just improvements, I can help.",
  },
  {
    q: "How long does a website take to build?",
    a: "A standard WordPress website typically takes 1–2 weeks. E-commerce stores or custom PHP projects take 3–5 weeks. I always agree on a clear timeline before starting so there are no surprises.",
  },
  {
    q: "What is your pricing?",
    a: "Pricing depends on the project scope. WordPress sites start from ₹15,000, e-commerce stores from ₹20,000, and SEO packages from ₹8,000/month. Contact me for a free quote tailored to your needs.",
  },
  {
    q: "Can you help improve my existing website?",
    a: "Absolutely. I can audit your current site, fix performance issues, improve SEO, add new features, or redesign specific pages. Many clients come to me for ongoing maintenance and improvements.",
  },
  {
    q: "Do you handle SEO after the website is built?",
    a: "Yes. I offer ongoing SEO services including on-page optimisation, Google Search Console setup, keyword targeting, and monthly performance reports. A fast, well-structured site is just the starting point.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Every website I build is fully responsive — it will look and work great on all devices including phones, tablets, and desktops. I test on multiple screen sizes before delivery.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. I offer post-launch support and maintenance packages starting from ₹5,000/month. This covers updates, security patches, backups, and minor content changes so your site stays healthy and up to date.",
  },
];

/* ── Single FAQ row ────────────────────────────────────────────── */
function FaqItem({
  q, a, isOpen, onToggle, isLast,
}: {
  q: string; a: string; isOpen: boolean;
  onToggle: () => void; isLast: boolean;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Left indicator circle */}
        <div
          style={{
            width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
            background: isOpen ? "#FD853A" : "transparent",
            border: isOpen ? "none" : "2px solid rgba(255,255,255,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.3s, border 0.3s",
          }}
        >
          {isOpen && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          )}
        </div>

        {/* Question text */}
        <span
          style={{
            flex: 1,
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(14px, 1.3vw, 18px)",
            fontWeight: isOpen ? 600 : 400,
            color: isOpen ? "#fff" : "rgba(255,255,255,0.65)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            transition: "color 0.3s, font-weight 0.2s",
          }}
        >
          {q}
        </span>

        {/* Right expand/collapse icon */}
        <div
          style={{
            width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
            border: `2px solid ${isOpen ? "#FD853A" : "rgba(255,255,255,0.20)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.3s, transform 0.35s",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={isOpen ? "#FD853A" : "rgba(255,255,255,0.55)"}
            strokeWidth="2.8" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>

      {/* Answer — animated height via max-height trick */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          paddingLeft: 42,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(13px, 1.1vw, 16px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}
        >
          {a}
        </p>
      </div>

      {/* Divider */}
      {!isLast && (
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }}/>
      )}
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (i: number) =>
    setOpenIdx((prev) => (prev === i ? -1 : i));

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-8">
      <div
        className="relative w-full rounded-[50px] overflow-hidden"
        style={{
          background: `url('/images/background-1.png') center/cover no-repeat, #171717`,
          padding: "clamp(48px, 7vw, 100px) clamp(20px, 5vw, 71px)",
        }}
      >
        {/* Scrim */}
        <div
          className="absolute inset-0 rounded-[50px] pointer-events-none"
          style={{ background: "rgba(12,12,12,0.45)", zIndex: 0 }}
        />

        <div className="relative z-10 max-w-[1299px] mx-auto">
          <div
            className="faq-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(220px, 32%, 400px) 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "start",
            }}
          >

            {/* ── Left: title + desc + CTA ─────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h2
                style={{
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize: "clamp(30px, 4vw, 52px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(13px, 1.15vw, 16px)",
                  color: "rgba(255,255,255,0.50)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: 300,
                }}
              >
                We&apos;ve heard it all. Here&apos;s everything you need to know
                before working with us.
              </p>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  fontWeight: 500,
                  color: "#FD853A",
                  textDecoration: "none",
                  width: "fit-content",
                  marginTop: 4,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.gap = "12px";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.gap = "8px";
                }}
              >
                Ask a question
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#FD853A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            {/* ── Right: accordion ──────────────────────────── */}
            <div>
              {FAQS.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openIdx === i}
                  onToggle={() => toggle(i)}
                  isLast={i === FAQS.length - 1}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
