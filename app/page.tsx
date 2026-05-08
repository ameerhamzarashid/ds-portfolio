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

export default function Home() {
  return (
    <main>
      <ThemeBackground />
      <JourneyScene3D />

      <Navbar />
      <IllusionHero />
      <TechMarquee />
      <StoryJourney />
      <Skills />
      <TechCommandCentre />
      <DataVisuals />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}