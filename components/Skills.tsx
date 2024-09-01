"use client";

import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect";
import Title from "./Title";

const skills = [
  {
    title: "TypeScript",
    Icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "JavaScript",
    Icon: SiJavascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { title: "React", Icon: SiReact, link: "https://reactjs.org/" },
  {
    title: "TailwindCSS",
    Icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  { title: "PostgresSQL", Icon: SiPostgresql, link: "https://postgresql.org/" },
  { title: "MongoDB", Icon: SiMongodb, link: "https://www.mongodb.com/" },
  { title: "Express.js", Icon: SiExpress, link: "https://expressjs.com/" },
  { title: "Node.js", Icon: SiNodedotjs, link: "https://nodejs.org/" },
  { title: "Git", Icon: SiGit, link: "https://git-scm.com/" },
];

export default function Skills() {
  return (
    <div className="w-full flex flex-col items-center">
      <Title
        className="rotate-2"
        title="Skills 🧩"
        firstLineColor="bg-cyan-400"
        lastLineColor="bg-green-500"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
