import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img
        className="nav-logo"
        src="github.png"
        alt="Github-Icon"
        loading="lazy"
      />
      <p>List of GitHub Users</p>
    </nav>
  );
};

export default Navbar;
