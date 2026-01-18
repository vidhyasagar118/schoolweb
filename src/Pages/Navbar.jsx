import React, { useState } from "react";
import "./Navbar.css"
import { Navigate, useNavigate } from "react-router-dom";
import Mainnavbar from "./Mainnavbar";
const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
const nevigate=useNavigate();

  return (
    <>
    <div className='navdiv'>
        <ul>
            <li className="navbarli"> <div className="showbtn" onClick={() => setShowMenu(!showMenu)}>
                      <i class="fas fa-bars"></i>

            </div></li>
              <li  className='schoolname navbarli'>MGS Academy</li>
            <li className="navbarli" onClick={()=>{nevigate("/signup")}}><button>Login</button></li>
        </ul>
    </div>
          <Mainnavbar isVisible={showMenu} onClose={() => setShowMenu(false)} />

    </>
  )
}

export default Navbar
