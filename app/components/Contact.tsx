"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "../actions/contact";

/* India first so it's the default */
const COUNTRY_CODES = [
  { code: "+91",  label: "🇮🇳 +91"  },
  { code: "+1",   label: "🇺🇸 +1"   },
  { code: "+44",  label: "🇬🇧 +44"  },
  { code: "+61",  label: "🇦🇺 +61"  },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+49",  label: "🇩🇪 +49"  },
  { code: "+33",  label: "🇫🇷 +33"  },
  { code: "+39",  label: "🇮🇹 +39"  },
  { code: "+34",  label: "🇪🇸 +34"  },
  { code: "+55",  label: "🇧🇷 +55"  },
  { code: "+86",  label: "🇨🇳 +86"  },
  { code: "+81",  label: "🇯🇵 +81"  },
  { code: "+82",  label: "🇰🇷 +82"  },
  { code: "+92",  label: "🇵🇰 +92"  },
  { code: "+880", label: "🇧🇩 +880" },
  { code: "+20",  label: "🇪🇬 +20"  },
  { code: "+27",  label: "🇿🇦 +27"  },
  { code: "+7",   label: "🇷🇺 +7"   },
  { code: "+90",  label: "🇹🇷 +90"  },
];

const STATS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FD853A">
        <path d="M12 2L14.4 9.2H22L16.3 13.8L18.7 21L12 16.4L5.3 21L7.7 13.8L2 9.2H9.6L12 2Z" />
      </svg>
    ),
    text: "4.9/5 Average Ratings",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="#FD853A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    text: "25+ Winning Awards",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="#FD853A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    text: "Certified Product Designer",
  },
];

/* ── Send button — reads pending from form context ─────── */
function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="c-send-btn">
      {pending ? (
        <>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
            style={{ animation: "c-spin 1s linear infinite" }}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          Sending…
        </>
      ) : (
        <>
          Send
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </>
      )}
    </button>
  );
}

/* ── Section ────────────────────────────────────────────── */
export default function Contact() {
  const [state, formAction] = useActionState(submitContact, { error: "" });

  return (
    <section
      className="w-full px-4 md:px-6 lg:px-10 py-16 md:py-24"
      style={{ background: "var(--bg-page)" }}
    >
      {/* ── scoped styles ──────────────────────────────── */}
      <style>{`
        @keyframes c-spin { to { transform: rotate(360deg); } }

        /* ── pill wrapper ── */
        .c-pill {
          display: flex;
          align-items: center;
          width: 100%;
          background: var(--bg-card);
          border-radius: 100px;
          border: 1.5px solid #E4E7EC;
          box-shadow: 0 4px 28px rgba(0,0,0,0.07);
          padding: 6px;
          gap: 0;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .c-pill:focus-within {
          border-color: #FD853A;
          box-shadow: 0 4px 28px rgba(253,133,58,0.13);
        }

        /* ── individual field slot ── */
        .c-field {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          color: #98A2B3;
        }
        .c-field svg { flex-shrink: 0; }

        /* ── bare input inside pill ── */
        .c-input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(13px, 1.05vw, 15px);
          color: var(--text-900);
          padding: 14px 0;
        }
        .c-input::placeholder { color: #98A2B3; }

        /* ── country-code select ── */
        .c-select {
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(13px, 1.05vw, 15px);
          color: var(--text-900);
          cursor: pointer;
          padding: 14px 0;
          appearance: none;
          -webkit-appearance: none;
          max-width: 92px;
          flex-shrink: 0;
        }

        /* ── vertical divider between fields ── */
        .c-div {
          width: 1.5px;
          height: 26px;
          background: #E4E7EC;
          flex-shrink: 0;
        }
        /* mini divider inside phone field (between code & number) */
        .c-div-sm {
          width: 1px;
          height: 18px;
          background: #D0D5DD;
          flex-shrink: 0;
          margin: 0 4px;
        }

        /* ── send button ── */
        .c-send-btn {
          flex-shrink: 0;
          background: #FD853A;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 13px 32px;
          font-family: var(--font-outfit), sans-serif;
          font-size: clamp(13px, 1.05vw, 16px);
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .c-send-btn:disabled { background: #FDA96A; cursor: not-allowed; }
        .c-send-btn:not(:disabled):hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(253,133,58,0.42);
        }

        /* ── mobile: stack fields ── */
        @media (max-width: 767px) {
          .c-pill {
            flex-direction: column;
            border-radius: 20px;
            padding: 12px;
            gap: 10px;
            align-items: stretch;
          }
          .c-field {
            padding: 4px 12px;
            border: 1.5px solid #E4E7EC;
            border-radius: 12px;
          }
          .c-input  { padding: 10px 0; }
          .c-select { padding: 10px 0; }
          .c-send-btn {
            justify-content: center;
            border-radius: 12px;
            padding: 14px;
          }
          .c-div { display: none; }
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-10">

        {/* ── Title ──────────────────────────────────────── */}
        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 700,
            color: "var(--text-900)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Have an Awesome Project
          <br />
          Idea?{" "}
          <span style={{ color: "#FD853A", fontStyle: "italic" }}>
            Let&apos;s Discuss
          </span>
        </h2>

        {/* ── Single-line pill form ───────────────────────── */}
        <form action={formAction} className="c-pill">

          {/* Full Name */}
          <div className="c-field">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="c-input"
            />
          </div>

          <div className="c-div" />

          {/* Email */}
          <div className="c-field">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="c-input"
            />
          </div>

          <div className="c-div" />

          {/* Phone — country code + number */}
          <div className="c-field">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {/* Country code */}
            <select name="countryCode" defaultValue="+91" className="c-select">
              {COUNTRY_CODES.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
            <div className="c-div-sm" />
            {/* Phone number */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="c-input"
            />
          </div>

          {/* Send button */}
          <SendButton />
        </form>

        {/* Error */}
        {state?.error && (
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: 14, color: "#EF4444", margin: 0,
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EF4444"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {state.error}
          </p>
        )}

        {/* ── Stats row ──────────────────────────────────── */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 44px" }}>
          {STATS.map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 500,
                color: "var(--text-700)",
              }}
            >
              {icon}
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
