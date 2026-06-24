import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tag } from "@/components/shared/tag";
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
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function UIUXCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getUIUXProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/uiux"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8l5 5M3 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            UI/UX Projects
          </Link>

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Tag variant="accent">UI/UX Design</Tag>
              <Tag>{project.year}</Tag>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-[#1F1F1F]">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>

          {cs && (
            <div className="space-y-12">
              <CaseStudySection title="Overview">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.overview}</p>
              </CaseStudySection>

              <CaseStudySection title="Problem Statement">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.problemStatement}</p>
              </CaseStudySection>

              <CaseStudySection title="Research">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.research}</p>
              </CaseStudySection>

              {cs.userFlow && (
                <CaseStudySection title="User Flow">
                  <p className="text-[#A1A1AA] leading-relaxed">{cs.userFlow}</p>
                </CaseStudySection>
              )}

              <CaseStudySection title="Outcome">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.outcome}</p>
              </CaseStudySection>

              {cs.figmaUrl && (
                <CaseStudySection title="Prototype">
                  <a
                    href={cs.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
                  >
                    View Figma Prototype →
                  </a>
                </CaseStudySection>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm font-mono text-[#A1A1AA] uppercase tracking-widest mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
