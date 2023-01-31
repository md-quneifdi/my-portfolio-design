import { useState } from "react";
import {
  Navbar,
  Hero,
  AboutMe,
  Skills,
  Projects,
  ContactMe,
  Testimonials,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App bg-zinc-800 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
