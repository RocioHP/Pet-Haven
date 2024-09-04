import React from 'react'
import Logo from "../assets/img/logoPetHaven.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services & Prices",
    link: "/services",
  },
  {
    title: "Packges",
    link: "/packeges",
  },
  {
    title: "About Us",
    link: "/aboutus",
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };



  return (
    <div className='sticky'>
      <div className='flex justify-around items-center'>
        <img className="h-16 m-4" src={Logo} alt="Pet Haven icon" />
        
        <div className='hidden md:flex md:items-center md:justify-between'>
            {/*navlinks*/}
            <div className='ml-10 flex items-baseline space-x-4'>
                {navlinks.map((link, index) => (
                  <a key={index} className='text-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium' href={link.link}>{link.title}</a>
                ))}
          </div>   
        </div>
        {/*hamburger  button*/}
        <div className='mr-2 flex md:hidden'>
          <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
            <span className='sr-only'>Menu open</span>
            {open == true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
      </div>
      {/*movile menu */}
      {open ? (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navlinks.map((link, index) => (
                  <a key={index} className=' bg-gray-200 text-gray-700 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium ' href={link.link}>{link.title}</a>
                ))};
            </div>
          </div>
        ) : null}
    </div>
  )
}

export default Navbar
