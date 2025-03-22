import React from "react";
import { FaUsersCog, FaHeadset, FaCogs, FaDollarSign, FaLock, FaClock } from "react-icons/fa";
import "./WhyChooseUsSection.css";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <p>
        Discover why businesses trust us to deliver exceptional solutions that
        exceed expectations.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <FaUsersCog size={50} color="#007acc" />
          <h3>Expert Team</h3>
          <p>
            Our team of skilled professionals ensures high-quality results for
            every project.
          </p>
        </div>
        <div className="feature-card">
          <FaHeadset size={50} color="#007acc" />
          <h3>24/7 Support</h3>
          <p>
            We provide round-the-clock support to keep your business running
            smoothly.
          </p>
        </div>
        <div className="feature-card">
          <FaCogs size={50} color="#007acc" />
          <h3>Custom Solutions</h3>
          <p>
            Tailored services designed to meet the unique needs of your
            business.
          </p>
        </div>
        <div className="feature-card">
          <FaDollarSign size={50} color="#007acc" />
          <h3>Affordable Prices</h3>
          <p>
            We offer competitive pricing without compromising on quality.
          </p>
        </div>

        {/* New feature cards */}
        <div className="feature-card">
          <FaLock size={50} color="#007acc" />
          <h3>Data Security</h3>
          <p>
            We prioritize the security of your data with top-notch protection
            measures and compliance.
          </p>
        </div>
        <div className="feature-card">
          <FaClock size={50} color="#007acc" />
          <h3>Timely Delivery</h3>
          <p>
            We ensure that your projects are delivered on time, every time,
            without compromising on quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;