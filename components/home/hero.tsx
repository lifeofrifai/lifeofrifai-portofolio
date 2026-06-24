import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm text-[#7C3AED] font-mono mb-6 animate-fade-in">
            Muhammad Nurifai
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FAFAFA] leading-[1.1] mb-6 animate-slide-up animate-delay-100">
            Frontend Developer
            <br />
            <span className="text-[#A1A1AA]">UI/UX Designer</span>
            <br />
            <span className="text-[#A1A1AA]">Graphic Designer</span>
          </h1>

          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-10 animate-slide-up animate-delay-200">
            Building products through code, design, and visual storytelling.
          </p>

          <div className="flex items-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="#work"
              className="px-5 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium rounded-lg transition-colors"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-[#1F1F1F] hover:border-[#2A2A2A] text-[#A1A1AA] hover:text-[#FAFAFA] text-sm font-medium rounded-lg transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
