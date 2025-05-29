"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Rooms from "./components/Sections/Rooms";
import Amenities from "./components/Sections/Amenities";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <div>
      <Parallax pages={6}>
        <Navbar />
        <ParallaxLayer offset={0} speed={0.5}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <Rooms />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <Amenities />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <Contact />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
