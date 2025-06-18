import React, { useState, useEffect, useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "../../styles/globals.css";
import { useTrail, a } from "@react-spring/web";

// Define Trail component outside of Hero to prevent re-initialization on Hero re-renders
const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 50,
    height: open ? 125 : 0,
    from: { opacity: 0, x: 50, height: 0 },
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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
      <div ref={sectionRef}>
        <Trail open={isInView}>
          <h1 style={{ fontSize: "6rem", color: "#fff" }}>Portfolio</h1>
          <h1 style={{ fontSize: "6rem", color: "#fff" }}>Hotel</h1>

          <p style={{ fontSize: "1.5rem", color: "#fff" }}>
            Élvezze a luxust és a kényelmet a legjobb áron!
          </p>
        </Trail>
      </div>
    </ParallaxLayer>
  );
};

export default Hero;
