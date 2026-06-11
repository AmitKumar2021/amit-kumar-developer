"use client";

import React from "react";

const POSTS = [
  {
    id: 1,
    category: "WordPress",
    author: "Amit Kumar",
    date: "12 Mar, 2024",
    title: "How to Build a Fast WordPress Site That Actually Ranks on Google",
    url: "#",
    thumb: "uiux",
  },
  {
    id: 2,
    category: "E-Commerce",
    author: "Amit Kumar",
    date: "05 Jan, 2024",
    title: "WooCommerce vs Shopify: Which Platform Is Right for Your Store?",
    url: "#",
    thumb: "sugee",
  },
  {
    id: 3,
    category: "SEO",
    author: "Amit Kumar",
    date: "20 Nov, 2023",
    title: "On-Page SEO Checklist for WordPress Sites in 2024",
    url: "#",
    thumb: "cinetrade",
  },
];

/* ── Thumbnail mockups ─────────────────────────────────────────── */
function ThumbUiUx() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(135deg,#7B5CB8 0%,#4A8FE7 100%)",
      overflow: "hidden",
    }}>
      {/* soft blobs */}
      <div style={{ position:"absolute", width:160, height:160, borderRadius:"50%", background:"rgba(255,255,255,0.08)", top:-40, right:-30 }}/>
      <div style={{ position:"absolute", width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.06)", bottom:20, left:-20 }}/>

      {/* floating card 1 */}
      <div style={{
        position:"absolute", left:18, top:22,
        width:160, height:90,
        background:"rgba(255,255,255,0.18)", backdropFilter:"blur(6px)",
        borderRadius:14, padding:10, boxShadow:"0 8px 20px rgba(0,0,0,0.15)",
      }}>
        <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
          <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(255,255,255,0.4)" }}/>
          <div>
            <div style={{ width:60, height:6, borderRadius:4, background:"rgba(255,255,255,0.6)", marginBottom:4 }}/>
            <div style={{ width:40, height:4, borderRadius:4, background:"rgba(255,255,255,0.35)" }}/>
          </div>
        </div>
        <div style={{ display:"flex", gap:5 }}>
          {[1,2,3].map(i=>(
            <div key={i} style={{ flex:1, height:36, borderRadius:8, background:"rgba(255,255,255,0.22)" }}/>
          ))}
        </div>
      </div>

      {/* floating card 2 */}
      <div style={{
        position:"absolute", right:18, bottom:28,
        width:130, height:75,
        background:"rgba(255,255,255,0.15)", backdropFilter:"blur(6px)",
        borderRadius:12, padding:10,
      }}>
        <div style={{ width:"70%", height:5, borderRadius:4, background:"rgba(255,255,255,0.5)", marginBottom:6 }}/>
        <div style={{ width:"50%", height:4, borderRadius:4, background:"rgba(255,255,255,0.3)", marginBottom:8 }}/>
        <div style={{ display:"flex", gap:4 }}>
          <div style={{ width:24, height:24, borderRadius:6, background:"#FD853A" }}/>
          <div style={{ width:24, height:24, borderRadius:6, background:"rgba(255,255,255,0.25)" }}/>
          <div style={{ width:24, height:24, borderRadius:6, background:"rgba(255,255,255,0.25)" }}/>
        </div>
      </div>

      {/* small tag */}
      <div style={{
        position:"absolute", left:18, bottom:28,
        background:"rgba(253,133,58,0.85)", borderRadius:100,
        padding:"4px 10px",
        fontFamily:"var(--font-outfit), sans-serif", fontSize:11, fontWeight:600, color:"#fff",
      }}>Figma</div>
    </div>
  );
}

function ThumbSugee() {
  return (
    <div style={{
      position:"absolute", inset:0,
      background:"#0B6E58",
      overflow:"hidden",
    }}>
      {/* subtle radial glow */}
      <div style={{ position:"absolute", width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.04)", top:-60, left:-60 }}/>

      {/* brand name */}
      <div style={{
        position:"absolute", top:28, left:22,
        fontFamily:"var(--font-urbanist), sans-serif",
        fontSize:38, fontWeight:800, color:"#fff", letterSpacing:"-0.02em",
        opacity:0.92,
      }}>sugee</div>

      {/* mini dashboard card */}
      <div style={{
        position:"absolute", bottom:22, left:18, right:18,
        background:"rgba(255,255,255,0.12)", backdropFilter:"blur(6px)",
        borderRadius:12, padding:"10px 14px",
      }}>
        {/* row: label + value */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
          <div>
            <div style={{ width:60, height:5, borderRadius:4, background:"rgba(255,255,255,0.45)", marginBottom:4 }}/>
            <div style={{ fontFamily:"var(--font-outfit), sans-serif", fontSize:20, fontWeight:700, color:"#fff" }}>₹ 568</div>
          </div>
          <div style={{
            background:"rgba(253,133,58,0.9)", borderRadius:8, padding:"4px 10px",
            fontFamily:"var(--font-outfit), sans-serif", fontSize:11, fontWeight:600, color:"#fff",
          }}>+10.7%</div>
        </div>
        {/* fake chart line */}
        <svg width="100%" height="28" viewBox="0 0 200 28" fill="none">
          <polyline points="0,24 30,18 60,20 90,10 120,14 150,6 180,10 200,4"
            stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <polyline points="0,28 0,24 30,18 60,20 90,10 120,14 150,6 180,10 200,4 200,28"
            fill="rgba(255,255,255,0.08)"/>
        </svg>
      </div>

      {/* top-right dots */}
      <div style={{ position:"absolute", top:20, right:20, display:"flex", gap:5 }}>
        {[1,2,3].map(i=><div key={i} style={{ width:7,height:7,borderRadius:"50%",background:"rgba(255,255,255,0.35)" }}/>)}
      </div>
    </div>
  );
}

function ThumbCinetrade() {
  return (
    <div style={{
      position:"absolute", inset:0,
      background:"#F59E0B",
      overflow:"hidden",
    }}>
      {/* background stripe */}
      <div style={{ position:"absolute", top:0, right:0, width:52, bottom:0, background:"rgba(0,0,0,0.14)" }}/>

      {/* vertical brand text */}
      <div style={{
        position:"absolute", right:8, top:"50%", transform:"translateY(-50%) rotate(90deg)",
        fontFamily:"var(--font-urbanist), sans-serif",
        fontSize:13, fontWeight:800, color:"rgba(255,255,255,0.75)", letterSpacing:"0.12em",
        whiteSpace:"nowrap",
      }}>ineTrade</div>

      {/* mini phone mockup */}
      <div style={{
        position:"absolute", left:22, top:16,
        width:100, height:"calc(100% - 32px)",
        background:"#1A1A2E", borderRadius:14,
        overflow:"hidden", boxShadow:"0 10px 28px rgba(0,0,0,0.3)",
      }}>
        {/* notch */}
        <div style={{ display:"flex", justifyContent:"center", paddingTop:7, marginBottom:6 }}>
          <div style={{ width:30, height:4, borderRadius:4, background:"rgba(255,255,255,0.2)" }}/>
        </div>
        {/* app content */}
        <div style={{ padding:"0 7px" }}>
          {/* top row */}
          <div style={{ display:"flex", alignItems:"center", gap:5, marginBottom:7 }}>
            <div style={{ width:16,height:16,borderRadius:"50%",background:"#FD853A",flexShrink:0 }}/>
            <div style={{ flex:1,height:5,borderRadius:3,background:"rgba(255,255,255,0.2)" }}/>
          </div>
          {/* search bar */}
          <div style={{ height:14,borderRadius:7,background:"rgba(255,255,255,0.08)",marginBottom:7 }}/>
          {/* banner */}
          <div style={{ height:36,borderRadius:8,background:"rgba(253,133,58,0.35)",marginBottom:6 }}/>
          {/* row of icons */}
          <div style={{ display:"flex", gap:4, marginBottom:6 }}>
            {["#FD853A","rgba(255,255,255,0.12)","rgba(255,255,255,0.12)","rgba(255,255,255,0.12)"].map((bg,i)=>(
              <div key={i} style={{ flex:1,height:22,borderRadius:6,background:bg }}/>
            ))}
          </div>
          {/* list rows */}
          {[1,2,3].map(i=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:4,marginBottom:5 }}>
              <div style={{ width:14,height:14,borderRadius:4,background:"rgba(255,255,255,0.15)",flexShrink:0 }}/>
              <div style={{ flex:1 }}>
                <div style={{ width:"65%",height:4,borderRadius:3,background:"rgba(255,255,255,0.25)",marginBottom:3 }}/>
                <div style={{ width:"45%",height:3,borderRadius:3,background:"rgba(255,255,255,0.12)" }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* small floating tag */}
      <div style={{
        position:"absolute", left:138, bottom:28,
        background:"rgba(0,0,0,0.55)", backdropFilter:"blur(4px)",
        borderRadius:100, padding:"4px 10px",
        fontFamily:"var(--font-outfit), sans-serif", fontSize:10, fontWeight:600, color:"#fff",
      }}>OTT · Trade · Invest</div>
    </div>
  );
}

const THUMBS: Record<string, () => React.ReactElement> = {
  uiux: ThumbUiUx,
  sugee: ThumbSugee,
  cinetrade: ThumbCinetrade,
};

/* ── Arrow button (same style as Services) ─────────────────────── */
function ArrowBtn({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 52, height: 52, borderRadius: "50%",
        background: "#1D2939",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "transform 0.25s, background 0.25s",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        const a = e.currentTarget as HTMLAnchorElement;
        a.style.transform = "scale(1.1)";
        a.style.background = "#FD853A";
      }}
      onMouseLeave={e => {
        const a = e.currentTarget as HTMLAnchorElement;
        a.style.transform = "scale(1)";
        a.style.background = "#1D2939";
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </a>
  );
}

/* ── Single blog card ───────────────────────────────────────────── */
function BlogCard({ post }: { post: (typeof POSTS)[number] }) {
  const Thumb = THUMBS[post.thumb];

  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        border: "1.5px solid rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        const d = e.currentTarget as HTMLDivElement;
        d.style.transform = "translateY(-4px)";
        d.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        const d = e.currentTarget as HTMLDivElement;
        d.style.transform = "translateY(0)";
        d.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", height: "clamp(200px, 20vw, 260px)" }}>
        <Thumb />
        {/* Arrow button — bottom-right of thumbnail */}
        <div style={{ position: "absolute", bottom: 16, right: 16, zIndex: 10 }}>
          <ArrowBtn url={post.url} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px 22px", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Category pill */}
        <span style={{
          display: "inline-block",
          background: "rgba(253,133,58,0.10)",
          borderRadius: 100,
          padding: "5px 14px",
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: 13, fontWeight: 500,
          color: "#FD853A",
          alignSelf: "flex-start",
        }}>
          {post.category}
        </span>

        {/* Author · Date */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 400,
          color: "#667085",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FD853A", flexShrink: 0 }} />
          {post.author}
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FD853A", flexShrink: 0 }} />
          {post.date}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-urbanist), sans-serif",
          fontSize: "clamp(15px, 1.4vw, 20px)",
          fontWeight: 700,
          color: "var(--text-900)",
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
          margin: 0,
        }}>
          {post.title}
        </h3>

      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function BlogPosts() {
  return (
    <section
      className="w-full px-4 md:px-6 lg:px-10 py-14 md:py-20"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-[1299px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <h2
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--text-900)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            From my
        
            blog post
          </h2>

          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#FD853A",
              color: "#fff",
              textDecoration: "none",
              borderRadius: 100,
              padding: "12px 28px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(13px, 1.1vw, 16px)",
              fontWeight: 500,
              flexShrink: 0,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.transform = "scale(1.05)";
              a.style.boxShadow = "0 8px 24px rgba(253,133,58,0.40)";
            }}
            onMouseLeave={e => {
              const a = e.currentTarget as HTMLAnchorElement;
              a.style.transform = "scale(1)";
              a.style.boxShadow = "none";
            }}
          >
            See All
          </a>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
