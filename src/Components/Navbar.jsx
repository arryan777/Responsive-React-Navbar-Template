import React from "react";
import "../Components/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
          <a href="/services">
            <li>Services</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
