import React , { useState } from 'react'
import useThemeSwitcher from './themeswitcher';

import { Link as ScrollLink } from 'react-scroll';

import Content from "../content";
function Nav() {
	    const [activeTheme, setTheme] = useThemeSwitcher();  
      const [active, setActive] = useState(0);
      return (
        <div className="  font-[Garamond] justify-items-center 
        bottom-12 max-w-fit     fixed justify-center block  -translate-x-1/2 items-center z-40   left-2/4   "  >
          <ul className="flex relative rounded-3xl p-1 border-emerald-200 border-2  bg-[rgba(255,255,255,.6)] dark:bg-[rgba(0,0,0,.6)]">

            {Content.Nav.Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <ScrollLink to={menu.link} smooth={true} key={i}>
                <a className="flex flex-col  " href={menu.link}  onClick={() => setActive(i)} >
                  <span
                    className={`  justify-center  aspect-square	w-7  flex text-xl p-1 cursor-pointer   duration-2000 ${
                      i === active && " text-zinc-900 bg-lime-100 dark:text-zinc-50 dark:bg-lime-600 rounded-full   "
                    } ${i !== active && " text-violet-500   hover:text-violet-500  "}`}
                  >
                    {menu.icon} 
                  </span>
                  
                </a>
                </ScrollLink>
              </li>
              
            ))}
 
            <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher" 
               className="   text-violet-500   text-xl    translate-y-1 hover:text-black hover:dark:text-white  bg-primary-light dark:bg-ternary-dark shadow-sm rounded-xl cursor-pointer" >
						{activeTheme === 'dark' ? (
							 <h1  >{Content.Nav.lighticon[1]} </h1>
						) : (
							<h1>{Content.Nav.lighticon[0]} </h1>
						)}
					</div>
              
          </ul>
        </div>
      );
    };
export default Nav
/**
 * 	                  <span
                    className={` ${
                      active === i
                        ? " duration-2000 opacity-100  text-black dark:text-white "
                        : "opacity-0    "
                    } `}
                  >
                    {menu.name}
                  </span>
 */