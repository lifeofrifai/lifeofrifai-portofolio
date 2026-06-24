export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: "Scholarship" | "Competition" | "Achievement";
  description?: string;
}

export const awards: Award[] = [
  {
    id: "djarum-2023",
    title: "Djarum Beasiswa Plus Awardee",
    organization: "Djarum Foundation",
    year: "2023",
    category: "Scholarship",
    description:
      "Highly selective national scholarship program for academically outstanding students with strong leadership and social contributions.",
  },
  {
    id: "pipm-2022",
    title: "PIPM Awardee",
    organization: "PIPM",
    year: "2022",
    category: "Scholarship",
    description:
      "Performance-based scholarship recognizing academic excellence and community involvement.",
  },
  {
    id: "ksm-2022",
    title: "2nd Winner — KSM Mathematics",
    organization: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    year: "2022",
    category: "Competition",
    description:
      "2nd place in the Kompetisi Sains Mahasiswa (KSM) Mathematics regional competition.",
  },
  {
    id: "shortvideo-2022",
    title: "1st Winner — Short Video Competition",
    organization: "BEM FMIPA Universitas Syiah Kuala",
    year: "2022",
    category: "Competition",
    description:
      "First place in a creative short video competition showcasing storytelling and video production skills.",
  },
  {
    id: "poster-2022",
    title: "3rd Winner — Poster Design Competition",
    organization: "BEM FMIPA Universitas Syiah Kuala",
    year: "2022",
    category: "Competition",
    description:
      "Third place in an academic poster design competition.",
  },
  {
    id: "astronomy-2020",
    title: "Astronomy Olympiad Winner",
    organization: "Regional Astronomy Olympiad",
    year: "2020",
    category: "Achievement",
    description:
      "Winner of the regional-level astronomy olympiad during high school.",
  },
];
