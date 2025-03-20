import React from 'react';

import financialAdvisoryImage from '../assets/financial-advisory.jpg';



const Services = () => {

  return (

    <div style={styles.container}>

      <h1>Our Services</h1>

      <p>At Agrawal Bhaiya & Company, we offer a wide range of financial services tailored to meet the needs of businesses and individuals. Our team of experienced professionals is committed to providing reliable and comprehensive financial solutions.</p>



      {/* List of Services */}

      <ul style={styles.servicesList}>

        <li><strong>Direct Taxation</strong>

          <ul style={styles.subServicesList}>

            <li>Income Tax Return Filing</li>

            <li>Tax Advisory & Planning</li>

            <li>Tax Audits</li>

            <li>Representation before Tax Authorities</li>

          </ul>

        </li>

        <li><strong>GST & Indirect Taxes</strong>

          <ul style={styles.subServicesList}>

            <li>GST Registration & Compliance</li>

            <li>GST Returns Filing & Audits</li>

            <li>Advisory on Input Tax Credit (ITC)</li>

            <li>GST Health Check & Litigation Support</li>

          </ul>

        </li>

        <li><strong>Accounting & Bookkeeping</strong>

          <ul style={styles.subServicesList}>

            <li>Outsourced Accounting</li>

            <li>Cloud Accounting Solutions (QuickBooks, Xero)</li>

            <li>Financial Statement Preparation</li>

            <li>MIS Reporting</li>

          </ul>

        </li>

        <li><strong>Audit & Assurance</strong>

          <ul style={styles.subServicesList}>

            <li>Statutory Audits</li>

            <li>Internal Audits</li>

            <li>Forensic Audits</li>

            <li>Stock Audits</li>

          </ul>

        </li>

        <li><strong>Business Advisory</strong>

          <ul style={styles.subServicesList}>

            <li>Business Structuring & Restructuring</li>

            <li>Due Diligence</li>

            <li>Financial Modelling</li>

            <li>Cash Flow & Budgeting Advisory</li>

          </ul>

        </li>

        <li><strong>Startup & SME Services</strong>

          <ul style={styles.subServicesList}>

            <li>Startup Incorporation (Company, LLP, Proprietorship)</li>

            <li>Funding & Investor Relations Support</li>

            <li>Government Scheme Guidance (MSME, Startup India)</li>

            <li>Compliance Management</li>

          </ul>

        </li>

        <li><strong>International Taxation & FEMA</strong>

          <ul style={styles.subServicesList}>

            <li>Cross Border Tax Advisory</li>

            <li>DTAA Advisory</li>

            <li>FEMA Compliances</li>

            <li>Foreign Subsidiary Setup & Compliances</li>

          </ul>

        </li>

      </ul>



      {/* Image */}

      <img src={financialAdvisoryImage} alt="Financial Advisory" style={styles.image} />

    </div>

  );

};



const styles = {

  container: {

    textAlign: 'center',

    padding: '20px',

  },

  servicesList: {

    listStyle: 'none',

    padding: 0,

    marginTop: '20px',

    fontSize: '18px',

    lineHeight: '1.6',

    textAlign: 'left',

  },

  subServicesList: {

    listStyle: 'none',

    paddingLeft: '20px',

    fontSize: '16px',

    marginTop: '10px',

  },

  image: {

    width: '80%',

    height: 'auto',

    borderRadius: '8px',

    marginTop: '20px',

  },



  // Media Queries for Responsiveness

  '@media (max-width: 768px)': {

    container: {

      padding: '15px',

    },

    servicesList: {

      fontSize: '16px',

    },

    subServicesList: {

      fontSize: '14px',

    },

    image: {

      width: '90%', // Adjust image size for smaller screens

    },

    h1: {

      fontSize: '24px',

    },

  },



  '@media (max-width: 480px)': {

    container: {

      padding: '10px',

    },

    servicesList: {

      fontSize: '14px', // Further reduce font size for small screens

    },

    subServicesList: {

      fontSize: '12px', // Further reduce font size for small screens

    },

    image: {

      width: '100%', // Make image full width on very small screens

    },

    h1: {

      fontSize: '20px',

    },

  },

};



export default Services;