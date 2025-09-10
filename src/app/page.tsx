import About from "@/components/About";
import Hero from "@/components/Hero";
import LayoutHeader from "@/components/LayoutHeader";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <LayoutHeader />
      <Hero />
      <About />
      <Project />
      <Skills />
    </div>
  );
}
