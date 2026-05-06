import Navbar from "@/components/Navbar";
import IllusionHero from "@/components/IllusionHero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechCommandCentre from "@/components/TechCommandCentre";
import DataVisuals from "@/components/DataVisuals";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeBackground from "@/components/ThemeBackground";
import AmbientSound from "@/components/AmbientSound";

export default function Home() {
  return (
    <main>
      <ThemeBackground />
      <Navbar />
      <IllusionHero />
      <TechMarquee />
      <About />
      <Skills />
      <TechCommandCentre />
      <DataVisuals />
      <Projects />
      <CaseStudies />
      <Experience />
      <Contact />
      <Footer />
      <AmbientSound />
    </main>
  );
}