import React from 'react'

import Content from '../content';
 
function About() {
  const Skills = Content.about.Skills;

  return (
        <div className='min-h-screen font-[Garamond] bg-[#deebca] dark:bg-[#020f06]  flex  flex-col md:flex-row justify-evenly items-center  bg-soft  text-black dark:text-white' id='about'>
            <div className=' w-5/6 lg:w-2/5 mt-10  text-justify'>
                <h1 className='text-5xl   first-letter:text-8xl  font-bold'>{Content.about.name}</h1>
                <h2 className=' mt-3 text-md md:text-3xl font-bold'>{Content.about.question}</h2>
                <p className='mt-5  text-sm md:text-2xl  md:first-letter:text-7xl first-letter:text-2xl first-letter:font-bold 
                first-letter:mr-3 first-letter:float-left columns-xs gap-x-12'>{Content.about.para}.</p>
                <h2 className=' mt-3 text-md md:text-2xl font-bold'>Death Notes</h2>
                <div className='   flex flex-row px-6 py-4 whitespace-no-wrap border-b border-gray-600 text-xs md:text-md lg:text-lg justify-evenly '>
                  { Skills.map(skill => ( <div class="translate-y-1  flex">{skill.logo}    {skill.name}</div>   ))}                 

                </div>
            </div> 
            <img class="block  w-1/3 align-middle   rounded-xl brightness-50 
            hue-rotate-45 hover:brightness-100 hover:hue-rotate-0 transition duration-2000  hover:scale-105  " src={Content.about.img}  alt="me2"></img>
        </div>
  )
}

 
export default About 
/**
 *                 <div className='    flex flex-row place-items-center columns-10  gap-10  justify-center '>
                   <SiCplusplus class="translate-y-1"/> CPlusPlus  <span className=" w-5	">   </span>

 */