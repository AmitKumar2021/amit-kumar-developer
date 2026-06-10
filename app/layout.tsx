import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amit Kumar – Full Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Amit Kumar, a Full Stack Developer and UI/UX Designer specializing in web development, CMS, mobile apps, and e-commerce solutions.",
  keywords: [
    "Amit Kumar",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "CMS Development",
    "Mobile App Development",
    "E-Commerce Development",
    "Frontend Developer",
  ],
  authors: [{ name: "Amit Kumar" }],
  creator: "Amit Kumar",
  openGraph: {
    type: "website",
    title: "Amit Kumar – Full Stack Developer & UI/UX Designer",
    description:
      "Portfolio of Amit Kumar, a Full Stack Developer and UI/UX Designer specializing in web development, CMS, mobile apps, and e-commerce solutions.",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Kumar – Full Stack Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar – Full Stack Developer & UI/UX Designer",
    description:
      "Portfolio of Amit Kumar, a Full Stack Developer and UI/UX Designer.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://amitkumar.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        {/* Inline script prevents dark-mode flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        {/* JSON-LD structured data — Person schema for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amit Kumar",
              jobTitle: "Full Stack Developer & UI/UX Designer",
              url: "https://amitkumar.dev",
              sameAs: [],
              knowsAbout: [
                "Web Development",
                "UI/UX Design",
                "CMS Development",
                "Mobile App Development",
                "E-Commerce Solutions",
                "React",
                "Next.js",
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
