"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── 6 service cards ───────────────────────────────────────────────── */
const SERVICES = [
  {
    title: "WordPress Development",
    image: "/images/card-1.png",
    fallback: "linear-gradient(145deg,#C8A882,#A07850)",
  },
  {
    title: "PHP & Custom Dev",
    image: "/images/card-2.png",
    fallback: "linear-gradient(145deg,#E8905A,#C06030)",
  },
  {
    title: "E-Commerce Stores",
    image: "/images/card-3.png",
    fallback: "linear-gradient(145deg,#8AAEC8,#507090)",
  },
  {
    title: "SEO Optimisation",
    image: "/images/card-4.png",
    fallback: "linear-gradient(145deg,#A882C8,#705090)",
  },
  {
    title: "API Integration",
    image: "/images/card-5.png",
    fallback: "linear-gradient(145deg,#82C8A0,#509068)",
  },
  {
    title: "Website Maintenance",
    image: "/images/card-6.png",
    fallback: "linear-gradient(145deg,#C8B882,#908050)",
  },
];

const GAP = 28; // px gap between cards

/* ── Mockup placeholder ────────────────────────────────────────────── */
function Mockup({ bg }: { bg: string }) {
  return (
    <div
      className="w-full h-full rounded-[35px] overflow-hidden relative"
      style={{ background: bg }}
    >
      <div className="absolute inset-0 p-5 flex flex-col gap-3 opacity-60">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 rounded-full bg-white/50" />
          <div className="flex-1 h-3 rounded-full bg-white/30" />
        </div>
        <div className="h-[36%] rounded-2xl bg-white/20" />
        <div className="flex gap-2 flex-1">
          <div className="flex-1 rounded-xl bg-white/25" />
          <div className="flex-1 rounded-xl bg-white/15" />
          <div className="flex-1 rounded-xl bg-white/20" />
        </div>
        <div className="h-6 w-2/3 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/* ── Arrow ↗ CTA button inside card ───────────────────────────────── */
function CardArrow() {
  return (
    <button
      className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:brightness-125"
      style={{ width: 78, height: 78, background: "#1D2939", flexShrink: 0 }}
    >
      <svg
        width="34" height="34" viewBox="0 0 24 24" fill="none"
        stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </button>
  );
}

/* ── Single card ───────────────────────────────────────────────────── */
function ServiceCard({
  title, image, fallback,
}: { title: string; image: string; fallback: string }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div
      className="relative w-full rounded-[35px] overflow-hidden group"
      style={{ height: "clamp(340px, 38vw, 508px)", background: "#3C3C3C" }}
    >
      {/* glass overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "rgba(104,104,104,0.18)",
          backdropFilter: "blur(7.5px)",
        }}
      />

      {/* title + divider */}
      <div className="absolute left-0 right-0 top-10 z-10 flex flex-col gap-5 px-8">
        <h3
          className="text-white font-medium tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(18px, 1.8vw, 30px)",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <div style={{ height: 2, background: "rgba(249,250,251,0.28)" }} />
      </div>

      {/* stacked preview */}
      <div
        className="absolute left-0 right-0 bottom-[78px] z-[5]"
        style={{ height: "56%" }}
      >
        {/* back */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-5"
          style={{
            width: "79%", height: "100%",
            background: "rgba(117,117,117,0.45)",
            borderRadius: 28,
          }}
        />
        {/* mid */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-2.5"
          style={{
            width: "90%", height: "100%",
            background: "#9E9D9D",
            borderRadius: 30,
          }}
        />
        {/* front */}
        <div
          className="absolute left-0 right-0 bottom-0 overflow-hidden"
          style={{ height: "94%", borderRadius: 32 }}
        >
          {imgOk ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={image} alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <Mockup bg={fallback} />
          )}
        </div>
      </div>

      {/* CTA arrow */}
      <div className="absolute bottom-4 right-4 z-[15]">
        <CardArrow />
      </div>

      {/* hover ring */}
      <div
        className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[20]"
        style={{ boxShadow: "inset 0 0 0 2px rgba(253,133,58,0.55)" }}
      />
    </div>
  );
}

/* ── Nav arrow (prev / next) ───────────────────────────────────────── */
function NavArrow({
  dir, onClick, disabled,
}: { dir: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        width: 48, height: 48,
        background: disabled ? "rgba(255,255,255,0.08)" : "#FD853A",
        opacity: disabled ? 0.4 : 1,
        flexShrink: 0,
      }}
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

/* ── Dots ──────────────────────────────────────────────────────────── */
function Dots({
  total, active, onChange,
}: { total: number; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className="rounded-full transition-all duration-300"
          style={{
            width:      active === i ? 52 : 14,
            height:     14,
            background: active === i ? "#FD853A" : "rgba(228,231,236,0.6)",
          }}
        />
      ))}
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────── */
export default function Services() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardW, setCardW]     = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  /* measure card width on mount + resize */
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const containerW = trackRef.current.offsetWidth;
    const v =
      window.innerWidth >= 1024 ? 3 :
      window.innerWidth >= 640  ? 2 : 1;
    setVisible(v);
    setCardW((containerW - GAP * (v - 1)) / v);
    setCurrent((c) => Math.min(c, Math.max(0, SERVICES.length - v)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = SERVICES.length - visible; // 3 for desktop
  const dotCount = maxIndex + 1;              // 4 dots on desktop

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-8 animate-fade-in-up delay-200">
      <div
        className="relative w-full rounded-[50px] overflow-hidden"
        style={{
          background: `url('/images/background-1.png') center/cover no-repeat, #171717`,
          padding: "clamp(48px, 8vw, 116px) clamp(20px, 5vw, 71px)",
        }}
      >
        {/* scrim — keep it light so the background texture shows through */}
        <div
          className="absolute inset-0 rounded-[50px] pointer-events-none"
          style={{ background: "rgba(15,15,15,0.30)", zIndex: 0 }}
        />

        <div className="relative z-10 max-w-[1299px] mx-auto flex flex-col gap-14">

          {/* ── Header ────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
            <h2
              className="font-medium leading-none tracking-[-0.015em]"
              style={{
                fontFamily: "var(--font-urbanist), sans-serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                color: "#FCFCFD",
              }}
            >
              My <span style={{ color: "#FD853A" }}>Services</span>
            </h2>
            <p
              className="font-medium leading-[1.5] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(13px, 1.35vw, 20px)",
                color: "#FFFFFF",
                maxWidth: 576,
              }}
            >
              From custom WordPress builds to full e-commerce stores — fast,
              clean, and SEO-ready websites that help your business grow online.
            </p>
          </div>

          {/* ── Slider track ──────────────────────────────────── */}
          <div ref={trackRef} className="w-full overflow-hidden">
            <div
              className="flex"
              style={{
                gap: GAP,
                transform: `translateX(-${current * (cardW + GAP)}px)`,
                transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            >
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  style={{ width: cardW, flexShrink: 0 }}
                >
                  <ServiceCard {...s} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls: dots + prev/next ─────────────────────── */}
          <div className="flex items-center justify-between gap-4">
            <Dots total={dotCount} active={current} onChange={setCurrent} />
            <div className="flex items-center gap-3">
              <NavArrow dir="prev" onClick={prev} disabled={current === 0} />
              <NavArrow dir="next" onClick={next} disabled={current === maxIndex} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
