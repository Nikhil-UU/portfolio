import { FaMoon, FaSun } from "react-icons/fa"; 
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "./Navbar.css";

function Navbar({ darkMode, setDarkMode })  {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">NP</div>
      <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
>
    {darkMode ? <FaSun /> : <FaMoon />}
</button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home"><FaHome /> Home</a></li>

        <li><a href="#about"><FaUser /> About</a></li>

        <li><a href="#skills"><FaCode /> Skills</a></li>

        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>

        <li><a href="#contact"><FaEnvelope /> Contact</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;