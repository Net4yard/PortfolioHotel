"use client";
import React from "react";
import "../../styles/globals.css";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
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
          <div>
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
          <div>
            <Image
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
              alt="About Our Hotel"
              width={600}
              height={400}
              className="about-image"
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default About;
