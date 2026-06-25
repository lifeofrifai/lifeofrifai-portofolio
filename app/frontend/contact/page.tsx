import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something together.",
};

const links = [
  {
    label: "Email",
    display: "muhammadnurifai@gmail.com",
    href: "mailto:muhammadnurifai@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/nurifai",
    href: "https://linkedin.com/in/nurifai",
  },
  {
    label: "GitHub",
    display: "github.com/nurifai",
    href: "https://github.com/nurifai",
  },
  {
    label: "Instagram",
    display: "@nurifai_",
    href: "https://instagram.com/nurifai_",
  },
];

export default function ContactPage() {
  return (
    <div className="fe-container" style={{ maxWidth: 480 }}>
      <p className="fe-eyebrow anim-fade-in">Contact</p>
      <h1 className="fe-h1 anim-fade-up delay-100">
        Let&apos;s build something.
      </h1>
      <p className="fe-lead anim-fade-up delay-200">
        Open to freelance work, full-time roles, and interesting collaborations.
      </p>

      <div
        className="anim-fade-up delay-300"
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="fe-contact-row"
          >
            <div>
              <div style={{ fontSize: "0.65rem", fontFamily: "var(--font-geist-mono), monospace", color: "#333", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                {link.label}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#888" }}>
                {link.display}
              </div>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "#222", flexShrink: 0 }}>
              <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
