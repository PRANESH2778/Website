import React from 'react';

import teamImage from '../assets/office.jpg';



const AboutUs = () => {

  return (

    <div style={styles.container}>

      <h1>About Agrawal Bhaiya & Company</h1>

      <p>We are a Surat-based Chartered Accountant firm founded by three experienced professionals driven by a shared vision – to provide comprehensive, reliable, and innovative financial solutions to our clients.</p>

      <p>With a strong foundation in core financial practices and an adaptable approach to modern business challenges, we serve businesses across industries, helping them stay compliant and competitive in today’s fast-paced economy.</p>



      {/* Mission Section */}

      <section style={styles.missionSection}>

        <h2>Our Mission</h2>

        <p>Our mission is to empower businesses with comprehensive financial solutions that help them thrive in a complex and dynamic financial landscape. We aim to provide proactive, innovative, and customized services that exceed our clients' expectations, ensuring their long-term success.</p>

      </section>



      {/* Why Choose Us Section */}

      <section style={styles.chooseUsSection}>

        <h2>Why Choose Us?</h2>

        <ul style={styles.bulletList}>

          <li>✔️ Combined Expertise of Three Partners</li>

          <li>✔️ Client-Centric Approach</li>

          <li>✔️ Technology-Driven Financial Solutions</li>

          <li>✔️ Commitment to Ethical Practices</li>

          <li>✔️ Tailored Services for Diverse Sectors</li>

        </ul>

      </section>



      {/* Meet Our Partners Section */}

      <section style={styles.meetPartnersSection}>

        <h2>Meet Our Partners</h2>

        <p><strong>CA Niraj Kumar Bhaiya</strong> - Partner | Bank Audits & Tech-Driven Financial Insights</p>

        <p>With over 4 years of professional experience, CA Niraj Kumar Bhaiya brings a unique blend of traditional audit expertise combined with a technology-first approach to financial reporting and data analysis.</p>



        <p><strong>CA Ajay Satyanarayan Agrawal</strong> - Partner | Internal Audit & Litigation Expert</p>

        <p>CA Ajay specializes in internal audits across diverse industries, focusing on identifying operational inefficiencies, financial loopholes, and areas for improvement.</p>



        <p><strong>CA Vijay Satyanarayan Agrawal</strong> - Senior Partner | Financial Reporting & Valuation Expert</p>

        <p>With over 6 years of rich experience in financial reporting, MIS reporting, and startup valuation, CA Vijay plays a crucial role in assisting startups with fundraising through angel investors and venture capitalists.</p>

      </section>



      {/* Team Image */}

      <img src={teamImage} alt="Our Team" style={styles.image} />

    </div>

  );

};



const styles = {

  container: {

    textAlign: 'center',

    padding: '20px',

  },

  missionSection: {

    marginTop: '40px',

    padding: '20px',

    backgroundColor: '#f9f9f9',

    borderRadius: '8px',

  },

  chooseUsSection: {

    marginTop: '40px',

    padding: '20px',

    backgroundColor: '#f9f9f9',

    borderRadius: '8px',

  },

  meetPartnersSection: {

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

  image: {

    width: '80%',

    height: 'auto',

    borderRadius: '8px',

    marginTop: '20px',

  },



  // Media Queries for Responsiveness

  '@media (max-width: 768px)': {

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



export default AboutUs;