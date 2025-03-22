import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<<<<<<< HEAD
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
=======

    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">

      <Container>

        {/* Brand Logo */}

        <Navbar.Brand as={Link} to="/">Agarwal Bhaiya Company </Navbar.Brand>



        {/* Hamburger Toggle */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />



        {/* Navigation Menu */}

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>

            <Nav.Link as={Link} to="/services">Services</Nav.Link>

            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>

            <Nav.Link as={Link} to="/approach">Approach</Nav.Link>

            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

>>>>>>> 3ef48b4ceabc758bcdef6257a2474577de2740c0
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