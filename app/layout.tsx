import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kumar – Full-Stack & Shopify Developer | WordPress, PHP & SEO Expert",
  description:
    "Amit Kumar is a Full-Stack & Shopify Developer based in New Delhi, India with 5+ years of experience in WordPress, Shopify, PHP, HTML5, CSS, API integration, SEO, and e-commerce solutions. Available for freelance projects worldwide.",
  keywords: [
    "Amit Kumar",
    "Full-Stack Developer",
    "Shopify Developer India",
    "WordPress Developer",
    "PHP Developer",
    "HTML5 Developer",
    "SEO Expert",
    "API Integration",
    "E-Commerce Developer",
    "Web Developer New Delhi",
    "CMS Developer",
    "Webflow Developer",
    "Front End Developer India",
  ],
  authors: [{ name: "Amit Kumar" }],
  creator: "Amit Kumar",
  openGraph: {
    type: "website",
    title: "Amit Kumar – Full-Stack & Shopify Developer | WordPress & PHP Expert",
    description:
      "Full-Stack & Shopify Developer with 5+ years of experience. Specialising in WordPress, Shopify, PHP, HTML5, CSS, SEO, and API integrations. Based in New Delhi, India.",
    siteName: "Amit Kumar – Full-Stack Developer",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Kumar – Full-Stack & Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar – Full-Stack & Shopify Developer",
    description:
      "Full-Stack Developer – WordPress, Shopify, PHP, HTML5, CSS, SEO. Based in New Delhi, India.",
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
    <html lang="en" className={`${urbanist.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
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
              jobTitle: "Full-Stack Developer",
              url: "https://amitkumar.dev",
              email: "amit100894@gmail.com",
              telephone: "+91-8960749497",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Delhi",
                addressCountry: "India",
              },
              sameAs: [],
              knowsAbout: [
                "WordPress Development",
                "Shopify Development",
                "PHP Development",
                "HTML5",
                "CSS",
                "API Integration",
                "SEO Optimization",
                "E-Commerce Development",
                "CMS Development",
                "MySQL",
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
