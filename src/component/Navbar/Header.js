import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo1.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("actives", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' width={50} height={56} /> <span className="my-name">Suraj</span>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li> <NavLink to='/' exact> Home </NavLink> </li>
              <li> <NavLink to='/about'> About </NavLink> </li>
              <li> <NavLink to='/projects'> Project </NavLink> </li>
              <li> <NavLink to='/contact'> Contact </NavLink> </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header