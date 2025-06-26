"use client";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/globals.css";
import { ParallaxLayer } from "@react-spring/parallax";
import "./about.css";
import { useTrail, a, useSprings } from "@react-spring/web";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: open ? 1 : 0,
    x: open ? 0 : -150,
    height: open ? 100 : 0,
    from: { opacity: 0, x: -150, height: 80 },
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

const AnimatedImageGrid: React.FC = () => {
  const imageUrl = [
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  ];
  const gridConfig = {
    rows: 1,
    cols: 2,
    get numTiles() {
      return this.rows * this.cols;
    },
    imageScale: 250,
  };

  const springs = useSprings(
    gridConfig.numTiles,
    Array.from({ length: gridConfig.numTiles }).map((_, i) => ({
      from: { backgroundPositionX: "0%", backgroundPositionY: "0%" },
      to: async (next: (props: any) => Promise<any>) => {
        while (true) {
          const animProps = {
            config: {
              duration: 10000 + Math.random() * 8000,
              tension: 60,
              friction: Math.random() + 20,
            },
          };
          await next({
            backgroundPositionX: `${Math.random() * 100}%`,
            backgroundPositionY: `${Math.random() * 100}%`,
            ...animProps,
          });
          await next({
            backgroundPositionX: `${Math.random() * 100}%`,
            backgroundPositionY: `${Math.random() * 100}%`,
            ...animProps,
          });
          await next({
            backgroundPositionX: `${Math.random() * 50}%`,
            backgroundPositionY: `${Math.random() * 50}%`,
            ...animProps,
          }); // Move towards a general area
        }
      },
      delay: i * 1800, // Stagger the start of each tile's animation
    }))
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
        gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
        overflow: "hidden", // Important to clip the oversized background images
        // Places the grid behind other content in this ParallaxLayer
      }}
    >
      {springs.map((springStyle, index) => (
        <a.div
          key={index}
          style={{
            ...springStyle,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${imageUrl[index % imageUrl.length]})`,
            backgroundSize: `${gridConfig.imageScale}% ${gridConfig.imageScale}%`, // Makes image larger than tile for panning
            willChange: "background-position", // Hint for browser optimization
          }}
        />
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "200px",
        paddingBottom: "200px",
        position: "relative",
      }}
    >
      <AnimatedImageGrid />
      <div
        ref={sectionRef}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1, // Ensures this content wrapper is above the AnimatedImageGrid
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
    </div>
  );
};

export default About;
