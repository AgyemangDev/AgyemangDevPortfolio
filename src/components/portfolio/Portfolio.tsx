import { PortfolioProvider } from "./PortfolioContext";
import { Galaxy } from "./Galaxy";
import { Cursor } from "./Cursor";
import { Rocket } from "./Rocket";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import CodingStats from "./CodingStats";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";
import {Timeline} from "./Timeline";
import {Resume} from "./Resume";
import { Contact } from "./Contact";
export function Portfolio() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen text-foreground">
        <Galaxy />
        <Cursor />
        <Rocket />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <CodingStats />
          <Projects />
          <Timeline/>
          <Testimonials />
          <Resume/>
          <Contact />
        </main>
      </div>
    </PortfolioProvider>
  );
}
