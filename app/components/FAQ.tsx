"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What types of clients do you work with?",
    a: "We partner with early-stage startups, scaling SaaS teams, and enterprise AI companies. Whether you need a brand refresh, a product redesign, or a full design system, we've got you covered.",
  },
  {
    q: "Can we start with a single page or broader scope?",
    a: "Absolutely. We often start with a focused landing page or MVP design and scale the engagement from there based on your product needs and timeline.",
  },
  {
    q: "How fast can you deliver?",
    a: "Typical turnaround is 1–2 weeks for a landing page and 3–6 weeks for a full product design. We'll agree on a clear timeline before work begins so there are no surprises.",
  },
  {
    q: "Do you handle development too?",
    a: "Design is our primary focus, but we produce dev-ready assets — annotated specs, design tokens, and Figma handoff files — that any front-end team can implement with ease.",
  },
  {
    q: "Are your designs dev ready?",
    a: "Yes. Every deliverable includes component-level Figma files, exported assets, spacing guides, and a style guide so developers can build pixel-perfect without back-and-forth.",
  },
  {
    q: "Do you design for all specific products?",
    a: "We specialize in web apps, SaaS dashboards, mobile apps, and brand identities. If your project falls outside these, reach out and we'll let you know honestly if we're the right fit.",
  },
  {
    q: "What if I need help after launch?",
    a: "We offer post-launch support packages for iteration, A/B testing assets, and ongoing design work. Many clients move into a monthly retainer after the initial engagement.",
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
