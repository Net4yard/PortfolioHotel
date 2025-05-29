// filepath: hotel-landing-page/src/types/index.ts

export interface ParallaxSectionProps {
  offset: number;
  speed: number;
  children: React.ReactNode;
}

export interface ScrollIndicatorProps {
  currentSection: number;
  totalSections: number;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  message: string;
}