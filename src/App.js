import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <div className="bg-[#535353] text-white h-screen">
      <Navbar />

      {/* {HERO} */}
      <section id='hero'>
        <Hero />
      </section>

      {/* {About} */}
      <section id='about'>

      </section>

      {/* {Projects} */}
      <section id='projects'>

      </section>

      {/* {Experience} */}
      <section id='experience'>

      </section>

      {/* {Contact} */}
      <section id='contact'>

      </section>
    </div>
  );
};


export default App;
