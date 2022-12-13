import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Blogs from "../sections/Blogs";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Skills />

      <Projects />

      <Blogs />

      <Contact />
    </div>
  );
}
