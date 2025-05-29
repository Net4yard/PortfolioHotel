// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\Hero.tsx
import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const Hero: React.FC = () => {
  return (
    <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ fontSize: '4rem', color: '#333' }}>Welcome to Our Hotel</h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>Experience luxury and comfort like never before.</p>
    </ParallaxLayer>
  );
};

export default Hero;