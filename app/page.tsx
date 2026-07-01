import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Education />
        <Experience />
        <Work />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}
