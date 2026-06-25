import Link from "next/link";
import { uiuxProjects } from "@/data/uiux-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description: "Design case studies focused on research, empathy, and user-centered thinking.",
};

export default function UIUXPage() {
  return (
    <div className="ux-container-wide">
      <p className="ux-eyebrow anim-fade-in">Universe 02</p>

      <h1 className="ux-headline anim-fade-up delay-100">
        Design that<br />
        <em>understands people.</em>
      </h1>

      <p className="ux-lead anim-fade-up delay-200">
        Case studies in user research, interaction design, and high-fidelity
        prototyping. Every project starts with a question, not a canvas.
      </p>

      <div className="ux-grid">
        {uiuxProjects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/uiux/${project.slug}`}
            className="ux-card anim-fade-up"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.featured && (
                  <span className="ux-tag ux-tag-accent">Featured</span>
                )}
                <span className="ux-tag">{project.year}</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#CCC", flexShrink: 0 }}>
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="ux-card-title">{project.title}</h3>
            <p className="ux-card-desc">{project.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tools.map((tool) => (
                <span key={tool} className="ux-tag">{tool}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
