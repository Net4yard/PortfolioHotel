// filepath: c:\Users\Daniel\Documents\GitHub\hotel-landing-page\src\components\Sections\About.tsx
import React from "react";
import "../../styles/globals.css";

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: "50px", textAlign: "center" }}>
      <h2>About Our Hotel</h2>
      <p>
        Welcome to our hotel, where luxury meets comfort. Our hotel offers a
        unique experience with top-notch amenities and exceptional service.
        Whether you're here for business or leisure, we ensure a memorable stay.
      </p>
      <p>
        Our dedicated staff is committed to providing you with the best
        hospitality. Enjoy our beautifully designed rooms, exquisite dining
        options, and a range of recreational activities to make your stay
        unforgettable.
      </p>
    </section>
  );
};

export default About;
