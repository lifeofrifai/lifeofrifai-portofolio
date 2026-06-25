import { notFound } from "next/navigation";
import Link from "next/link";
import { uiuxProjects, getUIUXProjectBySlug } from "@/data/uiux-projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return uiuxProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getUIUXProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function UIUXCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getUIUXProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <div className="ux-container">
      <Link href="/uiux" className="ux-back-link">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7l4 4M3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Case Studies
      </Link>

      <div className="anim-fade-up">
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <span className="ux-tag ux-tag-accent">UI/UX Design</span>
          <span className="ux-tag">{project.year}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-instrument), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            color: "#0A0A0A",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
          }}
        >
          {project.title}
        </h1>

        <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.65, marginBottom: "2rem" }}>
          {project.description}
        </p>
      </div>

      <div className="ux-tools">
        {project.tools.map((tool) => (
          <span key={tool} className="ux-tag">{tool}</span>
        ))}
      </div>

      {cs && (
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <UXSection label="Overview" title={undefined}>
            <p className="ux-body">{cs.overview}</p>
          </UXSection>

          <UXSection label="Problem Statement" title={undefined}>
            <p className="ux-body">{cs.problemStatement}</p>
          </UXSection>

          <UXSection label="Research" title={undefined}>
            <p className="ux-body">{cs.research}</p>
          </UXSection>

          {cs.userFlow && (
            <UXSection label="User Flow" title={undefined}>
              <p className="ux-body">{cs.userFlow}</p>
            </UXSection>
          )}

          <UXSection label="Outcome" title={undefined}>
            <p className="ux-body">{cs.outcome}</p>
          </UXSection>

          {cs.figmaUrl && (
            <UXSection label="Prototype" title={undefined}>
              <a
                href={cs.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.9rem", color: "#2563EB", textDecoration: "none" }}
              >
                View in Figma →
              </a>
            </UXSection>
          )}
        </div>
      )}
    </div>
  );
}

function UXSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="ux-section-label">{label}</p>
      {title && <h2 className="ux-section-title">{title}</h2>}
      {children}
    </section>
  );
}
