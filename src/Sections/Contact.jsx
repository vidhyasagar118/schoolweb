import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setMsg(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setMsg("Something went wrong ❌");
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
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Fill the form below to contact us</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message (optional)"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <p className="msg">{msg}</p>
    </div>
    


    </section>
  );
};

export default Contact;
