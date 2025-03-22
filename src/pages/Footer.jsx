import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.section}>
          <h3 style={styles.title}>Agrawal Bhaiya & Company</h3>
          <p>Your trusted partner in accounting, taxation, and financial advisory.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <ul style={styles.links}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/aboutus" style={styles.link}>About Us</a></li>
            <li><a href="/contactus" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.title}>Contact Us</h3>
          <p>📍 Address: 123 Financial Street, Chennai, India</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: info@agrawalcompany.com</p>
        </div>
      </div>

      {/* Social Media */}
      <div style={styles.socialMedia}>
        <a href="https://facebook.com" style={styles.icon}>🌐</a>
        <a href="https://twitter.com" style={styles.icon}>🐦</a>
        <a href="https://linkedin.com" style={styles.icon}>🔗</a>
      </div>

      {/* Copyright */}
      <div style={styles.copyRight}>
        <p>© {new Date().getFullYear()} Agrawal Bhaiya & Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2b6777',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  section: {
    flex: '1 1 250px',
    margin: '10px',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#f9f9f9',
  },
  links: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#f9f9f9',
    textDecoration: 'none',
    margin: '5px 0',
    display: 'block',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#ffcc00',
  },
  socialMedia: {
    margin: '20px 0',
  },
  icon: {
    margin: '0 10px',
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  copyRight: {
    fontSize: '0.9em',
    marginTop: '10px',
    color: '#cfcfcf',
  },
};

export default Footer;