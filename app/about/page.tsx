import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Amit Kumar | Full-Stack & Shopify Developer New Delhi",
  description:
    "Learn about Amit Kumar, a Full-Stack & Shopify Developer based in New Delhi, India with 5+ years of experience in WordPress, Shopify, PHP, HTML5, CSS, SEO, and API integration. Available for freelance projects.",
  keywords: [
    "Amit Kumar About",
    "Full-Stack Developer New Delhi",
    "Shopify Developer India",
    "WordPress Developer India",
    "PHP Developer Freelance",
    "SEO Expert India",
  ],
  alternates: { canonical: "https://amitkumar.dev/about" },
};

const SKILLS = [
  { cat: "CMS & Platforms",   items: ["WordPress", "Shopify", "Wix", "Squarespace", "Webflow"] },
  { cat: "Languages",         items: ["HTML5", "CSS3", "PHP", "JavaScript", "AngularJS", "MySQL"] },
  { cat: "Design & Tools",    items: ["Figma", "Responsive Design", "UI/UX", "Canva"] },
  { cat: "Server & DevOps",   items: ["cPanel", "VPS Hosting", "Domain Setup", "Performance"] },
  { cat: "API & Integration", items: ["REST APIs", "Third-party APIs", "Payment Gateways", "Plugin Dev"] },
  { cat: "SEO & Marketing",   items: ["On-Page SEO", "Technical SEO", "Google Analytics", "Site Speed"] },
];

const EXPERIENCE = [
  {
    role: "Senior Full-Stack Developer",
    company: "AdsRole Private Limited",
    location: "Noida, India",
    period: "Feb 2024 – Present",
    desc: "Lead full-stack development across multiple client projects, including WordPress, Shopify, and PHP-based solutions.",
    points: [
      "Developed custom WordPress and Shopify stores for clients in India, UAE, and the UK",
      "Implemented PHP/MySQL back-end logic and REST API integrations",
      "Optimised websites for SEO achieving measurable ranking improvements",
      "Ensured cross-browser compatibility and WCAG accessibility standards",
      "Mentored junior developers on programming techniques and modern tooling",
    ],
    tags: ["WordPress", "Shopify", "PHP", "HTML5", "CSS3", "JavaScript", "SEO"],
    color: "#FD853A",
  },
  {
    role: "Front-End Developer",
    company: "Payexel Solutions Pvt. Ltd",
    location: "Noida, India",
    period: "Oct 2023 – Feb 2024",
    desc: "Delivered high-quality front-end code and API integrations for fintech and corporate clients.",
    points: [
      "Built and deployed client websites with clean, production-ready code",
      "Implemented REST API integrations for payment and data services",
      "Optimised sites for SEO and cross-browser compatibility",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "REST APIs", "SEO"],
    color: "#6366F1",
  },
  {
    role: "WordPress Developer",
    company: "AdsRole Private Limited",
    location: "Noida, India",
    period: "Jun 2022 – Oct 2023",
    desc: "Built and maintained WordPress and e-commerce projects for domestic and international clients.",
    points: [
      "Designed and built custom WordPress themes leveraging JS, HTML & CSS",
      "Developed Shopify stores and customised themes for e-commerce clients",
      "Optimised loading speed via caching, image compression & CSS/JS minification",
      "Resolved theme conflicts and plugin compatibility issues",
    ],
    tags: ["WordPress", "Shopify", "JavaScript", "CSS3", "E-Commerce"],
    color: "#10B981",
  },
  {
    role: "Junior Web Developer",
    company: "AsiaTech Inc.",
    location: "Noida, India",
    period: "Mar 2021 – Jun 2022",
    desc: "Started professional career building websites with PHP, MySQL, and WordPress.",
    points: [
      "Implemented features using PHP, MySQL, and WordPress",
      "Ensured cross-browser compatibility across all platforms",
    ],
    tags: ["PHP", "MySQL", "WordPress", "HTML5", "CSS3"],
    color: "#F59E0B",
  },
];

const VALUES = [
  { icon: "🎯", title: "Client-First Mindset", desc: "I listen before I build. Every project starts with understanding your goals, audience, and constraints — not jumping straight to code." },
  { icon: "⚡", title: "Performance Obsessed", desc: "Fast websites rank higher and convert better. I optimise every project for speed through caching, compression, and clean code." },
  { icon: "🔍", title: "SEO Built-In", desc: "SEO is not an afterthought. On-page optimisation, schema markup, and technical SEO are baked into every project from day one." },
  { icon: "📱", title: "Mobile-First Design", desc: "Over 60% of web traffic is mobile. I design and develop mobile-first, then scale up — never the other way around." },
  { icon: "🤝", title: "Clear Communication", desc: "Regular updates, plain-English explanations, and zero jargon. You always know exactly where your project stands." },
  { icon: "🛡️", title: "Long-Term Support", desc: "I don't disappear after launch. I offer ongoing maintenance, updates, and backups so your site stays healthy over time." },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden", padding: "clamp(60px,9vw,110px) clamp(24px,6vw,96px) clamp(40px,6vw,80px)" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.08) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 20, left: 40, opacity: 0.25, pointerEvents: "none" }}>
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

              <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 20px" }}>
                Full-Stack &amp; Shopify<br />
                <span style={{ color: "#FD853A" }}>Developer</span>
              </h1>

              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 520, margin: "0 0 14px" }}>
                I&apos;m <strong style={{ color: "var(--text-900)" }}>Amit Kumar</strong> — a Full-Stack Developer based in <strong style={{ color: "var(--text-900)" }}>New Delhi, India</strong>. Over the past 5+ years I have delivered 40+ projects across WordPress, Shopify, PHP, SEO, API integrations, and e-commerce for clients in India, Canada, the UAE, and the USA.
              </p>
              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 520, margin: "0 0 36px" }}>
                Whether you need a brand-new Shopify store, a custom WordPress site, or an API-connected web application — I handle it end-to-end, communicate clearly, and deliver on time.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "13px 30px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Hire me
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/resume" style={{ background: "transparent", color: "var(--text-900)", textDecoration: "none", borderRadius: 60, padding: "13px 30px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid var(--border-color)" }}>
                  View Resume
                </Link>
              </div>
            </div>

            {/* Right — stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, flexShrink: 0 }}>
              {[
                { value: "5+",  label: "Years of experience",  color: "#FD853A" },
                { value: "40+", label: "Projects delivered",   color: "#6366F1" },
                { value: "30+", label: "Happy clients",        color: "#10B981" },
                { value: "3",   label: "Countries served",     color: "#F59E0B" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--bg-card-alt)", borderRadius: 20, padding: "20px 28px", display: "flex", alignItems: "center", gap: 20, border: "1px solid var(--border-color)", minWidth: 240 }}>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(30px,3.5vw,44px)", fontWeight: 800, color: s.color, margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "var(--text-muted)", margin: 0, lineHeight: 1.3 }}>{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── What I Do ────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(40px,5vw,72px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Expertise</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>What I specialise in</h2>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.3vw,17px)", color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>From Shopify builds to custom PHP applications — here are the technologies I use every day.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {SKILLS.map(({ cat, items }) => (
              <div key={cat} style={{ background: "var(--bg-card)", borderRadius: 20, padding: "28px 28px", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 16px" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map(s => (
                    <span key={s} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, fontWeight: 500, background: "var(--bg-card-alt)", color: "var(--text-700)", padding: "6px 14px", borderRadius: 40, border: "1px solid var(--border-color)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <section style={{ background: "#171717", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Work History</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>Professional Experience</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EXPERIENCE.map((job, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "clamp(22px,3vw,36px)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: "#FCFCFD", margin: "0 0 4px" }}>{job.role}</h3>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.45)", margin: 0 }}>{job.company} · {job.location}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: job.color, background: job.color + "20", padding: "5px 14px", borderRadius: 40, flexShrink: 0 }}>{job.period}</span>
                </div>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "rgba(252,252,253,0.55)", lineHeight: 1.7, margin: "0 0 14px" }}>{job.desc}</p>
                <ul style={{ padding: 0, margin: "0 0 16px", listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                  {job.points.map(pt => (
                    <li key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: job.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                      <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.65)", lineHeight: 1.6 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {job.tags.map(t => <span key={t} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, background: "rgba(255,255,255,0.07)", color: "rgba(252,252,253,0.6)", padding: "4px 12px", borderRadius: 40 }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Why Hire Me</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>How I work</h2>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.3vw,17px)", color: "var(--text-muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Principles that guide every project I take on.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: "var(--bg-card)", borderRadius: 20, padding: "28px 28px", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(253,133,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 17, fontWeight: 700, color: "var(--text-900)", margin: "0 0 7px" }}>{v.title}</h3>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#FD853A", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.1 }}>
            Ready to build something great?
          </h2>
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 36px" }}>
            I&apos;m currently open for freelance projects. Let&apos;s talk about how I can help your business grow online.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#fff", color: "#FD853A", textDecoration: "none", borderRadius: 60, padding: "14px 32px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/portfolio" style={{ background: "transparent", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "14px 32px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid rgba(255,255,255,0.5)" }}>
              View my work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
