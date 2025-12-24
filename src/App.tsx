import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Certificates />
      <Skills />
      <Projects />
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </>
  );
}
export default App;
