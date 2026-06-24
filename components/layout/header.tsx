"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/frontend", label: "Frontend" },
  { href: "/uiux", label: "UI/UX" },
  { href: "/graphic", label: "Graphic" },
  { href: "/experience", label: "Experience" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1F1F1F] bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-[#FAFAFA] hover:text-[#7C3AED] transition-colors"
        >
          nurifai
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  isActive
                    ? "text-[#FAFAFA] bg-[#1F1F1F]"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#111111]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 text-[#A1A1AA] hover:text-[#FAFAFA]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 bg-[#111111] border border-[#1F1F1F] rounded-lg overflow-hidden shadow-xl">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm border-b border-[#1F1F1F] last:border-0 transition-colors ${
                  isActive
                    ? "text-[#FAFAFA] bg-[#161616]"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#161616]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </details>
    </div>
  );
}
