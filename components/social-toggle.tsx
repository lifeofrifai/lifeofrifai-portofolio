"use client";

import { useState } from "react";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadnurifai", display: "muhammadnurifai" },
  { label: "GitHub",   href: "https://github.com/nurifai",              display: "nurifai" },
  { label: "Instagram",href: "https://instagram.com/nurifai_",          display: "@nurifai_" },
  { label: "Email",    href: "mailto:muhammadnurifai@gmail.com",        display: "muhammadnurifai@gmail.com" },
];

export function SocialToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "100%", maxWidth: 360 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1rem",
          border: "1px solid #181818",
          borderRadius: open ? "10px 10px 0 0" : "10px",
          background: open ? "#131313" : "#0D0D0D",
          color: open ? "#888" : "#444",
          fontSize: "0.78rem",
          fontFamily: "var(--font-geist-mono), monospace",
          letterSpacing: "0.06em",
          cursor: "pointer",
          transition: "all 0.18s",
        }}
      >
        <span>Find me online</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "#333",
          }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            border: "1px solid #181818",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
            background: "#0A0A0A",
            overflow: "hidden",
          }}
        >
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.7rem 1rem",
                borderTop: i === 0 ? "none" : "1px solid #131313",
                textDecoration: "none",
                color: "#555",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FAFAFA";
                (e.currentTarget as HTMLAnchorElement).style.background = "#0F0F0F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em" }}>
                {s.label}
              </span>
              <span style={{ fontSize: "0.7rem", color: "#333" }}>{s.display}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
