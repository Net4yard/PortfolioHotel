"use client";
import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Rooms from "./components/Sections/Rooms";
import Amenities from "./components/Sections/Amenities";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";
import AnimatedCursor from "react-animated-cursor";

const App: React.FC = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const parallaxRef = useRef<IParallax>(null);

  useEffect(() => {
    const scrollContainer = parallaxRef.current?.container.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const offset = scrollContainer.scrollTop;
        if (offset > 10) {
          setIsNavbarScrolled(true);
        } else {
          setIsNavbarScrolled(false);
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Initial check in case the page loads scrolled or content is above the fold
      handleScroll();
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array ensures this runs once after mount and cleans up on unmount

  return (
    <div>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        outerScale={3}
        color="255, 255, 255"
      />
      <Navbar scrolled={isNavbarScrolled} />

      <Parallax pages={3} ref={parallaxRef} horizontal={false}>
        <ParallaxLayer offset={0} speed={0}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <Rooms />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
