import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Goup } from "./Goup";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Hero />
        <Banner />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <Goup />
      </div>
    </>
  );
}

export default App;
