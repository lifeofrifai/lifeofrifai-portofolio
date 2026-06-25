import { Instrument_Serif, Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UI/UX — Muhammad Nurifai",
    template: "%s — Muhammad Nurifai / UI/UX",
  },
};

const navLinks = [
  { href: "/uiux", label: "Case Studies" },
  { href: "/frontend/contact", label: "Contact" },
];

export default function UIUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .anim-fade-up  { animation: fadeUp 0.6s ease-out both; }
        .anim-fade-in  { animation: fadeIn 0.5s ease-out both; }
        .delay-100 { animation-delay: 0.10s; }
        .delay-200 { animation-delay: 0.20s; }
        .delay-300 { animation-delay: 0.30s; }
        .delay-400 { animation-delay: 0.40s; }
        .delay-600 { animation-delay: 0.60s; }

        .ux-root {
          min-height: 100dvh;
          background-color: #FAFAFA;
          color: #0A0A0A;
          font-family: var(--font-inter), system-ui, sans-serif;
        }

        .ux-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 56px;
          border-bottom: 1px solid #EBEBEB;
          background: rgba(250, 250, 250, 0.92);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }

        .ux-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #AAA;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.15s;
        }
        .ux-back:hover { color: #333; }

        .ux-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .ux-nav-link {
          padding: 0.35rem 0.875rem;
          border-radius: 6px;
          font-size: 0.8rem;
          color: #888;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .ux-nav-link:hover {
          color: #0A0A0A;
          background: #F0F0F0;
        }

        .ux-main {
          padding-top: 56px;
        }

        .ux-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 4rem 1.5rem 7rem;
        }

        .ux-container-wide {
          max-width: 1024px;
          margin: 0 auto;
          padding: 4rem 1.5rem 7rem;
        }

        /* Editorial typography */
        .ux-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2563EB;
          margin-bottom: 1.25rem;
        }

        .ux-headline {
          font-family: var(--font-instrument), Georgia, serif;
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #0A0A0A;
          margin-bottom: 1.25rem;
        }

        .ux-headline em {
          font-style: italic;
          color: #2563EB;
        }

        .ux-lead {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 4rem;
        }

        /* Cards */
        .ux-card {
          display: block;
          text-decoration: none;
          padding: 2rem;
          border: 1px solid #E8E8E8;
          border-radius: 14px;
          background: #FFF;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ux-card:hover {
          border-color: #D0D0D0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }

        .ux-card-year {
          font-size: 0.68rem;
          color: #AAA;
          font-family: var(--font-inter), sans-serif;
          margin-bottom: 0.75rem;
          letter-spacing: 0.06em;
        }

        .ux-card-title {
          font-family: var(--font-instrument), Georgia, serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: #0A0A0A;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .ux-card-desc {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        /* Tags */
        .ux-tag {
          display: inline-flex;
          font-size: 0.68rem;
          padding: 0.2rem 0.6rem;
          border: 1px solid #E8E8E8;
          border-radius: 4px;
          color: #888;
          background: #F8F8F8;
        }
        .ux-tag-accent {
          color: #2563EB;
          border-color: rgba(37, 99, 235, 0.2);
          background: rgba(37, 99, 235, 0.04);
        }

        /* Case study content */
        .ux-section-label {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #AAA;
          margin-bottom: 1rem;
        }

        .ux-section-title {
          font-family: var(--font-instrument), Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #0A0A0A;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .ux-body {
          font-size: 1rem;
          color: #444;
          line-height: 1.75;
        }

        .ux-divider {
          border: none;
          border-top: 1px solid #EBEBEB;
          margin: 2.5rem 0;
        }

        /* Grid */
        .ux-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .ux-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .ux-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #AAA;
          text-decoration: none;
          margin-bottom: 3rem;
          transition: color 0.15s;
        }
        .ux-back-link:hover { color: #0A0A0A; }

        /* Tools row */
        .ux-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #EBEBEB;
        }
      `}</style>

      <div
        className={`ux-root ${instrumentSerif.variable} ${inter.variable}`}
      >
        <header className="ux-header">
          <Link href="/" className="ux-back">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9 6H3M3 6l3 3M3 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            @lifeofrifai
          </Link>

          <nav className="ux-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="ux-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="ux-main">{children}</div>
      </div>
    </>
  );
}
