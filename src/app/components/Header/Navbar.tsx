"use client";
import React from "react";
import Link from "next/link";
import "./navbar.css";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`navContainer ${scrolled ? "scrolled" : ""}`}>
      {/* The div below is styled by ".navContainer > div" in navbar.css */}
      <div>
        <Link href="/" className="siteTitle">
          PortfolioHotel
        </Link>
        <div className="navLinks">
          <Link href="/rooms" className="navLink">
            Szobák
          </Link>
          <Link href="/dining" className="navLink">
            Étterem
          </Link>
          <Link href="/contact" className="navLink">
            Kapcsolat
          </Link>
          <Link href="/book" className="bookButton navLink">
            Foglalás
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
