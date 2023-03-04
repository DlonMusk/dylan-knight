import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


// sendEmail({"name": "bob", "email": "knight777@hotmail.ca", "subject": "please work", "message": "this is taking way longer than it should"})

 

function App() {

  return (
    <div 
    className="bg-[#8BC6FC] text-white snap-y h-screen w-screen snap-mandatory overflow-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#434854] overscroll-contain">
      <Navbar />

      {/* {HERO} */}
      <section className="snap-center" id='hero'>
        <Hero />
      </section>

      {/* {About} */}
      <section className="snap-center snap-always" id='about'>
        <About />
      </section>

      {/* {Projects} */}
      <section className="snap-center snap-always" id='projects'>
        <Projects />
      </section>

      {/* {Experience} */}
      <section className="snap-center snap-always" id='experience'>
        <Experience />
      </section>

      {/* {Contact} */}
      <section className="snap-center snap-always" id='contact'>
        <Contact />
      </section>
    </div>
  );
};


export default App;
