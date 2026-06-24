import Link from "next/link";
import { frontendProjects } from "@/data/frontend-projects";
import { getFeaturedGraphicProjects } from "@/data/graphic-projects";

const featuredWork = [
  ...frontendProjects.filter((p) => p.featured).map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    tags: p.stack.slice(0, 3),
    category: "Frontend",
    href: `/frontend/${p.slug}`,
  })),
  ...getFeaturedGraphicProjects()
    .slice(0, 2)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      tags: [p.category],
      category: "Graphic",
      href: `/graphic/${p.slug}`,
    })),
];

export function SelectedWork() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[#A1A1AA] font-mono uppercase tracking-widest mb-2">
              Selected Work
            </p>
            <h2 className="text-2xl font-semibold text-[#FAFAFA]">
              Projects I&apos;m proud of
            </h2>
          </div>
          <Link
            href="/frontend"
            className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors hidden md:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredWork.slice(0, 4).map((work) => (
            <Link
              key={work.slug}
              href={work.href}
              className="group p-6 rounded-xl border border-[#1F1F1F] bg-[#111111] hover:border-[#2A2A2A] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-2 py-1 rounded">
                  {work.category}
                </span>
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

              <h3 className="text-[#FAFAFA] font-medium mb-2 group-hover:text-white transition-colors">
                {work.title}
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#A1A1AA]/70 bg-[#161616] border border-[#1F1F1F] px-2 py-0.5 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
