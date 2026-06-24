export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract";
  responsibilities: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "usk-2025",
    year: "2025",
    role: "System & Data Administrator",
    company: "Universitas Syiah Kuala",
    location: "Banda Aceh, Indonesia",
    type: "Contract",
    responsibilities: [
      "Survey data management and quality assurance",
      "Kobotoolbox setup and configuration for field research teams",
      "Data analysis and reporting for academic research projects",
      "Database administration and maintenance",
    ],
    skills: ["KoboToolbox", "Excel", "Data Analysis", "SQL"],
  },
  {
    id: "rsibnu-2024",
    year: "2024–2025",
    role: "Frontend Developer",
    company: "Rumah Sakit Ibnu Sina",
    location: "Banda Aceh, Indonesia",
    type: "Full-time",
    responsibilities: [
      "Built and maintained the Hospital Information System frontend",
      "Integrated BPJS national insurance APIs",
      "Implemented Satu Sehat (Ministry of Health) data exchange",
      "Developed patient management, billing, and pharmacy modules",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    id: "dinas-2022",
    year: "2022",
    role: "Intern Student",
    company: "Dinas Pengairan Aceh",
    location: "Banda Aceh, Indonesia",
    type: "Internship",
    responsibilities: [
      "Developed the E-Rekomtek digital services platform",
      "Designed UI/UX for government citizen-facing portal",
      "Collaborated with civil servants to map workflow requirements",
    ],
    skills: ["React", "Figma", "UI/UX Design"],
  },
];
