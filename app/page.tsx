import Navbar from "@/components/Navbar";
import IllusionHero from "@/components/IllusionHero";
import TechMarquee from "@/components/TechMarquee";
import Skills from "@/components/Skills";
import StoryJourney from "@/components/StoryJourney";
import TechCommandCentre from "@/components/TechCommandCentre";
import DataVisuals from "@/components/DataVisuals";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeBackground from "@/components/ThemeBackground";
import JourneyScene3D from "@/components/JourneyScene3D";
import ScrollScene from "@/components/ScrollScene";

export default function Home() {
  return (
    <main>
      <ThemeBackground />
      <JourneyScene3D />
      <Navbar />

      <ScrollScene variant="hero">
        <IllusionHero />
      </ScrollScene>

      <ScrollScene variant="zoom">
        <TechMarquee />
      </ScrollScene>

      <ScrollScene variant="left">
        <StoryJourney />
      </ScrollScene>

      <ScrollScene variant="right">
        <Skills />
      </ScrollScene>

      <ScrollScene variant="zoom">
        <TechCommandCentre />
      </ScrollScene>

      <ScrollScene variant="left">
        <DataVisuals />
      </ScrollScene>

      <ScrollScene variant="right">
        <Projects />
      </ScrollScene>

      <ScrollScene variant="left">
        <Experience />
      </ScrollScene>

      <ScrollScene variant="zoom">
        <Contact />
      </ScrollScene>

      <ScrollScene>
        <Footer />
      </ScrollScene>
    </main>
  );
}