import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { Tag } from "@/components/shared/tag";
import { frontendProjects } from "@/data/frontend-projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development",
  description:
    "Web applications and digital products built with Next.js, React, and TypeScript.",
};

export default function FrontendPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Frontend Development"
            title="Building scalable web apps"
            description="Web applications and digital products built with modern tools and a focus on performance and user experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontendProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/frontend/${project.slug}`}
                className="group p-6 rounded-xl border border-[#1F1F1F] bg-[#111111] hover:border-[#2A2A2A] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Tag variant="accent">Featured</Tag>
                    )}
                    <Tag>{project.year}</Tag>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#A1A1AA] group-hover:text-[#FAFAFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-[#FAFAFA] font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-[#7C3AED] mb-3">{project.role}</p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
