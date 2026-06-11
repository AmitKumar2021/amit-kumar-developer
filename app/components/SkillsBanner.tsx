  "use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "CMS Development",
  "Web Application Development",
  "Frontend Development",
  "UI/UX Design",
  "Branding & Identity",
  "Mobile App Development",
  "E-Commerce Solutions",
  "Custom Software",
];

/* ── One scrolling strip ──────────────────────────────────── */
function Strip({
  direction,
  bg,
  speed = 20000,
}: {
  direction: "left" | "right";
  bg: string;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<Animation | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    /* translateX(-50%) = exactly one full set of items, so the loop is seamless */
    const frames =
      direction === "left"
        ? [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }]
        : [{ transform: "translateX(-50%)" }, { transform: "translateX(0)" }];

    const anim = el.animate(frames, {
      duration: speed,
      iterations: Infinity,
      easing: "linear",
    });

    animRef.current = anim;
    return () => anim.cancel();
  }, [direction, speed]);

  /* double the items for the seamless -50% trick */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ overflow: "hidden", background: bg }}>
      <div
        ref={trackRef}
        style={{ display: "flex", width: "max-content", alignItems: "center" }}
      >
        {doubled.map((label, i) => (
          <span
            key={i}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            10,
              padding:        "13px 28px 13px 0",
              fontFamily:     "var(--font-outfit), sans-serif",
              fontSize:       "clamp(13px, 1.3vw, 17px)",
              fontWeight:     600,
              letterSpacing:  "0.01em",
              color:          "#FFFFFF",
              whiteSpace:     "nowrap",
              userSelect:     "none",
            }}
          >
            <svg
              width="10" height="10" viewBox="0 0 10 10"
              style={{ flexShrink: 0, opacity: 0.75 }}
            >
              <path
                d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88Z"
                fill="currentColor"
              />
            </svg>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function SkillsBanner() {
  return (
    <section
      style={{
        position:   "relative",
        background: "var(--bg-page)",
        overflow:   "hidden",
        height:     "clamp(160px, 18vw, 220px)",
      }}
    >
      {/* Strip 1 — red, tilts / , centred vertically */}
      <div
        style={{
          position:  "absolute",
          top:       "calc(50% - 23px)",
          left:      "-20%",
          right:     "-20%",
          zIndex:    1,
          transform: "rotate(-7deg)",
        }}
      >
        <Strip direction="left" bg="#D93B1F" speed={18000} />
      </div>

      {/* Strip 2 — black, tilts \ , centred vertically — crosses strip 1 at section centre */}
      <div
        style={{
          position:  "absolute",
          top:       "calc(50% - 23px)",
          left:      "-20%",
          right:     "-20%",
          zIndex:    2,
          transform: "rotate(7deg)",
        }}
      >
        <Strip direction="right" bg="#111111" speed={22000} />
      </div>
    </section>
  );
}
