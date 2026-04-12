import React, { useState } from 'react'
import "./Login.css"
import FileUpload from './FileUpload'
import Toppersposter from '../../Toppers/Toppersposter'
import Atendencesheet from '../Ateendence/Atendencesheet'
const Login = () => {

  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    const correctPassword = "12345"

    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert("Wrong password ❌")
    }
  }

  return (
    <div className="login-container">

      {/* 👇 Agar login nahi hua hai tabhi form dikhe */}
      {!isAuthenticated ? (
        <div className="login-box">
          <h1 className="login-title">Login Page</h1>

          <input
            type="text"
            className="login-input"
            placeholder='Unique ID assigned by school'
          />

          <input
            type="password"
            className="login-input"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" onClick={handleLogin}>
            Submit
          </button>
        </div>
      ) : (
        <div className="upload-section">
          <h2>Welcome ✅</h2>
          <FileUpload />
                      <Toppersposter  />
          
          <Atendencesheet />
        </div>
      )}

    </div>
  )
}

export default Login