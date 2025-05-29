// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\Rooms.tsx
import React from 'react';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" style={{ padding: '50px 20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center' }}>Our Rooms</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ width: '30%', margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3>Deluxe Room</h3>
          <p>Spacious and luxurious with stunning views.</p>
        </div>
        <div style={{ width: '30%', margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3>Standard Room</h3>
          <p>Comfortable and cozy for a relaxing stay.</p>
        </div>
        <div style={{ width: '30%', margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3>Suite</h3>
          <p>Elegant and spacious with premium amenities.</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;