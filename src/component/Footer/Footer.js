import React from "react"
import logo1 from "../pic/logo1.png"
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer top">
        <div className='footer-container'>
          <div className='img'>
            <img src={logo1} alt='' width={50} height={55} />
          </div>
          <p>© Made with 💞 by Suraj.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer