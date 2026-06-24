import Link from "next/link";
import { experiences } from "@/data/experiences";

export function ExperiencePreview() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[#A1A1AA] font-mono uppercase tracking-widest mb-2">
              Experience
            </p>
            <h2 className="text-2xl font-semibold text-[#FAFAFA]">Where I&apos;ve worked</h2>
          </div>
          <Link
            href="/experience"
            className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors hidden md:block"
          >
            Full timeline →
          </Link>
        </div>

        <div className="relative pl-4 border-l border-[#1F1F1F] space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`animate-slide-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-[#1F1F1F] border-2 border-[#7C3AED]" />
              <div className="pl-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-[#7C3AED]">{exp.year}</span>
                  <span className="text-xs text-[#A1A1AA] bg-[#161616] border border-[#1F1F1F] px-2 py-0.5 rounded">
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-[#FAFAFA] font-medium">{exp.role}</h3>
                <p className="text-[#A1A1AA] text-sm">{exp.company} · {exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
