// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\Hero.tsx
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "../../styles/globals.css";
import { useTrail, a } from "@react-spring/web";

// Define Trail component outside of Hero to prevent re-initialization on Hero re-renders
const Trail: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: 1,
    x: 0,
    height: 125,
    from: { opacity: 0, x: 0, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={0}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg')",
        backgroundSize: "cover",
      }}
      className="hero"
    >
      <Trail>
        <h1 style={{ fontSize: "6rem", color: "#fff" }}>Portfolio</h1>
        <h1 style={{ fontSize: "6rem", color: "#fff" }}>Hotel</h1>

        <p style={{ fontSize: "1.5rem", color: "#fff" }}>
          Élvezze a luxust és a kényelmet a legjobb áron!
        </p>
      </Trail>
    </ParallaxLayer>
  );
};

export default Hero;
