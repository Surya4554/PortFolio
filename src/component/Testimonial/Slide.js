import React from "react"
import TestimonialApi from "./TestimonialApi";

const Slide = ({ id, design, name, offcer, post,desc, valueIndex, index }) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        <div className='left box_shodow'>
          <div className='img'>
            <img src={require('../pic/slide8.png')} alt='User-logo' width={140} height={140} />
          </div>
          <div className='details mtop'>
            <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label>
          </div>
        </div>

        <div className='right'>
          <div className='content box_shodow mtop'>
            <h1>{post}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </article>

	    <img className="bottom-image" src='https://img.freepik.com/free-vector/vector-mockup-poster-banner-hanging-with-brick-wall-background-neon-light_45996-1236.jpg?w=740' alt='' />
    </>
  )
}

export default Slide