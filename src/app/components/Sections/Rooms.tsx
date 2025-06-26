/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import "./rooms.css";

interface Room {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  roomImages: string[];
  price: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Luxury Suite",
    description: "Spacious suite with ocean view and private balcony",
    imageUrl:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    roomImages: [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    ],
    price: "$299/night",
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Comfortable room with modern amenities",
    imageUrl:
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
    roomImages: [
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    ],
    price: "$199/night",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views",
    imageUrl:
      "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg",
    roomImages: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    ],
    price: "$499/night",
  },
];

const Rooms: React.FC = () => {
  let [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  selectedCard = 1;

  // Background fade animation
  const bgStyle = useSpring({
    opacity: selectedCard ? 1 : 0,
    config: { duration: 800 },
  });

  const getCardAnimation = (roomId: number) => {
    return useSpring({
      transform: selectedCard === roomId ? "scale(1.05)" : "scale(1)",
      config: { tension: 300, friction: 20 },
    });
  };

  const getRoomImageAnimation = (roomId: number) => {
    return useSpring({
      opacity: selectedCard === roomId ? 1 : 0,
      config: { duration: 400 },
    });
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (selectedCard) {
      interval = setInterval(() => {
        const room = rooms.find((r) => r.id === selectedCard);
        if (room) {
          setCurrentImageIndex((prev) => (prev + 1) % room.roomImages.length);
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedCard]);

  return (
    <ParallaxLayer offset={1} speed={0} style={{}}>
      <div className="rooms-section">
        <animated.div
          className="rooms-section-dynamic-bg"
          style={{
            ...bgStyle,
            backgroundImage: selectedCard
              ? `url(${
                  rooms.find((r) => r.id === selectedCard)?.roomImages[
                    currentImageIndex
                  ]
                })`
              : "none",
          }}
        />

        <div className="rooms-container">
          {rooms.map((room) => (
            <animated.div
              key={room.id}
              className="room-card"
              style={getCardAnimation(room.id)}
              onClick={() => {
                setSelectedCard((prev) => (prev === room.id ? null : room.id));
                setCurrentImageIndex(0);
              }}
            >
              <animated.div
                className="room-image"
                style={{
                  backgroundImage: `url(${room.imageUrl})`,
                  opacity: getRoomImageAnimation(room.id).opacity,
                }}
              />
              <div className="room-card-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <span className="price">{room.price}</span>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Rooms;
