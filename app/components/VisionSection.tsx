"use client";

import Image from "next/image";

const LINKS = ["Evaluation & Design", "Custom software", "Web Development"];

const STATS = [
  { value: "12+",    label: "Years Of",     sub: "Experience"  },
  { value: "2,554+", label: "Success",      sub: "Projects"    },
  { value: "154+",   label: "Professional", sub: "Teams"       },
  { value: "25+",    label: "Modern",       sub: "Offices"     },
];

export default function VisionSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 pt-2 pb-6 animate-fade-in-up delay-200">

      {/* ── Main panel ─ full padded width, content capped at 1298px ─ */}
      <div
        className="relative w-full rounded-[50px] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 80% 8%, rgba(110,38,5,0.92) 0%, rgba(70,20,3,0.45) 42%, transparent 62%), #0A0A0A",
          height: "clamp(400px, 52vw, 700px)",
        }}
      >
        {/* inner content wrapper — caps layout at 1298px */}
        <div
          className="relative mx-auto h-full"
          style={{ maxWidth: 1298 }}
        >

          {/* "Your Vision" ─ top-left */}
          <h2
            className="absolute top-0 left-0 z-[2] font-bold leading-none"
            style={{
              fontFamily:    "var(--font-urbanist), sans-serif",
              fontSize:      "clamp(42px, 9.5vw, 138px)",
              letterSpacing: "-0.03em",
              color:         "#FFFFFF",
              padding:       "clamp(24px, 3.5vw, 44px) clamp(24px, 4vw, 56px) 0",
            }}
          >
            Your Vision
          </h2>

          {/* "Our Code" ─ bottom-right */}
          <h2
            className="absolute bottom-0 right-0 z-[2] font-bold leading-none"
            style={{
              fontFamily:    "var(--font-urbanist), sans-serif",
              fontSize:      "clamp(42px, 9.5vw, 138px)",
              letterSpacing: "-0.03em",
              color:         "#FFFFFF",
              padding:       "0 clamp(24px, 4vw, 56px) clamp(18px, 2.8vw, 36px)",
            }}
          >
            Our Code
          </h2>

          {/* Laptop — centered, above text layer */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div
              className="relative"
              style={{ width: "clamp(280px, 54%, 660px)", aspectRatio: "1 / 1.1" }}
            >
              <Image
                src="/images/Image-Laptop-Hiro-Pemogan-1.png"
                alt="Dashboard preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Left: service links (desktop) */}
          <div className="absolute left-[clamp(24px,4vw,56px)] top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   "clamp(12px, 1.1vw, 16px)",
                  color:      "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FD853A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Top-right: orange dot + card (desktop) */}
          <div
            className="absolute z-20 hidden md:flex flex-col items-end gap-3"
            style={{ top: "clamp(24px,3.5vw,44px)", right: "clamp(24px,4vw,56px)" }}
          >
            <div
              style={{
                width:        "clamp(36px,3.2vw,52px)",
                height:       "clamp(36px,3.2vw,52px)",
                borderRadius: "50%",
                background:   "#FD853A",
                flexShrink:   0,
              }}
            />
            <div
              style={{
                background:           "rgba(20,28,40,0.92)",
                backdropFilter:       "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius:         16,
                padding:              "14px 16px",
                maxWidth:             196,
                border:               "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   13,
                  color:      "#FFFFFF",
                  lineHeight: 1.55,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Bottom-right: years badge (desktop) */}
          <div
            className="absolute z-20 hidden md:block"
            style={{
              bottom:               "clamp(60px,9vw,110px)",
              right:                "clamp(24px,4vw,56px)",
              background:           "rgba(20,28,40,0.92)",
              backdropFilter:       "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius:         14,
              padding:              "14px 20px",
              border:               "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-baseline gap-[6px]">
              <span
                style={{
                  fontFamily: "var(--font-urbanist), sans-serif",
                  fontSize:   "clamp(20px,2.4vw,32px)",
                  fontWeight: 700,
                  color:      "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                12+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   12,
                  color:      "rgba(255,255,255,0.58)",
                }}
              >
                Years Of
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize:   12,
                color:      "rgba(255,255,255,0.58)",
                marginTop:  4,
              }}
            >
              Experience
            </p>
          </div>

          {/* Bottom-left: quote card + CTA (desktop) */}
          <div
            className="absolute z-20 hidden md:block"
            style={{
              bottom:               "clamp(50px,7.5vw,90px)",
              left:                 "clamp(24px,4vw,56px)",
              background:           "rgba(20,28,40,0.92)",
              backdropFilter:       "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius:         18,
              padding:              "16px 18px",
              maxWidth:             220,
              border:               "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                fontFamily:   "var(--font-outfit), sans-serif",
                fontSize:     13,
                color:        "rgba(255,255,255,0.58)",
                lineHeight:   1.55,
                marginBottom: 14,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="transition-all duration-300"
              style={{
                background:   "#FD853A",
                color:        "#FFFFFF",
                fontFamily:   "var(--font-outfit), sans-serif",
                fontSize:     13,
                fontWeight:   600,
                padding:      "8px 20px",
                borderRadius: 60,
                border:       "none",
                cursor:       "pointer",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "scale(1.05)";
                b.style.boxShadow = "0 6px 20px rgba(253,133,58,0.45)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "scale(1)";
                b.style.boxShadow = "none";
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile: links + CTA */}
          <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-end pb-10 px-6 gap-4">
            <div className="flex gap-4 flex-wrap">
              {LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize:   13,
                    color:      "rgba(255,255,255,0.55)",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
            <button
              style={{
                background:   "#FD853A",
                color:        "#FFFFFF",
                fontFamily:   "var(--font-outfit), sans-serif",
                fontSize:     14,
                fontWeight:   600,
                padding:      "10px 24px",
                borderRadius: 60,
                border:       "none",
                alignSelf:    "flex-start",
                cursor:       "pointer",
              }}
            >
              Get Started
            </button>
          </div>

        </div>
      </div>

      {/* ── Stats bar ─ full padded width, grid capped at 1298px ─────── */}
      <div
        className="mt-3 w-full rounded-[28px] p-3"
        style={{ background: "#0F0F0F" }}
      >
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ maxWidth: 1298 }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="rounded-[20px] px-5 py-5"
              style={{
                background: "#161616",
                border:     i === 2 ? "2px solid #FD853A" : "2px solid transparent",
              }}
            >
              <div className="flex items-baseline gap-[6px] flex-wrap">
                <span
                  style={{
                    fontFamily:    "var(--font-urbanist), sans-serif",
                    fontSize:      "clamp(20px,2.4vw,34px)",
                    fontWeight:    700,
                    letterSpacing: "-0.02em",
                    color:         "#FFFFFF",
                    lineHeight:    1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize:   "clamp(10px,0.85vw,13px)",
                    color:      "rgba(255,255,255,0.52)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize:   "clamp(10px,0.85vw,13px)",
                  color:      "rgba(255,255,255,0.52)",
                  marginTop:  5,
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
