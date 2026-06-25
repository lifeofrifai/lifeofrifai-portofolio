import Link from "next/link";
import { frontendProjects } from "@/data/frontend-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development",
  description: "Web applications built with Next.js, React, and TypeScript.",
};

export default function FrontendPage() {
  return (
    <div className="fe-container">
      <p className="fe-eyebrow anim-fade-in">Universe 01</p>
      <h1 className="fe-h1 anim-fade-up delay-100">
        Frontend
        <br />
        Developer
      </h1>
      <p className="fe-lead anim-fade-up delay-200">
        Building scalable web applications and real-world software products.
        Focused on performance, developer experience, and clean architecture.
      </p>

      <div className="fe-grid-2">
        {frontendProjects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/frontend/${project.slug}`}
            className="fe-card anim-fade-up"
            style={{ animationDelay: `${0.1 + i * 0.07}s` }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.featured && (
                  <span className="fe-tag fe-tag-accent">Featured</span>
                )}
                <span className="fe-tag">{project.year}</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#222", flexShrink: 0 }}>
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div style={{ fontSize: "1rem", fontWeight: 600, color: "#FAFAFA", marginBottom: "0.25rem" }}>
              {project.title}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#7C3AED", marginBottom: "0.75rem" }}>
              {project.role}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#444", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              {project.description}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {project.stack.map((tech) => (
                <span key={tech} className="fe-tag">{tech}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
