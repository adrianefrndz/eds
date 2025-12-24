import chatapp from "../assets/chatapp.png";
import chatapp2 from "../assets/chatapp2.png";
import booklibrary from "../assets/booklibrary.png";
import booklibrary2 from "../assets/booklibrary2.png";
import tictactoe from "../assets/tic-tac-toe.png";
import church from "../assets/church.png";
import agrihero from "../assets/agrihero.png";
import agrihero2 from "../assets/agrihero2.png";
import agrihero3 from "../assets/agrihero3.png";
import agrihero4 from "../assets/agrihero4.png";
import school from "../assets/school.png";
import school2 from "../assets/school2.png";
import school3 from "../assets/school3.png";
import school4 from "../assets/school4.png";
import school5 from "../assets/school5.png";
import school6 from "../assets/school6.png";

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
