import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/nurifai" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nurifai" },
  { label: "Instagram", href: "https://instagram.com/nurifai" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#A1A1AA]">
          © {new Date().getFullYear()} Muhammad Nurifai
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-xs text-[#A1A1AA]">
          Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            className="hover:text-[#FAFAFA] transition-colors"
          >
            Next.js
          </Link>
          {" "}& Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
