import { notFound } from "next/navigation";
import Link from "next/link";
import { frontendProjects, getProjectBySlug } from "@/data/frontend-projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return frontendProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function FrontendCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <div className="fe-container" style={{ maxWidth: 680 }}>
      <Link href="/frontend" className="fe-back-link">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7l4 4M3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Projects
      </Link>

      <div className="anim-fade-up">
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          <span className="fe-tag fe-tag-accent">Frontend</span>
          <span className="fe-tag">{project.year}</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "#FAFAFA", lineHeight: 1.1, marginBottom: "0.5rem" }}>
          {project.title}
        </h1>
        <p style={{ fontSize: "0.8rem", color: "#7C3AED", marginBottom: "1rem" }}>{project.role}</p>
        <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.65, marginBottom: "2rem" }}>{project.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.stack.map((tech) => (
            <span key={tech} className="fe-tag">{tech}</span>
          ))}
        </div>
      </div>

      <hr className="fe-divider" />

      {cs && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <Section title="Overview">
            <div className="fe-prose"><p>{cs.overview}</p></div>
          </Section>

          <Section title="The Problem">
            <div className="fe-prose"><p>{cs.problem}</p></div>
          </Section>

          <Section title="My Role">
            <div className="fe-prose"><p>{cs.myRole}</p></div>
          </Section>

          <Section title="Challenges">
            <div className="fe-prose">
              <ul>
                {cs.challenges.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </Section>

          <Section title="Solutions">
            <div className="fe-prose">
              <ul style={{ listStyle: "none" }}>
                {cs.solutions.map((s) => (
                  <li key={s} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#7C3AED", flexShrink: 0 }}>→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title="Lessons Learned">
            <div className="fe-prose"><p>{cs.lessonsLearned}</p></div>
          </Section>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="fe-h2">{title}</h2>
      {children}
    </section>
  );
}
