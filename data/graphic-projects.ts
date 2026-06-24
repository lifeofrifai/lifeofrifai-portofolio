export type GraphicCategory =
  | "All"
  | "Logo"
  | "Poster"
  | "Branding"
  | "Social Media"
  | "Flyer"
  | "Banner";

export interface GraphicProject {
  slug: string;
  title: string;
  client: string;
  category: Exclude<GraphicCategory, "All">;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
  tools: string[];
  featured: boolean;
}

export const graphicProjects: GraphicProject[] = [
  {
    slug: "pt-kensen-logo",
    title: "PT Kensen Grik Teknokons",
    client: "PT Kensen Grik Teknokons",
    category: "Logo",
    year: "2023",
    description:
      "Brand identity design for a technology and construction company — combining technical precision with forward-looking energy.",
    thumbnail: "/graphic/kensen-thumb.jpg",
    images: ["/graphic/kensen-1.jpg", "/graphic/kensen-2.jpg"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    featured: true,
  },
  {
    slug: "bem-fmipa-logo",
    title: "BEM FMIPA Logo",
    client: "BEM FMIPA Universitas Syiah Kuala",
    category: "Logo",
    year: "2022",
    description:
      "Official logo for the student executive board of the Faculty of Mathematics and Natural Sciences.",
    thumbnail: "/graphic/bem-thumb.jpg",
    images: ["/graphic/bem-1.jpg"],
    tools: ["Adobe Illustrator"],
    featured: true,
  },
  {
    slug: "ereses-logo",
    title: "eReses Brand Identity",
    client: "eReses Platform",
    category: "Branding",
    year: "2023",
    description:
      "Complete brand identity for an academic research platform — logo, color system, and typography.",
    thumbnail: "/graphic/ereses-thumb.jpg",
    images: ["/graphic/ereses-1.jpg", "/graphic/ereses-2.jpg"],
    tools: ["Adobe Illustrator", "Figma"],
    featured: true,
  },
  {
    slug: "imta-2022",
    title: "IMTA 2022 Event Design",
    client: "BEM FMIPA",
    category: "Poster",
    year: "2022",
    description:
      "Complete visual design system for the IMTA 2022 academic competition — posters, banners, certificates, and social media assets.",
    thumbnail: "/graphic/imta-thumb.jpg",
    images: ["/graphic/imta-1.jpg", "/graphic/imta-2.jpg", "/graphic/imta-3.jpg"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: true,
  },
  {
    slug: "bem-fmipa-social",
    title: "BEM FMIPA Social Media",
    client: "BEM FMIPA Universitas Syiah Kuala",
    category: "Social Media",
    year: "2022",
    description:
      "Consistent social media visual identity for BEM FMIPA — post templates, highlight covers, and story formats.",
    thumbnail: "/graphic/bem-social-thumb.jpg",
    images: ["/graphic/bem-social-1.jpg", "/graphic/bem-social-2.jpg"],
    tools: ["Adobe Photoshop", "Canva"],
    featured: false,
  },
];

export const graphicCategories: GraphicCategory[] = [
  "All",
  "Logo",
  "Poster",
  "Branding",
  "Social Media",
  "Flyer",
  "Banner",
];

export function getFeaturedGraphicProjects() {
  return graphicProjects.filter((p) => p.featured);
}

export function getGraphicProjectBySlug(slug: string) {
  return graphicProjects.find((p) => p.slug === slug);
}

export function getGraphicProjectsByCategory(category: GraphicCategory) {
  if (category === "All") return graphicProjects;
  return graphicProjects.filter((p) => p.category === category);
}
