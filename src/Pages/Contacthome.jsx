import React from 'react'
import "./Contacthome.css"
import { Navigate, useNavigate } from 'react-router-dom'
const Contacthome = () => {
  const nevigate=useNavigate();
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
    </div>
  )
}

export default Contacthome
