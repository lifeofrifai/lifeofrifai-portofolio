import { experiences } from "@/data/experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional engineering experience and work history.",
};

export default function ExperiencePage() {
  return (
    <div className="fe-container" style={{ maxWidth: 680 }}>
      <p className="fe-eyebrow anim-fade-in">Experience</p>
      <h1 className="fe-h1 anim-fade-up delay-100">Work History</h1>
      <p className="fe-lead anim-fade-up delay-200">
        Roles I&apos;ve held and what I built along the way.
      </p>

      <div
        className="fe-timeline anim-fade-up delay-300"
        style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
      >
        {experiences.map((exp, i) => (
          <div key={exp.id} style={{ position: "relative", paddingLeft: "1.5rem" }}>
            <div
              className="fe-timeline-dot"
              style={{ top: "0.35rem" }}
            />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.72rem", color: "#7C3AED" }}>
                {exp.year}
              </span>
              <span className="fe-tag">{exp.type}</span>
            </div>

            <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#FAFAFA", marginBottom: "0.25rem" }}>
              {exp.role}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#444", marginBottom: "1.25rem" }}>
              {exp.company} · {exp.location}
            </div>

            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {exp.responsibilities.map((r) => (
                <li key={r} style={{ display: "flex", gap: "0.75rem", fontSize: "0.82rem", color: "#444", lineHeight: 1.6 }}>
                  <span style={{ color: "#7C3AED", flexShrink: 0 }}>—</span>
                  {r}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {exp.skills.map((skill) => (
                <span key={skill} className="fe-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
