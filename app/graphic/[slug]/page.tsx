import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tag } from "@/components/shared/tag";
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
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function GraphicProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getGraphicProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/graphic"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8l5 5M3 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Graphic Design
          </Link>

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Tag variant="accent">{project.category}</Tag>
              <Tag>{project.year}</Tag>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-[#A1A1AA] text-sm mb-4">Client: {project.client}</p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-[#1F1F1F]">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.length > 0 ? (
              project.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#111111] rounded-xl border border-[#1F1F1F] overflow-hidden flex items-center justify-center text-[#2A2A2A]"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 22l8-6 5 4 4-3 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              ))
            ) : (
              <div className="col-span-2 aspect-video bg-[#111111] rounded-xl border border-[#1F1F1F] flex items-center justify-center text-[#A1A1AA] text-sm">
                Images coming soon
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
