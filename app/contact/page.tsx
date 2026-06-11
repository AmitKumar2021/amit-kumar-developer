import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact – Amit Kumar | Hire a Freelance Full-Stack Developer",
  description:
    "Get in touch with Amit Kumar — Full-Stack & Shopify Developer based in New Delhi, India. Available for WordPress development, PHP projects, SEO, and API integration. Free quote within 24 hours.",
  keywords: [
    "Contact Amit Kumar",
    "Hire WordPress Developer India",
    "Hire Full-Stack Developer New Delhi",
    "Freelance PHP Developer Contact",
    "Web Developer Quote India",
  ],
  alternates: { canonical: "https://amitkumar.dev/contact" },
};

const INFO_CARDS = [
  {
    icon: "📧",
    label: "Email",
    value: "amit100894@gmail.com",
    sub: "Usually responds within 12 hours",
    href: "mailto:amit100894@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+91-8960749497",
    sub: "Mon – Sat, 9 am – 7 pm IST",
    href: "tel:+918960749497",
  },
  {
    icon: "📍",
    label: "Location",
    value: "New Delhi, India",
    sub: "Available for remote work worldwide",
    href: null,
  },
  {
    icon: "✅",
    label: "Availability",
    value: "Open to Freelance Projects",
    sub: "New projects accepted from today",
    href: null,
  },
];

const SERVICES_OFFERED = [
  { icon: "🌐", label: "WordPress Development" },
  { icon: "🔧", label: "PHP & Custom Dev" },
  { icon: "🛍️", label: "E-Commerce Stores" },
  { icon: "🔍", label: "SEO Optimisation" },
  { icon: "🔌", label: "API Integration" },
  { icon: "🗂️", label: "Website Maintenance" },
];

export default function ContactPage() {
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
          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Let&apos;s Talk</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 20px" }}>
              Have a project?<br /><span style={{ color: "#FD853A" }}>Let&apos;s build it.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 500, margin: "0 0 20px" }}>
              Whether you need a brand-new WordPress site, an SEO overhaul, a custom PHP app, or just want to explore an idea — send me a message and I&apos;ll respond within 24 hours.
            </p>
            {/* Services quick list */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {SERVICES_OFFERED.map(s => (
                <span key={s.label} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, fontWeight: 500, background: "var(--bg-card-alt)", color: "var(--text-700)", padding: "6px 14px", borderRadius: 40, border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14 }}>{s.icon}</span> {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            {INFO_CARDS.map((card) => {
              const inner = (
                <div key={card.label} style={{ background: "var(--bg-card)", border: "1.5px solid var(--border-color)", borderRadius: 20, padding: "18px 24px", display: "flex", alignItems: "flex-start", gap: 16, minWidth: 290, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transition: "border-color 0.2s, box-shadow 0.2s" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: "rgba(253,133,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{card.icon}</div>
                  <div>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 3px" }}>{card.label}</p>
                    <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 700, color: "var(--text-900)", margin: "0 0 3px" }}>{card.value}</p>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{card.sub}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} style={{ textDecoration: "none" }}>
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <Contact />

      {/* ── Why Work With Me ─────────────────────────────────────── */}
      <section style={{ background: "#171717", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Why choose me</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>What you get when you hire me</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { icon: "⚡", title: "Fast turnaround",       desc: "Most projects delivered within 2–4 weeks. Rush delivery available." },
              { icon: "💬", title: "Clear communication",   desc: "Regular updates in plain English. No jargon, no radio silence." },
              { icon: "📱", title: "Mobile-first builds",   desc: "Every site is responsive and tested on real mobile devices." },
              { icon: "🔍", title: "SEO included",          desc: "On-page SEO, proper heading structure, and fast load times on every build." },
              { icon: "🛡️", title: "Post-launch support",   desc: "30 days of free support after every project goes live." },
              { icon: "💰", title: "Transparent pricing",   desc: "Fixed quotes upfront — no hidden costs or surprise invoices." },
            ].map(item => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "24px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(253,133,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 16, fontWeight: 700, color: "#FCFCFD", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.5)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
