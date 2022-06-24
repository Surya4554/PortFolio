import React , {useRef, useState} from 'react';
import emailjs from 'emailjs-com'
import './contactme.css';
import {AiOutlineMail} from 'react-icons/ai';
import {IoLogoLinkedin} from 'react-icons/io'
import {FaWhatsappSquare} from 'react-icons/fa'
import PopUp from '../PopUp/PopUp';


const ContactMe = () => {
    const [buttonPop, setButtonPop] = useState(false);


    const form = useRef();
    const sendEmail = async (e) =>{
        e.preventDefault();
        await emailjs.sendForm('service_2lwujqx', 'template_rz2bt7i', form.current, 'dSC7M0gGOVbLqswN9')
        e.target.reset();
        setButtonPop(true);
    };

  return (
    <div className='margin-bottom top'>
    <section className='container mtop contact-container'>
    <h2 className='primary_color text-center mb'>Fill Form To Contact With Me</h2>
    <div className='main-contact'>
      <div className='left-contact text-center'>
         <div className='btn_shadow2'>
           <h3 className='primary_color'><AiOutlineMail /></h3>
           <h3>Email</h3>
           <h5 className='gmail'>skp4554@gmail.com</h5>
           <a className='click-me' href="mailto:skp4554@gmail.com" target="_blank" >Send a message <i class='fas fa-arrow-right arrow'></i></a>
         </div>
         <div className='btn_shadow2'>
            <h3 className='blue'><IoLogoLinkedin /></h3>
            <h3>Linkedin</h3>
            <h5>Suraj Kumar Prajapati</h5>
            <a className='click-me' href="https://www.linkedin.com/in/suraj-kumar-prajapati/" target="_blank" >Via Linkedin <i class='fas fa-arrow-right arrow'></i></a>
        </div>
        <div className='btn_shadow2'>
            <h3 className='green'><FaWhatsappSquare /></h3>
            <h3>Whatsapp</h3>
            <h5>+91 9598894554</h5>
            <a className='click-me' href="https://api.whatsapp.com/send?phone=919598894554" target="_blank" >Send a message <i class='fas fa-arrow-right arrow'></i></a>
        </div>
      </div>
      <div className='right-contact'>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email Id' required />
            <input type="text" name='number' placeholder='Your Phone Number' required />
            <textarea name='message' cols='30' rows='7' placeholder='Write Your Message' required></textarea>
            <button className='click-me' type='submit'>Send Message <i class='fas fa-arrow-right arrow'></i></button>
        </form>
      </div>
    </div>  
    </section>
    <PopUp trigger={buttonPop} setTrigger={setButtonPop}>
          <h2>Your Form was Successfully Submitted. Thank You !! </h2>
    </PopUp>
    </div>
  )
}

export default ContactMe;
