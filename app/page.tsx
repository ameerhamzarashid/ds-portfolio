import Navbar from "@/components/Navbar";
import IllusionHero from "@/components/IllusionHero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import StoryJourney from "@/components/StoryJourney";
import TechCommandCentre from "@/components/TechCommandCentre";
import DataVisuals from "@/components/DataVisuals";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeBackground from "@/components/ThemeBackground";
import JourneyScene3D from "@/components/JourneyScene3D";
import JourneyOverlay from "@/components/JourneyOverlay";
import JourneyGamification from "@/components/JourneyGamification";
import FloatingDataTickets from "@/components/FloatingDataTickets";
import ProjectStationDoors from "@/components/ProjectStationDoors";
import InventoryDrawer from "@/components/InventoryDrawer";
import RouteMiniMap from "@/components/RouteMiniMap";

export default function Home() {
  return (
    <main>
      <ThemeBackground />
      <JourneyScene3D />
      <RouteMiniMap />
      <JourneyOverlay />
      <JourneyGamification />
      <FloatingDataTickets />
      <InventoryDrawer />

      <Navbar />
      <IllusionHero />
      <TechMarquee />
      <StoryJourney />
      <About />
      <Skills />
      <TechCommandCentre />
      <DataVisuals />
      <ProjectStationDoors />
      <Projects />
      <CaseStudies />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}