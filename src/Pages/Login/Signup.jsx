import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const API = "http://localhost:5000/api/auth";

  // Prefill Google user info if available
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setOtp("");
    setStep(1);
    alert("Logged out successfully!");
  };

  // Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/signup`, { name, email, phone, password });
      alert(res.data.message);
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // Verify OTP → go to login page (Flipkart style)
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/verify-otp`, { email, otp });
      alert(res.data.message);
      navigate("/login"); // ✅ redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  // Google signup
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      {localStorage.getItem("user") && (
        <button
          onClick={handleLogout}
          style={{
            background: "#555",
            color: "white",
            padding: "8px 15px",
            marginBottom: "20px",
            width: "100%",
            cursor: "pointer",
            border: "none",
            borderRadius: "4px"
          }}
        >
          Logout
        </button>
      )}

      {step === 1 && (
        <form onSubmit={handleSignup}>
          <h2>Signup</h2>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Send OTP</button>
          <hr />
          <button
            type="button"
            onClick={handleGoogleSignup}
            style={{ background: "#db4437", color: "white", padding: "10px", width: "100%" }}
          >
            Continue with Google
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <h2>Verify OTP</h2>
          <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
          <button type="submit">Verify & Go to Login</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
