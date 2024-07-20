import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
        <li><Link to="/works">WORKS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
