import React from 'react'
import Abouthome from './Abouthome'
import Galleryhome from './Galleryhome'
import Schoolsection1 from '../Sections/schoolsection1'
import Section2Acad from '../Sections/Section2Acad'
import Section3faci from '../Sections/Section3faci'
import Motivationalquote1 from '../Components/Motivationalquote1'
import "./Home.css"
import Contacthome from './Contacthome'
const Home = () => {
  return (
    <>
<Schoolsection1 />
<Section2Acad /> 
<Section3faci />
<Motivationalquote1 />
      <Galleryhome />
      <Abouthome />
      <Contacthome />
  
    </>
  )
}

export default Home
