import "./Contacthome.css"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"
const Contacthome = () => {
  const nevigate=useNavigate();
  
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
const res = await axios.post(
  "https://schoolprobackend.onrender.com/api/contact",
  formData
);      setMsg(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setMsg("Something went wrong ❌");
    }
  };

  return (
    <div className='Contacthome'>
      <h1 className='Contacthomeh1'>☎️ Contact Details</h1>
      <div>
        <h2 className='Contacthomeh2'>We are always happy to help you with your queries regarding admissions and school information.</h2>
        <div className='Contactlidiv'>
            <ul>
                <li>🌐<span> Website:</span></li>
<li>📞 <span>Phone: +91 543512766</span></li>
<li>☎️ <span>Landline: near sbi bank collectery chouraha chittorgarh </span></li>
<li>📧 <span>Email: mgsacademychittorgarh.com</span></li>
            </ul>
        </div>
        <div className='contactmorebtn'>
          <button onClick={()=>{nevigate("/contact")}}>More contact info</button>
        </div>
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
    

    </div>
  )
}

export default Contacthome
