import React from 'react'
import About from '../Sections/About';
import { Navigate, useNavigate } from 'react-router-dom'
import "./Abouthome.css"
const Abouthome = () => {
  const nevigate = useNavigate();
  return (
    <div className='abouthomediv'>
      <h1 className='homeaboutsectionh1'> 🏫 About Our School</h1>
        <p>Our school is dedicated to providing quality education in a safe and caring environment.
        We focus on academic excellence, strong values, and overall personality development.
        With experienced teachers and modern facilities, we help every child grow with confidence and prepare for a bright and successful future.
      </p>
<div className='divaboutbtn'>
              <button className='aboutbtn' onClick={() => (nevigate("/aboutpage"))}>more about info</button>

</div>
    </div>
  )
}

export default Abouthome
