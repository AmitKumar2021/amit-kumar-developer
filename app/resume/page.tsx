import type { Metadata } from "next";
import Link from "next/link";

const SITE_HOVER_STYLE = `
  .resume-site-card { transition: border-color 0.2s, box-shadow 0.2s; }
  .resume-site-card:hover { border-color: #FD853A !important; box-shadow: 0 4px 16px rgba(253,133,58,0.12) !important; }
`;

export const metadata: Metadata = {
  title: "Resume – Amit Kumar | Full-Stack & Shopify Developer",
  description:
    "Professional resume of Amit Kumar — Full-Stack & Shopify Developer based in New Delhi, India. 5+ years experience in WordPress, PHP, HTML5, CSS, API integration, SEO, and e-commerce.",
  keywords: [
    "Amit Kumar Resume",
    "Full-Stack Developer Resume",
    "WordPress Developer CV",
    "PHP Developer Resume",
    "Hire Full-Stack Developer India",
  ],
  alternates: { canonical: "https://amitkumar.dev/resume" },
};

const EXPERIENCE = [
  {
    role: "Senior Full-Stack Developer",
    company: "AdsRole Private Limited",
    location: "Noida, India",
    period: "Feb 2024 – Present",
    desc: "Lead full-stack development for multiple client websites, driving technology evaluation, SEO best practices, and junior developer mentorship.",
    points: [
      "Evaluated new web technologies to improve existing projects",
      "Collaborated with designers to create visually appealing, user-friendly websites",
      "Implemented website features using PHP, MySQL, and modern web technologies",
      "Customised WordPress themes and plugins to meet diverse client needs",
      "Mentored junior developers on programming techniques and tooling",
      "Integrated third-party APIs into client websites for enhanced functionality",
      "Conducted regular website maintenance, updates, and backups",
      "Ensured cross-browser compatibility and accessibility standards",
      "Optimised websites for SEO, achieving measurable ranking improvements",
    ],
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "SEO", "API Integration"],
    color: "#FD853A",
  },
  {
    role: "Front-End Developer",
    company: "Payexel Solutions Pvt. Ltd",
    location: "Noida, India",
    period: "Oct 2023 – Feb 2024",
    desc: "Delivered clean, high-quality front-end code and API integrations for fintech and corporate clients.",
    points: [
      "Researched latest web applications to keep up with trends and technologies",
      "Performed REST API integrations for payment and data services",
      "Optimised websites for SEO and cross-browser compatibility",
      "Created file back-ups to local directory for recovery purposes",
      "Produced high-quality, clean code verified by testing after each upload",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "REST APIs", "SEO", "WordPress"],
    color: "#6366F1",
  },
  {
    role: "WordPress Developer",
    company: "AdsRole Private Limited",
    location: "Noida, India",
    period: "Jun 2022 – Oct 2023",
    desc: "Built and maintained custom WordPress solutions for e-commerce and corporate clients, focusing on performance, compatibility, and user experience.",
    points: [
      "Professional WordPress development using JavaScript, HTML, and CSS",
      "Designed and implemented new features for WordPress themes",
      "Maintained consistent style across platforms through skilled CSS changes",
      "Optimised website loading speed using caching, image compression, and CSS/JS minification",
      "Troubleshot WordPress installations, theme conflicts, and plugin compatibility",
      "Developed and deployed successful e-commerce strategies for clients",
      "Created high-performing, user-friendly interfaces for targeted needs",
    ],
    tags: ["WordPress", "JavaScript", "HTML5", "CSS3", "E-Commerce", "Performance"],
    color: "#10B981",
  },
  {
    role: "Junior Web Developer",
    company: "AsiaTech Inc.",
    location: "Noida, India",
    period: "Mar 2021 – Jun 2022",
    desc: "Started professional career implementing web features with PHP, MySQL, and WordPress under senior developer guidance.",
    points: [
      "Implemented website features using PHP, MySQL, and WordPress",
      "Developed websites with accessibility and cross-browser compatibility",
      "Stayed current with industry trends via conferences and workshops",
    ],
    tags: ["PHP", "MySQL", "WordPress", "HTML5", "CSS3"],
    color: "#F59E0B",
  },
];

const SKILLS_CATS = [
  { name: "CMS & Platforms",  skills: [{ n: "WordPress", p: 96 }, { n: "Shopify", p: 88 }, { n: "Wix / Squarespace", p: 85 }, { n: "Webflow", p: 82 }] },
  { name: "Languages",        skills: [{ n: "HTML5", p: 97 }, { n: "CSS3", p: 95 }, { n: "JavaScript", p: 85 }, { n: "PHP", p: 86 }, { n: "MySQL", p: 80 }, { n: "AngularJS", p: 72 }] },
  { name: "Design & Tools",   skills: [{ n: "Figma", p: 88 }, { n: "Responsive Design", p: 95 }, { n: "Canva", p: 80 }] },
  { name: "Server & SEO",     skills: [{ n: "cPanel / VPS", p: 85 }, { n: "On-Page SEO", p: 90 }, { n: "Technical SEO", p: 85 }, { n: "API Integration", p: 88 }] },
];

const EDUCATION = [
  {
    degree: "B. Tech + M. Tech – Integrated (CSE)",
    institution: "Invertis University, Bareilly (U.P.)",
    period: "Aug 2015 – May 2020",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "Hazi Taufio Ali Mahavidyalaya, Kannauj",
    period: "Jul 2012 – May 2015",
    icon: "📐",
  },
  {
    degree: "Intermediate (U.P. Board)",
    institution: "Shri Chheda Lal Inter College, Kirayan (Kannauj)",
    period: "May 2012",
    icon: "📗",
  },
  {
    degree: "High School (CBSE)",
    institution: "Subhash Academy Chhibramau, Kannauj",
    period: "May 2010",
    icon: "📘",
  },
];

const PORTFOLIO_SITES = [
  { url: "https://lingonerds.org/",           label: "Lingo Nerds" },
  { url: "https://dluxworld.com/",             label: "Dlux World" },
  { url: "http://mieducate.org",               label: "Mi Educate" },
  { url: "https://hellolearnerz.com/",         label: "Hello Learnerz" },
  { url: "https://merzatta.com",               label: "Merzatta" },
  { url: "https://khelokhhudo.com/",           label: "Khelo Khhudo" },
  { url: "https://shankarmanpower.com/",       label: "Shankar Manpower" },
  { url: "https://theperfectleasing.com/",     label: "The Perfect Leasing" },
  { url: "https://payexelsolutions.com/",      label: "Payexel Solutions" },
  { url: "https://sanjeevmalik.com/",          label: "Sanjeev Malik" },
  { url: "https://riverdaledirtbusters.com/",  label: "Riverdale Dirt Busters" },
  { url: "https://affordablecarrental.ca",     label: "Affordable Car Rental" },
  { url: "https://markhortransport.com/",      label: "Markhor Transport" },
  { url: "https://eurobild.ae/",               label: "Euro Bild" },
];

export default function ResumePage() {
  return (
    <main className="flex flex-col flex-1">
      <style dangerouslySetInnerHTML={{ __html: SITE_HOVER_STYLE }} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden", padding: "clamp(60px,9vw,110px) clamp(24px,6vw,96px) clamp(40px,6vw,80px)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,133,58,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "clamp(40px,6vw,80px)", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Resume</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "var(--text-900)", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 10px" }}>Amit Kumar</h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(16px,1.8vw,22px)", color: "#FD853A", fontWeight: 600, margin: "0 0 16px" }}>Full-Stack &amp; Shopify Developer</p>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(13px,1.3vw,16px)", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 460, margin: "0 0 32px" }}>
              5+ years delivering high-quality websites and web applications — from pixel-perfect WordPress builds to PHP-powered custom solutions. Based in New Delhi, India. Available for remote freelance projects worldwide.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/amit-kumar-resume.pdf" download style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "13px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </a>
              <Link href="/contact" style={{ background: "transparent", color: "var(--text-900)", textDecoration: "none", borderRadius: 60, padding: "13px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid var(--border-color)" }}>
                Hire me
              </Link>
            </div>
          </div>

          {/* Quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            {[
              { icon: "📧", label: "Email",    value: "amit100894@gmail.com" },
              { icon: "📞", label: "Phone",    value: "+91-8960749497" },
              { icon: "📍", label: "Location", value: "New Delhi, India" },
              { icon: "✅", label: "Status",   value: "Open to Freelance Work" },
            ].map(row => (
              <div key={row.label} style={{ background: "var(--bg-card-alt)", borderRadius: 16, padding: "14px 22px", display: "flex", alignItems: "center", gap: 14, border: "1px solid var(--border-color)", minWidth: 260 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{row.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 2px" }}>{row.label}</p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 14, color: "var(--text-900)", margin: 0, fontWeight: 500 }}>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(40px,5vw,72px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Technical Skills</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "var(--text-900)", letterSpacing: "-0.02em", margin: 0 }}>Proficiency</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {SKILLS_CATS.map(cat => (
              <div key={cat.name} style={{ background: "var(--bg-card)", borderRadius: 20, padding: "28px", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FD853A", margin: "0 0 20px" }}>{cat.name}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {cat.skills.map(sk => (
                    <div key={sk.n}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "var(--text-700)", fontWeight: 500 }}>{sk.n}</span>
                        <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "var(--text-muted)" }}>{sk.p}%</span>
                      </div>
                      <div style={{ height: 5, background: "var(--border-color)", borderRadius: 10 }}>
                        <div style={{ height: "100%", width: `${sk.p}%`, background: "linear-gradient(to right, #FD853A, #FEB273)", borderRadius: 10 }} />
                      </div>
                    </div>
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
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Work History</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "#FCFCFD", letterSpacing: "-0.02em", margin: 0 }}>Experience</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EXPERIENCE.map((job, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "clamp(22px,2.5vw,36px)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: "#FCFCFD", margin: "0 0 3px" }}>{job.role}</h3>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "rgba(252,252,253,0.45)", margin: 0 }}>{job.company} · {job.location}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: job.color, background: job.color + "25", padding: "5px 14px", borderRadius: 40, flexShrink: 0 }}>{job.period}</span>
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

      {/* ── Education ────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-page)", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Academic Background</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "var(--text-900)", letterSpacing: "-0.02em", margin: 0 }}>Education</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {EDUCATION.map((edu, i) => (
              <div key={i} style={{ background: "var(--bg-card)", borderRadius: 20, padding: "28px", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: "rgba(253,133,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{edu.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(14px,1.5vw,17px)", fontWeight: 700, color: "var(--text-900)", margin: "0 0 5px", lineHeight: 1.3 }}>{edu.degree}</h3>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "var(--text-muted)", margin: "0 0 6px", lineHeight: 1.5 }}>{edu.institution}</p>
                  <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, fontWeight: 600, color: "#FD853A", background: "rgba(253,133,58,0.1)", padding: "3px 12px", borderRadius: 40 }}>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Websites ───────────────────────────────────── */}
      <section style={{ background: "var(--bg-card-alt)", padding: "clamp(48px,6vw,80px) clamp(24px,6vw,96px)", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FD853A", display: "block", marginBottom: 10 }}>Live Projects</span>
            <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "var(--text-900)", letterSpacing: "-0.02em", margin: "0 0 8px" }}>Websites I built</h2>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>A selection of live websites delivered for clients across India, Canada, USA, and the UAE.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {PORTFOLIO_SITES.map((site) => (
              <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className="resume-site-card" style={{ background: "var(--bg-card)", borderRadius: 14, padding: "16px 20px", border: "1.5px solid var(--border-color)", textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(253,133,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FD853A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: 14, fontWeight: 700, color: "var(--text-900)", margin: "0 0 2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{site.label}</p>
                  <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, color: "var(--text-muted)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#FD853A", padding: "clamp(48px,6vw,72px) clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 14px", lineHeight: 1.1 }}>
            Let&apos;s work together
          </h2>
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 30px" }}>
            Open to freelance projects, long-term contracts, and full-time opportunities.
          </p>
          <Link href="/contact" style={{ background: "#fff", color: "#FD853A", textDecoration: "none", borderRadius: 60, padding: "14px 36px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Contact me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
