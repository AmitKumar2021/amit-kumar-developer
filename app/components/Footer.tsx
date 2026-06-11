"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitHireModal } from "../actions/contact";

/* ─── data ──────────────────────────────────────────────────── */
const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" }, { code: "+1",   label: "🇺🇸 +1"   },
  { code: "+44", label: "🇬🇧 +44" }, { code: "+61",  label: "🇦🇺 +61"  },
  { code: "+971",label: "🇦🇪 +971"}, { code: "+966", label: "🇸🇦 +966" },
  { code: "+49", label: "🇩🇪 +49" }, { code: "+33",  label: "🇫🇷 +33"  },
  { code: "+92", label: "🇵🇰 +92" }, { code: "+880", label: "🇧🇩 +880" },
];

const NAV_LINKS = [
  { label: "Home",      href: "/"          },
  { label: "About",     href: "/about"     },
  { label: "Services",  href: "/services"  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume",    href: "/resume"    },
  { label: "Contact",   href: "/contact"   },
];
const SERVICES = [
  { label: "WordPress Development", href: "/services" },
  { label: "PHP & Custom Dev",      href: "/services" },
  { label: "E-Commerce Stores",     href: "/services" },
  { label: "SEO Optimisation",      href: "/services" },
  { label: "API Integration",       href: "/services" },
  { label: "Website Maintenance",   href: "/services" },
];

const SOCIALS = [
  { label:"Facebook",   icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label:"Behance",    icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 11.5c.9 0 1.5-.5 1.5-1.5s-.6-1.5-1.5-1.5H4.5v3H7.5zm.25 2.5H4.5v3.5H7.75c1 0 1.75-.6 1.75-1.75S8.75 14 7.75 14zM2 7h7c2.2 0 3.5 1.2 3.5 3 0 1-.5 1.8-1.3 2.3.9.4 1.8 1.3 1.8 2.7 0 2-1.5 3-3.7 3H2V7zm13.5 1h5v1h-5V8zM15 14c.1 1.5 1 2.3 2.5 2.3 1 0 1.8-.5 2-1.3H21c-.4 1.8-1.8 2.8-3.6 2.8-2.4 0-3.9-1.6-3.9-3.9 0-2.2 1.5-4 3.8-4 2.5 0 3.9 2 3.7 4.1H15zm4.7-1.5c-.1-1.2-.9-1.9-2-1.9-1.2 0-1.9.8-2 1.9h4z"/></svg> },
  { label:"YouTube",    icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#171717"/></svg> },
  { label:"Instagram",  icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label:"Twitter / X",icon:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

/* ─── modal send button ─────────────────────────────────────── */
function ModalSendBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}
      style={{ width:"100%", background: pending ? "#FDA96A" : "#FD853A", color:"#fff", border:"none", borderRadius:12, padding:"14px", fontFamily:"var(--font-outfit),sans-serif", fontSize:15, fontWeight:600, cursor: pending ? "not-allowed" : "pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"transform .2s,box-shadow .2s" }}
      onMouseEnter={e=>{ if(!pending){ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1.02)"; b.style.boxShadow="0 8px 24px rgba(253,133,58,.45)"; }}}
      onMouseLeave={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1)"; b.style.boxShadow="none"; }}
    >{pending ? "Sending…" : <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>}</button>
  );
}

/* ─── hire modal ────────────────────────────────────────────── */
function HireModal({ onClose }: { onClose: () => void }) {
  const [state, formAction] = useActionState(submitHireModal, { error:"", success:false });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  const fs: React.CSSProperties = { width:"100%", height:50, border:"1.5px solid #E4E7EC", borderRadius:12, padding:"0 14px 0 42px", fontFamily:"var(--font-outfit),sans-serif", fontSize:15, color:"var(--text-900)", background:"var(--bg-card)", outline:"none", boxSizing:"border-box", transition:"border-color .2s,box-shadow .2s" };
  const onFocus = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement>) => { e.currentTarget.style.borderColor="#FD853A"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(253,133,58,.12)"; };
  const onBlur  = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement>) => { e.currentTarget.style.borderColor="#E4E7EC"; e.currentTarget.style.boxShadow="none"; };

  return (
    <div ref={overlayRef} onClick={e=>{ if(e.target===overlayRef.current) onClose(); }}
      style={{ position:"fixed", inset:0, zIndex:1000, background:"rgba(0,0,0,.65)", display:"flex", alignItems:"center", justifyContent:"center", padding:20, animation:"ft-fadein .2s ease" }}>
      <div style={{ background:"var(--bg-card)", borderRadius:24, padding:"clamp(24px,4vw,40px)", width:"100%", maxWidth:520, position:"relative", animation:"ft-scaleup .25s cubic-bezier(.34,1.56,.64,1)", boxShadow:"0 24px 60px rgba(0,0,0,.3)" }}>
        <button onClick={onClose}
          style={{ position:"absolute", top:16, right:16, width:34, height:34, borderRadius:"50%", background:"#F2F4F7", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}
          onMouseEnter={e=>{ (e.currentTarget as HTMLButtonElement).style.background="#E4E7EC"; }}
          onMouseLeave={e=>{ (e.currentTarget as HTMLButtonElement).style.background="#F2F4F7"; }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {state.success ? (
          <div style={{ textAlign:"center", padding:"24px 0" }}>
            <div style={{ width:72, height:72, borderRadius:"50%", background:"rgba(253,133,58,.12)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD853A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:26, fontWeight:700, color:"var(--text-900)", margin:"0 0 10px" }}>Message Sent!</h3>
            <p  style={{ fontFamily:"var(--font-outfit),sans-serif",   fontSize:15, color:"var(--text-700)", margin:"0 0 28px" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
            <button onClick={onClose} style={{ background:"#FD853A", color:"#fff", border:"none", borderRadius:100, padding:"12px 32px", fontFamily:"var(--font-outfit),sans-serif", fontSize:15, fontWeight:500, cursor:"pointer" }}>Close</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:"clamp(22px,3vw,30px)", fontWeight:700, color:"var(--text-900)", margin:"0 0 6px", letterSpacing:"-.015em" }}>
              Let&apos;s Work <span style={{ color:"#FD853A" }}>Together</span>
            </h3>
            <p style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"var(--text-700)", margin:"0 0 24px" }}>Fill in the details and I&apos;ll get back to you shortly.</p>
            <form action={formAction} style={{ display:"flex", flexDirection:"column", gap:14 }}>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#98A2B3", pointerEvents:"none" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                <input name="name" type="text" placeholder="Full Name" required style={fs} onFocus={onFocus} onBlur={onBlur}/>
              </div>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#98A2B3", pointerEvents:"none" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg></span>
                <input name="email" type="email" placeholder="Email Address" required style={fs} onFocus={onFocus} onBlur={onBlur}/>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <select name="countryCode" defaultValue="+91"
                  style={{ height:50, border:"1.5px solid #E4E7EC", borderRadius:12, padding:"0 10px", fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"var(--text-900)", background:"var(--bg-card)", outline:"none", appearance:"none", WebkitAppearance:"none", minWidth:90, flexShrink:0, transition:"border-color .2s" }} onFocus={onFocus} onBlur={onBlur}>
                  {COUNTRY_CODES.map(({ code, label }) => <option key={code} value={code}>{label}</option>)}
                </select>
                <div style={{ position:"relative", flex:1 }}>
                  <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#98A2B3", pointerEvents:"none" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.9.35 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                  <input name="phone" type="tel" placeholder="Phone Number" style={{ ...fs, paddingLeft:42 }} onFocus={onFocus} onBlur={onBlur}/>
                </div>
              </div>
              {state.error && <p style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:13, color:"#EF4444", margin:0 }}>{state.error}</p>}
              <ModalSendBtn/>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════ */
export default function Footer() {
  const [modal,    setModal]    = useState(false);
  const [scrollPct,setScrollPct]= useState(0);
  const [showTop,  setShowTop]  = useState(false);
  const [newsEmail,setNewsEmail]= useState("");

  useEffect(() => {
    const fn = () => {
      const y    = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(maxY > 0 ? Math.min(y / maxY, 1) : 0);
      setShowTop(y > 300);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* SVG progress circle */
  const R    = 23;
  const CIRC = 2 * Math.PI * R;          // ≈ 144.5
  const dash = CIRC - CIRC * scrollPct;  // 0 = fully drawn; CIRC = empty

  const scrollTop = () => window.scrollTo({ top:0, behavior:"smooth" });

  return (
    <>
      <style>{`
        @keyframes ft-fadein  { from{opacity:0} to{opacity:1} }
        @keyframes ft-scaleup { from{opacity:0;transform:scale(.93)} to{opacity:1;transform:scale(1)} }
        .ft-link:hover  { color:#FD853A !important; }
        .ft-soc:hover   { background:rgba(253,133,58,.15) !important; color:#FD853A !important; }

        /* ── tablet: 3 cols, brand full-width ── */
        @media (max-width: 1100px) {
          .ft-grid  { grid-template-columns: 1fr 1fr 1fr !important; }
          .ft-brand { grid-column: 1 / -1 !important; }
          .ft-newsletter { grid-column: 1 / -1 !important; }
        }

        /* ── mobile: 2 cols ── */
        @media (max-width: 640px) {
          .ft-grid  { grid-template-columns: 1fr 1fr !important; gap: 32px 20px !important; }
          .ft-brand { grid-column: 1 / -1 !important; }
          .ft-newsletter { grid-column: 1 / -1 !important; }
          .ft-cta   { flex-direction: column !important; align-items: flex-start !important; }
          .ft-bottom{ flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
        }

        /* ── small mobile: 1 col ── */
        @media (max-width: 420px) {
          .ft-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══ Scroll-to-top ════════════════════════════════════ */}
      <button
        onClick={scrollTop}
        aria-label="Back to top"
        style={{
          position:"fixed", bottom:28, right:28, zIndex:200,
          width:54, height:54, borderRadius:"50%",
          background:"#141414", border:"none", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 4px 20px rgba(0,0,0,.5)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "scale(1)" : "scale(.7)",
          pointerEvents: showTop ? "auto" : "none",
          transition:"opacity .3s ease,transform .3s ease",
        }}
      >
        {/* SVG progress ring */}
        <svg width="54" height="54" viewBox="0 0 54 54"
          style={{ position:"absolute", top:0, left:0, pointerEvents:"none" }}>
          {/* track */}
          <circle cx="27" cy="27" r={R} fill="none"
            stroke="rgba(253,133,58,.18)" strokeWidth="2.5"/>
          {/* progress */}
          <circle cx="27" cy="27" r={R} fill="none"
            stroke="#FD853A" strokeWidth="2.5"
            strokeDasharray={CIRC}
            strokeDashoffset={dash}
            strokeLinecap="round"
            style={{ transform:"rotate(-90deg)", transformOrigin:"27px 27px", transition:"stroke-dashoffset .12s linear" }}
          />
        </svg>
        {/* up arrow */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#FD853A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
          style={{ position:"relative", zIndex:1 }}>
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>

      {/* ══ FOOTER ═══════════════════════════════════════════ */}
      <footer style={{ background:"#171717" }}>

        {/* ── CTA bar ───────────────────────────────────── */}
        <div className="ft-cta" style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:16,
          padding:"28px clamp(24px,6vw,88px)",
          borderBottom:"1px solid rgba(255,255,255,0.08)",
        }}>
          <p style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:"clamp(26px,3.5vw,46px)", fontWeight:700, color:"#fff", margin:0, letterSpacing:"-.02em", lineHeight:1.1 }}>
            Let&apos;s build something great
          </p>
          <button onClick={() => setModal(true)}
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FD853A", color:"#fff", border:"none", borderRadius:100, padding:"12px 28px", fontFamily:"var(--font-outfit),sans-serif", fontSize:15, fontWeight:600, cursor:"pointer", transition:"transform .2s,box-shadow .2s", whiteSpace:"nowrap" }}
            onMouseEnter={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1.04)"; b.style.boxShadow="0 8px 28px rgba(253,133,58,.45)"; }}
            onMouseLeave={e=>{ const b=e.currentTarget as HTMLButtonElement; b.style.transform="scale(1)"; b.style.boxShadow="none"; }}>
            Hire me
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </button>
        </div>

        {/* ── Main 5-column grid ────────────────────────── */}
        <div className="ft-grid" style={{
          display:"grid",
          gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1.25fr",
          gap:"40px 28px",
          padding:"clamp(44px,5.5vw,68px) clamp(24px,6vw,88px)",
          borderBottom:"1px solid rgba(255,255,255,0.08)",
        }}>

          {/* Col 1 — Brand */}
          <div className="ft-brand" style={{ display:"flex", flexDirection:"column", gap:18 }}>
            {/* logo */}
            <div style={{ display:"flex", alignItems:"center", gap:9 }}>
              <div style={{ width:40, height:40, borderRadius:"50%", background:"#FD853A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="17" height="17" viewBox="0 0 22 22" fill="none">
                  <path d="M5 3v12c0 2.2-1.5 3.5-3.5 3.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M11 3l4 16M15 19l4-16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontFamily:"var(--font-urbanist),sans-serif", fontWeight:800, fontSize:21, color:"#fff", letterSpacing:"-.02em" }}>Amit Kumar</span>
            </div>

            <p style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"rgba(255,255,255,.42)", lineHeight:1.72, margin:0, maxWidth:230 }}>
              Senior Front-End Developer &amp; Freelancer based in New Delhi, India. Specialising in WordPress, PHP, SEO, and API integration.
            </p>

            {/* socials */}
            <div style={{ display:"flex", gap:8 }}>
              {SOCIALS.map(({ label, icon }) => (
                <button key={label} aria-label={label} className="ft-soc"
                  style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.07)", border:"none", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,.55)", cursor:"pointer", transition:"background .2s,color .2s", flexShrink:0 }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
            <h4 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 4px", letterSpacing:"-.01em" }}>Navigation</h4>
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href} className="ft-link"
                style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"rgba(255,255,255,.50)", textDecoration:"none", width:"fit-content", transition:"color .2s" }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Services */}
          <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
            <h4 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 4px", letterSpacing:"-.01em" }}>Services</h4>
            {SERVICES.map(s => (
              <Link key={s.label} href={s.href} className="ft-link"
                style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"rgba(255,255,255,.50)", textDecoration:"none", width:"fit-content", transition:"color .2s" }}>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
            <h4 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 4px", letterSpacing:"-.01em" }}>Contact</h4>
            {[
              "+91-8960749497",
              "amit100894@gmail.com",
              "New Delhi, India",
            ].map(t => (
              <span key={t} style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:14, color:"rgba(255,255,255,.50)", display:"block" }}>{t}</span>
            ))}
          </div>

          {/* Col 5 — Newsletter */}
          <div className="ft-newsletter" style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <h4 style={{ fontFamily:"var(--font-urbanist),sans-serif", fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 4px", letterSpacing:"-.01em" }}>Get the latest information</h4>
            <div style={{ display:"flex", alignItems:"center", border:"1px solid rgba(255,255,255,.12)", borderRadius:8, overflow:"hidden", background:"rgba(255,255,255,.05)" }}>
              <input
                type="email" placeholder="Email Address"
                value={newsEmail} onChange={e => setNewsEmail(e.target.value)}
                style={{ flex:1, height:46, minWidth:0, border:"none", background:"transparent", color:"rgba(255,255,255,.7)", fontFamily:"var(--font-outfit),sans-serif", fontSize:13.5, padding:"0 12px", outline:"none" }}
              />
              <button
                style={{ width:46, height:46, flexShrink:0, background:"#FD853A", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"background .2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLButtonElement).style.background="#e0731f"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLButtonElement).style.background="#FD853A"; }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div className="ft-bottom" style={{
          padding:"18px clamp(24px,6vw,88px)",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:8,
        }}>
          <p style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:13, color:"rgba(255,255,255,.3)", margin:0 }}>
            Copyright © 2025 {/* Amit Kumar */}. All Rights Reserved.
          </p>
          <div style={{ display:"flex", gap:6, alignItems:"center" }}>
            {["User Terms & Conditions", "Privacy Policy"].map((t, i) => (
              <span key={t} style={{ display:"flex", alignItems:"center", gap:6 }}>
                {i > 0 && <span style={{ color:"rgba(255,255,255,.18)" }}>|</span>}
                <a href="#" className="ft-link"
                  style={{ fontFamily:"var(--font-outfit),sans-serif", fontSize:13, color:"rgba(255,255,255,.3)", textDecoration:"none", transition:"color .2s" }}>
                  {t}
                </a>
              </span>
            ))}
          </div>
        </div>

      </footer>

      {modal && <HireModal onClose={() => setModal(false)}/>}
    </>
  );
}
