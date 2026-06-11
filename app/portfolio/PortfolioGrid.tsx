"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
  { id: 1,  title: "Lingo Nerds",          subtitle: "Education Platform",      category: "WordPress",  year: "2024", color: "#FD853A", img: "/work/Screenshot_1.png", url: "https://lingonerds.org/",          tags: ["WordPress", "PHP", "CSS3"],         desc: "Language learning platform with course management and student portals." },
  { id: 2,  title: "Dlux World",           subtitle: "Lifestyle & Fashion",     category: "E-Commerce", year: "2024", color: "#6366F1", img: "/work/Screenshot_2.png", url: "https://dluxworld.com/",            tags: ["WordPress", "WooCommerce", "CSS3"], desc: "E-commerce fashion store with custom product pages and payment integration." },
  { id: 3,  title: "Mi Educate",           subtitle: "Online Education",        category: "WordPress",  year: "2023", color: "#10B981", img: "/work/Screenshot_3.png", url: "http://mieducate.org",              tags: ["WordPress", "LMS", "PHP"],          desc: "Online education portal with LMS and video courses." },
  { id: 4,  title: "Hello Learnerz",       subtitle: "E-Learning Portal",       category: "WordPress",  year: "2024", color: "#3B82F6", img: "/work/Screenshot_6.png", url: "https://hellolearnerz.com/",        tags: ["WordPress", "PHP", "API"],          desc: "Interactive e-learning portal with quiz engine and progress tracking." },
  { id: 5,  title: "Merzatta",             subtitle: "Business Website",        category: "Web Design", year: "2023", color: "#EC4899", img: "/work/Screenshot_7.png", url: "https://merzatta.com",              tags: ["WordPress", "Figma", "SEO"],        desc: "Corporate business website with modern design and SEO optimisation." },
  { id: 6,  title: "Khelo Khhudo",         subtitle: "Sports Platform",         category: "WordPress",  year: "2023", color: "#F59E0B", img: "/work/Screenshot_8.png", url: "https://khelokhhudo.com/",          tags: ["WordPress", "PHP", "MySQL"],        desc: "Sports events and registration platform for grassroots athletes." },
  { id: 7,  title: "Shankar Manpower",     subtitle: "Recruitment Agency",      category: "Web Design", year: "2023", color: "#8B5CF6", img: "/work/Screenshot_1.png", url: "https://shankarmanpower.com/",      tags: ["WordPress", "CSS3", "SEO"],         desc: "Recruitment agency website with job listings and inquiry forms." },
  { id: 8,  title: "The Perfect Leasing",  subtitle: "Real Estate",             category: "E-Commerce", year: "2024", color: "#14B8A6", img: "/work/Screenshot_2.png", url: "https://theperfectleasing.com/",    tags: ["WordPress", "PHP", "API"],          desc: "Real estate leasing platform with property listings and virtual tours." },
  { id: 9,  title: "Payexel Solutions",    subtitle: "Fintech Company",         category: "Web Design", year: "2024", color: "#F97316", img: "/work/Screenshot_3.png", url: "https://payexelsolutions.com/",      tags: ["WordPress", "Figma", "SEO"],        desc: "Fintech company website with payment solutions showcase and blog." },
  { id: 10, title: "Affordable Car Rental",subtitle: "Vehicle Rental (Canada)", category: "E-Commerce", year: "2023", color: "#EF4444", img: "/work/Screenshot_6.png", url: "https://affordablecarrental.ca",    tags: ["WordPress", "WooCommerce", "PHP"],  desc: "Canadian car rental booking platform with online reservations." },
  { id: 11, title: "Markhor Transport",    subtitle: "Logistics & Transport",   category: "Web Design", year: "2023", color: "#0EA5E9", img: "/work/Screenshot_7.png", url: "https://markhortransport.com/",     tags: ["WordPress", "CSS3", "SEO"],         desc: "Logistics company website with fleet showcase and quote requests." },
  { id: 12, title: "Euro Bild",            subtitle: "Construction (UAE)",      category: "Web Design", year: "2024", color: "#D97706", img: "/work/Screenshot_8.png", url: "https://eurobild.ae/",              tags: ["WordPress", "Figma", "PHP"],        desc: "UAE-based construction company website with project portfolio." },
];

const CATEGORIES = ["All", "WordPress", "E-Commerce", "Web Design"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "clamp(28px,4vw,48px)" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 13, fontWeight: active === cat ? 700 : 500,
              background: active === cat ? "#FD853A" : "var(--bg-card-alt)",
              color: active === cat ? "#fff" : "var(--text-700)",
              border: active === cat ? "none" : "1px solid var(--border-color)",
              borderRadius: 40, padding: "9px 20px",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
        {filtered.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{ background: "var(--bg-card)", borderRadius: 24, overflow: "hidden", border: "1.5px solid var(--border-color)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; }}
            >
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "var(--bg-card-alt)" }}>
                <Image src={project.img} alt={project.title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "top" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", color: "#fff", padding: "4px 12px", borderRadius: 40, fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{project.category}</span>
                <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(253,133,58,0.9)", color: "#fff", padding: "4px 10px", borderRadius: 40, fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 600 }}>{project.year}</span>
              </div>
              <div style={{ padding: "20px 22px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(16px,1.6vw,19px)", fontWeight: 700, color: "var(--text-900)", margin: "0 0 2px", letterSpacing: "-0.01em" }}>{project.title}</h3>
                    <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>{project.subtitle}</p>
                  </div>
                  <span style={{ width: 36, height: 36, borderRadius: "50%", background: project.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 12px" }}>{project.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 500, background: "var(--bg-card-alt)", color: "var(--text-muted)", padding: "3px 10px", borderRadius: 40, border: "1px solid var(--border-color)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 16, color: "#9CA3AF" }}>No projects in this category yet.</p>
        </div>
      )}

      {/* CTA */}
      <div style={{ marginTop: "clamp(48px,6vw,80px)", background: "#FD853A", borderRadius: 32, padding: "clamp(40px,5vw,64px)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "0 0 14px", lineHeight: 1.1 }}>
          Need a website like these?
        </h2>
        <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,17px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 28px" }}>
          Let&apos;s build something you&apos;re proud to share. Free quote within 24 hours.
        </p>
        <Link href="/contact" style={{ background: "#fff", color: "#FD853A", textDecoration: "none", borderRadius: 60, padding: "13px 32px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 8 }}>
          Start a project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </>
  );
}
