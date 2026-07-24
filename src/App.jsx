import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;