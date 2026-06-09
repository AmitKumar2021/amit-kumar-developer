"use client";

import { useEffect, useRef, useState } from "react";

/* ── Timeline data ─────────────────────────────────────────────────── */
const TIMELINE = [
  {
    company: "Cognizant, Mumbai",
    period:  "Sep 2016 – July 2020",
    role:    "Experience Designer",
    desc:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Sugee Pvt Limited, Mumbai",
    period:  "Sep 2020 – July 2023",
    role:    "UI/UX Designer",
    desc:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Cinetstox, Mumbai",
    period:  "Sep 2023 – Dec 2024",
    role:    "Lead UX Designer",
    desc:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Freelance, Mumbai",
    period:  "Jan 2025 – Present",
    role:    "Senior Full Stack Developer",
    desc:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
];

/* ── Dot ───────────────────────────────────────────────────────────── */
function Dot({ active }: { active: boolean }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width:      48,
        height:     48,
        border:     "2.5px dashed #1D2939",
        flexShrink: 0,
        zIndex:     2,
        background: "var(--hero-bg)",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width:      34,
          height:     34,
          background: active ? "#FD853A" : "#1D2939",
          transition: "background 0.5s ease",
        }}
      />
    </div>
  );
}

/* ── Desktop row ────────────────────────────────────────────────────── */
function DesktopRow({
  entry,
  isLast,
  active,
}: {
  entry: (typeof TIMELINE)[number];
  isLast: boolean;
  active: boolean;
}) {
  return (
    <>
      {/* Left */}
      <div className="flex flex-col gap-3 pt-1 pr-8 text-right animate-fade-in-left delay-300">
        <p
          className="font-semibold leading-none tracking-[-0.015em]"
          style={{
            fontSize:   "clamp(20px, 2.5vw, 36px)",
            color:      "var(--text-700)",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {entry.company}
        </p>
        <p
          className="font-normal tracking-[-0.015em]"
          style={{
            fontSize:   "clamp(14px, 1.4vw, 22px)",
            color:      "#98A2B3",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {entry.period}
        </p>
      </div>

      {/* Center dot */}
      <div className="flex justify-center items-start pt-1" style={{ zIndex: 2 }}>
        <Dot active={active} />
      </div>

      {/* Right */}
      <div className={`flex flex-col gap-3 pl-8 ${!isLast ? "pb-8" : ""} animate-fade-in-right delay-300`}>
        <p
          className="font-semibold leading-none tracking-[-0.015em]"
          style={{
            fontSize:   "clamp(20px, 2.5vw, 36px)",
            color:      "var(--text-700)",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {entry.role}
        </p>
        {entry.desc && (
          <p
            className="font-medium leading-[1.4] tracking-[-0.01em]"
            style={{
              fontSize:   "clamp(13px, 1.2vw, 18px)",
              color:      "#98A2B3",
              fontFamily: "var(--font-outfit), sans-serif",
              maxWidth:   420,
            }}
          >
            {entry.desc}
          </p>
        )}
      </div>
    </>
  );
}

/* ── Mobile card ────────────────────────────────────────────────────── */
function MobileCard({
  entry,
  index,
  active,
  lineActive,
}: {
  entry: (typeof TIMELINE)[number];
  index: number;
  active: boolean;
  lineActive: boolean;
}) {
  return (
    <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
      {/* dot + connecting line */}
      <div className="flex flex-col items-center">
        <Dot active={active} />
        {index < TIMELINE.length - 1 && (
          <div
            className="flex-1 mt-2"
            style={{
              width:       2,
              borderLeft:  `2.5px dashed ${lineActive ? "#FD853A" : "#1D2939"}`,
              minHeight:   48,
              transition:  "border-color 0.5s ease",
            }}
          />
        )}
      </div>
      {/* content */}
      <div className="flex flex-col gap-2 pb-8">
        <p
          className="font-semibold leading-tight tracking-[-0.015em]"
          style={{
            fontSize:   "clamp(18px, 4.5vw, 28px)",
            color:      "var(--text-700)",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {entry.role}
        </p>
        <p
          className="font-semibold leading-tight tracking-[-0.015em]"
          style={{
            fontSize:   "clamp(15px, 3.5vw, 22px)",
            color:      "var(--text-700)",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {entry.company}
        </p>
        <p
          className="font-normal text-sm"
          style={{ color: "#98A2B3", fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {entry.period}
        </p>
        {entry.desc && (
          <p
            className="text-sm leading-normal"
            style={{ color: "#98A2B3", fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {entry.desc}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────── */
export default function WorkExperience() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [fillPct, setFillPct]     = useState(0);
  const [activeDots, setActiveDots] = useState<boolean[]>(
    TIMELINE.map((_, i) => i === 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return;

      const rect        = gridRef.current.getBoundingClientRect();
      const lineTop     = rect.top + 24;      // center of first dot
      const lineBottom  = rect.bottom - 24;   // center of last dot
      const totalLineH  = lineBottom - lineTop;

      // Use 65% of viewport height as the "fill trigger" point
      const triggerY = window.innerHeight * 0.65;
      const passed   = triggerY - lineTop;
      const pct      = Math.min(100, Math.max(0, (passed / totalLineH) * 100));
      setFillPct(pct);

      // Dot i activates when the fill line reaches its position
      const newActive = TIMELINE.map((_, i) => {
        const dotPct = i === 0 ? 0 : (i / (TIMELINE.length - 1)) * 100;
        return pct >= dotPct;
      });
      setActiveDots(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full px-4 md:px-17.75 py-16 md:py-24"
      style={{ background: "var(--hero-bg)" }}
    >
      <div className="max-w-324.5 mx-auto flex flex-col gap-14 md:gap-20">

        {/* ── Title ─────────────────────────────────────────── */}
        <h2
          className="text-center font-medium tracking-[-0.015em] leading-none animate-fade-in-up"
          style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize:   "clamp(36px, 5.5vw, 64px)",
            color:      "var(--text-700)",
          }}
        >
          My{" "}
          <span style={{ color: "#FD853A" }}>Work</span>{" "}
          Experience
        </h2>

        {/* ── Desktop timeline ─────────────────────────────── */}
        <div ref={gridRef} className="hidden md:block relative">

          {/* Background dashed line (light gray) */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top:        "24px",
              bottom:     "24px",
              width:      0,
              borderLeft: "3px dashed #D0D5DD",
              zIndex:     1,
            }}
          />

          {/* Orange fill line — scaleY grows from 0→1 as you scroll */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top:             "24px",
              bottom:          "24px",
              width:           3,
              background:      "#FD853A",
              transformOrigin: "top center",
              transform:       `scaleY(${fillPct / 100})`,
              zIndex:          1,
              transition:      "transform 0.15s linear",
            }}
          />

          <div
            className="grid items-start"
            style={{
              gridTemplateColumns: "1fr 48px 1fr",
              rowGap: "clamp(48px, 7vw, 102px)",
            }}
          >
            {TIMELINE.map((entry, i) => (
              <DesktopRow
                key={entry.company}
                entry={entry}
                isLast={i === TIMELINE.length - 1}
                active={activeDots[i]}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile timeline ──────────────────────────────── */}
        <div className="flex md:hidden flex-col">
          {TIMELINE.map((entry, i) => (
            <MobileCard
              key={entry.company}
              entry={entry}
              index={i}
              active={activeDots[i]}
              lineActive={activeDots[i + 1] ?? false}
            />
          ))}
        </div>

        {/* ── Scroll-down indicator ─────────────────────────── */}
        <div className="flex justify-center pt-4">
          <div className="flex flex-col items-center gap-2 animate-fade-in delay-500">
            <span
              className="text-xs font-medium uppercase"
              style={{
                color:       "#98A2B3",
                fontFamily:  "var(--font-outfit), sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Scroll
            </span>
            <div
              className="flex flex-col items-center gap-1 animate-bounce-dot"
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollBy({ top: 400, behavior: "smooth" })}
            >
              <span
                style={{
                  display:    "block",
                  width:      12,
                  height:     12,
                  borderRadius: "50%",
                  background: "#FD853A",
                }}
              />
              <span
                style={{
                  display:    "block",
                  width:      2,
                  height:     28,
                  background: "linear-gradient(to bottom, #FD853A, transparent)",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
