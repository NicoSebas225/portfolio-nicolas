import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specializations from "./components/Specializations";
import Workflow from "./components/Workflow";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Background />
      <Navbar />

      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Specializations />
      </Reveal>

      <Reveal>
        <Workflow />
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Certifications />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </>
  );
}

export default App;