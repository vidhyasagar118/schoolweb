import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "❌ Failed to send message");
      }
    } catch (error) {
      alert("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2>📞 Contact & Location</h2>

      {/* Location */}
      <div className="contact-location">
        <h3>📍 Our Location</h3>
        <p>
          Our school is conveniently located in a peaceful and easily accessible
          area, providing a safe and comfortable environment for students.
        </p>

        <address>
          <strong>Address:</strong>
          <br />
          meera market chittorgarh

          <br />
          chittorgarh rajsthan State 812021
        </address>

        <p>🗺️ Find us easily on Google Maps and visit our campus anytime.</p>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h3>☎️ Contact Details</h3>
        <ul>
          <li>📞 Phone: +91 9XXXXXXXXX</li>
          <li>☎️ Landline: 0XXX-XXXXXX</li>
          <li>📧 Email: info@schoolname.com</li>
          <li>🕘 Office Hours: Mon – Sat | 9:00 AM – 4:00 PM</li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>📝 Send Us a Message</h3>
        <p>Have any questions? Fill out the form below.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        <p className="response-time">👉 We usually respond within 24 hours.</p>
      </div>
    </section>
  );
};

export default Contact;
