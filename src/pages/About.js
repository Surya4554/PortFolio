import React from 'react';
import Resume from '../component/Resume/Resume';
import Footer from '../component/Footer/Footer';
import Experience from '../component/Experience/Experience';
import Skill from '../component/Skill/Skill';

const About = () => {
  return (
    <>
       <Experience />
       <Resume />
       <Skill />
       <Footer />
    </>
  )
}

export default About;
