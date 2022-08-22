import React , { useState } from 'react'
import useThemeSwitcher from './themeswitcher';

import { Link as ScrollLink } from 'react-scroll';

import Content from "../content";
function Nav() {
	    const [activeTheme, setTheme] = useThemeSwitcher();  
      const [active, setActive] = useState(0);
      return (
        <div className="nav_shape font-[Garamond] justify-items-center
        bottom-12 w-max  fixed justify-center block  -translate-x-1/2 items-center   left-2/4 px-3 py-4" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
 <ul className="flex relative">

            {Content.Nav.Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <ScrollLink to={menu.link} smooth={true} key={i}>
                <a className="flex flex-col  " href={menu.link}  onClick={() => setActive(i)} >
                  <span
                    className={`  justify-center  aspect-square	w-7  flex text-xl p-1 cursor-pointer  z-20 duration-2000 ${
                      i === active && " text-zinc-900 bg-lime-100 dark:text-zinc-50 dark:bg-lime-600 rounded-full   "
                    } ${i !== active && " text-violet-500   hover:text-violet-500  "}`}
                  >
                    {menu.icon} 
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? "-translate-y-1 duration-2000 opacity-100  text-black dark:text-white "
                        : "opacity-0 translate-y-4   "
                    } `}
                  >
                    {menu.name}
                  </span>
                </a>
                </ScrollLink>


              </li>
              
            ))}
 
            <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher" 
               className="   text-violet-500  -translate-x-5  text-xl -translate-y-2 hover:text-black hover:dark:text-white  bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer" >
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
 * 					<Link to="/"><div>
                  {activeTheme === 'dark' ? (
                    Content.Nav.lighticon[0] 
                       
                  ) : (
                    Content.Nav.lighticon[1] 
                  )}
              </div>
              </Link>
 */