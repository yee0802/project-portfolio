import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen py-6 px-2 sm:px-4 md:px-8 lg:px-12">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-6xl w-full lg:px-6">
          <Header />
          <Hero />
        </div>

        <div className="max-w-4xl w-full flex flex-col items-center opacity-[0.001] animate-fade-in">
          <Skills />

          <Projects />

          <Footer />
        </div>
      </div>
    </main>
  );
}
