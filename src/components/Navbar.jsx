import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyWebsite</div>
      <button style={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button>
      <ul style={{ ...styles.navLinks, ...(isOpen ? styles.navLinksActive : {}) }}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            About Us
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.navLink}>
            Services
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/insights" style={styles.navLink}>
            Insights
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/approach" style={styles.navLink}>
            Approach
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "0.8em 1.5em",
    position: "relative",
  },
  logo: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  hamburger: {
    display: "none",
    fontSize: "1.8em",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5em",
    margin: 0,
    padding: 0,
  },
  navLinksActive: {
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "0",
    backgroundColor: "#333",
    width: "100%",
    textAlign: "center",
    zIndex: 1000,
    display: "flex",
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s",
  },
};

export default Navbar;