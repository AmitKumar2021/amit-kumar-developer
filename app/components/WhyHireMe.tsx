"use client";

import Image from "next/image";

const STATS = [
  { value: "40+", label: "Projects Completed" },
  { value: "5+",  label: "Years Experience" },
];

export default function WhyHireMe() {
  return (
    <section
      className="w-full px-4 md:px-17.75 py-16 md:py-24"
      style={{ background: "var(--bg-page)" }}
    >
      <div className="max-w-324.5 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

          {/* ── Left: image ─────────────────────────────────────── */}
          <div
            className="relative flex-shrink-0 animate-fade-in-left delay-200"
            style={{ width: "clamp(280px, 42%, 520px)", aspectRatio: "1 / 1.05" }}
          >
            {/* Orange blob behind image */}
            <div
              className="absolute"
              style={{
                width:        "82%",
                height:       "82%",
                background:   "#FEB273",
                borderRadius: "50%",
                bottom:       "4%",
                left:         "50%",
                transform:    "translateX(-50%)",
                zIndex:       0,
              }}
            />

            {/* Person image */}
            <div className="relative w-full h-full" style={{ zIndex: 1 }}>
              <Image
                src="/images/why-u-i.png"
                alt="Why Hire Me"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* ── Right: content ──────────────────────────────────── */}
          <div className="flex flex-col gap-6 md:gap-8 flex-1 animate-fade-in-right delay-300">

            {/* Heading */}
            <h2
              className="font-medium leading-none tracking-[-0.015em]"
              style={{
                fontFamily: "var(--font-urbanist), sans-serif",
                fontSize:   "clamp(34px, 5vw, 64px)",
                color:      "var(--text-700)",
              }}
            >
              Why{" "}
              <span style={{ color: "#FD853A" }}>Hire me?</span>
            </h2>

            {/* Description */}
            <p
              className="font-normal leading-relaxed tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize:   "clamp(14px, 1.4vw, 20px)",
                color:      "#98A2B3",
                maxWidth:   520,
              }}
            >
              5+ years building fast, clean websites for clients across India and overseas.
              I specialise in WordPress, PHP, and front-end development — delivering on time,
              within budget, and built to rank on Google.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-10 md:gap-14">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p
                    className="font-bold leading-none tracking-[-0.02em]"
                    style={{
                      fontFamily: "var(--font-urbanist), sans-serif",
                      fontSize:   "clamp(28px, 3.5vw, 48px)",
                      color:      "var(--text-900)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-normal tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize:   "clamp(13px, 1.2vw, 18px)",
                      color:      "#98A2B3",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Hire me button */}
            <div>
              <button
                className="rounded-[60px] font-medium tracking-[-0.015em] transition-all duration-300"
                style={{
                  fontFamily:  "var(--font-outfit), sans-serif",
                  fontSize:    "clamp(15px, 1.5vw, 20px)",
                  color:       "var(--text-900)",
                  background:  "transparent",
                  border:      "1.5px solid var(--text-900)",
                  padding:     "14px 40px",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.background = "#FD853A";
                  btn.style.borderColor = "#FD853A";
                  btn.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.background = "transparent";
                  btn.style.borderColor = "var(--text-900)";
                  btn.style.color = "var(--text-900)";
                }}
              >
                Hire me
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
