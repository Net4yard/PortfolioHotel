// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\Rooms.tsx
import React, { useRef, useState } from "react"; // Import useState
import { ParallaxLayer } from "@react-spring/parallax";
import "./rooms.css";

interface Room {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Luxury Suite",
    description: "Spacious suite with ocean view and private balcony",
    imageUrl: "/images/luxury-suite.jpg", // Make sure to add your images
    price: "$299/night",
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Comfortable room with modern amenities",
    imageUrl: "/images/deluxe-room.jpg",
    price: "$199/night",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views",
    imageUrl: "/images/presidential-suite.jpg",
    price: "$499/night",
  },
];

const Rooms: React.FC = () => {
  const [activeBg, setActiveBg] = useState<string | null>(null);
  const [prevBg, setPrevBg] = useState<string | null>(null);
  const bgTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (imageUrl: string) => {
    if (activeBg !== imageUrl) {
      setPrevBg(activeBg);
      setActiveBg(imageUrl);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(bgTimeoutRef.current);
    bgTimeoutRef.current = setTimeout(() => {
      setPrevBg(activeBg);
      setActiveBg(null);
    }, 300); // Small delay to prevent flickering
  };

  return (
    <ParallaxLayer
      offset={0} // Adjust this based on your parallax setup
      speed={0.5} // Adjust speed as needed
      className="rooms-section parallax-layer"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="rooms-section">
        {prevBg && (
          <div
            className="rooms-section-dynamic-bg fade-out"
            style={{ backgroundImage: `url(${prevBg})` }}
          />
        )}
        {activeBg && (
          <div
            className="rooms-section-dynamic-bg active"
            style={{ backgroundImage: `url(${activeBg})` }}
          />
        )}
        <div className="rooms-section-content-wrapper">
          <h1>Our Rooms</h1>
          <div className="room-cards-container">
            {rooms.map((room: any) => (
              <div
                key={room.id}
                className="room-card"
                onMouseEnter={() => handleMouseEnter(room.imageUrl)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Rest of your room card content */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Rooms;
