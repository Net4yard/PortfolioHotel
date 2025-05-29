// filepath: hotel-landing-page/src/components/Sections/Amenities.tsx
import React from 'react';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
      <h2>Amenities</h2>
      <ul>
        <li>Free Wi-Fi</li>
        <li>Swimming Pool</li>
        <li>Fitness Center</li>
        <li>24/7 Room Service</li>
        <li>Spa and Wellness Center</li>
        <li>Complimentary Breakfast</li>
        <li>Conference Rooms</li>
        <li>Airport Shuttle Service</li>
      </ul>
    </section>
  );
};

export default Amenities;