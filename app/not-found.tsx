import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main style={{ background: "#0D0D0D", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 100px) clamp(20px, 5vw, 64px)",
        textAlign: "center",
      }}>

        {/* Big 404 */}
        <div style={{ position: "relative", marginBottom: 32 }}>
          <p style={{
            fontFamily: "var(--font-urbanist), sans-serif",
            fontSize: "clamp(120px, 20vw, 240px)",
            fontWeight: 800,
            color: "rgba(253,133,58,0.08)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            margin: 0,
            userSelect: "none",
          }}>
            404
          </p>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: "clamp(64px, 10vw, 96px)",
              height: "clamp(64px, 10vw, 96px)",
              borderRadius: "50%",
              background: "rgba(253,133,58,0.12)",
              border: "1px solid rgba(253,133,58,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FD853A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="12"/>
                <line x1="11" y1="16" x2="11.01" y2="16"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(253,133,58,0.12)", border: "1px solid rgba(253,133,58,0.3)", borderRadius: 40, padding: "5px 16px", marginBottom: 20 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FD853A" }} />
          <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12, color: "#FD853A", fontWeight: 500, letterSpacing: "0.04em" }}>
            Page Not Found
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-urbanist), sans-serif",
          fontSize: "clamp(28px, 5vw, 56px)",
          fontWeight: 700,
          color: "#FCFCFD",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          margin: "0 0 16px",
        }}>
          Oops! This page<br />
          <span style={{ color: "#FD853A" }}>doesn&apos;t exist</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          color: "rgba(252,252,253,0.45)",
          lineHeight: 1.7,
          maxWidth: 440,
          margin: "0 0 40px",
        }}>
          The page you&apos;re looking for has been moved, deleted, or never existed. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" style={{
            background: "#FD853A", color: "#fff", textDecoration: "none",
            borderRadius: 60, padding: "13px 30px",
            fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Go Home
          </Link>
          <Link href="/portfolio" style={{
            background: "transparent", color: "#FCFCFD", textDecoration: "none",
            borderRadius: 60, padding: "13px 30px",
            fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid rgba(255,255,255,0.15)",
          }}>
            View Portfolio
          </Link>
          <Link href="/contact" style={{
            background: "transparent", color: "rgba(252,252,253,0.5)", textDecoration: "none",
            borderRadius: 60, padding: "13px 30px",
            fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid rgba(255,255,255,0.08)",
          }}>
            Contact Me
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
