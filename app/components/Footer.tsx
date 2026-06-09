"use client";

import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitHireModal } from "../actions/contact";

/* ── Country codes (India default) ────────────────────── */
const COUNTRY_CODES = [
  { code: "+91",  label: "🇮🇳 +91"  },
  { code: "+1",   label: "🇺🇸 +1"   },
  { code: "+44",  label: "🇬🇧 +44"  },
  { code: "+61",  label: "🇦🇺 +61"  },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+49",  label: "🇩🇪 +49"  },
  { code: "+33",  label: "🇫🇷 +33"  },
  { code: "+92",  label: "🇵🇰 +92"  },
  { code: "+880", label: "🇧🇩 +880" },
  { code: "+86",  label: "🇨🇳 +86"  },
  { code: "+81",  label: "🇯🇵 +81"  },
  { code: "+55",  label: "🇧🇷 +55"  },
  { code: "+20",  label: "🇪🇬 +20"  },
  { code: "+27",  label: "🇿🇦 +27"  },
  { code: "+7",   label: "🇷🇺 +7"   },
  { code: "+90",  label: "🇹🇷 +90"  },
];

const NAV_LINKS   = ["Home", "About Us", "Service", "Resume", "Project"];
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    url: "#",
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1D2939"/>
      </svg>
    ),
    url: "#",
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.492a.5.5 0 0 0 .611.611l5.647-1.478A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.91 0-3.694-.498-5.24-1.368l-.376-.217-3.898 1.02 1.02-3.898-.217-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    url: "#",
  },
  {
    label: "Behance",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.shutterstock-9.81c-1.741 0-2.745.852-2.99 2.478h5.788c-.179-1.52-1.004-2.479-2.798-2.479z"/>
        <path d="M7.375 14.096c.91 0 1.445-.514 1.445-1.359 0-.876-.535-1.356-1.5-1.356H4.5v2.715h2.875zm-.354-5.439c.864 0 1.329-.433 1.329-1.218 0-.72-.444-1.153-1.329-1.153H4.5v2.371h2.521z"/>
        <path d="M9.625 11.975c1.057.499 1.604 1.372 1.604 2.56 0 2.055-1.604 3.095-4.022 3.095H2V5h4.864c2.378 0 3.916 1.037 3.916 2.98 0 1.097-.476 1.888-1.155 2.345v.65z"/>
      </svg>
    ),
    url: "#",
  },
  {
    label: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    url: "#",
  },
];

/* ── Modal submit button ────────────────────────────────── */
function ModalSendBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        width: "100%",
        background: pending ? "#FDA96A" : "#FD853A",
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: "14px",
        fontFamily: "var(--font-outfit), sans-serif",
        fontSize: 16, fontWeight: 600,
        cursor: pending ? "not-allowed" : "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}
      onMouseEnter={e => {
        if (!pending) {
          const b = e.currentTarget as HTMLButtonElement;
          b.style.transform = "scale(1.02)";
          b.style.boxShadow = "0 8px 24px rgba(253,133,58,0.45)";
        }
      }}
      onMouseLeave={e => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.transform = "scale(1)";
        b.style.boxShadow = "none";
      }}
    >
      {pending ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
            style={{ animation: "ft-spin 1s linear infinite" }}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
          Sending…
        </>
      ) : (
        <>Send Message
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </>
      )}
    </button>
  );
}

/* ── Hire Me modal ──────────────────────────────────────── */
function HireModal({ onClose }: { onClose: () => void }) {
  const [state, formAction] = useActionState(submitHireModal, { error: "", success: false });
  const overlayRef = useRef<HTMLDivElement>(null);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    height: 50,
    border: "1.5px solid #E4E7EC",
    borderRadius: 12,
    padding: "0 14px 0 42px",
    fontFamily: "var(--font-outfit), sans-serif",
    fontSize: 15,
    color: "var(--text-900)",
    background: "var(--bg-card)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#FD853A";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(253,133,58,0.12)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#E4E7EC";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.65)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
        animation: "ft-fadein 0.2s ease both",
      }}
    >
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: 24,
          padding: "clamp(24px,4vw,40px)",
          width: "100%",
          maxWidth: 520,
          position: "relative",
          animation: "ft-scaleup 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
          boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 18,
            width: 36, height: 36, borderRadius: "50%",
            background: "#F2F4F7", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#E4E7EC"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#F2F4F7"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="#667085" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {state.success ? (
          /* ── Success state ── */
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "rgba(253,133,58,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="#FD853A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: 26, fontWeight: 700, color: "var(--text-900)",
              margin: "0 0 10px", letterSpacing: "-0.01em",
            }}>Message Sent!</h3>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 15, color: "var(--text-700)", margin: "0 0 28px",
            }}>
              Thanks for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
            <button onClick={onClose} style={{
              background: "#FD853A", color: "#fff", border: "none",
              borderRadius: 100, padding: "12px 32px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 15, fontWeight: 500, cursor: "pointer",
            }}>
              Close
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <>
            <h3 style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: "clamp(22px,3vw,30px)", fontWeight: 700,
              color: "var(--text-900)", margin: "0 0 6px",
              letterSpacing: "-0.015em",
            }}>
              Let&apos;s Work{" "}
              <span style={{ color: "#FD853A" }}>Together</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 14, color: "var(--text-700)",
              margin: "0 0 24px",
            }}>
              Fill in the details below and I&apos;ll get back to you shortly.
            </p>

            <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Full Name */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#98A2B3", pointerEvents: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input name="name" type="text" placeholder="Full Name" required style={fieldStyle} onFocus={focusStyle} onBlur={blurStyle}/>
              </div>

              {/* Email */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#98A2B3", pointerEvents: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <input name="email" type="email" placeholder="Email Address" required style={fieldStyle} onFocus={focusStyle} onBlur={blurStyle}/>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", gap: 10 }}>
                <select name="countryCode" defaultValue="+91"
                  style={{
                    height: 50, border: "1.5px solid #E4E7EC", borderRadius: 12,
                    padding: "0 10px",
                    fontFamily: "var(--font-outfit), sans-serif", fontSize: 14,
                    color: "var(--text-900)", background: "var(--bg-card)",
                    cursor: "pointer", outline: "none",
                    appearance: "none", WebkitAppearance: "none",
                    minWidth: 92, flexShrink: 0,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={focusStyle} onBlur={blurStyle}
                >
                  {COUNTRY_CODES.map(({ code, label }) => (
                    <option key={code} value={code}>{label}</option>
                  ))}
                </select>
                <div style={{ position: "relative", flex: 1 }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#98A2B3", pointerEvents: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <input name="phone" type="tel" placeholder="Phone Number" style={{ ...fieldStyle, paddingLeft: 42 }} onFocus={focusStyle} onBlur={blurStyle}/>
                </div>
              </div>

              {/* Error */}
              {state.error && (
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 13, color: "#EF4444", margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {state.error}
                </p>
              )}

              <ModalSendBtn />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <style>{`
        @keyframes ft-spin    { to { transform: rotate(360deg); } }
        @keyframes ft-fadein  { from { opacity:0; } to { opacity:1; } }
        @keyframes ft-scaleup { from { opacity:0; transform:scale(0.92); } to { opacity:1; transform:scale(1); } }
      `}</style>

      <footer style={{ background: "#171717", color: "#fff" }}>

        {/* ── CTA bar ──────────────────────────────────────── */}
        <div style={{
          padding: "clamp(40px,6vw,72px) clamp(20px,5vw,80px)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 20,
          flexWrap: "wrap",
        }}>
          <h2 style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(28px,4.5vw,56px)",
            fontWeight: 700, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            margin: 0,
          }}>
            Lets Connect there
          </h2>

          <button
            onClick={() => setModalOpen(true)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#FD853A", color: "#fff",
              border: "none", borderRadius: 100,
              padding: "14px 32px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(14px,1.2vw,17px)", fontWeight: 500,
              cursor: "pointer", flexShrink: 0,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = "scale(1.05)";
              b.style.boxShadow = "0 8px 24px rgba(253,133,58,0.45)";
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = "scale(1)";
              b.style.boxShadow = "none";
            }}
          >
            Hire me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.10)", margin: "0 clamp(20px,5vw,80px)" }}/>

        {/* ── Main content ─────────────────────────────────── */}
        <div style={{
          padding: "clamp(40px,5vw,64px) clamp(20px,5vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px 32px",
          alignItems: "start",
        }}>

          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "#FD853A",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path d="M5 3v12c0 2.2-1.5 3.5-3.5 3.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M11 3l4 16M15 19l4-16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-urbanist), sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>
                JCREA
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(13px,1.05vw,15px)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.65, margin: 0,
              maxWidth: 280,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {SOCIAL_LINKS.map(({ label, icon, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, transform 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = "#FD853A";
                    a.style.color = "#fff";
                    a.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = "rgba(255,255,255,0.08)";
                    a.style.color = "rgba(255,255,255,0.7)";
                    a.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: 16, fontWeight: 700, color: "#fff",
              margin: "0 0 4px", letterSpacing: "-0.01em",
            }}>
              Navigation
            </h4>
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(13px,1.05vw,15px)",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  width: "fit-content",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FD853A"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"; }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: 16, fontWeight: 700, color: "#fff",
              margin: "0 0 4px", letterSpacing: "-0.01em",
            }}>
              Contact
            </h4>
            {[
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "hello@jcrea.design" },
              { icon: "🌐", text: "jcrea.design" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(13px,1.05vw,15px)",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <span style={{ fontSize: 14 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* Col 4 — Newsletter */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{
              fontFamily: "var(--font-urbanist), sans-serif",
              fontSize: 16, fontWeight: 700, color: "#fff",
              margin: "0 0 4px", letterSpacing: "-0.01em",
            }}>
              Get the latest information
            </h4>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, height: 46, minWidth: 0,
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "0 14px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: 14,
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "#FD853A"; }}
                onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
              <button
                style={{
                  width: 46, height: 46, borderRadius: 10, flexShrink: 0,
                  background: "#FD853A", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "scale(1.08)";
                  b.style.boxShadow = "0 6px 16px rgba(253,133,58,0.45)";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = "scale(1)";
                  b.style.boxShadow = "none";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.10)", margin: "0 clamp(20px,5vw,80px)" }}/>

        {/* ── Copyright bar ────────────────────────────────── */}
        <div style={{
          padding: "20px clamp(20px,5vw,80px)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 12,
          flexWrap: "wrap",
        }}>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(12px,1vw,14px)",
            color: "rgba(255,255,255,0.45)",
            margin: 0,
          }}>
            Copyright© 2023 Fawziulux. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {["User Terms & Conditions", "Privacy Policy"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>}
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "clamp(12px,1vw,14px)",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FD853A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  {item}
                </a>
              </span>
            ))}
          </div>
        </div>

      </footer>

      {/* ── Hire me modal ─────────────────────────────────── */}
      {modalOpen && <HireModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
