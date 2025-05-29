// filepath: /hotel-landing-page/hotel-landing-page/src/components/Footer/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', background: '#333', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} Hotel Name. All rights reserved.</p>
      <p>Follow us on:</p>
      <div>
        <a href="#" style={{ margin: '0 10px', color: '#fff' }}>Facebook</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff' }}>Twitter</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff' }}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;