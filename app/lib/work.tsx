import LijssieContent from "../components/work-content/lijssie-content";

export type WorkEntry = {
  title: string;
  year: string;
  role: string;
  summary: string;
  heroImage: string;
  // category?: string;
  // sections?: string[];
  contextChunks?: string[]; // New field for modular text chunks
  content?: React.ReactNode;
  status: string;
};

export const workData: Record<string, WorkEntry> = {
  lijssie: {
    title: "Lijssie",
    year: "2026 — ",
    role: "Product Designer & UI Lead",
    summary: "One app for all your grocery lists and planning.",
    status: "live",

    heroImage: "/work/lijssie/lijssie-hero.png",
    // category: "UI App Design",
    // sections: ["The Problem", "Design Strategy", "Final Build"],
    contextChunks: [
      "Lijssie was transitioning from a web app to a native mobile app to become a solution that was used in the grocery aisles instead of solely at home. New features were introduced to match this shift in vision while emulating the simplicity of the conventional analog shopping list while providing data.",
      "I directed the product's visual language, refined the context-specific user experience and supported the transition from pre-alpha to live release.",
    ],
    content: <LijssieContent />,
  },
  "thinkingdesign-iOS": {
    title: "Thinking Design — iOS Control Center",
    year: "2025",
    role: "A personal project",
    summary: "Icons that I kept mixing up in the control center.",
    heroImage: "/work/thnk-dsgn/thinkingdesign-iOS-controlcenter.png",
    // category: "idk yet",
    status: "coming-soon",
  },
  "thinkingdesign-Spotify": {
    title: "Thinking Design — Spotify",
    year: "2023",
    role: "UI/UX Designer",
    summary: "A bottom nav with their buttons in the wrong order.",
    heroImage: "/work/thnk-dsgn/thinkingdesign-spotify/hero.jpg",
    // category: "idk yet",
    status: "coming-soon",
  },
  "thinkingdesign-timer": {
    title: "Thinking Design — Timer",
    year: "2023",
    role: "UI/UX Designer",
    summary: "Being a heavy user of iOS' timer shouldn't be this hard.",
    heroImage: "/work/thnk-dsgn/thinkingdesign-iOS-controlcenter.png",
    // category: "idk yet",
    status: "coming-soon",
  },
};
