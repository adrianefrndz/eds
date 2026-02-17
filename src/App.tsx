import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import DataAnalyticsProjects from "./components/sections/DataAnalyticsProjects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Certificates />
      <Skills />
      <Projects />
      <DataAnalyticsProjects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
