import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Abouthome from './Pages/Abouthome'
import Galleryhome from './Pages/Galleryhome'
import Gallery from './fulldata/Gallery'
import Signup from './Pages/Login/Signup'
import About from './Sections/About'
import GoogleSuccess from './Pages/Login/GoogleSuccess'
import Contact from './Sections/Contact'
import Login from './Pages/Login/Login'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/about" element={<Abouthome />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
        <Route path="/google-success" element={<GoogleSuccess />} />

<Route path="/galleryhome" element={<Galleryhome />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/aboutpage" element={<About />} />

      </Routes>

    </>
  )
}

export default App
