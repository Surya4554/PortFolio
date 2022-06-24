import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt=''/>
        </div>
        <div className='category d_flex'>
          <span>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2>{props.title}</h2>
        </div>
        <div>
           <p>{props.desc}</p>
        </div>
        <div className="link">
            <a href={props.deployLink} target="_blank" rel="noreferre" >
               <h5>View Project <i class='fas fa-arrow-right arrow'></i></h5>
            </a>
            <a href={props.repoLink} target="_blank" rel="noreferre" className="port-h5" >
               <h5 >View Source <i class='fas fa-arrow-right arrow'></i></h5>
            </a>
        </div>
      </div>
    </>
  )
}

export default Card