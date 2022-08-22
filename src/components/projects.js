import React from 'react'
import ProjectCard from "./ProjectCard";
const Projects = ({ projects }) => {
 
  return (
        <div class="bg-[#03200c] min-h-screen py-10 px-4" id='projects'>
            <h1 className="   text-7xl md:text-7xl  text-yellow-100 text-center font-extrabold">My projects</h1>
            <div class="container  text-yellow-100 mx-auto ">
            <div className='  justify-center grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3'>
                {projects.map((project) => (
                        <ProjectCard project={project} />
                    ))} 
            </div></div>
      </div>
  )
}

export default Projects
 