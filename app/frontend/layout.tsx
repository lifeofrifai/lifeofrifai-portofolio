import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Frontend — Muhammad Nurifai",
    template: "%s — Muhammad Nurifai / Frontend",
  },
};

const navLinks = [
  { href: "/frontend", label: "Projects" },
  { href: "/frontend/experience", label: "Experience" },
  { href: "/frontend/awards", label: "Awards" },
  { href: "/frontend/contact", label: "Contact" },
];

export default function FrontendLayout({
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

        .fe-root {
          min-height: 100dvh;
          background-color: #0A0A0A;
          color: #FAFAFA;
          font-family: var(--font-geist), system-ui, sans-serif;
        }

        .fe-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 52px;
          border-bottom: 1px solid #141414;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
        }

        .fe-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #444;
          text-decoration: none;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.04em;
          transition: color 0.15s;
        }
        .fe-back:hover { color: #888; }

        .fe-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .fe-nav-link {
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          color: #555;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .fe-nav-link:hover {
          color: #FAFAFA;
          background: #111;
        }
        .fe-nav-link.active {
          color: #FAFAFA;
          background: #141414;
        }

        .fe-main {
          padding-top: 52px;
        }

        .fe-container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 6rem;
        }

        /* Cards */
        .fe-card {
          padding: 1.5rem;
          border: 1px solid #141414;
          border-radius: 12px;
          background: #0D0D0D;
          text-decoration: none;
          display: block;
          transition: border-color 0.2s, background 0.2s;
        }
        .fe-card:hover {
          border-color: #222;
          background: #0F0F0F;
        }

        /* Typography */
        .fe-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #333;
          font-family: var(--font-geist-mono), monospace;
          margin-bottom: 1rem;
        }
        .fe-h1 {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #FAFAFA;
          margin-bottom: 0.75rem;
        }
        .fe-lead {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 3rem;
        }
        .fe-h2 {
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #333;
          font-family: var(--font-geist-mono), monospace;
          margin-bottom: 1rem;
        }

        /* Tags */
        .fe-tag {
          display: inline-flex;
          align-items: center;
          font-size: 0.65rem;
          font-family: var(--font-geist-mono), monospace;
          padding: 0.2rem 0.55rem;
          border: 1px solid #1A1A1A;
          border-radius: 4px;
          color: #444;
          background: #0A0A0A;
        }
        .fe-tag-accent {
          color: #7C3AED;
          border-color: rgba(124, 58, 237, 0.2);
          background: rgba(124, 58, 237, 0.06);
        }

        /* Timeline */
        .fe-timeline {
          position: relative;
          padding-left: 1.25rem;
          border-left: 1px solid #141414;
        }
        .fe-timeline-dot {
          position: absolute;
          left: -5px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0A0A0A;
          border: 2px solid #7C3AED;
        }

        /* Divider */
        .fe-divider {
          border: none;
          border-top: 1px solid #141414;
          margin: 2.5rem 0;
        }

        /* Grid */
        .fe-grid-2 {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.875rem;
        }
        @media (min-width: 640px) {
          .fe-grid-2 { grid-template-columns: repeat(2, 1fr); }
        }

        /* Prose */
        .fe-prose p {
          color: #555;
          line-height: 1.75;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .fe-prose ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .fe-prose li {
          display: flex;
          gap: 0.75rem;
          color: #555;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .fe-prose li::before {
          content: "—";
          color: #7C3AED;
          flex-shrink: 0;
          margin-top: 0.05rem;
        }

        /* Back link in content */
        .fe-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: #444;
          text-decoration: none;
          margin-bottom: 2.5rem;
          transition: color 0.15s;
        }
        .fe-back-link:hover { color: #FAFAFA; }

        /* Contact links */
        .fe-contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border: 1px solid #141414;
          border-radius: 10px;
          background: #0D0D0D;
          text-decoration: none;
          transition: border-color 0.18s, background 0.18s;
        }
        .fe-contact-row:hover {
          border-color: #222;
          background: #101010;
        }
      `}</style>

      <div className="fe-root">
        <header className="fe-header">
          <Link href="/" className="fe-back">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9 6H3M3 6l3 3M3 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            @lifeofrifai
          </Link>

          <nav className="fe-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="fe-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="fe-main">{children}</div>
      </div>
    </>
  );
}
