"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Tab = "reviews" | "videos";

const GAP = 24;

const REVIEWS = [
  {
    id: 1,
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    initials: "FS",
    color: "#FD853A",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    rating: 5.0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Exceptional work quality delivered with precision and creativity that truly elevates the brand.",
    initials: "SJ",
    color: "#3B82F6",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Frontend Developer",
    rating: 5.0,
    text: "Outstanding design skills throughout the entire project. The final deliverables were pixel-perfect and exceeded our expectations. Professional communication at every stage.",
    initials: "AH",
    color: "#10B981",
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Creative Director",
    rating: 5.0,
    text: "Absolutely brilliant work! Attention to detail and creative vision went beyond what we imagined. Will definitely collaborate again on future projects without any hesitation.",
    initials: "MG",
    color: "#8B5CF6",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Startup Founder",
    rating: 5.0,
    text: "Incredible talent and professionalism shown throughout our engagement. The brand identity and web design created for our startup was exactly what we needed to stand out.",
    initials: "JW",
    color: "#EC4899",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Client Testimonial – Lirante App",
    channel: "Fawzi Sayed",
    youtubeId: "dQw4w9WgXcQ",
    c1: "#FD853A",
    c2: "#FEB273",
  },
  {
    id: 2,
    title: "Project Review – Novalux Fashion",
    channel: "Sarah Johnson",
    youtubeId: "dQw4w9WgXcQ",
    c1: "#3B82F6",
    c2: "#60A5FA",
  },
  {
    id: 3,
    title: "Feedback – MediCare Dashboard",
    channel: "Ahmed Hassan",
    youtubeId: "dQw4w9WgXcQ",
    c1: "#10B981",
    c2: "#34D399",
  },
];

/* ── Stars ─────────────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", gap: 3 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} width="26" height="25" viewBox="0 0 26 25" fill="#FD853A">
            <path d="M13 0.5L15.9 9.2H25L18 14.3L20.9 23L13 17.9L5.1 23L8 14.3L1 9.2H10.1L13 0.5Z" />
          </svg>
        ))}
      </div>
      <span
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(18px, 1.6vw, 24px)",
          fontWeight: 600,
          letterSpacing: "-0.015em",
          color: "#FCFCFD",
          lineHeight: 1,
        }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

/* ── Review Card ───────────────────────────────────────────────── */
function ReviewCard({
  name, role, rating, text, initials, color,
}: (typeof REVIEWS)[number]) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        borderRadius: 24,
        padding: 21,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        overflow: "hidden",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative quote icon */}
      <svg
        style={{
          position: "absolute", right: 14, top: 14,
          opacity: 0.20, pointerEvents: "none",
        }}
        width="104" height="104" viewBox="0 0 128 128" fill="none"
      >
        <path
          d="M0 96V56C0 42.745 10.745 32 24 32V48C19.582 48 16 51.582 16 56V80H32V96H0ZM64 96V56C64 42.745 74.745 32 88 32V48C83.582 48 80 51.582 80 56V80H96V96H64Z"
          fill="rgba(102,112,133,0.6)"
        />
      </svg>

      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div
          style={{
            width: 55, height: 55, borderRadius: "50%",
            background: color,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: 18, fontWeight: 700, color: "#fff",
            }}
          >
            {initials}
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: "clamp(16px, 1.5vw, 22px)",
              fontWeight: 700, color: "#FCFCFD",
              letterSpacing: "-0.01em", lineHeight: 1.3,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: "clamp(12px, 1vw, 16px)",
              fontWeight: 400, color: "rgba(252,252,253,0.65)",
              marginTop: 2,
            }}
          >
            {role}
          </div>
        </div>
      </div>

      {/* Stars */}
      <Stars rating={rating} />

      {/* Review text */}
      <p
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(13px, 1.15vw, 18px)",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#F9FAFB",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* ── Video Card ────────────────────────────────────────────────── */
function VideoCard({
  title, channel, youtubeId, c1, c2,
}: (typeof VIDEOS)[number]) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        flex: "1 1 260px",
        minWidth: 0,
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16/9", display: "block", border: "none" }}
          title={title}
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{
            width: "100%", aspectRatio: "16/9",
            background: `linear-gradient(145deg, ${c1}55, ${c2}33)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 62, height: 62, borderRadius: "50%",
              background: "#FD853A",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 24px rgba(253,133,58,0.50)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const d = e.currentTarget as HTMLDivElement;
              d.style.transform = "scale(1.1)";
              d.style.boxShadow = "0 12px 32px rgba(253,133,58,0.65)";
            }}
            onMouseLeave={e => {
              const d = e.currentTarget as HTMLDivElement;
              d.style.transform = "scale(1)";
              d.style.boxShadow = "0 8px 24px rgba(253,133,58,0.50)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
        </div>
      )}

      <div style={{ padding: "14px 18px 18px" }}>
        <p
          style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(13px, 1.1vw, 16px)",
            fontWeight: 700, color: "#FCFCFD",
            margin: "0 0 4px", lineHeight: 1.4,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(11px, 0.85vw, 13px)",
            color: "#98A2B3", margin: 0,
          }}
        >
          {channel}
        </p>
      </div>
    </div>
  );
}

/* ── Nav Arrow ─────────────────────────────────────────────────── */
function NavArrow({
  dir, onClick, disabled,
}: { dir: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 48, height: 48, borderRadius: "50%",
        background: disabled ? "rgba(255,255,255,0.08)" : "#FD853A",
        opacity: disabled ? 0.4 : 1,
        border: "none", cursor: disabled ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: dir === "prev" ? "rotate(180deg)" : "none" }}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function Testimonials() {
  const [tab, setTab]           = useState<Tab>("reviews");
  const [current, setCurrent]   = useState(1);
  const [containerW, setContainerW] = useState(0);
  const [cardW, setCardW]       = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.offsetWidth;
    const ratio = window.innerWidth >= 768 ? 0.62 : 0.80;
    setContainerW(w);
    setCardW(Math.round(w * ratio));
    setCurrent(c => Math.min(c, REVIEWS.length - 1));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = REVIEWS.length - 1; // 4 — one card at a time
  const offsetX  = containerW > 0
    ? (containerW - cardW) / 2 - current * (cardW + GAP)
    : 0;

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-8">
      <div
        className="relative w-full rounded-[50px] overflow-hidden"
        style={{
          background: `url('/images/background-1.png') center/cover no-repeat, #171717`,
          padding: "clamp(48px, 8vw, 116px) clamp(20px, 5vw, 71px)",
        }}
      >
        {/* Scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(15,15,15,0.28)", zIndex: 0 }}
        />

        {/* Decorative sparkle stars */}
        <div className="absolute pointer-events-none" style={{ top: "9%", right: "30%", zIndex: 1 }}>
          <svg width="27" height="28" viewBox="0 0 28 29" fill="none">
            <path
              d="M14 2L16.8 10.9H26.3L18.7 16.1L21.5 25L14 19.8L6.5 25L9.3 16.1L1.7 10.9H11.2L14 2Z"
              stroke="#FFFDFC" strokeWidth="3.2" fill="none"
            />
          </svg>
        </div>
        <div className="absolute pointer-events-none" style={{ top: "20%", right: "12%", zIndex: 1 }}>
          <svg width="24" height="24" viewBox="0 0 28 29" fill="#FCFCFD">
            <path d="M14 2L16.8 10.9H26.3L18.7 16.1L21.5 25L14 19.8L6.5 25L9.3 16.1L1.7 10.9H11.2L14 2Z" />
          </svg>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ top: "62%", left: "4%", zIndex: 1, transform: "rotate(18deg)" }}
        >
          <svg width="22" height="22" viewBox="0 0 28 29" fill="#FCFCFD">
            <path d="M14 2L16.8 10.9H26.3L18.7 16.1L21.5 25L14 19.8L6.5 25L9.3 16.1L1.7 10.9H11.2L14 2Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1299px] mx-auto flex flex-col gap-10">

          {/* ── Header ──────────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2
              style={{
                fontFamily: "var(--font-urbanist), sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                color: "#FCFCFD",
                maxWidth: 500,
                margin: 0,
              }}
            >
              Testimonials That
              <br />
              Speak to{" "}
              <span style={{ color: "#FD853A" }}>My Results</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(14px, 1.35vw, 20px)",
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: "-0.015em",
                color: "#F9FAFB",
                maxWidth: 742,
                margin: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis orci elementum egestas lobortis.
            </p>
          </div>

          {/* ── Tab switcher ────────────────────────────────────── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 60,
                padding: 5,
                gap: 4,
              }}
            >
              {(["reviews", "videos"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setCurrent(0); }}
                  style={{
                    borderRadius: 60,
                    padding: "10px 24px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "clamp(13px, 1.15vw, 16px)",
                    fontWeight: 500,
                    background: tab === t ? "#FD853A" : "transparent",
                    color: tab === t ? "#fff" : "rgba(252,252,253,0.55)",
                    transition: "background 0.25s, color 0.25s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t === "reviews" ? (
                    <>
                      {/* Google G icon */}
                      <svg width="15" height="15" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill={tab === "reviews" ? "#fff" : "#4285F4"} />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill={tab === "reviews" ? "#fff" : "#34A853"} />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill={tab === "reviews" ? "#fff" : "#FBBC05"} />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill={tab === "reviews" ? "#fff" : "#EA4335"} />
                      </svg>
                      Google Reviews
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={tab === "videos" ? "#fff" : "rgba(252,252,253,0.55)"}>
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Video Testimonials
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Tab content ─────────────────────────────────────── */}
          {tab === "reviews" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/*
                Centered-peek carousel track.
                Negative margins cancel the dark-container's horizontal padding
                so the track runs edge-to-edge within the rounded section.
                The dark container's own overflow:hidden clips the peeking cards
                at its rounded corners.
              */}
              <div
                ref={trackRef}
                style={{
                  overflow: "hidden",
                  marginLeft:  "calc(-1 * clamp(20px, 5vw, 71px))",
                  marginRight: "calc(-1 * clamp(20px, 5vw, 71px))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: GAP,
                    transform: `translateX(${offsetX}px)`,
                    transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                    willChange: "transform",
                    alignItems: "stretch",
                  }}
                >
                  {REVIEWS.map((r) => (
                    <div key={r.id} style={{ width: cardW || "62%", flexShrink: 0 }}>
                      <ReviewCard {...r} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots + nav arrows */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        width: current === i ? 52 : 14,
                        height: 14,
                        borderRadius: 14,
                        background: current === i ? "#FD853A" : "rgba(228,231,236,0.5)",
                        border: "none", cursor: "pointer", padding: 0,
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <NavArrow
                    dir="prev"
                    onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                    disabled={current === 0}
                  />
                  <NavArrow
                    dir="next"
                    onClick={() => setCurrent((c) => Math.min(maxIndex, c + 1))}
                    disabled={current === maxIndex}
                  />
                </div>
              </div>

            </div>
          ) : (
            /* ── Video tab ──────────────────────────────────────── */
            <div
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              {VIDEOS.map((v) => (
                <VideoCard key={v.id} {...v} />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
