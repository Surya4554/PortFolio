import React from "react"
import "./viewprojects.css"
import Card from "./Card"
import ProjectData from "./ProjectData"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h1 className="project-text">Visit My All Projects</h1>
          </div>

          <div className='content grid'>
            {ProjectData.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} desc={value.desc} repoLink={value.repoLink} deployLink={value.deployLink} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio