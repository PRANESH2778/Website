import React from 'react';

import calculatorImage from '../assets/calculator.jpg';

import chartImage from '../assets/financial-chart.jpg';

import officeImage from '../assets/office.jpg';

import gallery1 from '../assets/gallery1.jpg';

import gallery2 from '../assets/gallery2.jpg';

import gallery3 from '../assets/gallery3.jpg';

import gallery4 from '../assets/gallery4.jpg';



const Home = () => {

  return (

    <div style={styles.container}>

      <h1>Welcome to Agrawal Bhaiya & Company</h1>

      <p>Your trusted partner in accounting, taxation, and financial advisory.</p>



      <div style={styles.imagesContainer}>

        <div style={styles.imageCard}>

          <img src={calculatorImage} alt="Calculator" style={styles.image} />

          <h3>Expert Accounting Services</h3>

          <p>We provide professional accounting services to individuals and businesses.</p>

        </div>

        

        <div style={styles.imageCard}>

          <img src={chartImage} alt="Financial Chart" style={styles.image} />

          <h3>Financial Planning & Advisory</h3>

          <p>Helping you manage your finances and make informed decisions.</p>

        </div>



        <div style={styles.imageCard}>

          <img src={officeImage} alt="Office" style={styles.image} />

          <h3>Dedicated Team of Professionals</h3>

          <p>Our experienced team of chartered accountants are here to assist you.</p>

        </div>

      </div>





      {/* Gallery Section */}

      <section style={styles.gallerySection}>

        <h2>Our Services Gallery</h2>

        <div style={styles.gallery}>

          <img src={gallery1} alt="Gallery 1" style={styles.galleryImage} />

          <img src={gallery2} alt="Gallery 2" style={styles.galleryImage} />

          <img src={gallery3} alt="Gallery 3" style={styles.galleryImage} />

          <img src={gallery4} alt="Gallery 4" style={styles.galleryImage} />

        </div>

      </section>



    </div>

  );

};



const styles = {

  container: {

    textAlign: 'center',

    padding: '20px',

  },

  imagesContainer: {

    display: 'flex',

    justifyContent: 'space-around',

    flexWrap: 'wrap',

    marginTop: '30px',

  },

  imageCard: {

    width: '30%',

    textAlign: 'center',

    margin: '10px 0',

  },

  image: {

    width: '100%',

    height: 'auto',

    borderRadius: '8px',

  },

  visionSection: {

    marginTop: '40px',

    padding: '20px',

    backgroundColor: '#f9f9f9',

    borderRadius: '8px',

  },

  gallerySection: {

    marginTop: '40px',

    padding: '20px',

    backgroundColor: '#f9f9f9',

    borderRadius: '8px',

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

    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

  },

  chooseUsSection: {

    marginTop: '40px',

    padding: '20px',

    backgroundColor: '#f9f9f9',

    borderRadius: '8px',

  },

  bulletList: {

    listStyleType: 'none',

    paddingLeft: 0,

    textAlign: 'left',

    marginTop: '20px',

  },



  // Media Queries for Responsiveness

  '@media (max-width: 768px)': {

    imagesContainer: {

      flexDirection: 'column', // Stack images vertically on smaller screens

      alignItems: 'center',

    },

    imageCard: {

      width: '80%', // Reduce the width of image cards on smaller screens

    },

    gallery: {

      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust grid layout

    },

    galleryImage: {

      borderRadius: '5px',

    },

    h1: {

      fontSize: '24px',

    },

    h2: {

      fontSize: '20px',

    },

    p: {

      fontSize: '16px',

    },

  },



  '@media (max-width: 480px)': {

    imagesContainer: {

      flexDirection: 'column', // Stack images vertically on very small screens

    },

    imageCard: {

      width: '90%', // Further reduce image card width on very small screens

    },

    h1: {

      fontSize: '20px',

    },

    h2: {

      fontSize: '18px',

    },

    p: {

      fontSize: '14px',

    },

  },

};



export default Home;