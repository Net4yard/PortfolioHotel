// filepath: /hotel-landing-page/hotel-landing-page/src/components/Sections/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div>
        <h3>Or reach us at:</h3>
        <p>Email: info@hotel.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default Contact;