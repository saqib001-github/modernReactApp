import {navLinks} from '../constants';
import {close,logo,menu} from '../assets';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,i)=>(
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${i=== navLinks.length-1 ? 'mr-0' : 'mr-10'}`} key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img src={toggle ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain'
          onClick={()=>{
            setToggle(prev=> !prev)
          }}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mt-4 my-2 min-w-[140px] rounded-xl sidebar mr-3`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav)=>(
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white  mb-4`} key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
          </div>
        </div>


    </nav>
  )
}

export default Navbar