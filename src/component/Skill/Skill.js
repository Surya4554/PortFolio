import React from 'react'
import './skill.css'
import {FaConnectdevelop} from 'react-icons/fa'
import {AiOutlineTaobaoCircle, AiOutlineSlack} from 'react-icons/ai'


const Skill = () => {
  return (
    <div className='skill-margin top'>
    <div className='container skill_shadow skill-container'>
      <h1 className='skill-text'>What Skills I Have</h1>
      <div className='skill-child-cont d_flex'>
         <div>
            <h2 className='primary_color'>Frontend</h2>
            <div className='btn_shadow2 mtop'>
                <h3><FaConnectdevelop /> <span>HTML</span></h3>
                <h3><FaConnectdevelop /> <span>CSS</span></h3>
                <h3><FaConnectdevelop /> <span>BOOTSTRAP</span></h3>
                <h3><FaConnectdevelop /> <span>JAVASCRIPT</span></h3>
                <h3><FaConnectdevelop /> <span>SASS / SCSS</span></h3>
                <h3><FaConnectdevelop /> <span>REACT / REDUX</span></h3>
                <h3><FaConnectdevelop /> <span>MATERIAL UI</span></h3>
            </div>
         </div>
         <div>
            <h2 className='primary_color'>Backend / Tools</h2>
            <div className='btn_shadow2 mtop'>
                <h3><AiOutlineTaobaoCircle /> <span>NODE JS</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>EXPRESS JS</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>MONGODB</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>MONGOOSE</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>REST API</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>NPM / YARN</span></h3>
                <h3><AiOutlineTaobaoCircle /> <span>GIT / GITHUB</span></h3>
            </div>
         </div>
         <div>
            <h2 className='primary_color'>Design/Subject</h2>
            <div className='btn_shadow2 mtop'>
                <h3><AiOutlineSlack /> <span>FIGMA</span></h3>
                <h3><AiOutlineSlack /> <span>DSA</span></h3>
                <h3><AiOutlineSlack /> <span>DBMS</span></h3>
                <h3><AiOutlineSlack /> <span>NETWORKING</span></h3>
                <h3><AiOutlineSlack /> <span>SQL/MySQL</span></h3>
                <h3><AiOutlineSlack /> <span>C/C++</span></h3>
                <h3><AiOutlineSlack /> <span>Core JAVA</span></h3>
            </div>
         </div>
         
      </div>
    </div>
    </div>
  )
}

export default Skill;
