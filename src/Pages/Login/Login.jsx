import React from 'react'
import "./Login.css"
import FileUpload from './FileUpload'
const Login = () => {
  return (
    <div > 
   <h1>login page</h1>
  
  <input type="text"  placeholder='uniq id assign by school ' />
  <input type="password"  id="password"  placeholder='enter password' />
<button>submit</button>
<FileUpload />
    </div>
  )
}

export default Login
