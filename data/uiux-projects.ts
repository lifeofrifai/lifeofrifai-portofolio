export interface UIUXProject {
  slug: string;
  title: string;
  description: string;
  year: string;
  tools: string[];
  thumbnail: string;
  featured: boolean;
  caseStudy?: {
    overview: string;
    problemStatement: string;
    research: string;
    userFlow?: string;
    outcome: string;
    figmaUrl?: string;
  };
}

export const uiuxProjects: UIUXProject[] = [
  {
    slug: "hospital-information-system-ux",
    title: "Hospital Information System UX",
    description:
      "End-to-end UX design for a hospital management platform — from user research through wireframes to high-fidelity Figma prototypes.",
    year: "2024",
    tools: ["Figma", "FigJam", "Maze"],
    thumbnail: "/projects/his-ux-thumb.jpg",
    featured: true,
    caseStudy: {
      overview:
        "Designed the complete user experience for a hospital information system serving doctors, nurses, and administrative staff.",
      problemStatement:
        "Hospital staff were frustrated with the existing legacy system — too many clicks, unclear navigation, and no mobile responsiveness.",
      research:
        "Conducted contextual inquiries with 12 hospital staff across 4 roles. Identified 3 critical pain points: slow patient search, confusing billing flow, and inaccessible medical records.",
      userFlow:
        "Mapped 6 core user journeys: patient registration, appointment scheduling, medical record entry, prescription management, billing, and reporting.",
      outcome:
        "Reduced average task completion time by ~40% in usability testing. All critical flows passed accessibility audit at WCAG AA level.",
    },
  },
  {
    slug: "rwikistat-ux",
    title: "Rwikistat Dashboard UX",
    description:
      "UX design for a statistical analysis platform targeting non-technical academic users.",
    year: "2024",
    tools: ["Figma", "Notion"],
    thumbnail: "/projects/rwikistat-ux-thumb.jpg",
    featured: true,
    caseStudy: {
      overview:
        "Designed a dashboard that makes statistical analysis approachable for students and researchers without deep technical backgrounds.",
      problemStatement:
        "Statistical tools are intimidating. Users abandon workflows mid-task because they don't understand what's happening or what to do next.",
      research:
        "Interviewed 8 graduate students about their current analysis workflow. Found that most switched between 3+ tools per session.",
      outcome:
        "Prototype testing showed users could complete a full descriptive statistics workflow in under 5 minutes with zero prior training.",
    },
  },
  {
    slug: "e-rekomtek-ux",
    title: "E-Rekomtek Government Portal UX",
    description:
      "UX redesign for a government technical recommendation portal serving construction and water infrastructure projects.",
    year: "2022",
    tools: ["Figma", "Whimsical"],
    thumbnail: "/projects/erekomtek-ux-thumb.jpg",
    featured: false,
    caseStudy: {
      overview:
        "Redesigned the submission and tracking experience for government technical recommendations.",
      problemStatement:
        "Citizens and contractors had no visibility into their application status, causing repeated in-person visits and phone calls.",
      research:
        "Shadowed government staff for one week to understand the full processing workflow.",
      outcome:
        "Designed a transparent status tracking system that eliminated the need for status inquiry visits entirely.",
    },
  },
];

export function getFeaturedUIUXProjects() {
  return uiuxProjects.filter((p) => p.featured);
}

export function getUIUXProjectBySlug(slug: string) {
  return uiuxProjects.find((p) => p.slug === slug);
}
