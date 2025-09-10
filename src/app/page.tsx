import About from "@/components/About";
import Hero from "@/components/Hero";
import LayoutHeader from "@/components/LayoutHeader";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <LayoutHeader />
      <Hero />
      <About />
      <Project />
    </div>
  );
}
