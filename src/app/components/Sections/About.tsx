"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/globals.css";
import { ParallaxLayer } from "@react-spring/parallax";
import "./about.css";
import { useTrail, a } from "@react-spring/web";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: open ? 1 : 0,
    x: open ? 0 : -100,
    height: open ? 100 : 0,
    from: { opacity: 0, x: -100, height: 0 },
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

const About: React.FC = () => {
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
      offset={1.0}
      speed={0}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Added to center content like the ref'd div
        backgroundImage:
          "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg')",
        backgroundSize: "cover",
      }}
    >
      {/* Wrapper div for IntersectionObserver and content centering */}
      <div
        ref={sectionRef}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <Trail open={isInView}>
                <h1>Rólunk</h1>
                <p>
                  Üdvözöljük szállodánkban! Elkötelezettek vagyunk amellett,
                  hogy felejthetetlen élményt nyújtsunk Önnek. Csapatunk
                  elkötelezett amellett, hogy tartózkodása kényelmes és
                  élvezetes legyen.
                </p>
                <p>
                  Szállodánk modern felszereltséggel és barátságos személyzettel
                  várja Önt. Legyen szó üzleti útról vagy pihenésről, nálunk
                  minden megtalálható, amire szüksége van.
                </p>
                <p>
                  Kérjük, ne habozzon kapcsolatba lépni velünk, ha bármilyen
                  kérdése van, vagy ha segítségre van szüksége a foglalás során.
                </p>
              </Trail>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default About;
