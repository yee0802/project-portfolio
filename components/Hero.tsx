import Image from "next/image";
import portrait from "@/assets/cropped-portrait.jpg";
import Link from "next/link";
import Title from "./Title";

export default function Hero() {
  return (
    <div className="w-full flex gap-6 my-6 justify-between items-center flex-col-reverse md:flex-row animate-move-up">
      <div className="flex flex-col gap-4 items-center text-center md:text-left md:items-baseline py-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Nice to meet you!👋 <br /> I&apos;m Kye 😁
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl md:max-w-none mt-2 md:mt-4">
          A Software Developer based in Bath, UK📍 <br />
          With expertise in both Frontend and Backend applications👾 <br />I can
          help make your project a reality🪄
        </p>

        <Link href="mailto:kyee8621@gmail.com" className="mt-6">
          <Title
            title="Contact Me 📧"
            firstLineColor="bg-cyan-400"
            lastLineColor="bg-indigo-500"
          />
        </Link>
      </div>

      <Image
        src={portrait}
        alt="Portrait of me"
        className="rounded-xl w-[280px] md:w-[290px] lg:w-[320px] xl:w-[380px]"
        priority
      />
    </div>
  );
}
