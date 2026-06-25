import { notFound } from "next/navigation";
import Link from "next/link";
import { graphicProjects, getGraphicProjectBySlug } from "@/data/graphic-projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return graphicProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getGraphicProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function GraphicProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getGraphicProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="gr-container">
      <Link href="/graphic" className="gr-back-link">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M9 6H3M3 6l3 3M3 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Work
      </Link>

      <div className="anim-fade-up">
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
          <span className="gr-tag">{project.category}</span>
          <span className="gr-tag">{project.year}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space), system-ui, sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#F2F2F2",
            lineHeight: 1.0,
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h1>

        <p style={{ fontSize: "0.75rem", color: "#333", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
          Client: {project.client}
        </p>

        <p style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.65, maxWidth: 520, marginBottom: "2rem" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tools.map((tool) => (
            <span key={tool} className="gr-tag">{tool}</span>
          ))}
        </div>
      </div>

      <hr className="gr-divider" />

      {project.images.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.875rem",
          }}
        >
          {project.images.map((_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                background: "#111",
                border: "1px solid #181818",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#222",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="10" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 19l7-5 5 4 3-3 7 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: "4rem",
            textAlign: "center",
            color: "#222",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            border: "1px solid #181818",
            borderRadius: "10px",
          }}
        >
          Images coming soon
        </div>
      )}
    </div>
  );
}
