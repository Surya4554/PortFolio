import React from "react"
import "./hero.css"
import hero from "../pic/hero.png";
import banner from "../pic/banner.png";
import Typical from 'react-typical';

const Hero = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex mtop'>
          <div className='left mtop'>
            <h3>HELLO, YOUR WELCOME IN MY WEBSITE</h3>
            <h1>
              Hi, I’m <span>Suraj Kumar Prajapati</span>
            </h1>
            <h2>
              a
              <span>
              <Typical steps={[' Front End Developer', 3000, ' React JS Developer', 3000, ' MERN Developer', 3000, ' Back End Developer', 3000, ' Full Stack Developer']} loop={Infinity} wrapper="span" />
              </span>
            </h2>

            <p>Dedicated and determined aspiring Full-Stack-Developer with a specialization in MERN Stack. Seeking challenging opportunities to make the best use of my abilities and knowledge to develop both my professional and interpersonal skills, along with fulfilling the organization's growth and goals.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME ON </h4>
                <div className='button'>
                  <button className='btn_shadow'>
                     <a href="https://www.facebook.com/suryakumar.surya.752861/" target = "_blank"><i className='fab fa-facebook-f'></i></a>
                  </button>
                  <button className='btn_shadow'>
                     <a href="https://www.instagram.com/suryakumarsurya4554/" target = "_blank" ><i className='fab fa-instagram'></i></a>
                  </button>
                  <button className='btn_shadow'>
                     <a href="https://www.youtube.com/channel/UCNsMyt2hPx4Yt0oTNdnD4YQ" target = "_blank" ><i className='fab fa-youtube'></i></a>
                  </button>
                  <button className='btn_shadow'>
                     <a href="https://www.linkedin.com/in/suraj-kumar-prajapati/" target = "_blank" ><i className='fab fa-linkedin-in'></i></a>
                  </button>
                  <button className='btn_shadow'>
                     <a href="https://github.com/Surya4554" target = "_blank" ><i className='fab fa-github'></i></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='suraj-logo'/>
            </div>
            <div className="banner-image">
               <img src={banner} alt="banner" width={550} height={150} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;