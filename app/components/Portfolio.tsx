"use client";

import { useEffect, useRef } from "react";

const CARD_H  = 190;  // px — uniform card height
const CARD_GAP = 14;  // px — gap treated as marginBottom so loop math stays exact

const PORTFOLIO = [
  { id: 1,  title: "Lirante – Food Delivery",     category: "UI Design",   website: "lirante.vercel.app",  url: "#", c1: "#FF6B35", c2: "#FEB273" },
  { id: 2,  title: "Novalux – Fashion Store",      category: "Web Design",  website: "novalux.design",      url: "#", c1: "#6366F1", c2: "#A78BFA" },
  { id: 3,  title: "MediCare – Health Dashboard",  category: "Dashboard",   website: "medicare-ui.app",     url: "#", c1: "#10B981", c2: "#34D399" },
  { id: 4,  title: "Voyager – Travel Booking",     category: "Web App",     website: "voyager-travel.io",   url: "#", c1: "#3B82F6", c2: "#60A5FA" },
  { id: 5,  title: "Beatify – Music Platform",     category: "Mobile App",  website: "beatify.music",       url: "#", c1: "#EC4899", c2: "#F472B6" },
  { id: 6,  title: "Nestify – Real Estate",        category: "Web Design",  website: "nestify.homes",       url: "#", c1: "#F59E0B", c2: "#FBBF24" },
  { id: 7,  title: "EduSpark – E-Learning",        category: "UI Design",   website: "eduspark.learn",      url: "#", c1: "#8B5CF6", c2: "#C4B5FD" },
  { id: 8,  title: "FinFlow – Finance App",        category: "Dashboard",   website: "finflow.money",       url: "#", c1: "#14B8A6", c2: "#2DD4BF" },
  { id: 9,  title: "Pulsogram – Social Media",     category: "Mobile App",  website: "pulsogram.social",    url: "#", c1: "#F97316", c2: "#FB923C" },
  { id: 10, title: "Tableaux – Restaurant",        category: "Branding",    website: "tableaux.dining",     url: "#", c1: "#EF4444", c2: "#F87171" },
];

const CHART = [35, 58, 44, 72, 48, 82, 40, 66];

/* ── Browser window mockup ─────────────────────────────────── */
function BrowserMock({ c1 }: { c1: string }) {
  return (
    <div style={{
      width: "100%", borderRadius: "9px 9px 0 0", overflow: "hidden",
      background: "#FFFFFF", boxShadow: "0 14px 40px rgba(0,0,0,0.28)", flexShrink: 0,
    }}>
      <div style={{ background: "#F0F0F0", padding: "5px 8px", display: "flex",
        alignItems: "center", gap: 4, borderBottom: "1px solid #E0E0E0" }}>
        {["#FF5F57","#FFBD2E","#28C840"].map((bg, i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: bg }} />
        ))}
        <div style={{ flex: 1, height: 10, background: "#E0E0E0", borderRadius: 20, marginLeft: 4 }} />
      </div>
      <div style={{ padding: 6, background: "#FAFAFA" }}>
        <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
          {[c1 + "CC", c1 + "44", "#EEEEEE"].map((bg, i) => (
            <div key={i} style={{ flex: 1, height: 28, background: bg, borderRadius: 5, padding: "3px 5px" }}>
              <div style={{ width: "55%", height: 3, borderRadius: 2, marginBottom: 2,
                background: i === 0 ? "rgba(255,255,255,0.5)" : "#D5D5D5" }} />
              <div style={{ width: "35%", height: 5, borderRadius: 2,
                background: i === 0 ? "#fff" : c1 + "55" }} />
            </div>
          ))}
        </div>
        <div style={{ background: "#FFF", borderRadius: 5, padding: "4px 5px", marginBottom: 4,
          border: "1px solid #F0F0F0" }}>
          <div style={{ width: "38%", height: 3, background: "#E0E0E0", borderRadius: 2, marginBottom: 3 }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 22 }}>
            {CHART.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "2px 2px 0 0",
                background: i === 3 || i === 5 ? c1 : c1 + "30" }} />
            ))}
          </div>
        </div>
        {[0, 1].map(i => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: i === 0 ? 3 : 0 }}>
            <div style={{ width: 13, height: 13, borderRadius: 3, flexShrink: 0,
              background: i === 0 ? c1 + "35" : "#EBEBEB" }} />
            <div style={{ flex: 1 }}>
              <div style={{ width: "60%", height: 3, background: "#D8D8D8", borderRadius: 2, marginBottom: 2 }} />
              <div style={{ width: "38%", height: 2, background: "#E8E8E8", borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Phone mockup ───────────────────────────────────────────── */
function PhoneMock({ c1, c2 }: { c1: string; c2: string }) {
  return (
    <div style={{
      width: 46, aspectRatio: "9/19.5",
      background: "#181818", borderRadius: 13,
      overflow: "hidden", border: "2px solid #2E2E2E",
      boxShadow: "0 14px 36px rgba(0,0,0,0.40)",
      flexShrink: 0, display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "4px 0 2px", flexShrink: 0 }}>
        <div style={{ width: 14, height: 3, borderRadius: 2, background: "#2E2E2E" }} />
      </div>
      <div style={{ flex: 1, margin: "0 3px", borderRadius: "6px 6px 0 0", overflow: "hidden",
        background: `linear-gradient(160deg, ${c1}, ${c2})`, padding: 4 }}>
        <div style={{ width: "50%", height: 2, background: "rgba(255,255,255,0.4)", borderRadius: 2, marginBottom: 4 }} />
        {[0,1,2,3].map(i => (
          <div key={i} style={{ height: 5, background: "rgba(255,255,255,0.15)", borderRadius: 3, marginBottom: 3 }} />
        ))}
        <div style={{ height: 12, background: "rgba(255,255,255,0.22)", borderRadius: 4, marginTop: 2 }} />
      </div>
      <div style={{ height: 11, background: "#111", display: "flex", justifyContent: "space-around",
        alignItems: "center", padding: "0 4px", flexShrink: 0 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: 5, height: 5, borderRadius: 2,
            background: i === 0 ? c1 : "rgba(255,255,255,0.18)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── Single card ────────────────────────────────────────────── */
function MarqueeCard({ item }: { item: (typeof PORTFOLIO)[number] }) {
  return (
    <div
      style={{
        height: CARD_H, marginBottom: CARD_GAP,
        flexShrink: 0, borderRadius: 18, overflow: "hidden",
        background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.06)",
        display: "flex", flexDirection: "column",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = item.c1 + "66";
        el.style.transform   = "scale(1.02)";
        el.style.boxShadow   = `0 12px 36px ${item.c1}22`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform   = "scale(1)";
        el.style.boxShadow   = "none";
      }}
    >
      {/* Preview gradient area */}
      <div style={{
        flex: 1, background: `linear-gradient(145deg, ${item.c1}18, ${item.c2}28)`,
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        gap: 8, padding: "12px 12px 0",
      }}>
        {/* Number watermark */}
        <span style={{
          position: "absolute", bottom: -6, right: 8,
          fontFamily: "var(--font-urbanist), sans-serif",
          fontSize: 56, fontWeight: 800, lineHeight: 1,
          color: item.c1 + "16", userSelect: "none",
          letterSpacing: "-0.04em", pointerEvents: "none",
        }}>
          {String(item.id).padStart(2, "0")}
        </span>

        {/* Category pill */}
        <span style={{
          position: "absolute", top: 8, left: 10,
          background: item.c1 + "20", color: item.c1,
          padding: "2px 9px", borderRadius: 20,
          fontSize: 9, fontWeight: 600,
          fontFamily: "var(--font-outfit), sans-serif",
          letterSpacing: "0.03em", textTransform: "uppercase",
        }}>
          {item.category}
        </span>

        {/* Glow */}
        <div style={{
          position: "absolute", width: 80, height: 80, borderRadius: "50%",
          background: `radial-gradient(circle, ${item.c1}22 0%, transparent 70%)`,
          top: "10%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none",
        }} />

        <BrowserMock c1={item.c1} />
        <PhoneMock   c1={item.c1} c2={item.c2} />
      </div>

      {/* Info row */}
      <div style={{
        padding: "8px 12px 10px", display: "flex",
        alignItems: "center", justifyContent: "space-between", gap: 8, flexShrink: 0,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(12px,1.1vw,14px)", fontWeight: 700,
            color: "#F0F0F0", letterSpacing: "-0.01em", lineHeight: 1.3,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {item.title}
          </p>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(10px,0.85vw,11px)", color: "rgba(255,255,255,0.35)", marginTop: 1,
          }}>
            {item.website}
          </p>
        </div>
        <div
          style={{
            width: 26, height: 26, borderRadius: "50%", background: "#FD853A",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "transform 0.25s, box-shadow 0.25s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "scale(1.2) rotate(-20deg)";
            el.style.boxShadow = "0 5px 16px rgba(253,133,58,0.5)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "scale(1) rotate(0)";
            el.style.boxShadow = "none";
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Marquee column ─────────────────────────────────────────── */
function MarqueeColumn({
  items,
  direction,
}: {
  items: (typeof PORTFOLIO)[number][];
  direction: "up" | "down";
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<Animation | null>(null);
  const doubled  = [...items, ...items];

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const keyframes =
      direction === "up"
        ? [{ transform: "translateY(0)" }, { transform: "translateY(-50%)" }]
        : [{ transform: "translateY(-50%)" }, { transform: "translateY(0)" }];

    const anim = el.animate(keyframes, {
      duration: 22000,
      iterations: Infinity,
      easing: "linear",
    });

    animRef.current = anim;
    return () => anim.cancel();
  }, [direction]);

  const pause  = () => animRef.current?.pause();
  const resume = () => animRef.current?.play();

  return (
    <div
      style={{ flex: 1, overflow: "hidden", position: "relative" }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* top fade */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 72, zIndex: 2,
        background: "linear-gradient(to bottom, #171717 0%, transparent 100%)",
        pointerEvents: "none",
      }} />
      {/* bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 72, zIndex: 2,
        background: "linear-gradient(to top, #171717 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div
        ref={innerRef}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {doubled.map((item, i) => (
          <MarqueeCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const col1 = PORTFOLIO.filter((_, i) => i % 3 === 0); // 4 items → 0,3,6,9
  const col2 = PORTFOLIO.filter((_, i) => i % 3 === 1); // 3 items → 1,4,7
  const col3 = PORTFOLIO.filter((_, i) => i % 3 === 2); // 3 items → 2,5,8

  /* exactly 3 cards + 2 gaps visible in each column */
  const gridH = CARD_H * 3 + CARD_GAP * 2;

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-4 animate-fade-in-up delay-200">
      <div
        className="relative w-full rounded-[50px] overflow-hidden"
        style={{
          background: `url('/images/background-1.png') center/cover no-repeat, #171717`,
          padding: "clamp(36px,5vw,60px) clamp(20px,4vw,52px)",
        }}
      >
        {/* scrim */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(12,12,12,0.28)", zIndex: 0 }} />

        <div className="relative z-10 flex flex-col gap-8" style={{ maxWidth: 1298, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "rgba(253,133,58,0.12)", border: "1px solid rgba(253,133,58,0.28)",
                borderRadius: 40, padding: "5px 14px", marginBottom: 12,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
                <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12,
                  color: "#FD853A", fontWeight: 500, letterSpacing: "0.02em" }}>
                  Featured Work
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-urbanist), sans-serif",
                fontSize: "clamp(28px,4vw,52px)", fontWeight: 600,
                color: "#FCFCFD", lineHeight: 1.1, letterSpacing: "-0.015em",
              }}>
                Lets have a look at my{" "}
                <span style={{ color: "#FD853A" }}>Portfolio</span>
              </h2>
            </div>

            <button
              style={{
                background: "#FD853A", color: "#fff", border: "none",
                borderRadius: 60, padding: "11px 28px",
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(13px,1.2vw,16px)", fontWeight: 500,
                cursor: "pointer", whiteSpace: "nowrap", alignSelf: "flex-start",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1.05)"; b.style.boxShadow = "0 8px 24px rgba(253,133,58,0.42)"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1)"; b.style.boxShadow = "none"; }}
            >
              See All Work
            </button>
          </div>

          {/* ── 3-column marquee ── */}
          <div style={{ display: "flex", gap: 16, height: gridH, overflow: "hidden" }}>
            <MarqueeColumn items={col1} direction="up"   />
            <MarqueeColumn items={col2} direction="down" />
            <MarqueeColumn items={col3} direction="up"   />
          </div>

        </div>
      </div>
    </section>
  );
}
