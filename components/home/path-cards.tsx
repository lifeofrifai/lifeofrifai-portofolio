import Link from "next/link";

const paths = [
  {
    href: "/frontend",
    label: "Frontend Development",
    description: "Building scalable web applications and digital products.",
    badge: "Next.js · React · TypeScript",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 10h8M3 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 12l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/uiux",
    label: "UI/UX Design",
    description: "Designing intuitive and meaningful user experiences.",
    badge: "Figma · Research · Prototyping",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="3" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/graphic",
    label: "Graphic Design",
    description: "Creating visual identities and communication materials.",
    badge: "Illustrator · Photoshop · Branding",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function PathCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map((path, i) => (
            <Link
              key={path.href}
              href={path.href}
              className={`group relative p-6 rounded-xl border border-[#1F1F1F] bg-[#111111] hover:border-[#7C3AED]/40 hover:bg-[#111111] transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-[#7C3AED] mb-4 group-hover:scale-110 transition-transform duration-200">
                {path.icon}
              </div>
              <h3 className="text-[#FAFAFA] font-semibold mb-2">{path.label}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                {path.description}
              </p>
              <span className="text-xs text-[#A1A1AA]/60 font-mono">{path.badge}</span>

              <div className="absolute bottom-6 right-6 text-[#A1A1AA] group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
