import React, { useState } from 'react';
import calculatorImage from '../assets/calculator.jpg';
import chartImage from '../assets/financial-chart.jpg';
import officeImage from '../assets/office.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import './Home.css'
import { slides } from '../data/couroselData.json'
import Courosel from '../components/Courosel';
import ExperienceSection from './ExperienceSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import IndustrySection from '../components/IndustrySection';
import GallerySection from '../components/GallerySection';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredGalleryImage, setHoveredGalleryImage] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Agrawal Bhaiya & Company</h1>
      <p style={styles.subtitle}>
        Your trusted partner in accounting, taxation, and financial advisory.
      </p>

      {/* Call-to-Action Section */}
      {/* <div style={styles.callToAction}>
        <button style={styles.button}>Get a Free Consultation</button>
        <button style={styles.buttonSecondary}>Contact Us</button>
      </div> */}

      <Courosel data={slides}/>
      {/* Gallery Section */}
      {/* <section style={styles.gallerySection}>
        <h2 style={styles.galleryTitle}>Our Services Gallery</h2>
        <div style={styles.gallery}>
          {[gallery1, gallery2, gallery3, gallery4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{
                ...styles.galleryImage,
                transform: hoveredGalleryImage === index ? "scale(1.02)" : "scale(1)",
                boxShadow: hoveredGalleryImage === index ? "0px 6px 15px rgba(0, 0, 0, 0.2)" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setHoveredGalleryImage(index)}
              onMouseLeave={() => setHoveredGalleryImage(null)}
            />
          ))}
        </div>
      </section> */}
      <GallerySection/>
      <ExperienceSection/>
      <IndustrySection/>
      <WhyChooseUsSection/>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #f7f9fc, #e8eff7)', // Gradient background
    color: '#333',
  },
  title: {
    fontSize: '2.5em',
    color: '#2b6777',
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  callToAction: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#2b6777',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonSecondary: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#2b6777',
    backgroundColor: '#f7f9fc',
    border: '2px solid #2b6777',
    borderRadius: '5px',
    marginLeft: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },

  gallerySection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  galleryTitle: {
    fontSize: '1.8em',
    color: '#2b6777',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
};

export default Home;