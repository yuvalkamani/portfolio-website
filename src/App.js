import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) setShowMobileWarning(true);
  }, []);

  return showMobileWarning ? (
    <h1 className="font-bold text-center mx-5 my-5">
      Please use a screen of width 1280px. Mobile website is in the works ...
    </h1>
  ) : (
    <div>
      <Header className="snap-start" />
      <About className="snap-start" />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
