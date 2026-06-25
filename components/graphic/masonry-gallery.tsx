"use client";

import Link from "next/link";
import { useState } from "react";
import { graphicProjects, graphicCategories } from "@/data/graphic-projects";
import type { GraphicCategory } from "@/data/graphic-projects";

export function MasonryGallery() {
  const [active, setActive] = useState<GraphicCategory>("All");

  const filtered =
    active === "All"
      ? graphicProjects
      : graphicProjects.filter((p) => p.category === active);

  return (
    <div>
      <div className="gr-filters">
        {graphicCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`gr-filter-btn ${active === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gr-masonry">
        {filtered.map((project) => (
          <Link key={project.slug} href={`/graphic/${project.slug}`} className="gr-item">
            <div className="gr-item-img">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="10" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 19l7-5 5 4 3-3 7 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="gr-item-body">
              <p className="gr-item-cat">{project.category} · {project.year}</p>
              <p className="gr-item-title">{project.title}</p>
              <p className="gr-item-client">{project.client}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
