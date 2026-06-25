import { awards } from "@/data/awards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards",
  description: "Scholarships, competition wins, and achievements.",
};

const catIcon: Record<string, string> = {
  Scholarship: "◆",
  Competition: "▲",
  Achievement: "●",
};

export default function AwardsPage() {
  return (
    <div className="fe-container" style={{ maxWidth: 680 }}>
      <p className="fe-eyebrow anim-fade-in">Recognition</p>
      <h1 className="fe-h1 anim-fade-up delay-100">Awards</h1>
      <p className="fe-lead anim-fade-up delay-200">
        Scholarships, competition wins, and milestones.
      </p>

      <div
        className="anim-fade-up delay-300"
        style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
      >
        {awards.map((award) => (
          <div
            key={award.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1.5rem",
              padding: "1.25rem 1.5rem",
              border: "1px solid #141414",
              borderRadius: "10px",
              background: "#0D0D0D",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.625rem" }}>
                <span className="fe-tag fe-tag-accent">{award.category}</span>
                <span className="fe-tag">{award.year}</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#FAFAFA", marginBottom: "0.2rem" }}>
                {award.title}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#333", marginBottom: award.description ? "0.6rem" : 0 }}>
                {award.organization}
              </div>
              {award.description && (
                <div style={{ fontSize: "0.78rem", color: "#444", lineHeight: 1.6 }}>
                  {award.description}
                </div>
              )}
            </div>
            <span style={{ fontSize: "0.65rem", color: "#7C3AED", flexShrink: 0, paddingTop: "0.15rem" }}>
              {catIcon[award.category] ?? "◇"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
