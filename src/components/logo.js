import React from 'react'
import Content from '../content'
import { Link as ScrollLink } from 'react-scroll'

function Logo() {
  return (
    <div  
    className=' font-[Garamond]  top-0 bg-[#deebca] dark:bg-[#020f06]  z-30' id='logo'>
    <div className="w-8/12 mx-auto py-2 flex flex-row shadow-lg
    items-center justify-between text-black dark:text-white    ">
        <ScrollLink to='home' smooth={true} 
        className={`${   '-translate-x-15 opacity-100'} 
        transform tracking-wide transition duration-2500  
        cursor-pointer flex flex-row `} onClick={()=>window.location.reload()}>
            <div class="shrink-0 dark:opacity-0"><img class="  h-12 w-12"  src={Content.logo.imgdark} alt=" logo"/></div>
            <div class="shrink-0 opacity-0 dark:-translate-x-12 dark:opacity-100"><img class="  h-12 w-12"  src={Content.logo.img} alt=" logo"/></div>
            <div class="translate-y-1 -translate-x-12"><div class="text-3xl font-medium  logopar  ">{Content.logo.logo}</div></div>
        </ScrollLink>
         </div>
         </div>
         )
}

export default Logo
