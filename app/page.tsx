import Navbar from "@/components/Navbar";
import Hero from "@/components/IllusionHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollScene from "@/components/ScrollScene";
import NeuralOrbField from "@/components/NeuralOrbField";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f8f5ef] text-black">
      <NeuralOrbField />
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <ScrollScene variant="left">
          <About />
        </ScrollScene>

        <ScrollScene variant="right">
          <Skills />
        </ScrollScene>

        <ScrollScene variant="left">
          <Experience />
        </ScrollScene>

        <ScrollScene variant="right">
          <Projects />
        </ScrollScene>

        <ScrollScene variant="zoom">
          <Contact />
        </ScrollScene>

        <Footer />
      </div>
    </main>
  );
}