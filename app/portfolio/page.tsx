import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio – Amit Kumar | WordPress & Web Development Projects",
  description:
    "Browse 12+ live websites built by Amit Kumar — WordPress development, e-commerce stores, and custom web design for clients in India, Canada, USA, and UAE.",
  keywords: [
    "Amit Kumar Portfolio",
    "WordPress Projects",
    "Web Development Portfolio India",
    "E-Commerce Portfolio",
    "Freelance Developer Work",
    "Live Websites Amit Kumar",
  ],
  alternates: { canonical: "https://amitkumar.dev/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden", padding: "clamp(60px,9vw,110px) clamp(24px,6vw,96px) clamp(40px,6vw,80px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 30, left: 50, opacity: 0.3, pointerEvents: "none" }}>
          {[0,1,2,3].map(r => (
            <div key={r} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              {[0,1,2,3,4].map(c => <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: "#FD853A" }} />)}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>My Work</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 20px" }}>
              Live projects that<br /><span style={{ color: "#FD853A" }}>speak for themselves</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, margin: "0 0 36px" }}>
              12+ live websites delivered for clients across India, Canada, USA, and the UAE — WordPress, e-commerce, and custom web design.
            </p>
            <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "13px 30px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flexShrink: 0 }}>
            {[
              { num: "12+", label: "Live websites",    color: "#FD853A" },
              { num: "40+", label: "Total delivered",  color: "#6366F1" },
              { num: "5+",  label: "Years experience", color: "#10B981" },
              { num: "3",   label: "Countries served", color: "#F59E0B" },
            ].map(s => (
              <div key={s.label} style={{ background: "var(--bg-card-alt)", borderRadius: 20, padding: "22px 24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: s.color, margin: "0 0 6px", letterSpacing: "-0.02em" }}>{s.num}</p>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid (client) ───────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(16px,3vw,40px) clamp(24px,6vw,96px) clamp(48px,6vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <PortfolioGrid />
        </div>
      </section>

    </main>
  );
}
