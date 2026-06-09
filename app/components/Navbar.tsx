"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LEFT_LINKS  = ["Home", "About", "Service"];
const RIGHT_LINKS = ["Resume", "Project", "Contact"];

export default function Navbar() {
  const [active, setActive]   = useState("Home");
  const [menuOpen, setMenu]   = useState(false);

  const NavBtn = ({ label }: { label: string }) => (
    <button
      onClick={() => { setActive(label); setMenu(false); }}
      className="relative px-5 py-3 rounded-[60px] text-white text-[17px] tracking-[-0.015em] transition-all duration-300 group"
      style={{
        fontFamily:  "var(--font-outfit), sans-serif",
        fontWeight:  active === label ? 700 : 400,
        background:  active === label ? "#FD853A" : "transparent",
      }}
    >
      {label}
      {active !== label && (
        <span
          className="absolute inset-0 rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
      )}
    </button>
  );

  return (
    <header className="w-full flex justify-center px-4 pt-5 pb-2 relative z-50 animate-fade-in">
      {/* ── Desktop nav ──────────────────────────────────────────── */}
      <nav
        className="hidden md:flex flex-row justify-between items-center px-3 gap-2 rounded-[50px] w-full max-w-[1298px] h-[86px]"
        style={{ background: "var(--nav-bg)" }}
      >
        {/* Left links */}
        <div className="flex items-center gap-1">
          {LEFT_LINKS.map((l) => <NavBtn key={l} label={l} />)}
        </div>

        {/* Logo (center) */}
        <div className="flex items-center gap-3 px-6 py-5 min-w-[160px] justify-center">
          <div
            className="w-[46px] h-[46px] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-ring"
            style={{ background: "#FD853A" }}
          >
            {/* J-lettermark SVG */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 3v12c0 2.2-1.5 3.5-3.5 3.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M11 3l4 16M15 19l4-16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span
            className="text-white font-bold text-[22px] tracking-tight"
            style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
          >
            JCREA
          </span>
        </div>

        {/* Right links + toggle */}
        <div className="flex items-center gap-1">
          {RIGHT_LINKS.map((l) => <NavBtn key={l} label={l} />)}
          <ThemeToggle />
        </div>
      </nav>

      {/* ── Mobile nav ───────────────────────────────────────────── */}
      <nav
        className="flex md:hidden flex-row justify-between items-center px-4 rounded-[50px] w-full h-[68px]"
        style={{ background: "var(--nav-bg)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-[38px] h-[38px] rounded-full flex items-center justify-center"
            style={{ background: "#FD853A" }}
          >
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M5 3v12c0 2.2-1.5 3.5-3.5 3.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M11 3l4 16M15 19l4-16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span
            className="text-white font-bold text-[18px]"
            style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
          >
            JCREA
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenu(!menuOpen)}
            className="flex flex-col gap-[5px] p-2"
          >
            <span
              className="block h-[2px] w-5 rounded transition-all duration-300"
              style={{
                background: "#fff",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-5 rounded transition-all duration-300"
              style={{
                background: "#fff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] w-5 rounded transition-all duration-300"
              style={{
                background: "#fff",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ─────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="absolute top-[80px] left-4 right-4 rounded-[24px] py-4 px-4 flex flex-col gap-1 z-50 animate-fade-in"
          style={{ background: "var(--nav-bg)" }}
        >
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((l) => (
            <button
              key={l}
              onClick={() => { setActive(l); setMenu(false); }}
              className="text-left px-4 py-3 rounded-[14px] text-white text-[16px] transition-all duration-200"
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: active === l ? 700 : 400,
                background:  active === l ? "#FD853A" : "transparent",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
