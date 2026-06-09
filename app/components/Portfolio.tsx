"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const GAP           = 24;   // px gap between cards
const SLIDE_SCROLL  = 420;  // px of page-scroll per one card advance

/* ── Portfolio data (10 items) ───────────────────────────────── */
const PORTFOLIO = [
  { id: 1,  title: "Lirante – Food Delivery",       website: "lirante.vercel.app",   url: "#", c1: "#FF6B35", c2: "#FEB273" },
  { id: 2,  title: "Novalux – Fashion Store",        website: "novalux.design",        url: "#", c1: "#1D2939", c2: "#667085" },
  { id: 3,  title: "MediCare – Health Dashboard",    website: "medicare-ui.app",       url: "#", c1: "#10B981", c2: "#34D399" },
  { id: 4,  title: "Voyager – Travel Booking",       website: "voyager-travel.io",     url: "#", c1: "#3B82F6", c2: "#60A5FA" },
  { id: 5,  title: "Beatify – Music Platform",       website: "beatify.music",         url: "#", c1: "#8B5CF6", c2: "#A78BFA" },
  { id: 6,  title: "Nestify – Real Estate",          website: "nestify.homes",         url: "#", c1: "#F59E0B", c2: "#FBBF24" },
  { id: 7,  title: "EduSpark – E-Learning",          website: "eduspark.learn",        url: "#", c1: "#EC4899", c2: "#F472B6" },
  { id: 8,  title: "FinFlow – Finance App",          website: "finflow.money",         url: "#", c1: "#14B8A6", c2: "#2DD4BF" },
  { id: 9,  title: "Pulsogram – Social Media",       website: "pulsogram.social",      url: "#", c1: "#F97316", c2: "#FB923C" },
  { id: 10, title: "Tableaux – Restaurant Booking",  website: "tableaux.dining",       url: "#", c1: "#EF4444", c2: "#F87171" },
];

/* ── CSS phone mockup ────────────────────────────────────────── */
function PhoneMockup({ c1, c2 }: { c1: string; c2: string }) {
  return (
    <div style={{
      width: "clamp(88px, 8.5vw, 126px)", height: "clamp(165px, 16vw, 232px)",
      borderRadius: 26, background: `linear-gradient(150deg, ${c1}, ${c2})`,
      position: "relative", overflow: "hidden",
      boxShadow: "0 18px 40px rgba(0,0,0,0.20)", flexShrink: 0,
    }}>
      <div style={{ display:"flex", justifyContent:"center", paddingTop:10 }}>
        <div style={{ width:38,height:6,borderRadius:6,background:"rgba(255,255,255,0.28)" }}/>
      </div>
      <div style={{ display:"flex",alignItems:"center",gap:6,padding:"8px 10px 4px" }}>
        <div style={{ width:20,height:20,borderRadius:6,background:"rgba(255,255,255,0.3)",flexShrink:0 }}/>
        <div style={{ flex:1,height:7,borderRadius:5,background:"rgba(255,255,255,0.35)" }}/>
      </div>
      <div style={{ margin:"0 8px 7px",height:"26%",borderRadius:14,background:"rgba(255,255,255,0.18)",padding:"8px 8px 0" }}>
        <div style={{ width:"55%",height:5,borderRadius:3,background:"rgba(255,255,255,0.45)",marginBottom:4 }}/>
        <div style={{ width:"72%",height:4,borderRadius:3,background:"rgba(255,255,255,0.28)" }}/>
      </div>
      <div style={{ display:"flex",gap:5,margin:"0 8px 6px" }}>
        {[0,1].map(i=><div key={i} style={{ flex:1,height:38,borderRadius:10,background:"rgba(255,255,255,0.14)" }}/>)}
      </div>
      {[0,1,2].map(i=>(
        <div key={i} style={{ display:"flex",alignItems:"center",gap:5,margin:"0 8px 5px" }}>
          <div style={{ width:20,height:20,borderRadius:6,background:"rgba(255,255,255,0.2)",flexShrink:0 }}/>
          <div style={{ flex:1 }}>
            <div style={{ width:"68%",height:4,borderRadius:3,background:"rgba(255,255,255,0.3)",marginBottom:3 }}/>
            <div style={{ width:"45%",height:3,borderRadius:3,background:"rgba(255,255,255,0.18)" }}/>
          </div>
        </div>
      ))}
      <div style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.13)",padding:"6px 10px",display:"flex",justifyContent:"space-around" }}>
        {[0,1,2,3].map(i=><div key={i} style={{ width:16,height:16,borderRadius:4,background:"rgba(255,255,255,0.28)" }}/>)}
      </div>
    </div>
  );
}

/* ── Portfolio card ───────────────────────────────────────────── */
function PortfolioCard({ item }: { item: (typeof PORTFOLIO)[number] }) {
  return (
    <div
      style={{ width:"100%", borderRadius:28, overflow:"hidden", background:"var(--bg-card)",
        border:"1.5px solid #E4E7EC", display:"flex", flexDirection:"column",
        transition:"box-shadow 0.3s, transform 0.3s" }}
      onMouseEnter={e => { const el=e.currentTarget as HTMLDivElement; el.style.boxShadow="0 20px 48px rgba(0,0,0,0.12)"; el.style.transform="translateY(-4px)"; }}
      onMouseLeave={e => { const el=e.currentTarget as HTMLDivElement; el.style.boxShadow="none"; el.style.transform="translateY(0)"; }}
    >
      {/* image area */}
      <div style={{
        background:`linear-gradient(145deg, ${item.c1}18, ${item.c2}30)`,
        display:"flex", justifyContent:"center", alignItems:"flex-end",
        padding:"28px 24px 0", height:"clamp(220px, 22vw, 300px)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", width:"55%", height:"55%", borderRadius:"50%",
          background:`radial-gradient(circle, ${item.c1}44 0%, transparent 70%)`,
          bottom:"10%", left:"50%", transform:"translateX(-50%)" }}/>
        <PhoneMockup c1={item.c1} c2={item.c2}/>
      </div>

      {/* info row */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 18px", gap:10 }}>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontFamily:"var(--font-urbanist), sans-serif", fontSize:"clamp(13px,1.2vw,17px)",
            fontWeight:700, color:"var(--text-700)", letterSpacing:"-0.01em", lineHeight:1.3,
            whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
            {item.title}
          </p>
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:"var(--font-outfit), sans-serif", fontSize:"clamp(11px,0.9vw,13px)",
              color:"#98A2B3", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color="#FD853A";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.color="#98A2B3";}}>
            {item.website}
          </a>
        </div>
        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ flexShrink:0, textDecoration:"none" }}>
          <div style={{ width:38,height:38,borderRadius:"50%",background:"#FD853A",
            display:"flex",alignItems:"center",justifyContent:"center",
            transition:"transform 0.25s, box-shadow 0.25s", cursor:"pointer" }}
            onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="scale(1.12) rotate(-15deg)"; el.style.boxShadow="0 6px 18px rgba(253,133,58,0.45)"; }}
            onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform="scale(1) rotate(0)"; el.style.boxShadow="none"; }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const cardWRef     = useRef(0);
  const visibleRef   = useRef(3);

  const [translateX, setTranslateX]   = useState(0);
  const [activeIdx,  setActiveIdx]    = useState(0);
  const [showSkip,   setShowSkip]     = useState(false);
  const [wrapperH,   setWrapperH]     = useState(0);

  /* measure card width & recalculate wrapper height */
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.offsetWidth;
    const v = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    visibleRef.current = v;
    cardWRef.current   = (w - GAP * (v - 1)) / v;

    const maxSteps = PORTFOLIO.length - v;          // how many steps to scroll through
    setWrapperH(maxSteps * SLIDE_SCROLL + window.innerHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* scroll → horizontal translate */
  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect     = wrapperRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);

      const v        = visibleRef.current;
      const maxSteps = PORTFOLIO.length - v;
      const step     = Math.min(maxSteps, scrolled / SLIDE_SCROLL); // 0 → maxSteps (continuous)
      const tx       = -(step * (cardWRef.current + GAP));

      setTranslateX(tx);
      setActiveIdx(Math.min(maxSteps, Math.round(step)));

      // show skip only while portfolio section is in view
      const inPortfolio = rect.top <= 0 && rect.bottom > 0;
      setShowSkip(inPortfolio && scrolled > SLIDE_SCROLL * 0.4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* skip → jump past the entire wrapper */
  const skipToNext = () => {
    if (!wrapperRef.current) return;
    window.scrollTo({
      top: wrapperRef.current.offsetTop + wrapperRef.current.offsetHeight,
      behavior: "smooth",
    });
  };

  /* dot click → scroll to that step */
  const goToStep = (i: number) => {
    if (!wrapperRef.current) return;
    window.scrollTo({
      top: wrapperRef.current.offsetTop + i * SLIDE_SCROLL,
      behavior: "smooth",
    });
  };

  const maxSteps = Math.max(1, PORTFOLIO.length - visibleRef.current);

  return (
    /* ── tall wrapper so sticky section has room to "scroll" ── */
    <div ref={wrapperRef} style={{ height: wrapperH || PORTFOLIO.length * SLIDE_SCROLL + 900 }}>

      {/* ── sticky visual shell ─────────────────────────────── */}
      <div className="sticky top-0" style={{ background: "var(--bg-page)", zIndex: 10 }}>
        <section className="w-full px-4 md:px-17.75 py-10 md:py-14">
          <div className="max-w-324.5 mx-auto flex flex-col gap-8">

            {/* header */}
            <div className="flex items-start justify-between gap-4">
              <h2 style={{
                fontFamily:"var(--font-urbanist), sans-serif",
                fontSize:"clamp(28px,4.5vw,60px)", color:"var(--text-900)",
                fontWeight:600, lineHeight:1.1, letterSpacing:"-0.015em", maxWidth:420,
              }}>
                Lets have a look at my{" "}
                <span style={{ color:"#FD853A" }}>Portfolio</span>
              </h2>

              <button style={{
                background:"#FD853A", color:"#fff", border:"none",
                borderRadius:60, padding:"12px 30px",
                fontFamily:"var(--font-outfit), sans-serif",
                fontSize:"clamp(13px,1.3vw,17px)", fontWeight:500,
                cursor:"pointer", whiteSpace:"nowrap", flexShrink:0,
                transition:"transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1.05)"; b.style.boxShadow="0 8px 24px rgba(253,133,58,0.4)"; }}
                onMouseLeave={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1)"; b.style.boxShadow="none"; }}>
                See All
              </button>
            </div>

            {/* ── cards track (overflow hidden = horizontal clip) ── */}
            <div ref={trackRef} style={{ overflow:"hidden" }}>
              <div style={{
                display:"flex", gap:GAP,
                transform:`translateX(${translateX}px)`,
                transition:"transform 0.12s linear",
                willChange:"transform",
              }}>
                {PORTFOLIO.map(item => (
                  <div key={item.id} style={{ width: cardWRef.current || "calc(33.333% - 16px)", flexShrink:0 }}>
                    <PortfolioCard item={item}/>
                  </div>
                ))}
              </div>
            </div>

            {/* dots */}
            <div style={{ display:"flex", alignItems:"center", gap:8, justifyContent:"center" }}>
              {Array.from({ length: maxSteps + 1 }).map((_, i) => (
                <button key={i} onClick={() => goToStep(i)}
                  style={{
                    width: activeIdx === i ? 44 : 10, height:10, borderRadius:10,
                    background: activeIdx === i ? "#FD853A" : "#D0D5DD",
                    border:"none", cursor:"pointer", padding:0,
                    transition:"all 0.35s ease",
                  }}/>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* ── Skip button (fixed, appears after 1st scroll into section) ── */}
      {showSkip && (
        <div style={{
          position:"fixed", bottom:32, right:32, zIndex:200,
          animation:"fadeInUp 0.4s ease both",
        }}>
          <button onClick={skipToNext} style={{
            background:"var(--text-900)", color:"var(--hero-bg)",
            border:"none", borderRadius:60, padding:"13px 26px",
            fontFamily:"var(--font-outfit), sans-serif", fontSize:15, fontWeight:500,
            cursor:"pointer", display:"flex", alignItems:"center", gap:8,
            boxShadow:"0 8px 28px rgba(0,0,0,0.22)",
            transition:"background 0.25s, transform 0.25s, box-shadow 0.25s",
          }}
            onMouseEnter={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.background="#FD853A"; b.style.transform="scale(1.05)"; b.style.boxShadow="0 8px 28px rgba(253,133,58,0.4)"; }}
            onMouseLeave={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.background="var(--text-900)"; b.style.transform="scale(1)"; b.style.boxShadow="0 8px 28px rgba(0,0,0,0.22)"; }}>
            Skip Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"/>
              <polyline points="6 17 11 12 6 7"/>
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}
