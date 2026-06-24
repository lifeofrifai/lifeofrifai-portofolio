import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something together.",
};

const links = [
  {
    label: "Email",
    value: "muhammadnurifai@gmail.com",
    href: "mailto:muhammadnurifai@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nurifai",
    href: "https://linkedin.com/in/nurifai",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8v5M6 6v.01M9 13v-2.5a1.5 1.5 0 0 1 3 0V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/nurifai",
    href: "https://github.com/nurifai",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 0 0-2.214 13.638c.35.064.478-.152.478-.338v-1.18c-1.945.422-2.354-.938-2.354-.938-.318-.808-.776-1.023-.776-1.023-.635-.433.048-.425.048-.425.702.05 1.072.72 1.072.72.624 1.07 1.637.76 2.036.581.064-.452.244-.76.444-.935-1.553-.177-3.185-.776-3.185-3.453 0-.762.272-1.386.719-1.875-.072-.177-.312-.887.069-1.849 0 0 .586-.187 1.92.715A6.693 6.693 0 0 1 9 6.13c.593.003 1.19.08 1.748.236 1.333-.902 1.918-.715 1.918-.715.382.962.142 1.672.07 1.849.448.489.718 1.113.718 1.875 0 2.685-1.635 3.274-3.193 3.446.251.216.474.643.474 1.297v1.922c0 .188.127.405.482.336A7.001 7.001 0 0 0 9 2z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@nurifai_",
    href: "https://instagram.com/nurifai_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-[#A1A1AA] font-mono uppercase tracking-widest mb-4 animate-fade-in">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight mb-4 animate-slide-up">
            Let&apos;s build something together
          </h1>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-12 animate-slide-up animate-delay-100">
            Available for freelance projects, full-time roles, and interesting collaborations.
            Reach out through any of the channels below.
          </p>

          <div className="space-y-3 animate-slide-up animate-delay-200">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-4 rounded-xl border border-[#1F1F1F] bg-[#111111] hover:border-[#2A2A2A] hover:bg-[#161616] transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#A1A1AA] group-hover:text-[#7C3AED] transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <div className="text-xs text-[#A1A1AA] mb-0.5">{link.label}</div>
                    <div className="text-sm text-[#FAFAFA]">{link.value}</div>
                  </div>
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
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
