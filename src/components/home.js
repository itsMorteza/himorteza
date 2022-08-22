import React from "react";
import useStartAnimation from './animation';
import Typewriter from 'typewriter-effect';
import Content from "../content";
import PCBURN from "./pcburn";

const Home = () => {
    const animated = useStartAnimation()

    return (
        <div className='min-h-screen flex justify-center items-center bg-[#03200c]' id='home'>
            <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center'> 
                <div className='text-white z-10 font-dosis text-center md:text-left'>
                    <h3 className="transform opacity-60 translate-y-50 transition duration-2000 
                    text-xl md:text-2xl lg:text-3xl font-bold">{Content.home.text[0]}</h3>
                    <h2 className={`${animated? '': 'translate-y-50 opacity-0'} 
                    transform transition duration-2000 
                    text-3xl md:text-4xl lg:text-6xl font-bold`}> <br />
                        {Content.home.text[1]}
                    </h2>
                    <h1 className={`${animated? '': 'translate-y-30 opacity-0'} flex flex-row transform transition duration-2000 text-sm md:text-4xl text-gray-300 md:mt-5`}>
                        {Content.home.text[2]} <span className=" w-2"></span>
                    <Typewriter  
                        options={{
                        strings: Content.home.typical,
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    </h1>

                    <a href={Content.home.btns.Links[0]}>
                            <button className='bg-[#22C55E] border-2 px-10 py-3 text-xl mt-10 uppercase rounded-lg mx-3.5
                            animate-float hover:bg-emerald-400'>{Content.home.btns.Text[0]}</button>
                    </a>
                    <a   href={Content.home.btns.Links[1]} >
                            <button className='bg-[#22C55E] border-2 px-10 py-3 text-xl mt-10 uppercase rounded-lg   mx-3.5
                            animate-float hover:bg-transparent hover:border-rose-800'>{Content.home.btns.Text[1]}</button>  
                    </a>
                </div>
                 <div className='w-full md:w-1/5'>
                    <div class="scale-[.3] z-50   lg:w-96 lg:scale-100  md:scale-75 md:-translate-y-72 sm:scale-50  md:overflow-visible	   md:translate-x-20   aspect-square"><PCBURN/></div>
                </div>
            </div>

        </div>
    );
}

export default Home;
////                    <img class="object-cover w-96	  aspect-square	-translate-y-52 rounded-full hue-rotate-90  absolute" src={Content.home.img} alt="me"/>
