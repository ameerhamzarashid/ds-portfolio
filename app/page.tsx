import Navbar from "@/components/Navbar";
import IllusionHero from "@/components/IllusionHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeBackground from "@/components/ThemeBackground";
import ScrollScene from "@/components/ScrollScene";

export default function Home() {
  return (
    <main>
      <ThemeBackground />
      <Navbar />

      <ScrollScene variant="hero">
        <IllusionHero />
      </ScrollScene>

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
    </main>
  );
}