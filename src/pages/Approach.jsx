import React from 'react';



const Approach = () => {

  return (

    <div style={styles.container}>

      <h1>Our Approach</h1>



      <section style={styles.section}>

        <h2>Client First</h2>

        <p>We align our services to meet your specific business goals. At Agrawal Bhaiya & Company, we understand that every client is unique, so we tailor our approach to ensure your financial objectives are met with precision.</p>

      </section>



      <section style={styles.section}>

        <h2>Tech-Enabled Services</h2>

        <p>We use advanced accounting software and tools to ensure efficient and accurate service delivery. Technology is integrated into every aspect of our services, making financial management more accessible and streamlined for you.</p>

      </section>



      <section style={styles.section}>

        <h2>Proactive Advisory</h2>

        <p>Beyond compliance, we offer strategic insights to help you grow. Our team doesn't just file taxes or balance sheets, we help you make informed decisions that contribute to the long-term success of your business.</p>

      </section>



      <section style={styles.section}>

        <h2>Transparent Communication</h2>

        <p>We believe in clear and open communication. You will receive regular updates on your financial status, clear pricing, and prompt delivery of services. We make sure you’re always in the loop about your financial health.</p>

      </section>

    </div>

  );

};



const styles = {

  container: {

    textAlign: 'center',

    padding: '20px',

  },

  section: {

    marginTop: '20px',

    marginBottom: '20px',

    padding: '20px',

    borderRadius: '8px',

    backgroundColor: '#f9f9f9',

    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

  },

  h1: {

    fontSize: '28px',

    fontWeight: 'bold',

  },

  h2: {

    fontSize: '22px',

    marginBottom: '10px',

  },

  p: {

    fontSize: '16px',

    lineHeight: '1.6',

    color: '#555',

  },



  // Media Queries for Responsiveness

  '@media (max-width: 768px)': {

    container: {

      padding: '15px',

    },

    h1: {

      fontSize: '24px',

    },

    h2: {

      fontSize: '20px',

    },

    p: {

      fontSize: '14px',

    },

  },



  '@media (max-width: 480px)': {

    container: {

      padding: '10px',

    },

    h1: {

      fontSize: '20px',

    },

    h2: {

      fontSize: '18px',

    },

    p: {

      fontSize: '12px',

    },

  },

};



export default Approach;