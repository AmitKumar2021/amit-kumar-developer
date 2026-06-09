"use client";

import Image from "next/image";

function Star() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#FD853A">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
        fill="#344054"
      />
      <path
        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
        fill="#344054"
      />
    </svg>
  );
}

function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="72" height="74" viewBox="0 0 72 74" fill="none">
      <path d="M4 70 C4 70, 10 10, 68 4" stroke="#FEB273" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M58 2 L68 4 L62 14" stroke="#FEB273" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--hero-bg)" }}>
      <div className="relative flex flex-col items-center px-4 pb-0">

        {/* ── Hello badge ─────────────────────────────────────────── */}
        <div className="mt-8 md:mt-10 animate-float delay-200">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium tracking-[-0.01em]"
            style={{
              background:  "rgba(255,255,255,0.10)",
              borderColor: "var(--text-900)",
              color:       "var(--text-900)",
              fontFamily:  "var(--font-outfit), sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#FD853A" }} />
            Hello!
          </div>
        </div>

        {/* ── Heading ─────────────────────────────────────────────── */}
        <h1
          className="mt-4 text-center font-semibold leading-none tracking-[-0.015em] animate-fade-in-up delay-200"
          style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize:   "clamp(40px, 7vw, 96px)",
            color:      "var(--text-900)",
          }}
        >
          I&apos;m <span style={{ color: "#FD853A" }}>Amit</span> Kumar,<br />
          Full Stack Developer
        </h1>

        {/* ── Decorative arrow ────────────────────────────────────── */}
        <CurvedArrow className="hidden md:block absolute right-[calc(50%-480px)] top-[100px] animate-fade-in delay-700" />

        {/* ─────────────────────────────────────────────────────────────
            Middle block
            • Left:   testimonial (absolute)
            • Center: photo + orange semicircle + CTA pill (all stacked)
            • Right:  stars + years (absolute)
        ──────────────────────────────────────────────────────────── */}
        <div className="relative w-full max-w-[1200px] mt-4 md:mt-0">

          {/* ── Testimonial — desktop ─────────────────────────────── */}
          <div
            className="absolute bottom-24 left-0 z-20 hidden md:flex flex-col gap-4 animate-fade-in-left delay-500"
            style={{ maxWidth: 300 }}
          >
            <QuoteIcon />
            <p
              className="text-[17px] font-medium leading-[1.5] tracking-[-0.01em]"
              style={{ color: "var(--text-700)", fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Jenny&apos;s Exceptional product design ensure our website&apos;s success.{" "}
              <em>Highly Recommended</em>
            </p>
          </div>

          {/* ── Stars + Years — desktop ───────────────────────────── */}
          <div
            className="absolute bottom-24 right-0 z-20 hidden md:flex flex-col items-end gap-4 animate-fade-in-right delay-500"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <div className="text-right">
              <p
                className="font-bold leading-none tracking-[-0.015em]"
                style={{
                  fontSize:   "clamp(32px, 3.5vw, 47px)",
                  color:      "var(--text-900)",
                  fontFamily: "var(--font-urbanist), sans-serif",
                }}
              >
                10 Years
              </p>
              <p
                className="text-[18px] tracking-[-0.01em] mt-1"
                style={{ color: "var(--text-900)", fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Experience
              </p>
            </div>
          </div>

          {/* ── Photo + semicircle + CTA pill ────────────────────── */}
          {/*
              The CTA pill lives INSIDE this container so it always renders
              on top of the orange semicircle — white text is readable there.
              paddingBottom creates the "shelf" the pill sits on.
          */}
          <div
            className="relative flex justify-center items-end animate-scale-in delay-300"
            style={{ paddingBottom: "52px" }}
          >
            {/* Orange semicircle */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full"
              style={{
                width:      "min(82%, 668px)",
                height:     "min(41vw, 370px)",
                background: "#FEB273",
              }}
            />

            {/* Person image */}
            <div
              className="relative z-10"
              style={{ width: "min(72%, 600px)", height: "min(62vw, 510px)" }}
            >
              <Image
                src="/images/ai-r.png"
                alt="Jenny – Product Designer"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* ── CTA glass pill — always over the orange area ───── */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 p-[10px] rounded-[50px] border border-white/20 animate-fade-in-up delay-600"
              style={{
                background:         "rgba(255,255,255,0.15)",
                backdropFilter:     "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                whiteSpace:         "nowrap",
              }}
            >
              {/* Portfolio button */}
              <button
                className="flex items-center gap-2 rounded-[60px] text-white font-medium tracking-[-0.015em] transition-all duration-300"
                style={{
                  background:  "#FD853A",
                  border:      "0.5px solid #D0D5DD",
                  fontFamily:  "var(--font-outfit), sans-serif",
                  fontSize:    "clamp(15px, 1.6vw, 20px)",
                  padding:     "10px 20px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(253,133,58,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Portfolio
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>

              {/* Hire me button */}
              <button
                className="rounded-[60px] font-light tracking-[-0.015em] transition-all duration-300"
                style={{
                  color:      "#FFFFFF",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   "clamp(15px, 1.6vw, 20px)",
                  padding:    "10px 20px",
                  background: "transparent",
                  /* add a subtle text-shadow so white text pops even at the edge of the orange circle */
                  textShadow: "0 1px 4px rgba(0,0,0,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                Hire me
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile testimonial + stats row ──────────────────────── */}
        <div className="flex md:hidden w-full justify-between items-start gap-4 mt-5 mb-8 px-2 animate-fade-in delay-500">
          <div className="flex flex-col gap-2 max-w-[56%]">
            <QuoteIcon />
            <p
              className="text-[13px] font-medium leading-[1.5]"
              style={{ color: "var(--text-700)", fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Jenny&apos;s Exceptional product design ensure our website&apos;s success.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FD853A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p
              className="font-bold text-[28px] leading-none tracking-[-0.015em]"
              style={{ color: "var(--text-900)", fontFamily: "var(--font-urbanist), sans-serif" }}
            >
              10 Years
            </p>
            <p
              className="text-[13px]"
              style={{ color: "var(--text-900)", fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
