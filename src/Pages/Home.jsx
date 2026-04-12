import React from 'react'
import Abouthome from './Abouthome'
import Galleryhome from './Galleryhome'
import Section1name from '../Sections/Section1name'
import Section2Acad from '../Sections/Section2Acad'
import Section3faci from '../Sections/Section3faci'
import Motivationalquote1 from '../Components/Motivationalquote1'
import Footer from './Footer'
import "./Home.css"
import Contacthome from './Contacthome'
import Topperdisplay from '../Toppers/Topperdisplay'
const Home = () => {
  return (
    <>
    <Section1name/>
<Section2Acad /> 
<Section3faci />
<Motivationalquote1 />
      <Galleryhome />
      <Abouthome />
            <Contacthome />
            <Topperdisplay />
    </>
  )
}

export default Home
