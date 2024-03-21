import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div data-theme="night" className="text-3xl text-white">
      <Hero />
      <About />
    </div>
  );
}

export default App;
