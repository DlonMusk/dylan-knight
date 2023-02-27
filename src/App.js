import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <div className="bg-[#8BC6FC] text-white snap-y h-screen snap-mandatory overflow-scroll">
      <Navbar />

      {/* {HERO} */}
      <section className="snap-center" id='hero'>
        <Hero />
      </section>

      {/* {About} */}
      <section className="snap-center" id='about'>
        <About />
      </section>

      {/* {Projects} */}
      <section className="snap-center" id='projects'>

      </section>

      {/* {Experience} */}
      <section className="snap-center" id='experience'>

      </section>

      {/* {Contact} */}
      <section className="snap-center" id='contact'>

      </section>
    </div>
  );
};


export default App;
