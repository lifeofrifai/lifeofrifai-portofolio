import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { Tag } from "@/components/shared/tag";
import { experiences } from "@/data/experiences";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and work history.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Experience"
            title="Work history"
            description="Roles, responsibilities, and the teams I've been part of."
          />

          <div className="relative pl-4 border-l border-[#1F1F1F] space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="relative animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-[#7C3AED]" />
                <div className="pl-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm font-mono text-[#7C3AED]">{exp.year}</span>
                    <Tag>{exp.type}</Tag>
                  </div>

                  <h2 className="text-xl font-semibold text-[#FAFAFA] mb-1">{exp.role}</h2>
                  <p className="text-[#A1A1AA] mb-4">
                    {exp.company} · {exp.location}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-sm text-[#A1A1AA]">
                        <span className="text-[#7C3AED] mt-0.5 flex-shrink-0">—</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
