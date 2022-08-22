import React , { useState } from 'react'
import {BiHeartSquare} from 'react-icons/bi'
import {BsInfoSquareFill} from 'react-icons/bs'
import {GiDiceSixFacesSix} from 'react-icons/gi'
import { Link as ScrollLink } from 'react-scroll'

function Nav() {
    const Menus = [
        { name: "Home",link:'logo', icon: <BiHeartSquare/> },
        { name: "About",link:'about', icon: <BsInfoSquareFill/> },
        { name: "Projects",link:'projects', icon: <GiDiceSixFacesSix/>},
 
      ];
      const [active, setActive] = useState(0);
      return (
        <div className="nav_shape justify-items-center
        bottom-12 w-max  fixed justify-center block  -translate-x-1/2 items-center   left-2/4 px-3 py-4" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
 <ul className="flex relative">

            {Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <ScrollLink to={menu.link} smooth={true} key={i}>
                <a className="flex flex-col  " href={menu.link}  onClick={() => setActive(i)} >
                  <span
                    className={`  justify-center  aspect-square	w-7  flex text-xl p-1 cursor-pointer  z-20 duration-2000 ${
                      i === active && " text-zinc-50 rounded-full bg-lime-600  "
                    } ${i !== active && " text-violet-800  hover:text-violet-500  "}`}
                  >
                    {menu.icon} 
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? "-translate-y-1 duration-2000 opacity-100 text-white "
                        : "opacity-0 translate-y-4   "
                    } `}
                  >
                    {menu.name}
                  </span>
                </a>
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default Nav
