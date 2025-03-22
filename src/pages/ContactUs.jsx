import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to schedule a consultation, please contact us.</p>
      
      {/* <img src={contactImage} alt="Contact Us" style={styles.image} /> */}

      <p>Email: info@abcaccountants.com</p>
      <p>Phone: +123 456 7890</p>
      
      {/* Contact Form */}
      <section style={styles.formSection}>
        <h2>Get in Touch</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </section>

      {/* Optional: Embed Google Maps */}
      <section style={styles.mapSection}>
        <h2>Our Location</h2>
        <div style={styles.map}>
          <iframe 
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0567469013115!2d106.62716031520334!3d10.756089460104043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec2c832a9db%3A0xb699e5c708897fbc!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1597392042974!5m2!1sen!2s"
            style={styles.mapIframe}
            allowFullScreen=""
            loading="lazy">
          </iframe>
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
  image: {
    width: '80%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '20px',
  },
  formSection: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    width: '80%',
    height: '150px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mapSection: {
    marginTop: '30px',
    padding: '20px',
  },
  map: {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: '0',
  },

  // Media Queries for Responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '15px',
    },
    image: {
      width: '90%', // Adjust image width for tablets
    },
    h1: {
      fontSize: '24px', // Reduce heading font size for tablets
    },
    p: {
      fontSize: '16px', // Reduce paragraph font size for tablets
    },
    formSection: {
      padding: '15px',
    },
    input: {
      width: '90%', // Make inputs larger on smaller screens
    },
    submitButton: {
      width: '90%', // Make the button larger for better touch accessibility
    },
  },

  '@media (max-width: 480px)': {
    container: {
      padding: '10px',
    },
    h1: {
      fontSize: '20px', // Further reduce heading font size for mobile
    },
    p: {
      fontSize: '14px', // Further reduce paragraph font size for mobile
    },
    image: {
      width: '100%', // Make image full-width on mobile screens
    },
    formSection: {
      padding: '10px',
    },
    input: {
      width: '100%', // Full-width inputs on mobile
    },
    submitButton: {
      width: '100%', // Full-width submit button on mobile
    },
  },
};

export default ContactUs;
