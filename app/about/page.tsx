import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About – Amit Kumar",
  description: "Learn about Amit Kumar, a Full Stack Developer and UI/UX Designer with 5+ years of experience.",
};

const SKILLS = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  "Backend":  ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
  "Design":   ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "Brand Identity", "Wireframing"],
  "Tools":    ["Git", "Docker", "AWS", "Vercel", "Sanity CMS", "Shopify"],
};

const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer", company: "TechNova Solutions", period: "2022 – Present",
    desc: "Lead development of SaaS products serving 50,000+ users. Architected micro-frontend system reducing deployment time by 70%.",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    role: "UI/UX Designer & Frontend Dev", company: "Pixel Studio", period: "2020 – 2022",
    desc: "Designed and built 30+ client websites across e-commerce, healthcare, and fintech. Introduced design system cutting delivery time by 40%.",
    tags: ["Figma", "Next.js", "Tailwind"],
  },
  {
    role: "Frontend Developer", company: "Startup Hub India", period: "2019 – 2020",
    desc: "Built MVPs for 8 early-stage startups in 6 months. Focused on performance and mobile-first responsive design.",
    tags: ["React", "TypeScript", "Firebase"],
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navbar />

      {/* ── Hero — WHITE ──────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", padding: "clamp(52px,8vw,100px) clamp(24px,6vw,96px)" }}>
        {/* Decorative orange blob */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Dot grid */}
        <div style={{ position: "absolute", bottom: 20, left: 40, opacity: 0.4, pointerEvents: "none" }}>
          {[0,1,2,3].map(r => (
            <div key={r} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              {[0,1,2,3,4].map(c => <div key={c} style={{ width: 4, height: 4, borderRadius: "50%", background: "#FD853A" }} />)}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", flexWrap: "wrap" }}>

            {/* Left */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
                <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>About Me</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
                I design &amp; build<br />
                <span style={{ color: "#FD853A" }}>digital products</span><br />
                people love.
              </h1>

              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "#6B7280", lineHeight: 1.75, maxWidth: 500, margin: "0 0 36px" }}>
                I&apos;m Amit Kumar — Full Stack Developer &amp; UI/UX Designer based in India. 5+ years building web and mobile products for startups and enterprises.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "12px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Hire me
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/portfolio" style={{ background: "transparent", color: "#111827", textDecoration: "none", borderRadius: 60, padding: "12px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid #E5E7EB" }}>
                  View work
                </Link>
              </div>
            </div>

            {/* Right — stats + info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
              {[
                { value: "5+",  label: "Years of experience", color: "#FD853A" },
                { value: "40+", label: "Projects delivered",  color: "#6366F1" },
                { value: "30+", label: "Happy clients",       color: "#10B981" },
                { value: "3",   label: "Countries served",    color: "#F59E0B" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#F9FAFB", borderRadius: 20, padding: "20px 28px", display: "flex", alignItems: "center", gap: 20, border: "1px solid #F3F4F6", minWidth: 240 }}>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: s.color, margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "#6B7280", margin: 0, lineHeight: 1.3 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pb-2">
        <div style={{ background: "#171717", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Stack</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>What I work with</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "24px 26px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 14px" }}>{cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {items.map(s => <span key={s} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 500, background: "rgba(255,255,255,0.07)", color: "rgba(252,252,253,0.7)", padding: "5px 12px", borderRadius: 40 }}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-4">
        <div style={{ background: "#FFFFFF", border: "1px solid #F3F4F6", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Work History</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>Experience</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {EXPERIENCE.map((job, i) => (
                <div key={i} style={{ background: "#F9FAFB", borderRadius: 20, padding: "clamp(20px,2.5vw,32px)", border: "1px solid #F3F4F6", display: "flex", gap: "clamp(16px,4vw,40px)", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: "#FD853A", background: "rgba(253,133,58,0.1)", padding: "4px 14px", borderRadius: 40, height: "fit-content", flexShrink: 0, whiteSpace: "nowrap" }}>{job.period}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 700, color: "#111827", margin: "0 0 3px" }}>{job.role}</h3>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#9CA3AF", margin: "0 0 10px", fontWeight: 500 }}>{job.company}</p>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "#4B5563", lineHeight: 1.7, margin: "0 0 14px" }}>{job.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {job.tags.map(t => <span key={t} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, background: "#FFFFFF", color: "#374151", padding: "3px 11px", borderRadius: 40, border: "1px solid #E5E7EB" }}>{t}</span>)}
                    </div>
                  </div>
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
