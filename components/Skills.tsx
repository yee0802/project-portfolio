"use client";

import {
  SiExpress,
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { HoverEffect } from "./ui/card-hover-effect";
import Title from "./Title";

const skills = [
  {
    title: "TypeScript",
    Icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Java",
    Icon: RiJavaLine,
    link: "https://dev.java/",
  },
  {
    title: "Spring",
    Icon: SiSpring,
    link: "https://spring.io/",
  },
  { title: "React", Icon: SiReact, link: "https://reactjs.org/" },
  {
    title: "TailwindCSS",
    Icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  { title: "PostgresSQL", Icon: SiPostgresql, link: "https://postgresql.org/" },
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
