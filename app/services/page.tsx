import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services – Amit Kumar",
  description: "Full Stack Development, UI/UX Design, Mobile Apps, E-Commerce, CMS, and Branding services.",
};

const SERVICES = [
  { icon: "🌐", title: "Web Development",       price: "From ₹40,000", desc: "End-to-end web applications with React, Next.js, and Node.js. Fast, secure, and scalable.", features: ["React / Next.js", "REST & GraphQL APIs", "PostgreSQL / MongoDB", "Cloud Deployment", "Performance Optimisation"], color: "#FD853A" },
  { icon: "🎨", title: "UI/UX Design",           price: "From ₹25,000", desc: "User-centred design that converts — research, wireframes, Figma prototypes, and handoff.", features: ["User Research", "Wireframing", "High-fidelity Prototypes", "Design Systems", "Usability Testing"], color: "#6366F1" },
  { icon: "📱", title: "Mobile App Development", price: "From ₹60,000", desc: "Cross-platform iOS and Android apps with React Native. Native performance, single codebase.", features: ["React Native", "iOS & Android", "Push Notifications", "Offline Mode", "App Store Publishing"], color: "#10B981" },
  { icon: "🛍️", title: "E-Commerce Solutions",  price: "From ₹45,000", desc: "High-converting stores on Shopify, WooCommerce, or custom-built with payment integration.", features: ["Shopify / WooCommerce", "Payment Gateways", "Inventory System", "Order Management", "SEO Optimised"], color: "#EC4899" },
  { icon: "🗂️", title: "CMS Development",       price: "From ₹30,000", desc: "Custom content management so your team can update the site without touching code.", features: ["Sanity CMS", "Contentful", "Custom Admin Panels", "Content Modelling", "Editor Training"], color: "#F59E0B" },
  { icon: "✏️", title: "Branding & Identity",    price: "From ₹20,000", desc: "Logo, typography, colour systems that make your brand instantly recognisable.", features: ["Logo Design", "Brand Guidelines", "Colour & Typography", "Marketing Assets", "Social Media Kit"], color: "#8B5CF6" },
];

const PROCESS = [
  { step: "01", title: "Discovery",  desc: "Deep dive into your goals, audience, and competitors. No assumptions — just research." },
  { step: "02", title: "Strategy",   desc: "Clear scope, timeline, and technical plan agreed before a single line of code is written." },
  { step: "03", title: "Design",     desc: "Wireframes first, then high-fidelity mockups. You review and approve before development." },
  { step: "04", title: "Build",      desc: "Clean, well-documented code delivered in sprints with weekly check-ins." },
  { step: "05", title: "Launch",     desc: "Thorough QA, performance testing, smooth handoff, and 30 days post-launch support." },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navbar />

      {/* ── Hero — WHITE ──────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", padding: "clamp(52px,8vw,100px) clamp(24px,6vw,96px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 30, left: 60, opacity: 0.35, pointerEvents: "none" }}>
          {[0,1,2,3].map(r => <div key={r} style={{ display: "flex", gap: 16, marginBottom: 16 }}>{[0,1,2,3,4].map(c => <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: "#FD853A" }} />)}</div>)}
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>What I Offer</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
              Services built<br />for <span style={{ color: "#FD853A" }}>real results</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "#6B7280", lineHeight: 1.75, maxWidth: 480, margin: "0 0 36px" }}>
              From pixel-perfect UI to production-ready backends — I cover the full stack so you don&apos;t have to manage three agencies.
            </p>
            <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "12px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          {/* Right — service count cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flexShrink: 0 }}>
            {[
              { num: "6",    label: "Services offered",   color: "#FD853A" },
              { num: "40+",  label: "Projects completed", color: "#6366F1" },
              { num: "5+",   label: "Years experience",   color: "#10B981" },
              { num: "24h",  label: "Response time",      color: "#F59E0B" },
            ].map(s => (
              <div key={s.label} style={{ background: "#F9FAFB", borderRadius: 20, padding: "22px 24px", border: "1px solid #F3F4F6", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 800, color: s.color, margin: "0 0 6px", letterSpacing: "-0.02em" }}>{s.num}</p>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#9CA3AF", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pb-2">
        <div style={{ background: "#F9FAFB", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)", border: "1px solid #F3F4F6" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>All Services</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>What I can do for you</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {SERVICES.map(svc => (
                <div key={svc.title} style={{ background: "#FFFFFF", borderRadius: 24, padding: "clamp(24px,2.5vw,36px)", border: "1px solid #F3F4F6", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: svc.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{svc.icon}</div>
                    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: svc.color, background: svc.color + "15", padding: "4px 12px", borderRadius: 40 }}>{svc.price}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(17px,1.8vw,22px)", fontWeight: 700, color: "#111827", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{svc.title}</h3>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "#4B5563", lineHeight: 1.7, margin: "0 0 20px", flex: 1 }}>{svc.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                    {svc.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 16, height: 16, borderRadius: "50%", background: svc.color + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><polyline points="2 6 5 9 10 3" stroke={svc.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#374151" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-4">
        <div style={{ background: "#171717", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>How It Works</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>My process</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
              {PROCESS.map((step, i) => (
                <div key={step.step} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "28px 24px", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
                  <span style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 48, fontWeight: 800, color: "rgba(253,133,58,0.15)", lineHeight: 1, display: "block", marginBottom: 16, letterSpacing: "-0.04em" }}>{step.step}</span>
                  <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(15px,1.5vw,18px)", fontWeight: 700, color: "#FCFCFD", margin: "0 0 8px" }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.45)", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
