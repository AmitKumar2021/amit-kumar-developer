import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Resume – Amit Kumar",
  description: "Professional resume of Amit Kumar — Full Stack Developer & UI/UX Designer.",
};

const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer", company: "TechNova Solutions", location: "New Delhi, India", period: "Jan 2022 – Present",
    desc: "Lead engineer on a SaaS analytics platform serving 50,000+ users. Rebuilt frontend from CRA to Next.js, cutting load times by 65%.",
    points: ["Architected micro-frontend system reducing deployment time by 70%", "Reduced API response time from 800ms to 120ms via Redis caching", "Introduced CI/CD pipeline with GitHub Actions and AWS CodeDeploy"],
    tags: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Redis"],
  },
  {
    role: "UI/UX Designer & Frontend Developer", company: "Pixel Studio", location: "Remote", period: "Mar 2020 – Dec 2021",
    desc: "Designed and developed 30+ client projects across e-commerce, healthcare, and fintech. Single point of contact from discovery to handoff.",
    points: ["Introduced a shared design system used across 12 active projects", "Increased client average conversion rate by 34% through UX audits"],
    tags: ["Figma", "Next.js", "Tailwind CSS", "Shopify", "Framer Motion"],
  },
  {
    role: "Frontend Developer", company: "Startup Hub India", location: "Bengaluru, India", period: "Aug 2019 – Feb 2020",
    desc: "Built MVPs for 8 early-stage startups in 6 months. Focused on rapid prototyping and mobile-first design.",
    points: ["Launched 8 products in 6 months — 3 went on to raise seed funding", "Improved LCP by 50% through lazy loading and image optimisation"],
    tags: ["React", "TypeScript", "Firebase", "Chakra UI"],
  },
];

const SKILLS_CATS = [
  { name: "Frontend",  skills: [{ n: "React / Next.js", p: 95 }, { n: "TypeScript", p: 90 }, { n: "Tailwind CSS", p: 92 }, { n: "Framer Motion", p: 80 }] },
  { name: "Backend",   skills: [{ n: "Node.js / Express", p: 88 }, { n: "PostgreSQL", p: 82 }, { n: "MongoDB", p: 78 }, { n: "Redis", p: 72 }] },
  { name: "Design",    skills: [{ n: "Figma", p: 94 }, { n: "UI/UX Design", p: 90 }, { n: "Design Systems", p: 85 }, { n: "Prototyping", p: 88 }] },
  { name: "DevOps",    skills: [{ n: "AWS", p: 76 }, { n: "Docker", p: 72 }, { n: "CI/CD", p: 80 }, { n: "Vercel", p: 90 }] },
];

export default function ResumePage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navbar />

      {/* ── Hero — WHITE ──────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", position: "relative", overflow: "hidden", padding: "clamp(52px,8vw,100px) clamp(24px,6vw,96px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Resume</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 12px" }}>Amit Kumar</h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(16px,1.8vw,22px)", color: "#FD853A", fontWeight: 600, margin: "0 0 16px" }}>Full Stack Developer &amp; UI/UX Designer</p>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(13px,1.3vw,16px)", color: "#6B7280", lineHeight: 1.7, maxWidth: 440, margin: "0 0 32px" }}>
              5+ years building web and mobile products — from pixel-perfect UI to production-ready backends. Open to freelance and full-time.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/amit-kumar-resume.pdf" download style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "12px 26px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </a>
              <Link href="/contact" style={{ background: "transparent", color: "#111827", textDecoration: "none", borderRadius: 60, padding: "12px 26px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid #E5E7EB" }}>
                Hire me
              </Link>
            </div>
          </div>

          {/* Quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            {[
              { icon: "📧", label: "Email",    value: "amit@example.com" },
              { icon: "📍", label: "Location", value: "New Delhi, India" },
              { icon: "🌐", label: "Website",  value: "amitkumar.dev" },
              { icon: "✅", label: "Status",   value: "Open to work" },
            ].map(row => (
              <div key={row.label} style={{ background: "#F9FAFB", borderRadius: 16, padding: "14px 20px", display: "flex", alignItems: "center", gap: 14, border: "1px solid #F3F4F6", minWidth: 240 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{row.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9CA3AF", margin: "0 0 2px" }}>{row.label}</p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "#111827", margin: 0, fontWeight: 500 }}>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pb-2">
        <div style={{ background: "#F9FAFB", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)", border: "1px solid #F3F4F6" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 36 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Work History</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>Experience</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {EXPERIENCE.map((job, i) => (
                <div key={i} style={{ background: "#FFFFFF", borderRadius: 20, padding: "clamp(22px,2.5vw,36px)", border: "1px solid #E5E7EB" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: "#111827", margin: "0 0 3px" }}>{job.role}</h3>
                      <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#9CA3AF", margin: 0 }}>{job.company} · {job.location}</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: "#FD853A", background: "rgba(253,133,58,0.1)", padding: "4px 14px", borderRadius: 40, flexShrink: 0 }}>{job.period}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "#4B5563", lineHeight: 1.7, margin: "0 0 14px" }}>{job.desc}</p>
                  <ul style={{ padding: 0, margin: "0 0 16px", listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {job.points.map(pt => (
                      <li key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#FD853A", flexShrink: 0 }}>▸</span>
                        <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {job.tags.map(t => <span key={t} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, background: "#F3F4F6", color: "#374151", padding: "4px 12px", borderRadius: 40 }}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-4">
        <div style={{ background: "#171717", borderRadius: 50, padding: "clamp(40px,5vw,64px) clamp(28px,5vw,64px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 36 }}>
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Technical Skills</span>
              <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>Proficiency</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {SKILLS_CATS.map(cat => (
                <div key={cat.name}>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 16px" }}>{cat.name}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {cat.skills.map(sk => (
                      <div key={sk.n}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.7)" }}>{sk.n}</span>
                          <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "rgba(252,252,253,0.35)" }}>{sk.p}%</span>
                        </div>
                        <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 10 }}>
                          <div style={{ height: "100%", width: `${sk.p}%`, background: "linear-gradient(to right, #FD853A, #FEB273)", borderRadius: 10 }} />
                        </div>
                      </div>
                    ))}
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
