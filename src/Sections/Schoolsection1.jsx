import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import PrincipalHome from '../Components/PrincipalHome'
import "./Schoolsection1.css"
const Schoolsection1 = () => {
  return (
     <div className='schoolsection1'>
        <div className='mgsaname'> <h1>MAHATMA GANDHI SCIENCE ACADEMY</h1>
              <h3>महात्मा गांधी विज्ञान अकादमी</h3>
              </div>
             <div className='slidersection'>
              <ImageSlider />
             </div>
           <div className="mainnotibox">
  <p className="notification">Notification</p>
  <marquee behavior="scroll" direction="left" scrollamount="6" loop="infinite">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad aliquam corrupti nihil cupiditate, fugiat iste porro. Est quisquam, fugit explicabo cum illum delectus ullam fuga debitis nihil. Nisi quod a aut amet delectus magnam voluptatum accusantium unde quisquam eveniet eaque minima, in sequi provident rerum ipsam sapiente! Eveniet, dignissimos.
  </marquee>
</div>

             <PrincipalHome />
      </div>
  )
}

export default Schoolsection1
