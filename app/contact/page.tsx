import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact – Amit Kumar",
  description: "Get in touch with Amit Kumar for freelance projects, full-time opportunities, or just to say hello.",
};

const INFO_CARDS = [
  { icon: "📧", label: "Email", value: "amit@example.com", sub: "Usually responds within 12 hours" },
  { icon: "📍", label: "Location", value: "New Delhi, India", sub: "Available for remote & on-site" },
  { icon: "⏰", label: "Availability", value: "Mon – Fri, 9 am – 7 pm IST", sub: "Open to freelance & full-time" },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navbar />

      {/* ── Hero — WHITE ──────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", padding: "clamp(52px,8vw,100px) clamp(24px,6vw,96px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 30, left: 50, opacity: 0.3, pointerEvents: "none" }}>
          {[0,1,2,3].map(r => <div key={r} style={{ display: "flex", gap: 16, marginBottom: 16 }}>{[0,1,2,3,4].map(c => <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: "#FD853A" }} />)}</div>)}
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", flexWrap: "wrap" }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Let&apos;s Talk</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
              Have a project?<br /><span style={{ color: "#FD853A" }}>Let&apos;s talk.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "#6B7280", lineHeight: 1.75, maxWidth: 480, margin: "0 0 12px" }}>
              Whether you need a full product build, a design overhaul, or just want to explore an idea — I&apos;m all ears.
            </p>
          </div>

          {/* Right — info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            {INFO_CARDS.map((card) => (
              <div key={card.label} style={{ background: "#F9FAFB", border: "1px solid #F3F4F6", borderRadius: 20, padding: "18px 24px", display: "flex", alignItems: "flex-start", gap: 16, minWidth: 280 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(253,133,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{card.icon}</div>
                <div>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 3px" }}>{card.label}</p>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 600, color: "#111827", margin: "0 0 3px" }}>{card.value}</p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#9CA3AF", margin: 0 }}>{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form (reuse existing component) ──────────────── */}
      <Contact />

      <Footer />
    </main>
  );
}
