import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsQuestionLg } from "react-icons/bs";

const projects = [
  {
    title: "Branch",
    tech: [
      SiTypescript,
      SiReact,
      SiMongodb,
      SiTailwindcss,
      SiReactquery,
      SiPrisma,
    ],
    link: "https://github.com/yee0802/branch",
    cover: "/branch-homepage.png",
    background: "bg-green-500",
  },
  {
    title: "Stylish",
    tech: [SiJavascript, SiPostgresql, SiCss3, SiPrisma, SiStripe],
    link: "https://github.com/yee0802/react-store",
    cover: "/Stylish_homepage.png",
    background: "bg-red-500",
  },
  {
    title: "Spotify Homepage",
    tech: [SiHtml5, SiCss3],
    link: "https://htmlpreview.github.io/?https://github.com/yee0802/html-spotify-challenge/blob/main/index.html",
    cover: "/Spotify_clone.png",
    background: "bg-indigo-500",
  },
  {
    title: "Check Back Soon...",
    tech: [BsQuestionLg, BsQuestionLg, BsQuestionLg],
    link: "https://github.com/yee0802",
    cover: "/in-progress.png",
    background: "bg-yellow-200",
  },
];

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center">
      <Title
        className="-rotate-2"
        title="Projects 🏗️"
        firstLineColor="bg-cyan-400"
        lastLineColor="bg-red-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projects.map((project, idx) => {
          return (
            <Link key={idx} href={project.link} target="_blank">
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-[250px] space-y-5"
                >
                  <h1 className="text-2xl mb-2 font-bold">{project.title}</h1>

                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, idx) => (
                      <Icon className="size-6" key={idx} />
                    ))}
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
