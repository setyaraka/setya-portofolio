import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
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
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
