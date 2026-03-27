import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Abouthome from './Pages/Abouthome'
import Galleryhome from './Pages/Galleryhome'
import Gallery from './fulldata/Gallery'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Login from './Pages/Login/Login'
import Footer from './Pages/Footer'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/about" element={<Abouthome />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />

<Route path="/galleryhome" element={<Galleryhome />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/aboutpage" element={<About />} />

      </Routes>
<Footer />
    </>
  )
}

export default App
