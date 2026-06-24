"use client";

import Link from "next/link";
import { useState } from "react";
import { graphicProjects, graphicCategories } from "@/data/graphic-projects";
import type { GraphicCategory } from "@/data/graphic-projects";
import { Tag } from "@/components/shared/tag";

export function MasonryGallery() {
  const [activeCategory, setActiveCategory] = useState<GraphicCategory>("All");

  const filtered =
    activeCategory === "All"
      ? graphicProjects
      : graphicProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {graphicCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
              activeCategory === cat
                ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                : "border-[#1F1F1F] text-[#A1A1AA] hover:border-[#2A2A2A] hover:text-[#FAFAFA]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/graphic/${project.slug}`}
            className="group block break-inside-avoid rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#111111] hover:border-[#2A2A2A] transition-all duration-300"
          >
            <div className="aspect-square bg-[#161616] relative">
              <div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 22l8-6 5 4 4-3 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Tag variant="accent">{project.category}</Tag>
                <Tag>{project.year}</Tag>
              </div>
              <h3 className="text-[#FAFAFA] font-medium text-sm mb-1">{project.title}</h3>
              <p className="text-[#A1A1AA] text-xs">{project.client}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
