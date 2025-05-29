import React from "react";
import Link from "next/link";
import { ParallaxLayer } from "@react-spring/parallax";

const Navbar = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{
        display: "static",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        zIndex: 10,
      }}
    >
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-bold">
            PortfolioHotel
          </Link>
          <div className="space-x-4">
            <Link href="/rooms" className="text-gray-300 hover:text-white">
              Rooms & Suites
            </Link>
            <Link href="/amenities" className="text-gray-300 hover:text-white">
              Amenities
            </Link>
            <Link href="/dining" className="text-gray-300 hover:text-white">
              Dining
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link
              href="/book"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </ParallaxLayer>
  );
};

export default Navbar;
