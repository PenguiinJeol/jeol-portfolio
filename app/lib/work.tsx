import LijssieContent from "../components/work-content/lijssie-content";

export type WorkEntry = {
  title: string;
  year: string;
  role: string;
  description: string;
  summary: string;
  heroImage: string;
  category: string;
  sections?: string[];
  content?: React.ReactNode; 
};

export const workData: Record<string, WorkEntry> = {
  "lijssie": {
    title: "Lijssie",
    year: "2024 — 2025",
    role: "Product Designer & UI Consultant",
    description: "One app to unify all the winkels.",
    summary: "A deep dive into unifying fragmented shopping experiences...",
    heroImage: "/work/lijssie/lijssie-hero.png",
    category: "UI App Design",
    sections: ["The Problem", "Design Strategy", "Final Build"],
    content: <LijssieContent />,
  },
  "project-two": {
    title: "Project Two",
    year: "2023",
    role: "UI/UX Designer",
    description: "A detailed look into my second major work.",
    summary: "",
    heroImage: "/work/project-two/hero.jpg",
    category: "idk yet",
  },
};