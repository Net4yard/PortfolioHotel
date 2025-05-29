// filepath: hotel-landing-page/src/hooks/useParallax.ts
import { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const useParallax = (pages: number) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [props, set] = useSpring(() => ({ scroll: 0 }));

  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollY = window.scrollY;
      const maxScroll = parallaxRef.current.clientHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;
      set({ scroll: scrollPercentage * (pages - 1) });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { parallaxRef, props };
};

export default useParallax;
