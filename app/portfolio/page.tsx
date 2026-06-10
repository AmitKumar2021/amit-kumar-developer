"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PROJECTS = [
  { id: 1,  title: "Lirante",   subtitle: "Food Delivery App",          category: "UI Design",  year: "2024", color: "#FF6B35", img: "/work/Screenshot_1.png", slug: "lirante-food-delivery",      tags: ["React Native", "Node.js", "Stripe"] },
  { id: 2,  title: "Novalux",   subtitle: "Fashion E-Commerce",         category: "Web Design", year: "2024", color: "#6366F1", img: "/work/Screenshot_2.png", slug: "novalux-fashion-store",       tags: ["Next.js", "Shopify", "Tailwind"] },
  { id: 3,  title: "MediCare",  subtitle: "Health Analytics Dashboard", category: "Dashboard",  year: "2024", color: "#10B981", img: "/work/Screenshot_3.png", slug: "medicare-health-dashboard",   tags: ["React", "D3.js", "TypeScript"] },
  { id: 4,  title: "Voyager",   subtitle: "Travel Booking Platform",    category: "Web App",    year: "2023", color: "#3B82F6", img: "/work/Screenshot_6.png", slug: "voyager-travel-booking",      tags: ["Next.js", "PostgreSQL", "Mapbox"] },
  { id: 5,  title: "Beatify",   subtitle: "Music Streaming Platform",   category: "Mobile App", year: "2024", color: "#EC4899", img: "/work/Screenshot_7.png", slug: "beatify-music-platform",      tags: ["React Native", "Node.js", "AWS"] },
  { id: 6,  title: "Nestify",   subtitle: "Real Estate Platform",       category: "Web Design", year: "2023", color: "#F59E0B", img: "/work/Screenshot_8.png", slug: "nestify-real-estate",         tags: ["Next.js", "Mapbox", "Sanity"] },
  { id: 7,  title: "EduSpark",  subtitle: "E-Learning Platform",        category: "UI Design",  year: "2023", color: "#8B5CF6", img: "/work/Screenshot_1.png", slug: "eduspark-e-learning",         tags: ["React", "Node.js", "MongoDB"] },
  { id: 8,  title: "FinFlow",   subtitle: "Finance Dashboard",          category: "Dashboard",  year: "2024", color: "#14B8A6", img: "/work/Screenshot_2.png", slug: "finflow-finance-app",         tags: ["Next.js", "D3.js", "PostgreSQL"] },
  { id: 9,  title: "Pulsogram", subtitle: "Social Media Platform",      category: "Mobile App", year: "2023", color: "#F97316", img: "/work/Screenshot_3.png", slug: "pulsogram-social-media",      tags: ["React Native", "GraphQL", "Redis"] },
  { id: 10, title: "Tableaux",  subtitle: "Restaurant Branding",        category: "Branding",   year: "2023", color: "#EF4444", img: "/work/Screenshot_6.png", slug: "tableaux-restaurant",         tags: ["Figma", "Next.js", "GSAP"] },
];

const CATEGORIES = ["All", "UI Design", "Web Design", "Dashboard", "Web App", "Mobile App", "Branding"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

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
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.1)", border: "1px solid rgba(253,133,58,0.25)", borderRadius: 40, padding: "5px 16px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>My Work</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(38px,6vw,80px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
              Projects that<br /><span style={{ color: "#FD853A" }}>speak for themselves</span>
            </h1>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(14px,1.4vw,18px)", color: "#6B7280", lineHeight: 1.75, maxWidth: 480, margin: "0 0 36px" }}>
              10 projects across UI design, web development, mobile apps, dashboards, and branding.
            </p>
            <Link href="/contact" style={{ background: "#FD853A", color: "#fff", textDecoration: "none", borderRadius: 60, padding: "12px 28px", fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flexShrink: 0 }}>
            {[
              { num: "10+", label: "Projects shown",   color: "#FD853A" },
              { num: "40+", label: "Total delivered",  color: "#6366F1" },
              { num: "5",   label: "Years experience", color: "#10B981" },
              { num: "6",   label: "Domains covered",  color: "#F59E0B" },
            ].map(s => (
              <div key={s.label} style={{ background: "#F9FAFB", borderRadius: 20, padding: "22px 24px", border: "1px solid #F3F4F6", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 800, color: s.color, margin: "0 0 6px", letterSpacing: "-0.02em" }}>{s.num}</p>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#9CA3AF", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ────────────────────────────────────────── */}
      <section className="w-full px-4 md:px-6 lg:px-10 pb-4">
        <div style={{ background: "#F9FAFB", borderRadius: 50, padding: "clamp(36px,5vw,60px) clamp(28px,5vw,64px)", border: "1px solid #F3F4F6" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Filter bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "clamp(32px,4vw,52px)" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 13, fontWeight: active === cat ? 700 : 500,
                  background: active === cat ? "#FD853A" : "#F3F4F6",
                  color: active === cat ? "#fff" : "#374151",
                  border: "none", borderRadius: 40, padding: "8px 18px",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ background: "#F9FAFB", borderRadius: 24, overflow: "hidden", border: "1px solid #F3F4F6", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    {/* Category pill */}
                    <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", color: "#fff", padding: "4px 12px", borderRadius: 40, fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {project.category}
                    </span>
                    {/* Number */}
                    <span style={{ position: "absolute", bottom: -4, right: 12, fontFamily: "var(--font-urbanist), sans-serif", fontSize: 56, fontWeight: 800, color: "rgba(255,255,255,0.15)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.04em" }}>
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "20px 22px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-urbanist), sans-serif", fontSize: "clamp(16px,1.6vw,20px)", fontWeight: 700, color: "#111827", margin: "0 0 2px", letterSpacing: "-0.01em" }}>
                          {project.title}
                        </h3>
                        <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#9CA3AF", margin: 0 }}>
                          {project.subtitle}
                        </p>
                      </div>
                      <span style={{ width: 36, height: 36, borderRadius: "50%", background: project.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {project.tags.map((t) => (
                        <span key={t} style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 11, fontWeight: 500, background: "#FFFFFF", color: "#6B7280", padding: "3px 10px", borderRadius: 40, border: "1px solid #E5E7EB" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 16, color: "#9CA3AF" }}>No projects in this category yet.</p>
            </div>
          )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
