import chatapp from "../assets/projects/chatapp.png";
import chatapp2 from "../assets/projects/chatapp2.png";
import booklibrary from "../assets/projects/booklibrary.png";
import booklibrary2 from "../assets/projects/booklibrary2.png";
import tictactoe from "../assets/projects/tic-tac-toe.png";
import church from "../assets/projects/church.png";
import agrihero from "../assets/projects/agrihero.png";
import agrihero2 from "../assets/projects/agrihero2.png";
import agrihero3 from "../assets/projects/agrihero3.png";
import agrihero4 from "../assets/projects/agrihero4.png";
import school from "../assets/projects/school.png";
import school2 from "../assets/projects/school2.png";
import school3 from "../assets/projects/school3.png";
import school4 from "../assets/projects/school4.png";
import school5 from "../assets/projects/school5.png";
import school6 from "../assets/projects/school6.png";

export interface Project {
  title: string;
  description: string;
  images?: string[];
  tech: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Chat App",
    description:
      "Real-time chat application with authentication, user presence, and cloud database integration.",
    tech: ["Java", "XML", "Firebase"],
    repo: "https://github.com/adrianefrndz/chat_app",
    images: [chatapp, chatapp2],
  },
  {
    title: "Book Library",
    description:
      "Lightweight book-taking app with local storage support and simple interface.",
    tech: ["Java", "XML", "SQLite"],
    repo: "https://github.com/adrianefrndz/booklibrary",
    images: [booklibrary, booklibrary2],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Classic Tic-Tac-Toe game with clean UI and game state management.",
    tech: ["Java", "XML"],
    repo: "https://github.com/adrianefrndz/tic-tac-toe",
    images: [tictactoe],
  },

  {
    title: "School System (in progress)",
    description:
      "Web-based school management system with authentication and role-based access.",
    tech: [
      "HTML",
      "CSS Tailwind",
      "React.js",
      "TypeScript",
      "Node.js & Hono",
      "MongoDB",
    ],
    repo: "https://github.com/adrianefrndz/school-system",
    images: [school, school2, school3, school4, school5, school6],
  },
  {
    title: "AgriHero  (in progress)",
    description:
      "Agricultural marketplace platform for managing products, orders, and users.",
    tech: [
      "HTML",
      "CSS Tailwind",
      "React.js",
      "TypeScript",
      "Node.js & Hono",
      "MongoDB",
    ],
    repo: "This is a company website",
    images: [agrihero, agrihero2, agrihero3, agrihero4],
  },
  {
    title: "Church Website",
    description:
      "Responsive website for church announcements, events, and online presence.",
    tech: ["HTML", "Bootstrap CSS"],
    repo: "https://github.com/adrianefrndz/arwas-church-of-christ",
    images: [church],
  },
];
