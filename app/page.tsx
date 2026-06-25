import Particles from "@/components/particles";
import Link from "next/link";

const paths = [
  { href: "/frontend", label: "Frontend Dev", sub: "Engineering · Code" },
  // { href: "/uiux",     label: "UI/UX Design",    sub: "Research · Design" },
  { href: "/graphic",  label: "Graphic Design",  sub: "Visual · Brand" },
];

const socials = [
  { label: "LinkedIn",  href: "https://linkedin.com/in/muhammad-nurifai-397127198" },
  { label: "GitHub",    href: "https://github.com/lifeofrifai" },
  { label: "Instagram", href: "https://instagram.com/lifeofrifai" },
  { label: "Email",     href: "mailto:muhammadnurifai@gmail.com" },
];

export default function Gateway() {
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

        .gateway {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, #0d1a2e 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 100%, #0a1628 0%, transparent 60%),
            linear-gradient(160deg, #060c18 0%, #080808 40%, #07050f 100%);
          color: #FAFAFA;
          font-family: var(--font-geist), system-ui, sans-serif;
          padding: 5rem 1.5rem 5rem;
          position: relative;
          overflow: hidden;
        }

        .g-headline {
          font-size: clamp(1.75rem, 5vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #FAFAFA;
          text-align: center;
          margin-bottom: 0.875rem;
        }

        .g-sub {
          font-size: clamp(0.8rem, 2vw, 0.875rem);
          color: #6b8aaa;
          line-height: 1.6;
          text-align: center;
          max-width: 420px;
          margin-bottom: 2.75rem;
        }

        .g-paths {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          width: 100%;
          max-width: 420px;
        }

        .g-path-link {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.875rem 0.5rem;
          border: 1px solid #0f1e35;
          border-radius: 10px;
          background: rgba(10, 18, 35, 0.6);
          backdrop-filter: blur(8px);
          color: #7a9bbf;
          text-decoration: none;
          text-align: center;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
        }
        .g-path-link:hover {
          background: rgba(14, 26, 48, 0.8);
          border-color: #1a3050;
          color: #FAFAFA;
        }
        .g-path-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: inherit;
          margin-bottom: 0.2rem;
        }
        .g-path-sub {
          font-size: 0.58rem;
          color: #3a5878;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.02em;
          line-height: 1.4;
          transition: color 0.18s;
        }
        .g-path-link:hover .g-path-sub { color: #7a9bbf; }

        /* Handle pill — pinned to top */
        .g-handle {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Social pills — pinned to bottom */
        .g-socials {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .g-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.3rem 0.875rem;
          border: 1px solid #0f1e35;
          border-radius: 999px;
          background: rgba(10, 18, 35, 0.5);
          backdrop-filter: blur(8px);
          color: #5a7a9a;
          font-size: 0.72rem;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.04em;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .g-pill:hover {
          border-color: #1a3050;
          color: #FAFAFA;
          background: rgba(14, 26, 48, 0.8);
        }
      `}</style>

      <main className="gateway">
        <Particles className="absolute inset-0 animate-fade-in" quantity={100} />
        {/* Handle — top */}
        <p className="g-sub g-handle anim-fade-in">@lifeofrifai</p>

        <h1 className="g-headline anim-fade-up">
          Hey there, Muhammad Nurifai here.
        </h1>

        {/* Sub */}
        <p className="g-sub anim-fade-up delay-100">
          A digital nomad who loves building products through code, design, and
          visual storytelling.
        </p>

        {/* Paths */}
        <nav className="g-paths anim-fade-up delay-200">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="g-path-link">
              <span className="g-path-label">{path.label}</span>
              <span className="g-path-sub">{path.sub}</span>
            </Link>
          ))}
        </nav>

        {/* Social pills */}
        <div className="g-socials anim-fade-in delay-400">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="g-pill"
            >
              {s.label}
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
