// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\About.tsx
import React from "react";
import "../../styles/globals.css";
import { ParallaxLayer } from "@react-spring/parallax";
import "./about.css";

const About: React.FC = () => {
  return (
    <ParallaxLayer
      offset={1.0}
      speed={0}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to our hotel! We are dedicated to providing you with an
            unforgettable experience. Our team is committed to ensuring your
            stay is comfortable and enjoyable.
          </p>
          <p>
            From luxurious accommodations to exceptional service, we strive to
            exceed your expectations. Whether you're here for business or
            leisure, we have everything you need for a perfect stay.
          </p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default About;
