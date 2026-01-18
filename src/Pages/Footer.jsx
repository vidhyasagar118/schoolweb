import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="school-footer">

      <div className="footer-container">

        {/* 1. School Info */}
        <div className="footer-box">
          <img src="/logo.png" alt="School Logo" className="footer-logo" />
          <h3>MCS ACADEMY</h3>
          <p>
            Providing quality education with strong values and modern learning
            methods to shape a better future.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Admissions</li>
            <li>Facilities</li>
            <li>Contact Us</li>
          </ul>
        </div>

    
        {/* 4. Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 near Ambe Market, Meera Nagar, Chittorgarh, Rajasthan 312001</p>
          <p>📞 +91 46552647865</p>
          <p>📧 mgsacademy@123gmail.com</p>
          <p>🕘 Mon–Sat: 9AM – 4PM</p>

          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
            <span>💬</span>
          </div>
        </div>

      </div>

{/* Map */}
<div className="footer-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.419603940077!2d74.6234839!3d24.890093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a108974fa999%3A0xc7ba3bb950a519c!2sMG%20Science%20Academy!5e0!3m2!1sen!2sin!4v1704630000000"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="MG Science Academy Map"
  ></iframe>
</div>


   

    </footer>
  );
};

export default Footer;
