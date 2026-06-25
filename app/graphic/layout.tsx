import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Graphic — Muhammad Nurifai",
    template: "%s — Muhammad Nurifai / Graphic",
  },
};

const navLinks = [
  { href: "/graphic", label: "Work" },
  { href: "/frontend/contact", label: "Contact" },
];

export default function GraphicLayout({
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

        .gr-root {
          min-height: 100dvh;
          background-color: #0C0C0C;
          color: #F2F2F2;
          font-family: var(--font-space), system-ui, sans-serif;
        }

        .gr-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 56px;
          border-bottom: 1px solid #181818;
          background: rgba(12, 12, 12, 0.88);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
        }

        .gr-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .gr-back:hover { color: #888; }

        .gr-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .gr-nav-link {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #444;
          text-decoration: none;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }
        .gr-nav-link:hover {
          color: #F2F2F2;
          background: #181818;
        }

        .gr-main {
          padding-top: 56px;
        }

        .gr-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 6rem;
        }

        /* Hero type */
        .gr-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #333;
          margin-bottom: 1rem;
        }

        .gr-h1 {
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.0;
          color: #F2F2F2;
          margin-bottom: 0.75rem;
        }

        .gr-h1 span {
          color: #333;
        }

        .gr-lead {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.6;
          max-width: 460px;
          margin-bottom: 3rem;
        }

        /* Filter tabs */
        .gr-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .gr-filter-btn {
          font-family: var(--font-space), sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.4rem 0.875rem;
          border: 1px solid #1A1A1A;
          border-radius: 4px;
          background: transparent;
          color: #444;
          cursor: pointer;
          transition: all 0.15s;
        }
        .gr-filter-btn:hover {
          border-color: #333;
          color: #F2F2F2;
        }
        .gr-filter-btn.active {
          background: #F2F2F2;
          border-color: #F2F2F2;
          color: #0C0C0C;
        }

        /* Masonry */
        .gr-masonry {
          columns: 1;
          gap: 0.875rem;
        }
        @media (min-width: 480px) {
          .gr-masonry { columns: 2; }
        }
        @media (min-width: 900px) {
          .gr-masonry { columns: 3; }
        }

        .gr-item {
          break-inside: avoid;
          margin-bottom: 0.875rem;
          display: block;
          text-decoration: none;
          border: 1px solid #181818;
          border-radius: 10px;
          overflow: hidden;
          background: #111;
          transition: border-color 0.2s;
        }
        .gr-item:hover { border-color: #2A2A2A; }

        .gr-item-img {
          width: 100%;
          aspect-ratio: 1;
          background: #141414;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
        }

        .gr-item-body {
          padding: 0.875rem 1rem;
        }

        .gr-item-cat {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #444;
          margin-bottom: 0.3rem;
        }

        .gr-item-title {
          font-size: 0.825rem;
          font-weight: 600;
          color: #E0E0E0;
        }

        .gr-item-client {
          font-size: 0.7rem;
          color: #333;
          margin-top: 0.15rem;
        }

        /* Tag */
        .gr-tag {
          display: inline-flex;
          font-size: 0.62rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.2rem 0.5rem;
          border: 1px solid #1A1A1A;
          border-radius: 3px;
          color: #444;
        }

        /* Back link */
        .gr-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #444;
          text-decoration: none;
          margin-bottom: 3rem;
          transition: color 0.15s;
        }
        .gr-back-link:hover { color: #F2F2F2; }

        .gr-divider {
          border: none;
          border-top: 1px solid #181818;
          margin: 2rem 0;
        }
      `}</style>

      <div className={`gr-root ${spaceGrotesk.variable}`}>
        <header className="gr-header">
          <Link href="/" className="gr-back">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9 6H3M3 6l3 3M3 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            @lifeofrifai
          </Link>

          <nav className="gr-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="gr-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="gr-main">{children}</div>
      </div>
    </>
  );
}
