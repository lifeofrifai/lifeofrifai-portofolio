import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tag } from "@/components/shared/tag";
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
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function FrontendCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/frontend"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8l5 5M3 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Frontend Projects
          </Link>

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Tag variant="accent">Frontend</Tag>
              <Tag>{project.year}</Tag>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-[#7C3AED] mb-4">{project.role}</p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-[#1F1F1F]">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          {cs && (
            <div className="space-y-12">
              <CaseStudySection title="Overview">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.overview}</p>
              </CaseStudySection>

              <CaseStudySection title="The Problem">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.problem}</p>
              </CaseStudySection>

              <CaseStudySection title="My Role">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.myRole}</p>
              </CaseStudySection>

              <CaseStudySection title="Challenges">
                <ul className="space-y-3">
                  {cs.challenges.map((c) => (
                    <li key={c} className="flex gap-3 text-[#A1A1AA]">
                      <span className="text-[#7C3AED] mt-1 flex-shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </CaseStudySection>

              <CaseStudySection title="Solutions">
                <ul className="space-y-3">
                  {cs.solutions.map((s) => (
                    <li key={s} className="flex gap-3 text-[#A1A1AA]">
                      <span className="text-[#7C3AED] mt-1 flex-shrink-0">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </CaseStudySection>

              <CaseStudySection title="Lessons Learned">
                <p className="text-[#A1A1AA] leading-relaxed">{cs.lessonsLearned}</p>
              </CaseStudySection>
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
