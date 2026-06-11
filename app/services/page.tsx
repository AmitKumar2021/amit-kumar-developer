import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services – Amit Kumar | WordPress, PHP, SEO & Web Development",
  description:
    "Hire Amit Kumar for professional web development services: WordPress development, PHP custom solutions, SEO optimisation, API integration, e-commerce stores, and CMS setup. Based in New Delhi, India.",
  keywords: [
    "WordPress Development Services",
    "PHP Development India",
    "SEO Services New Delhi",
    "API Integration Developer",
    "E-Commerce Development",
    "CMS Development India",
    "Freelance Web Developer India",
    "Amit Kumar Services",
  ],
  alternates: { canonical: "https://amitkumar.dev/services" },
};

const SERVICES = [
  {
    icon: "🌐",
    title: "WordPress Development",
    price: "From ₹15,000",
    desc: "Custom WordPress websites built from scratch or redesigned — fast, secure, mobile-responsive, and easy for you to manage.",
    features: ["Custom Theme Development", "Plugin Customisation", "WooCommerce Integration", "Speed Optimisation", "Theme Conflict Fixes"],
    color: "#FD853A",
  },
  {
    icon: "🔧",
    title: "PHP & Custom Web Development",
    price: "From ₹25,000",
    desc: "Bespoke PHP applications and dynamic websites when off-the-shelf CMSs can't meet your requirements.",
    features: ["Custom PHP Applications", "MySQL Database Design", "Dynamic Forms & Portals", "Admin Dashboards", "Legacy System Updates"],
    color: "#6366F1",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Solutions",
    price: "From ₹20,000",
    desc: "High-converting online stores on WooCommerce, Shopify, or Wix — with payment gateways and inventory management.",
    features: ["WooCommerce / Shopify", "Payment Gateway Integration", "Product Catalogue Setup", "Order Management", "Mobile-Optimised Checkout"],
    color: "#10B981",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    price: "From ₹8,000/mo",
    desc: "Improve your search rankings with technical SEO, on-page content optimisation, and page-speed improvements that Google rewards.",
    features: ["Technical SEO Audit", "On-Page Optimisation", "Schema Markup", "Site Speed (Core Web Vitals)", "Google Analytics Setup"],
    color: "#EC4899",
  },
  {
    icon: "🔌",
    title: "API Integration",
    price: "From ₹12,000",
    desc: "Connect your website to third-party services — payment APIs, CRMs, social feeds, mapping, SMS gateways, and more.",
    features: ["REST API Integration", "Payment APIs (Razorpay, Stripe)", "SMS / Email APIs", "Social Media APIs", "Custom Webhook Setup"],
    color: "#F59E0B",
  },
  {
    icon: "🗂️",
    title: "CMS & Website Management",
    price: "From ₹5,000/mo",
    desc: "Ongoing website maintenance, content updates, security patches, and backups — so you never have to worry about downtime.",
    features: ["Regular Updates & Backups", "Security Monitoring", "Content Management", "Hosting & Domain Setup (cPanel/VPS)", "Performance Reports"],
    color: "#8B5CF6",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery Call",   desc: "We discuss your goals, timeline, and budget. No jargon — just a clear conversation about what you need." },
  { step: "02", title: "Proposal & Quote", desc: "You receive a written scope, timeline, and fixed price. No hidden fees or surprise invoices." },
  { step: "03", title: "Design & Review",  desc: "I build a prototype or mockup for your approval before any development work begins." },
  { step: "04", title: "Build & Test",     desc: "Clean, well-structured code developed in stages. Full cross-browser and mobile testing included." },
  { step: "05", title: "Launch & Support", desc: "Smooth go-live with DNS setup, final QA, and 30-day post-launch support included in every project." },
];

const FAQS = [
  { q: "How long does a typical WordPress project take?", a: "A standard 5–8 page WordPress website takes 2–4 weeks depending on complexity, content readiness, and feedback turnaround. E-commerce projects typically take 4–6 weeks." },
  { q: "Do you work with international clients?", a: "Yes — I have delivered projects for clients in India, Canada, USA, and the UAE. I work fully remote and am comfortable with time-zone differences." },
  { q: "Can you take over an existing website?", a: "Absolutely. I regularly take over maintenance of existing WordPress sites, fixing bugs, improving performance, or adding new features." },
  { q: "What information do I need to provide to get started?", a: "A brief description of what you need, your target audience, any websites you like the look of, and your approximate budget. I'll take it from there." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. I offer monthly maintenance packages that include updates, security patches, backups, and up to 2 hours of content changes per month." },
  { q: "Are your prices fixed or hourly?", a: "I prefer fixed-price projects for transparency — you always know what you'll pay. For ongoing maintenance or ad-hoc work I charge an hourly rate." },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden", padding: "clamp(60px,9vw,110px) clamp(24px,6vw,96px) clamp(40px,6vw,80px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 30, left: 60, opacity: 0.3, pointerEvents: "none" }}>
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
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>What I Offer</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 20px" }}>
              Web development<br />
              services built for<br />
              <span style={{ color: "#FD853A" }}>real results</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, margin: "0 0 36px" }}>
              From a five-page WordPress site to a fully integrated PHP application — I cover the full front-end spectrum so you don&apos;t need to manage multiple contractors.
            </p>
            <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "13px 30px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get a free quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flexShrink: 0 }}>
            {[
              { num: "6",    label: "Core services",      color: "#FD853A" },
              { num: "40+",  label: "Projects completed", color: "#6366F1" },
              { num: "5+",   label: "Years experience",   color: "#10B981" },
              { num: "24h",  label: "Response time",      color: "#F59E0B" },
            ].map(s => (
              <div key={s.label} style={{ background: "var(--bg-card-alt)", borderRadius: 20, padding: "22px 24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: s.color, margin: "0 0 6px", letterSpacing: "-0.02em" }}>{s.num}</p>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(40px,5vw,72px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>All Services</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>What I can do for you</h2>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.3vw,17px)", color: "var(--text-muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>Every service is delivered with clean code, clear communication, and post-launch support.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {SERVICES.map(svc => (
              <div key={svc.title} style={{ background: "var(--bg-card)", borderRadius: 24, padding: "clamp(24px,2.5vw,36px)", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: svc.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{svc.icon}</div>
                  <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: svc.color, background: svc.color + "15", padding: "4px 14px", borderRadius: 40 }}>{svc.price}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(17px,1.8vw,21px)", fontWeight: 700, color: "var(--text-900)", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{svc.title}</h3>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "var(--text-700)", lineHeight: 1.7, margin: "0 0 20px", flex: 1 }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {svc.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: svc.color + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><polyline points="2 6 5 9 10 3" stroke={svc.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "var(--text-700)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, fontWeight: 600, color: svc.color, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Get started
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section style={{ background: "#171717", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>How It Works</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "#FCFCFD", letterSpacing: "-0.02em", margin: "0 0 14px" }}>My process</h2>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.3vw,17px)", color: "rgba(252,252,253,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Simple, transparent, and client-friendly from start to launch.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {PROCESS.map((step) => (
              <div key={step.step} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "28px 24px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 48, fontWeight: 800, color: "rgba(253,133,58,0.18)", lineHeight: 1, display: "block", marginBottom: 16, letterSpacing: "-0.04em" }}>{step.step}</span>
                <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(15px,1.5vw,18px)", fontWeight: 700, color: "#FCFCFD", margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.45)", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>FAQ</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.02em", margin: 0 }}>Common questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "var(--bg-card)", borderRadius: 18, padding: "24px 28px", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(15px,1.5vw,17px)", fontWeight: 700, color: "var(--text-900)", margin: "0 0 10px", lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#FD853A", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.1 }}>
            Ready to start your project?
          </h2>
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px" }}>
            Get a free, no-obligation quote within 24 hours. Tell me what you need and I&apos;ll handle the rest.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#fff", color: "#FD853A", textDecoration: "none", borderRadius: 60, padding: "14px 32px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get free quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/portfolio" style={{ background: "transparent", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "14px 32px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid rgba(255,255,255,0.5)" }}>
              See my work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
