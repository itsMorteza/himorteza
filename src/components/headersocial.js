import React from 'react'
import Content from '../content';

function Headersocial() {
 
  const SocialMedia = Content.home.Socials;
  return (
    <div class='transparent text-white pl-5  flex flex-col absolute bottom-0 space-y-4' orientation="left">
        <div class='w-0.5 h-20 bg-white'> </div>       
        { SocialMedia.map(Media => (
            <a class='bg-black text-white' href={Media.Links} aria-label={Media.name} target="_blank" rel="noreferrer">
              {Media.logo}  
            </a>
         ))}    
        <div class='w-0.5 h-40  bg-white'> </div>       

     </div>
     
  )
}

export default Headersocial