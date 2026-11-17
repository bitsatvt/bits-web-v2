export interface Project {
    id: number;
    slug: string;
    name: string;
    description: string;
    technologies: string[];
    status: "Shipped" | "Active" | "In Development";
    progress: number;
    githubUrl: string;
    activeDates: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "drone-e-commerce",
        name: "Drone E-Commerce",
        description: "Bespoke 3D drone customization platform for Unmanned Industries with inventory logic and real-time 3D rendering.",
        technologies: ["Next.js", "PostgreSQL", "Three.js"],
        status: "Shipped",
        progress: 100,
        githubUrl: "",
        activeDates: "Jan 2026 – May 2026"
    },
    {
        id: 2,
        slug: "odysseus-advisor",
        name: "Odysseus Advisor",
        description: "Virginia Tech course recommendations using official grade distribution and crowdsourced data.",
        technologies: ["Next.js", "Python", "GCP"],
        status: "Active",
        progress: 75,
        githubUrl: "",
        activeDates: "Aug 2026 – Present"
    },
    {
        id: 3,
        slug: "turing-note",
        name: "Turing Note",
        description: "iOS app for programmers' notes with code snippets, sketches, and syntax highlighting.",
        technologies: ["SwiftUI", "iOS 18", "PencilKit"],
        status: "Active",
        progress: 65,
        githubUrl: "",
        activeDates: "Sep 2026 – Present"
    },
    {
        id: 4,
        slug: "stepfree",
        name: "StepFree",
        description: "Accessible transit route navigation helping mobility-impaired users find routes in major cities.",
        technologies: ["React", "Mapbox", "Flask"],
        status: "Active",
        progress: 60,
        githubUrl: "",
        activeDates: "Sep 2026 – Present"
    },
    {
        id: 5,
        slug: "studyguido",
        name: "StudyGuido",
        description: "AI study assistant using RAG to generate flashcards and quizzes from uploaded textbooks.",
        technologies: ["React", "LLMs", "Python"],
        status: "In Development",
        progress: 40,
        githubUrl: "",
        activeDates: "Oct 2026 – Present"
    },
    {
        id: 6,
        slug: "marketmoves",
        name: "MarketMoves",
        description: "Educational paper trading application with risk analysis and gamification features.",
        technologies: ["React", "FastAPI", "MongoDB"],
        status: "In Development",
        progress: 25,
        githubUrl: "",
        activeDates: "Oct 2026 – Present"
    }
];