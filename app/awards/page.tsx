import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { Tag } from "@/components/shared/tag";
import { awards } from "@/data/awards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards",
  description: "Scholarships, competition wins, and achievements.",
};

const categoryIcon: Record<string, string> = {
  Scholarship: "🎓",
  Competition: "🏆",
  Achievement: "⭐",
};

export default function AwardsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Awards & Achievements"
            title="Recognition"
            description="Scholarships, competition wins, and milestones along the way."
          />

          <div className="space-y-4">
            {awards.map((award, i) => (
              <div
                key={award.id}
                className="p-6 rounded-xl border border-[#1F1F1F] bg-[#111111] animate-slide-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Tag variant="accent">{award.category}</Tag>
                      <Tag>{award.year}</Tag>
                    </div>
                    <h3 className="text-[#FAFAFA] font-semibold mb-1">{award.title}</h3>
                    <p className="text-[#A1A1AA] text-sm mb-3">{award.organization}</p>
                    {award.description && (
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        {award.description}
                      </p>
                    )}
                  </div>
                  <span className="text-2xl flex-shrink-0" aria-hidden>
                    {categoryIcon[award.category] ?? "✦"}
                  </span>
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
