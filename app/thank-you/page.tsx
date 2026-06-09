import Link from "next/link";

export const metadata = {
  title: "Thank You – Message Received",
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "var(--bg-page)",
        textAlign: "center",
      }}
    >
      {/* Checkmark circle */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "rgba(253,133,58,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <svg
          width="44" height="44" viewBox="0 0 24 24" fill="none"
          stroke="#FD853A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-urbanist), sans-serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 700,
          color: "var(--text-900)",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        Thank You!
      </h1>

      <p
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(15px, 1.4vw, 20px)",
          fontWeight: 400,
          color: "var(--text-700)",
          maxWidth: 480,
          lineHeight: 1.6,
          margin: "0 0 40px",
        }}
      >
        Your message has been received. I&apos;ll get back to you as soon as
        possible — usually within 24 hours.
      </p>

      <Link
        href="/"
        style={{
          background: "#FD853A",
          color: "#fff",
          textDecoration: "none",
          borderRadius: 60,
          padding: "14px 36px",
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(14px, 1.2vw, 17px)",
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={undefined}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
