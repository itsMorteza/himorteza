import React from 'react'
import ProjectCard from "./ProjectCard";
const Projects = ({ projects }) => {
 
  return (
        <div class="bg-[#deebca] dark:bg-[#020f06] font-[Garamond] min-h-screen py-10 px-4 text-stone-900 dark:text-yellow-50" id='projects'>
            <h1 className="   text-7xl md:text-7xl    text-center font-extrabold">My Projects</h1>
            <div class="container    mx-auto ">
            <div className='  justify-center grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3'>
                {projects.map((project) => (
                        <ProjectCard project={project} />
                    ))} 
            </div></div>
      </div>
  )
}

export default Projects
 