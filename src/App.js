import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header className="snap-start" />
      <About className="snap-start" />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
