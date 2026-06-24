export type TechTag = string;

export interface FrontendProject {
  slug: string;
  title: string;
  role: string;
  description: string;
  year: string;
  stack: TechTag[];
  thumbnail: string;
  featured: boolean;
  caseStudy?: {
    overview: string;
    problem: string;
    myRole: string;
    challenges: string[];
    solutions: string[];
    architecture?: string;
    lessonsLearned: string;
    screenshots: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
}

export const frontendProjects: FrontendProject[] = [
  {
    slug: "hospital-information-system",
    title: "Hospital Information System",
    role: "Frontend Developer",
    description:
      "A comprehensive hospital management platform integrating BPJS and Satu Sehat, handling patient data, medical records, and billing.",
    year: "2024",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    thumbnail: "/projects/his-thumb.jpg",
    featured: true,
    caseStudy: {
      overview:
        "Built the frontend for a full-scale Hospital Information System at Rumah Sakit Ibnu Sina. The system handles patient registration, medical records, pharmacy, billing, and government integrations.",
      problem:
        "The hospital was running on legacy desktop software that was slow, prone to errors, and didn't integrate with the national healthcare system (BPJS & Satu Sehat). Staff spent hours on manual data entry and reconciliation.",
      myRole:
        "Sole frontend developer responsible for architecture, UI implementation, and API integration across all modules.",
      challenges: [
        "Complex data relationships between patients, appointments, diagnoses, and billing",
        "Real-time synchronization with BPJS and Satu Sehat government APIs",
        "Performance with large datasets (thousands of patient records)",
        "Offline-capable forms for areas with poor connectivity",
      ],
      solutions: [
        "Built a modular component system with shared state management",
        "Implemented optimistic UI updates with background sync for government APIs",
        "Used React Query for efficient server state caching and pagination",
        "Created progressive form handling with local storage fallback",
      ],
      lessonsLearned:
        "Large-scale healthcare systems require extremely careful UX — errors here have real-world consequences. I learned to design for error prevention, not just error handling.",
      screenshots: [],
    },
  },
  {
    slug: "rwikistat",
    title: "Rwikistat",
    role: "Frontend Developer",
    description:
      "A statistical analysis platform built for academic research, featuring interactive data visualizations and report generation.",
    year: "2024",
    stack: ["React", "TypeScript", "Recharts", "REST API"],
    thumbnail: "/projects/rwikistat-thumb.jpg",
    featured: true,
    caseStudy: {
      overview:
        "Rwikistat is a web-based statistical tool designed for researchers and students at Universitas Syiah Kuala.",
      problem:
        "Researchers had to switch between multiple tools (SPSS, Excel, R) to complete a single analysis workflow. There was no unified, accessible platform.",
      myRole:
        "Led frontend development, designed the dashboard layout, and implemented all interactive chart components.",
      challenges: [
        "Rendering complex statistical charts with large datasets without performance degradation",
        "Making statistical concepts accessible to non-technical users",
      ],
      solutions: [
        "Used virtualization for large table rendering",
        "Designed step-by-step guided analysis flows with contextual explanations",
      ],
      lessonsLearned:
        "Domain knowledge matters. Understanding the statistical workflows helped me design more intuitive user flows.",
      screenshots: [],
    },
  },
  {
    slug: "e-rekomtek",
    title: "E-Rekomtek",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "A government digital services platform for technical recommendations, built during internship at Dinas Pengairan Aceh.",
    year: "2022",
    stack: ["React", "CSS", "REST API"],
    thumbnail: "/projects/erekomtek-thumb.jpg",
    featured: false,
    caseStudy: {
      overview:
        "E-Rekomtek digitizes the technical recommendation process for water infrastructure projects in Aceh province.",
      problem:
        "The recommendation process was entirely paper-based, causing delays of weeks and lost documents.",
      myRole:
        "Designed and developed the full frontend from scratch as part of my internship.",
      challenges: [
        "Understanding complex government bureaucratic workflows",
        "Adapting to rapidly changing requirements",
      ],
      solutions: [
        "Conducted workflow interviews with staff to map the exact process",
        "Built a flexible form system that could adapt to different recommendation types",
      ],
      lessonsLearned:
        "Government software requires extra attention to accessibility and simplicity — many users aren't tech-savvy.",
      screenshots: [],
    },
  },
  {
    slug: "icmsa-website",
    title: "ICMSA Conference Website",
    role: "Frontend Developer",
    description:
      "Official website for the International Conference on Mathematics, Statistics, and Applications.",
    year: "2023",
    stack: ["Next.js", "Tailwind CSS"],
    thumbnail: "/projects/icmsa-thumb.jpg",
    featured: false,
    caseStudy: {
      overview:
        "Designed and developed the official website for the ICMSA academic conference.",
      problem:
        "The conference needed a professional digital presence with clear information architecture for international attendees.",
      myRole: "Full frontend development and content architecture.",
      challenges: [
        "Tight deadline — launched 2 weeks before the conference",
        "Multilingual audience requiring clear, simple language",
      ],
      solutions: [
        "Used a modular section-based layout for rapid content updates",
        "Kept design minimal to let content speak",
      ],
      lessonsLearned:
        "Speed and clarity matter more than complexity for event websites.",
      screenshots: [],
    },
  },
];

export function getFeaturedProjects() {
  return frontendProjects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return frontendProjects.find((p) => p.slug === slug);
}
